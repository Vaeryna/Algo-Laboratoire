import {Sample} from "../models/sample.interface";
import {Technician} from "../models/technician.interface";
import {Input} from "../models/input.models";
import {Equipment} from "../models/equipment.interface";
import {transformToMinutes} from "../utils/transformToMinutes.utils";


function createProgram(technician: Technician): Record<string, boolean> {
    const startTime: number = transformToMinutes(technician.startTime)
    const endTime: number = transformToMinutes(technician.endTime)

    let program: Record<number, boolean> = {}

    for (let i = startTime; i < endTime; i += 15) {
        program[i] = true
    }

    return program
}


export function assignation(input: Input) {
//je recupere tout le fichier : samples et techniciens et machines

    const samples: Sample[] = input.samples;
    const technicians: Technician[] = input.technicians.map(tech => {
                let program = createProgram(tech);
                return ({...tech, program})
            }
        )


    ;  //ajout statut à la volée
    const equipment: Equipment[] = input.equipment;

console.log("techos", technicians)



}