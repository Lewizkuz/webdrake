import { Article } from "../../../Components";

export function Intro() {
  const content: string[] = [
    "Variable, flexible solutions. Upgrade your flow.",
    "nice",
    "sweet",
    "it",
    "works",
    "finally",
  ];
  return (
    <div style={{ margin: "auto", width: "75%" }}>
      {content.map((label, index) => (
        <Article key={index} head={label}>
          jeejeee
        </Article>
      ))}
    </div>
  );
}
