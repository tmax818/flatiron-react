import React from "react";

const Lessons = ({ lessons }) => {
  console.log(lessons);
  return (
    <div>
      <ol>
        {lessons.map((lesson) => {
          return (
            <div>
              <li>
                <a href={lesson.url} target="_blank">
                  {lesson.title}
                </a>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Lessons;
