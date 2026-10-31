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

## Modulul 2 (proiecte, radio, pini, sunet) — schiță

| Lecția | Proiect | Blocuri noi |
|--------|---------|-------------|
| L1 | Panoul de comandă | variabila `mod`, `compass heading`, `running time (ms)` |
| L2 | Poșta radio | `radio set group`, `radio send number`, `radio send string`, `on radio received` |
| L3 | Vânătoarea de comori | `radio send value`, `on radio received name value`, semnal radio |
| L4 | Semaforul de pe masă | `digital write pin`, `analog write pin`, `digital read pin` |
| L5 | Paznicul rucsacului | `play tone`, `ring tone`, `rest for`, `stop all sounds`, `set volume` (V2) |
| L6 | Jurnalul de măsurători | `Make an Array`, `join`, `datalogger` (V2, extensie) |
| L7 | Stația meteo la distanță | `radio set transmit power`, emițător și receptor |
| L8 | Doctorul de cod | funcții cu parametri, depanare |
| L9 | Cheia și seiful radio | `compare … to …`, liste, cod prin radio |
| L10 | Expoziția Maker | reia proiectele |

Jocurile mai mari (Snake, Labirint, Breakout, Tetris) se potrivesc în M2 sau ca Bonus.

## De evitat (le au deja alții, cursul Codeschool Clubs)
Piatră-Foarfecă-Hârtie, Hero, Higher-Lower, Duel, Mole, Adevăr sau Provocare, Calculator, Curse cu mașini, Nu scăpa prăjitura, Jump, Cronometru, Simon spune, Zaruri, Ghicește numărul, Prinde mărul. Deci nu folosim: zar, tester de reacție, Snap the Dot, Crashy Bird, Catch the Apples, arcadă de jocuri.
