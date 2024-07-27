import React from "react";
import "./tech-stack-content-item-style.scss";

type TechStackContentItemType={
    imgSrc:string,
    name:string
}

export const TechStackContentItem=({imgSrc,name}:TechStackContentItemType)=>{
 return<>
 <div className="tech-stack-item-wrapper">
<div className="tech-stack-item-image-wrapper">
<img className="tech-stack-item-image-content" src={imgSrc}/>
</div>
<div className="tech-stack-item-name">
{name}
</div>
 </div>
 </>;
};