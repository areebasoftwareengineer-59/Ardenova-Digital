import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustValues } from './components/TrustValues';
import { Services } from './components/Services';
import { WorkPortfolio } from './components/WorkPortfolio';
import { Process } from './components/Process';
import { About } from './components/About';
import { WhyArdenova } from './components/WhyArdenova';
import { InternationalFocus } from './components/InternationalFocus';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [inquiryService, setInquiryService] = useState<string>('');
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setInquiryService(serviceTitle);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      const offset = 70;
      const elementPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      const offset = 70;
      const elementPosition = servicesElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1020] text-[#F6F3EC] flex flex-col selection:bg-[#C7A66A] selection:text-[#0B1020]">
      {/* Top Navigation */}
      <Header onOpenInquiry={() => scrollToContact()} />

      {/* Main Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onStartProject={() => scrollToContact()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Trust & Values (Warm Ivory Canvas) */}
        <TrustValues />

        {/* 3. Services Section (Midnight Navy Canvas) */}
        <Services onSelectServiceForInquiry={(service) => scrollToContact(service)} />

        {/* 4. Selected Work / Concept Demonstrations (White Canvas) */}
        <WorkPortfolio onStartProjectForCase={(title) => scrollToContact(`Architecture modeled after: ${title}`)} />

        {/* 5. How We Work (Process Section) */}
        <Process />

        {/* 6. About Ardenova */}
        <About onDiscussProject={() => scrollToContact()} />

        {/* 7. Why Ardenova (Warm Ivory Canvas) */}
        <WhyArdenova />

        {/* 8. International Client Focus with Live Time Clocks */}
        <InternationalFocus />

        {/* 9. FAQ Section */}
        <FAQ />

        {/* 10. Contact / Project Inquiry */}
        <ContactForm initialService={inquiryService} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setActiveLegalModal('privacy')}
        onOpenTerms={() => setActiveLegalModal('terms')}
        onSelectService={(service) => scrollToContact(service)}
      />

      {/* Legal Modals */}
      <LegalModals
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
