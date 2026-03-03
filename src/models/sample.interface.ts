import {Priority} from "./priority.enums";

export interface Sample {
    "id": string,
    "type": string,
    "priority": Priority,
    "analysisTime": number,  //durée en minutes
    "arrivalTime": string,          // heure en HH:MM
    "patientId": string
}