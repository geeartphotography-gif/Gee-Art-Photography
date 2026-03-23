import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main className="pt-48 pb-40 px-8 max-w-[1800px] mx-auto bg-brand-white">
      <SectionHeader
        subtitle="Inquiry"
        title="Start a Project"
        description="We're currently accepting new projects for 2026. Reach out to discuss how we can elevate your brand's visual narrative."
      />
      <div className="max-w-6xl">
        <ContactForm />
      </div>
    </main>
  );
}
