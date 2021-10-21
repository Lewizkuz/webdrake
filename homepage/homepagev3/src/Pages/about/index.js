import React from "react";
import Logo from "../../logo512.png";
import Article from "../../Components/article";
const text = ["Art", "Programming", "Hobbies", "Comics"];
export default function About() {
  return (
    <Box margin="auto" width={[1, 1, 1, 3 / 4, 1 / 2]}>
      <div style={{ display: "grid" }}></div>
      <img
        alt="profile"
        src={Logo}
        key={0}
        style={{
          width: "100%",
          maxWidth: "300px",
        }}
      />
      {text.map((s, i) => (
        <Article head={s} key={i}>
          {text.map((e, j) => (
            <p key={j}>{e}</p>
          ))}
        </Article>
      ))}
    </Box>
  );
}
