import {Input} from "../models/input.models";
import {Sample} from "../models/sample.interface";
import {Metrics} from "../models/planning.interface";
import {assignation} from "./assignation.service";


function totalTimeAnalysisCalc(input: Input): number {
    let result = 0
    let analysisTime: Array<Sample> = input.samples

    analysisTime.map((t) => {
        result += t.analysisTime;
    })
    return result
}


function totalTimeCalc(output: Output): number {
    const starts = output.schedule.map(st => transformToMinutes(st.startTime))
    const ends = output.schedule.map(et => transformToMinutes(et.endTime))

    const firstStart: number = Math.min(...starts)
    const lastEnd: number = Math.max(...ends)

    return lastEnd - firstStart;
}

    assignation(input)


    const totalTime: number = totalTimeCalc(output)
    const efficiency: number = (totalTimeAnalysisCalc(input) / totalTimeCalc(output)) * 100;
    const conflict: number = 0 // isFree() manage conflicts

