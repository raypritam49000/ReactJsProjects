import { useState } from 'react';

const useCustomHook = () => {
 
    const [count,setCount] = useState(0)

    const handleCountState = () =>{
        setCount(count+1);
    }

//   return{
//       count,handleCountState
//   }

return[
    count,handleCountState
]
    
  
}

export default useCustomHook;