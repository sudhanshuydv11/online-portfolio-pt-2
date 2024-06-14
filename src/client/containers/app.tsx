import React from "react";
import { TriggerWhenInView } from "../components/trigger-when-in-view.tsx";
import { RowWithStickyKey } from "../components/row-with-sticky-key.tsx";

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

<TriggerWhenInView baseClass="translate-content"
intersectionClass='translate-content--animate'>

<div className="about-me">
   ABOUT ME
</div>
</TriggerWhenInView>

<div className="generic-content-wrapper">
   Currently working on frontend technologies, but dont want to be limited to them. Always looking forward to learning new technologies in different domains.
   I could live a thousand years, i would learn everything the world has to offer.

   knowlege is power
   -- despicable LittleFinger 
</div>

<RowWithStickyKey contentKey='Experience'
content="experiences"
/>

<RowWithStickyKey contentKey='Preffered Stack'
content="Preffered Stack"
/>

<RowWithStickyKey contentKey='Projects'
content="Projects not defined"
/>
<div className="generic-content-wrapper">
   Contact Me
</div>

   </>;
};

export default App;