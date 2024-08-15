import React from "react";
import "./tech-stack-styles.scss";
import { TechStackContentItem } from "./tech-stack-content-item/tech-stack-content-item.tsx";

const CONTENT_DATA=[
    {
        imgSrc:'https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain',
        name:'REACT'
    },
    {
        imgSrc: 'https://miro.medium.com/v2/resize:fit:1358/1*-SEJ0Yo6hJueWc4R-nnU5A.jpeg',
        name:'REDUX'
    },
    {
        imgSrc:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        name: 'TypeScript'
    },
    {
        imgSrc:'https://cdn.iconscout.com/icon/free/png-512/free-webpack-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-7-pack-logos-icons-3030288.png',
        name: 'Webpack'
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