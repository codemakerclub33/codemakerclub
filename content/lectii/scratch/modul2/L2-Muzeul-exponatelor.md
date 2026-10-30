# Lecția 2 — Muzeul exponatelor
### Detectare și Aspect
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **urmăresc mouse-ul**, **simt când apeși** și **apar sau dispar** după cum vrei tu. Într-un muzeu întunecat, un exponat se vede din ce în ce mai bine pe măsură ce te apropii de el.  
> Proiect: **„Muzeul exponatelor”** · fișier: `Prenume_Nume_L2` (ex. `Ana_Pop_L2`)

---

## Obiectiv
La finalul orei Ghidul tău se plimbă prin muzeu după mouse. Un exponat ascuns se vede tot mai clar când te apropii, îți spune un **fapt adevărat**, iar tu îl colectezi cu un click. Apoi apare Vitrina.  
**Minim:** personajul 1 (Ghidul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Exponatul), cu cel puțin **8 blocuri diferite**, care se vede mai bine când te apropii, spune faptul și dispare când îl colectezi.

## De ce contează
Jocurile răspund la mouse: personajul vine după cursor, un click face ceva, un obiect apare sau dispare. Pentru asta citești mouse-ul cu blocurile din <span style="color:#5CB1D1;font-weight:700">Detectare</span> (EN: *Sensing*) și arăți sau ascunzi personajele cu blocurile din <span style="color:#9966FF;font-weight:700">Aspect</span> (EN: *Looks*).

**Faptul îl alegi tu.** Exponatul spune ceva **adevărat**. Îl iei dintr-o carte, de pe un afiș din muzeu sau îl întrebi pe un adult. Cu cât faptul e mai interesant, cu atât jocul e mai bun.

**În clasă:** la proiect ții butonul mouse-ului **liber** până atingi exponatul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolele Detectare și Aspect |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Muzeul exponatelor” (vezi **Minim vs Complet**) |
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
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`mouse x`**, **`mouse y`**, **`butonul mouse-ului e apăsat?`**, **`distanța până la`**, **`setează mod tragere`**, `atinge [cursorul mouse-ului]?` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`arată`**, **`ascunde`**, `spune … pentru … secunde`, `setează mărimea la`, `setează efectul [fantomă] la`, `setează efectul [culoare] la` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `mergi la [poziție aleatoare]` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `dacă … atunci … altfel`, `repetă până când`, `așteaptă până când`, `așteaptă` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Mouse x și mouse y
1. Din <span style="color:#5CB1D1;font-weight:700">Detectare</span> iei <span style="color:#5CB1D1;font-weight:700">mouse x</span> și <span style="color:#5CB1D1;font-weight:700">mouse y</span>: sunt **valori** (blocuri rotunjite), cu bifă pentru afișare pe scenă
2. Mișcă mouse-ul pe scenă: numerele se schimbă imediat
3. Le pui în <span style="color:#4C97FF;font-weight:700">mergi la x: ( ) y: ( )</span>: personajul **vine după mouse**. Trebuie să fie în `la infinit`, ca să se actualizeze mereu

**Încearcă tu — mouse x și y (3–4 min)**  
- [ ] Ai bifat `mouse x` și `mouse y` și vezi numerele pe scenă  
- [ ] Personajul vine după mouse în `la infinit`  
- [ ] Fără `la infinit` ajunge o singură dată la mouse și rămâne acolo  

### 2) Butonul mouse-ului și distanța
1. <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> e o condiție cu colțuri: adevărată cât ții butonul apăsat. O pui în `dacă`, în `așteaptă până când` sau în `repetă până când`
2. <span style="color:#5CB1D1;font-weight:700">distanța până la</span> alegi din listă: **cursorul mouse-ului** sau un alt personaj. Dă un număr: cu cât e mai mare, cu atât sunt mai departe
3. Numărul merge într-un bloc cu loc pentru valoare, de exemplu <span style="color:#9966FF;font-weight:700">setează efectul [fantomă] la ( )</span>. Efectul **fantomă** face personajul transparent: `0` înseamnă că se vede întreg, `100` înseamnă că nu se mai vede. Dacă îi dai distanța, personajul se vede **tot mai bine** pe măsură ce mouse-ul se apropie

