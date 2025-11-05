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

## Reto #03 – Es viernes 13
— Inicio Reto #03 —

**Descripción**
- Michael Myers ha dejado un patrón en su calendario. Cada año ataca en la noche de Halloween (31 de octubre) o en cualquier viernes 13.

**Objetivo**
- Encontrar todas las noches de terror de un año concreto.

**Función a implementar**
- `myersCalendar(year)` debe:
  - Recibir un año (por ejemplo `2025`). Si no dan un año válido, devolver un array vacío `[]`.
  - Devolver todas las fechas del año que sean `31 de octubre` y/o `viernes 13`.
  - Entregar las fechas ordenadas cronológicamente.
  - Usar el formato exactamente `YYYY-MM-DD` (con ceros a la izquierda si hace falta).

**Ejemplos**

```ts
myersCalendar(2025)
// => ['2025-06-13', '2025-09-13', '2025-10-31']

myersCalendar(2026)
// => ['2026-02-13', '2026-03-13', '2026-10-13', '2026-11-13']

myersCalendar(2024)
// => ['2024-09-13', '2024-10-31', '2024-12-13']
```

— Fin Reto #03 —

---

## Reto #04 – ¿Cuál es tu algoritmo favorito?
— Inicio Reto #04 —

**Descripción**
- Ghostface tiene una lista ordenada de 1000 víctimas potenciales con sus números de teléfono. Debes encontrar un número específico lo más rápido posible.

**Objetivo**
- Implementar `searchPhone(phones, target)` usando BÚSQUEDA BINARIA para localizar el índice del número en un array ordenado.

**Entradas**
- `phones`: Array de números ordenados de menor a mayor (por ejemplo: `[1001, 1002, 1005, 1008, 1010, 1015, 1020]`).
- `target`: Número de teléfono a buscar.

**Salida**
- El índice (posición) donde se encuentra el número.
- `-1` si el número no existe en la lista.

**Consejo (Algoritmo de Búsqueda Binaria)**
1. Mira el elemento del medio del array.
2. Si es el objetivo, ¡lo encontraste!
3. Si el objetivo es menor, busca en la mitad izquierda.
4. Si el objetivo es mayor, busca en la mitad derecha.
5. Repite hasta encontrarlo o quedarte sin elementos.

**Ejemplos**

```ts
const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]

searchPhone(phones, 1008)
// => 3 (está en el índice 3)

searchPhone(phones, 1001)
// => 0 (está en el índice 0)

searchPhone(phones, 1020)
// => 6 (está en el índice 6)

searchPhone(phones, 9999)
// => -1 (no existe)
```

— Fin Reto #04 —

---

## Reto #05 – Quiero jugar a un juego...
— Inicio Reto #05 —

**Descripción**
- Tienes una cerradura de combinación con 4 ruedas, cada una con dígitos del 0 al 9. La cerradura muestra un código actual y debes cambiarla a un código objetivo.
- Puedes girar cada rueda hacia arriba (+1) o hacia abajo (-1). Las ruedas son circulares: después de `9` viene `0` y antes de `0` está `9`.
- Debes conseguir cambiar la combinación con el mínimo número de movimientos. Cada giro cuenta como un movimiento.

**Objetivo**
- Implementar `changeLock(current, target)` que devuelva el número mínimo de movimientos necesarios para llegar al código objetivo.

**Entradas**
- `current`: Código actual (string de 4 dígitos, ej: `'0022'`).
- `target`: Código objetivo (string de 4 dígitos, ej: `'0044'`).

**Reglas**
- Cada rueda puede girar `+1` o `-1`.
- Las ruedas son circulares: `9→0` y `0→9`.
- Cada giro cuenta como 1 movimiento.
- Las 4 ruedas son independientes.

**Ejemplos**

```ts
changeLock('0022', '0044')
// => 4
// Rueda 2: 2→4 (2 movimientos hacia adelante)
// Rueda 3: 2→4 (2 movimientos hacia adelante)
// Total: 2+2 = 4

changeLock('0000', '9999')
// => 4
// Cada rueda: 0→9 (1 movimiento hacia atrás es más rápido que 9 hacia adelante)
// Total: 1+1+1+1 = 4

changeLock('1234', '5678')
// => 16
// Rueda 0: 1→5 (4 movimientos)
// Rueda 1: 2→6 (4 movimientos)
// Rueda 2: 3→7 (4 movimientos)
// Rueda 3: 4→8 (4 movimientos)
// Total: 4+4+4+4 = 16

changeLock('0000', '0000')
// => 0
// Ya estamos en el código objetivo

changeLock('1357', '2468')
// => 4
// Rueda 0: 1→2 (1 movimiento)
// Rueda 1: 3→4 (1 movimiento)
// Rueda 2: 5→6 (1 movimiento)
// Rueda 3: 7→8 (1 movimiento)
// Total: 1+1+1+1 = 4
```

— Fin Reto #05 —

---

## Reto #06 – El caos
— Inicio Reto #06 —

**Descripción**
- Art the Clown ha capturado a unas víctimas y las ha sentado en círculo, numeradas del `0` a `N-1`.
- Comienza en la posición `0` y cuenta `K` víctimas en sentido horario (incluyendo a la persona actual en la cuenta). La víctima donde termina la cuenta es eliminada.
- Luego continúa contando `K` posiciones desde la siguiente persona viva. El proceso se repite hasta que solo queda una persona.

**Objetivo**
- Implementar `surviveRoulette(victims, count)` que devuelva la posición de la última víctima que sobrevive.

**Parámetros**
- `victims`: Número total de víctimas (sentadas en posiciones `0` a `n-1`).
- `count`: Número a contar para eliminar a la siguiente víctima.

**Salida**
- Índice (posición) de la última persona superviviente.

**Ejemplos**

```ts
surviveRoulette(4, 2)
// Resultado: 0
// Explicación:
// Inicio de 4 víctimas: [0, 1, 2, 3]
// Cuenta 2 desde posición 0: elimina 1 → [0, 2, 3]
// Cuenta 2 desde la última víctima: elimina 3 → [0, 2]
// Cuenta 2 desde la última víctima: elimina 2 → [0]
// Sobrevive: 0

surviveRoulette(5, 3)
// Resultado: 3
// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 3 desde 0: elimina 2 → [0, 1, 3, 4]
// Cuenta 3 desde 3: elimina 0 → [1, 3, 4]
// Cuenta 3 desde 1: elimina 4 → [1, 3]
// Cuenta 3 desde 1: elimina 1 → [3]
// Sobrevive: 3

surviveRoulette(5, 10)
// Resultado: 3
// Explicación:
// Inicio de 5 víctimas: [0, 1, 2, 3, 4]
// Cuenta 10 desde 0: elimina 4 → [0, 1, 2, 3]
// Cuenta 10 desde 0: elimina 1 → [0, 2, 3]
// Cuenta 10 desde 1: elimina 2 → [0, 3]
// Cuenta 10 desde 1: elimina 0 → [3]
// Sobrevive: 3
```

— Fin Reto #06 —

---