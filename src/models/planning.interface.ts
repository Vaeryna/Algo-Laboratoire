import {prioritySample} from "./models.enums";

export interface Schedule {
    "sampleId": string;
    "technicianId": string;
    "equipmentId": string;
    "startTime": string; // ex: '09:30"
    "endTime": string;
    "priority": prioritySample;
}

export interface Metrics {
    "totalTime": number; //durée totale en minutes
    "efficiency": number; // en pourcentage: (somme durées analyse / temps total plannig *100)
    "conflict": number //nombre de conflits détectés
}