**Încearcă tu — click și distanță (3–4 min)**  
- [ ] Mărimea se schimbă doar când ții butonul apăsat (`dacă … altfel`)  
- [ ] Personajul se vede mai bine cu cât mouse-ul e mai aproape de el (`setează efectul [fantomă] la (distanța până la [cursorul mouse-ului])`)  

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
1. **Ghidul nu vine după mouse** — `mouse x` și `mouse y` nu sunt puse în `mergi la x: y:`, sau blocul nu e în `la infinit`.  
2. **Exponatul nu se vede deloc** — `distanța până la` nu are aleasă opțiunea `cursorul mouse-ului`, sau lipsește `setează efectul [fantomă]` din `repetă până când`.  
3. **Exponatul e mereu transparent** — blocul `setează efectul [fantomă] la ( )` primește un număr fix mare, nu `distanța până la`.  
4. **Exponatul nu spune faptul** — lipsește `setează efectul [fantomă] la 0` după buclă, sau nu ai atins exponatul cu mouse-ul.  
5. **Exponatul dispare imediat** — ții deja butonul mouse-ului apăsat. Ține butonul liber până atingi exponatul.  
6. **Exponatul nu se oprește când îl atingi** — `repetă până când` nu are `atinge [cursorul mouse-ului]?`.  
7. **Mod tragere nu merge în editor** — trebuie să deschizi ecranul complet.  
8. **Vitrina apare deodată cu Exponatul** — `arată` pentru Vitrină trebuie să fie după `când primesc` `vitrina`, nu la steag.  
9. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`prins` și `capturat` sunt mesaje diferite).  
10. **Nume fișier** — `Prenume_Nume_L2`, nu doar `Ana_L2`.  

---

## De făcut azi — „Muzeul exponatelor”
Salvat: `Prenume_Nume_L2`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, cele trei personaje redenumite + **Ghidul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Exponatul** cu ≥ 8 blocuri diferite, care se vede mai bine când te apropii, spune faptul și dispare când îl colectezi |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Muzeul și personajele *(Minim)*
Alegi din bibliotecă un decor de interior, fără să desenezi, de exemplu o sală sau un perete simplu. Adaugi trei personaje și le redenumești exact: `Ghidul` (un personaj din categoria **Oameni**), `Exponatul` (un dinozaur, un animal, o planetă sau orice obiect interesant din bibliotecă) și `Vitrina` (o cutie, o ladă sau un glob). Pe Exponat și pe Vitrină adaugi în tab-ul **Sunete** câte un sunet.  
**Faptul:** alegi un fapt adevărat despre exponatul tău și îl scrii pe foaie. Îl vei pune în script la Pasul 3. În scriptul de mai jos exemplul e despre un dinozaur.  
Exponatul stă pe loc până îl programezi la Pasul 3.

- [ ] Decor de interior  
- [ ] Personajele se numesc `Ghidul`, `Exponatul` și `Vitrina`  
- [ ] Exponatul și Vitrina au câte un sunet  
- [ ] Ai scris pe foaie un fapt adevărat despre exponat  

### Pasul 2 — Ghidul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bun venit la muzeu! Caută exponatul.` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `90` %  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `prins`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am colectat exponatul!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `vitrina`  

- [ ] Ghidul vine după mouse  
- [ ] Se mărește cât ții butonul apăsat și revine când îl lași  
- [ ] Salvat: `Prenume_Nume_L2`  

**→ Minim când:** Ghidul se prezintă, apoi vine după mouse și se mărește când apeși.

### Pasul 3 — Exponatul *(Complet)*
Exponatul are **2 scripturi**, iar al doilea pornește când Ghidul difuzează `start`. Faptul din `spune` îl schimbi cu cel scris de tine pe foaie:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">setează efectul</span> `[fantomă]` <span style="color:#9966FF;font-weight:700">la</span> `100`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#5CB1D1;font-weight:700">atinge [cursorul mouse-ului]?</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul</span> `[fantomă]` <span style="color:#9966FF;font-weight:700">la</span> <span style="color:#5CB1D1;font-weight:700">(distanța până la</span> `[cursorul mouse-ului]` <span style="color:#5CB1D1;font-weight:700">)</span>  
<span style="color:#9966FF;font-weight:700">setează efectul</span> `[fantomă]` <span style="color:#9966FF;font-weight:700">la</span> `0`  
<span style="color:#9966FF;font-weight:700">spune</span> `Sunt un dinozaur! Am trăit acum 66 de milioane de ani.` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `prins`  

