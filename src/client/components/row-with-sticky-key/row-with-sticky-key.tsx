import React from "react";
import "./row-with-sticky-key-style.scss";

export const RowWithStickyKey=({contentKey, content}: {contentKey:string, content: React.JSX.Element})=>{
return <>
<div className="sticky-key">
   <div className="key-wrapper">
      <div className="key">{contentKey}</div>
   </div>
<div className="row-value">
    {content}
</div>
</div>
</>;
};