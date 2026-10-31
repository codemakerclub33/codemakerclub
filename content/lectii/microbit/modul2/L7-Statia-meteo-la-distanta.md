# Lecția 7 — Theremin cu lumină
### Lumina devine sunet
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi înveți să transformi un **senzor** într-un **instrument** și faci **„Theremin cu lumină”**:  
> cânți fără să atingi placa: apropii mâna de ecran și sunetul (sau bara de LED-uri) se schimbă.  
> Fișier: `Prenume_Nume_MB2_L07` (ex. `Ana_Pop_MB2_L07`)

---

## Obiectiv
La finalul orei folosești `map` ca să transformi lumina într-o **notă**, `play tone` ca să o cânți și o variabilă `gama` ca să schimbi tonul.  
**Minim:** bara de LED-uri arată cât de sus e nota, iar în întuneric apare o fantomă, cu **cel puțin 8 blocuri diferite** (merge pe orice placă).  
**Ținta orei (Complet):** partea a doua: placa **cântă** nota (placa **V2**), **A** pornește și oprește sunetul, **B** schimbă gama, cu cel puțin **6 blocuri diferite**.

## De ce contează
Thereminul e primul instrument electronic din istorie: îl cânți **fără să-l atingi**, doar mișcând mâinile. Sunetul lui apare în multe filme SF.  
Azi faci unul cu un **senzor de lumină** și înveți cum **numerele** devin **muzică**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6: liste, `for index` |
| 10–30 | Jocul „Dirijorul”: mâna schimbă sunetul |
| 30–50 | Lumina în numere și `map` spre note |
| 50–80 | Theremin vizual (**Minim**, orice placă) |
| 80–110 | **Complet:** sunet, A și B (placa V2) |
| 110–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#5C2D91;font-weight:700">LED</span> · <span style="color:#E63022;font-weight:700">Music</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(blocuri noi: `play tone` (Music, difuzor doar pe V2), `0 × 0` (Math).)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#E63022;font-weight:700">play tone</span> | cântă o notă (în Hz) pentru un număr de milisecunde; pe **V2** se aude din difuzorul plăcii, pe V1 doar cu căști sau buzzer la pinul P0 |
| <span style="color:#9C00C8;font-weight:700">0 × 0</span> | înmulțește două numere |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#D400D4;font-weight:700">light level</span>, <span style="color:#9C00C8;font-weight:700">map</span>, <span style="color:#5C2D91;font-weight:700">plot bar graph of</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 < 0</span>, <span style="color:#00A4A6;font-weight:700">and</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#9C00C8;font-weight:700">0 − 0</span>.

---

## Pas cu pas

### 1) Jocul „Dirijorul” (fără calculator)
Un copil e **dirijorul**, ceilalți sunt **orchestra** și cântă „aaa”. Dirijorul coboară mâna: orchestra cântă mai grav. O ridică: mai acut. Un copil ține mâna **aproape de lumina de la fereastră**.

Thereminul face același lucru: **distanța mâinii** schimbă **sunetul**.

**Încearcă tu — (5–8 min)**  
- [ ] Ai cântat „grav” și „acut” ca orchestra  
- [ ] Spui ce schimbă mâna în thereminul nostru: lumina  

### 2) Lumina în numere, numerele în note
<span style="color:#D400D4;font-weight:700">light level</span> dă un număr între `0` (întuneric) și `255` (foarte multă lumină). Când apropii mâna de ecran, **umbra** scade numărul.

O notă muzicală e o **frecvență** în Hz: aproximativ `200` (grav) până la `1000` (acut). Blocul <span style="color:#9C00C8;font-weight:700">map</span> potrivește intervalele:

<span style="color:#DC143C;font-weight:700">set</span> `nota` to <span style="color:#9C00C8;font-weight:700">map</span> `light level` from `0` `255` to `200` `1000`  

Creezi variabila `nota`. Lumina `0` devine nota `200`, iar `255` devine `1000`.

**Încearcă tu — (8–10 min)**  
- [ ] Apropii mâna și numărul `nota` scade  
- [ ] Ridici mâna și `nota` crește  

