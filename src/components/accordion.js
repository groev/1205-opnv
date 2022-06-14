import React from "react";

export default function Accordion({ item }) {
  return (
    <div className="accordion">
      <details>
        <summary>{item.head}</summary>
        {item.content}
      </details>
    </div>
  );
}
