import { Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/20 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join Us in Building the First Economy That Grows by Healing
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Where People, Planet & Purpose Thrive Together
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a 
                  href="mailto:connect@erthaloka.com"
                  className="text-primary hover:underline"
                >
                  connect@erthaloka.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="text-primary" size={24} />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a 
                  href="tel:+917829778299"
                  className="text-primary hover:underline"
                >
                  +91 78297 78299
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <div className="text-sm text-muted-foreground">
              <span className="font-bold">CoExIStic:</span> Collaborative | Experimental | Innovative | Self-Sustaining | Holistic
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
