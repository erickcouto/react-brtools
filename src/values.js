const formatToReal = (number, usePrefix = true) => {
  if (!isNaN(number)) {
    const prefix = usePrefix ? "R$ " : "";
    return (
      prefix +
      number
        .toFixed(2)
        .replace(".", ",")
        .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
    );
  } else {
    throw "O valor precisa ser um número";
  }
};

export default {
  formatToReal
};
