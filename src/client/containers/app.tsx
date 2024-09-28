import React from "react";
import { AboutMe } from "../components/about-me/about-me.tsx";
import { ExperienceContentContainer } from "./experience-content-container.tsx";
import { PreferredStackContainer } from "./prefered-stack-container.tsx";
import { Profile } from "../components/profile/profile.tsx";

const App = () => {

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