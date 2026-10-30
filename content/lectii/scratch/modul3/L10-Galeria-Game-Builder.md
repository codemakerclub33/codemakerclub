# Lecția 10 — Completare + prezentare: Galeria Game Builder
### Recapitulare
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi îți inviți **3 personaje preferate** din lecțiile trecute într-o galerie de mini-jocuri, apoi **arăți** galeria clasei și primești insigna.  
> Proiect: **„Galeria Game Builder”** · fișier: `Prenume_Nume_L10` (ex. `Ana_Pop_L10`)

---

## Obiectiv
La finalul orei ai o **galerie** în care personajele tale preferate își fac pe rând mini-jocurile, ai prezentat galeria clasei și ai insigna **Game Builder**.  
**Minim:** personajul 1 (Gazda) cu cel puțin **8 blocuri diferite**, din **2 numere** din lecții diferite → **e suficient pentru insignă**.  
**Ținta orei (Complet):** personajul 2 (primul jucător), cu cel puțin **8 blocuri diferite**, din **2 numere** din lecții diferite.

## De ce contează
Proiectele bune se **adună**: azi folosești ce ai învățat în tot Modulul 3 (straturi, liste, clone, costume, tastă și mouse, ani și nume, atingeri, tragere), pe personajele tale preferate. Un **număr** e o bucată scurtă dintr-un joc, de câteva secunde, care se **termină singură**.  
Insigna **Game Builder** (*badge*) înseamnă că Modulul 3 e încheiat.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + **Minim vs Complet** + regulile galeriei |
| 5–20 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 20–75 | Proiectul „Galeria Game Builder” (lucru individual) |
| 75–100 | Prezentările galeriilor (~1–2 minute × max. **10** copii) |
| 100–120 | Recap Modul 3 + quiz + **insignă** (+ Bonus dacă e timp) |

*(Repere profesor: la ~45 min fiecare copil are Gazda cu cel puțin 1 număr care rulează pe steag; la ~75 min — gata de steag curat pentru prezentare, indiferent dacă e Minim sau Complet.)*

**Capitole azi (toate):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>

**Blocuri noi azi:** niciunul. Reluăm tot ce ai învățat în Modulul 3, în numere scurte (vezi **De făcut azi**).

---

## Pas cu pas

### 1) Alegi cele 3 personaje
1. Alegi **3 personaje** din lecțiile trecute, cele mai dragi ție (din L1–L9). Fiecare lecție are personajul ei, iar în **Meniul de numere** de mai jos vezi, lângă fiecare lecție, personajul ei și numărul ei. Poți lua și personaje noi din bibliotecă
2. Primul personaj ales e **Gazda**: ea anunță numerele și leagă galeria
3. Celelalte două sunt **jucătorii**: fiecare își face numărul când Gazda îl cheamă
4. Cum aduci un personaj din proiectul vechi: în proiectul vechi, click dreapta pe personaj → **exportă**. În proiectul nou, la **Alege un personaj** → **Încarcă personaj** și alegi fișierul. Dacă nu mai ai proiectul, alegi unul asemănător din bibliotecă

**Încearcă tu — personajele (2–3 min)**  
- [ ] Ai ales **3 personaje** și știi care e Gazda  
- [ ] Toate 3 sunt în proiectul nou  

### 2) Numerele
1. Fiecare personaj face **cel puțin 2 numere** din lecții **diferite**. Un număr e o mică secvență de blocuri ale unei singure lecții (de exemplu o listă din L2 sau o cădere din L8)
2. Numerele se așază **unul după altul** în același script, sub un mesaj
3. Un număr **trebuie să se termine**: cu `la infinit` Gazda ar aștepta pentru totdeauna. De aceea mini-jocurile din meniu folosesc `repetă` sau `repetă până când`
4. Variabilele și listele de care are nevoie numărul le creezi **pentru toate personajele**, cu aceleași nume ca în lecție (`scor`, `clasament`, `trusa`). Rețetele sunt în **De făcut azi**

