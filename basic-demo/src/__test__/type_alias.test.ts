type ID = number | string;

function saveId(id: ID): string {
  if (typeof id == 'string') {
    return id.toUpperCase();
  }
  return id + "";
}

test("", () => {
  expect(saveId("coda_123243")).toEqual("CODA_123243");
  expect(saveId(10001)).toEqual("10001");
})