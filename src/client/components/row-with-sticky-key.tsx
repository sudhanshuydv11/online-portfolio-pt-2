import React from "react";

export const RowWithStickyKey=({contentKey, content}: {contentKey:string, content:string})=>{
return <>
<div className="sticky-key">
   <div className="key-wrapper">
      <div className="key">{contentKey}</div>
   </div>
<div className="generic-content-wrapper">
    {content}
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
</div>
</>;
};