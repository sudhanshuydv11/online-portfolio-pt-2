import React, { useEffect, useRef, useState } from "react";

type TriggerViewChildrenType=(props: {isInterSecting: boolean}) => React.JSX.Element;

type TriggerWhenInViewType={
    children: TriggerViewChildrenType ,
    triggerOnce: boolean
}

export const TriggerWhenInView=({
    children:Children,
    triggerOnce
}
:TriggerWhenInViewType
)=>{
    const [isInterSecting, setIsInterSecting]=useState(false);
    const observedItemRef: React.RefObject<HTMLElement>=useRef< HTMLElement >(null);
    const observer=new IntersectionObserver((enteries)=> {
       setIsInterSecting(enteries[0]?.isIntersecting);
       triggerOnce && enteries[0]?.isIntersecting && observer.unobserve(enteries[0].target);
    }, {} );

    useEffect(()=>{
        observer.observe(observedItemRef.current as HTMLElement);
    },[]);

    return(
        <div ref={observedItemRef as React.LegacyRef<HTMLDivElement>}>
            <Children isInterSecting={isInterSecting}/>
        </div>
    );
};