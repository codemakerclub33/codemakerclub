# Lecția 1 — Meciul de fotbal
### Culori și margini
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **văd culorile**, **se întorc la margine** și **își spun singure unde sunt**.  
> Proiect: **„Meciul de fotbal”** · fișier: `Prenume_Nume_L1` (ex. `Ana_Pop_L1`)

---

## Obiectiv
La finalul orei joci un meci de fotbal: Fotbalistul tău aleargă cu săgețile și lovește mingea, iar mingea recunoaște după culoare în ce poartă a intrat: **roșie** în stânga sau **albastră** în dreapta.  
**Minim:** personajul 1 (Fotbalistul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Mingea), cu cel puțin **8 blocuri diferite**, care pornește când Fotbalistul o lovește, sare de margini și strigă „Gol!” când atinge o poartă.

## De ce contează
Într-un joc, personajele trebuie să **vadă** ce e în jurul lor: o culoare de pe teren, marginea scenei, locul unde se află. Cu blocurile din <span style="color:#5CB1D1;font-weight:700">Detectare</span> (EN: *Sensing*) și din <span style="color:#4C97FF;font-weight:700">Mișcare</span> (EN: *Motion*) personajul decide singur ce face, fără să îi spui tu pas cu pas.

**În clasă:** la proiect joci cu tastatura, iar mouse-ul rămâne deoparte.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolele Detectare și Mișcare |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Meciul de fotbal” (vezi **Minim vs Complet**) |
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
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`atinge culoarea ( )?`**, **`culoarea ( ) atinge ( )?`**, `tasta [ ] apăsată?`, `atinge [personaj]?` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | **`dacă atinge marginea, ricoșează`**, **`setează stilul de rotație`**, **`poziția x`**, **`poziția y`**, **`direcția`**, `mergi … pași`, `mergi la x: y:`, `schimbă y cu`, `orientează-te în direcția`, `glisează în … secunde la x: y:` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `dacă … atunci`, `așteaptă` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `setează mărimea la` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Culorile de pe scenă
1. Din <span style="color:#5CB1D1;font-weight:700">Detectare</span> iei <span style="color:#5CB1D1;font-weight:700">atinge culoarea ( )?</span>
2. Faci click pe **cercul colorat** din bloc, apoi pe **pipetă** și apoi pe culoarea de pe scenă pe care vrei să o recunoască personajul. Culoarea trebuie să fie **exact aceeași**
3. Blocul are colțuri: nu stă singur, ci în locul gol al lui <span style="color:#FFAB19;font-weight:700">dacă … atunci</span>
4. <span style="color:#5CB1D1;font-weight:700">culoarea ( ) atinge ( )?</span> are **două** cercuri colorate: primul e o culoare a **personajului** (alegi cu pipeta de pe personaj), al doilea e culoarea de pe scenă

**Încearcă tu — culori (3–4 min)**  
- [ ] Ai desenat o bandă roșie pe decor  
- [ ] Mingea spune ceva doar când atinge banda roșie  
- [ ] La `culoarea ( ) atinge ( )?` ai ales prima culoare de pe personaj, nu de pe scenă  

