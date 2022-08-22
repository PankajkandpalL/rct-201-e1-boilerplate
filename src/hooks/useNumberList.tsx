import { useState } from "react";

type NumberLis = {

  list : number[]
  appendStart : ( e: string ) => void,
  appendEnd : ( e: string ) => void,
  popStart : () => void,
  popEnd : () => void,
  clear : () => void,
  reset : () => void

}


const useNumberList = (initialArray: number[]): NumberLis => {
  
  const [ list,setList ] = useState<number[] | []>(initialArray)

  const appendStart = ( e: string ) : void => {
    let arr = [...list]
    arr.unshift(Number(e))
    setList(arr)
  }

  const appendEnd = ( e: string ) : void => {
    let arr = [...list]
    arr.push(Number(e))
    setList(arr)
  }

  const popEnd = (  ) : void => {
    let arr = [...list]
    arr.pop()
    setList(arr)
  }

  const popStart = ( ) : void => {
    let arr = [...list]
    arr.shift()
    setList(arr)
  }

  const clear = (): void => {
    setList([])
  }

  const reset = (): void => {
    setList(initialArray)
  }

  return { list, appendStart, appendEnd, popEnd, popStart, clear, reset }

};

export default useNumberList;
