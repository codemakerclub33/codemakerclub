# Lecția 3 — Curățenie pe orbită
### Quiz pe runde: fiecare răspuns corect prinde un satelit stricat
**Modulul 4 · Proiecte & autonomie**  
**Code Maker Club · Scratch Creator**

> Azi faci un joc-quiz în care salvezi spațiul: orbita Pământului e plină de sateliți stricați, iar Robotul Curățător îi prinde doar dacă răspunzi corect. Ai două runde, iar la Complet asteroizii atacă Stația, deci trebuie să răspunzi și să-i oprești la timp.  
> Proiect: **„Curățenie pe orbită”** · fișier: `Prenume_Nume_M4_L3` (ex. `Ana_Pop_M4_L3`)  
> **Joc de sine stătător**, într-un fișier nou, cu start, final și restart.

---

## Obiectiv
La finalul orei cineva termină **ambele runde** fără ajutor și află câți sateliți a curățat din 6. Cu steagul verde, quiz-ul pornește mereu de la Runda 1, cu scorul la zero.  
**Minim:** Robotul, Satelitul și Scenă, cu **6 întrebări** în **2 runde**, scor pe scenă, reacție la corect **și** la greșit și mesajul final „Ai curățat X din 6”. Robotul are cel puțin **10 blocuri diferite**.  
**Ținta orei (Complet):** personajele 3 și 4, **Stația** și **Asteroidul**, scrise **după o schemă**, cu cel puțin **12 blocuri diferite** pe Asteroid. Cu ele, jocul poate fi și pierdut.

## De ce contează
Un quiz e ca un joc cu nivele: treci de Runda 1, apoi vine Runda 2, mai grea. Ai nevoie de un **scor**, de o **reacție** la fiecare răspuns și de un **final**. Aceleași șase întrebări se verifică la fel, deci ai nevoie de un **bloc propriu cu intrare**. Cu mai multe personaje care se ajută prin mesaje, quiz-ul devine un joc: Satelitul reacționează la răspuns, iar Stația și Asteroidul fac jocul să aibă și pericol.

**În clasă:** variabila de azi se numește `scor` și e **pentru toate personajele**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + ce înseamnă o rundă într-un quiz |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Curățenie pe orbită” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (9):**  
<span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#FF6680;font-weight:700">Blocurile mele</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span>  
*(Folosești ce ai învățat în M1–M3.)*

**Blocuri noi azi:** niciunul. Reluăm `întreabă` din M2, blocul propriu cu intrare din M2 și clonele și variabilele din M3.

---

## Pas cu pas

| Capitol | Ce reluăm azi |
|---------|---------------|
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `întreabă ( ) și așteaptă`, `răspuns` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la`, `schimbă … cu` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `dacă … atunci … altfel`, `așteaptă`, `la infinit`, `repetă până când`, `stop [totul]` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `arată`, `ascunde`, `setează mărimea la`, `schimbă decorul la`, `anulează efectele grafice` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) = ( )`, `( ) < ( )`, `alătură ( ) ( )`, `alege aleator între ( ) și ( )` |
| <span style="color:#FF6680;font-weight:700">Blocurile mele</span> | `creează un bloc` cu o intrare, `definește` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `oprește toate sunetele` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `mergi la [poziție aleatoare]`, `glisează în … secunde la [poziție aleatoare]`, `rotește-te ↻`, `modifică y cu` |

### 1) O întrebare, un răspuns
1. <span style="color:#5CB1D1;font-weight:700">întreabă</span> … <span style="color:#5CB1D1;font-weight:700">și așteaptă</span> pune întrebarea și oprește scriptul până când jucătorul scrie un răspuns și apasă Enter
2. Răspunsul scris apare în blocul <span style="color:#5CB1D1;font-weight:700">răspuns</span>. Îl compari cu răspunsul corect, cu <span style="color:#59C059;font-weight:700">( ) = ( )</span>
3. Pentru întrebările cu variante, scrii variantele în text: `Capitala: 1) Paris 2) Roma 3) Madrid`, iar răspunsul corect e `1`
4. Scriptul nu merge mai departe fără răspuns, deci întrebarea **nu poate fi sărită**

**Încearcă tu — întrebarea (3–4 min)**  
- [ ] Un personaj pune o întrebare cu variantele 1, 2, 3  
- [ ] Scriptul așteaptă până scrii un răspuns  
- [ ] Un `dacă … altfel` spune „Corect!” sau „Greșit!”  

