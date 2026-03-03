import {Speciality} from "./models.enums";

export interface Technician {

    "id": string,
    "name": string,
    "speciality": Speciality,
    "startTime": string,            // Début de service | heure en HH:MM
    "endTime": string            // Fin de service | heure en HH:MM

}