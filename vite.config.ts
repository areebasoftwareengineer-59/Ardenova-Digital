import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';

function imageSavePlugin(): Plugin {
  return {
    name: 'image-save-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-thumbnail', (req: any, res: any) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk: any) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const { projectId, dataUrl } = JSON.parse(body);
              if (projectId && dataUrl) {
                const matches = dataUrl.match(/^data:image\/([A-Za-z-+\/]+);base64,(.+)$/);
                if (matches) {
                  const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
                  const buffer = Buffer.from(matches[2], 'base64');
                  const dir = path.resolve(process.cwd(), 'src/assets/images');
                  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
                  const filename = `project_${projectId}_saved.${ext}`;
                  fs.writeFileSync(path.join(dir, filename), buffer);

                  // Update savedThumbnails.json
                  const jsonFile = path.resolve(process.cwd(), 'src/data/savedThumbnails.json');
                  let existing: Record<string, string> = {};
                  if (fs.existsSync(jsonFile)) {
                    try {
                      existing = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
                    } catch {}
                  }
                  existing[projectId] = `/src/assets/images/${filename}`;
                  fs.writeFileSync(jsonFile, JSON.stringify(existing, null, 2));

                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: `/src/assets/images/${filename}` }));
                  return;
                }
              }
            } catch (err) {
              console.error('Save thumbnail error:', err);
            }
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to process image' }));
          });
        } else {
          res.writeHead(404).end();
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), imageSavePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
