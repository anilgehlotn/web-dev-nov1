// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Linkedin, Mail } from "lucide-react";

// // const Team = () => {
// //   const team = [
// //     {
// //       name: "Ramachandran KP",
// //       role: "Founder",
// //       company: "ErthaLoka, Travellers Tribe & Learning Expedition",
// //       achievements: [
// //         "TOP 400 Ideas (2016) - IIMA",
// //         "TOP 50 Ideas (2016) - IIMC",
// //         "Ex-Accenture, Tesco & C-Cubed Solutions",
// //         "Co-Founder @ Dream Holidays",
// //       ],
// //     },
// //     {
// //       name: "Surya Prakash",
// //       role: "CTO",
// //       company: "ErthaLoka",
// //       achievements: [
// //         "B.Tech - Dayanand Sagar College of Engineering",
// //         "Thought Leader in Blockchain, Design, Web Dev",
// //         "Pre-Incubated (2018) @ IIMB - AIC-PECF NSRCEL",
// //         "Expertise: Cloud Infra, AR/VR, DevOps, AI",
// //       ],
// //     },
// //     {
// //       name: "Dr. Viveka Kalidasan, Ph.D",
// //       role: "Mentor/Advisor",
// //       company: "Founder-CEO",
// //       achievements: [
// //         "NUS Outstanding Young Alumni",
// //         "SG Top 100 Women in Tech",
// //         "DEI in Deeptech Advocate",
// //         "5+ years Industry 5.0 Experience",
// //       ],
// //     },
// //   ];

// //   const support = {
// //     name: "River Venture Studio",
// //     description: "Supported by Enterprise SG",
// //     details: "The world's first and only DeepTech Industry 5.0 Incubator-accelerator based in Singapore. Empowering global startups inclusively.",
// //   };

// //   return (
// //     <section id="team" className="py-20 bg-background">
// //       <div className="container mx-auto px-4">
// //         <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
// //           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
// //             Our Team & Support
// //           </h2>
// //           <p className="text-xl text-muted-foreground">
// //             Led by experienced entrepreneurs and backed by industry leaders
// //           </p>
// //         </div>

// //         {/* Team Members */}
// //         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
// //           {team.map((member, index) => (
// //             <Card 
// //               key={index}
// //               className="hover:shadow-lg transition-all duration-300 animate-fade-in"
// //               style={{ animationDelay: `${index * 0.1}s` }}
// //             >
// //               <CardHeader>
// //                 <CardTitle className="text-xl">{member.name}</CardTitle>
// //                 <CardDescription className="text-base">
// //                   <div className="font-semibold text-primary">{member.role}</div>
// //                   <div className="text-sm mt-1">{member.company}</div>
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <ul className="space-y-2 text-sm text-muted-foreground">
// //                   {member.achievements.map((achievement, i) => (
// //                     <li key={i} className="flex items-start">
// //                       <span className="text-primary mr-2">•</span>
// //                       {achievement}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>

// //         {/* Support Organization */}
// //         <div className="max-w-3xl mx-auto">
// //           <Card className="bg-primary/5 border-primary/30 animate-fade-in">
// //             <CardHeader>
// //               <div className="text-center">
// //                 <CardTitle className="text-2xl mb-2">{support.name}</CardTitle>
// //                 <CardDescription className="text-base">
// //                   <Badge className="bg-accent">{support.description}</Badge>
// //                 </CardDescription>
// //               </div>
// //             </CardHeader>
// //             <CardContent>
// //               <p className="text-center text-muted-foreground">{support.details}</p>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Team;

// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Team = () => {
//   const partners = [
//     { name: "River Venture Studio", role: "Innovation Hub - Singapore", location: "Singapore" },
//     { name: "AIC-PECF", role: "Atal Incubation Centre", location: "Puducherry" },
//     { name: "T-Hub", role: "Ecosystem Partner", location: "Hyderabad" },
//     { name: "EICF", role: "European Indian Cooperation Forum", location: "International" },
//     { name: "Pondy Friends", role: "Community Partner", location: "Puducherry" },
//   ];

