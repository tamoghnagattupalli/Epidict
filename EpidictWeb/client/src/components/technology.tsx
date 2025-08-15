import { Clock, TrendingUp, Brain } from "lucide-react";

export default function Technology() {
  const features = [
    {
      icon: <Clock className="text-secondary text-2xl" />,
      title: "Microneedle Sensors",
      description: "Minimally invasive sensors penetrate skin 1-2mm to access interstitial fluid for continuous monitoring.",
    },
    {
      icon: <TrendingUp className="text-secondary text-2xl" />,
      title: "Dual Biomarker System",
      description: "Monitors IL-6 inflammatory cytokine and glutamate neurotransmitter levels with high sensitivity.",
    },
    {
      icon: <Brain className="text-secondary text-2xl" />,
      title: "Early Warning System",
      description: "Detects seizure precursors 1-6 hours in advance through pattern recognition algorithms.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Sensor Deployment",
      description: "Microneedle patches monitor IL-6 and glutamate in interstitial fluid",
    },
    {
      number: "2",
      title: "Pattern Detection",
      description: "Algorithms identify biomarker elevation patterns indicating seizure onset",
    },
    {
      number: "3",
      title: "Early Warning",
      description: "Alerts provide 1-6 hours advance notice for preventive intervention",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" data-testid="technology-title">
            Our Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="technology-subtitle">
            Advanced neurotransmitter monitoring combined with AI-driven prediction algorithms.
          </p>
        </div>

        {/* Technology Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Advanced medical monitoring device"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="technology-image"
            />

            {/* Technology overlay */}
            <div className="absolute inset-0 bg-primary/80 rounded-xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="text-center text-white p-6">
                <Brain className="w-16 h-16 mb-4 text-secondary mx-auto" />
                <p className="text-lg font-semibold">Continuous Monitoring</p>
                <p className="text-sm">24/7 neurotransmitter detection</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-primary mb-6" data-testid="how-it-works-title">
              How It Works
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed" data-testid="how-it-works-description">
              Our device uses microneedle-based sensors to monitor IL-6 and glutamate levels in interstitial fluid. 
              These neurotransmitters show measurable changes 1-6 hours before seizure onset, enabling early 
              warning capabilities through continuous biosensor monitoring.
            </p>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`step-${index}`}>
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">{step.number}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover"
              data-testid={`feature-${index}`}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
