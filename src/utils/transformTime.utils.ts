export function transformToMinutes(horaire: string): number {
    let hours = parseInt(horaire.split(":")[0])
    let minutes = parseInt(horaire.split(":")[1])

    return (hours * 60) + minutes
}

export function transformToHours(minutesPastMidnight: number): string {
    const hours: number = Math.floor(minutesPastMidnight / 60);
    const minutes: number = minutesPastMidnight % 60

    return `${hours.toString().padStart(2, "0")}: ${minutes.toString().padStart(2, "0")}`
}