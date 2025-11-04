// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-forest.jpg";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `linear-gradient(135deg, rgba(30, 81, 53, 0.85), rgba(40, 100, 65, 0.75)), url(${heroImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Content */}
//       <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
//             A CoExIStic Ecoverse
//           </h1>
//           <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 font-medium">
//             "We make preservation more profitable than destruction"
//           </p>
//           <p className="text-lg md:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
//             The world's first liquid ownership model for pristine ecosystems through 
//             ErthaLoka Protected Assets (EPAs)
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
//               Explore Projects <ArrowRight className="ml-2" size={20} />
//             </Button>
            
//           </div>

//           {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-primary-foreground">
//             <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
//               <div className="text-3xl font-bold mb-2">300</div>
//               <div className="text-sm uppercase tracking-wide">Acres Protected</div>
//             </div>
//             <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
//               <div className="text-3xl font-bold mb-2">$6.5M</div>
//               <div className="text-sm uppercase tracking-wide">Assets Under Management</div>
//             </div>
//             <div className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-lg">
//               <div className="text-3xl font-bold mb-2">03</div>
//               <div className="text-sm uppercase tracking-wide">Live Projects</div>
//             </div>
//           </div> */}
//           <div className="flex flex-wrap justify-center items-center gap-10 bg-[#4D765D] rounded-3xl p-10 w-fit mx-auto my-20 shadow-md">
//   {/* 1️⃣ Card */}
//   <div
//     className="group relative flex items-center justify-center w-32 h-32 bg-white text-green-900 rounded-2xl transition-all duration-500 ease-in-out hover:w-60 hover:h-60 hover:shadow-xl"
//   >
//     <p className="text-center text-base font-medium transition-all duration-300 group-hover:opacity-0">
//       300 Acres <br /> Under Management
//     </p>

//     <p className="absolute opacity-0 text-center text-sm px-5 leading-relaxed transition-all duration-500 group-hover:opacity-100">
//       160 Acres: Large-scale vetiver deployment for erosion control and soil stabilization.
//     </p>
//   </div>

//   {/* 2️⃣ Card */}
//   <div
//     className="group relative flex items-center justify-center w-32 h-32 bg-white text-green-900 rounded-2xl transition-all duration-500 ease-in-out hover:w-60 hover:h-60 hover:shadow-xl"
//   >
//     <p className="text-center text-base font-medium transition-all duration-300 group-hover:opacity-0">
//       $6.5 Million <br /> Projected AUM
//     </p>

//     <p className="absolute opacity-0 text-center text-sm px-5 leading-relaxed transition-all duration-500 group-hover:opacity-100">
//       100 Acres: Chemical-free regenerative agriculture rebuilding soil health and biodiversity.
//     </p>
//   </div>

//   {/* 3️⃣ Card */}
//   <div
//     className="group relative flex items-center justify-center w-32 h-32 bg-white text-green-900 rounded-2xl transition-all duration-500 ease-in-out hover:w-60 hover:h-60 hover:shadow-xl"
//   >
//     <p className="text-center text-base font-medium transition-all duration-300 group-hover:opacity-0">
//       03 Live <br /> Projects
//     </p>

//     <p className="absolute opacity-0 text-center text-sm px-5 leading-relaxed transition-all duration-500 group-hover:opacity-100">
//       40 Acres: Urban forest improving air quality and reducing heat island effects.
//     </p>
//   </div>
// </div>

          
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//     </section>
//   );
// };

// export default Hero;

// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import heroImage from "@/assets/hero-forestt.png";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#4D765D] text-white">
//       {/* 🌿 Background Image with Gradient */}
//       <div
//         className="absolute inset-0 z-0 animate-bgflow"
//         style={{
//           backgroundImage: `linear-gradient(135deg, rgba(30, 81, 53, 0.88), rgba(40, 100, 65, 0.78)), url(${heroImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           filter: "brightness(1.1) saturate(1.1)",
//         }}
//       ></div>

