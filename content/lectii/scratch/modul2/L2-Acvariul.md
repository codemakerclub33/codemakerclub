# Lecția 2 — Acvariul
### Detectare și Aspect
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **urmăresc mouse-ul**, **simt când apeși** și **apar sau dispar** după cum vrei tu. Îți faci un acvariu în care peștii înoată după mouse, iar tu aranjezi decorurile unde vrei.  
> Proiect: **„Acvariul”** · fișier: `Prenume_Nume_L2` (ex. `Ana_Pop_L2`)

---

## Obiectiv
La finalul orei ai un acvariu viu: un pește înoată după mouse-ul tău, își schimbă culoarea și se mărește când apeși. Apoi apar decorurile, iar tu le tragi cu mouse-ul și le așezi unde vrei. La Bonus ai **trei pești** care înoată în șir după mouse.  
**Minim:** personajul 1 (Peștele 1) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** decorurile (Scoica, Planta și Castelul), fiecare cu scriptul lor întreg, care apar la semnalul Peștelui și pot fi trase cu mouse-ul.

## De ce contează
Jocurile răspund la mouse: personajul vine după cursor, un click face ceva, un obiect apare sau dispare. Pentru asta citești mouse-ul cu blocurile din <span style="color:#5CB1D1;font-weight:700">Detectare</span> (EN: *Sensing*) și arăți sau ascunzi personajele cu blocurile din <span style="color:#9966FF;font-weight:700">Aspect</span> (EN: *Looks*).

**Personajele le alegi tu.** Alegi din bibliotecă peștii și decorurile pentru acvariu. Nu desenezi nimic.

**În clasă:** pentru tras decorurile deschizi **ecranul complet**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolele Detectare și Aspect |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Acvariul” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 6):**  
<span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `mouse x` | valoare: unde e mouse-ul pe orizontală (x) chiar acum |
| `mouse y` | valoare: unde e mouse-ul pe verticală (y) chiar acum |
| `butonul mouse-ului e apăsat?` | condiție din Detectare: adevărată cât timp ții butonul mouse-ului apăsat |
| `distanța până la [ ]` | valoare: cât de departe e personajul de mouse sau de alt personaj |
| `setează mod tragere [activat]` | personajul poate fi tras cu mouse-ul (se vede în modul ecran complet) |
| `arată` | personajul apare pe scenă |
| `ascunde` | personajul dispare de pe scenă |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`mouse x`**, **`mouse y`**, **`butonul mouse-ului e apăsat?`**, **`distanța până la`**, **`setează mod tragere`** |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`arată`**, **`ascunde`**, `spune … pentru … secunde`, `setează mărimea la`, `setează efectul [culoare] la` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `glisează în … secunde la x: y:` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `dacă … atunci … altfel`, `așteaptă` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Mouse x și mouse y
1. Din <span style="color:#5CB1D1;font-weight:700">Detectare</span> iei <span style="color:#5CB1D1;font-weight:700">mouse x</span> și <span style="color:#5CB1D1;font-weight:700">mouse y</span>: sunt **valori** (blocuri rotunjite), cu bifă pentru afișare pe scenă
2. Mișcă mouse-ul pe scenă: numerele se schimbă imediat
3. Le pui în <span style="color:#4C97FF;font-weight:700">glisează în ( ) secunde la x: ( ) y: ( )</span>: personajul **înoată după mouse**. Trebuie să fie în `la infinit`, ca să se actualizeze mereu. Cu `mergi la x: y:` ar sări, iar cu `glisează` se mișcă lin

**Încearcă tu — mouse x și y (3–4 min)**  
- [ ] Ai bifat `mouse x` și `mouse y` și vezi numerele pe scenă  
- [ ] Personajul înoată după mouse în `la infinit`  
- [ ] Fără `la infinit` ajunge o singură dată la mouse și rămâne acolo  

### 2) Butonul mouse-ului și distanța
1. <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> e o condiție cu colțuri: adevărată cât ții butonul apăsat. O pui în `dacă`
2. <span style="color:#5CB1D1;font-weight:700">distanța până la</span> alegi din listă: **cursorul mouse-ului** sau un alt personaj. Dă un număr: cu cât e mai mare, cu atât sunt mai departe
3. Numărul merge într-un bloc cu loc pentru valoare, de exemplu <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la ( )</span>: personajul își schimbă culoarea după cât de departe e mouse-ul. Îl pui **înainte** de `glisează`, ca să se vadă distanța de la care pornește peștele

**Încearcă tu — click și distanță (3–4 min)**  
- [ ] Mărimea se schimbă doar când ții butonul apăsat (`dacă … altfel`)  
- [ ] Culoarea se schimbă după `distanța până la [cursorul mouse-ului]`  

### 3) Arată și ascunde
1. <span style="color:#9966FF;font-weight:700">ascunde</span> face personajul să dispară: nu mai e pe scenă, dar scripturile lui merg mai departe
2. <span style="color:#9966FF;font-weight:700">arată</span> îl aduce înapoi
3. Un personaj care trebuie să apară la un semnal se ascunde la steag și se arată la mesaj

