import React from "react";
import { AboutMe } from "../components/about-me/about-me.tsx";
import { ExperienceContentContainer } from "./experience-content-container.tsx";
import { PreferredStackContainer } from "./prefered-stack-container.tsx";
import { Profile } from "../components/profile/profile.tsx";

const SCROLL_SPEED_BY=0.3;

const App = () => {

   document.body.addEventListener('wheel',(event)=>{
      event.preventDefault();
      window.scrollBy(event.deltaX * SCROLL_SPEED_BY, event.deltaY * SCROLL_SPEED_BY);
         
   },{passive:false});

return <>
<Profile/>
<AboutMe/>
<ExperienceContentContainer/>
<PreferredStackContainer/>
<div className="generic-content-wrapper">
   GET IN TOUCH
</div>

   </>;
};

export default App;