import React from "react";
import "./experience-content-style-item.scss";

export const ExperienceContentItem=({company, content}: {company: string, content:string})=>{
return<>
<div className="experience-content-item-wrapper">
 <div className="company-heading">
    {company}
 </div>
 <div className="company-content">
    {content}
 </div>
</div>
</>;
};