//       {/* ✨ Animated Glowing Energy Flows */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute top-0 left-0 w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-20 animate-flow" />
//         <div className="absolute bottom-0 right-0 w-[250%] h-[250%] bg-gradient-to-r from-transparent via-teal-200/20 to-transparent opacity-25 animate-flow-delay" />
//       </div>

//       {/* 🌱 Floating Mist Overlay for Depth */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#4D765D]/40 via-transparent to-transparent backdrop-blur-[1px]"></div>

//       {/* 🌿 Main Content */}
//       <div className="relative z-10 text-center px-4 animate-fadein">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//           A CoExIStic Ecoverse
//         </h1>
//         <p className="text-xl md:text-2xl mb-4 font-medium text-white/90">
//           "We make preservation more profitable than destruction"
//         </p>
//         <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/80">
//           The world's first liquid ownership model for pristine ecosystems through{" "}
//           <strong>ErthaLoka Protected Assets (EPAs)</strong>.
//         </p>

//         <Button
//           size="lg"
//           className="bg-white text-green-900 font-semibold hover:bg-white/90 transition"
//         >
//           Explore Projects <ArrowRight className="ml-2" size={20} />
//         </Button>

//         {/* 🌍 Info Cards */}
//         <div className="flex flex-wrap justify-center items-center gap-10 bg-[#4D765D]/90 rounded-3xl p-10 w-fit mx-auto my-20 shadow-lg backdrop-blur-sm">
//           {/* 1️⃣ Card */}
//           <div className="group relative flex items-center justify-center w-32 h-32 bg-white text-green-900 rounded-2xl transition-all duration-500 ease-in-out hover:w-60 hover:h-60 hover:shadow-2xl">
//             <p className="text-center text-base font-medium transition-all duration-300 group-hover:opacity-0">
//               300 Acres <br /> Under Management
//             </p>
//             <p className="absolute opacity-0 text-center text-sm px-5 leading-relaxed transition-all duration-500 group-hover:opacity-100">
//               160 Acres: Large-scale vetiver deployment for erosion control and soil stabilization.
//             </p>
//           </div>

//           {/* 2️⃣ Card */}
//           <div className="group relative flex items-center justify-center w-32 h-32 bg-white text-green-900 rounded-2xl transition-all duration-500 ease-in-out hover:w-60 hover:h-60 hover:shadow-2xl">
//             <p className="text-center text-base font-medium transition-all duration-300 group-hover:opacity-0">
//               $6.5M <br /> Projected AUM
//             </p>
//             <p className="absolute opacity-0 text-center text-sm px-5 leading-relaxed transition-all duration-500 group-hover:opacity-100">
//               100 Acres: Chemical-free regenerative agriculture rebuilding soil health and biodiversity.
//             </p>
//           </div>

//           {/* 3️⃣ Card */}
//           <div className="group relative flex items-center justify-center w-32 h-32 bg-white text-green-900 rounded-2xl transition-all duration-500 ease-in-out hover:w-60 hover:h-60 hover:shadow-2xl">
//             <p className="text-center text-base font-medium transition-all duration-300 group-hover:opacity-0">
//               03 Live <br /> Projects
//             </p>
//             <p className="absolute opacity-0 text-center text-sm px-5 leading-relaxed transition-all duration-500 group-hover:opacity-100">
//               40 Acres: Urban forest improving air quality and reducing heat island effects.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ✨ Animations */}
//       <style>{`
//         @keyframes bgflow {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         @keyframes flow {
//           0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
//           50% { transform: translateX(0%) translateY(0%) rotate(2deg); }
//           100% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
//         }

//         @keyframes flow-delay {
//           0% { transform: translateX(50%) translateY(50%) rotate(0deg); }
//           50% { transform: translateX(0%) translateY(0%) rotate(-2deg); }
//           100% { transform: translateX(50%) translateY(50%) rotate(0deg); }
//         }

//         @keyframes fadein {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .animate-bgflow {
//           animation: bgflow 15s ease-in-out infinite;
//           background-size: 200% 200%;
//         }

//         .animate-flow {
//           animation: flow 18s linear infinite;
//         }

