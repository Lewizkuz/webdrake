import { useState } from "react";

type Props = {
  children?: (string | JSX.Element)[][];
  content?: string;
  defaultValue?: number;
  onChange?: (arg1: number) => void;
  centered?: string;
};
export default function Tabs(props: Props) {
  const { children, content, defaultValue, onChange, centered, ...other } =
    props;
  const [value, setValue] = useState(defaultValue || 0);
  function handleChange(target: number) {
    if (onChange) onChange(target);
    setValue(target);
  }
  return (
    <div {...other}>
      {children ? (
        <div>
          <div>
            {children.length
              ? children.map((child, childIndex) => (
                  <button
                    key={childIndex}
                    onClick={() => {
                      handleChange(childIndex);
                    }}
                  >
                    {child[0]}
                  </button>
                ))
              : null}
          </div>
          {children.length
            ? children.map((child, childIndex) => (
                <div
                  key={childIndex}
                  style={{ display: value === childIndex ? undefined : "none" }}
                >
                  {child[1]}
                </div>
              ))
            : null}
        </div>
      ) : (
        "Tabs given are not "
      )}{" "}
    </div>
  );
}
