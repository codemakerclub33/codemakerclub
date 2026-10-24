# Blocuri pe lecții, Scratch Modulul 1 (document INTERN)

**Nu se copiază în lecții.** Îl folosim noi, ca să construim povestea fiecărei lecții.
Denumirile sunt cele din Scratch (vezi `_blocuri-scratch.md`).

## Scop
Modulul 1 acoperă **toate blocurile din Mișcare, Aspect, Sunet, Evenimente și Control** (categoriile de dinaintea Detectării). Sunt 51 de blocuri vizibile în capturi, plus cele nevăzute încă.

## Reguli
- Un bloc „aparține” **primei lecții în care apare** (nu se repetă la altă lecție).
- **Personajul 1:** învață blocurile noi ale lecției + blocuri din lecțiile anterioare. Cel puțin 3 blocuri ale temei.
- **Personajul 2:** recapitulează. Folosește cel puțin 2 blocuri din fiecare dintre ultimele 3 lecții, combinate în același script, plus restul liber.
  - La L1 și L2: doar „8 blocuri diferite”.
  - La L3: doar 2 lecții anterioare, deci cel puțin 3 din fiecare + 2 libere.
- Poveste nouă la fiecare lecție (nu continuăm povestea veche). Povestea nu cere sincronizare exactă a secundelor.
- În lecții apare doar **numărul** de blocuri (nu regula cu lecțiile anterioare).
- `schimbă costumul la` nu se pune imediat după `costumul următor` și invers (efectul ales se pierde).
- **Sunetul și costumul nu se pun niciodată unul după altul** (sunet după sunet, costum după costum): le întrețesem cu alte blocuri (replici, `așteaptă`, mișcare etc.).
- **Excepție: `mergi 10 pași` poate fi pus de mai multe ori la rând** (de exemplu 3 ×), ca exemplu de repetare, în lecțiile dinaintea lui `repetă` (L1). `repetă` îl înlocuiește de la L2.

## Regula blocurilor pe personaj (Modulul 1, hotărâtă 24 oct 2026)
Blocuri **diferite** pe personaj (un bloc folosit de mai multe ori se numără o dată):

| Personaj | Minim | Maxim | Rol |
|----------|-------|-------|-----|
| Personajul 1 (Minim) | 8 | 14 | învață blocurile noi + blocuri din lecțiile trecute |
| Personajul 2 (Complet) | 8 | — | reia blocuri din ultimele 3 lecții |
| Personajul 3 (Bonus) | 10 | — | provocare, tot cu blocuri din lecțiile trecute, pentru o poveste frumoasă |

- Pragul din Obiectiv e „minim 8” (personajele 1 și 2). Scripturile-model pot avea mai mult, în limitele de mai sus.
- Minim = 1 personaj. Complet = 2 personaje. Bonus = al 3-lea personaj.
- **De verificat la lecțiile deja scrise (nemodificate):** L1 (personajul 3 are 8) și L2 (Pasărea are 9) sunt sub 10; L3 și L4 respectă regula (personajul 1 are 14).

## Planul blocurilor pe lecții (actualizat: 23 oct 2026)

| Lecția | Tema | Blocuri noi | Nr. |
|--------|------|-------------|-----|
| L1 | Primii pași | `când se dă click pe steagul verde`, `așteaptă`, `mergi … pași`, `spune … pentru … secunde`, `gândește … pentru … secunde`, `schimbă costumul la`, `pornește sunetul`, `redă sunetul … până la final` | 8 |
| L2 | Lumea mea | `schimbă decorul la`, `decorul următor`, `costumul următor`, `repetă` | 4 |
| L3 | Mișcare | `rotește-te ↻`, `rotește-te ↺`, `mergi la [poziție aleatoare]`, `mergi la x: y:`, `glisează în … secunde la [poziție aleatoare]`, `glisează în … secunde la x: y:`, `orientează-te în direcția`, `orientează-te spre` | 8 |
| L4 | Evenimente | `când tasta [ ] este apăsată`, `când se dă click pe acest personaj`, `când decorul se schimbă la`, `difuzează`, `difuzează … și așteaptă`, `când primesc` | 6 |
| L5 | Aspect | `spune`, `gândește` (fără durată), `modifică mărimea cu`, `setează mărimea la`, `modifică efectul [culoare] cu`, `setează efectul … la`, `anulează efectele grafice` | 7 |
| L6 | Sunet | `oprește toate sunetele`, `modifică volumul cu`, `setează volumul la`, `volum`, `modifică efectul` (audio), `setează efectul` (audio), `șterge efectele audio`, `când [intensitatea sunetului] > …`, plus editorul din tab-ul Sunete | 8 |
| L7 | Coordonate x, y | `modifică x cu`, `setează x la`, `modifică y cu`, `setează y la` | 4 |
| L8 | Control | `la infinit`, `stop [ ]`, `dacă … atunci`, `dacă … atunci … altfel`, `așteaptă până când`, `repetă până când` + 2 condiții minime din Detectare: `tasta [spațiu] apăsată?`, `atinge [cursorul mouse-ului]?` | 6 + 2 |
| L9 | Mini-proiect | combinăm tot, fără blocuri noi | — |
| L10 | Recap + prezentare | recapitulare, fără blocuri noi | — |