- [ ] La steag, Exponatul e într-un loc la întâmplare, aproape invizibil  
- [ ] Cu cât te apropii cu mouse-ul, cu atât se vede mai bine  
- [ ] Când îl atingi, se vede întreg și spune faptul  
- [ ] Când apeși butonul, dispare cu un sunet  
- [ ] Ghidul spune „Am colectat exponatul!”  
- [ ] Salvat din nou: `Prenume_Nume_L2`  

**Gata Complet când:** Ghidul se prezintă, Exponatul se vede tot mai bine pe măsură ce te apropii, spune faptul, apeși și dispare, iar Ghidul spune că a colectat exponatul, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Vitrina) care apare după ce colectezi exponatul și poate fi trasă cu mouse-ul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#5CB1D1;font-weight:700">setează mod tragere</span> `[activat]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `70` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `vitrina`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Exponatul e acum în muzeu!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul</span> `[culoare]` <span style="color:#9966FF;font-weight:700">la</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,1` secunde  

- [ ] ★★★ **Provocare:** dai click dreapta pe Exponat și alegi **Duplică**. Schimbi în copie costumul și faptul din `spune`. Ai acum **două exponate**, iar Ghidul le colectează pe rând.

## Recapitulare rapidă
1. `mouse x` și `mouse y` sunt valori; pui personajul să vină după mouse cu `mergi la x: y:` în `la infinit`  
2. `butonul mouse-ului e apăsat?` este o condiție: o pui în `dacă`, `așteaptă până când` sau `repetă până când`  
3. `distanța până la` dă un număr: cu cât e mai mare, cu atât sunt mai departe  
4. `setează efectul [fantomă] la (distanța …)` face un personaj să se vadă tot mai bine pe măsură ce te apropii  
5. `ascunde` și `arată` fac personajul să dispară sau să apară; scripturile lui merg mai departe  
6. `setează mod tragere [activat]` merge în modul ecran complet  
7. Nume: **`Prenume_Nume_L2`**  

## Schema pe scurt *(pe foaie)*

**Pe Ghid**  
la steag → `setează mărimea` → `mergi la x: y:` → `spune` → `difuzează start`  
când primesc start → `la infinit` (`mergi la x: (mouse x) y: (mouse y)` + `dacă` `butonul apăsat?` `atunci` `setează mărimea` `altfel` `setează mărimea`)  
când primesc prins → `spune` → `difuzează vitrina`

**Pe Exponat**  
la steag → `setează mărimea` → `mergi la [poziție aleatoare]` → `arată` → `setează efectul [fantomă] la 100`  
când primesc start → `repetă până când` `atinge mouse-ul` (`setează efectul [fantomă] la (distanța până la [cursorul mouse-ului])`) → `setează efectul [fantomă] la 0` → `spune` faptul → `așteaptă până când` `butonul apăsat?` → `ascunde` → `pornește sunetul` → `difuzează prins`

**Pe Vitrină**  
la steag → `ascunde` → `setează mod tragere` → `setează mărimea` → `mergi la x: y:`  
când primesc vitrina → `arată` → `pornește sunetul` → `spune` → `la infinit` (`setează efectul [culoare] la (mouse x)` + `așteaptă`)

**Quiz scurt (cu profesorul):**  
- Ce numere arată `mouse x` și `mouse y` când mouse-ul e în mijlocul scenei?  
- De ce `mergi la x: (mouse x) y: (mouse y)` trebuie pus în `la infinit`?  
- Ce se întâmplă cu scripturile unui personaj ascuns?  
- Când e mai mare `distanța până la`: când personajele sunt aproape sau departe?  
- De ce Exponatul se vede mai bine când te apropii?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Exponatul, în același `Prenume_Nume_L2`.  
- Dacă ai Complet: adaugi acasă Vitrina, în același `Prenume_Nume_L2`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi muzeul (alt decor, alt exponat, alt fapt adevărat).  
