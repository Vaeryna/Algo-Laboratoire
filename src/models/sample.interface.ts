import {prioritySample, TypeSample} from "./models.enums";

export interface SampleInterface {
    "id": string
    "type": TypeSample
    "priority": prioritySample
    "analysisTime": number,  //durée en minutes
    "arrivalTime": string,          // heure en HH:MM
    "patientId": string
}