### 2) Marginea și stilul de rotație
1. <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span> nu are nevoie de `dacă`: blocul se uită singur. Îl pui în `la infinit`, după `mergi`
2. Fără stilul de rotație potrivit, personajul se poate răsturna cu capul în jos
3. <span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`: personajul doar se oglindește. Îl pui o singură dată, la început

**Încearcă tu — margine (2–3 min)**  
- [ ] Personajul merge până la margine și se întoarce  
- [ ] Nu se mai răstoarnă cu capul în jos  

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
2. Când personajul atinge culoarea, face ce e înăuntrul lui `dacă`: spune, pornește sunetul sau se întoarce la start

**Încearcă tu — împreună (2–3 min)**  
- [ ] Personajul merge, se întoarce la margine și reacționează la culoare  

---

## Greșeli frecvente
1. **`atinge culoarea` nu se întâmplă niciodată** — culoarea din bloc nu e exact aceeași cu cea de pe scenă. Alege din nou cu pipeta, direct de pe scenă.  
2. **`culoarea ( ) atinge ( )?` nu merge** — prima culoare trebuie luată de pe **personaj**, nu de pe scenă.  
3. **Mingea strigă „Gol!” imediat** — pornește deja pe o poartă. Mută Mingea în centrul terenului, la `x` `0`, `y` `0`.  
4. **Fotbalistul aleargă cu capul în jos** — lipsește `setează stilul de rotație` `[stânga-dreapta]`.  
5. **Mingea nu mai simte culoarea** — ai schimbat culoarea personajului cu un efect. Pentru Minge nu folosești `modifică efectul [culoare]`.  
6. **Mingea nu pornește** — mesajul din `când primesc` nu e același cu cel din `difuzează` (`lovește` și `lovitura` sunt mesaje diferite).  
7. **Mingea trece prin poartă fără gol** — dungile nu sunt chiar pe margine sau sunt prea subțiri. Fă-le mai groase.  
8. **Blocul cu colțuri nu intră** — blocurile din Detectare se pun doar în locul gol al lui `dacă`.  
9. **Mingea trece prin Portar** — galbenul din bloc nu e exact cel al tricoului. Alege din nou cu pipeta, direct de pe tricou.  
10. **Nume fișier** — `Prenume_Nume_L1`, nu doar `Ana_L1`.  

---

## De făcut azi — „Meciul de fotbal”
Salvat: `Prenume_Nume_L1`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — terenul cu porțile colorate + **Fotbalistul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Mingea** cu ≥ 8 blocuri diferite, care pornește când Fotbalistul o lovește și strigă „Gol!” la fiecare poartă |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Terenul și porțile *(Minim)*
Pe scenă, în tab-ul **Decoruri**, alegi din biblioteca de decoruri, la **Sporturi**, un teren de fotbal (de exemplu `Soccer`) și îl redenumești `Terenul`. Pe `Terenul` desenezi două dungi **groase**, cu unealta **Dreptunghi** (umplut): una **roșie**, pe marginea din **stânga**, și una **albastră**, pe marginea din **dreapta**. Sunt cele două **porți**. Dungile trebuie să fie doar de o culoare, fără alte desene peste.  
Redenumești personajele: `Fotbalistul`, `Mingea` și `Portarul`. Fotbalistul: alegi un jucător din biblioteca de personaje. Portarul: un jucător cu **tricou galben** (sau îi schimbi tricoul în galben, în tab-ul **Costume**); galbenul trebuie să fie **doar** pe tricou, fără alt galben pe teren. Mingea: o minge în care predomină **o singură culoare** (de exemplu o minge portocalie). Pe Fotbalist și pe Minge le adaugi în tab-ul **Sunete** câte un sunet (un fluier, un șut).

- [ ] Decorul se numește `Terenul`  
- [ ] Poarta roșie e în stânga, groasă  
- [ ] Poarta albastră e în dreapta, groasă  
- [ ] Personajele sunt redenumite  

### Pasul 2 — Fotbalistul *(Minim)*
Fotbalistul are **3 scripturi**. Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-100` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">spune</span> `Începe meciul!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `6` pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată stânga] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `-90`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `6` pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată sus] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">schimbă y cu</span> `6`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată jos] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">schimbă y cu</span> `-6`  

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Mingea]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `lovește`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  

- [ ] Fotbalistul aleargă cu săgețile, în toate direcțiile  
- [ ] Când merge spre stânga, se oglindește, nu se răstoarnă  
- [ ] Când atinge Mingea, se aude sunetul  
- [ ] Salvat: `Prenume_Nume_L1`  

**→ Minim când:** Fotbalistul spune că începe meciul, aleargă cu săgețile fără să se răstoarne, iar când atinge Mingea se aude sunetul.

### Pasul 3 — Mingea *(Complet)*
Mingea are **2 scripturi**; al doilea pornește când Fotbalistul difuzează `lovește`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `lovește`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `45`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași  
↳ <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea</span> `roșu` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Gol la roșu!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">culoarea</span> `portocaliu` <span style="color:#5CB1D1;font-weight:700">atinge</span> `albastru` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Gol la albastru!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea</span> `galben` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește ↻</span> `180` grade  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `15` pași  

- [ ] Mingea stă pe loc în centru până o lovește Fotbalistul  
- [ ] La poarta roșie, Mingea folosește `atinge culoarea`  
- [ ] La poarta albastră, prima culoare din `culoarea ( ) atinge ( )?` e luată **de pe Minge**, a doua de pe **poarta albastră**  
- [ ] La culoarea galbenă a tricoului de portar, Mingea se întoarce și ricoșează (se vede la Bonus)  
- [ ] La gol, Mingea spune ce poartă a atins, scoate sunetul și se întoarce în centru  
- [ ] Salvat din nou: `Prenume_Nume_L1`  

