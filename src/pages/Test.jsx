import { useDraggable } from "@neodrag/react";
import React, { useRef } from "react";

const Test = () => {
    const draggable = useRef(null);
    useDraggable(draggable, { axis: 'both', grid: [10,10]})
 
    return (
        <div ref={draggable}>Hello</div>
    )
};

export default Test;
