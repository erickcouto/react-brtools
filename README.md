# React BrTools

Conjunto de utilitários para trabalhar com padrões brasileiros no React JS e React Native.

## Instalação

```
$ yarn add react-brtools
```

## Utilização

```js
import { cpf } from "react-brtools";

if (cpf.validate(cpf)) {
  console.log("CPF válido");
} else {
  console.log("CPF inválido");
}
```

ou

```js
import * as Brtools from "react-brtools";

console.log(Brtools.values.formatToReal(100));
// will log R$ 100,00
```

# Funções

##values

## formatToReal()

| Parameters  | Type      | Default | Notes                                                  |
| ----------- | --------- | ------- | ------------------------------------------------------ |
| `number`    | `int`     |         |
| `usePrefix` | `boolean` | `true`  | Utilize para retonar o valor já com prefixo R\$ ou não |

## cpf

### validate()

| Parameters | Type     | Default | Notes |
| ---------- | -------- | ------- | ----- |
| `cpf`      | `string` |         |       |

## cnpj

### validate

| Parameters | Type     | Default | Notes |
| ---------- | -------- | ------- | ----- |
| `cnpj`     | `string` |         |       |

## email

### validate()

| Parameters | Type     | Default | Notes |
| ---------- | -------- | ------- | ----- |
| `email`    | `string` |         |       |
