import {assignation} from "../src/services/assignation.service";

describe("assignation", () => {
    const input = {samples: [], technicians: [], equipment: []}

    const result = assignation(input)

    expect(result).toBeDefined()
})

