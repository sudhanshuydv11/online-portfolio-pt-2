import React from "react";
import "./tech-stack-content-item-style.scss";

type TechStackContentItemType={
    imgSrc:string,
    name:string
    desc:string,
    descHeading: string
}

export const TechStackContentItem=({imgSrc,name, desc, descHeading}:TechStackContentItemType)=>{
 return<>
 <div className="tech-stack-item-wrapper">
<div className="tech-stack-item-image-wrapper">
<img className="tech-stack-item-image-content" src={imgSrc}/>
</div>
<div className="tech-stack-item-content">
    <div className="name">
    {name}
    </div>
    <div className="description-heading">
        {descHeading}
    </div>
    <div className="description">
        {desc}
    </div>
</div>
 </div>
 </>;
};