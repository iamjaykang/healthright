import React from "react";
import { TfiArrowCircleUp, TfiArrowCircleDown } from "react-icons/tfi";

const Accordion = ({ title, content, id, activeId, onAccordionClick }) => {
  const isExpanded = id === activeId;

  const toggleAccordion = () => {
    onAccordionClick(isExpanded ? null : id);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className="arrow-icon">
          {isExpanded ? <TfiArrowCircleUp /> : <TfiArrowCircleDown />}
        </span>
      </div>
      {isExpanded && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