//   return (
//     <section
//       id="team"
//       className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900 overflow-hidden"
//     >
//       {/* Subtle floating gradient circles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           custom={0}
//           variants={fadeUp}
//         >
//           <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-800 bg-clip-text text-transparent">
//             World-Class Support System
//           </h2>
//           <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//             Backed by industry leaders, accelerators, and incubators driving innovation in sustainability and technology.
//           </p>
//         </motion.div>

//         {/* Key Members */}
//         <div className="grid md:grid-cols-3 gap-10 mb-28">
//           {/* Dr. Viveka */}
//           <motion.div
//             custom={0.1}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <Card className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold">Dr. Viveka Kalidasan, PhD</CardTitle>
//                 <CardDescription className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
//                   Mentor / Advisor
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 mb-4 font-medium">
//                   Founder-CEO | River Venture Studio Global
//                 </p>
//                 <ul className="text-gray-600 text-sm space-y-2">
//                   <li>• Thought Leader in Industry 5.0/4.0</li>
//                   <li>• Deeptech Venture Builder (AI/ML)</li>
//                   <li>• MIT 35 Innovators Under 35</li>
//                   <li>• SG Top 100 Women in Tech</li>
//                   <li>• NUS Outstanding Young Alumni</li>
//                   <li>• DEI in Deeptech</li>
//                 </ul>
//                 <Button className="mt-6 w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-full">
//                   Learn More →
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Accelerator */}
//           <motion.div
//             custom={0.2}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <Card className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold">River Venture Studio</CardTitle>
//                 <CardDescription className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
//                   Accelerator
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="text-gray-600 text-sm space-y-2">
//                   <li>• Supported by Enterprise SG</li>
//                   <li>• World's first DeepTech Industry 5.0 Incubator-accelerator</li>
//                   <li>• Based in Singapore</li>
//                   <li>• Empowering global startups inclusively</li>
//                   <li>• Enterprise Singapore Backed</li>
//                   <li>• Global Innovation Hub</li>
//                   <li>• Industry 5.0 Pioneer</li>
//                 </ul>
//                 <Button className="mt-6 w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-full">
//                   Learn More →
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Incubator */}
//           <motion.div
//             custom={0.3}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <Card className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold">AIC - PECF</CardTitle>
//                 <CardDescription className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
//                   Incubator
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="text-gray-600 text-sm space-y-2">
//                   <li>• Atal Incubation Centre - Puducherry</li>
//                   <li>• Engineering College Foundation</li>
//                   <li>• Ecosystem Enabler in Puducherry</li>
//                   <li>• Supported by CEFP</li>
//                   <li>• Govt. of India Initiative</li>
//                   <li>• Innovation & Startup Hub</li>
//                 </ul>
//                 <Button className="mt-6 w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-full">
//                   Learn More →
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>

//         {/* Support Section */}
//         <motion.div
//           custom={0.4}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center mb-24"
//         >
//           <h3 className="text-2xl font-semibold mb-4 text-gray-800">
//             Also Supported By
//           </h3>
//           <p className="text-gray-500 text-lg">
//             Enterprise Singapore • CEFP Puducherry • EICF • T-Hub
//           </p>
//         </motion.div>

//         {/* Partners */}
//         <motion.div
//           custom={0.5}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center max-w-5xl mx-auto mb-24"
//         >
//           <h3 className="text-4xl font-bold mb-6">Our Partners</h3>
//           <p className="text-gray-600 mb-10">
//             Working alongside visionary organizations to build a transparent, decentralized, and regenerative ecosystem.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {partners.map((p, i) => (
//               <motion.div
//                 key={i}
//                 custom={i * 0.1}
//                 variants={fadeUp}
//                 className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
//               >
//                 <h4 className="font-semibold text-lg mb-1">{p.name}</h4>
//                 <p className="text-gray-500 text-sm">{p.role}</p>
//                 <p className="text-gray-400 text-xs mt-1">{p.location}</p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex justify-center gap-12 mt-12 text-gray-700">
//             <div>
//               <h4 className="text-3xl font-bold">5+</h4>
//               <p>Strategic Partners</p>
//             </div>
//             <div>
//               <h4 className="text-3xl font-bold">3</h4>
//               <p>Countries</p>
//             </div>
//             <div>
//               <h4 className="text-3xl font-bold">10+</h4>
//               <p>Joint Projects</p>
//             </div>
//           </div>

