import {TypeSample} from "./models.enums";

export interface Equipment {
    "id": string,
    "name": string,
    "type": string,
    "available": boolean                // Dispo au début ou pas
}