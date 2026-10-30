# Lecția 7 — Cald și rece
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi înveți să afli **cât de departe** e mouse-ul de un loc ascuns. O comoară e ascunsă undeva pe scenă, iar Detectorul te urmărește și îți spune „Rece”, „Cald” sau „Fierbinte!”.  
> Proiect: **„Cald și rece”** · fișier: `Prenume_Nume_L7` (ex. `Ana_Pop_L7`)

---

## Obiectiv
La finalul orei joci propriul joc: o comoară e ascunsă într-un loc la întâmplare. Tu miști mouse-ul, iar Detectorul de comori îți spune cât de aproape ești. Apeși butonul mouse-ului ca să sapi. Ai **5 încercări**. Dacă ai nimerit, găsești comoara și primești un punct, iar comoara se ascunde în alt loc.  
**Minim:** personajul 1 (Comoara), cu **2 scripturi**, și personajul 2 (Detectorul), cu **scriptul întreg**.  
**Ținta orei (Complet):** jocul, testat în toate cazurile: rece, cald, fierbinte, comoară găsită, săpătură greșită și terminarea încercărilor.

## De ce contează
Multe jocuri se joacă după **distanță**: cât de aproape ești de țintă. Distanța dintre două locuri e mereu un număr **pozitiv**, dar diferența dintre ele poate ieși negativă, dacă ești în stânga țintei. Blocul <span style="color:#59C059;font-weight:700">[modul] din ( )</span> (EN: *abs*, din *absolute value*) rezolvă asta: scoate **minusul**. `[modul] din (-5)` dă `5`, iar `[modul] din (5)` dă tot `5`.