//           <Button className="mt-10 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-10 py-6 text-lg">
//             Become a Partner
//           </Button>
//         </motion.div>

//         {/* Connect Section */}
//         <motion.div
//           custom={0.6}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <h3 className="text-4xl font-bold mb-4">Ready to Connect?</h3>
//           <p className="text-gray-600 mb-8 text-lg">
//             Join the regenerative revolution. Get in touch with our team and discover how you can contribute to a sustainable future.
//           </p>

//           <div className="space-y-3 text-gray-700">
//             <p><strong>Email:</strong> erthaloka@gmail.com | connect@erthaloka.com</p>
//             <p><strong>Call:</strong> +91 78297 78299</p>
//             <p>
//               <strong>Visit:</strong> MDR 1115, Kaatu Medu Veedhi, Auroville, Kuilapalayam,
//               Bommayapalayam, Tamil Nadu 605101
//             </p>
//           </div>

//           <Button className="mt-10 bg-black hover:bg-gray-800 text-white rounded-full px-12 py-6 text-lg">
//             Join Our Community
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Team;
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// import vetiverImage from "@/assets/vetiver-project.jpg";
// import agricultureImage from "@/assets/regenerative.jpg";
// import forestImage from "@/assets/urban-forest.jpg";

// export default function ProjectsSection() {
//   const projects = [
//     {
//       title: "Vetiver Deployment",
//       image: vetiverImage,
//       description:
//         "Large-scale vetiver deployment for erosion control and soil stabilization, protecting watersheds and improving soil health.",
//       area: "160 Acres",
//       link: "#",
//     },
//     {
//       title: "Regenerative Agriculture",
//       image: agricultureImage,
//       description:
//         "Chemical-free regenerative agriculture actively rebuilding soil health, sequestering carbon, and restoring biodiversity.",
//       area: "100 Acres",
//       link: "#",
//     },
//     {
//       title: "Urban Forest",
//       image: forestImage,
//       description:
//         "Urban forest improving air quality, reducing heat island effects, and providing essential green infrastructure in cities.",
//       area: "40 Acres",
//       link: "#",
//     },
//   ];

//   const partners = [
//     "/assets/partner1.svg",
//     "/assets/partner2.svg",
//     "/assets/partner3.svg",
//     "/assets/partner4.svg",
//     "/assets/partner5.svg",
//   ];

