export interface Equipment {
    "id": string,
    "name": string,
    "type": string,
    "available": boolean
    program?: Record<number, string>;
}