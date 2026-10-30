# Lecția 1 — Pista de culori
### Detectare și Mișcare
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **văd culorile**, **se întorc la margine** și **își spun singure unde sunt**.  
> Proiect: **„Pista de culori”** · fișier: `Prenume_Nume_L1` (ex. `Ana_Pop_L1`)

---

## Obiectiv
La finalul orei Mașinuța ta pleacă din garaj, ricoșează la marginea scenei și se întoarce acasă, recunoscând garajul după culoare.  
**Minim:** personajul 1 (Mașinuța) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Mingea), cu cel puțin **8 blocuri diferite**, care pornește la semnalul Mașinuței și sare când atinge peretele roșu.

## De ce contează
Într-un joc, personajele trebuie să **vadă** ce e în jurul lor: o culoare de pe pistă, marginea scenei, locul unde se află. Cu blocurile din <span style="color:#5CB1D1;font-weight:700">Detectare</span> (EN: *Sensing*) și din <span style="color:#4C97FF;font-weight:700">Mișcare</span> (EN: *Motion*) personajul decide singur ce face, fără să îi spui tu pas cu pas.

**În clasă:** la proiect ții mouse-ul departe de scenă cât rulează pista.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolele Detectare și Mișcare |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Pista de culori” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 6):**  
<span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `atinge culoarea ( )?` | condiție din Detectare: adevărată când personajul atinge culoarea aleasă de pe scenă |
| `culoarea ( ) atinge ( )?` | condiție din Detectare: adevărată când o culoare **a personajului** atinge o altă culoare de pe scenă |
| `dacă atinge marginea, ricoșează` | când personajul ajunge la marginea scenei, se întoarce în direcția opusă |
| `setează stilul de rotație [stânga-dreapta]` | personajul se oglindește când se întoarce, nu se răstoarnă cu capul în jos |
| `poziția x` | valoare: cât e x acum pentru personaj |
| `poziția y` | valoare: cât e y acum pentru personaj |
| `direcția` | valoare: spre ce direcție privește personajul, în grade |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`atinge culoarea ( )?`**, **`culoarea ( ) atinge ( )?`**, `atinge [cursorul mouse-ului]?` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | **`dacă atinge marginea, ricoșează`**, **`setează stilul de rotație`**, **`poziția x`**, **`poziția y`**, **`direcția`**, `mergi … pași`, `mergi la x: y:`, `orientează-te în direcția`, `orientează-te spre`, `rotește-te ↻`, `glisează în … secunde la [poziție aleatoare]`, `mergi la [poziție aleatoare]` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `dacă … atunci`, `repetă`, `așteaptă`, `stop [totul]` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează`, `difuzează … și așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `gândește … pentru … secunde`, `setează mărimea la`, `modifică efectul [culoare] cu`, `anulează efectele grafice`, `costumul următor` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Culorile de pe scenă
1. Din <span style="color:#5CB1D1;font-weight:700">Detectare</span> iei <span style="color:#5CB1D1;font-weight:700">atinge culoarea ( )?</span>
2. Faci click pe **cercul colorat** din bloc, apoi pe **pipetă** și apoi pe culoarea de pe scenă pe care vrei să o recunoască personajul. Culoarea trebuie să fie **exact aceeași**
3. Blocul are colțuri: nu stă singur, ci în locul gol al lui <span style="color:#FFAB19;font-weight:700">dacă … atunci</span>
4. <span style="color:#5CB1D1;font-weight:700">culoarea ( ) atinge ( )?</span> are **două** cercuri colorate: primul e o culoare a **personajului** (alegi cu pipeta de pe personaj), al doilea e culoarea de pe scenă

**Încearcă tu — culori (3–4 min)**  
- [ ] Ai desenat o bandă verde pe decor  
- [ ] Mașinuța spune ceva doar când atinge banda verde  
- [ ] La `culoarea ( ) atinge ( )?` ai ales prima culoare de pe personaj, nu de pe scenă  