### 2) Scorul pe scenă
1. `scor` e o variabilă făcută **pentru toate personajele** și bifată, ca să se vadă pe scenă
2. La steag, `setează scor la 0`, ca să nu pornești cu scorul de la jocul trecut
3. La fiecare răspuns corect, `schimbă scor cu 1`. La răspuns greșit, scorul **nu** se schimbă
4. La final, spui scorul cu <span style="color:#59C059;font-weight:700">alătură</span>: `alătură (Ai curățat ) (alătură (scor) ( din 6 sateliți!))`

**Încearcă tu — scorul (3–4 min)**  
- [ ] Variabila `scor` se vede pe scenă  
- [ ] Un răspuns corect o crește cu `1`, iar unul greșit nu o schimbă  
- [ ] Steag din nou → `scor` e `0`  

### 3) Blocul propriu: verifică
1. Cele șase întrebări se verifică la fel. În loc să copiezi șase `dacă`, faci un singur bloc: <span style="color:#FF6680;font-weight:700">verifică (corect)</span>, cu o intrare numită `corect`
2. În definiție ai tot: <span style="color:#FFAB19;font-weight:700">dacă</span> `răspuns = corect` <span style="color:#FFAB19;font-weight:700">atunci</span> crește scorul, pornește sunetul, difuzează `prins`, spune „Corect!”, <span style="color:#FFAB19;font-weight:700">altfel</span> difuzează `scăpat`, spune „Hopa, a scăpat!”
3. După fiecare întrebare pui blocul tău cu răspunsul bun: `verifică (2)`
4. Dacă schimbi regula (de exemplu două puncte pentru o întrebare grea), o schimbi **o singură dată**, în definiție

**Încearcă tu — blocul verifică (4–5 min)**  
- [ ] Ai creat blocul `verifică` cu intrarea `corect`  
- [ ] Parametrul `corect` e tras în `răspuns = corect`  
- [ ] Două întrebări diferite folosesc același bloc, cu răspunsuri diferite  

### 4) Runde, mesaje și final
1. Rundele se văd: Runda 1 pe decorul `Cabina`, Runda 2 pe decorul `Orbită`. Schimbarea o face un mesaj: <span style="color:#E6A800;font-weight:700">difuzează</span> `runda_2`, iar Scenă o primește cu <span style="color:#E6A800;font-weight:700">când primesc</span>
2. Runda 2 are întrebări **mai grele** decât Runda 1
3. Mesajele `prins` și `scăpat` din blocul `verifică` nu sunt doar pentru Robot: orice personaj le poate primi și poate reacționa, cu vizualul lui
4. Finalul spune câți sateliți ai curățat și nu lasă nicio întrebare fără răspuns

**Încearcă tu — rundele (3–4 min)**  
- [ ] Decorul se schimbă la mesajul `runda_2`  
- [ ] Runda 2 are întrebări mai grele  
- [ ] Un personaj reacționează la mesajul `prins`, de exemplu cu `spune`  

---

## Greșeli frecvente
1. **Scorul crește și la greșit** — `schimbă scor cu 1` trebuie să fie doar în `atunci`, nu după `dacă … altfel`.  
2. **Un răspuns corect e socotit greșit** — în `verifică` compari cu `corect` (parametrul), nu cu un număr fix. Verifică și că ai scris numai cifra, fără spațiu.  
3. **Blocul `verifică` nu se vede în listă** — l-ai făcut în alt personaj. Fiecare personaj are blocurile lui.  
4. **Runda 2 pare ușoară** — întrebările trebuie să fie mai grele decât în Runda 1.  
5. **Final fără număr** — mesajul final spune „Ai curățat X din 6”, nu doar „Bravo”.  
6. **Scor pornit din jocul trecut** — lipsește `setează scor la 0` la steag.  
7. **Mesaje scrise diferit** — `scăpat` și `scapat` sunt mesaje diferite.  
8. **Satelitul rămâne ascuns** — lipsește `arată` la `prins`, după ce a stat ascuns o secundă.  
9. **Asteroidul nu mai pleacă** — lipsește `setează activ la 0` la atingere sau la click, iar `repetă până când` nu se termină.  
10. **Variabilele `viteza` și `activ` apar la alte personaje** — pentru ele alegi „pentru acest personaj”, nu „pentru toate”.  
11. **Stația pierde prea multe vieți** — blocul `pierde` e apelat de două ori pentru aceeași lovitură.  
12. **Fișier greșit** — azi e `Prenume_Nume_M4_L3`, nu un fișier vechi.  

