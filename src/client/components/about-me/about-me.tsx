import React from "react";
import { TriggerWhenInView } from "../trigger-when-in-view.tsx";
import './about-me.scss';

export const AboutMe=()=>{

   const aboutMeContent='Currently working on frontend technologies, but dont want to be limited to them. Always looking forward to learning new technologies in different domains. If I could live a thousand years, i would learn everything the world has to offer.';

return <>
<TriggerWhenInView baseClass="translate-content"
   intersectionClass='translate-content--animate'
   style={{}}>

<div className="about-me">
   ABOUT ME
</div>
</TriggerWhenInView>


<div className="about-me-content">
{aboutMeContent.split('')
   .map((character: string, index: number): React.JSX.Element=> 
   <TriggerWhenInView baseClass="translate-content"
   intersectionClass='translate-content--animate'
   style={{'--delay':`${0.1+(index*0.02)}s`}}>
      <span>
         {character===" " ?<>&nbsp;</>: character}
      </span>
   </TriggerWhenInView>
   )}
</div>
</>;
};