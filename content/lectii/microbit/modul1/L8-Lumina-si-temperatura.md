# Lecția 8 — Sera inteligentă
### Senzori: lumină și temperatură
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți că placa **măsoară lumina și temperatura** și faci **„Sera inteligentă”**:  
> placa veghează o plantă: dacă e prea întuneric sau prea cald, îți arată cu o față.  
> Fișier: `Prenume_Nume_MB1_L08` (ex. `Ana_Pop_MB1_L08`)

---

## Obiectiv
La finalul orei citești **senzorul de lumină** și **senzorul de temperatură** și iei decizii pe baza lor.  
**Minim:** placa arată o față tristă când e întuneric și una veselă când e lumină; la **A** arată cât de multă lumină e, la **B** temperatura, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: o față surprinsă când e **prea cald**, iar A și B arată valorile **fără să se încurce** cu fața, cu cel puțin **6 blocuri diferite**.

## De ce contează
Într-o seră adevărată, plantele au nevoie de destulă lumină și de o temperatură potrivită. Aparatele din seră **măsoară** și **decid**: deschid o fereastră sau aprind o lampă.  
Azi faci și tu un astfel de aparat, la scară mică.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7: mișcare, `pick random` |
| 10–30 | Cum „vede” lumina placa? `light level` |
| 30–45 | Temperatura: `temperature (°C)` |
| 45–75 | Sera inteligentă (**Minim**) |
| 75–105 | Prea cald și fără încurcături (**Complet**) |
| 105–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(nimic nou la Basic, doar combinăm.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#D400D4;font-weight:700">light level</span> | dă un număr între **0** (întuneric) și **255** (foarte multă lumină) |
| <span style="color:#D400D4;font-weight:700">temperature (°C)</span> | dă temperatura aproximativă, în grade Celsius |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 < 0</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#DC143C;font-weight:700">set</span>.

---

## Pas cu pas

### 1) Cum „vede” lumina placa?
Placa nu are un ochi separat. Folosește **LED-urile de pe ecran** ca senzor: ele pot și să „simtă” lumina. Rezultatul e un număr între **0** și **255**.

În simulator, un <span style="color:#1E90FF;font-weight:700">forever</span> cu <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span> arată valoarea, iar o schimbi cu **slider-ul** de lumină. Pe placa adevărată, acoperi LED-urile cu mâna: numărul scade.

**Încearcă tu — (5–8 min)**  
- [ ] Vezi `light level` schimbându-se în simulator  
- [ ] Pe placă, acoperi ecranul cu mâna și numărul scade  

### 2) Temperatura
<span style="color:#D400D4;font-weight:700">temperature (°C)</span> dă temperatura **aproximativă**. Placa se încălzește puțin singură, deci poate arăta cu 1–3 grade mai mult decât camera.

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>

**Încearcă tu — (5 min)**  
- [ ] Apeși B și apare temperatura (de exemplu `23`)  
- [ ] Ții placa în pumn un minut și apeși B din nou; numărul crește  

### 3) Alegem pragurile
Un **prag** e numărul de la care placa decide. Pentru lumină alegem `50`: sub `50` e „prea întuneric”. Pentru căldură alegem `28`: peste `28` e „prea cald”.

Testează în simulator: cu slider-ul de lumină sus `light level` e mare, cu slider-ul jos e mic. Pragurile le alegi **tu**, după locul în care lucrezi.

**Încearcă tu — (5–8 min)**  
- [ ] Ai notat `light level` la lumină, la umbră și cu mâna deasupra  
- [ ] Ai ales pragurile tale (lumină între 30 și 80, căldură între 26 și 30)  

### 4) Sera: Minim
1. În <span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#00A4A6;font-weight:700">if … then … else</span> cu <span style="color:#00A4A6;font-weight:700">0 < 0</span> → `light level < 50`  
2. La **atunci**: <span style="color:#1E90FF;font-weight:700">show icon</span> `Sad` (prea întuneric)  
3. La **altfel**: <span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
4. La sfârșit: <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
5. Separat, <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span> și <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
6. Separat, <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span> și <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `light level < 50` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  

> Observi că numerele de la A și B sunt acoperite repede de fața din <span style="color:#1E90FF;font-weight:700">forever</span>. O rezolvăm la **Complet**.

**Încearcă tu — (15–20 min)**  
- [ ] Cu lumină apare fața veselă, în întuneric cea tristă  
- [ ] La A și la B apar valorile, chiar dacă fața le acoperă repede  
- [ ] Programul e pe placa adevărată  

### 5) Complet: prea cald și fără încurcături
Adăugăm o a treia față: dacă e **prea cald** (`temperature > 28`), placa arată `Surprised`. Pentru asta punem un <span style="color:#00A4A6;font-weight:700">if … then … else</span> **în ramura altfel** a altuia.

Ca să nu se încurce fața cu numerele de la A și B, folosim o variabilă-semnal `ocupat`: `1` = „ecranul e folosit”, `0` = „sera poate afișa fața”.

1. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  
2. Sera lucrează **doar dacă** `ocupat = 0` (un <span style="color:#00A4A6;font-weight:700">if</span> în jurul celor vechi)  
3. La A și la B: <span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `1`, arăți valoarea, <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`, apoi <span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `ocupat = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `temperature (°C) > 28` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `light level < 50` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`

**Încearcă tu — (15–20 min)**  
- [ ] Dacă strângi placa în pumn, apare fața surprinsă  
- [ ] A și B arată valorile, iar fața nu le acoperă  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Fața clipește** — <span style="color:#1E90FF;font-weight:700">forever</span> nu are <span style="color:#1E90FF;font-weight:700">pause (ms)</span>. Pune `200`.  
2. **Mereu fața tristă** — pragul de lumină e prea mare, sau ai scris `>` în loc de `<`. Încearcă `50`.  
3. **Niciodată fața surprinsă** — pragul de căldură e prea mare. Pe placa din simulator mută slider-ul de temperatură sus.  
4. **Numărul dispare imediat** — <span style="color:#1E90FF;font-weight:700">forever</span> îl acoperă. Folosește `ocupat`.  
5. **Temperatura pare prea mare** — placa se încălzește puțin singură. Nu e o greșeală.  
6. **`light level` e mereu `0`** — ecranul e acoperit sau simulatorul are slider-ul jos.  

---

## De făcut azi — „Sera inteligentă”
Salvat: `Prenume_Nume_MB1_L08`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — fața se schimbă după lumină, iar A și B arată valorile, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — fața surprinsă la căldură și valori fără încurcături, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Sera inteligentă *(Minim)*
<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `light level < 50` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L08`  
- [ ] Pragul de lumină `50` merge în simulator (sau l-ai ales tu)  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 < 0</span>, <span style="color:#D400D4;font-weight:700">light level</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg acoperă placa cu mâna și apare fața tristă, o descoperă și apare fața veselă, iar la A și B vede valorile.

### Pasul 2 — Prea cald și fără încurcături *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `ocupat = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `temperature (°C) > 28` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `light level < 50` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`

- [ ] Variabila `ocupat` pusă la `0` în <span style="color:#1E90FF;font-weight:700">on start</span>  
- [ ] Sera lucrează doar când `ocupat = 0`  
- [ ] Peste `28` grade apare `Surprised`  
- [ ] A și B arată valorile, apoi `ocupat` revine la `0`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L08`  

**Gata Complet când:** fața se schimbă după lumină și căldură, iar A și B arată valorile fără să fie șterse.

---

## Bonus ★★★ — Provocare: Recordul serei
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pragurile și testează în clasă (lumină, umbră, mâna deasupra)  
- [ ] **Provocarea:** sera ține minte **cea mai mare temperatură** văzută. Folosești o variabilă `maxim` (la start `0`): în <span style="color:#1E90FF;font-weight:700">forever</span>, dacă <span style="color:#D400D4;font-weight:700">temperature (°C)</span> este mai mare decât `maxim`, <span style="color:#DC143C;font-weight:700">set</span> `maxim` to temperatura. La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span> placa arată `maxim`. Un coleg strânge placa în pumn un minut, apoi apasă A+B: valoarea trebuie să fie **mai mare** decât cea de la început.  

## Recapitulare rapidă
1. `light level` dă un număr între **0** și **255**  
2. Lumina e măsurată cu **LED-urile** de pe ecran  
3. `temperature (°C)` dă temperatura **aproximativă**  
4. Pragurile le alegi tu, după locul în care lucrezi  
5. O variabilă-semnal (`ocupat`) previne încurcăturile de pe ecran  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
<span style="color:#1E90FF;font-weight:700">forever</span> → <span style="color:#00A4A6;font-weight:700">if</span> temperatura `> 28` → `Surprised` · altfel <span style="color:#00A4A6;font-weight:700">if</span> <span style="color:#D400D4;font-weight:700">light level</span> `< 50` → `Sad` · altfel `Happy` → <span style="color:#1E90FF;font-weight:700">pause (ms)</span>

A / B → `ocupat = 1` → <span style="color:#1E90FF;font-weight:700">show number</span> → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> → `ocupat = 0`

**Quiz scurt (cu profesorul):**  
- Ce valori poate avea `light level`?  
- De ce temperatura plăcii poate fi mai mare decât a camerei?  
- Ce înseamnă `ocupat = 1` în programul nostru?  
- Cum ai schimba pragul de lumină al serei?  
- De ce `forever` are nevoie de o pauză?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi fața surprinsă și `ocupat` (Pasul 2), în același `Prenume_Nume_MB1_L08`.  
- Dacă ai Complet: observi acasă un loc unde contează lumina sau căldura (frigider, cuptor, o plantă pe geam); desenezi ce ar măsura placa și ce față ar arăta.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi pragurile.  

## Ce urmează
În **Lecția 9** punem tot la un loc într-un proiect cu **stare**: un seif secret.
