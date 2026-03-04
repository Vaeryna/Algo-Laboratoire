import {Sample} from "../models/sample.interface";
import {Technician} from "../models/technician.interface";
import {Input} from "../models/input.models";
import {Equipment} from "../models/equipment.interface";
import {transformToMinutes} from "../utils/transformTime.utils";
import {sortByPriority} from "../utils/sortBy.utils";
import {booking, findAllTechAvailableBySpe} from "../utils/availability.utils";


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

const sortSamples: (samples: Sample[]) => Sample[] = (samples: Sample[]): Sample[] => sortByPriority(samples) || sortSampleByArrivalTime(samples);

const addEndTime: (samples: Sample[]) => Sample[] = (samples: Sample[]): Sample[] => samples.map(sample => {
    let totalTime: number = transformToMinutes(sample.arrivalTime) + sample.analysisTime;
    return ({...sample, endTime: totalTime})
});


export function assignation(input: Input) {

    const samples: Sample[] = sortSamples(addEndTime(input.samples))

    const techniciansArray: Technician[] = input.technicians.map(tech => {
        let program: Record<string, string> = createProgram(tech);
        return ({...tech, program})
    });
    const equipmentArray: Equipment[] = input.equipment.map(eq => {
        let program: Record<string, string> = createProgram(eq);
        return ({...eq, program})
    });

    // console.log("techos", technicians)
    // console.log("machine", equipment)
    // console.log("samples", samples)



    ;  //ajout statut à la volée
    const equipment: Equipment[] = input.equipment;

console.log("techos", technicians)



}