**Încearcă tu — numerele (2 min)**  
- [ ] Ai ales câte **2 numere** pentru fiecare personaj  
- [ ] Numerele unui personaj sunt din **lecții diferite**  

### 3) Gazda și mesajele
1. Gazda stă pe scenă și **anunță** fiecare număr cu `spune`
2. Apoi trimite mesajul cu <span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span>: jucătorul își face numărul, iar Gazda **așteaptă** până termină
3. Așa nu vorbește și nu se mișcă nimeni deodată
4. La final Gazda difuzează `final`, așteaptă și apoi oprește tot cu <span style="color:#FFAB19;font-weight:700">stop [totul]</span>

**Încearcă tu — mesajele (2–3 min)**  
- [ ] Mesajele se numesc `număr1`, `număr2` și `final` și sunt scrise la fel peste tot  
- [ ] Fără jucători, Gazda își termină scriptul singură  

### 4) Recapitulare Modul 3 (cu profesorul, pe scurt)
Ai învățat blocuri noi în 8 lecții, iar în a noua le-ai folosit pe toate:

| Lecția | Tema | Blocuri noi |
|--------|------|-------------|
| L1 | Straturi și costume | `mergi la stratul [în față]`, `mergi [înainte] (1) straturi`, `costumul [număr]`, `decor [număr]`, `mărime` |
| L2 | Liste | `Creează o listă`, `[clasament]`, `adaugă … la`, `arată lista`, `ascunde lista`, `șterge tot din` |
| L3 | Clone | `creează o clonă a [mea]`, `când încep ca și clonă`, `șterge această clonă` |
| L4 | Liste, mai departe | `element … din`, `lungimea lui`, `conține?`, `nr. elementului`, `șterge (…) din`, `inserează … la … din`, `înlocuiește item … din … cu` |
| L5 | Cursă și decoruri | `schimbă decorul la`, `tasta [săgeată sus] apăsată?`, `[nr. decor] din [Scenă]` |
| L6 | Timp și nume | `anul curent`, `nume utilizator`, `lungimea lui ( )` *(Bonus: `zile din 2000`, `online?`)* |
| L7 | Mouse și distanță | `butonul mouse-ului e apăsat?`, `[modul] din ( )`, `mergi la [cursorul mouse-ului]` |
| L8 | Costume și tragere | `costumul [număr]`, `atinge [alt personaj]?`, `setează mod tragere`, `poziția y` |
| L9 | Meniu și pauză | niciun bloc nou: scor, vieți, clone, costume, mesaje și pauză, toate într-un joc întreg |

---

## Greșeli frecvente
1. **Gazda rămâne blocată** — un număr conține `la infinit`, care nu se termină niciodată. Folosește `repetă` sau `repetă până când`.  
2. **Jucătorii nu pornesc** — mesajul din `difuzează` și cel din `când primesc` nu e același (`număr1` și `numar1` sunt mesaje diferite).  
3. **Personajele vorbesc deodată** — lipsește `difuzează … și așteaptă`, deci Gazda nu așteaptă.  
4. **Un personaj nu se vede** — lipsesc `mergi la x: y:` sau e în afara scenei, sau a rămas ascuns de la o rulare veche: pune `arată` la început.  
5. **Numărul cu listă nu merge** — lista (de exemplu `clasament`) nu e creată **pentru toate personajele** sau are alt nume.  
6. **Clonele rămân pe scenă** — lipsește scriptul `când încep ca și clonă` cu `șterge această clonă`.  
7. **Variabila arată altceva decât te aștepți** — la începutul numărului pune `setează … la`, ca să pornești curat.  
8. **Decorul nu se schimbă la final** — `Aplauze` trebuie să fie după `Galeria` în listă, iar mesajul din `când primesc` e `final`.  
9. **Nume fișier** — `Prenume_Nume_L10`, nu doar `Ana_L10`.  

---

