import React from "react";
import { RowWithStickyKey } from "../components/row-with-sticky-key/row-with-sticky-key.tsx";
import { TechStackContent } from "../components/tech-stack-content/tech-stack-content.tsx";

export const PreferredStackContainer=()=>{
return<>
<RowWithStickyKey contentKey="PREFERED STACK"
content={<><TechStackContent/></>}
/>
</>;
};