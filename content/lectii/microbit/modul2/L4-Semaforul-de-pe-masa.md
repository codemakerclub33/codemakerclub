# Lecția 4 — Ceasul deșteptător
### Timp, text și alarmă
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi înveți să **numeri timpul** și faci **„Ceasul deșteptător”**:  
> placa arată minutele și secundele, iar când ajunge la ora alarmei, te trezește.  
> Fișier: `Prenume_Nume_MB2_L04` (ex. `Ana_Pop_MB2_L04`)

---

## Obiectiv
La finalul orei numeri secundele cu `pause (ms)` `1000`, lipești numere într-un text cu `join` și folosești `remainder of` ca să treci de la minutul `59` la `0`.  
**Minim:** placa numără secundele și minutele, A le arată ca `minut:secunde`, B setează minutele, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: la **A+B** pui alarma peste un minut, iar când vine ora, placa pâlpâie, cu cel puțin **6 blocuri diferite**.

## De ce contează
Un ceas deșteptător nu face nimic spectaculos: numără secunde și compară timpul cu ora alarmei. Dar fără el nu ne-am trezi la timp.  
Azi vezi cum **numărătoarea** și **compararea** fac un aparat util.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3: contor, `if`, prag |
| 10–25 | Jocul „Un minut”: 60 de secunde |
| 25–45 | Secundele și minutele în variabile |
| 45–60 | Textul: `join` |
| 60–85 | Ceasul (**Minim**) |
| 85–110 | **Complet:** alarma cu `remainder of` |
| 110–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#B8860B;font-weight:700">Text</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(blocuri noi: `join` (Advanced → Text) și `remainder of` (Math).)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#B8860B;font-weight:700">join</span> | lipește două sau mai multe valori într-un singur text: `minut`, `:` și `secunde` devin `3:07` |
| <span style="color:#9C00C8;font-weight:700">remainder of</span> | restul împărțirii: `remainder of 61 by 60` dă `1`; folosit ca să „sari” de la `59` la `0` |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#00A4A6;font-weight:700">and</span>, <span style="color:#9C00C8;font-weight:700">0 + 0</span>.

---

## Pas cu pas

### 1) Jocul „Un minut” (fără calculator)
Un copil numără cu voce tare „o mie unu, o mie doi, …” (o secundă fiecare), iar altul ține minte câte minute au trecut. După **60 de secunde** spune „minut nou!”, iar secundele revin la `0`.

Ceasul are **două numere**: secundele (`0`–`59`) și minutele.

**Încearcă tu — (5–8 min)**  
- [ ] Ai numărat 60 de secunde cu un coleg  
- [ ] Spui ce se întâmplă cu secundele după `59`  

### 2) Secundele: forever și pauza
1. Proiect nou: `Prenume_Nume_MB2_L04`  
2. Creezi variabilele `minut` și `secunde`  
3. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `minut` to `0` și <span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  
4. În <span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000` (o secundă), apoi <span style="color:#DC143C;font-weight:700">change</span> `secunde` by `1`  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `minut` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `secunde` by `1`

**Încearcă tu — (8–10 min)**  
- [ ] Variabila `secunde` crește cu 1 în fiecare secundă (o verifici cu `show number`)  

### 3) Minutele: secundele fac un minut
Când `secunde` ajunge la `60`, trebuie să se întâmple două lucruri: `secunde` revine la `0` și `minut` crește cu `1`. Le punem într-un <span style="color:#00A4A6;font-weight:700">if</span> în <span style="color:#1E90FF;font-weight:700">forever</span>:

<span style="color:#00A4A6;font-weight:700">if</span> `secunde = 60` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`

**Încearcă tu — (8–10 min)**  
- [ ] După `59` secunde vezi că `minut` a crescut  
- [ ] Ai grăbit ceasul: ai pus `10` în loc de `60` și ai văzut minutele sărind  

### 4) Afișarea: text cu join
Vrem să vedem `3:07`, adică minutul, două puncte și secundele. Blocul <span style="color:#B8860B;font-weight:700">join</span> lipește valorile într-un **text**. Îl pui în <span style="color:#1E90FF;font-weight:700">show string</span>.

La <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#1E90FF;font-weight:700">show string</span> <span style="color:#B8860B;font-weight:700">join</span> `minut` `:` `secunde`. La <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`, ca să **setezi** ora de pornire.

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> <span style="color:#B8860B;font-weight:700">join</span> `minut` `:` `secunde`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`

**Încearcă tu — (8–10 min)**  
- [ ] A arată `0:12` sau altceva cu două puncte  
- [ ] B mărește minutele și vezi schimbarea la A  

### 5) Ceasul: Minim
Reunești totul.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `minut` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `secunde` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `secunde = 60` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> <span style="color:#B8860B;font-weight:700">join</span> `minut` `:` `secunde`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`  

**Observație:** ceasul nostru poate rămâne în urmă cu câteva secunde pe oră. Ceasurile adevărate folosesc un cristal de cuarț, mult mai exact decât un `pause`.

**Încearcă tu — (15–20 min)**  
- [ ] Ceasul numără minutele și secundele singur  
- [ ] A arată timpul, B setează minutele  
- [ ] Programul e pe placa adevărată  

### 6) Complet: alarma cu remainder of
La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span> punem alarma **peste un minut**: `alarma` = `minut + 1`. Dar după minutul `59` vine `0`, nu `60`. Aici ne ajută <span style="color:#9C00C8;font-weight:700">remainder of</span>: `(minut + 1)` rămâne în intervalul `0`–`59`.

