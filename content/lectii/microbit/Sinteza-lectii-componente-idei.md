# micro:bit Python — sinteză: lecții, componente, idei

Stare la 10 nov 2026. Doar ce am construit: lecțiile noi, componentele micro:bit folosite și ideile din bancă.
Regulă: o singură placă pe copil, fără radio. Fiecare lecție are provocare ★★★ și temă.

## 1. Lecțiile

### Modulul 1 — `modul3` (10 lecții, toate pe tiparul nostru)
| # | Lecția | Provocare (bonus ★★★) | Idee din bancă |
|---|---|---|---|
| 1 | De la blocuri la Python | Insigna cu numele meu | 2 |
| 2 | Galeria de imagini | Felicitarea cu tort | 6 |
| 3 | Semnalizatorul | Emoji Box | 10 |
| 4 | Cufărul cu monede | Creator de pixeli | 9 |
| 5 | Detectivul de cameră | Nivela cu bulă de aer | 16 |
| 6 | Roata norocului | Ghicește numărul | 40, 38 |
| 7 | Biblioteca de desene | Mesaje Morse | 25 |
| 8 | Traducător de blocuri | Simon Says | 37 |
| 9 | Prietenul de pe placă | Testul de reflexe | 31 |
| 10 | Expoziția Coder + badge | Prinde punctul | 33 |

Teme (idei): L1 numărătoare inversă (5), L7 Spectacolul de lumini, L8 Contorul de scuturări, L9 Temperatura lui Pixi, idea 39 (Clicker) și 17 (Lumină de veghe) ca rezerve.

### Modulul 2 — `modul4` (badge „micro:bit Python Pro”)
| # | Lecția | Stare | Provocare | Idee |
|---|---|---|---|---|
| 1 | Panoul de misiuni | rescrisă | Panoul meu | 11 + 18 |
| 2 | Cartea de glume | rescrisă | Cartea de glume cu surprize (3 liste, pagina `2/5`) | — |
| 3 | Artistul cu bucle | rescrisă | Ceasul de nisip (`while`, `n % 5`, `n // 5`) | — |
| 4 | Pianul de buzunar | rescrisă | Metronomul (BPM cu A/B, merge și fără sunet) | 24 |
| 5 | Busola digitală | de rescris | busola cu 8 direcții | 14 |
| 6 | Labirintul înclinat (chei, capcane, cronometru) | de rescris și comasat | — | — |
| 7 | Mesaje secrete | rescrisă | Detectivul de coduri | cifru |
| 8 | Recordul păstrat | de rescris | top 3 recorduri + nume | — |
| 9 | Cutia Exploratorului | rescrisă | Jurnalul păstrat | — |
| 10 | Expoziția Python Pro + badge | de rescris, fără radio | Găsește comoara | 36 |

Idei respinse pentru M2: 35 și 15.

## 2. Componente micro:bit folosite pe lecție
(verificat automat în blocurile de cod)

| Lecția | Componente |
|---|---|
| M1 L1 | afișaj, imagini |
| M1 L2 | afișaj, liste, imagini, pixeli |
| M1 L3 | afișaj, butoane, A+B |
| M1 L4 | afișaj, butoane, funcții |
| M1 L5 | afișaj, butoane, accelerometru, gesturi, lumină, temperatură, microfon (V2), pixeli |
| M1 L6 | afișaj, butoane, random, liste |
| M1 L7 | afișaj, butoane, lumină, funcții, pixeli |
| M1 L8 | afișaj, butoane, accelerometru, gesturi, lumină, random, funcții |
| M1 L9 | afișaj, butoane, accelerometru, gesturi, lumină, timp (`running_time`), funcții, pixeli |
| M1 L10 | afișaj, temperatură |
| M2 L1 | afișaj, butoane, accelerometru, lumină, temperatură, funcții, pixeli |
| M2 L2 | butoane, accelerometru, gesturi, temperatură, random, funcții, liste |
| M2 L3 | butoane, accelerometru, gesturi, lumină, random, liste, pixeli |
| M2 L4 | butoane, lumină, muzică (V2 sau buzzer pe pin 0 și GND), funcții, liste |
| M2 L5 | butoane, busolă, funcții, liste |
| M2 L6 | butoane, accelerometru, funcții, liste, pixeli |
| M2 L7 | butoane, accelerometru, gesturi, funcții, liste (text, `find`, `split`) |
| M2 L8 | butoane, accelerometru, gesturi, fișiere (`open`), timp, funcții |
| M2 L9 | butoane, accelerometru, gesturi, lumină, temperatură, busolă, fișiere, timp, funcții, liste, pixeli |
| M2 L10 | de curățat (mai are mențiuni de radio) |

Folosite în total: afișaj și imagini, butoane (inclusiv A+B), accelerometru și gesturi, senzor de lumină, temperatură, busolă, microfon (doar o dată, V2), muzică, fișiere, `running_time`, random, liste, funcții.
Nefolosite: radio, logo tactil, pini, NeoPixels, jurnal `log`.

## 3. Ideile din bancă (`Idei-proiecte-python.md`)
- **Folosite în M1:** 2, 5 (temă), 6, 9, 10, 16, 17 (rezervă), 25, 31, 33, 37, 38, 39 (rezervă), 40, plus 34.
- **Folosite în M2:** 11, 18, 24, 14, 36 (planificate pe lecții).
- **Dropate:** 4 (zar), 7 (Piatră–Foarfecă–Hârtie), 35, 15.
- **Neconfirmat în Reference:** `split()`, `current_gesture()`, `Image.ALL_ARROWS`/`ALL_CLOCKS`, `get_presses()`, `open()`/`OSError`.

## 4. Ce mai e de făcut
- M2: rescriem L2, L3, L4, L5, L6 (comasat), L8, L10.
- Aliniem README și Curriculum pentru M2 L7 (`try/except` s-a mutat în L8).
- Decidem `is_pressed()` pentru A+B și verificăm în simulator.
- Commit și push pentru tot ce e nesalvat.
