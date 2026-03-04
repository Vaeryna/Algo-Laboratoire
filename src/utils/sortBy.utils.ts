import {Priority, priorityOrder} from "../models/priority.enums";
import {transformToMinutes} from "./transformTime.utils";
import {Sample} from "../models/sample.interface";

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

export function sortByEndTimeSample(input: Sample[]): Sample[] {
    const totalTime = input.map(sample => {
        let totalTime: number = transformToMinutes(sample.arrivalTime) + sample.analysisTime;
        return ({...sample, endTime: totalTime})
    })

    return totalTime.sort((a, b): number => {
        return a.endTime - b.endTime
    })
}