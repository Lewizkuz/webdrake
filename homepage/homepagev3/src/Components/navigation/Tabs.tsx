import React, { useState } from "react";

export default function Tabs(props) {
  const { children, content, defaultValue, onChange, centered, ...other } =
    props;
  const [value, setValue] = useState(defaultValue || 0);
  function handleChange(target) {
    onChange(target);
    setValue(target);
  }
  return (
    <div {...other}>
      {children ? (
        <div>
          <div>
            {children.length
              ? children.map((e, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      handleChange(i);
                    }}
                  >
                    {e[0]}
                  </button>
                ))
              : null}
          </div>
          {children.length
            ? children.map((e, i) => (
                <div
                  key={i}
                  style={{ display: value === i ? undefined : "none" }}
                >
                  {e[1]}
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
