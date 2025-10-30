# Halloween.dev – Registro de retos

Este repositorio recopila las indicaciones de los retos de programación publicados cada año en Halloween por la comunidad de MiduDev. Aquí iré añadiendo, reto por reto, un resumen claro de cada enunciado y ejemplos para estudiar y comparar mis soluciones en el futuro.

**Fuente y créditos**
- Página oficial de retos: https://www.halloween.dev/es
- Todo el material y temática pertenecen a sus autores. Este README solo organiza los enunciados para fines educativos.

---

## Reto #01 – La posesión del código
— Inicio Reto #01 —

**Descripción**
- Regan ha sido poseída y ahora habla en un lenguaje extraño. El Padre Karras descubre que, cuando está poseída, invierte completamente las palabras que dice, pero mantiene el orden de las frases.

**Objetivo**
- Implementar una función `translatePossessed(message)` que traduzca los mensajes de Regan al lenguaje normal.

**Requisitos**
- Mantener el orden de las palabras en la frase.
- Invertir los caracteres de cada palabra de forma individual.
- Conservar los espacios tal cual aparecen entre palabras (no colapsarlos ni normalizarlos).
- Si el mensaje está vacío o solo contiene espacios, devolver una cadena vacía (`""`).
- Las palabras pueden contener mayúsculas y minúsculas, y su casing debe mantenerse tras la inversión.

**Ejemplos**

```ts
const message1 = 'i yojne gnihctaw uoy'
translatePossessed(message1) // "i enjoy watching you"

const message2 = 'siht si gnorw'
translatePossessed(message2) // "this is wrong"

const message3 = '   '
translatePossessed(message3) // ""

const message4 = 'dooG secitcarP'
translatePossessed(message4) // "Good Practices"
```

— Fin Reto #01 —

---

## Reto #02 – Cuenta las ovejas
— Inicio Reto #02 —

**Descripción**
- Es medianoche en `Elm Street` y necesitas dormir. Intentas contar ovejas, pero las letras en tu mente están completamente desordenadas por culpa de Freddy.
- Tienes una cadena caótica con letras mezcladas. Tu objetivo es calcular cuántas veces puedes formar la palabra `"sheep"` antes de que Freddy te atrape en la pesadilla.

**Objetivo**
- Contar cuántas ovejas completas se pueden formar con las letras disponibles.

**Función a implementar**
- `countSheep(letters)` debe:
  - Recibir un `string` con letras desordenadas.
  - Contar cuántas veces se puede formar la palabra `"sheep"`.
  - Devolver el número de ovejas completas que puedes contar.

**Importante**
- Para formar `"sheep"` necesitas: `s`, `h`, `e`, `e`, `p` (la `e` aparece 2 veces).

**Ejemplos**

```ts
countSheep('sheepxsheepy')
// => 2 (puedes formar "sheep" dos veces)

countSheep('sshhheeeppp')
// => 2 (s=2, h=3, e=4, p=3 → solo 2 "sheep" completas)

countSheep('hola')
// => 0 (no hay suficientes letras)

countSheep('peesh')
// => 1 (las letras están desordenadas pero están todas)
```

— Fin Reto #02 —

---