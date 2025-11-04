// import { Calendar, Users, MapPin } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const Events = () => {
//   const pastEvents = [
//     {
//       title: "Climate Tech Summit 2024",
//       date: "March 2024",
//       location: "Singapore",
//       type: "Conference",
//       description: "Presented ErthaLoka's EPA tokenization model to 500+ investors and climate tech leaders.",
//       attendees: "500+",
//     },
//     {
//       title: "Conservation Finance Workshop",
//       date: "February 2024",
//       location: "Puducherry, India",
//       type: "Workshop",
//       description: "Hands-on workshop on innovative conservation financing mechanisms with NGO partners.",
//       attendees: "75",
//     },
//     {
//       title: "Blockchain for Nature Hackathon",
//       date: "January 2024",
//       location: "Virtual",
//       type: "Hackathon",
//       description: "Co-organized hackathon exploring Web3 solutions for environmental conservation.",
//       attendees: "200+",
//     },
//   ];

//   const upcomingEvents = [
//     {
//       title: "EPA Launch Event",
//       date: "Coming Soon",
//       location: "TBA",
//       type: "Launch",
//       description: "Official launch of our first EPA token with live ecosystem verification demo.",
//     },
//     {
//       title: "Regenerative Agriculture Masterclass",
//       date: "Q2 2025",
//       location: "Puducherry, India",
//       type: "Workshop",
//       description: "Learn about chemical-free farming techniques and carbon sequestration practices.",
//     },
//   ];

//   return (
//     <section id="events" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//             Events & Workshops
//           </h2>
//           <p className="text-xl text-muted-foreground">
//             Building a global community for planetary preservation
//           </p>
//         </div>

//         {/* Upcoming Events */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-bold mb-8 text-foreground">Upcoming Events</h3>
//           <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
//             {upcomingEvents.map((event, index) => (
//               <Card 
//                 key={index}
//                 className="border-primary/30 hover:border-primary transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardHeader>
//                   <div className="flex justify-between items-start mb-2">
//                     <Badge className="bg-accent">{event.type}</Badge>
//                     <Badge variant="outline" className="border-primary text-primary">
//                       {event.date}
//                     </Badge>
//                   </div>
//                   <CardTitle className="text-xl">{event.title}</CardTitle>
//                   <CardDescription className="flex items-center gap-2 text-base mt-2">
//                     <MapPin size={16} />
//                     {event.location}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{event.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>

