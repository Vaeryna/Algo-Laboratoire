export function transformToMinutes(horaire: string): number {
    let hours = parseInt(horaire.split(":")[0])
    let minutes = parseInt(horaire.split(":")[1])

    return (hours * 60) + minutes
}
