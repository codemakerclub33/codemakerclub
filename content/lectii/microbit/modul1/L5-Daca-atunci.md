# Lecția 5 — Scutul de energie
### Decizii: if, else și comparații
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți să faci placa să **decidă** și faci **„Scutul de energie”**:  
> A încarcă scutul, B îl lovește; când energia ajunge la 0, apare `GAME OVER`.  
> Fișier: `Prenume_Nume_MB1_L05` (ex. `Ana_Pop_MB1_L05`)

---

## Obiectiv
La finalul orei folosești `if … then` și `if … then … else` și compari numere.  
**Minim:** A încarcă scutul (+1), B îl lovește (−1); când energia ajunge la **0**, placa arată `GAME OVER` și un craniu, apoi pornește iar de la 5, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: **A** încarcă scutul, dar **niciodată peste 9**, iar **A+B** arată starea scutului (`PERICOL`, `MEDIU` sau `PLIN`), cu cel puțin **6 blocuri diferite**.

## De ce contează
Tu iei decizii tot timpul: „Dacă plouă, iau umbrela. Altfel, iau ochelarii de soare.” Un program face la fel.  
Fără decizii, un joc nu poate spune „ai pierdut”, iar o alarmă nu știe când să sune.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4: variabile, `set`, `change` |
| 10–30 | Jocul „Dacă… atunci” cu cartonașe, fără calculator |
| 30–50 | Condiții și comparații: `=`, `<`, `>` |
| 50–80 | Scutul de energie (**Minim**) |
| 80–105 | A nu trece de 9; A+B arată starea scutului (**Complet**) |
| 105–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(Loops, Math — mai târziu.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#00A4A6;font-weight:700">if … then</span> | face ceva **doar dacă** condiția e adevărată |
| <span style="color:#00A4A6;font-weight:700">if … then … else</span> | face un lucru dacă e adevărat, **altul** dacă nu |
| <span style="color:#00A4A6;font-weight:700">0 = 0</span> | compară: sunt egale? |
| <span style="color:#00A4A6;font-weight:700">0 < 0</span> | compară: primul e mai mic? (din listă poți alege și `>`) |
| <span style="color:#00A4A6;font-weight:700">and</span> | adevărat doar dacă **amândouă** condițiile sunt adevărate (în Bonus) |
| <span style="color:#00A4A6;font-weight:700">or</span> | adevărat dacă **măcar una** e adevărată (în Bonus) |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>.

---

## Pas cu pas

### 1) Jocul „Dacă… atunci” (cartonașe)
Pe cartonașe scrieți câte o regulă: „**Dacă** plouă, **atunci** iau umbrela, **altfel** iau ochelarii de soare.”

Un copil citește o situație („Plouă!”), altul alege cartonașul potrivit. Fiecare regulă are:
- o **condiție** (plouă?) care poate fi **adevărată** sau **falsă**  
- ce faci dacă e adevărată (**atunci**)  
- ce faci dacă nu (**altfel**)

**Încearcă tu — (5–8 min)**  
- [ ] Scrii 3 reguli „dacă … atunci … altfel” din viața ta  
- [ ] Ai jucat cu un coleg 5 situații  

### 2) Condiții și comparații
În <span style="color:#00A4A6;font-weight:700">Logic</span> găsești blocurile de comparat numere. Răspunsul e mereu **adevărat** sau **fals**.

| Condiția | Dacă `energie` este `4` |
|----------|----------------------|
| `energie = 4` | adevărat |
| `energie < 4` | fals |
| `energie > 2` | adevărat |
| `energie > 2 and energie < 4` | fals (a doua nu e adevărată) |

> `=` din <span style="color:#00A4A6;font-weight:700">Logic</span> **întreabă** „sunt egale?”. <span style="color:#DC143C;font-weight:700">set</span> **pune** o valoare. Nu le amesteca.

**Încearcă tu — (5–8 min)**  
- [ ] Completezi singur tabelul pentru `energie = 2`  
- [ ] Spui de ce `energie > 2 and energie < 4` e fals pentru `4`  

### 3) Proiect nou și pornirea
1. Proiect nou: `Prenume_Nume_MB1_L05`  
2. Creezi variabila `energie` (ca în lecția 4)  
3. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `energie` to `5` și <span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `energie` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`

**Încearcă tu — (5 min)**  
- [ ] La pornire apare `5`  

### 4) Scutul de energie: Minim
**A** încarcă scutul (+1). **B** îl lovește (−1). Dacă după lovitură energia a ajuns la **0**, jocul s-a terminat și pornește iar de la 5. Altfel arată energia.

1. <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#DC143C;font-weight:700">change</span> `energie` by `1` și <span style="color:#1E90FF;font-weight:700">show number</span> `energie`  
2. <span style="color:#D400D4;font-weight:700">on button B pressed</span>: mai întâi <span style="color:#DC143C;font-weight:700">change</span> `energie` by `-1`  
3. Apoi <span style="color:#00A4A6;font-weight:700">if … then … else</span> cu condiția <span style="color:#00A4A6;font-weight:700">0 = 0</span> → `energie = 0`  
4. În **atunci**: <span style="color:#1E90FF;font-weight:700">show string</span> `GAME OVER`, <span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`, <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`, <span style="color:#DC143C;font-weight:700">set</span> `energie` to `5`, <span style="color:#1E90FF;font-weight:700">show number</span> `energie`  
5. În **altfel**: <span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `energie` to `5`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `energie` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `energie` by `-1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `GAME OVER`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `energie` to `5`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

> <span style="color:#DC143C;font-weight:700">change</span> vine **înaintea** lui `if`: întâi lovim scutul, apoi verificăm dacă a ajuns la 0.

**Încearcă tu — (15–20 min)**  
- [ ] La fiecare A vezi energia crescând  
- [ ] La fiecare B scade; la `0` apar `GAME OVER` și craniul, apoi energia revine la `5`  
- [ ] Ai schimbat `5` în `3` din `on start` și ai văzut cum se termină mai repede  

### 5) Complet: A nu trece de 9
La **A**, energia crește cu 1, dar **doar dacă** e mai mică decât `9`. Așa scutul nu se încarcă la nesfârșit.

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie < 9` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `energie` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`

**Încearcă tu — (10–15 min)**  
- [ ] A încarcă scutul până la `9` și se oprește acolo  
- [ ] Apeși A de 3 ori când energia e `9` și rămâne `9`  

### 6) Complet: A+B arată starea scutului
La **A+B**, placa spune în ce stare e scutul: dacă energia e **sub 3**, `PERICOL`; dacă e **peste 6**, `PLIN`; în rest, `MEDIU`. Pentru asta punem un <span style="color:#00A4A6;font-weight:700">if … then … else</span> **în ramura altfel** a altuia.

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie < 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `PERICOL`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie > 6` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `PLIN`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `MEDIU`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`

**Încearcă tu — (10 min)**  
- [ ] La energie `2`, A+B arată `PERICOL`  
- [ ] La energie `8`, A+B arată `PLIN`, iar la `5` arată `MEDIU`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Scutul nu ajunge niciodată la `0`** — <span style="color:#DC143C;font-weight:700">change</span> e **după** <span style="color:#00A4A6;font-weight:700">if</span>, nu înainte.  
2. **Nu se întâmplă nimic la `0`** — ai scris `energie` în loc de `energie = 0` (ai uitat comparația).  
3. **Verifici `=` cu `set`** — `=` întreabă, `set` pune valoarea.  
4. **Energia trece de `9`** — lipsește <span style="color:#00A4A6;font-weight:700">if</span> `energie < 9` la A.  
5. **A+B arată mereu `MEDIU`** — al doilea <span style="color:#00A4A6;font-weight:700">if … then … else</span> nu e în ramura **altfel** a primului.  
6. **La `energie = 0` nu apare GAME OVER** — ai scris `0` între ghilimele sau ai ales altă comparație din listă.  

---

## De făcut azi — „Scutul de energie”
Salvat: `Prenume_Nume_MB1_L05`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — A încarcă scutul, B îl lovește și la `0` apare `GAME OVER`, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — A nu trece de `9`, iar A+B arată starea scutului, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Scutul de energie *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `energie` to `5`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `energie` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `energie` by `-1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `GAME OVER`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `energie` to `5`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L05`  
- [ ] Variabila `energie` creată  
- [ ] <span style="color:#DC143C;font-weight:700">change</span> e **înaintea** lui <span style="color:#00A4A6;font-weight:700">if</span>  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg apasă B de 5 ori și la a 5-a placa arată `GAME OVER` și craniul, apoi energia pornește iar de la `5`.

### Pasul 2 — A limitat și starea scutului *(Complet)*
<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie < 9` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `energie` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie < 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `PERICOL`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `energie > 6` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `PLIN`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `MEDIU`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `energie`

- [ ] A: <span style="color:#00A4A6;font-weight:700">if</span> `energie < 9` apoi <span style="color:#DC143C;font-weight:700">change</span> `energie` by `1`  
- [ ] A nu urcă peste `9`  
- [ ] A+B: <span style="color:#00A4A6;font-weight:700">if … then … else</span> în <span style="color:#00A4A6;font-weight:700">else</span>: `PERICOL` sub 3, `PLIN` peste 6, `MEDIU` în rest  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L05`  

**Gata Complet când:** A nu încarcă scutul peste `9`, iar A+B spune corect starea lui.

---

## Bonus ★★★ — Provocare: Scutul cu trei vieți
*Doar dacă ai terminat Complet.*

- [ ] Schimbă energia de start de la `5` la `7` sau la `3` și vezi cât ține jocul  
- [ ] **Provocarea:** adaugi **trei vieți** (variabila `vieti`, la start `3`). La `energie = 0` pierzi **o viață**, energia revine la `5`, iar când `vieti = 0` apare `GAME OVER` final. Cu <span style="color:#00A4A6;font-weight:700">or</span>: dacă `energie < 2` **sau** `vieti = 1`, la A+B apare `Surprised`. Un coleg joacă 1 minut și **ghicește regulile** din ce vede.  

## Recapitulare rapidă
1. **Condiție** = întrebare cu răspuns adevărat sau fals  
2. <span style="color:#00A4A6;font-weight:700">if … then</span> face ceva doar dacă e adevărat; <span style="color:#00A4A6;font-weight:700">else</span> = „altfel”  
3. `=` **întreabă**, <span style="color:#DC143C;font-weight:700">set</span> **pune** o valoare  
4. <span style="color:#00A4A6;font-weight:700">and</span>: amândouă adevărate; <span style="color:#00A4A6;font-weight:700">or</span>: măcar una adevărată (le folosești la Bonus)  
5. Ordinea blocurilor contează: întâi <span style="color:#DC143C;font-weight:700">change</span>, apoi <span style="color:#00A4A6;font-weight:700">if</span>  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
A → <span style="color:#DC143C;font-weight:700">change</span> `energie` +1 → <span style="color:#1E90FF;font-weight:700">show number</span>

B → <span style="color:#DC143C;font-weight:700">change</span> −1 → <span style="color:#00A4A6;font-weight:700">if</span> `energie = 0` → da: <span style="color:#1E90FF;font-weight:700">show string</span> + <span style="color:#1E90FF;font-weight:700">show icon</span> + <span style="color:#DC143C;font-weight:700">set</span> 5 · nu: <span style="color:#1E90FF;font-weight:700">show number</span>

A+B → <span style="color:#00A4A6;font-weight:700">if</span> `energie < 3` → `PERICOL` · altfel <span style="color:#00A4A6;font-weight:700">if</span> `energie > 6` → `PLIN` · altfel `MEDIU`

**Quiz scurt (cu profesorul):**  
- Cu `energie = 4`, ce răspuns are `energie > 4`?  
- Ce face <span style="color:#00A4A6;font-weight:700">else</span>?  
- De ce <span style="color:#DC143C;font-weight:700">change</span> vine **înaintea** lui <span style="color:#00A4A6;font-weight:700">if</span>?  
- Cum împiedici scutul să se încarce peste `9`?  
- Ce se întâmplă la `energie = 0`?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi limita lui A și A+B (Pasul 2), în același `Prenume_Nume_MB1_L05`.  
- Dacă ai Complet: scrii pe foaie trei decizii din viața ta, în forma „Dacă … atunci …, altfel …”, și alegi una pe care o faci cu blocuri.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi regulile.  

## Ce urmează
În **Lecția 6** placa **repetă lucruri** cu bucle: un far de pe mare.