1. Creezi variabila `alarma`; în <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `alarma` to `-1` (nimic setat)  
2. La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span>: <span style="color:#DC143C;font-weight:700">set</span> `alarma` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (`minut` + `1`) by `60`, apoi o bifă `Yes`  
3. În <span style="color:#1E90FF;font-weight:700">forever</span>, după numărătoare: <span style="color:#00A4A6;font-weight:700">if</span> `minut = alarma` <span style="color:#00A4A6;font-weight:700">and</span> `secunde = 0` → <span style="color:#00A600;font-weight:700">repeat</span> `3` times (față `Surprised`, pauză, <span style="color:#1E90FF;font-weight:700">clear screen</span>, pauză)  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `alarma` to `-1`  
&emsp;*(restul, ca în Minim)*  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;*(numărătoarea, ca în Minim)*  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `minut = alarma and secunde = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `alarma` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (`minut` + `1`) by `60`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (15–20 min)**  
- [ ] La A+B apare bifa (alarma e pusă)  
- [ ] După un minut placa pâlpâie de 3 ori  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Secundele nu se opresc la `59`** — `if secunde = 60` lipsește sau nu are `set secunde to 0`.  
2. **Minutele nu cresc** — `change minut` e în afara lui `if`.  
3. **`join` arată un singur număr** — ai uitat să adaugi cu **+** cele trei valori (`minut`, `:`, `secunde`).  
4. **Alarma nu sună** — `and` nu are ambele condiții (`minut = alarma` și `secunde = 0`).  
5. **Alarma sună imediat** — `alarma` nu e `-1` la început, ci `0`, iar ceasul pornește de la `0:0`.  
6. **Ceasul merge prea repede sau prea încet** — `pause (ms)` nu e `1000` (o secundă).  

---

## De făcut azi — „Ceasul deșteptător”
Salvat: `Prenume_Nume_MB2_L04`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — ceasul numără minutele și secundele, A le arată, B setează minutele, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — A+B pune alarma peste un minut și placa pâlpâie, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Ceasul *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `minut` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `secunde` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `secunde = 60` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `secunde` to `0`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> <span style="color:#B8860B;font-weight:700">join</span> `minut` `:` `secunde`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `minut` by `1`

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L04`  
- [ ] Variabilele `minut` și `secunde` create  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#B8860B;font-weight:700">join</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg setează minutul cu B, apasă A și vede `minut:secunde` care crește.

### Pasul 2 — Alarma *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `alarma` to `-1`  
&emsp;*(restul, ca în Minim)*  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;*(numărătoarea, ca în Minim)*  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `minut = alarma and secunde = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `alarma` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (`minut` + `1`) by `60`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Variabila `alarma` pusă la `-1` în `on start`  
- [ ] A+B: <span style="color:#DC143C;font-weight:700">set</span> `alarma` cu <span style="color:#9C00C8;font-weight:700">remainder of</span>  
- [ ] `if minut = alarma and secunde = 0` → <span style="color:#00A600;font-weight:700">repeat</span> `3` times cu `Surprised`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L04`  

**Gata Complet când:** la A+B apare bifa, iar după un minut placa pâlpâie de 3 ori.

---

## Bonus ★★★ — Provocare: Amânare
*Doar dacă ai terminat Complet.*

- [ ] Schimbă fața de la alarmă și numărul de pâlpâiri  
- [ ] **Provocarea:** adaugi **amânare**: dacă apeși B în timp ce alarma pâlpâie, alarma se mută cu `1` minut mai târziu (<span style="color:#DC143C;font-weight:700">change</span> `alarma` cu <span style="color:#9C00C8;font-weight:700">remainder of</span>). Alarma trebuie să sune **din nou după un minut** (cu o eroare de cel mult `5` secunde, măsurate cu cronometrul clasei).  

## Recapitulare rapidă
1. Un ceas e făcut din **două numere**: secunde și minute  
2. `pause (ms) 1000` + `change` numără secundele  
3. `if secunde = 60` face trecerea la minutul următor  
4. <span style="color:#B8860B;font-weight:700">join</span> lipește numere și litere într-un text; <span style="color:#9C00C8;font-weight:700">remainder of</span> ține un număr între `0` și `59`  
5. <span style="color:#00A4A6;font-weight:700">and</span> cere ambele condiții, ca alarma să sune o singură dată  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
<span style="color:#1E90FF;font-weight:700">forever</span>: pauză `1000` → `secunde + 1` → `if secunde = 60` → `secunde = 0`, `minut + 1`

A → <span style="color:#B8860B;font-weight:700">join</span> `minut` `:` `secunde` · B → `minut + 1`

A+B → `alarma = (minut + 1) rest 60` · `minut = alarma și secunde = 0` → pâlpâie

**Quiz scurt (cu profesorul):**  
- Câte secunde are un minut și ce se întâmplă cu `secunde` la `60`?  
- De ce folosim `pause (ms) 1000`?  
- Ce face blocul `join`?  
- De ce `(59 + 1) rest 60` dă `0`?  
- De ce alarma cere și `secunde = 0`?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi alarma (Pasul 2), în același `Prenume_Nume_MB2_L04`.  
- Dacă ai Complet: pui alarma peste 2 minute și măsori cu ceasul de la telefon cât de mult s-a abătut ceasul tău.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi pâlpâirea cu un desen de al tău.  

## Ce urmează
În **Lecția 5** pui placa **paznic** la rucsac: o alarmă cu stări.
