# Lecția 2 — Vânătoarea de fantome
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **urmăresc mouse-ul**, **simt când apeși** și **apar sau dispar** după cum vrei tu.  
> Proiect: **„Vânătoarea de fantome”** · fișier: `Prenume_Nume_L2` (ex. `Ana_Pop_L2`)

---

## Obiectiv
La finalul orei Vânătorul tău urmărește mouse-ul, prinde o fantomă cu un click și o comoară apare ca premiu.  
**Minim:** personajul 1 (Vânătorul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Fantoma), cu cel puțin **8 blocuri diferite**, care apare la semnalul Vânătorului și dispare când o prinzi.

## De ce contează
Jocurile răspund la mouse: personajul vine după cursor, un click face ceva, un obiect apare sau dispare. Pentru asta citești mouse-ul cu blocurile din <span style="color:#5CB1D1;font-weight:700">Detectare</span> (EN: *Sensing*) și arăți sau ascunzi personajele cu blocurile din <span style="color:#9966FF;font-weight:700">Aspect</span> (EN: *Looks*).

**În clasă:** la proiect ții butonul mouse-ului **liber** până atingi fantoma.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolele Detectare și Aspect |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Vânătoarea de fantome” (vezi **Minim vs Complet**) |
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
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`arată`**, **`ascunde`**, `spune … pentru … secunde`, `setează mărimea la`, `setează efectul [culoare] la`, `modifică efectul [culoare] cu` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `mergi la [poziție aleatoare]`, `mergi … pași`, `dacă atinge marginea, ricoșează` |
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
2. <span style="color:#5CB1D1;font-weight:700">distanța până la</span> alegi din listă: **cursorul mouse-ului** sau un alt personaj (de exemplu `Fantoma`). Dă un număr: cu cât e mai mare, cu atât sunt mai departe
3. Numărul merge într-un bloc cu loc pentru valoare, de exemplu <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la ( )</span>: personajul își schimbă culoarea după cât e de departe

**Încearcă tu — click și distanță (3–4 min)**  
- [ ] Mărimea se schimbă doar când ții butonul apăsat (`dacă … altfel`)  
- [ ] Culoarea se schimbă după distanța până la alt personaj  

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
1. **Vânătorul nu vine după mouse** — `mouse x` și `mouse y` nu sunt puse în `mergi la x: y:`, sau blocul nu e în `la infinit`.  
2. **`distanța până la` nu arată Fantoma** — personajul nu se numește exact `Fantoma`. Redenumește personajul și alege din nou din listă.  
3. **Fantoma nu apare** — `ascunde` e la steag, dar lipsește `arată` după `când primesc` `start`.  
4. **Fantoma dispare imediat** — ții deja butonul mouse-ului apăsat. Ține butonul liber până atingi fantoma.  
5. **Fantoma nu se oprește când o atingi** — `repetă până când` nu are `atinge [cursorul mouse-ului]?`.  
6. **Mod tragere nu merge în editor** — trebuie să deschizi ecranul complet.  
7. **Comoara apare deodată cu Fantoma** — `arată` pentru Comoară trebuie să fie după `când primesc` `comoara`, nu la steag.  
8. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`prins` și `capturat` sunt mesaje diferite).  
9. **Nume fișier** — `Prenume_Nume_L2`, nu doar `Ana_L2`.  

---

## De făcut azi — „Vânătoarea de fantome”
Salvat: `Prenume_Nume_L2`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, cele trei personaje redenumite + **Vânătorul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Fantoma** cu ≥ 8 blocuri diferite, care apare la semnalul Vânătorului și dispare când o prinzi |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Castelul și personajele *(Minim)*
Alegi din bibliotecă un decor de castel sau de noapte, fără să desenezi. Adaugi trei personaje și le redenumești exact: `Vânătorul` (un personaj care ține o lanternă sau un vrăjitor), `Fantoma` (o fantomă din bibliotecă) și `Comoara` (o ladă sau un diamant). Pe Fantomă și pe Comoară adaugi în tab-ul **Sunete** câte un sunet.  
Fantoma stă pe loc până o programezi la Pasul 3.

- [ ] Decor de castel sau de noapte  
- [ ] Personajele se numesc `Vânătorul`, `Fantoma` și `Comoara`  
- [ ] Fantoma și Comoara au câte un sunet  

