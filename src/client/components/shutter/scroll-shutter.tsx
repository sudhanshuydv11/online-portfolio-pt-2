import React from "react";
import { JSXChildrenType } from "../../types/types";
import './shutter-styles.scss';

//use shutter in this


export const ScrollShutter=({children}: JSXChildrenType)=>{
return<div className="shutter-scrollable-wrapper"> 
<div className="shutter-scrollable-container">
    <div className="shutter-background">
    {children[0]}
    </div>
    <div className="shutter-front">
    {children[1]}
    </div>
    </div>
</div>;
};