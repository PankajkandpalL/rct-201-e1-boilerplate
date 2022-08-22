import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {

  // const ref = useRef<Date>()
  const [ initialList1,setInititalList1 ] = useState<number[]>([1,2,3])
  const [ initialList2,setInititalList2 ] = useState<number[]>([4,5])

  return (
    <div className="App">
      <Clock />
      {/* List 1  initialValues [1, 2, 3] */}
      <List1 initialValues={initialList1} />
      {/* List 2  initialValues [4, 5] */}
      <List2 initialValues={initialList2} />
    </div>
  );
}

export default App;
