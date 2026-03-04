import {Sample} from "../models/sample.interface";
import {Technician} from "../models/technician.interface";
import {Input} from "../models/input.models";
import {Equipment} from "../models/equipment.interface";
import {transformToMinutes} from "../utils/transformToMinutes.utils";


function createProgram(userPlanning?: Technician | Equipment): Record<number, string> {
    let startTime = transformToMinutes("00:00")
    let endTime = transformToMinutes("23:59")

    if (userPlanning) {
        if ("startTime" in userPlanning && "endTime" in userPlanning) {
            startTime = transformToMinutes(userPlanning.startTime)
            endTime = transformToMinutes(userPlanning.endTime)
        }
    }
    let program: Record<number, string> = {}

    for (let i = startTime; i < endTime; i += 15) {
        program[i] = "ok"
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