**Personajele le alegi tu.** Alegi din bibliotecă un personaj pentru Detector și un obiect pentru Comoară. Mărimea o setăm în script, pentru că unele personaje din bibliotecă sunt foarte mari.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Cald și rece” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span>  
*(Restul din Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `([modul] din ( ))` | valoare: numărul fără minus, de exemplu `5` pentru `-5` (din **Operatori**) |
| `<butonul mouse-ului e apăsat?>` | condiție: adevărată cât timp ții butonul mouse-ului apăsat |
| `mergi la [cursorul mouse-ului]` | mută personajul chiar sub cursor |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la`, `modifică … cu` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă până când`, `așteaptă ( ) secunde`, `dacă … atunci`, `dacă … atunci … altfel` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune`, `spune … pentru … secunde`, `arată`, `ascunde`, `setează mărimea la` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`butonul mouse-ului e apăsat?`**, `mouse x`, `mouse y` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | **`[modul] din ( )`**, `( ) - ( )`, `( ) < ( )`, `( ) > ( )`, `<> și <>`, `alege aleator între ( ) și ( )`, `alătură ( ) ( )` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | **`mergi la [cursorul mouse-ului]`**, `mergi la x: y:` |

### 1) Distanța fără minus
1. <span style="color:#59C059;font-weight:700">[modul] din ( )</span> scoate minusul dintr-un număr. Faci click pe `[modul] din (-5)` și apare `5`
2. Ca să afli **cât de departe** e mouse-ul de un loc, scazi: `(mouse x) - (100)`. Dacă ești în stânga lui, rezultatul e negativ
3. Pui scăderea în `[modul] din`: `[modul] din ((mouse x) - (100))`. Acum e mereu pozitiv: `30` dacă ești cu 30 de pași în stânga **sau** în dreapta lui `100`

**Încearcă tu — modulul (3 min)**  
- [ ] `[modul] din (-5)` arată `5`  
- [ ] `[modul] din ((mouse x) - (100))` arată `0` când mouse-ul e la `x` egal cu `100`  
- [ ] Mișcă mouse-ul în stânga și în dreapta lui `100`: numărul nu devine negativ  

### 2) Detectorul urmărește mouse-ul
1. <span style="color:#4C97FF;font-weight:700">mergi la [cursorul mouse-ului]</span> pune personajul chiar sub cursor. Îl pui într-o buclă și te urmărește
2. <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> este o **condiție**: e adevărată cât timp ții butonul apăsat. O pui în `dacă`, ca să știi când sapi
3. După fiecare săpătură pui `așteaptă 2 secunde`, ca să nu sapi de mai multe ori dintr-un singur click

**Încearcă tu — mouse-ul (3 min)**  
- [ ] Personajul tău merge după cursor, într-o buclă  
- [ ] Când apeși butonul mouse-ului, personajul spune ceva  
- [ ] După spus, așteaptă două secunde  

### 3) Cald și rece
1. Pui locul comorii în două variabile: `cx` și `cy`. Distanța pe `x` e `dx`, iar pe `y` e `dy`
2. `setează dx la ([modul] din ((mouse x) - (cx)))` și la fel pentru `dy`. Le calculezi la fiecare pas, în buclă
3. Ești **fierbinte** dacă ești aproape și pe `x`, și pe `y`: `<<(dx) < 30> și <(dy) < 30>>`
4. Dacă nu ești fierbinte, întrebi dacă ești **cald**: `<<(dx) < 80> și <(dy) < 80>>`. Altfel ești **rece**. Cele trei răspunsuri sunt un `dacă … altfel` în care pui alt `dacă … altfel`

**Încearcă tu — temperatura (3–4 min)**  
- [ ] `dx` arată cât de departe e mouse-ul pe `x`, fără minus  
- [ ] Aproape de locul ales spune `Fierbinte!`  
- [ ] La mijloc spune `Cald.`, iar departe spune `Rece.`  

### 4) Comoara ascunsă
1. Comoara își alege locul la întâmplare: `setează cx la (alege aleator între -200 și 200)` și `setează cy la (alege aleator între -140 și 140)`. Apoi se ascunde și merge acolo: `mergi la x: (cx) y: (cy)`
2. Dacă ai nimerit, Detectorul trimite `găsit`; dacă nu, trimite `greșit`
3. La `găsit` Comoara apare, se aude sunetul, apoi se ascunde și își alege alt loc

**Încearcă tu — ascunzătoarea (3 min)**  
- [ ] La steag, Comoara se ascunde și `cx` și `cy` au numere noi, de fiecare dată  
- [ ] La un mesaj `găsit` ea apare și se aude sunetul  
- [ ] După o secundă se ascunde în alt loc  

---

## Greșeli frecvente
1. **Detectorul nu urmărește mouse-ul** — blocul `mergi la [cursorul mouse-ului]` e în afara buclei, sau lipsește bucla `repetă până când`.  
2. **Spune mereu `Rece.`** — `cx` și `cy` nu au numere (Comoara nu a pornit), sau distanțele din `dacă` sunt prea mici.  
3. **Spune mereu `Fierbinte!`** — comparația e greșită: `dx` și `dy` trebuie să fie **mai mici** decât `30`. Verifici semnul `<`.  
4. **Distanța iese negativă** — lipsește `[modul] din`. Fără el, în stânga comorii rezultatul e minus.  
5. **Încercările scad foarte repede** — lipsește `așteaptă 2 secunde` după săpătură.  
6. **Comoara nu se vede deloc** — la `găsit` lipsește `arată`, sau Comoara e prea mică sau prea mare. Schimbi numărul din `setează mărimea la`.  
7. **Detectorul sau Comoara sunt uriașe** — personajele din bibliotecă au mărimi diferite. Schimbi `40` din `setează mărimea la`.  
8. **Comoara nu se mută după ce o găsești** — scriptul `când primesc găsit` nu are `setează cx` și `setează cy` noi.  
9. **Jocul nu se oprește la zero încercări** — `repetă până când` nu are `<(încercări) < 1>`.  
10. **Ghidul nu spune nimic** *(Bonus)* — mesajul din `când primesc` nu e `greșit`.  
11. **Nume fișier** — `Prenume_Nume_L7`, nu doar `Ana_L7`.  

---

## De făcut azi — „Cald și rece”
Salvat: `Prenume_Nume_L7`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3**: pregătirea, Comoara, cu **2 scripturi**, și Detectorul, cu **scriptul întreg**. Jocul merge doar cu amândouă |
| **Complet (ținta orei)** | Minim, testat în toate cazurile: rece, cald, fierbinte, comoară găsită, săpătură greșită și terminarea încercărilor |
| **Bonus** | **Pasul 4**: al treilea personaj, **Ghidul**, cu **2 scripturi**. Scripturile din Pașii 2 și 3 nu se mai schimbă |

Fiecare personaj are scripturile lui **întregi**, de la început. Nu se completează nimic după aceea. Scriptul Detectorului e **lung**: îl construiești **bucată cu bucată**, de sus în jos, dar e **un singur script**.

Dacă rămâi în urmă: salvează ce ai. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Pregătirea: variabile și personaje *(Minim)*
**Variabilele:** `scor`, `încercări`, `cx`, `cy`, `dx` și `dy`, toate **pentru toate personajele**. Bifezi doar `scor` și `încercări`, ca să se vadă pe scenă. Pe celelalte le lași nebifate.  
**Detectorul:** alegi din bibliotecă un personaj care ți se pare potrivit pentru un explorator (de la **Oameni** sau **Animale**) și îl redenumești `Detectorul`.  
**Comoara:** alegi din bibliotecă un obiect din **Lucruri** care poate fi o comoară și îl redenumești `Comoara`. Adaugi în tab-ul **Sunete** un sunet.  
**Decorul:** alegi unul din bibliotecă, de exemplu o plajă sau o pădure.  
**Mărimea** o setăm din scripturi. Dacă un personaj e prea mare sau prea mic, schimbi numărul din blocul `setează mărimea la`.

- [ ] Variabilele `scor`, `încercări`, `cx`, `cy`, `dx` și `dy` sunt **pentru toate personajele**; se văd doar `scor` și `încercări`  
- [ ] Detectorul și Comoara sunt alese și redenumite  
- [ ] Comoara are un sunet  

### Pasul 2 — Comoara, cele 2 scripturi *(Minim)*
Comoara are **2 scripturi** complete. Primul o ascunde și îi alege locul. Al doilea e scriptul de după ce a fost găsită:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#FF8C1A;font-weight:700">setează cx la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-200` <span style="color:#59C059;font-weight:700">și</span> `200` <span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#FF8C1A;font-weight:700">setează cy la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-140` <span style="color:#59C059;font-weight:700">și</span> `140` <span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#FF8C1A;font-weight:700">(cx)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#FF8C1A;font-weight:700">(cy)</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `găsit`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#FF8C1A;font-weight:700">setează cx la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-200` <span style="color:#59C059;font-weight:700">și</span> `200` <span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#FF8C1A;font-weight:700">setează cy la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-140` <span style="color:#59C059;font-weight:700">și</span> `140` <span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#FF8C1A;font-weight:700">(cx)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#FF8C1A;font-weight:700">(cy)</span>  

- [ ] La steag, Comoara se ascunde și se mută într-un loc ales la întâmplare  
- [ ] Variabilele `cx` și `cy` au numere noi la fiecare pornire  
- [ ] La `găsit` apare, se aude sunetul, se ascunde și își alege alt loc  

### Pasul 3 — Detectorul, scriptul întreg *(Minim)*
Ordinea e un **model**: poți schimba numerele și textele. Detectorul are **un singur script**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează încercări la</span> `5`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  

<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(încercări)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi la</span> `[cursorul mouse-ului]`  
↳ <span style="color:#FF8C1A;font-weight:700">setează dx la</span> <span style="color:#59C059;font-weight:700">([modul] din (</span><span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#59C059;font-weight:700">-</span> <span style="color:#FF8C1A;font-weight:700">(cx)</span><span style="color:#59C059;font-weight:700">))</span>  
↳ <span style="color:#FF8C1A;font-weight:700">setează dy la</span> <span style="color:#59C059;font-weight:700">([modul] din (</span><span style="color:#5CB1D1;font-weight:700">(mouse y)</span> <span style="color:#59C059;font-weight:700">-</span> <span style="color:#FF8C1A;font-weight:700">(cy)</span><span style="color:#59C059;font-weight:700">))</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(dx)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `30` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#FF8C1A;font-weight:700">(dy)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `30` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Fierbinte!`  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(dx)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `80` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#FF8C1A;font-weight:700">(dy)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `80` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Cald.`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Rece.`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică încercări cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(dx)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `30` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#FF8C1A;font-weight:700">(dy)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `30` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `găsit`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `greșit`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  

<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Joc terminat! Comori: ` <span style="color:#FF8C1A;font-weight:700">(scor)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

**Cum îl construiești, pe bucăți:**
1. **Începutul:** steagul, `scor`, `încercări`, poziția, mărimea și `așteaptă 1 secunde`. Pauza lasă Comoara să aleagă locul
2. **Bucla:** `repetă până când <(încercări) < 1>`: jocul merge cât mai ai încercări
3. **Urmărirea:** `mergi la [cursorul mouse-ului]`, apoi cele două `setează`, cu `[modul] din`
4. **Temperatura:** `dacă` fierbinte, `altfel`, în care pui `dacă` cald, `altfel` rece
5. **Săpătura:** `dacă <butonul mouse-ului e apăsat?>`: `modifică încercări cu -1`, apoi un `dacă … altfel` cu `găsit` sau `greșit`, apoi `așteaptă 2 secunde`
6. **După buclă:** mesajul de final cu `alătură`

**Scriptul Detectorului merge doar după ce faci și Pasul 2**, pentru că de la Comoară vin `cx` și `cy`.

- [ ] Apeși pe steag: Detectorul te urmărește peste tot, cu cursorul  
- [ ] Departe de comoară spune `Rece.`, la mijloc `Cald.`, aproape `Fierbinte!`  
- [ ] Apeși butonul mouse-ului: `încercări` scade cu `1`  
- [ ] Dacă ai nimerit, comoara apare, se aude sunetul, `scor` crește, iar comoara se mută  
- [ ] Dacă ai greșit, nu se întâmplă nimic în afară de scăderea încercărilor  
- [ ] La zero încercări jocul se oprește și spune câte comori ai găsit  
- [ ] Salvat: `Prenume_Nume_L7`  

**→ Minim când:** apeși pe steag, Detectorul te urmărește, spune rece, cald sau fierbinte, la un click sapi, găsești comoara sau pierzi o încercare, iar jocul se oprește când nu mai ai încercări.  
**→ Complet când:** ai testat jocul în toate cazurile: rece, cald, fierbinte, comoară găsită, săpătură greșită și terminarea încercărilor.

---

## Bonus (dacă ai terminat Complet)
### Pasul 4 — Ghidul, cele 2 scripturi *(★★★)*
Al 3-lea personaj îți dă un **indiciu** când ai săpat degeaba. Alegi din bibliotecă un personaj care nu seamănă cu Detectorul (de exemplu un animal, dacă Detectorul e om) și îl redenumești `Ghidul`. Scripturile din Pașii 2 și 3 **nu se mai schimbă**: Detectorul trimite deja `greșit`, iar Ghidul îl primește.

Ghidul are **2 scripturi** complete:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-180` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `greșit`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(cx)</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Caută mai la dreapta!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Caută mai la stânga!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(cy)</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Și mai sus!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Și mai jos!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

- [ ] Ghidul stă jos, în stânga  
- [ ] După o săpătură greșită spune `Caută mai la dreapta!` sau `Caută mai la stânga!`, după unde e comoara  
- [ ] Apoi spune `Și mai sus!` sau `Și mai jos!`  
- [ ] La o săpătură bună nu spune nimic  
- [ ] ★★★ **Provocare:** schimbi în scriptul Detectorului numărul `5` din `setează încercări la` cu `3` și vezi cât de greu devine jocul  

## Recapitulare rapidă
1. `[modul] din ( )` scoate minusul: distanța e mereu pozitivă  
2. `mouse x` și `mouse y` îți spun unde e cursorul; `mergi la [cursorul mouse-ului]` te pune sub el  
3. Distanța pe două axe: `dx` și `dy`; ești aproape când **amândouă** sunt mici  
4. Un `dacă … altfel` în alt `dacă … altfel` alege între trei răspunsuri  
5. `așteaptă 2 secunde` după săpătură oprește săpăturile multiple dintr-un click  
6. Nume: **`Prenume_Nume_L7`**  

## Schema pe scurt *(pe foaie)*

**Pe Comoară** *(2 scripturi)*  
la steag → `ascunde` → `setează mărimea` → `setează cx la (alege aleator între -200 și 200)` → `setează cy la (alege aleator între -140 și 140)` → `mergi la x: (cx) y: (cy)`  
când primesc găsit → `arată` → `pornește sunetul` → `așteaptă 1` → `ascunde` → `setează cx` → `setează cy` → `mergi la x: (cx) y: (cy)`

**Pe Detector** *(un singur script)*  
la steag → `setează scor la 0` → `setează încercări la 5` → `mergi la x: y:` → `setează mărimea` → `așteaptă 1` → `repetă până când <(încercări) < 1>` (`mergi la [cursorul mouse-ului]` + `setează dx la ([modul] din ((mouse x) - (cx)))` + `setează dy la ([modul] din ((mouse y) - (cy)))` + `dacă <<(dx) < 30> și <(dy) < 30>>` `atunci` `spune Fierbinte!` `altfel` (`dacă <<(dx) < 80> și <(dy) < 80>>` `atunci` `spune Cald.` `altfel` `spune Rece.`) + `dacă <butonul mouse-ului e apăsat?>` `atunci` (`modifică încercări cu -1` + `dacă <<(dx) < 30> și <(dy) < 30>>` `atunci` (`modifică scor cu 1` + `difuzează găsit`) `altfel` `difuzează greșit` + `așteaptă 2`)) → `spune (alătură Joc terminat! Comori: (scor))`

**Pe Ghid** *(Bonus, 2 scripturi)*  
la steag → `mergi la x: y:` → `setează mărimea`  
când primesc greșit → `dacă <(cx) > (mouse x)>` `atunci` `spune Caută mai la dreapta!` `altfel` `spune Caută mai la stânga!` → `dacă <(cy) > (mouse y)>` `atunci` `spune Și mai sus!` `altfel` `spune Și mai jos!`

**Quiz scurt (cu profesorul):**  
- Ce dă `[modul] din (-5)`?  
- De ce trebuie `[modul] din` când calculezi distanța?  
- De ce verificăm și `dx`, și `dy`, nu doar unul?  
- De ce `așteaptă 2 secunde` după săpătură?

## Temă (opțional)
- Dacă ai doar Minim: testezi acasă jocul în toate cazurile, apoi adaugi Ghidul (Pasul 4), în același `Prenume_Nume_L7`.  
- Dacă ai Complet: adaugi acasă Ghidul (Pasul 4), în același `Prenume_Nume_L7`.  
- Dacă ai terminat și Bonusul: schimbi distanțele din Detector, `30` și `80`, ca să faci jocul mai ușor sau mai greu, și le testezi cu un coleg.  
