import React from "react";
import { AboutMe } from "../components/about-me/about-me.tsx";
import { ExperienceContentContainer } from "./experience-content-container.tsx";
import { PreferredStackContainer } from "./prefered-stack-container.tsx";

const App = () => {

return <>
   <div className="my-name">
      Sudhanshu
   </div>
   <div className="my-name">
      Yadav
   </div>
   <div className="my-photo scroll-animation">
      <img src='https://wallpaperaccess.com/full/40105.jpg'/>
   </div>

<AboutMe/>
<ExperienceContentContainer/>
<PreferredStackContainer/>
<div className="generic-content-wrapper">
   Contact Me
</div>

   </>;
};

export default App;