### 2) Marginea și stilul de rotație
1. <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span> nu are nevoie de `dacă`: blocul se uită singur. Îl pui în `la infinit`, după `mergi`
2. Fără stilul de rotație potrivit, personajul se poate răsturna cu capul în jos
3. <span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`: personajul doar se oglindește. Îl pui o singură dată, la început

**Încearcă tu — margine (2–3 min)**  
- [ ] Personajul merge până la margine și se întoarce  
- [ ] Nu se mai răstoarnă cu roțile în sus  

### 3) Unde sunt? Poziția și direcția
1. <span style="color:#4C97FF;font-weight:700">poziția x</span>, <span style="color:#4C97FF;font-weight:700">poziția y</span> și <span style="color:#4C97FF;font-weight:700">direcția</span> sunt **valori** (blocuri rotunjite): nu fac nimic singure, ci se pun în locul unei valori
2. Bifa de lângă ele arată valoarea pe scenă
3. Le pui în <span style="color:#9966FF;font-weight:700">spune ( )</span>: personajul **spune** unde se află
4. Faci click pe bloc și vezi numărul în balonaș

**Încearcă tu — unde sunt (2–3 min)**  
- [ ] Ai bifat `poziția x` și vezi numărul pe scenă  
- [ ] `spune (poziția x)` arată poziția x a personajului  
- [ ] Numărul se schimbă după ce personajul se mută  

### 4) Le punem împreună
1. În <span style="color:#FFAB19;font-weight:700">la infinit</span> pui <span style="color:#4C97FF;font-weight:700">mergi … pași</span>, apoi <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span>, apoi <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea ( )?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>
2. Când personajul atinge culoarea, face ce e înăuntrul lui `dacă`, iar `stop [totul]` poate închide povestea

**Încearcă tu — împreună (2–3 min)**  
- [ ] Personajul merge, se întoarce la margine și se oprește la culoare  

---

## Greșeli frecvente
1. **`atinge culoarea` nu se întâmplă niciodată** — culoarea din bloc nu e exact aceeași cu cea de pe scenă. Alege din nou cu pipeta, direct de pe scenă.  
2. **`culoarea ( ) atinge ( )?` nu merge** — prima culoare trebuie luată de pe **personaj**, nu de pe scenă.  
3. **Mașinuța spune „Am ajuns acasă!” imediat** — pornește deja pe garajul verde. Mută Mașinuța mai departe de garaj, la `x` `-100`.  
4. **Mașinuța merge cu roțile în sus** — lipsește `setează stilul de rotație` `[stânga-dreapta]`.  
5. **Mingea nu mai simte roșul** — ai schimbat culoarea personajului cu un efect. Pentru Minge nu folosești `modifică efectul [culoare]`.  
6. **Mingea sau Fluturele nu pornesc** — mesajul din `când primesc` nu e același cu cel din `difuzează` (`start` și `pornire` sunt mesaje diferite).  
7. **Fluturele vorbește deodată cu Mașinuța** — `difuzează final și așteaptă` trebuie pus **după** replica Mașinuței.  
8. **Blocul cu colțuri nu intră** — blocurile din Detectare se pun doar în locul gol al lui `dacă`.  
9. **Nume fișier** — `Prenume_Nume_L1`, nu doar `Ana_L1`.  

---

## De făcut azi — „Pista de culori”
Salvat: `Prenume_Nume_L1`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul cu garajul verde + **Mașinuța** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Mingea** cu ≥ 8 blocuri diferite, care pornește la semnalul Mașinuței și sare când atinge peretele roșu |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Pista și garajul *(Minim)*
Pe scenă, în tab-ul **Decoruri**, desenezi decorul `Pista`: un fundal gri (unealta **Dreptunghi**, umplut) și, pe marginea din **stânga**, o bandă **verde** îngustă, cât un deget de lată: este **garajul**. Garajul trebuie să fie doar verde, fără alte desene peste. Tot pe decorul `Pista` adaugi o bucată **roșie**, sus în **dreapta** (peretele): să nu fie pe drumul Mașinuței, care merge jos.  
Redenumești personajele: `Mașinuța`, `Mingea` și `Fluturele`. Mașinuța: alegi un personaj de tip mașină. Mingea: o minge de **o singură culoare** (de exemplu mingea albastră). Fluturele: personajul `Butterfly`, cu 2 costume. Pe Minge și pe Fluture le adaugi în tab-ul **Sunete** câte un sunet.

- [ ] Decorul se numește `Pista`  
- [ ] Banda verde e în stânga, îngustă  
- [ ] Peretele roșu e sus, în dreapta  
- [ ] Personajele sunt redenumite  

### Pasul 2 — Mașinuța *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-100` <span style="color:#4C97FF;font-weight:700">y:</span> `-60`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  
<span style="color:#9966FF;font-weight:700">spune</span> `Start!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> `5` pași  
↳ <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea</span> `verde` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Am ajuns acasă!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `final` <span style="color:#E6A800;font-weight:700">și așteaptă</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">stop [totul]</span>  

- [ ] Mașinuța pleacă spre dreapta, se întoarce la margine, fără să se răstoarne  
- [ ] Se oprește când atinge garajul verde  
- [ ] Fără Minge și Fluture, Mașinuța își termină povestea singură  
- [ ] Salvat: `Prenume_Nume_L1`  

**→ Minim când:** Mașinuța pleacă din garaj, ricoșează la margine, se întoarce, spune că a ajuns acasă și proiectul se oprește.

### Pasul 3 — Mingea *(Complet)*
Mingea are **2 scripturi**; al doilea pornește când Mașinuța difuzează `start`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `60`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `45`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
↳ <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span>  
↳ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `15` grade  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">culoarea</span> `albastru` <span style="color:#5CB1D1;font-weight:700">atinge</span> `roșu` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,2` secunde  

