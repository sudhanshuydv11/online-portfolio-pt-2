import React, { useEffect, useRef, useState } from "react";

type TriggerWhenInViewType={
    children:React.JSX.Element,
    baseClass:string,
    intersectionClass: string
}

export const TriggerWhenInView=({
    children,
    baseClass,
    intersectionClass
}
:TriggerWhenInViewType
)=>{
    const [isIntersecting, setIsIntersecting]=useState(false);
    const observedItemRef: React.RefObject<HTMLElement>=useRef< HTMLElement >(null);
    const observer=new IntersectionObserver((enteries)=> {
       setIsIntersecting(enteries[0]?.isIntersecting);
       console.log(enteries);
    }, {} );
    
    useEffect(()=>{
       observer.observe(observedItemRef.current as HTMLElement);
    },[]);

    return(
        <>
            <div ref={observedItemRef as React.LegacyRef<HTMLDivElement>}
            className={`${baseClass} ${isIntersecting ? intersectionClass : ''}`}>
            {children}
            </div>
        </>
    );
};