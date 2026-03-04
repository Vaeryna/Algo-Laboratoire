import {Sample} from "../models/sample.interface";
import {Technician} from "../models/technician.interface";
import {Input} from "../models/input.models";
import {Equipment} from "../models/equipment.interface";
import {transformToHours, transformToMinutes} from "../utils/transformTime.utils";
import {sortByPriority, sortByTechSpe, sortSampleByArrivalTime} from "../utils/sortBy.utils";
import {booking, findAllEquipmmentWithSpe, findAllTechWithSpe, isFree, step} from "../utils/availability.utils";
import {Output} from "../models/output.interface";


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
    const output: Output = {
        schedule: [],
        metrics: {
            totalTime: 0,
            efficiency: 0,
            conflicts: 0
        }
    };

    const samples: Sample[] = sortSamples(addEndTime(input.samples))

    const techniciansArray: Technician[] = input.technicians.map(tech => {
        let program: Record<string, string> = createProgram(tech);
        return ({...tech, program})
    });
    const equipmentArray: Equipment[] = input.equipment.map(eq => {
        let program: Record<string, string> = createProgram(eq);
        return ({...eq, program})
    });

    for (const sample of samples) {
        const technicians = sortByTechSpe(findAllTechWithSpe(techniciansArray, sample.type), sample.type)
        const equipment = findAllEquipmmentWithSpe(equipmentArray, sample.type)

        let placed = false

        for (const tech of technicians) {
            for (const eq of equipment) {
                let start = transformToMinutes(sample.arrivalTime)
                const slotNeeded = Math.ceil(sample.analysisTime / step)
                const endDay = transformToMinutes("23:59")
                let lastStart = endDay - sample.analysisTime;


                if (!tech.program || !eq.program) continue

                while (start <= lastStart && !isFree(tech.program, start, sample.analysisTime) || !isFree(eq.program, start, sample.analysisTime)) {
                    start += step
                }
                const end = start + slotNeeded * step

                booking(tech.program, start, sample.analysisTime, sample.id)
                booking(eq.program, start, sample.analysisTime, sample.id)


                output.schedule.push({
                    sampleId: sample.id,
                    technicianId: tech.id,
                    equipmentId: eq.id,
                    startTime: transformToHours(start),
                    endTime: transformToHours(end),
                    priority: sample.priority
                })

                placed = true
                break
            }
            if (placed) break
        }
        console.log("placer", sample.id)
        console.log("tech", technicians.map((t) => t.id))
        console.log("machines", equipment.map(e => e.id))

    }

    console.log(output)
}