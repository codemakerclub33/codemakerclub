# Lecția 8 — Doctorul de cod
### Depanare și funcții cu parametri
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi nu scrii programe de la zero, ci **repari** programe stricate și faci **„Doctorul de cod”**:  
> primești 4 „pacienți” (programe care nu merg), găsești greșeala și o repari; la final faci un cod mai curat cu o funcție.  
> Fișier: `Prenume_Nume_MB2_L08` (ex. `Ana_Pop_MB2_L08`)

---

## Obiectiv
La finalul orei folosești o **metodă de depanare** în 5 pași și faci o **funcție cu parametru** ca să nu repeți aceleași blocuri.  
**Minim:** repari **2 programe stricate** (Scutul de energie și Farul), fiecare cu cel puțin **8 blocuri diferite**, și lista ta de verificare e completată.  
**Ținta orei (Complet):** partea a doua: repari **încă 2 programe** (Pedometrul și Ceasul) și faci o **funcție cu parametru** care înlocuiește trei grupuri de blocuri repetate, cu cel puțin **6 blocuri diferite**.

## De ce contează
Programatorii profesioniști petrec **mai mult timp reparând** programe decât scriindu-le. O greșeală mică (un bloc în locul greșit) poate strica tot.  
Doctorul de cod nu ghicește: **citește, testează, izolează, repară, verifică**. Azi înveți metoda.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7: `map`, sunet |
| 10–25 | Jocul „Doctorul”: metoda în 5 pași |
| 25–40 | Lista de suspecți: greșeli care se repetă |
| 40–70 | Pacienții 1 și 2 (**Minim**) |
| 70–95 | Pacienții 3 și 4 (**Complet**) |
| 95–112 | Funcția cu parametru: cod mai curat |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#3455DB;font-weight:700">Functions</span> · <span style="color:#1E90FF;font-weight:700">Basic</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#00A600;font-weight:700">Loops</span> · <span style="color:#5C2D91;font-weight:700">LED</span>  
*(blocul nou: o funcție cu **parametru** (Advanced → Functions).)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#3455DB;font-weight:700">Make a Function… (cu parametru)</span> | creezi o funcție care primește o valoare (`valoare`), ca să o folosești de mai multe ori |
| <span style="color:#3455DB;font-weight:700">call arata (valoare)</span> | apelezi funcția și îi dai valoarea (lumină, temperatură, busolă …) |

*Azi nu scrii programe noi, ci repari programele din Modulul 1 și din Modulul 2: toate blocurile le știi.*

---

## Pas cu pas

### 1) Jocul „Doctorul” (fără calculator)
Un copil e **pacientul**: spune o instrucțiune pe care o execută greșit (de exemplu „fă 3 pași și întoarce-te”, dar el face 5). Celălalt e **doctorul**: întreabă, observă și găsește greșeala.

Metoda doctorului de cod are **5 pași**:
1. **Citești** programul, bloc cu bloc  
2. **Rulezi** și vezi ce face de fapt  
3. **Izolezi**: ștergi sau dezactivezi părți până dispare greșeala  
4. **Repari** o singură greșeală odată  
5. **Verifici** din nou, la fel ca la început

**Încearcă tu — (5–8 min)**  
- [ ] Ai jucat doctor și pacient cu un coleg  
- [ ] Spui cei 5 pași ai metodei  

### 2) Lista de suspecți
Greșelile se repetă. Iată **suspecții obișnuiți**:

| Suspect | Cum îl recunoști |
|---------|------------------|
| bloc **în afara** locului potrivit | nu se întâmplă nimic, sau se întâmplă o singură dată |
| `change` înainte sau după `if` | numărul e cu `1` în urmă |
| lipsește `pause` | animația clipește sau numără prea repede |
| lipsește `clear screen` | rămân urme pe ecran |
| `set` în loc de `change` (sau invers) | numărul sare sau nu se schimbă |
| `forever` fără pauză la început | titlul se amestecă cu desenul |

Alegi 3 suspecți și îi scrii în **lista ta de verificare** pe foaie.

