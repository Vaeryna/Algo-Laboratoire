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
        "totalTime": number,      // Une seule analyse de 30min
        "efficiency": number,  // Ressources utilisées à 100%
        "conflicts": number        // Aucun conflit
    }
}