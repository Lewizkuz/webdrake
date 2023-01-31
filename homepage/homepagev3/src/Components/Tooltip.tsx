import React, { Fragment, ReactNode, useState } from "react";

type TooltipProps = {
  children: ReactNode;
  title: string;
};

export const Tooltip = (props: TooltipProps) => {
  const { children, title, ...other } = props;
  const [visible, setVisible] = useState(false);
  function mouseEnter() {
    setVisible(true);
  }
  function mouseLeave() {
    setVisible(false);
  }
  return (
    <Fragment>
      <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} {...other}>
        {children}
      </div>
      {visible ?? <div>{title}</div>}
    </Fragment>
  );
};
