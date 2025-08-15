import { ExternalLink } from "lucide-react";

export default function Research() {
  const stats = [
    { value: "1-6hrs", label: "Warning Window" },
    { value: "IL-6 + Glutamate", label: "Target Biomarkers" },
    { value: "1-2mm", label: "Sensor Depth" },
    { value: "20sec", label: "Measurement Frequency" },
  ];



  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="research-title">
            Research & Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="research-subtitle">
            Our technology is grounded in comprehensive biomarker research and innovative sensor engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6" data-testid="validation-title">
              Research Foundation
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="validation-description">
              Our technology is based on extensive research into seizure biomarkers. We're currently in the prototype 
              development phase, preparing for preclinical validation studies that will establish our system's efficacy.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                  data-testid={`stat-${index}`}
                >
                  <div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>


          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Clinical research environment"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="research-image"
            />
          </div>
        </div>

        {/* Research Documentation */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center" data-testid="research-docs-title">
            Research Documentation
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-primary" data-testid="biomarker-research-title">
                Biomarker Research
              </h4>

              <div className="bg-white p-6 rounded-lg shadow-sm" data-testid="glutamate-research">
                <h5 className="font-semibold text-gray-800 mb-2">Glutamate Monitoring</h5>
                <p className="text-sm text-gray-600 mb-2">Brain neurotransmitter analysis</p>
                <p className="text-gray-600 text-sm">Shows 1-2 hour increase before seizures with moderate-high reproducibility in focal epilepsy cases.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm" data-testid="il6-research">
                <h5 className="font-semibold text-gray-800 mb-2">IL-6 Inflammatory Marker</h5>
                <p className="text-sm text-gray-600 mb-2">Cytokine detection research</p>
                <p className="text-gray-600 text-sm">Demonstrates 2-6 hour elevation before seizures, particularly in febrile and autoimmune epilepsy.</p>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-primary" data-testid="technology-docs-title">
                Technology Documentation
              </h4>

              <div className="bg-white p-6 rounded-lg shadow-sm" data-testid="sensor-design">
                <h5 className="font-semibold text-gray-800 mb-2">Microneedle Sensor Design</h5>
                <p className="text-sm text-gray-600 mb-2">Engineering specifications</p>
                <p className="text-gray-600 text-sm">1-2mm penetration depth for interstitial fluid access with electrochemical detection capabilities.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm" data-testid="cost-analysis">
                <h5 className="font-semibold text-gray-800 mb-2">Cost Analysis & Manufacturing</h5>
                <p className="text-sm text-gray-600 mb-2">Economic feasibility study</p>
                <p className="text-gray-600 text-sm">Comprehensive analysis of sensor costs ranging $16-$83 per patch with reusable electronics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
