const { values } = require("../../index");

describe("values validation", () => {
  it("is formatToReal working", () => {
    var valueTest = 100;
    const validation = values.formatToReal(valueTest) == "R$ 100,00";
    expect(validation).toBe(true);
  });

  it("is formatToReal without prefix working", () => {
    var valueTest = 100;
    const validation = values.formatToReal(valueTest, false) == "100,00";
    expect(validation).toBe(true);
  });
});