Total: 51 de blocuri vizibile în capturi, plus 2 condiții din Detectare. Fiecare bloc apare o dată, la prima lecție în care se folosește.
`glisează`, `rotește-te` și efectele grafice rămân pentru L3 / L5 (nu în L1 / L2). În L1 folosim doar bazele din Mișcare, Aspect și Sunet.

### Decizii luate
- L8 introduce `dacă`, `repetă până când`, `așteaptă până când` cu 2 condiții minime din Detectare (`tasta [spațiu] apăsată?`, `atinge [cursorul mouse-ului]?`). Detectarea completă rămâne la Modulul 2.
- `difuzează` / `când primesc` intră în L4 (nu mai așteaptă Modulul 2).

### De completat
- Blocurile care nu se văd în capturi (partea de jos din Mișcare, Aspect, Control, Detectare, Operatori): `dacă atinge marginea, ricoșează`, `stil de rotire`, `arată` / `ascunde`, straturile, clonele etc. Se plasează în plan după ce le vedem.

## Stare la 24 oct 2026
Toate cele 10 lecții din Modulul 1 sunt refăcute pe structura universală (L1–L10), cu poveste, sincron și text pentru butonul „Ascultă lecția”.

| Lecția | Proiect | Personaje (1 / 2 / 3) | Blocuri noi |
|--------|---------|----------------------|-------------|
| L1 | Cardul meu animat | pisica + 2 la alegere | 8 |
| L2 | Lumea mea | Copil / Câine / Pasăre | 4 |
| L3 | Plimbarea mea | Rachetă / Extraterestru / Astronaut | 8 |
| L4 | Butonul magic | Magician / Iepure / Porumbel | 6 |
| L5 | Interviul | Reporter / Dragon / Public | 7 |
| L6 | Concertul | Chitarist / Toboșar / Public | 8 (7 Sunet + `când [intensitatea sunetului] >`) |
| L7 | Comoara | Pirat / Papagal / Comoara | 4 |
| L8 | Dansul meu | Dansator / DJ / Juriu (decoruri Sala și Confetti desenat) | 8 (6 Control + 2 Detectare) |
| L9 | Personajul meu | Animal / Stăpân / Minge (fără blocuri noi) | — |
| L10 | Completare + prezentare | Gala personajelor: Gazdă + 2 artiști din meniul de numere (fără blocuri noi) | — |

Total blocuri noi: 53 (Mișcare 13, Evenimente 8, Aspect 13, Sunet 9, Control 8, Detectare 2).

### Reguli suplimentare hotărâte
- Personajul 1: minim 8, maxim 14 (de la L8 se acceptă până la 15 ca povestea să iasă frumoasă). Personajul 2: minim 8 cu blocuri din ultimele lecții. Personajul 3: minim 10.
- Sincronul se face cu `așteaptă` și cu mesaje (`difuzează … și așteaptă`); personajele nu vorbesc deodată.
- Un număr din L10 nu are voie să conțină `la infinit` (ar bloca Gazda).
- **De verificat (nemodificat, decizie amânată):** L1 (personajul 3 are 8) și L2 (Pasărea are 9) sunt sub minimul de 10 pentru personajul 3.

### Impact asupra Modulului 2
M2 are acum lecții care se suprapun cu M1: `Dacă… atunci` (L1), `Dacă… altfel` (L2), `Forever și stop` (L7), `Mesaje / broadcast` (L8). M2 trebuie regândit după încheierea M1.

## Plan Modulul 2 (hotărât 24 oct 2026)
M2 are 10 lecții și 51 de blocuri noi (logică, date, desen). Restul blocurilor din capturi merg la M3 (jocuri).

