import React from "react";
import { TriggerWhenInView } from "../trigger-when-in-view.tsx";
import './about-me.scss';

export const AboutMe=()=>{
return <>
<TriggerWhenInView baseClass="translate-content"
intersectionClass='translate-content--animate'>

<div className="about-me">
   ABOUT ME
</div>
</TriggerWhenInView>

<div className="about-me-content">
   Currently working on frontend technologies, but dont want to be limited to them. Always looking forward to learning new technologies in different domains.
   If I could live a thousand years, i would learn everything the world has to offer.
</div>
<div>
knowlege is power
-- despicable LittleFinger 
</div>
</>;
};