---

## De făcut azi — „Curățenie pe orbită”
Salvat: `Prenume_Nume_M4_L3`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3** — 2 decoruri · Robotul, Satelitul și Scenă · 6 întrebări în 2 runde · scor pe scenă · reacție la corect și la greșit · final „Ai curățat X din 6” · restart la steag |
| **Complet (ținta orei)** | Minim + **Stația** și **Asteroidul**, scrise **după schemă**: asteroizii cad, tu îi oprești cu click, iar jocul se poate pierde |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Lumea *(Minim)*
**Decorurile:** în tab-ul **Decoruri** alegi din bibliotecă, **în această ordine**: un decor de stație sau de cabină (de exemplu cu un cer albastru), redenumit `Cabina`, și un decor cu spațiu și stele (în căutare scrii `space`), redenumit `Orbită`. Ștergi decorul gol.  
**Personajele:** alegi din bibliotecă un robot (în căutare scrii `robot`) și îl redenumești `Robotul`, apoi un satelit (în căutare scrii `satellite`, sau alegi alt obiect din spațiu) și îl redenumești `Satelitul`. Robotului îi adaugi un sunet scurt de bucurie. `Stația` și `Asteroidul` le adaugi la Complet.  
**Variabila:** `scor`, **pentru toate personajele**. O bifezi, ca să se vadă pe scenă.  

- [ ] Decorurile `Cabina` și `Orbită`, în această ordine  
- [ ] Personajele se numesc `Robotul` și `Satelitul`, iar Robotul are un sunet  
- [ ] Variabila `scor` e **pentru toate personajele**  

### Pasul 2 — Scenă și blocul verifică *(Minim)*
**Scenă** are **2 scripturi**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Cabina]`  
<span style="color:#9966FF;font-weight:700">anulează efectele grafice</span>  
<span style="color:#CF63CF;font-weight:700">oprește toate sunetele</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `runda_2`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Orbită]`  

**Pe Robot**, creezi blocul <span style="color:#FF6680;font-weight:700">verifică (corect)</span>, cu **Blocurile mele** → **Creează un bloc**, numele `verifică` și o intrare numită `corect`. Definiția:

<span style="color:#FF6680;font-weight:700">definește verifică (corect)</span>  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">=</span> <span style="color:#FF6680;font-weight:700">(corect)</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">schimbă scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `prins`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Corect! Satelit prins!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `scăpat`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Hopa, a scăpat!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  

- [ ] Steag de **două** ori → decorul `Cabina`, fără sunete rămase  
- [ ] Blocul `verifică` apare în lista **Blocurile mele**, pe Robot  
- [ ] Parametrul `corect` e tras în `răspuns = corect`  
- [ ] Salvat: `Prenume_Nume_M4_L3`  

