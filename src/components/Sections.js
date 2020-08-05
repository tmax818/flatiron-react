import React from "react";
import Lessons from "./Lessons";

const Sections = ({ sections, lessons }) => {
  return (
    <div>
      {sections.map((section) => {
        return (
          <div key={section.id}>
            <h2>
              Section {section.number}: {section.title}
            </h2>
            <Lessons
              lessons={lessons.filter(
                (lesson) => lesson.sectionId === section.id
              )}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
