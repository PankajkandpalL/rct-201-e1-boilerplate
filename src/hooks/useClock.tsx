import { useEffect, useRef, useState } from "react";

type Clock = {

  hours : number,
  minutes : number,
  seconds : number

}

const useClock = (): Clock => {

  const ref = useRef<Date>()
  const [ hours,setHrs ] = useState<number>(0)
  const [ minutes,setMin ] = useState<number>(0)
  const [ seconds,setSec ] = useState<number>(0)  

  useEffect(()=>{
    
    setInterval(()=>{ 
      ref.current = new Date()
      // let time: string = ref.current.toLocaleTimeString()
      // let [ h,m,s ] = time.trim().split(":")
      let h = ref.current.getHours()
      let m = ref.current.getMinutes()
      let s = ref.current.getSeconds()
      setHrs(h)
      setMin(m)
      setSec(s)
    },1000)
    

  },[])

  return { hours,minutes,seconds }

};

export default useClock;
