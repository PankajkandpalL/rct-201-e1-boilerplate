import { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  initialValues : number[]
};
const List2 = ({initialValues}: List2Props) => {

  const { list, appendEnd, popStart, clear, reset } = useNumberList(initialValues)
  const [ text,setText ] = useState<string>("")


  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */}</h3>

      {/* Iterate List and wrap the element div below inside */}
      {
        list.map((el,i)=>(
          <div key={i} data-testid="list2-element">{el}</div>
        ))
      }

      <input onChange={(e)=>setText(e.target.value)} data-testid="list2-input" />
      <button onClick={()=>appendEnd(text)} data-testid="list2-btn-append-end">
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button onClick={()=>popStart()} data-testid="list2-btn-pop-start">
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button  onClick={()=>clear()} data-testid="list2-btn-clear">
        {/* Button to  clear the list */}
        Clear
      </button>
      <button  onClick={()=>reset()}  data-testid="list2-btn-reset">
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;