**Încearcă tu — arată și ascunde (2–3 min)**  
- [ ] Personajul dispare la steagul verde  
- [ ] Apare când primește un mesaj  

### 4) Mod tragere
1. <span style="color:#5CB1D1;font-weight:700">setează mod tragere [activat]</span> îl pui o singură dată, la început
2. Pe scena mică din editor personajul se mută oricum, dar **în modul ecran complet** poți trage personajul cu mouse-ul. Încearcă acolo
3. `[neactivat]` oprește tragerea

**Încearcă tu — mod tragere (2 min)**  
- [ ] Ai pus `setează mod tragere [activat]`  
- [ ] Ai deschis ecranul complet și ai tras personajul cu mouse-ul  

---

## Greșeli frecvente
1. **Peștele nu vine după mouse** — `mouse x` și `mouse y` nu sunt puse în `glisează în … la x: y:`, sau blocul nu e în `la infinit`.  
2. **Peștele sare în loc să înoate** — ai folosit `mergi la x: y:` în loc de `glisează în … secunde la x: y:`.  
3. **Peștele nu își schimbă culoarea** — `setează efectul [culoare]` nu primește `distanța până la`, sau nu ai ales `cursorul mouse-ului` în listă.  
4. **Culoarea se schimbă prea puțin** — mișcă mouse-ul mai departe de pește: distanța mică dă o schimbare mică.  
5. **Decorurile apar deodată cu steagul** — `arată` trebuie să fie după `când primesc` `start`, nu la steag.  
6. **Decorurile nu apar deloc** — Peștele 1 nu difuzează `start`, sau numele din `difuzează` și din `când primesc` nu e același mesaj (`start` și `Start` sunt mesaje diferite).  
7. **Mod tragere nu merge în editor** — trebuie să deschizi ecranul complet.  
8. **Un decor e uriaș sau minuscul** — personajele din bibliotecă au mărimi diferite. Schimbi `50` din `setează mărimea la`.  
9. **Peștii se suprapun** *(Bonus)* — toți au același număr de secunde în `glisează`. Folosește `1`, `2` și `3`.  
10. **Nume fișier** — `Prenume_Nume_L2`, nu doar `Ana_L2`.  

---

## De făcut azi — „Acvariul”
Salvat: `Prenume_Nume_L2`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, personajele redenumite + **Peștele 1** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Scoica**, **Planta** și **Castelul**, fiecare cu scriptul lui întreg, care apar la semnalul Peștelui și se pot trage cu mouse-ul |
| **Bonus** | **Pasul 4**: **Peștele 2** și **Peștele 3**, fiecare cu **2 scripturi** |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Acvariul și personajele *(Minim)*
Alegi din bibliotecă un decor de sub apă sau de acvariu, fără să desenezi. Adaugi personajele și le redenumești exact: `Peștele 1` (un pește sau un animal marin din categoria **Animale**), `Scoica` (o scoică, o stea de mare sau ce ți se pare potrivit pentru un acvariu), `Planta` și `Castelul` (alegi din bibliotecă un obiect care poate sta pe fundul acvariului). La Bonus mai adaugi `Peștele 2` și `Peștele 3`. Pe Scoică, pe Planta și pe Castel adaugi în tab-ul **Sunete** câte un sunet (de exemplu o bulă).  
Decorurile stau ascunse până le programezi la Pasul 3.

- [ ] Decor de acvariu  
- [ ] Personajele se numesc `Peștele 1`, `Scoica`, `Planta` și `Castelul`  
- [ ] Scoica, Planta și Castelul au câte un sunet  

### Pasul 2 — Peștele 1 *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele. Peștele 1 are **2 scripturi**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bun venit în acvariu!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul</span> `[culoare]` <span style="color:#9966FF;font-weight:700">la</span> <span style="color:#5CB1D1;font-weight:700">(distanța până la</span> `[cursorul mouse-ului]` <span style="color:#5CB1D1;font-weight:700">)</span>  
↳ <span style="color:#4C97FF;font-weight:700">glisează în</span> `1` secunde <span style="color:#4C97FF;font-weight:700">la x:</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `90` %  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  

- [ ] Peștele 1 se prezintă și difuzează `start`  
- [ ] Peștele 1 înoată după mouse  
- [ ] Își schimbă culoarea după cât de departe e mouse-ul  
- [ ] Se mărește cât ții butonul apăsat și revine când îl lași  
- [ ] Salvat: `Prenume_Nume_L2`  

**→ Minim când:** Peștele se prezintă, apoi înoată după mouse, își schimbă culoarea și se mărește când apeși.

### Pasul 3 — Scoica, Planta și Castelul *(Complet)*
Fiecare decor are **2 scripturi**. Sunt la fel, doar poziția se schimbă: poți face unul, apoi îl tragi peste celelalte două personaje și schimbi `x`.

**Scoica:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#5CB1D1;font-weight:700">setează mod tragere</span> `[activat]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Pune-mă unde vrei!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

