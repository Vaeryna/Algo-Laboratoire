import {Technician} from "../models/technician.interface";

const step = 15;

function isFree(planning: Record<number, string>, startHour: number, durationMinutes: number) {
    const slotNeeded = Math.ceil(durationMinutes / step)
    const end = startHour + slotNeeded * step

    for (let h = startHour; h < end; h += step) {
        if (planning[h] !== "ok") return false
    }
    return true
}


export function findAllTechAvailableBySpe(input: Technician[], spe: string, time: number, duration: number) {
    return input.filter((tech: Technician) => tech.speciality === spe && tech.program == "ok" && isFree(tech.program, time, duration))
}


export function booking(program: Record<number, string>, startHour: number, durationMinutes: number, sampleID: string) {

    while (!isFree(program, startHour, durationMinutes)) startHour += step

    const slotNeeded = Math.ceil(durationMinutes / step)

    const end = startHour + slotNeeded * step

    for (let h = startHour; h < end; h += step) {
        program[h] = sampleID
    }
    return program
}