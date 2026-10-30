# Lecția 7 — Atelierul de desen
### Stilou
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **desenează**: trasează linii colorate, ștampilează stele și pictează după mouse.  
> Proiect: **„Atelierul de desen”** · fișier: `Prenume_Nume_L7` (ex. `Ana_Pop_L7`)

---

## Obiectiv
La finalul orei Pictorul desenează o floare din pătrate rotite, cu culori care se schimbă, direct pe scenă.  
**Minim:** personajul 1 (Pictorul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Steaua), cu cel puțin **8 blocuri diferite**, care apare după floare și ștampilează stele prin atelier.

## De ce contează
Cu stiloul un personaj lasă urme pe scenă: linii, forme, desene. Se folosește în jocuri care desenează drumul, în aplicații de pictat și în animații cu forme. Blocurile stau într-o **extensie** numită <span style="color:#0FBD8C;font-weight:700">Stilou</span> (EN: *Pen*).

**În clasă:** la proiect aștepți să se termine desenul înainte să apeși pe steag din nou.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + extensia Stilou |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Atelierul de desen” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 6):**  
<span style="color:#0FBD8C;font-weight:700">Stilou</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span>  
*(Restul din Operatori — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `stilou jos` | de acum personajul **lasă urmă** pe unde merge |
| `stilou sus` | personajul nu mai lasă urmă |
| `șterge tot` | șterge de pe scenă toate desenele făcute cu stiloul |
| `ștampila` | lasă pe scenă o copie a personajului, în locul unde se află |
| `setează culoarea stiloului la ( )` | alegi culoarea stiloului cu pipeta |
| `schimbă [culoarea] stiloului cu ( )` | trece stiloul spre altă culoare, puțin câte puțin (sau schimbă strălucirea, saturația ori transparența) |
| `setează [culoarea] stiloului la ( )` | pune exact valoarea scrisă pentru culoare, saturație, strălucire sau transparență |
| `schimbă grosimea stiloului cu ( )` | face linia mai groasă (cu număr pozitiv) sau mai subțire |
| `setează grosimea stiloului la ( )` | pune exact grosimea scrisă pentru linie |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#0FBD8C;font-weight:700">Stilou</span> | **`stilou jos`**, **`stilou sus`**, **`șterge tot`**, **`ștampila`**, **`setează culoarea stiloului la`**, **`schimbă [culoarea] stiloului cu`**, **`setează [culoarea] stiloului la`**, **`schimbă grosimea stiloului cu`**, **`setează grosimea stiloului la`** |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi … pași`, `rotește-te ↻`, `mergi la x: y:`, `mergi la [poziție aleatoare]`, `glisează în … secunde la [poziție aleatoare]` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă`, `la infinit`, `dacă … atunci … altfel` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când tasta [ ] este apăsată`, `când primesc`, `difuzează`, `difuzează … și așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `arată`, `ascunde`, `setează mărimea la` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `butonul mouse-ului e apăsat?`, `mouse x`, `mouse y` |

### 1) Adaugi extensia și pornești stiloul
1. În stânga jos apeși butonul **Adaugă o extensie** și alegi **Stilou**. În lista de blocuri apare un capitol nou, verde-turcoaz
2. <span style="color:#0FBD8C;font-weight:700">stilou jos</span> pornește desenul: de acum personajul lasă urmă pe unde merge
3. <span style="color:#0FBD8C;font-weight:700">stilou sus</span> îl oprește: personajul se mișcă fără să lase urmă
4. <span style="color:#0FBD8C;font-weight:700">șterge tot</span> curăță scena. Îl pui la începutul scriptului, ca desenul să pornească pe o scenă goală

**Încearcă tu — stiloul (3–4 min)**  
- [ ] Ai adăugat extensia Stilou  
- [ ] Cu `stilou jos` și `mergi 100 pași` ai trasat o linie  
- [ ] Cu `stilou sus` personajul merge fără urmă  
- [ ] `șterge tot` a curățat scena  

### 2) Culoarea și grosimea
1. <span style="color:#0FBD8C;font-weight:700">setează culoarea stiloului la ( )</span>: faci click pe cercul colorat, apoi pe pipetă și alegi culoarea dorită de pe ecran
2. <span style="color:#0FBD8C;font-weight:700">schimbă [culoarea] stiloului cu ( )</span> mută culoarea puțin câte puțin: într-o buclă ies culori ca în curcubeu
3. <span style="color:#0FBD8C;font-weight:700">setează [culoarea] stiloului la ( )</span> pune exact valoarea scrisă. Din listă poți alege și `saturația`, `strălucirea` sau `transparența`
4. <span style="color:#0FBD8C;font-weight:700">setează grosimea stiloului la ( )</span> pune grosimea liniei; <span style="color:#0FBD8C;font-weight:700">schimbă grosimea stiloului cu ( )</span> o face puțin mai groasă la fiecare dată

**Încearcă tu — culoare și grosime (3–4 min)**  
- [ ] O linie roșie, apoi una albastră  
- [ ] O linie subțire, apoi una groasă  
- [ ] O linie pe jumătate transparentă (`transparența` la `50`)  

### 3) Ștampila
1. <span style="color:#0FBD8C;font-weight:700">ștampila</span> lasă pe scenă o **copie** a personajului, în locul unde se află, cu mărimea și costumul de atunci
2. Merge și cu stilou sus. Dacă personajul e **ascuns**, nu se ștampilează nimic: ai grijă să fi arătat personajul
3. Cu `ștampila` în buclă și mișcări ies șiruri de personaje

**Încearcă tu — ștampila (2–3 min)**  
- [ ] Ai ștampilat personajul de 3 ori, în locuri diferite  
- [ ] Ai schimbat mărimea între ștampile  

### 4) Forme cu `repetă`
1. Un pătrat: `repetă 4` cu `mergi 80 pași` și `rotește ↻ 90 grade`
2. O floare: pui pătratul **într-un alt** `repetă 36` și rotești puțin după fiecare pătrat (`rotește ↻ 10 grade`)
3. Cu `schimbă [culoarea] stiloului cu 5` în bucla mare, fiecare pătrat are altă culoare

**Încearcă tu — forme (3–4 min)**  
- [ ] Un pătrat desenat cu `repetă 4`  
- [ ] O floare din 36 de pătrate rotite  
- [ ] Culorile se schimbă de la un pătrat la altul  

---

## Greșeli frecvente
1. **Nu apar blocurile cu stiloul** — nu ai adăugat extensia **Stilou**.  
2. **Liniile apar unde nu vrei** — ai uitat `stilou sus`: personajul lasă urmă în timp ce se mută.  
3. **Nu se vede nicio linie** — lipsește `stilou jos`, sau linia e prea subțire sau de aceeași culoare cu decorul.  
4. **Desenul dispare imediat** — ai pus `șterge tot` **după** desen. Îl pui la început.  
5. **Ștampila nu apare** — personajul e ascuns. Pune `arată` înainte de `ștampila`.  
6. **Floarea e încâlcită** — la pătrat unghiul trebuie să fie `90`; apoi rotești puțin (`10`), nu invers.  
7. **Steaua apare înainte de floare** — Pictorul trebuie să difuzeze `steaua` cu `și așteaptă`, după ce termină floarea.  
8. **Pensula desenează tot timpul** — dacă butonul e liber, trebuie `stilou sus`. Pune `altfel`.  
9. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`steaua` și `stea` sunt mesaje diferite).  
10. **Nume fișier** — `Prenume_Nume_L7`, nu doar `Ana_L7`.  

