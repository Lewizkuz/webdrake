import React, { Fragment, useState } from "react";

export default function Tooltip(props) {
  const { children, title, ...other } = props;
  const [visible, setVisible] = useState(false);
  function mouseEnter() {
    setVisible(true);
  }
  function mouseLeave() {
    setVisible(false);
  }
  return (
    <Fragment {...other}>
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        {children}
      </div>
      {visible ?? <div>{title}</div>}
    </Fragment>
  );
}
