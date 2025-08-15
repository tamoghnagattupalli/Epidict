import { ChevronDown, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./particle-background";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen gradient-bg neuron-network flex items-center justify-center relative overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Predict.
            </span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.4s" }}>
              Prevent.
            </span>
            <span className="block animate-slide-up" style={{ animationDelay: "0.6s" }}>
              Protect.
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.8s" }}
            data-testid="hero-subtitle"
          >
            Epidict's cutting-edge monitoring technology anticipates seizures before they happen.
          </p>

          <div className="animate-slide-up" style={{ animationDelay: "1s" }}>
            <Button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              data-testid="hero-cta-button"
            >
              Learn More
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60 w-6 h-6" data-testid="scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
