import {Input} from "../models/input.models";
import {Priority, priorityOrder} from "../models/priority.enums";
import {transformToMinutes} from "./transformToMinutes.utils";

export function sortByPriority(input: Input) {

    return input.samples.sort((a, b): number => {
        if (!a.priority) a.priority = Priority.ROUTINE
        if (!b.priority) b.priority = Priority.ROUTINE

        return priorityOrder[a.priority] - priorityOrder[b.priority]

    })
}

export function sortByArrivalTime(input: Input) {
    return input.samples.sort((a, b): number => {
        return transformToMinutes(a.arrivalTime) - transformToMinutes(b.arrivalTime)
    })

}