import React, { Fragment } from "react";
import { Article } from "../../Components";

export function Intro() {
  const content = [
    "Variable, flexible solutions. Upgrade your flow.",
    "nice",
    "sweet",
    "it",
    "works",
    "finally",
  ];
  return (
    <div style={{ margin: "auto", width: [1, 1, 1, 3 / 4] }}>
      {content.map((label, index) => (
        <Article key={index} head={label}>
          {content.map((contentRow, contentIndex) => (
            <Fragment key={contentIndex}>{contentRow}</Fragment>
          ))}
        </Article>
      ))}
    </div>
  );
}
