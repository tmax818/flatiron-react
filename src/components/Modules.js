import React from "react";
import Sections from "./Sections";

const Modules = ({ modules, sections, lessons }) => {
  return (
    <div>
      {modules.map((module) => {
        console.log(module);
        return (
          <div key={module.id}>
            <h1>
              Module {module.id + 1}: {module.title}
            </h1>
            <Sections
              sections={sections.filter(
                (section) => section.moduleId === module.id
              )}
              lessons={lessons}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Modules;
