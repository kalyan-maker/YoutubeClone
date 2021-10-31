import React, { useState } from "react";
import "./Categories.css"; //import css file

// keywords api for categories
const keywords = [
  "All",
  "React js",
  "Firebase",
  "Songs",
  "Rest Api",
  "Redux",
  "Music",
  "Science",
  "HTMl CSS",
  "Telugu Songs",
  "JavaScript",
  "Cricket",
  "Football",
  "Movies",
  "Travellers",
  "Bikers",
  "Trending",
];

function Categories() {
  const [activeElement, setActiveElement] = useState("All"); //create useState

  //handleclick function
  const handleClick = (value) => {
    setActiveElement(value);
  };
  return (
    <div className="CategoriesBar">
      {/*-----------------get keywords using map function--------------------------*/}
      {keywords.map((value, i) => (
        <span
          id="categories"
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
}

export default Categories;