### Pasul 2 — Vânătorul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">spune</span> `Caut fantoma!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> <span style="color:#5CB1D1;font-weight:700">(distanța până la</span> `Fantoma` <span style="color:#5CB1D1;font-weight:700">)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `90` % **altfel** → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `prins`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am prins fantoma!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `comoara`  

- [ ] Vânătorul vine după mouse  
- [ ] Își schimbă culoarea după cât e de departe de Fantomă  
- [ ] Se mărește cât ții butonul apăsat și revine când îl lași  
- [ ] Salvat: `Prenume_Nume_L2`  

**→ Minim când:** Vânătorul se prezintă, apoi vine după mouse, își schimbă culoarea după Fantomă și se mărește când apeși.

### Pasul 3 — Fantoma *(Complet)*
Fantoma are **2 scripturi**, iar al doilea pornește când Vânătorul difuzează `start`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#4C97FF;font-weight:700">mergi la</span> `[poziție aleatoare]`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Bu!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#5CB1D1;font-weight:700">atinge [cursorul mouse-ului]?</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> `4` pași  
↳ <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `prins`  

- [ ] Fantoma e ascunsă până vine `start`  
- [ ] Apare, spune „Bu!” și se plimbă până o atinge mouse-ul  
- [ ] Când apeși butonul, dispare cu un sunet  
- [ ] Salvat din nou: `Prenume_Nume_L2`  

**Gata Complet când:** Vânătorul se prezintă, Fantoma apare și se plimbă, o atingi și apeși, dispare, iar Vânătorul spune că a prins fantoma, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Comoara) care apare după ce prinzi fantoma și poate fi trasă cu mouse-ul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#5CB1D1;font-weight:700">setează mod tragere</span> `[activat]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `comoara`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Sunt a ta!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,1` secunde  

- [ ] ★★★ **Provocare:** pe Fantomă, în `repetă până când`, adaugi `spune` și pui înăuntru `distanța până la` `Vânătorul`: Fantoma își arată în direct cât de aproape e de tine

## Recapitulare rapidă
1. `mouse x` și `mouse y` sunt valori; pui personajul să vină după mouse cu `mergi la x: y:` în `la infinit`  
2. `butonul mouse-ului e apăsat?` este o condiție: o pui în `dacă`, `așteaptă până când` sau `repetă până când`  
3. `distanța până la` dă un număr: cu cât e mai mare, cu atât sunt mai departe  
4. `ascunde` și `arată` fac personajul să dispară sau să apară; scripturile lui merg mai departe  
5. `setează mod tragere [activat]` merge în modul ecran complet  
6. Nume: **`Prenume_Nume_L2`**  

## Schema pe scurt *(pe foaie)*

**Pe Vânător**  
la steag → `setează mărimea` → `mergi la x: y:` → `spune` → `difuzează start`  
când primesc start → `la infinit` (`mergi la x: (mouse x) y: (mouse y)` + `setează efectul [culoare] la (distanța până la Fantoma)` + `dacă` `butonul apăsat?` `atunci` `setează mărimea` `altfel` `setează mărimea`)  
când primesc prins → `spune` → `difuzează comoara`

**Pe Fantomă**  
la steag → `ascunde`  
când primesc start → `mergi la [poziție aleatoare]` → `arată` → `spune` → `repetă până când` `atinge mouse-ul` (`mergi` + `ricoșează`) → `așteaptă până când` `butonul apăsat?` → `ascunde` → `pornește sunetul` → `difuzează prins`

**Pe Comoară**  
la steag → `ascunde` → `setează mod tragere` → `setează mărimea` → `mergi la x: y:`  
când primesc comoara → `arată` → `pornește sunetul` → `spune` → `la infinit` (`setează efectul` `(mouse x)` + `așteaptă`)

**Quiz scurt (cu profesorul):**  
- Ce numere arată `mouse x` și `mouse y` când mouse-ul e în mijlocul scenei?  
- De ce `mergi la x: (mouse x) y: (mouse y)` trebuie pus în `la infinit`?  
- Ce se întâmplă cu scripturile unui personaj ascuns?  
- Când e mai mare `distanța până la`: când personajele sunt aproape sau departe?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Fantoma, în același `Prenume_Nume_L2`.  
- Dacă ai Complet: adaugi acasă Comoara, în același `Prenume_Nume_L2`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alt decor, alt personaj de prins, altă comoară).
