const { email } = require("../../index");

describe("email validation", () => {
  it("is positive validation working", () => {
    var emailText = "erick@erickalves.com.br";
    const validation = email.validate(emailText);
    expect(validation).toBe(true);
  });

  it("is negative validation working", () => {
    var emailText = "erick@erickalves";
    const validation = email.validate(emailText);
    expect(validation).toBe(false);
  });
});
