import React from "react";
import Article from "../../Components/article";
const text = ["Art", "Programming", "Hobbies", "Comics"];
export default function About() {
  return (
    <div style={{ margin: "auto", width: [1, 1, 1, 3 / 4, 1 / 2] }}>
      <div style={{ display: "grid" }}>sdasd</div>
      <img
        alt="profile"
        src={""}
        key={0}
        style={{
          width: "100%",
          maxWidth: "300px",
        }}
      />

      <Article head={"Categories"}>
        {text.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </Article>
    </div>
  );
}
