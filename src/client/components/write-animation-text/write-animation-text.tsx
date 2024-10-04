import React from "react";
import "./write-animation-text-style.scss";

type myStyleType=Record<string, string>;

export const WriteAnimationText=({text, isInterSecting}:{text:string, isInterSecting:boolean })=>{

    
    return <>
    {<><div>{text.split('')
    .map((character , index)=>{
        const myStyle: myStyleType={'--delay':`${(index) * 0.01}s`};
    return <span key={`${index}${character}`} className={isInterSecting?'text-animation':'text'} style={myStyle}>
        {character}
    </span>;
    }
)}</div>
</>}
    </>;
};