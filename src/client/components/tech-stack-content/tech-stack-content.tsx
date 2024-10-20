import React from "react";
import "./tech-stack-styles.scss";
import { TechStackContentItem } from "./tech-stack-content-item/tech-stack-content-item.tsx";

const CONTENT_DATA=[
    {
        imgSrc:'https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain',
        name:'React',
        desc:' A JavaScript library for building interactive user interfaces',
        descHeading:'Javascript Library'
    },
    {
        imgSrc: 'https://miro.medium.com/v2/resize:fit:1358/1*-SEJ0Yo6hJueWc4R-nnU5A.jpeg',
        name:'Redux',
        desc:'Makes it simple to manage states for large application',
        descHeading:'Global State Manager '
    },
    {
        imgSrc:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        name: 'TypeScript',
        desc:'TypeScript is a strongly typed programming language that builds on JavaScript',
        descHeading:'Strongly typed programming language'
    },
    {
        imgSrc:'https://cdn.iconscout.com/icon/free/png-512/free-webpack-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-7-pack-logos-icons-3030288.png',
        name: 'Webpack',
        desc:' Capable of transforming, bundling, or packaging just about any resource or asset',
        descHeading:'module bundler'
    }
];

export const TechStackContent=()=>{
return <>
<div className="tech-stack-content-wrapper">
    {
    CONTENT_DATA
    .map((item)=> <TechStackContentItem {...item}/>)
    }
</div>
</>;
}; 