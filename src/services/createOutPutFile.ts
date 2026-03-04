import {Input} from "../models/input.models";
import {Sample} from "../models/sample.interface";
import {Metrics} from "../models/planning.interface";
import {assignation} from "./assignation.service";


function totalTimeCalc(input: Input): number {
    let result = 0
    let analysisTime: Array<Sample> = input.samples

    analysisTime.map((t) => {
        result += t.analysisTime;
    })
    return result
}


// if ( tech = dispo && machine = dispo) { schedule tech = tech, schedul machine = machine , schedule startTime = XX, schedule endtime = startTime+analysisTime

// export function createPlanning(schedule: Output) {
export function createPlanning(input: Input): any {
    const totalTime: number = totalTimeCalc(input)
    const efficiency: number = 0;
    const conflict: number = 0


    assignation(input)


    return {totalTime: totalTime, efficiency: efficiency, conflict: conflict}
    // liste des schedule
    // additionner les minutes de durées  --> total time des metrics
    // calcul efficiency
    // verif conflit
}

