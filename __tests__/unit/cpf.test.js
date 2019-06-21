const { cpf } = require("../../index");

describe("cpf validation", () => {
  it("is positive validation working", () => {
    var cpfNumber = "60634314033";
    const validation = cpf.validate(cpfNumber);
    expect(validation).toBe(true);
  });

  it("is negative validation working", () => {
    var cpfNumber = "01202301231";
    const validation = cpf.validate(cpfNumber);
    expect(validation).toBe(false);
  });
});
