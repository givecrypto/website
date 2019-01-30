import { toGlobalId, fromGlobalId } from "../utils/globalId";

describe("global ID", () => {
  test("to and from globalId undo each other", async () => {
    expect(fromGlobalId(toGlobalId({ id: "1", type: "AwesomeType" }))).toEqual({
      id: "1",
      type: "AwesomeType",
    });
  });
});
