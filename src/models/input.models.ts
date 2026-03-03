import {Sample} from "./sample.interface";
import {Technician} from "./technician.interface";
import {Equipment} from "./equipment.interface";

export interface Input {
    samples: Sample[]
    technicians: Technician[]
    equipment: Equipment[]
}