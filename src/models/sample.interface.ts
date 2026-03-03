import {prioritySample, TypeSample} from "./models.enums";

export interface Sample {
    "id": string,
    "type": string,
    "priority": string,
    "analysisTime": number,  //durée en minutes
    "arrivalTime": string,          // heure en HH:MM
    "patientId": string
}