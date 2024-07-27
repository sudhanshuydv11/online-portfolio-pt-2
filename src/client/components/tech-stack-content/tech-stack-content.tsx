import React from "react";
import "./tech-stack-styles.scss";
import { TechStackContentItem } from "./tech-stack-content-item/tech-stack-content-item.tsx";

const CONTENT_DATA=[
    {
        imgSrc:'https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain',
        name:'REACT'
    }
];

export const TechStackContent=()=>{
return <>
<div className="tech-stack-content-wrapper">
    {
    CONTENT_DATA
    .map((item)=> <TechStackContentItem imgSrc={item.imgSrc} name={item.name}/>)
    }
</div>
</>;
}; 