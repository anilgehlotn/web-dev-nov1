import logo from "@/assets/erthaloka-nobg.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="ErthaLoka" className="h-10 w-auto object-contain invert brightness-0" />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-90 mb-2">
              Making preservation more profitable than destruction
            </p>
            <p className="text-xs opacity-75">
              © {new Date().getFullYear()} ErthaLoka. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
