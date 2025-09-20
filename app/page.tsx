import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeatureCard } from "@/components/feature-card";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import Image from "next/image";

const features = [
  "Experienced and trained therapists",
  "Individualized therapy plans",
  "Evidence-based interventions (e.g., ABA, CBT, occupational therapy)",
  "Support for families and caregivers",
  "Collaborative approach with schools and healthcare providers",
  "State-of-the-art facilities and equipment",
];

const services = [
  {
    title: "Autism Therapy",
    description:
      "ABA, occupational therapy, and speech therapy tailored to individual needs.",
  },
  {
    title: "ADHD Coaching & Therapy",
    description:
      "Strategies to enhance focus, executive functioning, and self-regulation.",
  },
  {
    title: "Learning Disability Support",
    description:
      "Academic support and accommodations to improve learning outcomes.",
  },
  {
    title: "Family Counseling & Support",
    description: "Guidance and resources to empower families and caregivers.",
  },
  {
    title: "Social Skills Training",
    description:
      "Structured programs to build communication and social interaction skills.",
  },
  {
    title: "Behavioral Therapy",
    description:
      "Evidence-based interventions to support positive behavioral changes.",
  },
];

const benefits = [
  "Improved communication and social skills",
  "Enhanced academic and cognitive abilities",
  "Increased confidence and self-esteem",
  "Better emotional regulation and behavior management",
  "Supportive community and resources for families",
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />

      <section id="about" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A]">
              About
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#475569]">
              Blessing Therapy Center provides comprehensive therapy and support
              services for individuals with Autism Spectrum Disorder (ASD),
              Attention Deficit Hyperactivity Disorder (ADHD), and Learning
              Disabilities. Our objective is to empower individuals to lead
              fulfilling and independent lives through personalized therapy and
              support.
            </p>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden border">
            <Image
              src="/images/about.png"
              alt="Therapist working with a child in a bright therapy room"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border">
            <Image
              src="/images/features.jpg"
              alt="Occupational therapy tools and sensory equipment"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-[#0F172A]">
            Features
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <FeatureCard key={f} title={f} />
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border">
            <Image
              src="/images/services.jpg"
              alt="Parents and child discussing a therapy plan with a therapist"
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <h2 className="mt-8 text-2xl md:text-3xl font-semibold text-[#0F172A]">
            Services
          </h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A]">
              Benefits
            </h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm text-[#0F172A]"
                >
                  <div
                    aria-hidden
                    className="mt-1 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: "#00BCD4" }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[3/2] rounded-xl overflow-hidden border">
            <Image
              src="/images/benefits.png"
              alt="Smiling child showing positive progress in therapy"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0F172A]">
              Contact Us
            </h2>
            <p className="mt-4 text-sm md:text-base text-[#475569]">
              Address: - shastri chowk,bhosari,pune-39 <br />
              Phone: 9359530468 <br />
              Email: - blessingTherapy@gmail.com
            </p>

            <div className="mt-8 rounded-xl border p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Online Inquiry Form
              </h3>
              <p className="mt-2 text-sm text-[#475569]">
                Please fill the form below and our team will get back to you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>

          <div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border">
              <Image
                src="/images/contact.png"
                alt="Welcoming reception desk at the therapy center"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 rounded-xl border p-6 bg-white">
              <h3 className="text-lg font-semibold text-[#0F172A]">
                Why Choose Us
              </h3>
              <p className="mt-2 text-sm text-[#475569]">
                We deliver individualized, evidence-based care in a
                compassionate environment.
              </p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-[#0F172A]">
                    Personalized plans crafted by experienced therapists.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-[#0F172A]">
                    Collaborative approach with schools and healthcare
                    providers.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <p className="text-sm text-[#0F172A]">
                    Family-centered support and modern facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
