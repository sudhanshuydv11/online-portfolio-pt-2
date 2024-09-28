import React from "react";
import { JSXChildrenType } from "../../types/types";
import './shutter-styles.scss';

export const Shutter=({children}: JSXChildrenType)=>{
return<div className="shutter-container">
    <div className="shutter-background">
    {children[0]}
    </div>
    <div className="shutter-front">
    {children[1]}
    </div>
    </div>;
};