- [ ] Mingea stă pe loc până vine `start`  
- [ ] Prima culoare din bloc e luată **de pe Minge**, a doua de pe **peretele roșu**  
- [ ] Mingea sare de margini și scoate un sunet când atinge roșul  
- [ ] Salvat din nou: `Prenume_Nume_L1`  

**Gata Complet când:** Mașinuța pleacă, Mingea începe să sară, atinge peretele roșu și face zgomot, apoi Mașinuța ajunge acasă și totul se oprește, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Fluturele) care aterizează după ce Mașinuța ajunge acasă și își spune locul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `140`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am sosit!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#FFAB19;font-weight:700">repetă</span> `3`  
↳ <span style="color:#4C97FF;font-weight:700">glisează în</span> `1` <span style="color:#4C97FF;font-weight:700">secunde la</span> `[poziție aleatoare]`  
↳ <span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `[cursorul mouse-ului]`  
↳ <span style="color:#9966FF;font-weight:700">costumul următor</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#4C97FF;font-weight:700">(poziția x)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
↳ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
↳ <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#4C97FF;font-weight:700">(direcția)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
↳ <span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `25`  
<span style="color:#9966FF;font-weight:700">anulează efectele grafice</span>  
<span style="color:#9966FF;font-weight:700">gândește</span> `Ce zbor frumos!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

- [ ] ★★★ **Provocare:** desenezi pe pista o bandă **galbenă** (baltă) la mijloc. Mașinuța, dacă atinge culoarea galbenă, **spune** `Splash!` pentru `1` secundă, **pornește sunetul** și **merge** `20` pași, ca să iasă din baltă.

## Recapitulare rapidă
1. `atinge culoarea` se pune în `dacă` și are nevoie de **aceeași** culoare ca pe scenă  
2. `culoarea ( ) atinge ( )?` are două culori: una **a personajului**, una de pe scenă  
3. `dacă atinge marginea, ricoșează` stă în `la infinit`, după `mergi`  
4. `setează stilul de rotație` `[stânga-dreapta]` oglindește personajul, nu îl răstoarnă  
5. `poziția x`, `poziția y` și `direcția` sunt valori; le pui în `spune ( )`  
6. Nume: **`Prenume_Nume_L1`**  

## Schema pe scurt *(pe foaie)*

**Pe Mașinuță**  
la steag → `setează stilul de rotație` → `setează mărimea` → `mergi la x: y:` → `orientează-te` → `spune` → `difuzează start` → `la infinit` (`mergi` + `ricoșează` + `dacă` `atinge culoarea` `atunci` `spune` + `difuzează final și așteaptă` + `stop`)

**Pe Minge**  
la steag → `mergi la x: y:` → `setează mărimea`  
când primesc start → `orientează-te` → `la infinit` (`mergi` + `ricoșează` + `rotește-te` + `dacă` `culoarea atinge` `atunci` `pornește sunetul` + `așteaptă`)

**Pe Fluture**  
când primesc final → `mergi la` → `spune` → `repetă` (`glisează` + `orientează-te spre` + `costumul următor` + `spune (poziția x)` + `pornește sunetul` + `spune (poziția y)` + `ricoșează` + `spune (direcția)` + `modifică efectul`) → `anulează efectele grafice` → `gândește`

**Quiz scurt (cu profesorul):**  
- De ce trebuie să alegi culoarea cu pipeta și nu „aproape la fel”?  
- Care e diferența dintre `atinge culoarea` și `culoarea ( ) atinge ( )?`  
- Ce face `setează stilul de rotație [stânga-dreapta]`?  
- Ce numere arată `poziția x` și `poziția y` când personajul e în mijlocul scenei?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Mingea, în același `Prenume_Nume_L1`.  
- Dacă ai Complet: adaugi acasă Fluturele, în același `Prenume_Nume_L1`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (altă pistă, alt garaj, alt obstacol).
