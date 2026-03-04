import {Priority, priorityOrder} from "../models/priority.enums";
import {transformToMinutes} from "./transformTime.utils";
import {Sample} from "../models/sample.interface";
import {Technician} from "../models/technician.interface";

export function sortByPriority(input: Sample[]) {
    return input.sort((a, b): number => {
        if (!a.priority) a.priority = Priority.ROUTINE
        if (!b.priority) b.priority = Priority.ROUTINE

        return priorityOrder[a.priority] - priorityOrder[b.priority]
    })
}

export function sortSampleByArrivalTime(input: Sample[]): Sample[] {
    return input.sort((a, b): number => {
        return transformToMinutes(a.arrivalTime) - transformToMinutes(b.arrivalTime)
    })
}


export function sortByTechSpe(input: Technician[], speciality: string) {
    const GENERAL = "GENERAL"

    return [...input].sort((a, b): number => {
        const score = (t: Technician) => {
            if (t.speciality === speciality) return 0
            if (t.speciality === GENERAL) return 1
            return 2
        }
        return score(a) - score(b)
    })
}