---

## De făcut azi — „Atelierul de desen”
Salvat: `Prenume_Nume_L7`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, personajele, extensia + **Pictorul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Steaua** cu ≥ 8 blocuri diferite, care apare după floare și ștampilează stele prin atelier |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Atelierul, personajele și extensia *(Minim)*
Alegi din bibliotecă un decor **alb sau deschis**, ca să se vadă liniile (de exemplu unul gol). Adaugi trei personaje și le redenumești exact: `Pictorul` (un personaj de om, sau un creion), `Steaua` (o stea din bibliotecă) și `Pensula` (o pensulă sau un creion din bibliotecă). Pe Stea adaugi în tab-ul **Sunete** un sunet.  
Adaugi extensia **Stilou**, din butonul din stânga jos.

- [ ] Decor alb sau deschis  
- [ ] Personajele se numesc `Pictorul`, `Steaua` și `Pensula`  
- [ ] Extensia Stilou e adăugată  

### Pasul 2 — Pictorul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#0FBD8C;font-weight:700">șterge tot</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#0FBD8C;font-weight:700">setează grosimea stiloului la</span> `2`  
<span style="color:#0FBD8C;font-weight:700">setează culoarea stiloului la</span> `[roșu]`  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FFAB19;font-weight:700">repetă</span> `36`  
↳ <span style="color:#FFAB19;font-weight:700">repetă</span> `4`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `80` pași  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `90` grade  
↳ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `10` grade  
↳ <span style="color:#0FBD8C;font-weight:700">schimbă [culoarea] stiloului cu</span> `5`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Floarea mea!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `steaua` <span style="color:#E6A800;font-weight:700">și așteaptă</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final`  

- [ ] Scena se curăță, iar Pictorul desenează o floare de pătrate rotite  
- [ ] Culorile se schimbă de la un pătrat la altul  
- [ ] La final spune „Floarea mea!”  
- [ ] Fără Stea și Pensulă, Pictorul își termină povestea singur  
- [ ] Salvat: `Prenume_Nume_L7`  

**→ Minim când:** apeși pe steag și Pictorul desenează o floare colorată din pătrate rotite, apoi spune „Floarea mea!”.

### Pasul 3 — Steaua *(Complet)*
Steaua are **2 scripturi**, iar al doilea pornește când Pictorul difuzează `steaua`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `steaua`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#0FBD8C;font-weight:700">setează [transparența] stiloului la</span> `30`  
<span style="color:#0FBD8C;font-weight:700">stilou jos</span>  
<span style="color:#FFAB19;font-weight:700">repetă</span> `10`  
↳ <span style="color:#4C97FF;font-weight:700">glisează în</span> `0,5` <span style="color:#4C97FF;font-weight:700">secunde la</span> `[poziție aleatoare]`  
↳ <span style="color:#0FBD8C;font-weight:700">ștampila</span>  
↳ <span style="color:#0FBD8C;font-weight:700">schimbă grosimea stiloului cu</span> `1`  
↳ <span style="color:#0FBD8C;font-weight:700">schimbă [culoarea] stiloului cu</span> `10`  
<span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

- [ ] Steaua e ascunsă până vine `steaua`  
- [ ] Apare, desenează linii prin atelier și lasă în urmă stele ștampilate  
- [ ] Liniile devin mai groase și își schimbă culoarea  
- [ ] La final dispare  
- [ ] Salvat din nou: `Prenume_Nume_L7`  

**Gata Complet când:** apeși pe steag, Pictorul desenează floarea, apoi Steaua traversează atelierul și lasă stele și linii colorate, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Pensula), care pictează după mouse-ul tău:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#0FBD8C;font-weight:700">setează grosimea stiloului la</span> `4`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#0FBD8C;font-weight:700">stilou jos</span> **altfel** → <span style="color:#0FBD8C;font-weight:700">stilou sus</span>  
↳ <span style="color:#0FBD8C;font-weight:700">schimbă [culoarea] stiloului cu</span> `1`  

<span style="color:#E6A800;font-weight:700">când tasta</span> `[c]` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#0FBD8C;font-weight:700">șterge tot</span>  

- [ ] ★★★ **Provocare:** adaugi pe Pictor, după floare, un hexagon: `repetă 6` cu `mergi 60 pași` și `rotește ↻ 60 grade`, într-o culoare nouă

## Recapitulare rapidă
1. Extensia **Stilou** se adaugă din butonul din stânga jos  
2. `stilou jos` lasă urmă, `stilou sus` o oprește; `șterge tot` curăță scena (îl pui la început)  
3. Culoarea și grosimea stiloului se setează sau se schimbă cu blocurile dedicate; `ștampila` lasă o copie a personajului  
4. Un personaj ascuns nu ștampilează  
5. Un pătrat: `repetă 4` cu `mergi` și `rotește ↻ 90`; o floare: pătratul într-un alt `repetă`  
6. Nume: **`Prenume_Nume_L7`**  

## Schema pe scurt *(pe foaie)*

**Pe Pictor**  
la steag → `șterge tot` → `mergi la x: y:` → `setează grosimea` → `setează culoarea` → `stilou jos` → `repetă 36` (`repetă 4` (`mergi` + `rotește ↻ 90`) + `rotește ↻ 10` + `schimbă [culoarea] cu 5`) → `stilou sus` → `spune` → `difuzează steaua și așteaptă` → `difuzează final`

**Pe Stea**  
la steag → `ascunde`  
când primesc steaua → `arată` → `mergi la [poziție aleatoare]` → `setează mărimea` → `setează [transparența]` → `stilou jos` → `repetă 10` (`glisează` + `ștampila` + `schimbă grosimea` + `schimbă [culoarea]`) → `stilou sus` → `ascunde`

**Pe Pensulă**  
la steag → `ascunde`  
când primesc final → `arată` → `setează grosimea` → `la infinit` (`mergi la x: (mouse x) y: (mouse y)` + `dacă` `butonul apăsat?` `atunci` `stilou jos` `altfel` `stilou sus` + `schimbă [culoarea]`)  
când tasta c → `șterge tot`

**Quiz scurt (cu profesorul):**  
- Ce face `stilou jos` și cu ce îl oprești?  
- De ce `șterge tot` trebuie pus la începutul scriptului?  
- Ce se întâmplă cu `ștampila` dacă personajul e ascuns?  
- Cum desenezi un pătrat cu `repetă`? Ce unghi folosești?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Steaua, în același `Prenume_Nume_L7`.  
- Dacă ai Complet: adaugi acasă Pensula, în același `Prenume_Nume_L7`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi desenul (alte forme, alte culori, alt personaj care ștampilează).
