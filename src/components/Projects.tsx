// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import vetiverImage from "@/assets/vetiver-project.jpg";
// import agricultureImage from "@/assets/regenerative-agriculture.jpg";
// import urbanImage from "@/assets/urban-forest.jpg";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Vetiver Deployment",
//       acres: 160,
//       description: "Large-scale vetiver deployment for erosion control and soil stabilisation.",
//       image: vetiverImage,
//       tags: ["Erosion Control", "Soil Health"],
//     },
//     {
//       title: "Regenerative Agriculture",
//       acres: 100,
//       description: "Chemical-free regenerative agriculture actively rebuilding soil health, sequestering carbon, and restoring native biodiversity whilst maintaining agricultural productivity.",
//       image: agricultureImage,
//       tags: ["Carbon Sequestration", "Biodiversity"],
//     },
//     {
//       title: "Urban Forest",
//       acres: 40,
//       description: "Urban forest improving air quality, reducing urban heat island effects, and providing critical green infrastructure in dense metropolitan areas.",
//       image: urbanImage,
//       tags: ["Air Quality", "Urban Green"],
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-muted/30">
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
//             Live Projects
//           </h2>
//           <p className="text-xl text-muted-foreground mb-4">
//             We are not theorizing. We are executing.
//           </p>
//           <p className="text-lg text-muted-foreground">
//             300 acres of protected ecosystems across 3 flagship projects generating real impact and verifiable data.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {projects.map((project, index) => (
//             <Card 
//               key={index}
//               className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
//               style={{ animationDelay: `${index * 0.2}s` }}
//             >
//               <div 
//                 className="h-56 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${project.image})` }}
//               />
//               <CardHeader>
//                 <div className="flex justify-between items-start mb-2">
//                   <CardTitle className="text-xl">{project.title}</CardTitle>
//                   <Badge variant="secondary" className="text-lg font-bold">
//                     {project.acres} Acres
//                   </Badge>
//                 </div>
//                 <CardDescription className="text-base">
//                   {project.description}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex gap-2 flex-wrap">
//                   {project.tags.map((tag, i) => (
//                     <Badge key={i} variant="outline">{tag}</Badge>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import vetiverImage from "@/assets/vetiver-project.jpg.png";
import agricultureImage from "@/assets/regenerative-agriculture.jpg.png";
import urbanImage from "@/assets/urban-forest.jpg.png";

const Projects = () => {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);

  const projects = [
    {
      title: "Vetiver Deployment",
      acres: 160,
      description:
        "Large-scale vetiver deployment for erosion control and soil stabilisation.",
      image: vetiverImage,
      tags: ["Erosion Control", "Soil Health"],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31568.935985785143!2d77.5852435!3d12.972442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1671c1db2c27%3A0x9b5d9c4efecb!2sBangalore!5e0!3m2!1sen!2sin!4v1683657020379!5m2!1sen!2sin",
    },
    {
      title: "Regenerative Agriculture",
      acres: 100,
      description:
        "Chemical-free regenerative agriculture actively rebuilding soil health, sequestering carbon, and restoring native biodiversity whilst maintaining agricultural productivity.",
      image: agricultureImage,
      tags: ["Carbon Sequestration", "Biodiversity"],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.107853276245!2d75.857726!3d10.792944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6502d9d14e753%3A0x58287b0662f4ab4f!2sKerala!5e0!3m2!1sen!2sin!4v1683657256074!5m2!1sen!2sin",
    },
    {
      title: "Urban Forest",
      acres: 40,
      description:
        "Urban forest improving air quality, reducing urban heat island effects, and providing critical green infrastructure in dense metropolitan areas.",
      image: urbanImage,
      tags: ["Air Quality", "Urban Green"],
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799180322!2d-74.2598674!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b7ef5a1cb1%3A0x4a83d77f759a59b8!2sNew%20York!5e0!3m2!1sen!2sus!4v1683657321341!5m2!1sen!2sus",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Live Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            We are not theorizing. We are executing.
          </p>
          <p className="text-lg text-muted-foreground">
            300 acres of protected ecosystems across 3 flagship projects generating real impact and verifiable data.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Clickable Image */}
              <div
                onClick={() => setSelectedMap(project.mapEmbed)}
                className="h-56 bg-cover bg-center cursor-pointer hover:scale-105 transition-transform duration-300"
                style={{ backgroundImage: `url(${project.image})` }}
                title="Click to view location"
              />

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary" className="text-lg font-bold">
                    {project.acres} Acres
                  </Badge>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* View on Map Button */}
                <Button
                  onClick={() => setSelectedMap(project.mapEmbed)}
                  variant="outline"
                  className="w-full mt-2 font-medium hover:bg-green-100 hover:text-green-900 transition-colors"
                >
                  View on Map
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Map Modal */}
      {selectedMap && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] md:w-[70%] lg:w-[60%] relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMap(null)}
              className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black font-bold"
            >
              ×
            </button>

            {/* Embedded Google Map */}
            <iframe
              src={selectedMap}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
