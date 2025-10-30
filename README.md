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