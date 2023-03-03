import { useState, useEffect } from 'react';

export const ChangeBlocks = (arr, htmlEl, initInterval = 1000) => {
  const [counter, setCounter] = useState(0);
  const [interval, setInterval] = useState(initInterval);

  const curArr = [...arr];


  useEffect(() => {
    const handler = setTimeout(() => {
      if(htmlEl){
        htmlEl.classList.remove('show-block-left')
        htmlEl.classList.add('hide-block-left');
        const changeBlock = setTimeout(() => {
          htmlEl.classList.remove('hide-block-left')
          htmlEl.classList.add('show-block-left')
          clearTimeout(changeBlock);  
        }, 1000)
      }
      setCounter(counter + 1)
      if(curArr.length - 1 <= counter){
        setCounter(0);
      }
    }, interval)
    return () => clearTimeout(handler)
  }, [counter, interval, htmlEl, curArr.length])
  
  

  return [[curArr[counter]], [counter, setCounter], [interval, setInterval]];
 
  
}