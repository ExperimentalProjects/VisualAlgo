import React from "react";
import { bubbleSort } from "./sort";
import { AnimateShow } from "./AnimateShow";
let output = bubbleSort([2, 4, 5, 3, 1, 6, 9, 4, 6]);

function BubbleSort () {
    return (
        <AnimateShow  duration={4000}  style={{ display: "flex", flexDirection: "column" }}>
        {output.map((input, i) => {
          return (
            <div
              key={`col${i}`}
              style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}
            >
              {i ===0 && <div style={{width:200}}>INPUT</div>}
              {i === output.length-1 && <div  style={{width:200}}>output</div>}
              { i !== 0 && i !== output.length-1 &&  <div  style={{width:200}}></div> }
              {input.map(item => {
                return (
                  <div
                    style={{ display: 'flex', width: 50, height: 50, border: "1px solid black", justifyContent: 'center',   alignItems: "center" }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          );
        })}
      </AnimateShow>
    )
}

export default BubbleSort