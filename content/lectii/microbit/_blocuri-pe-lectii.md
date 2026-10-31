# Blocuri pe lecții, micro:bit blocuri (document INTERN)

**Nu se copiază în lecții.** Îl folosim noi, ca să construim fiecare lecție. Denumirile și culorile: vezi `_culori-microbit.md`.

## Reguli (la fel ca la Scratch)
- Un bloc „aparține” **primei lecții în care apare**.
- **Minim:** cel puțin **8 blocuri diferite** (noi + din lecțiile trecute), un program care merge pe placă.
- **Complet:** a doua parte, cu cel puțin **6 blocuri diferite**, care rulează după prima. Aceleași blocuri, alte forme, alte mesaje, alte numere.
- **Bonus ★★★:** o provocare măsurabilă (de exemplu „cel puțin 3 forme și un clip de 15 secunde”). Ideile din lista de 50 de proiecte intră aici.
- În lecții apare doar **numărul** de blocuri, nu regula.
- `forever` pornește odată cu `on start`. Ca să nu se încurce desenele, `forever` începe cu `pause (ms)`, ca „așteaptă” la personajul 2 din Scratch.
- Blocurile **V2** (sunet, logo, `datalogger`) sunt marcate separat.

## Modulul 1 (placa singură, fără radio)

| Lecția | Proiect | Blocuri noi | Idee Bonus (din lista de 50) |
|--------|---------|-------------|------------------------------|
| L1 | Inima mea | `on start`, `forever`, `show icon`, `show leds`, `pause (ms)`, `clear screen`, `show string`, `show number` (8) | Inițialele mele pe LED-uri (Eticheta animată #17 poate veni la L10) |
| L2 | Floarea care se deschide | `plot x y`, `unplot x y`, `toggle x y`, `repeat 4 times` (4) | Racheta care urcă |
| L3 | Comutatorul de emoții | `on button A pressed` (A / B / A+B) (1) | Semaforul dispozițiilor |
| L4 | Contorul magic | `Make a Variable`, `set … to`, `change … by`, `0 + 0` (4) | Casa de marcat |
| L5 | Scutul de energie | `if … then`, `if … then … else`, `0 = 0`, `0 < 0`, `and`, `or` (6) | Scutul cu trei vieți |
| L6 | Farul de pe mare | `for index from 0 to 4`, `while`, `button A is pressed` (3) | Farul în ceață |
| L7 | Bila magică Da / Nu | `on shake`, `pick random 0 to 10`, `acceleration (mg)` (3) | Bila cu patru răspunsuri |
| L8 | Sera inteligentă | `light level`, `temperature (°C)` (2) | Recordul serei |
| L9 | Seiful secret | `Make a Function…`, `call …` (2) | Seif cu cod de patru pași |
| L10 | Insigna inteligentă | niciun bloc nou, reia proiectele din L1–L9 | Insigna cu povestea mea |

Stare: M1 scris în stilul Scratch (blocuri colorate, Minim ≥ 8, Complet ≥ 6, Bonus măsurabil). Nu a rulat încă pe o placă adevărată.

## Modulul 2 (o singură placă, fără radio)

| Lecția | Proiect | Blocuri noi | Idee Bonus |
|--------|---------|-------------|------------|
| L1 | Panoul de comandă | `compass heading`, `running time (ms)`, `0 ÷ 0` | Panoul cu cinci moduri |
| L2 | Busola de buzunar | `else if`, `map` | Vânătoarea de ținte |
| L3 | Pedometrul | `acceleration (mg) strength` (+ `plot bar graph` la Bonus) | Bara de pași |
| L4 | Ceasul deșteptător | `join`, `remainder of` | Amânare |
| L5 | Paznicul rucsacului | `not`, `0 − 0` | Șoferul adormit (detector de somnolență) |
| L6 | Jurnalul de măsurători | `empty array`, `add value to end of`, `length of`, `get value at` | Stația meteo |
| L7 | Theremin cu lumină | `play tone` (V2), `0 × 0` | Gama de cinci note |
| L8 | Doctorul de cod | funcție cu parametru | Programul-capcană |
| L9 | Șarpele de un pixel | nimic nou (`remainder of` pentru înfășurare) | Șarpele cu zid |
| L10 | Expoziția Maker | niciun bloc nou | Panoul cu povestea mea |

Idei rămase pentru Bonus sau lecții viitoare: Tetris, Breakout, Labirint (în micro:bit Python M4), Ghitara din carton, Pianul de fructe (pini, cleme crocodil), Alarma pentru sticlă.
Radio, pini și LED-uri externe: modul separat, cu perechi de plăci.
