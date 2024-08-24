import React from 'react'
import { useState } from 'react'

const Cal = () => {
    const [input, setInput] = useState("")
    

    const HandleClick =(value)=>{
        if(value==="="){
            try{
                setInput(eval(input).toString())
            } catch (error){
                setInput("Error")
            }
        }
        else if(value==="C"){
            setInput("")
        }
        else if(value==="CE"){
            setInput(input.slice(0,-1))
        }
        else{
            setInput(input+value)
        }
    }

    const arr=["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".","C", "+", "CE"]; 
  return (
    <div className='flex   justify-center'>
    <div className=' w-[350px]   '>
        <div>
             
      <div className='h-12 bg-slate-400 rounded-md m-4 text-4xl flex justify-center'>{input}</div>
      <div className='grid grid-cols-4 bg-slate-300 rounded-md m-4'>
        {arr.map((sym)=>(<button className='bg-slate-500 rounded-md m-4 h-10' onClick={()=>HandleClick(sym)} key={sym}>{sym}</button>))}
        <button onClick={()=>HandleClick("=")} className='grid col-span-3 bg-blue-500 rounded-md m-4 h-10 text-gray-300 text-3xl'>=</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Cal
