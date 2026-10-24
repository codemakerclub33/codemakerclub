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

## Scara (minim blocuri diferite pe personaj)
| L1 | L2 | L3 | L4 | L5 | L6 | L7 | L8 | L9 | L10 |
|----|----|----|----|----|----|----|----|----|-----|
| 8 | 8 | 10 | 12 | 14 | 16 | 16 | 18 | 20 | liber |
- Personajul 1 urmează scara. Personajul 2 rămâne la 8 *(de confirmat)*.
- Minim = 1 personaj. Complet = 2 personaje. Bonus = al 3-lea personaj.
- **Scara e provizorie** și se reverifică după ce citim fiecare lecție (volumul de muncă).

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

## Probleme de rezolvat în lecțiile actuale
1. **Denumiri diferite față de Scratch** în L3–L9: „du-te la”, „întoarce-te la dreapta cu”, „forever”, „comută la costumul”, „comută fundalul la”, „clic”, „schimbă efectul culoare cu”. În Scratch: `mergi la`, `rotește-te ↻`, `la infinit`, `schimbă costumul la`, `schimbă decorul la`, `click`, `modifică efectul [culoare] cu`.
2. **L1** nu cere încă 8 blocuri pe personaj. Are 2 personaje cu dialog, mișcare și sunet.
3. **L6** trebuie regândită (era prea mică): păstrăm o parte, adăugăm editorul de sunete, evenimente de sunet și 2 proiecte mici (sunet la tastă și coloana sonoră a poveștii).
4. **L7** nu folosește acum `modifică x/y` și `setează x/y`.
5. **L8** trece de la „Repetă și așteaptă” la lecție de Control.
6. Fiecare lecție primește poveste nouă, cu personajele 1 și 2 conform regulilor de mai sus.

## Ordinea de lucru
L1 → L2 (gata, de aliniat la plan) → L3 → L4 → L5 → L6 → L7 → L8 → L9 → L10. O lecție pe rând, cu aprobare.

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
- Nu folosim „Exemplu de timp” (tabel cu secunde); sincronul se vede din `așteaptă` în scripturi.
- Narațiunea urmează aceeași ordine, cu numerele scrise cu litere și fără simboluri.
