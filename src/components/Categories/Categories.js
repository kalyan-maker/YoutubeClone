import React, { useState } from "react";
import "./Categories.css"; //import css file

import { useDispatch } from "react-redux";
import { getVideosByCategory } from "../../redux/actions/Videos";

// keywords api for categories
const keywords = [
  "All",
  "React js",
  "Firebase",
  "Songs",
  "Cartoon",
  "Comedy",
  "Music",
  "Science",
  "Animal",
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

  const dispatch = useDispatch();
  //handleclick function
  const handleClick = (value) => {
    setActiveElement(value);
    dispatch(getVideosByCategory(value));
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
