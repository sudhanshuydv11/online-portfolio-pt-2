import React from "react";
import { TriggerWhenInView } from "../components/trigger-when-in-view.tsx";

const App = () => {

return <>
   <div className="my-name">
      Sudhanshu Yadav
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
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
</div>
<div className="generic-content-wrapper">
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
</div>
<div className="generic-content-wrapper">
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
</div>
<TriggerWhenInView baseClass='translate-content'
intersectionClass='translate-content--animate'>
<div className="generic-content-wrapper">
lore ipsum
</div>
</TriggerWhenInView>
<div className="generic-content-wrapper">
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
   i lore ipsum
</div>
   </>;
};

export default App;