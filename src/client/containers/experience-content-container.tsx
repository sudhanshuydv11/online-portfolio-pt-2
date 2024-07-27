import React from "react";
import { RowWithStickyKey } from "../components/row-with-sticky-key/row-with-sticky-key.tsx";
import { ExperienceContent } from "../components/experience-content/experience-content.tsx";

export const ExperienceContentContainer=()=>{

    const EXPERIENCE_CONTENT=<ExperienceContent/>;
    
    return<>
    <RowWithStickyKey contentKey='EXPERIENCE'
    content={EXPERIENCE_CONTENT}
    />
    </>;
};