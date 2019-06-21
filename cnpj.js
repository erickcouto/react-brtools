const validate = cnpj => {
  var validation = new Array(6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2);
  var dig1 = new Number();
  var dig2 = new Number();

  exp = /\.|\-|\//g;
  cnpj = cnpj.toString().replace(exp, "");
  var digit = new Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

  for (i = 0; i < validation.length; i++) {
    dig1 += i > 0 ? cnpj.charAt(i - 1) * validation[i] : 0;
    dig2 += cnpj.charAt(i) * validation[i];
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

  if (dig1 * 10 + dig2 != digit) {
    return false;
  } else {
    return true;
  }
};
export default {
  validate
};
