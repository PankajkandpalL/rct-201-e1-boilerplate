import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  initialValues : number[]
};
const List1 = ( { initialValues }: List1Props) => {


  const { list, appendStart, popEnd, clear, reset } = useNumberList(initialValues)
  const [ text,setText ] = useState<string>("")

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */}</h3>
      {/* Iterate List and wrap the element div below inside */}

      {
        list.map((el,i)=>(
            <div key={i} data-testid="list1-element">{el}</div>
        ))
      }
      
      

      
      <input onChange={(e)=>setText(e.target.value)} data-testid="list1-input" />
      <button onClick={()=>appendStart(text)} data-testid="list1-btn-append-start">
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button onClick={()=>popEnd()} data-testid="list1-btn-pop-end">
        {/* po last element btn */}
        Pop End
      </button>
      <button onClick={()=>clear()} data-testid="list1-btn-clear">
        {/* clear list and set empty button */}
        Clear
      </button>
      <button onClick={()=>reset()} data-testid="list1-btn-reset">
        Reset
        {/* Reset list to default value btn */}
      </button>
    </div>
  );
};

export default List1;
