import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import { formFieldData } from "../data/formdata";
import { survey_theme } from "../data/survey_theme";


function SurveyComponent() {
    const survey = new Model(formFieldData);
    survey.applyTheme(survey_theme)
    survey.completedHtml = "Thank you for applying"
    survey.onComplete.add((sender) => {
        console.log(JSON.stringify(sender.data));
    });
    
    return (<Survey model={survey}  />);
}

export default SurveyComponent;