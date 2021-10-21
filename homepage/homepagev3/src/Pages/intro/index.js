import React from "react";
import Article from "../../Components/article";
export default function Intro() {
  const row = [
    "Variable, flexible solutions. Upgrade your flow.",
    "nice",
    "sweet",
    "it",
    "works",
    "finally",
  ];
  return (
    <div margin="auto" width={[1, 1, 1, 3 / 4]}>
      {row.map((e, i) => (
        <Article key={i} head={e}>
          {row.map((e, i) => e)}
        </Article>
      ))}
    </div>
  );
}
