export interface Output {
    "schedule":
        {
            "sampleId": string,
            "technicianId": string,
            "equipmentId": string,
            "startTime": string
            "endTime": string,
            "priority": string
        }[],
    "metrics": {
        "totalTime": number,
        "efficiency": number,
        "conflicts": number
    }[]
}