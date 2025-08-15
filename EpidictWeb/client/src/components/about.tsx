import { CheckCircle } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "Apr 2025",
      title: "Company Founded",
      description: "Epidict established with initial research funding and core team assembly.",
    },
    {
      year: "Aug 2025",
      title: "Prototype Development",
      description: "Advanced prototype development phase initiated with microneedle sensor technology.",
    },
    {
      year: "2026",
      title: "Clinical Validation",
      description: "Planning preclinical studies and preparing for clinical trial applications.",
    },
    {
      year: "Future",
      title: "FDA Pathway",
      description: "Targeting regulatory pathway development and clinical data collection.",
    },
  ];

  const values = [
    "Innovation through rigorous scientific research",
    "Patient-centered design and accessibility",
    "Transparency in clinical validation",
    "Collaboration with healthcare professionals",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="about-title">
            About Epidict
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Pioneering the future of seizure prevention through innovative neurotransmitter monitoring technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4" data-testid="mission-title">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="mission-text">
              We believe that seizures should never come as a surprise. Our mission is to empower individuals with epilepsy 
              and their families through predictive technology that provides early warning systems, allowing for proactive 
              intervention and improved quality of life.
            </p>

            <h3 className="text-2xl font-semibold text-primary mb-4" data-testid="values-title">
              Our Values
            </h3>
            <ul className="space-y-3 text-gray-600">
              {values.map((value, index) => (
                <li key={index} className="flex items-center" data-testid={`value-${index}`}>
                  <CheckCircle className="text-secondary mr-3 w-5 h-5 flex-shrink-0" />
                  {value}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Biomedical research laboratory"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
        </div>

        {/* Development Timeline */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center" data-testid="timeline-title">
            Development Milestones
          </h3>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6" data-testid={`milestone-${index}`}>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-primary">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
