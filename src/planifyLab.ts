import {createPlanning} from "./services/createPlanning.service";
import {INPUT_PATH} from "./config";
import {Input} from "./models/input.models";
import {readFileSync} from "fs";

function loadInput(path: string): Input {
    const raw = readFileSync(path, "utf-8");
    return JSON.parse(raw)
}

const input = loadInput(INPUT_PATH)


function planifyLab() {
    console.log("index", createPlanning(input))
}


planifyLab()