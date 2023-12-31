
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

import { formFieldData } from "../data/formdata";
import { survey_theme } from "../data/survey_theme";
import { createNewResponse } from "../api/api";


function SurveyComponent({forJobId}) {
    const survey = new Model(formFieldData);
    survey.applyTheme(survey_theme)
    survey.completedHtml = "Thank you for applying"
    survey.onComplete.add( async(sender) => {
       await createNewResponse({...sender.data,forJobId});
    });
    
    return (<Survey model={survey}  />);
}

export default SurveyComponent;