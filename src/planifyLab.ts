import {INPUT_PATH} from "./config";
import {Input} from "./models/input.models";
import {readFileSync} from "fs";
import {createPlanning} from "./services/createOutPutFile";

function loadInput(path: string): Input {
    const raw = readFileSync(path, "utf-8");
    return JSON.parse(raw)
}

const input = loadInput(INPUT_PATH)


function planifyLab() {
    console.log(createPlanning(input))

}


planifyLab()