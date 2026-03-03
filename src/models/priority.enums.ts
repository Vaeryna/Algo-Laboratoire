export enum Priority {
    STAT = "STAT",
    URGENT = "URGENT",
    ROUTINE = "ROUTINE"
}

export const priorityOrder: Record<Priority, number> = {
    [Priority.STAT]: 1,
    [Priority.URGENT]: 0,
    [Priority.ROUTINE]: 2
}