//   return (
//     <section className="w-full bg-[#f5f5f7] py-24 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6"
//         >
//           Our Active Regenerative Projects
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-gray-600 text-lg md:text-xl mb-16"
//         >
//           Restoring balance between humanity and nature through blockchain-powered transparency.
//         </motion.p>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1, delay: index * 0.2 }}
//               whileHover={{ scale: 1.03 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden bg-white rounded-2xl shadow-xl border-none hover:shadow-2xl transition-all duration-500">
//                 <CardHeader className="p-0">
//                   <motion.img
//                     src={project.image}
//                     alt={project.title}
//                     className="h-56 w-full object-cover"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.6 }}
//                   />
//                 </CardHeader>
//                 <CardContent className="p-6 text-left flex flex-col justify-between h-64">
//                   <div>
//                     <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
//                       {project.title}
//                     </CardTitle>
//                     <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                       {project.description}
//                     </p>
//                     <p className="text-sm font-medium text-green-700 mb-4">
//                       {project.area}
//                     </p>
//                   </div>
//                   <Button
//                     className="bg-[#4d765d] text-white rounded-full hover:bg-[#3a5d48] transition-all duration-300"
//                     onClick={() => window.open(project.link, "_blank")}
//                   >
//                     Learn More
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         {/* Partner Logos Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-28"
//         >
//           <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
//             Our Partners
//           </h3>

//           <div className="relative w-full overflow-hidden">
//             <motion.div
//               className="flex gap-16 items-center justify-center"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 18,
//                 ease: "linear",
//               }}
//             >
//               {[...partners, ...partners].map((logo, index) => (
//                 <motion.img
//                   key={index}
//                   src={logo}
//                   alt={`Partner ${index + 1}`}
//                   className="h-12 md:h-14 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
//                   whileHover={{ scale: 1.1 }}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// function PartnersSection() {
//   const partners = [
//     "/assets/partner1.svg",
//     "/assets/partner2.svg",
//     "/assets/partner3.svg",
//     "/assets/partner4.svg",
//     "/assets/partner5.svg",
//   ];

//   return (
//     <section className="w-full bg-[#f5f5f7] py-24 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-semibold text-gray-900 mb-12"
//         >
//           Our Partners
//         </motion.h2>

//         {/* Scrolling Partner Logos */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           viewport={{ once: true }}
//           className="relative w-full overflow-hidden"
//         >
//           <motion.div
//             className="flex gap-16 items-center justify-center"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: 20,
//               ease: "linear",
//             }}
//           >
//             {[...partners, ...partners].map((logo, index) => (
//               <motion.img
//                 key={index}
//                 src={logo}
//                 alt={`Partner ${index + 1}`}
//                 className="h-14 md:h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
//                 whileHover={{ scale: 1.1 }}
//               />
//             ))}
//           </motion.div>

//           {/* Fade gradient edges for Apple-style look */}
//           <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#f5f5f7] to-transparent pointer-events-none" />
//           <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#f5f5f7] to-transparent pointer-events-none" />
//         </motion.div>

//         {/* Optional subtitle */}
//         <p className="text-gray-500 mt-12 text-lg">
//           Together, we’re regenerating the planet — one project at a time.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default PartnersSection;


// import { motion } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Team = () => {
//   const partners = [
//     { name: "River Venture Studio", role: "Innovation Hub - Singapore", location: "Singapore" },
//     { name: "AIC-PECF", role: "Atal Incubation Centre", location: "Puducherry" },
//     { name: "T-Hub", role: "Ecosystem Partner", location: "Hyderabad" },
//     { name: "EICF", role: "European Indian Cooperation Forum", location: "International" },
//     { name: "Pondy Friends", role: "Community Partner", location: "Puducherry" },
//   ];

//   return (
//     <section
//       id="team"
//       className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900 overflow-hidden"
//     >
//       {/* Subtle floating gradient circles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         {/* Header */}
//         <motion.div
//           className="text-center max-w-3xl mx-auto mb-20"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           custom={0}
//           variants={fadeUp}
//         >
//           <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-800 bg-clip-text text-transparent">
//             World-Class Support System
//           </h2>
//           <p className="mt-6 text-lg text-gray-600 leading-relaxed">
//             Backed by industry leaders, accelerators, and incubators driving innovation in sustainability and technology.
//           </p>
//         </motion.div>

//         {/* Key Members */}
//         <div className="grid md:grid-cols-3 gap-10 mb-28">
//           {/* Dr. Viveka */}
//           <motion.div
//             custom={0.1}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <Card className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold">Dr. Viveka Kalidasan, PhD</CardTitle>
//                 <CardDescription className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
//                   Mentor / Advisor
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 mb-4 font-medium">
//                   Founder-CEO | River Venture Studio Global
//                 </p>
//                 <ul className="text-gray-600 text-sm space-y-2">
//                   <li>• Thought Leader in Industry 5.0/4.0</li>
//                   <li>• Deeptech Venture Builder (AI/ML)</li>
//                   <li>• MIT 35 Innovators Under 35</li>
//                   <li>• SG Top 100 Women in Tech</li>
//                   <li>• NUS Outstanding Young Alumni</li>
//                   <li>• DEI in Deeptech</li>
//                 </ul>
//                 <Button className="mt-6 w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-full">
//                   Learn More →
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Accelerator */}
//           <motion.div
//             custom={0.2}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <Card className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold">River Venture Studio</CardTitle>
//                 <CardDescription className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
//                   Accelerator
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="text-gray-600 text-sm space-y-2">
//                   <li>• Supported by Enterprise SG</li>
//                   <li>• World's first DeepTech Industry 5.0 Incubator-accelerator</li>
//                   <li>• Based in Singapore</li>
//                   <li>• Empowering global startups inclusively</li>
//                   <li>• Enterprise Singapore Backed</li>
//                   <li>• Global Innovation Hub</li>
//                   <li>• Industry 5.0 Pioneer</li>
//                 </ul>
//                 <Button className="mt-6 w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-full">
//                   Learn More →
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* Incubator */}
//           <motion.div
//             custom={0.3}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <Card className="group bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-semibold">AIC - PECF</CardTitle>
//                 <CardDescription className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
//                   Incubator
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ul className="text-gray-600 text-sm space-y-2">
//                   <li>• Atal Incubation Centre - Puducherry</li>
//                   <li>• Engineering College Foundation</li>
//                   <li>• Ecosystem Enabler in Puducherry</li>
//                   <li>• Supported by CEFP</li>
//                   <li>• Govt. of India Initiative</li>
//                   <li>• Innovation & Startup Hub</li>
//                 </ul>
//                 <Button className="mt-6 w-full bg-emerald-700 hover:bg-emerald-800 text-white rounded-full">
//                   Learn More →
//                 </Button>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>