### Pasul 3 — Robotul și Satelitul *(Minim)*
Robotul are **un script mare**, care conduce tot quiz-ul. Răspunsurile corecte sunt: `2`, `8`, `1` în Runda 1 și `1`, `2`, `365` în Runda 2. Textele sunt un **model**: poți schimba întrebările, dar atunci schimbi și răspunsul din `verifică`.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `-80`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Bun venit, căpitane! Orbita e plină de sateliți stricați. Răspunde corect și îi prind!` <span style="color:#9966FF;font-weight:700">pentru</span> `6` secunde  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Runda 1. Care planetă e cea mai aproape de Soare? 1) Venus 2) Mercur 3) Marte` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FF6680;font-weight:700">verifică</span> `2`  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Câte planete are Sistemul Solar? (scrie numărul)` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FF6680;font-weight:700">verifică</span> `8`  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Ce se învârte în jurul Pământului? 1) Luna 2) Soarele 3) Marte` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FF6680;font-weight:700">verifică</span> `1`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `runda_2`  
<span style="color:#9966FF;font-weight:700">spune</span> `Runda 2! Întrebările sunt mai grele.` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Care e planeta roșie? 1) Marte 2) Jupiter 3) Saturn` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FF6680;font-weight:700">verifică</span> `1`  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Care e cea mai mare planetă? 1) Saturn 2) Jupiter 3) Neptun` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FF6680;font-weight:700">verifică</span> `2`  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Câte zile are un an pe Pământ? (scrie numărul)` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FF6680;font-weight:700">verifică</span> `365`  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Ai curățat ` <span style="color:#59C059;font-weight:700">(alătură</span> <span style="color:#FF8C1A;font-weight:700">(scor)</span> ` din 6 sateliți!`<span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `4` secunde  

- [ ] Răspunzi corect la Q1 → scorul crește cu `1`, se aude sunetul, Robotul spune „Corect! Satelit prins!”  
- [ ] Răspunzi greșit → scorul rămâne, Robotul spune „Hopa, a scăpat!”  
- [ ] După Q3 decorul trece pe `Orbită`  
- [ ] La final Robotul spune „Ai curățat X din 6 sateliți!”, cu X egal cu scorul  
- [ ] Steag din nou → scorul e `0` și quiz-ul începe de la Runda 1  
- [ ] Salvat: `Prenume_Nume_M4_L3`  

**Satelitul** are **3 scripturi**. Se învârte pe scenă, e prins când răspunzi bine și scapă când răspunzi greșit. Robotul nu are nimic de schimbat, pentru că mesajele `prins` și `scăpat` vin deja din blocul `verifică`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">anulează efectele grafice</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `30` %  
<span style="color:#4C97FF;font-weight:700">mergi la [poziție aleatoare]</span>  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `5` grade  

<span style="color:#E6A800;font-weight:700">când primesc</span> `prins`  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#4C97FF;font-weight:700">mergi la [poziție aleatoare]</span>  
<span style="color:#9966FF;font-weight:700">arată</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `scăpat`  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `1` <span style="color:#4C97FF;font-weight:700">secunde la [poziție aleatoare]</span>  

- [ ] Satelitul stă în alt loc la fiecare steag și se învârte  
- [ ] La răspuns corect dispare o secundă, apoi apare în alt loc  
- [ ] La răspuns greșit se mută în alt loc, fără să dispară  

**→ Minim când:** o altă persoană joacă ambele runde până la final, fără ajutorul tău, și vede cifra corectă a sateliților curățați. Satelitul e prins sau scapă la fiecare întrebare.

### Pasul 4 — Stația și Asteroidul *(Complet, după schemă)*
Aici nu mai primești scripturile. Primești **ce trebuie să facă** personajele, iar blocurile le alegi tu. Adaugi din bibliotecă o stație spațială sau un obiect mare (în căutare scrii `space station`), o redenumești `Stația`, și un asteroid (în căutare scrii `asteroid`, sau alegi alt obiect), pe care îl redenumești `Asteroidul`. Adaugi un sunet pe Asteroid. Scripturile din Pașii 2 și 3 nu se schimbă.

**Stația** are un bloc propriu, **pierde (câte)**, care scade `vieți` cu intrarea `câte`. Pentru Stația faci `vieți`, **pentru toate personajele**, bifată.

| Ce trebuie să facă | Indiciu |
|--------------------|---------|
| La steag stă jos, mare, iar `vieți` pornește de la `5` | `setează mărimea`, `mergi la x: y:`, `setează vieți la` |
| Blocul `pierde (câte)` scade viețile și verifică dacă jocul s-a terminat | `definește`, `modifică vieți cu`, `dacă vieți < 1`, `spune`, `stop [totul]` |
| La `scăpat` (un răspuns greșit) pierde **1** viață | `când primesc scăpat`, `pierde 1` |
| La `lovit` (lovită de un asteroid) pierde **2** vieți | `când primesc lovit`, `pierde 2` |

**Asteroidul** (≥ 12 blocuri diferite) cade din când în când. Dacă îl atingi cu **click**, dispare. Dacă ajunge la Stație, o lovește.

| Ce trebuie să facă | Indiciu |
|--------------------|---------|
| La steag stă ascuns, iar variabila lui `viteza` e `3` și `activ` e `0` | `ascunde`, `setează viteza la`, `setează activ la` (variabile **doar pentru acest personaj**) |
| La un interval **aleator** apare sus, într-un loc **aleator** | `la infinit`, `așteaptă`, `alege aleator între`, `mergi la x: y:`, `arată` |
| Cade, cu viteza lui, până când nu mai e activ | `setează activ la 1`, `repetă până când activ = 0`, `modifică y cu` |
| Dacă atinge Stația, o lovește și nu mai e activ | `dacă atinge`, `difuzează lovit`, `setează activ la 0` |
| Click pe el îl oprește, cu un sunet | `când se dă click pe acest personaj`, `pornește sunetul`, `setează activ la 0` |
| În Runda 2 cade mai repede | `când primesc runda_2`, `setează viteza la 6` |

- [ ] Asteroidul apare la intervale diferite, în locuri diferite  
- [ ] Click pe Asteroid îl face să dispară, cu sunet  
- [ ] Dacă ajunge la Stație, `vieți` scade cu `2`  
- [ ] Un răspuns greșit scade `vieți` cu `1`  
- [ ] La zero vieți apare un mesaj de final și jocul se oprește  
- [ ] Steag din nou → `vieți` e `5`, iar Asteroidul e ascuns  
- [ ] Salvat din nou: `Prenume_Nume_M4_L3`  

**Gata Complet când:** joci toate cele 6 întrebări, oprești asteroizii cu click, iar jocul se termină fie cu „Ai curățat X din 6 sateliți!”, fie cu Stația distrusă.

---

## Bonus ★★★ — Provocare
*Doar dacă ai terminat Complet.*

- [ ] **Final pe trepte:** Robotul spune un mesaj diferit după scor: sub 3 sateliți „Mai încearcă!”, între 3 și 5 „Bravo!”, iar la 6 „Orbita e curată!”. Folosești `dacă … altfel` în `dacă … altfel`.  
- [ ] ★★★ **Provocare:** după quiz, misiunea continuă. Mai sunt sateliți stricați pe orbită, iar tu ai **15 secunde** să-i prinzi cu click. Satelitul se **clonează** (în 5 clone), fiecare clonă se mișcă în alt loc, iar fiecare click pe o clonă crește o variabilă `curățate`. Cu `cronometru` oprești misiunea, iar Robotul anunță câți sateliți ai curățat. Scrii singur scripturile, cu aceleași mesaje ca până acum. Nu schimbi niciun script de la Minim.

## Recapitulare rapidă
1. `întreabă … și așteaptă` oprește scriptul până la răspuns, iar `răspuns` ține ce ai scris  
2. `scor` crește doar la răspuns corect, iar la steag se pune pe `0`  
3. Un bloc propriu cu o intrare (`verifică (corect)`, `pierde (câte)`) înlocuiește codul repetat  
4. Mesajele `prins`, `scăpat` și `lovit` pot fi primite de orice personaj  
5. Un joc mai bun are pericol: asteroizii cad, tu îi oprești, iar Stația poate cădea  
6. Nume: **`Prenume_Nume_M4_L3`**  

## Schema pe scurt *(pe foaie)*

**Scenă** *(2 scripturi)*  
la steag → `schimbă decorul la Cabina` → `anulează efectele` → `oprește sunetele`  
când primesc runda_2 → `schimbă decorul la Orbită`

**Robot** *(2 scripturi: blocul și quiz-ul)*  
definește verifică (corect) → `dacă răspuns = corect` `atunci` `schimbă scor` + `pornește sunetul` + `difuzează prins` + `spune` `altfel` `difuzează scăpat` + `spune`  
la steag → `setează scor` → `mărimea` → `mergi la x: y:` → `arată` → `spune` → (`întreabă` → `verifică`) × 3 → `difuzează runda_2` → `spune` → (`întreabă` → `verifică`) × 3 → `spune alătură … (scor) …`

**Satelit** *(3 scripturi)*  
la steag → `anulează efectele` → `mărimea` → `mergi la poziție aleatoare` → `arată` → `la infinit` `rotește`  
când primesc prins → `ascunde` → `așteaptă` → `mergi la poziție aleatoare` → `arată`  
când primesc scăpat → `glisează în … la poziție aleatoare`

**Stația** *(Complet, după schemă)*: `vieți` = 5; blocul `pierde (câte)`; scăpat → `pierde 1`; lovit → `pierde 2`; la zero vieți `stop`  
**Asteroid** *(Complet, după schemă)*: ascuns la steag; la intervale aleatoare apare sus, cade cu `viteza`; atinge Stația → `lovit`; click → oprit; runda_2 → `viteza` 6

**Quiz scurt (cu profesorul):**  
- Ce face `întreabă … și așteaptă`?  
- De ce `verifică` are o intrare?  
- Când crește `scor`?  
- De ce Stația are un bloc cu intrare?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Stația și Asteroidul, în același `Prenume_Nume_M4_L3`.  
- Dacă ai Complet: adaugi acasă misiunea de curățenie (Bonus).  
- Dacă ai terminat Bonusul: schimbi cele șase întrebări cu altele, despre o temă preferată, și păstrezi aceleași scripturi.
