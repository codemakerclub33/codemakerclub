# Culori MakeCode (denumiri în lecțiile micro:bit blocuri)

Aceeași idee ca la Scratch: **text colorat** (culoarea fontului), numele blocurilor în **engleză**, exact cum apar în editor. Culorile sunt luate din capturi de ecran din MakeCode (31 oct 2026).

| Categorie MakeCode | Culoare text | Exemple de blocuri |
|--------------------|--------------|--------------------|
| Basic | `#1E90FF` albastru | `on start`, `forever`, `show icon`, `show string`, `show leds`, `show number`, `pause (ms)`, `clear screen` |
| Input | `#D400D4` magenta | `on button A pressed`, `on shake`, `button A is pressed`, `acceleration (mg)`, `light level`, `temperature (°C)`, `is shake gesture` |
| Music | `#E63022` roșu-portocaliu | `play tone`, `play melody`, `ring tone`, `rest for`, `set volume`, `stop all sounds` |
| LED | `#5C2D91` violet închis | `plot x y`, `toggle x y`, `unplot x y`, `point x y`, `plot bar graph` |
| Radio | `#E3008C` roz | `radio set group`, `radio send number`, `radio send value`, `radio send string`, `on radio received` |
| Loops | `#00A600` verde | `repeat 4 times`, `while`, `for index from 0 to 4`, `every 500 ms`, `break`, `continue` |
| Logic | `#00A4A6` turcoaz | `if … then`, `if … then … else`, `0 = 0`, `0 < 0`, `and`, `or`, `not` |
| Variables | `#DC143C` roșu carmin | `set … to`, `change … by`, variabile (`score`, `pas` …) |
| Math | `#9C00C8` violet | `0 + 0`, `pick random 0 to 10`, `map`, `constrain`, `remainder of` |
| Advanced → Functions | `#3455DB` albastru | `Make a Function…`, `call …` |
| Advanced → Arrays | `#E65722` portocaliu | liste |
| Advanced → Text | `#B8860B` muștar | `join`, `length of`, `convert … to text` |
| Advanced → Images | `#7600A8` violet | `show image`, imagini |
| Advanced → Pins | `#B22222` roșu | `digital write pin`, `analog write pin` |
| Advanced → Game | `#007A4D` verde închis | `create sprite`, `score` |
| Advanced → Serial | `#002050` bleumarin | `serial write line` |
| Advanced → Control | `#333333` gri închis | `in background`, `reset` |

## Observații din capturi
- **Input** are subcapitolul **more** (compass, `running time`, `set accelerometer range`); **Radio** are **more** (`radio set transmit power`, `radio raise event`). Lecțiile folosesc blocurile din partea de sus.
- `on shake` și `on button A pressed` au listă de alegere (A, B, A+B / shake, logo up, tilt …).
- Blocurile **micro:bit (V2)** (`on loud sound`, logo, difuzor) apar sub linia „micro:bit (V2)”. Merg doar pe placa V2.
- **Extensions** (extra): `radio-broadcast`, `datalogger` (V2), `servo`, `neopixel`, `microturtle`, `audio-recording` (V2).
- Variabilele create de copil sunt **roșii** și în blocurile verzi (`for index`) sau roz (`on radio received`).

În fișiere: `<span style="color:#1E90FF;font-weight:700">on start</span>`
