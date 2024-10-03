import React from "react";
import "./write-animation-text-style.scss";

export const WriteAnimationText=({text, isInterSecting}:{text:string, isInterSecting:boolean })=>{
    let count=0;

    
    return <>
    {<><div>{text.split('')
    .map((character , index)=>{
        count++;
    return <span key={`${index}${character}`} className={isInterSecting?'text-animation':'text'} style={{'--delay':`${(count -1) * 0.01}s`}}>
        {character}
    </span>;
    }
)}</div>
</>}
    </>;
};