## De făcut azi — „Galeria Game Builder”
Salvat: `Prenume_Nume_L10`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit” + insignă)** | **Pasul 1 + Pasul 2** — scena cu 2 decoruri + **Gazda** cu ≥ 8 blocuri diferite, din **2 numere** din lecții diferite, + **prezentare** + salvare |
| **Complet (ținta orei)** | Minim + **primul jucător** cu ≥ 8 blocuri diferite, din **2 numere** din lecții diferite |

Dacă rămâi în urmă: **prezinți cu Gazda — e suficient pentru insignă.**  
Cei rapizi: Complet, apoi Bonus.  
La min **75** încep prezentările **oricum**.

### Pasul 1 — Scena *(Minim)*
Alegi din bibliotecă un decor pentru galerie (de exemplu o scenă sau o sală) și îl redenumești `Galeria`. Apoi alegi încă un decor, vesel, de petrecere sau cu lumini, și îl redenumești `Aplauze`. Ștergi decorul gol care a rămas de la început. Pe **Scenă** faci scripturile:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Galeria`

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">decorul următor</span>

Creezi variabilele și listele pentru numerele alese, **pentru toate personajele** (de exemplu `scor`, `clasament`, `trusa`).

- [ ] `Galeria` primul în listă, `Aplauze` al doilea  
- [ ] Scripturile sunt pe **Scenă**  
- [ ] Personajele sunt redenumite (`Gazda` plus numele celorlalte două)  

### Pasul 2 — Gazda *(Minim)*
Gazda e primul personaj ales. Are scheletul de mai jos, cu **2 numere** puse la loc (alegi din rețetele de mai jos, din lecții diferite). Exemplul: Pilotul (din L6), cu „Vârsta” (L6) și „Trusa” (L4).

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `-80`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bun venit în galerie!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Primul număr: Bolidul!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> `număr1`  
<span style="color:#9966FF;font-weight:700">spune</span> `Al doilea număr: Detectorul!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> `număr2`  
<span style="color:#9966FF;font-weight:700">spune</span> `Și acum numărul meu!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
**număr din lecția 6 („Vârsta”)**  
**număr din lecția 4 („Trusa”)**  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `4` secunde  
<span style="color:#FFAB19;font-weight:700">stop [totul]</span>

**Meniul de numere** *(fiecare personaj alege cel puțin 2, din lecții diferite)*:

| Lecția | Personajul din lecție | Numărul | Rețeta |
|--------|-----------------------|---------|--------|
| L1 | Copilul | **Straturi** | <span style="color:#9966FF;font-weight:700">mergi la stratul [în față]</span> → <span style="color:#FFAB19;font-weight:700">repetă</span> `10` (<span style="color:#4C97FF;font-weight:700">modifică x cu</span> `10` + <span style="color:#9966FF;font-weight:700">costumul următor</span> + <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0.1`) |
| L2 | Mercur | **Clasament** | <span style="color:#FF8C1A;font-weight:700">șterge tot din clasament</span> → <span style="color:#FF8C1A;font-weight:700">adaugă</span> `Mercur` <span style="color:#FF8C1A;font-weight:700">la clasament</span> → <span style="color:#FF8C1A;font-weight:700">adaugă</span> `Venus` <span style="color:#FF8C1A;font-weight:700">la clasament</span> → <span style="color:#FF8C1A;font-weight:700">arată lista clasament</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `3` → <span style="color:#FF8C1A;font-weight:700">ascunde lista clasament</span> |
| L3 | Gândacul | **Clone** | <span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0` → <span style="color:#FFAB19;font-weight:700">repetă</span> `3` (<span style="color:#FFAB19;font-weight:700">creează o clonă a [mea]</span> + <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1` + <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0.3`) → <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Clone: ` <span style="color:#FF8C1A;font-weight:700">(scor)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde *(plus, în același personaj, scriptul clonei: <span style="color:#FFAB19;font-weight:700">când încep ca și clonă</span> → <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-200` <span style="color:#59C059;font-weight:700">și</span> `200` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#4C97FF;font-weight:700">y:</span> `0` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` → <span style="color:#FFAB19;font-weight:700">șterge această clonă</span>)* |
| L4 | Copilul | **Trusa** | <span style="color:#FF8C1A;font-weight:700">șterge tot din trusa</span> → <span style="color:#FF8C1A;font-weight:700">adaugă</span> `plasture` <span style="color:#FF8C1A;font-weight:700">la trusa</span> → <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Obiecte în trusă: ` <span style="color:#FF8C1A;font-weight:700">(lungimea lui trusa)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde → <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#FF8C1A;font-weight:700">&lt;trusa conține</span> `plasture` <span style="color:#FF8C1A;font-weight:700">?&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> <span style="color:#9966FF;font-weight:700">spune</span> `Avem plasture!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde |
| L5 | Bolidul | **Cursa** | <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90` → <span style="color:#FFAB19;font-weight:700">repetă</span> `40` (<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">&lt;tasta [săgeată sus] apăsată?&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> <span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași + <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `2` grade + <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0.05`) |
| L6 | Pilotul | **Vârsta** | <span style="color:#5CB1D1;font-weight:700">întreabă</span> `În ce an te-ai născut?` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span> → <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Ai aproximativ ` <span style="color:#59C059;font-weight:700">(</span><span style="color:#5CB1D1;font-weight:700">(anul curent)</span> <span style="color:#59C059;font-weight:700">-</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span><span style="color:#59C059;font-weight:700">)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde |
| L7 | Detectorul | **Cursorul** | <span style="color:#FFAB19;font-weight:700">repetă</span> `30` (<span style="color:#4C97FF;font-weight:700">mergi la [cursorul mouse-ului]</span> + <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">&lt;butonul mouse-ului e apăsat?&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> <span style="color:#9966FF;font-weight:700">spune</span> `Am prins!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secunde + <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0.1`) |
| L8 | Gunoiul | **Deșeul** | <span style="color:#5CB1D1;font-weight:700">setează mod tragere [activat]</span> → <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `3` <span style="color:#59C059;font-weight:700">)</span> → <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `100` → <span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `-120` <span style="color:#59C059;font-weight:700">&gt;</span> (<span style="color:#4C97FF;font-weight:700">modifică y cu</span> `-5` + <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0.02`) → <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#9966FF;font-weight:700">(costumul [număr])</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde |
| L9 | Sfera | **Podeaua** | <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `50` → <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `150` → <span style="color:#FFAB19;font-weight:700">repetă</span> `30` (<span style="color:#4C97FF;font-weight:700">mergi</span> `8` pași + <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `-100` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> <span style="color:#59C059;font-weight:700">(</span>`180` <span style="color:#59C059;font-weight:700">-</span> <span style="color:#4C97FF;font-weight:700">(direcția)</span><span style="color:#59C059;font-weight:700">)</span> + <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0.05`) |

*Numerele cu listă (Clasament, Trusa) au nevoie de lista creată la Pasul 1. Numărul „Deșeul” cere ca personajul să aibă `3` costume; la „Podeaua” și „Cursa” personajul trebuie să fie pe scenă.*

- [ ] Gazda are **2 numere din lecții diferite**  
- [ ] Fără jucători, Gazda își termină scriptul singură  
- [ ] Steag din nou → începe curat, de la același loc  
- [ ] Salvat: `Prenume_Nume_L10`  

**→ Minim când:** Gazda salută, anunță, își face cele 2 numere, difuzează `final`, decorul trece la `Aplauze`, iar proiectul se oprește singur.

### Pasul 3 — Primul jucător *(Complet)*
Al doilea personaj ales. Are scheletul de mai jos, cu **2 numere** din rețete, din lecții **diferite** (și diferite de ale Gazdei, dacă poți). Exemplul: Bolidul (din L5), cu „Cursa” (L5) și „Podeaua” (L9).

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-100`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `80` %

<span style="color:#E6A800;font-weight:700">când primesc</span> `număr1`  
**număr din lecția 5 („Cursa”)**  
**număr din lecția 9 („Podeaua”)**  

- [ ] Stă pe loc până Gazda spune „Primul număr”  
- [ ] Își face cele 2 numere, apoi Gazda continuă  
- [ ] Salvat din nou: `Prenume_Nume_L10`  

**Gata Complet când:** Gazda anunță, jucătorul își face numerele, apoi Gazda continuă, fără explicație cu vocea.

### Pasul 4 — Prezentarea *(Minim)*
- [ ] Spui în **1–2 minute**: cine e Gazda, ce personaje ai invitat și ce numere ai ales  
- [ ] Apeși <span style="color:#3F8F2A;font-weight:700">steagul verde</span> și lași galeria să ruleze, fără explicații cu vocea în timpul ei  
- [ ] Clasa: **aplauze** și **un compliment** concret  
- [ ] Tu: „Mulțumesc” și dai și tu un compliment unui coleg  

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (al doilea jucător), cu **2 numere** din lecții diferite și cel puțin **10 blocuri diferite**. Exemplul: Detectorul (din L7), cu „Cursorul” (L7) și „Clasament” (L2). Răspunde la `număr2`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `-80`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %

<span style="color:#E6A800;font-weight:700">când primesc</span> `număr2`  
**număr din lecția 7 („Cursorul”)**  
**număr din lecția 2 („Clasament”)**  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  

- [ ] „Bis!” pe oricare personaj: <span style="color:#E6A800;font-weight:700">când tasta</span> `spațiu` <span style="color:#E6A800;font-weight:700">este apăsată</span> → <span style="color:#9966FF;font-weight:700">spune</span> `Bis!` pentru `2` secunde → <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
- [ ] ★★★ **Provocare:** creezi un **număr nou, al tău**, de cel puțin 4 blocuri, care se termină singur (fără `la infinit`) și folosește o listă, o clonă sau un costum cu număr. Îl pui în galeria ta și spui colegilor ce face

## Recapitulare rapidă
1. Gazda anunță cu `spune` și cheamă jucătorii cu `difuzează … și așteaptă`  
2. Un număr trebuie să se termine: nu pui `la infinit` înăuntru  
3. Mesajele se scriu la fel în `difuzează` și în `când primesc`  
4. Variabilele și listele folosite de mai multe personaje sunt **pentru toate personajele**  
5. La final: `difuzează final`, `așteaptă`, `stop [totul]`  
6. Nume: **`Prenume_Nume_L10`**  

## Schema pe scurt *(pe foaie)*

**Pe Scenă**  
la steag → `schimbă decorul la` Galeria  
când primesc final → `decorul următor`

**Pe Gazdă**  
la steag → `mergi la x: y:` → `spune` → `spune` → `difuzează … și așteaptă număr1` → `spune` → `difuzează … și așteaptă număr2` → `spune` → număr 1 → număr 2 → `difuzează final` → `așteaptă` → `stop`

**Pe jucător**  
la steag → `mergi la x: y:` → `setează mărimea`  
când primesc număr → număr 1 → număr 2

**Quiz scurt (cu profesorul):** *(5 dacă e timp; altfel 3)*  
1. Cum se termină o clonă și de ce contează?  
2. Cum adaugi un element într-o listă și cum afli câte are?  
3. Cum faci să nu vorbească două personaje deodată?  
4. De ce nu pui `la infinit` într-un număr?  
5. Cum folosești `costumul [număr]` ca să alegi între mai multe lucruri?

## Insigna (convenție CKP)
1. Ai **Minim** (Gazda cu 2 numere, galeria se termină curat) + **prezentat** + proiect **salvat** → **insignă**  
2. Profesorul: „Ai insigna **Game Builder**”  
3. Opțional: sticker, cartonaș sau diplomă  
4. Recunoaștere în clasă, nu notă și nu cont obligatoriu  

*(Complet = ținta orei, nu pragul pentru insignă.)*

## Temă
Opțional: arată familiei galeria ta (2 minute). Gândește-te ce joc ai vrea să faci mai departe, în Modulul 4.
