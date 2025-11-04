import { Shield, Coins, TrendingUp, Wallet } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Shield,
      title: "SECURE",
      description: "A vital ecosystem with a legal covenant",
      number: "01",
    },
    {
      icon: Coins,
      title: "TOKENIZE",
      description: "It into fractional shares (EPA Tokens)",
      number: "02",
    },
    {
      icon: TrendingUp,
      title: "APPRECIATE",
      description: "Token value through verifiable ecological health",
      number: "03",
    },
    {
      icon: Wallet,
      title: "FUND",
      description: "A perpetual Conservation Trust via token sale",
      number: "04",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The ErthaLoka Flywheel
          </h2>
          <p className="text-xl text-muted-foreground">
            A self-sustaining engine for planetary preservation
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto relative z-10">
                      <step.icon size={40} className="text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-20">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {/* Connector Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 text-primary text-4xl z-0">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