| Lecția | Tema | Blocuri noi | Nr. |
|--------|------|-------------|-----|
| L1 | Culori și margini | `atinge culoarea`, `culoarea atinge`, `dacă atinge marginea, ricoșează`, `setează stilul de rotație`, `poziția x`, `poziția y`, `direcția` | 7 |
| L2 | Mouse și ascuns | `mouse x`, `mouse y`, `butonul mouse-ului e apăsat?`, `distanța până la`, `setează mod tragere`, `arată`, `ascunde` | 7 |
| L3 | Întreabă și text | `întreabă … și așteaptă`, `răspuns`, `alătură`, `litera … din`, `lungimea lui`, `conține?` | 6 |
| L4 | Variabile | `Creează o variabilă`, valoarea variabilei, `setează … la`, `modifică … cu`, `arată variabila`, `ascunde variabila` | 6 |
| L5 | Operatori matematici | `+`, `-`, `*`, `/`, `alege aleator între`, `rotunjește`, `mod` | 7 |
| L6 | Comparații, logică și timp | `>`, `<`, `=`, `și`, `sau`, `nu`, `cronometru`, `resetează cronometru` | 8 |
| L7 | Stilou (extensie) | `șterge tot`, `ștampila`, `stilou jos`, `stilou sus`, `setează culoarea stiloului la`, `schimbă [culoarea] stiloului cu`, `setează [culoarea] stiloului la`, `schimbă grosimea stiloului cu`, `setează grosimea stiloului la` | 9 |
| L8 | Blocurile mele | `Creează un bloc` (cu parametri, desen cu Stilou: pătrat, stea) | 1 |
| L9 | Mini-proiect | combinăm tot, fără blocuri noi | — |
| L10 | Completare + prezentare | insigna Logic Explorer, fără blocuri noi | — |

### Mutate la M3 (jocuri), 28 de blocuri
- Clone: `când încep ca și clonă`, `creează o clonă a`, `șterge această clonă`.
- Liste (13): `Creează o listă`, valoarea listei, `adaugă`, `șterge`, `șterge tot`, `inserează`, `înlocuiește`, `element … din`, `nr. elementului`, `lungimea lui [listă]`, `[listă] conține?`, `arată lista`, `ascunde lista`.
- Aspect: `mergi la stratul`, `mergi înainte straturi`, `costumul [număr]`, `decor [număr]`, `mărime`.
- Detectare: `intensitatea sunetului`, `[nr. decor] din [Scenă]`, `anul curent`, `zile din 2000`, `online?`, `nume utilizator`.
- Operatori: `[modul] din`.
- M3 trebuie adaptat după M2 (scor, vieți, timp se suprapun cu L4 și L6 din M2).

## Structura universală a lecțiilor Scratch (document INTERN, valabil L1–L10)

1. **Antet:** titlu, modul, „Code Maker Club · Scratch Starter”, citat scurt cu ce faci azi și numele fișierului (`Prenume_Nume_L#`).
2. **Obiectiv:** ce ai la final. Minim = personajul 1 (cu numărul de blocuri). Complet = personajul 2 (cu numărul de blocuri).
3. **De ce contează** (2–3 rânduri).
4. **Planul orei** (120 minute, tabel).
5. **Capitole azi:** capitolele folosite și ce rămâne pentru mai târziu.
6. **Blocuri noi azi:** tabelul **Bloc / Ce face**, imediat după „Capitole azi” (și înainte de „Pas cu pas”). Câte o frază scurtă pentru fiecare bloc nou al lecției, cu diferența față de blocul asemănător când există. Narațiunea are paragraful „Ce face fiecare bloc nou”, cu aceleași fraze.
7. **Pas cu pas** (doar blocurile noi, fiecare pas cu „Încearcă tu”):
   - tabelul „Capitol / Ce iei azi” (blocurile noi îngroșate)
   - câte un pas pentru fiecare grup de blocuri noi
   - regulile de combinare, când sunt necesare (ex. „Nu ai sunet după sunet, nici costum după costum”)
8. **Greșeli frecvente** (4–7 puncte).
9. **De făcut azi** (titlul proiectului):
   - Minim vs Complet (tabel)
   - Pasul 1: scena sau personajul 1, cu script-model (Minim)
   - Pasul 2: personajul 2, cu script-model (Complet)
   - „Gata Complet când: …”
10. **Bonus:** personajul 3 cu script-model + ★★★ Provocare.
11. **Recapitulare rapidă** (4–6 puncte).
12. **Schema pe scurt** (pe foaie, pe personaje) + **Quiz scurt**.
13. **Exemplu pe Scratch** (iframe, la final, dacă există).
14. **Temă (opțional):** 3 rânduri (doar Minim / Complet / Bonus terminat).

### Reguli care se aplică peste tot
- Numărul de blocuri apare doar în **Obiectiv** și în tabelul **Minim vs Complet**.
- Scripturile-model sunt doar în „De făcut azi” și în Bonus. „Pas cu pas” doar învață blocurile.
- Nu apar numărul lecției și regula cu lecțiile anterioare.
- Personajul 1 învață blocurile noi, personajul 2 recapitulează.
- Regula „Nu ai sunet după sunet, nici costum după costum” se scrie **doar în L1 și L2** (Greșeli, bife, Recapitulare, narațiune). De la L3 în sus nu se mai repetă în text, dar scripturile o respectă în continuare.
- Nu folosim „Exemplu de timp” (tabel cu secunde); sincronul se vede din `așteaptă` în scripturi.
- Narațiunea urmează aceeași ordine, cu numerele scrise cu litere și fără simboluri.