**Încearcă tu — (8–10 min)**  
- [ ] Ai scris pe foaie lista ta de 3 suspecți  
- [ ] Ai spus un exemplu de greșeală pe care ai făcut-o tu  

### 3) Pacientul 1: Scutul de energie
Programul trebuie ca la fiecare B să scadă energia **imediat** (de la `5` la `4`), iar la `0` să arate `GAME OVER`, dar se întâmplă o greșeală. **Nu te uita la răspuns!**

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `energie` to `5`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `GAME OVER`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `energie` to `5`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `energie` by `-1`  

**Sarcina ta:** scrii programul în MakeCode, apeși B de câteva ori și vezi ce nu merge. Găsești **greșeala** și o repari.

**Încearcă tu — (10–12 min)**  
- [ ] Ai găsit greșeala fără să te uiți la răspuns  
- [ ] Ai verificat programul reparat  

### 4) Pacientul 2: Farul de pe mare
Farul trebuie să pulseze, apoi să treacă o rază printr-o linie. Dar are **3 greșeli**.

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Far`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `2` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Diamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to `4`  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `index` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `150`  

**Sarcina ta:** rulezi, observi ce se întâmplă (titlul? urmele?), repari **una câte una** și verifici de fiecare dată.

**Încearcă tu — (10–15 min)**  
- [ ] Ai găsit toate cele 3 greșeli  
- [ ] Farul merge: lampa pulsează, raza trece, fără urme  

### 5) Complet: pacienții 3 și 4
**Pacientul 3: Pedometrul** (are 2 greșeli: numără prea mult și B nu pune pe `0`)

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `pasi`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `0`  

**Pacientul 4: Ceasul** (are 2 greșeli: ceasul merge prea repede și minutul crește mereu)

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `minut` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `100`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `secunde` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `secunde = 60` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`  

Repari ambele programe.

**Încearcă tu — (20 min)**  
- [ ] Pedometrul numără corect 10 pași  
- [ ] Ceasul numără o secundă reală  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

### 6) Complet: funcția cu parametru
Uită-te la acest program: **aceleași trei blocuri** se repetă de trei ori.

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">compass heading</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

Le punem într-o **funcție cu parametru**: un parametru e o valoare care vine de afară. Din <span style="color:#3455DB;font-weight:700">Functions</span>: **Make a Function…**, nume `arata`, **+ add a parameter** (număr) `valoare`.

<span style="color:#3455DB;font-weight:700">function</span> `arata` (`valoare`)  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `valoare`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#3455DB;font-weight:700">call</span> `arata` <span style="color:#D400D4;font-weight:700">light level</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#3455DB;font-weight:700">call</span> `arata` <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#3455DB;font-weight:700">call</span> `arata` <span style="color:#D400D4;font-weight:700">compass heading</span>  

Același rezultat, dar cod **mai scurt și mai curat**. Dacă vrei să schimbi pauza, o schimbi **într-un singur loc**.

**Încearcă tu — (15–20 min)**  
- [ ] Funcția `arata` are parametrul `valoare`  
- [ ] A, B și A+B apelează funcția și merg ca înainte  
- [ ] Ai schimbat pauza o singură dată și s-a schimbat peste tot  

---

## Greșeli frecvente
1. **Repari mai multe lucruri deodată** — nu mai știi ce a ajutat. Repară **una** și verifică.  
2. **Nu testezi după reparare** — greșeala poate să fi mutat altundeva.  
3. **Ștergi blocuri ca să „iasă”** — pierzi ce era bun. Mai întâi izolezi, apoi repari.  
4. **Funcția nu primește valoarea** — ai pus un număr fix în loc de `valoare`.  
5. **Funcția nu face nimic** — lipsește `call` pentru ea în A, B sau A+B.  
6. **Faci o greșeală nouă când repari** — verifică programul de la început, nu doar partea reparată.  

---