//         {/* Support Section */}
//         <motion.div
//           custom={0.4}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center mb-24"
//         >
//           <h3 className="text-2xl font-semibold mb-4 text-gray-800">Also Supported By</h3>
//           <p className="text-gray-500 text-lg">
//             Enterprise Singapore • CEFP Puducherry • EICF • T-Hub
//           </p>
//         </motion.div>

//         {/* Partners */}
//         <motion.div
//           custom={0.5}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center max-w-5xl mx-auto mb-24"
//         >
//           <h3 className="text-4xl font-bold mb-6">Our Partners</h3>
//           <p className="text-gray-600 mb-10">
//             Working alongside visionary organizations to build a transparent, decentralized, and regenerative ecosystem.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             {partners.map((p, i) => (
//               <motion.div
//                 key={i}
//                 custom={i * 0.1}
//                 variants={fadeUp}
//                 className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
//               >
//                 <h4 className="font-semibold text-lg mb-1">{p.name}</h4>
//                 <p className="text-gray-500 text-sm">{p.role}</p>
//                 <p className="text-gray-400 text-xs mt-1">{p.location}</p>
//               </motion.div>
//             ))}
//           </div>

//           <div className="flex justify-center gap-12 mt-12 text-gray-700">
//             <div>
//               <h4 className="text-3xl font-bold">5+</h4>
//               <p>Strategic Partners</p>
//             </div>
//             <div>
//               <h4 className="text-3xl font-bold">3</h4>
//               <p>Countries</p>
//             </div>
//             <div>
//               <h4 className="text-3xl font-bold">10+</h4>
//               <p>Joint Projects</p>
//             </div>
//           </div>

//           <Button className="mt-10 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-10 py-6 text-lg">
//             Become a Partner
//           </Button>
//         </motion.div>

//         {/* Connect Section */}
//         <motion.div
//           custom={0.6}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <h3 className="text-4xl font-bold mb-4">Ready to Connect?</h3>
//           <p className="text-gray-600 mb-8 text-lg">
//             Join the regenerative revolution. Get in touch with our team and discover how you can contribute to a sustainable future.
//           </p>

