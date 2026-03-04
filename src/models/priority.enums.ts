export enum Priority {
    STAT = "STAT",
    URGENT = "URGENT",
    ROUTINE = "ROUTINE"
}

export const priorityOrder: Record<Priority, number> = {
    [Priority.STAT]: 0,
    [Priority.URGENT]: 1,
    [Priority.ROUTINE]: 2
}
