// import React, { useState } from 'react'
import { useEffect,useState } from 'react';
import { BASE_URL } from '../Constant'
export default function DogList(){
    
    const [dogBreed,setGogBreed]=useState()
    const [toggle,setToggle]=useState(true)

    useEffect(()=>{
console.log("dogBreed",dogBreed);
    },[dogBreed])

    useEffect(()=>{
        fetch(`${BASE_URL}/breeds`).then((result)=>{
            return result.json()
        }).then((finResult)=>{
            setGogBreed(finResult.data)
        }).catch((err)=>{
            console.log(err)
        });
    },[])
    
    const hanldeClick=()=>{
        setToggle(!toggle)
    }
    
    return(
       <>
       {dogBreed ? dogBreed.map((dogValue)=>
            <div key={dogValue.attributes.name}>
              <h1>{ toggle ? dogValue.attributes.name: dogValue.attributes.description
}</h1>
           </div>
            ):
            <>Loading...</>}
           <button onClick={hanldeClick}>Toggle</button> 
       </>
        
    )
}