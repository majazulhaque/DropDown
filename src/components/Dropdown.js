import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [itemVal, setItemVal] = useState("Select");
  const [arrow, setArrow] = useState("right");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if(arrow === "right"){
        setArrow("down");
    }
    else{
        setArrow("right");
    }
    
  };

  const handleItemSelected = (item) => {
    console.log("Selected Item", item);
    setItemVal(item);
    setArrow("right")
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <h4>Should you use a dropdown?</h4>
      <button onMouseDown={toggleDropdown} className="btn">
        {itemVal}<i class={`fa-solid fa-chevron-${arrow}`}></i>
      </button>
      {isOpen && (
      <div className="option_container">
        <ul className="options">
          {items.map((item, index) => (
            <li
              className="option"
              key={index}
              onClick={() => handleItemSelected(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
};

export default Dropdown;