**Planta:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#5CB1D1;font-weight:700">setează mod tragere</span> `[activat]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Pune-mă unde vrei!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

**Castelul:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#5CB1D1;font-weight:700">setează mod tragere</span> `[activat]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Pune-mă unde vrei!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

- [ ] La steag decorurile sunt ascunse  
- [ ] După ce Peștele 1 spune „Bun venit în acvariu!”, apar toate trei, pe rând, cu sunet  
- [ ] Fiecare spune „Pune-mă unde vrei!”  
- [ ] Le tragi cu mouse-ul în ecranul complet și le așezi în acvariu  
- [ ] Salvat din nou: `Prenume_Nume_L2`  

**Gata Complet când:** Peștele se prezintă și înoată după mouse, decorurile apar la semnal, iar tu le tragi și le așezi unde vrei, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
### Pasul 4 — Peștele 2 și Peștele 3 *(★★★)*
Mai adaugi doi pești, `Peștele 2` și `Peștele 3`. Fiecare are **2 scripturi**: aceleași ca la Peștele 1, dar fără `spune` și fără `difuzează start`, iar `glisează` durează **2** și **3 secunde**. Așa înoată în șir după mouse, unul în urma celuilalt. Scripturile din Pașii 2 și 3 **nu se mai schimbă**: Peștele 1 difuzează deja `start`, iar ei îl primesc.

**Peștele 2:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul</span> `[culoare]` <span style="color:#9966FF;font-weight:700">la</span> <span style="color:#5CB1D1;font-weight:700">(distanța până la</span> `[cursorul mouse-ului]` <span style="color:#5CB1D1;font-weight:700">)</span>  
↳ <span style="color:#4C97FF;font-weight:700">glisează în</span> `2` secunde <span style="color:#4C97FF;font-weight:700">la x:</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `90` %  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  

**Peștele 3:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul</span> `[culoare]` <span style="color:#9966FF;font-weight:700">la</span> <span style="color:#5CB1D1;font-weight:700">(distanța până la</span> `[cursorul mouse-ului]` <span style="color:#5CB1D1;font-weight:700">)</span>  
↳ <span style="color:#4C97FF;font-weight:700">glisează în</span> `3` secunde <span style="color:#4C97FF;font-weight:700">la x:</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `90` %  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  

- [ ] Cei trei pești înoată în șir, nu unul peste altul  
- [ ] Peștele 2 e mai lent decât Peștele 1, iar Peștele 3 e și mai lent  
- [ ] Culoarea fiecărui pește se schimbă după distanța lui până la mouse  
- [ ] ★★★ **Provocare:** schimbi la Peștele 3 numărul `3` din `glisează în` cu `5` și vezi cum rămâne în urmă  

## Recapitulare rapidă
1. `mouse x` și `mouse y` sunt valori; pui personajul să înoate după mouse cu `glisează în … la x: y:` în `la infinit`  
2. `butonul mouse-ului e apăsat?` este o condiție: o pui în `dacă`  
3. `distanța până la` dă un număr: cu cât e mai mare, cu atât sunt mai departe  
4. `ascunde` și `arată` fac personajul să dispară sau să apară; scripturile lui merg mai departe  
5. `setează mod tragere [activat]` merge în modul ecran complet  
6. Nume: **`Prenume_Nume_L2`**  

## Schema pe scurt *(pe foaie)*

**Pe Peștele 1** *(2 scripturi)*  
la steag → `setează mărimea` → `mergi la x: y:` → `spune` → `difuzează start`  
când primesc start → `la infinit` (`setează efectul [culoare] la (distanța până la [cursorul mouse-ului])` + `glisează în 1 secundă la x: (mouse x) y: (mouse y)` + `dacă` `butonul apăsat?` `atunci` `setează mărimea` `altfel` `setează mărimea`)

**Pe Scoică, Plantă și Castel** *(câte 2 scripturi)*  
la steag → `ascunde` → `setează mărimea` → `mergi la x: y:` → `setează mod tragere`  
când primesc start → `arată` → `pornește sunetul` → `spune`

**Pe Peștele 2 și Peștele 3** *(Bonus, câte 2 scripturi)*  
la steag → `setează mărimea` → `mergi la x: y:`  
când primesc start → `la infinit` (`setează efectul [culoare]` + `glisează în 2 sau 3 secunde` + `dacă` `butonul apăsat?`)

**Quiz scurt (cu profesorul):**  
- Ce numere arată `mouse x` și `mouse y` când mouse-ul e în mijlocul scenei?  
- De ce `glisează în … la x: (mouse x) y: (mouse y)` trebuie pus în `la infinit`?  
- Ce se întâmplă cu scripturile unui personaj ascuns?  
- Când e mai mare `distanța până la`: când personajele sunt aproape sau departe?  
- De ce decorurile sunt ascunse până vine mesajul `start`?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Scoica, în același `Prenume_Nume_L2`.  
- Dacă ai Complet: adaugi acasă Peștii 2 și 3 (Pasul 4), în același `Prenume_Nume_L2`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi acvariul (alt decor, alți pești, alte decoruri).  