**Gata Complet când:** Fotbalistul lovește Mingea, Mingea sare de margini, atinge poarta roșie sau albastră, strigă „Gol!”, face zgomot și se întoarce în centru. Dacă atinge tricoul galben al unui portar, ricoșează.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Portarul), care apără poarta albastră și spune unde a oprit mingea:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `190` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `-90`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `lovește`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">glisează în</span> `1` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `190` <span style="color:#4C97FF;font-weight:700">y:</span> `90`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Mingea]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Parat!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
↳ <span style="color:#4C97FF;font-weight:700">glisează în</span> `1` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `190` <span style="color:#4C97FF;font-weight:700">y:</span> `-90`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Mingea]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Parat!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  

- [ ] Portarul stă lângă poarta albastră și se mișcă sus și jos  
- [ ] Când atinge Mingea, spune `Parat!` și numărul `y` unde a oprit-o  

- [ ] ★★★ **Provocare:** pui un **Portar 2** la poarta roșie. Faci click dreapta pe Portar, alegi **Duplică** și redenumești copia `Portarul 2`. În scripturile lui schimbi:  
  `mergi la x:` `-190`, `orientează-te în direcția` `90` și, la cele două `glisează`, `x:` `-190`. Copia are același tricou galben, deci Mingea ricoșează și de el. Acum trebuie să treacă de câte un portar la fiecare poartă.

## Recapitulare rapidă
1. `atinge culoarea` se pune în `dacă` și are nevoie de **aceeași** culoare ca pe scenă  
2. `culoarea ( ) atinge ( )?` are două culori: una **a personajului**, una de pe scenă  
3. `dacă atinge marginea, ricoșează` stă în `la infinit`, după `mergi`  
4. `setează stilul de rotație` `[stânga-dreapta]` oglindește personajul, nu îl răstoarnă  
5. `poziția x`, `poziția y` și `direcția` sunt valori; le pui în `spune ( )`  
6. Nume: **`Prenume_Nume_L1`**  

## Schema pe scurt *(pe foaie)*

**Pe Fotbalist** *(3 scripturi)*  
la steag → `setează stilul de rotație` → `setează mărimea` → `mergi la x: y:` → `spune`  
la steag → `la infinit` (`dacă` `tasta` `apăsată?` `atunci` `orientează-te` + `mergi` ; `dacă` `tasta` `atunci` `schimbă y`, de patru ori)  
la steag → `la infinit` (`dacă` `atinge [Mingea]?` `atunci` `pornește sunetul` + `difuzează lovește` + `așteaptă`)

**Pe Minge** *(2 scripturi)*  
la steag → `mergi la x: y:` → `setează mărimea`  
când primesc lovește → `orientează-te` → `la infinit` (`mergi` + `ricoșează` + `dacă` `atinge culoarea` `atunci` `spune` + `pornește sunetul` + `mergi la` + `dacă` `culoarea atinge` `atunci` `spune` + `pornește sunetul` + `mergi la` + `dacă` `atinge culoarea galben` `atunci` `rotește` + `mergi`)

**Pe Portar** *(Bonus, 2 scripturi; Portarul 2 e o copie)*  
la steag → `setează stilul de rotație` → `setează mărimea` → `mergi la x: y:` → `orientează-te`  
când primesc lovește → `la infinit` (`glisează` + `dacă` `atinge Mingea` `atunci` `spune` + `spune (poziția y)` + `glisează` + `dacă` `atinge Mingea` `atunci` `spune`)

**Quiz scurt (cu profesorul):**  
- De ce trebuie să alegi culoarea cu pipeta și nu „aproape la fel”?  
- Care e diferența dintre `atinge culoarea` și `culoarea ( ) atinge ( )?`  
- Ce face `setează stilul de rotație [stânga-dreapta]`?  
- Ce numere arată `poziția x` și `poziția y` când personajul e în mijlocul scenei?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Mingea, în același `Prenume_Nume_L1`.  
- Dacă ai Complet: adaugi acasă Portarul, în același `Prenume_Nume_L1`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi meciul (alt teren, alte culori pentru porți, alt sport).
