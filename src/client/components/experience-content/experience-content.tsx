import React from "react";
import { ExperienceContentItem } from "../experience-content-tem/experience-content-item.tsx";

export const ExperienceContent=()=>{

    const adidasContent= "The project primarily focused on Redux, React, and Typescript technologies.As a developer, I actively participated in feature planning and implementation, API integration and debugging for performance improvements. Additionally, I regularly reviewed pull requests to maintain code quality and adherence to best practices of adidas.I effectively communicated technical issues to both technical and non-technical audiences. For technical audiences, I provided detailed insights into the problems and potential solutions using appropriate technical terms. For non-technical audiences I provided the High Level Design and Business Logic. In addition to my technical responsibilities, I also took on a ownership role within the team. I facilitated daily standup meetings for several sprints, ensuring that all team members were aligned, updated on progress, and aware of any potential roadblocks.Furthermore, at the end of each sprint, I regularly conducted demo sessions, showcasing the completed features and functionalities to relevant stakeholders.";
    const PURPLE_GRAIL_CONTENT ="As part of my role, I was responsible for setting up and editing websites for clients.This involved working closely with clients to understand their specific requirements, preferences, and goals for their websites. I would gather information about their branding, content, desired functionalities, and any specific design elements they wanted to incorporate." ;
    return <div className="experience-content-wrapper">
            <ExperienceContentItem company="Adidas"
                content={adidasContent}/>
            <ExperienceContentItem company="Purple Grail"
                content={ PURPLE_GRAIL_CONTENT }/>
           </div>;
};