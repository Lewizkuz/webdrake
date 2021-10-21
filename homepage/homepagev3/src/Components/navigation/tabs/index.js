// value={value} onChange={handleChange} centered

import { Fragment } from "react";

export default function Tabs(props) {
  const { content, defaultValue, onChange, centered, ...other } = props;
  const [value, setValue] = useState(null);

  useEffect(() => {
    setValue(defaultValue);
    return () => {
      setValue(null);
    };
  }, [defaultValue]);
  function handleChange(target) {
    setValue(target);
  }
  return (
    <div {...other}>
      {children ? (
        <div>
          <div>
            {children.length
              ? children.map((e, i) => (
                  <Fragment key={i} onClick={handleChange}>
                    {e[0]}
                  </Fragment>
                ))
              : null}
          </div>
          {children.length
            ? children.map((e, i) => (
                <Fragment
                  key={i}
                  style={{ display: value === i ? "none" : undefined }}
                >
                  {e[1]}
                </Fragment>
              ))
            : null}
        </div>
      ) : (
        "Tabs given are not "
      )}{" "}
    </div>
  );
}