### 3) Theremin vizual: Minim
Pe orice placă (și V1) putem **vedea** nota, ca o bară de LED-uri.

1. Proiect nou: `Prenume_Nume_MB2_L07`  
2. Creezi variabila `nota`  
3. În <span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#DC143C;font-weight:700">set</span> `nota` to <span style="color:#9C00C8;font-weight:700">map</span> `light level` from `0` `255` to `200` `1000`  
4. <span style="color:#00A4A6;font-weight:700">if … then … else</span>: dacă `light level < 30` (mâna acoperă complet), <span style="color:#1E90FF;font-weight:700">show icon</span> `Ghost`  
5. Altfel: <span style="color:#5C2D91;font-weight:700">plot bar graph of</span> `nota` up to `1000`  
6. La final <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `100`  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `nota` to <span style="color:#9C00C8;font-weight:700">map</span> `light level` from `0` `255` to `200` `1000`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `light level < 30` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Ghost`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot bar graph of</span> `nota` up to `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `100`

**Încearcă tu — (15–20 min)**  
- [ ] Bara crește când ridici mâna și scade când o apropii  
- [ ] Când acoperi complet ecranul apare o fantomă  
- [ ] Programul e pe placa adevărată  

### 4) Complet: sunetul (placa V2)
Pe **V2** placa are difuzor. Adăugăm <span style="color:#E63022;font-weight:700">play tone</span> `nota` for `100` ms în <span style="color:#1E90FF;font-weight:700">forever</span>, dar **doar când** `sunet = 1` <span style="color:#00A4A6;font-weight:700">and</span> `light level > 30`.

La <span style="color:#D400D4;font-weight:700">on button A pressed</span>: pornește sau oprește sunetul, cu <span style="color:#DC143C;font-weight:700">set</span> `sunet` to <span style="color:#9C00C8;font-weight:700">0 − 0</span> `1` `sunet` (`1` devine `0` și invers).  
La <span style="color:#D400D4;font-weight:700">on button B pressed</span>: schimbă **gama**: `nota` se înmulțește cu `gama`, iar `gama` trece între `1` și `2` (o octavă mai sus).

> **Pe V1** nu auzi nimic fără căști sau buzzer. Fă același program, dar în loc de sunet arată <span style="color:#1E90FF;font-weight:700">show number</span> `nota` când `sunet = 1`.

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `sunet` to `1`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `gama` to `1`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `nota` to <span style="color:#9C00C8;font-weight:700">0 × 0</span> (<span style="color:#9C00C8;font-weight:700">map</span> `light level` from `0` `255` to `200` `1000`) `gama`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `sunet = 1 and light level > 30` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#E63022;font-weight:700">play tone</span> `nota` for `100` ms  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `100`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `sunet` to <span style="color:#9C00C8;font-weight:700">0 − 0</span> `1` `sunet`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `gama = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `gama` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `gama` to `1`

**Încearcă tu — (15–20 min)**  
- [ ] Pe V2: sunetul urmărește mâna  
- [ ] A pornește și oprește sunetul  
- [ ] B urcă și coboară gama  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Nu se aude nimic** — placa e V1 fără căști sau buzzer, sau `sunet` e `0`, sau volumul de pe PC (pentru simulator) e oprit.  
2. **Sunetul e continuu și enervant** — lipsește `pause (ms)` în `forever`.  
3. **Nota nu se schimbă** — ai uitat `map` și ai pus lumina direct în `play tone`.  
4. **Mereu fantomă** — pragul `30` e prea mare pentru camera ta. Testează cu `show number light level`.  
5. **A nu oprește sunetul** — `set sunet to 1 − sunet` e scris cu valorile inversate.  
6. **B nu schimbă gama** — `nota` nu e înmulțită cu `gama`.  

---