## De făcut azi — „Doctorul de cod”
Salvat: `Prenume_Nume_MB2_L08`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — repari Scutul de energie și Farul de pe mare, fiecare cu cel puțin **8 blocuri diferite**, cu lista ta de verificare completată |
| **Complet (ținta orei)** | Minim + **Pasul 2** — repari Pedometrul și Ceasul și faci funcția `arata` cu parametru, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Doctorul pentru 2 programe *(Minim)*
*(programele de la Pacienții 1 și 2, reparate)*

- [ ] Pacientul 1 (Scutul de energie) reparat: `GAME OVER` apare la `energie = 0`  
- [ ] Pacientul 2 (Farul de pe mare) reparat: fără suprapuneri și fără urme  
- [ ] Fiecare program are cel puțin **8 blocuri diferite**  
- [ ] Lista ta de verificare are 3 suspecți  

**→ Ai Minim când:** un coleg rulează cele două programe reparate și nu vede nicio greșeală.

### Pasul 2 — Alți doi pacienți și o funcție *(Complet)*
*(programele Pedometru și Ceas, reparate, și funcția `arata`)*

- [ ] Pedometrul numără corect și B pune pe `0`  
- [ ] Ceasul merge o secundă pe secundă și minutul crește corect  
- [ ] Funcția `arata` cu parametru `valoare` e apelată de 3 ori  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L08`  

**Gata Complet când:** cele două programe merg, iar funcția `arata` înlocuiește blocurile repetate.

---

## Bonus ★★★ — Provocare: Programul-capcană
*Doar dacă ai terminat Complet.*

- [ ] Scrie lista ta de 5 suspecți și dă-o unui coleg  
- [ ] **Provocarea:** alegi unul dintre programele tale și **strici o singură greșeală**, ascunsă. Un coleg trebuie să o găsească **în cel mult 3 minute**, folosind metoda cu 5 pași (nu ghicitul). Apoi schimbați rolurile.  

**Răspunsurile doctorului** *(nu te uita înainte să încerci!)*

1. **Pacientul 1:** `change energie by -1` e **după** `if`. Trebuie pus **înainte**, ca să verifice valoarea nouă.  
2. **Pacientul 2:** (a) `forever` fără `pause (ms) 3000` la început, titlul se amestecă; (b) lipsește `clear screen` în `for index`, rămân urme; (c) lipsește `clear screen` la final.  
3. **Pacientul 3:** (a) lipsește `pause (ms) 400` după `change pasi`, numără prea mult; (b) la B e `change pasi by 0`, trebuie `set pasi to 0`.  
4. **Pacientul 4:** (a) `pause (ms) 100` trebuie `1000`; (b) `change minut by 1` e în afara lui `if`, trebuie să fie înăuntru.

## Recapitulare rapidă
1. Metoda: **citești, rulezi, izolezi, repari, verifici**  
2. Repari **o singură** greșeală odată, apoi testezi  
3. Greșelile se repetă: bloc în locul greșit, `pause`, `clear screen`, `set`/`change`  
4. O **funcție cu parametru** înlocuiește blocurile repetate  
5. Cod mai scurt = mai puține greșeli  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
**Citești** → **rulezi** → **izolezi** → **repari** (una) → **verifici**

Funcție cu parametru: <span style="color:#3455DB;font-weight:700">function</span> `arata` (`valoare`) → <span style="color:#3455DB;font-weight:700">call</span> `arata` <span style="color:#D400D4;font-weight:700">light level</span>

**Quiz scurt (cu profesorul):**  
- Care sunt cei 5 pași ai doctorului de cod?  
- De ce repari o singură greșeală odată?  
- Dă 2 „suspecți” obișnuiți din lista ta.  
- Ce e un parametru?  
- De ce o funcție face codul mai curat?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, repari pacienții 3 și 4 (Pasul 2), în `Prenume_Nume_MB2_L08`.  
- Dacă ai Complet: cauți un program din Modulul 1 pe care l-ai făcut și îl „cureți” cu o funcție.  
- Dacă ai terminat și Bonusul: faci o a doua „capcană” mai grea.  

## Ce urmează
În **Lecția 9** faci un joc: **șarpele de un pixel**.
