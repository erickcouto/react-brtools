const validate = cpf => {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9, 10].forEach(function(j) {
    var sum = 0,
      r;
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach(function(e, i) {
        sum += parseInt(e) * (j + 2 - (i + 1));
      });
    r = sum % 11;
    r = r < 2 ? 0 : 11 - r;
    if (r != cpf.substring(j, j + 1)) result = false;
  });
  return result;
};

export default {
  validate
};