//         {/* Past Events */}
//         <div>
//           <h3 className="text-2xl font-bold mb-8 text-foreground">Past Events</h3>
//           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             {pastEvents.map((event, index) => (
//               <Card 
//                 key={index}
//                 className="hover:shadow-lg transition-all duration-300 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardHeader>
//                   <Badge className="w-fit mb-2">{event.type}</Badge>
//                   <CardTitle className="text-lg">{event.title}</CardTitle>
//                   <CardDescription className="space-y-1">
//                     <div className="flex items-center gap-2">
//                       <Calendar size={14} />
//                       {event.date}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <MapPin size={14} />
//                       {event.location}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Users size={14} />
//                       {event.attendees} attendees
//                     </div>
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm text-muted-foreground">{event.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
// import { motion } from "framer-motion";
// import { Calendar, Users, MapPin } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// // Animation variants
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Events = () => {
//   const pastEvents = [
//     {
//       title: "Climate Tech Summit 2024",
//       date: "March 2024",
//       location: "Singapore",
//       type: "Conference",
//       attendees: "500+",
//       description: "Presented ErthaLoka's EPA tokenization model to 500+ investors and climate tech leaders.",
//       image: "/images/climate-tech.jpg", // Replace with your image
//     },
//     {
//       title: "Conservation Finance Workshop",
//       date: "February 2024",
//       location: "Puducherry, India",
//       type: "Workshop",
//       attendees: "75",
//       description: "Hands-on workshop on innovative conservation financing mechanisms with NGO partners.",
//       image: "/images/conservation.jpg",
//     },
//     {
//       title: "Blockchain for Nature Hackathon",
//       date: "January 2024",
//       location: "Virtual",
//       type: "Hackathon",
//       attendees: "200+",
//       description: "Co-organized hackathon exploring Web3 solutions for environmental conservation.",
//       image: "/images/hackathon.jpg",
//     },
//   ];

//   const upcomingEvents = [
//     {
//       title: "EPA Launch Event",
//       date: "Coming Soon",
//       location: "TBA",
//       type: "Launch",
//       description: "Official launch of our first EPA token with live ecosystem verification demo.",
//       image: "/images/launch.jpg",
//     },
//     {
//       title: "Regenerative Agriculture Masterclass",
//       date: "Q2 2025",
//       location: "Puducherry, India",
//       type: "Workshop",
//       description: "Learn about chemical-free farming techniques and carbon sequestration practices.",
//       image: "/images/agriculture.jpg",
//     },
//   ];

//   return (
//     <section id="events" className="relative overflow-hidden bg-black text-white py-24">
//       {/* Soft background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 opacity-90" />

//       <div className="relative z-10 container mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
//             Events & Workshops
//           </h2>
//           <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             Connecting innovators, conservationists, and investors shaping the planet’s future.
//           </p>
//         </motion.div>

//         {/* Upcoming Events */}
//         <div className="mb-24">
//           <motion.h3
//             className="text-2xl font-semibold mb-10 text-gray-300 uppercase tracking-widest"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Upcoming Events
//           </motion.h3>

//           <div className="grid md:grid-cols-2 gap-10">
//             {upcomingEvents.map((event, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//               >
//                 <Card className="bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
//                   <div className="relative group">
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="w-full h-56 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                     <Badge className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs uppercase">
//                       {event.type}
//                     </Badge>
//                   </div>
//                   <CardHeader>
//                     <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
//                     <CardDescription className="flex items-center gap-2 text-gray-400 mt-2">
//                       <MapPin size={16} /> {event.location}
//                     </CardDescription>
//                     <CardDescription className="text-sm text-gray-500">{event.date}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-gray-400">{event.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Past Events */}
//         <div>
//           <motion.h3
//             className="text-2xl font-semibold mb-10 text-gray-300 uppercase tracking-widest"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Past Events
//           </motion.h3>

//           <div className="grid md:grid-cols-3 gap-8">
//             {pastEvents.map((event, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//               >
//                 <Card className="bg-neutral-900/70 backdrop-blur-xl border border-neutral-800 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
//                   <div className="relative group">
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
//                     <Badge className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-xs uppercase">
//                       {event.type}
//                     </Badge>
//                   </div>
//                   <CardHeader>
//                     <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
//                     <CardDescription className="space-y-1 text-gray-400 mt-2">
//                       <div className="flex items-center gap-2">
//                         <Calendar size={14} /> {event.date}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <MapPin size={14} /> {event.location}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Users size={14} /> {event.attendees} attendees
//                       </div>
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-sm text-gray-500">{event.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
// import { motion } from "framer-motion";
// import { Calendar, Users, MapPin } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Events = () => {
//   const pastEvents = [
//     {
//       title: "Climate Tech Summit 2024",
//       date: "March 2024",
//       location: "Singapore",
//       type: "Conference",
//       attendees: "500+",
//       description:
//         "Presented ErthaLoka's EPA tokenization model to 500+ investors and climate tech leaders.",
//       image: "/images/climate-tech.jpg",
//     },
//     {
//       title: "Conservation Finance Workshop",
//       date: "February 2024",
//       location: "Puducherry, India",
//       type: "Workshop",
//       attendees: "75",
//       description:
//         "Hands-on workshop on innovative conservation financing mechanisms with NGO partners.",
//       image: "/images/conservation.jpg",
//     },
//     {
//       title: "Blockchain for Nature Hackathon",
//       date: "January 2024",
//       location: "Virtual",
//       type: "Hackathon",
//       attendees: "200+",
//       description: "Co-organized hackathon exploring Web3 solutions for environmental conservation.",
//       image: "/images/hackathon.jpg",
//     },
//   ];

//   const upcomingEvents = [
//     {
//       title: "EPA Launch Event",
//       date: "Coming Soon",
//       location: "TBA",
//       type: "Launch",
//       description:
//         "Official launch of our first EPA token with live ecosystem verification demo.",
//       image: "/images/launch.jpg",
//     },
//     {
//       title: "Regenerative Agriculture Masterclass",
//       date: "Q2 2025",
//       location: "Puducherry, India",
//       type: "Workshop",
//       description:
//         "Learn about chemical-free farming techniques and carbon sequestration practices.",
//       image: "/images/agriculture.jpg",
//     },
//   ];

//   return (
//     <section id="events" className="relative overflow-hidden bg-white text-green-900 py-24">
//       {/* Soft green gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50 opacity-70" />

//       <div className="relative z-10 container mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
//             Events & Workshops
//           </h2>
//           <p className="text-lg md:text-xl text-green-700/70 max-w-2xl mx-auto leading-relaxed">
//             Connecting innovators, conservationists, and investors shaping the planet’s future.
//           </p>
//         </motion.div>

//         {/* Upcoming Events */}
//         <div className="mb-24">
//           <motion.h3
//             className="text-2xl font-semibold mb-10 text-green-700 uppercase tracking-widest"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Upcoming Events
//           </motion.h3>

//           <div className="grid md:grid-cols-2 gap-10">
//             {upcomingEvents.map((event, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//               >
//                 <Card className="bg-white/90 border border-green-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-2xl">
//                   <div className="relative group">
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" />
//                     <Badge className="absolute top-4 left-4 bg-green-600/80 text-white text-xs uppercase">
//                       {event.type}
//                     </Badge>
//                   </div>
//                   <CardHeader>
//                     <CardTitle className="text-xl font-semibold text-green-900">
//                       {event.title}
//                     </CardTitle>
//                     <CardDescription className="flex items-center gap-2 text-green-700/80 mt-2">
//                       <MapPin size={16} /> {event.location}
//                     </CardDescription>
//                     <CardDescription className="text-sm text-green-600/70">
//                       {event.date}
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-green-700/80">{event.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Past Events */}
//         <div>
//           <motion.h3
//             className="text-2xl font-semibold mb-10 text-green-700 uppercase tracking-widest"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Past Events
//           </motion.h3>

//           <div className="grid md:grid-cols-3 gap-8">
//             {pastEvents.map((event, i) => (
//               <motion.div
//                 key={i}
//                 custom={i}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 variants={fadeUp}
//               >
//                 <Card className="bg-white/90 border border-green-200 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-2xl">
//                   <div className="relative group">
//                     <img
//                       src={event.image}
//                       alt={event.title}
//                       className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent" />
//                     <Badge className="absolute top-4 left-4 bg-green-600/80 text-white text-xs uppercase">
//                       {event.type}
//                     </Badge>
//                   </div>
//                   <CardHeader>
//                     <CardTitle className="text-lg font-semibold text-green-900">
//                       {event.title}
//                     </CardTitle>
//                     <CardDescription className="space-y-1 text-green-700/80 mt-2">
//                       <div className="flex items-center gap-2">
//                         <Calendar size={14} /> {event.date}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <MapPin size={14} /> {event.location}
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Users size={14} /> {event.attendees} attendees
//                       </div>
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-sm text-green-700/80">{event.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
// import { motion } from "framer-motion";
// import { ArrowRight, MapPin } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
//   }),
// };

// const projects = [
//   {
//     title: "Vetiver Deployment",
//     description: "160 Acres of large-scale vetiver deployment for erosion control and soil stabilization.",
//     tags: ["Erosion Control", "Soil Health"],
//     location: "https://maps.google.com?q=Tamil+Nadu,+India",
//   },
//   {
//     title: "Regenerative Agriculture",
//     description: "100 Acres of regenerative farming restoring soil carbon and biodiversity.",
//     tags: ["Carbon Sequestration", "Biodiversity"],
//     location: "https://maps.google.com?q=Puducherry,+India",
//   },
//   {
//     title: "Urban Forest",
//     description: "40 Acres of green infrastructure improving air quality and urban cooling.",
//     tags: ["Air Quality", "Urban Cooling"],
//     location: "https://maps.google.com?q=Chennai,+India",
//   },
// ];

// const partners = [
//   "Google Earth", "Polygon", "UNEP", "Ethereum Foundation", "World Bank"
// ];

// const events = [
//   {
//     title: "EPA Launch Event",
//     type: "Launch",
//     date: "TBA",
//     location: "Global Livestream",
//     description: "Official launch of our first EPA token with live ecosystem verification demo.",
//   },
//   {
//     title: "Regenerative Agriculture Masterclass",
//     type: "Workshop",
//     date: "Q2 2025",
//     location: "Puducherry, India",
//     description: "Learn about chemical-free farming and carbon sequestration practices.",
//   },
//   {
//     title: "Climate Tech Summit 2024",
//     type: "Conference",
//     date: "March 2024",
//     location: "Singapore",
//     description: "Presented our blockchain transparency protocol for ecosystem valuation.",
//   },
// ];

// export default function ErthaLokaPage() {
//   return (
//     <main className="bg-white text-green-900 font-[Inter] overflow-x-hidden scroll-smooth">
//       {/* === HERO === */}
//       <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-100"></div>
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-green-200/40 blur-[150px] rounded-full"></div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeUp}
//           className="z-10 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4">
//             <span className="text-green-800">ErthaLoka</span> <br />
//             A CoExIStic Ecoverse
//           </h1>
//           <p className="text-lg md:text-xl text-green-800/80 font-light mb-8">
//             The world’s first blockchain ecosystem making preservation more profitable than destruction.
//           </p>

//           <Button
//             size="lg"
//             onClick={() =>
//               document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
//             }
//             className="bg-green-700 text-white font-medium hover:bg-green-800 transition-all duration-300 rounded-full px-8 py-6 shadow-md hover:shadow-xl hover:scale-105 flex items-center gap-2"
//           >
//             Explore Projects <ArrowRight className="w-5 h-5" />
//           </Button>
//         </motion.div>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.9 }}
//           transition={{ delay: 1.5, duration: 1 }}
//           className="absolute bottom-10 text-sm text-green-700/70 tracking-wide"
//         >
//           © 2025 ErthaLoka | A CoExIStic Ecoverse
//         </motion.p>
//       </section>

//       {/* === PROJECTS === */}
//       <section id="projects" className="py-24 px-6 bg-gradient-to-b from-white to-green-50">
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeUp}
//           className="text-4xl font-semibold text-center mb-16"
//         >
//           Regenerative Projects
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {projects.map((project, i) => (
//             <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" custom={i}>
//               <Card className="bg-white/70 backdrop-blur-lg shadow-lg border border-green-100 rounded-2xl hover:shadow-xl transition-all duration-300">
//                 <CardHeader>
//                   <CardTitle className="text-green-800">{project.title}</CardTitle>
//                   <CardDescription>{project.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, t) => (
//                     <span key={t} className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </CardContent>
//                 <div className="p-4 flex justify-center">
//                   <Button
//                     onClick={() => window.open(project.location, "_blank")}
//                     className="bg-green-600 text-white hover:bg-green-700 rounded-full px-6 py-2"
//                   >
//                     <MapPin className="w-4 h-4 mr-2" /> View Map
//                   </Button>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* === PARTNERS === */}
//       <section className="py-20 bg-white overflow-x-hidden">
//         <h2 className="text-3xl font-semibold text-center mb-10">Our Partners</h2>
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: "-100%" }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="flex gap-16 text-green-700 text-lg font-medium whitespace-nowrap"
//         >
//           {partners.map((partner, i) => (
//             <span key={i}>{partner}</span>
//           ))}
//         </motion.div>
//       </section>

//       {/* === EVENTS === */}
//       <section id="events" className="py-24 px-6 bg-gradient-to-t from-green-50 to-white">
//         <h2 className="text-4xl font-semibold text-center mb-16">Events & Summits</h2>

//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//           {events.map((event, i) => (
//             <motion.div
//               key={i}
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeUp}
//               custom={i}
//             >
//               <Card className="bg-white/70 backdrop-blur-md border border-green-100 rounded-2xl shadow-md hover:shadow-xl transition">
//                 <CardHeader>
//                   <CardTitle className="text-green-800">{event.title}</CardTitle>
//                   <CardDescription className="text-green-600">{event.type}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-sm mb-2">{event.description}</p>
//                   <p className="text-sm text-green-700 font-medium">
//                     📅 {event.date} — 📍 {event.location}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* === FOOTER === */}
//       <footer className="py-8 text-center text-green-700/70 text-sm bg-white border-t border-green-100">
//         Built on transparency. Powered by blockchain. 🌍
//       </footer>
//     </main>
//   );
// }
import { motion, type Variants } from "framer-motion";
import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const upcomingEvents = [
  {
    title: "EPA Launch Event",
    date: "Coming Soon",
    location: "Global Livestream",
    type: "Launch",
    description:
      "Official launch of our first EPA token with live ecosystem verification demo and partner showcase.",
  },
  {
    title: "Regenerative Agriculture Masterclass",
    date: "Q2 2025",
    location: "Puducherry, India",
    type: "Workshop",
    description:
      "Learn about chemical-free farming techniques and carbon sequestration practices in a 2-day masterclass.",
  },
];

const pastEvents = [
  {
    title: "Climate Tech Summit 2024",
    date: "March 2024",
    location: "Singapore",
    type: "Conference",
    attendees: "500+",
    description:
      "Presented ErthaLoka's EPA tokenization model to global climate tech investors and thought leaders.",
  },
  {
    title: "Conservation Finance Workshop",
    date: "February 2024",
    location: "Puducherry, India",
    type: "Workshop",
    attendees: "75",
    description:
      "Hands-on workshop with NGOs exploring blockchain-based conservation finance frameworks.",
  },
  {
    title: "Blockchain for Nature Hackathon",
    date: "January 2024",
    location: "Virtual",
    type: "Hackathon",
    attendees: "200+",
    description:
      "Co-organized hackathon exploring Web3 innovations for ecological data transparency and restoration.",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-white text-green-900 min-h-screen font-sans relative overflow-hidden">

      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          initial={{ opacity: 0.4, scale: 1 }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-300/40 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.3, scale: 1 }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
            rotate: [0, -10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-[500px] h-[500px] bg-emerald-200/40 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Hero Section */}
      <section className="py-16 text-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-foreground">
            Events & Workshops
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connecting innovators, investors, and environmental leaders to co-create a regenerative future.
          </p>
        </motion.div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-green-50 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">Upcoming Events</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 border border-green-100 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge className="bg-green-100 text-green-800">{event.type}</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-700">
                      {event.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-sm mt-1.5 text-muted-foreground">
                    <MapPin size={16} /> {event.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 px-6 bg-gradient-to-t from-green-50 to-white relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">Past Events</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              custom={i}
              viewport={{ once: true }}
            >
              <Card className="bg-white/80 border border-green-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-2">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-green-100 text-green-800">{event.type}</Badge>
                    <Badge variant="outline" className="border-green-400 text-green-700">
                      {event.date}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{event.title}</CardTitle>
                  <CardDescription className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={14} />
                      {event.attendees} attendees
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      
    </main>
  );
}