## De făcut azi — „Theremin cu lumină”
Salvat: `Prenume_Nume_MB2_L07`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — bara de LED-uri arată nota după lumină, iar în întuneric apare o fantomă, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — sunet (V2), A pornește sau oprește, B schimbă gama, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Theremin vizual *(Minim)*
<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `nota` to <span style="color:#9C00C8;font-weight:700">map</span> `light level` from `0` `255` to `200` `1000`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `light level < 30` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Ghost`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot bar graph of</span> `nota` up to `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `100`

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L07`  
- [ ] Variabila `nota` creată  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#9C00C8;font-weight:700">map</span>, <span style="color:#D400D4;font-weight:700">light level</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 < 0</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#5C2D91;font-weight:700">plot bar graph of</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg apropie și ridică mâna, iar bara de LED-uri crește și scade; când acoperă tot, apare fantoma.

### Pasul 2 — Sunet, A și B *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `sunet` to `1`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `gama` to `1`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `nota` to <span style="color:#9C00C8;font-weight:700">0 × 0</span> (<span style="color:#9C00C8;font-weight:700">map</span> `light level` from `0` `255` to `200` `1000`) `gama`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `sunet = 1 and light level > 30` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#E63022;font-weight:700">play tone</span> `nota` for `100` ms  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `100`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `sunet` to <span style="color:#9C00C8;font-weight:700">0 − 0</span> `1` `sunet`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `gama = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `gama` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `gama` to `1`

- [ ] Variabilele `sunet` și `gama` create și puse pe `1`  
- [ ] <span style="color:#E63022;font-weight:700">play tone</span> `nota` for `100` ms doar când `sunet = 1` și `light level > 30`  
- [ ] A pornește și oprește sunetul  
- [ ] B schimbă gama (`1` și `2`)  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L07`  

**Gata Complet când:** cântă nota după mână, A oprește sunetul, B urcă o octavă (pe V1: arată numărul notei).

---

## Bonus ★★★ — Provocare: Gama de cinci note
*Doar dacă ai terminat Complet.*

- [ ] Schimbă intervalul notelor (`200`–`1000`) și vezi cum se schimbă sunetul  
- [ ] **Provocarea:** nu mai cânți orice frecvență, ci **5 note fixe** (Do `262`, Re `294`, Mi `330`, Fa `349`, Sol `392`). Cu <span style="color:#9C00C8;font-weight:700">map</span> transformi lumina în `0`–`4`, apoi alegi nota cu <span style="color:#00A4A6;font-weight:700">else if</span>. Un coleg **cântă “Do Re Mi”** doar cu mâna, în ordine (pe V1: litera notei cu <span style="color:#1E90FF;font-weight:700">show string</span>).  

## Recapitulare rapidă
1. <span style="color:#D400D4;font-weight:700">light level</span> dă lumina între `0` și `255`  
2. <span style="color:#9C00C8;font-weight:700">map</span> potrivește un interval cu altul: lumină → notă  
3. O notă e o **frecvență** în Hz: grav = mic, acut = mare  
4. <span style="color:#E63022;font-weight:700">play tone</span> cântă o notă (difuzor pe V2)  
5. Variabilele `sunet` și `gama` fac instrumentul **controlabil**  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
lumina `0–255` → <span style="color:#9C00C8;font-weight:700">map</span> → `nota` `200–1000`

<span style="color:#1E90FF;font-weight:700">forever</span>: bara de LED-uri · `sunet = 1 și lumină > 30` → <span style="color:#E63022;font-weight:700">play tone</span> `nota`

A → `sunet = 1 − sunet` · B → `gama` `1` sau `2`

**Quiz scurt (cu profesorul):**  
- Ce număr dă lumina când acoperi ecranul?  
- Ce face blocul `map`?  
- Ce e o frecvență în Hz?  
- De ce `forever` are nevoie de pauză?  
- Cum trece `sunet` de la `1` la `0` și invers?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi sunetul (V2) sau numărul notei (V1) (Pasul 2), în același `Prenume_Nume_MB2_L07`.  
- Dacă ai Complet: desenezi pe foaie un instrument care folosește **alt senzor** (temperatura, înclinarea) și scrii ce notă ar da.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi notele cu o melodie scurtă.  

## Ce urmează
În **Lecția 8** repari programe stricate: **doctorul de cod**.
