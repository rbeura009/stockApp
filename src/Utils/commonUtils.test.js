import { isEmptyObject } from "./commonUtils";

test("isEmptyObject", () => {
  expect(isEmptyObject({})).toBe(true);
  expect(isEmptyObject({ name: "any" })).toBe(false);
});
