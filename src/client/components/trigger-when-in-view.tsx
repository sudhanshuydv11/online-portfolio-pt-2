import React, { useEffect, useRef, useState } from "react";

type TriggerViewChildrenType=(props: {isInterSecting: boolean}) => React.JSX.Element;

type TriggerWhenInViewType={
    children: TriggerViewChildrenType ,
    baseClass:string,
    style:object,
    intersectionClass: string
}

export const TriggerWhenInView=({
    children:Children,
    baseClass,
    style,
    intersectionClass
}
:TriggerWhenInViewType
)=>{
    const [isInterSecting, setIsInterSecting]=useState(false);
    const observedItemRef: React.RefObject<HTMLElement>=useRef< HTMLElement >(null);
    const observer=new IntersectionObserver((enteries)=> {
       setIsInterSecting(enteries[0]?.isIntersecting);
       console.log(enteries);
    }, {} );
    
    useEffect(()=>{
       observer.observe(observedItemRef.current as HTMLElement);
    },[]);

    return(
        <>
            <div style={style} ref={observedItemRef as React.LegacyRef<HTMLDivElement>}
            className={`${baseClass} ${isInterSecting ? intersectionClass : ''}`}>
            <Children isInterSecting={isInterSecting}/>
            </div>
        </>
    );
};