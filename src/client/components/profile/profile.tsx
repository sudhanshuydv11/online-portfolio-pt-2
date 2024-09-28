import React from "react";
import { Shutter } from "../shutter/shutter.tsx";
import "./profile.scss";

export const Profile=()=>{
    return <div className="profile">
     <Shutter>
   <div className="background">
   <img className="background-image" src="https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-1.jpg">
   </img>
   </div>
   <div className="my-name">
      <text>Sudhanshu</text>
      <text>Yadav</text>
   </div>
</Shutter>
    </div> ;   
};