//           <div className="space-y-3 text-gray-700">
//             <p><strong>Email:</strong> erthaloka@gmail.com | connect@erthaloka.com</p>
//             <p><strong>Call:</strong> +91 78297 78299</p>
//             <p>
//               <strong>Visit:</strong> MDR 1115, Kaatu Medu Veedhi, Auroville, Kuilapalayam, Bommayapalayam, Tamil Nadu 605101
//             </p>
//           </div>

//           <Button className="mt-10 bg-black hover:bg-gray-800 text-white rounded-full px-12 py-6 text-lg">
//             Join Our Community
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Team;

import { motion, Variants } from "framer-motion";
import { useMemo, memo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import partner1 from "@/assets/rvs.jpeg";
import partner2 from "@/assets/partner2.svg";
import partner3 from "@/assets/partner3.svg";
import partner4 from "@/assets/partner4.svg";
import partner5 from "@/assets/partner5.svg";
import partner6 from "@/assets/partner6.svg";
import partner7 from "@/assets/partner7.png";
import mentorImage from "@/assets/mentor.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const PARTNERS_DATA = [
  { name: "River Venture Studio", role: "Innovation Hub - Singapore", logo: partner1 },
  { name: "AIC-PECF", role: "Atal Incubation Centre", logo: partner2 },
  { name: "T-Hub", role: "Ecosystem Partner", logo: partner3 },
  { name: "EICF", role: "European Indian Cooperation Forum", logo: partner4 },
  { name: "Pondy Friends", role: "Community Partner", logo: partner5 },
  { name: "Annapradokshana Charitable Trust", role: "Partner", logo: partner6 },
  { name: "DS Groups", role: "Partner", logo: partner7 },
] as const;

const TEAM_CARDS_DATA = [
  {
    title: "Dr. Viveka Kalidasan, PhD",
    role: "Mentor / Advisor",
    image: mentorImage,
    details: [
      "Founder-CEO | River Venture Studio Global",
      "Thought Leader in Industry 5.0/4.0",
      "Deeptech Venture Builder (AI/ML)",
      "MIT 35 Innovators Under 35",
      "SG Top 100 Women in Tech",
      "NUS Outstanding Young Alumni",
    ],
  },
  {
    title: "River Venture Studio",
    role: "Accelerator",
    image: partner1,
    details: [
      "Supported by Enterprise SG",
      "World's first DeepTech Industry 5.0 Accelerator",
      "Based in Singapore",
      "Empowering global startups inclusively",
      "Global Innovation Hub",
    ],
  },
  {
    title: "AIC - PECF",
    role: "Incubator",
    image: partner2,
    details: [
      "Atal Incubation Centre - Puducherry",
      "Engineering College Foundation",
      "Govt. of India Initiative",
      "Innovation & Startup Hub",
      "Ecosystem Enabler in Puducherry",
    ],
  },
] as const;

const STATS_DATA = [
  { value: "5+", label: "Strategic Partners" },
  { value: "3", label: "Countries" },
  { value: "10+", label: "Joint Projects" }
] as const;

