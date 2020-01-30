import React, { useState } from "react";
import useInterval from "use-interval";

export const AnimateShow = props => {
  let [ChidToRender, setChildToRender] = useState([]);

  console.log(props.children)

  useInterval(() => {
      console.log(ChidToRender.length,  props.children.length)
    if (ChidToRender.length < props.children.length) {
      setChildToRender([...ChidToRender, props.children[ChidToRender.length]]);
    }
  }, 1000);

  return <div style={props.style}>{ChidToRender}</div>;
};
