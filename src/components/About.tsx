import { Shield, TrendingUp, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "PROTECT",
      description: "Legally shield pristine ecosystems in perpetuity through binding conservation covenants",
    },
    {
      icon: Leaf,
      title: "TOKENISE",
      description: "Fractionalise ecosystems into tradeable digital tokens (EPAs) for liquid ownership",
    },
    {
      icon: TrendingUp,
      title: "VALUE",
      description: "Drive systematic appreciation through verifiable, data-driven ecological health gains",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Making Our Living Planet A Valuable Asset
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            ErthaLoka introduces the world's first liquid ownership model for pristine ecosystems.
            We tokenize planetary health to create a new asset class where preservation becomes more profitable than destruction.
          </p>
          <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-lg text-left my-8">
            <h3 className="font-bold text-lg mb-2">The Crisis We Face</h3>
            <ul className="space-y-2 text-sm">
              <li>• <strong>1 Million species</strong> threatened with extinction</li>
              <li>• <strong>$44 Trillion</strong> of global GDP depends on nature</li>
              <li>• <strong>$0</strong> is the value of a standing forest on traditional balance sheets</li>
              <li>• <strong>$711 Billion</strong> annual conservation funding gap</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-accent/10 px-6 py-3 rounded-full">
            <p className="text-sm font-medium text-foreground">
              <span className="font-bold">CoExIStic:</span> Collaborative | Experimental | Innovative | Self-Sustaining | Holistic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
