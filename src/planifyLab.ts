import {INPUT_PATH} from "./config";
import {Input} from "./models/input.models";
import {readFileSync} from "fs";
import {createPlanning} from "./services/createOutPutFile";
import * as fs from "node:fs";

function loadInput(path: string): Input {
    const raw = readFileSync(path, "utf-8");
    return JSON.parse(raw)
}

const input = loadInput(INPUT_PATH)


function planifyLab() {
    console.log(createPlanning(input))

    fs.writeFileSync("src/data/output.txt", JSON.stringify(createPlanning(input), null, 2))

}


planifyLab()