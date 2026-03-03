import {TypeSample} from "./models.enums";

export interface Equipment {
    "id": string,
    "name": string,
    "type": TypeSample,
    "available": boolean                // Dispo au début ou pas
}