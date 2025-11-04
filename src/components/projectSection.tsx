import React from "react";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#E8F3EB] text-green-900 flex flex-col items-center justify-center fade-up"
    >
      <h2 className="text-5xl font-bold mb-8">Our Live Projects</h2>
      <p className="text-lg max-w-2xl text-center text-green-800/80">
        Explore ErthaLoka’s active regenerative ecosystem projects.
      </p>
    </section>
  );
};

export default ProjectsSection;
