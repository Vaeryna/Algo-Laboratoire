import {Technician} from "../models/technician.interface";
import {Equipment} from "../models/equipment.interface";

export const step = 15;

export function isFree(planning: Record<number, string>, startHour: number, durationMinutes: number) {
    const slotNeeded = Math.ceil(durationMinutes / step)
    const end = startHour + slotNeeded * step

    for (let h = startHour; h < end; h += step) {
        if (planning[h] !== "ok") return false
    }
    return true
}


export function findAllTechWithSpe(input: Technician[], spe: string) {
    return input.filter((tech: Technician) => tech.speciality === spe || "GENERAL")
}


export function findAllEquipmmentWithSpe(input: Equipment[], spe: string) {
    return input.filter((equipment: Equipment) => equipment.type === spe && equipment.available)
}


export function booking(program: Record<number, string>, startHour: number, durationMinutes: number, sampleID: string) {

    const slotNeeded = Math.ceil(durationMinutes / step)

    const end = startHour + slotNeeded * step

    for (let h = startHour; h < end; h += step) {
        program[h] = sampleID
    }
    return program
}