const TeamCard = memo(({ card, index }: { card: typeof TEAM_CARDS_DATA[number], index: number }) => (
  <motion.div
    key={card.title}
    custom={index * 0.1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
  >
    <Card className="group flex flex-col items-center h-full bg-white/70 backdrop-blur-xl border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl pt-8">
      {/* Image Section */}
      <div className="relative w-40 h-40 mb-6">
        <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-100">
          <motion.img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <CardDescription className="text-xs uppercase tracking-wide bg-emerald-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
            {card.role}
          </CardDescription>
        </div>
      </div>
      
      {/* Content Section */}
      <CardHeader className="pb-3 text-center">
        <CardTitle className="text-xl font-semibold text-gray-900">{card.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-between flex-grow">
        <ul className="text-gray-600 text-sm space-y-2 mb-6">
          {card.details.map((d, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-emerald-600 mr-2 font-bold">•</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-auto w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300">
          Learn More →
        </Button>
      </CardContent>
    </Card>
  </motion.div>
));
TeamCard.displayName = 'TeamCard';

const PartnerCard = memo(({ partner, index }: { partner: typeof PARTNERS_DATA[number], index: number }) => (
  <motion.div
    key={`${partner.name}-${index}`}
    className="flex-shrink-0 w-56 h-64 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
    style={{ willChange: 'transform' }}
  >
    <div className="h-36 bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center p-4">
      <div className="w-28 h-28 rounded-full bg-white shadow-inner border border-gray-100 overflow-hidden flex items-center justify-center p-0">
        <img
          src={partner.logo}
          alt={partner.name}
          className="min-w-full min-h-full w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
          style={{ transform: 'scale(1.1)' }}
        />
      </div>
    </div>
    <div className="p-4 text-center">
      <h3 className="text-base font-semibold text-gray-800 mb-1">{partner.name}</h3>
      <p className="text-xs text-emerald-600 font-medium">{partner.role}</p>
    </div>
  </motion.div>
));
PartnerCard.displayName = 'PartnerCard';

const StatCard = memo(({ stat, index }: { stat: typeof STATS_DATA[number], index: number }) => (
  <motion.div
    key={stat.label}
    custom={index * 0.1}
    variants={fadeUp}
    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
    whileHover={{ y: -5 }}
    style={{ willChange: 'transform' }}
  >
    <h3 className="text-5xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-400 bg-clip-text text-transparent mb-2">
      {stat.value}
    </h3>
    <p className="text-gray-600 font-medium">{stat.label}</p>
  </motion.div>
));
StatCard.displayName = 'StatCard';

const Team = () => {
  const duplicatedPartners = useMemo(() => [...PARTNERS_DATA, ...PARTNERS_DATA], []);

  return (
    <section
      id="team"
      className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-800 bg-clip-text text-transparent">
            World-Class Support System
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Backed by industry leaders, accelerators, and incubators driving innovation in sustainability and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-28">
          {TEAM_CARDS_DATA.map((card, i) => (
            <TeamCard key={card.title} card={card} index={i} />
          ))}
        </div>

      <motion.div
        custom={0.5}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-emerald-700 to-gray-800 bg-clip-text text-transparent mb-4 leading-tight pb-2">
            Strategic Partners
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Collaborating with visionary organizations to build a transparent, decentralized, and regenerative ecosystem.
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-8 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{ willChange: 'transform' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <PartnerCard key={`${partner.name}-${index}`} partner={partner} index={index} />
            ))}
          </motion.div>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {STATS_DATA.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
        <motion.div 
          className="text-center mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Ready to join our network of strategic partners?
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Partner with us to drive innovation, sustainability, and positive impact across industries.
            Let's build the future together.
          </p>
          <Button 
            className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            size="lg"
          >
            Become a Partner →
          </Button>
        </motion.div>
      </motion.div> 

        {/* Connect Section */}
        <motion.div
          custom={0.6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          {/* <h3 className="text-4xl font-bold mb-4">Ready to Connect?</h3> */}
          {/* <p className="text-gray-600 mb-8 text-lg">
            Join the regenerative revolution. Get in touch with our team and discover how you can contribute to a sustainable future.
          </p> */}

          {/* <div className="space-y-3 text-gray-700">
            <p><strong>Email:</strong> erthaloka@gmail.com | connect@erthaloka.com</p>
            <p><strong>Call:</strong> +91 78297 78299</p>
            <p>
              <strong>Visit:</strong> MDR 1115, Kaatu Medu Veedhi, Auroville, Kuilapalayam,
              Bommayapalayam, Tamil Nadu 605101
            </p>
          </div> */}

          {/* <Button className="mt-10 bg-black hover:bg-gray-800 text-white rounded-full px-12 py-6 text-lg">
            Join Our Community
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
