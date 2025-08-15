import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Technology from "@/components/technology";
import Research from "@/components/research";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-epidict-accent overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Technology />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