//         .animate-flow-delay {
//           animation: flow-delay 25s linear infinite;
//         }

//         .animate-fadein {
//           animation: fadein 1.5s ease-out forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-forestt.png";
import projectSection from  "../components/projectSection" 

const Hero = () => {
  // 🚀 Scroll smoothly to the projects section
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // 🌬️ Fade-in animation trigger when elements enter viewport
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#4D765D] text-white font-sans">
      {/* 🌄 Dynamic Background */}
      <div
        className="absolute inset-0 z-0 animate-bgflow"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(30, 81, 53, 0.85), rgba(77, 118, 93, 0.65)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(1.15) contrast(1.05)",
        }}
      ></div>

      {/* ✨ Floating Glow Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-[-30%] w-[160%] h-[200%] bg-gradient-to-r from-transparent via-emerald-200/10 to-transparent blur-3xl animate-glow"></div>
        <div className="absolute bottom-1/4 right-[-20%] w-[120%] h-[180%] bg-gradient-to-l from-transparent via-lime-200/10 to-transparent blur-2xl animate-glow-delay"></div>
      </div>

      {/* 🌫️ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4D765D]/70 via-transparent to-transparent backdrop-blur-[2px]" />

      {/* 🌱 Hero Content */}
      <div className="relative z-10 text-center px-6 fade-up">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-emerald-200">
          A CoExIStic Ecoverse
        </h1>

        <p className="text-2xl md:text-3xl mt-6 font-light text-white/90">
          “We make preservation more profitable than destruction.”
        </p>

        <p className="text-lg md:text-xl mt-4 text-white/75 max-w-3xl mx-auto leading-relaxed">
          The world’s first liquid ownership model for pristine ecosystems through{" "}
          <strong className="text-white">ErthaLoka Protected Assets (EPAs)</strong>.
        </p>

        <div className="mt-10 flex justify-center">
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-white/95 text-green-900 font-semibold hover:bg-white transition-all duration-300 rounded-full px-8 py-6 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
          >
            Explore Projects <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      {/* 🌍 Project Stats Cards */}
      <div className="relative z-10 mt-24 mb-10 flex flex-wrap justify-center items-center gap-12 px-8 fade-up">
        {[
          {
            title: "300 Acres",
            subtitle: "Under Management",
            desc: "160 Acres: Large-scale vetiver deployment for erosion control and soil stabilization.",
          },
          {
            title: "$6.5M",
            subtitle: "Projected AUM",
            desc: "100 Acres: Regenerative agriculture rebuilding soil health and biodiversity.",
          },
          {
            title: "300+",
            subtitle: "Community Members",
            desc: "40 Acres: Urban forest improving air quality and reducing heat island effects.",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="group relative w-36 h-36 bg-white/95 text-green-900 rounded-3xl flex items-center justify-center text-center shadow-md transition-all duration-700 ease-out hover:w-64 hover:h-64 hover:shadow-2xl hover:scale-105 backdrop-blur-sm"
          >
            <div className="transition-all duration-500 group-hover:opacity-0">
              <p className="text-2xl font-semibold">{card.title}</p>
              <p className="text-sm">{card.subtitle}</p>
            </div>
            <p className="absolute opacity-0 px-6 text-sm leading-relaxed transition-all duration-700 group-hover:opacity-100">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ✨ Custom Animations */}
      <style>{`
        /* Background animation */
        @keyframes bgflow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glow {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateX(5%) translateY(5%) scale(1.05); opacity: 0.8; }
        }

        @keyframes glow-delay {
          0%, 100% { transform: translateX(0) translateY(0) scale(1); opacity: 0.5; }
          50% { transform: translateX(-5%) translateY(-5%) scale(1.05); opacity: 0.7; }
        }

        .animate-bgflow {
          animation: bgflow 25s ease-in-out infinite;
          background-size: 250% 250%;
        }
        .animate-glow { animation: glow 15s ease-in-out infinite; }
        .animate-glow-delay { animation: glow-delay 20s ease-in-out infinite; }

        /* Scroll-based fade-up */
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Hero;
