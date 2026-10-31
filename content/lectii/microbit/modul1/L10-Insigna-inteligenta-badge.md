# Lecția 10 — Insigna inteligentă
### Reluare: proiectele din tot Modulul 1
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi nu înveți blocuri noi, ci **adaugi la un loc** proiectele din Modulul 1 și faci **„Insigna inteligentă”**:  
> o insignă cu inimă, nume, emoții, temperatură, bilă magică, contor și o floare.  
> Fișier: `Prenume_Nume_MB1_L10` (ex. `Ana_Pop_MB1_L10`)

---

## Obiectiv
La finalul orei **folosești singur** tot ce ai învățat în Modulul 1 și primești insigna **micro:bit Starter**.  
**Minim:** o insignă cu **inimă și nume** la pornire, **emoție** la A, **temperatură** la B și **bila magică** la scuturare, cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: un **contor** la A (după 10 apăsări apare inima) și o **floare** la A+B, cu cel puțin **6 blocuri diferite**.

## De ce contează
Un programator nu scrie totul de la zero. Copiază cu grijă ce a mai făcut și leagă bucățile.  
Azi vezi că ai deja o **bibliotecă de proiecte**, iar o insignă mare e făcută din piese mici pe care le știi.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap Modul 1, citim lista de proiecte |
| 10–25 | Planul insignei pe foaie |
| 25–70 | Piesele din L1, L3, L7, L8 (**Minim**) |
| 70–105 | Piesele din L2, L5 (**Complet**) |
| 105–120 | **Verificarea Modulului 1**, autoevaluare, badge |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#1E90FF;font-weight:700">Basic</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#5C2D91;font-weight:700">LED</span> · <span style="color:#00A600;font-weight:700">Loops</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#9C00C8;font-weight:700">Math</span>  
*(nu avem capitole noi azi.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#1E90FF;font-weight:700">on start · show icon · show string</span> | **Lecția 1:** inima și numele |
| <span style="color:#D400D4;font-weight:700">on button pressed</span> | **Lecția 3:** A, B, A+B |
| <span style="color:#D400D4;font-weight:700">temperature (°C)</span> | **Lecția 8:** temperatura la B |
| <span style="color:#D400D4;font-weight:700">on shake</span> | **Lecția 7:** bila magică la scuturare |
| <span style="color:#9C00C8;font-weight:700">pick random</span> | **Lecția 7:** răspunsul bilei |
| <span style="color:#DC143C;font-weight:700">change apasari by 1</span> | **Lecția 5:** contorul până la 10 |
| <span style="color:#5C2D91;font-weight:700">plot x y</span> | **Lecția 2:** floarea la A+B |

*Azi nu apar blocuri noi: tabelul de mai sus arată **din ce lecție** vine fiecare piesă.*

---

## Pas cu pas

### 1) Planul pe foaie
Desenezi pe foaie insigna: ce apare la pornire, ce face fiecare buton și ce face scuturarea.

| Acțiune | Ce se întâmplă | Din lecția |
|---|---|---|
| pornire | inimă, apoi numele tău | 1 |
| A | emoție `Happy` | 3 |
| B | temperatura | 8 |
| scuturare | Da sau Nu | 7 |
| A de 10 ori | inima | 5 |
| A+B | floarea | 2 |

**Încearcă tu — (5–8 min)**  
- [ ] Ai desenat tabelul pe foaie  
- [ ] Știi ce piesă vine din ce lecție  

### 2) Piesa din Lecția 1: pornirea
Proiect nou: `Prenume_Nume_MB1_L10`. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`, pauză, <span style="color:#1E90FF;font-weight:700">show string</span> cu **numele tău** (fără diacritice) și <span style="color:#1E90FF;font-weight:700">clear screen</span>.

**Încearcă tu — (5–8 min)**  
- [ ] La pornire apare inima, apoi numele tău  

### 3) Piesele din Lecțiile 3 și 8: A și B
La <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`, pauză, <span style="color:#1E90FF;font-weight:700">clear screen</span>. La <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>, pauză, <span style="color:#1E90FF;font-weight:700">clear screen</span>.

**Încearcă tu — (10 min)**  
- [ ] A arată fața vesel  
- [ ] B arată temperatura  

### 4) Piesa din Lecția 7: bila magică, Minim
La <span style="color:#D400D4;font-weight:700">on shake</span>: <span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `1`; <span style="color:#00A4A6;font-weight:700">if … then … else</span>: `raspuns = 0` → `Yes`, altfel `No`.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Ana`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `raspuns = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (15–20 min)**  
- [ ] Scuturi și apare Da sau Nu  
- [ ] Toate cele patru piese merg împreună  
- [ ] Programul e pe placa adevărată  

### 5) Complet: piesele din Lecțiile 5 și 2
1. Variabila `apasari`: la A adaugi <span style="color:#DC143C;font-weight:700">change</span> `apasari` by `1`; dacă `apasari = 10`, arăți `Heart` și revii la `0`  
2. La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span>: floarea din Lecția 2, într-o variantă scurtă, cu <span style="color:#5C2D91;font-weight:700">plot x y</span>  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `apasari` to `0`  
&emsp;*(restul, ca în Minim)*  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `apasari` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `apasari = 10` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `apasari` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (25–30 min)**  
- [ ] După 10 apăsări pe A apare inima  
- [ ] A+B arată floarea scurtă  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

### 6) Testul și prezentarea (1 minut)
Arăți insigna unui coleg și spui: ce piesă ți-a plăcut cel mai mult, din ce lecție vine și ce ai schimba. Apoi eliberezi masa.

**Încearcă tu — (5 min)**  
- [ ] Ai prezentat insigna în 1 minut  

---

## Greșeli frecvente
1. **Insigna nu mai pornește** — ai prea multe blocuri pe masă, neconectate. Verifică ce e gri.  
2. **Numele nu apare** — ai scris diacritice sau <span style="color:#1E90FF;font-weight:700">show string</span> nu e în <span style="color:#1E90FF;font-weight:700">on start</span>.  
3. **B arată `0`** — <span style="color:#D400D4;font-weight:700">temperature (°C)</span> nu e pus în <span style="color:#1E90FF;font-weight:700">show number</span>.  
4. **Bila dă mereu Da** — limita lui `pick random` e greșită (ar trebui `0` to `1`).  
5. **Inima nu apare la 10** — `apasari` nu e pus la `0` la start sau lipsește `change`.  
6. **Două butoane se amestecă** — A+B a fost apăsat prea repede; pune pauze.  

---

## De făcut azi — „Insigna inteligentă”
Salvat: `Prenume_Nume_MB1_L10`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — insignă cu inimă și nume, emoție la A, temperatură la B și bilă magică, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — contorul de la A și floarea de la A+B, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Insigna inteligentă *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Ana`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `raspuns = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L10`  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#D400D4;font-weight:700">temperature (°C)</span>, <span style="color:#D400D4;font-weight:700">on shake</span>, <span style="color:#9C00C8;font-weight:700">pick random</span>  
- [ ] Toate cele patru piese merg pe placă  
- [ ] Prezentarea de 1 minut a fost făcută  

**→ Ai Minim când:** un coleg apasă A, B și scutură placa și vede emoția, temperatura și Da sau Nu.

### Pasul 2 — Contor și floare *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `apasari` to `0`  
&emsp;*(restul, ca în Minim)*  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `apasari` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `apasari = 10` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `apasari` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Variabila `apasari` creată  
- [ ] După 10 apăsări pe A apare inima  
- [ ] A+B arată floarea scurtă  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Verificarea Modulului 1 completată  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L10`  

**Gata Complet când:** A de 10 ori arată inima, iar A+B arată floarea.

---

## Bonus ★★★ — Provocare: Insigna cu povestea mea
*Doar dacă ai terminat Complet.*

- [ ] Schimbă emoția de la A și numele din pornire  
- [ ] **Provocarea:** insigna are **o poveste în 3 cadre** (de exemplu: dimineața, prânz, seara), desenate de tine cu <span style="color:#1E90FF;font-weight:700">show leds</span>. Cadrele apar la apăsarea lui A, B și A+B, într-o ordine care **are sens**. Un coleg ghicește povestea fără explicații.  

## Recapitulare rapidă
1. Un proiect mare e făcut din **piese mici**  
2. Fiecare piesă a fost o lecție: inimă, butoane, contor, bilă, senzori  
3. Salvezi un proiect cu **nume clar**  
4. Prezentarea arată ce ai învățat  
5. Ai terminat Modulul 1  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
Pornire → inimă + nume · A → emoție · B → temperatură · scuturare → Da sau Nu

Complet: A × 10 → inima · A+B → floarea

**Quiz scurt (cu profesorul):**  
- Din ce lecție vine bila magică?  
- Ce face contorul `apasari`?  
- De ce folosim nume clare pentru fișiere?  
- Ce piesă ți-a plăcut cel mai mult?  
- Ce ai schimba în insigna ta?  

## Temă (opțional)
- Fă o poză programului tău (screenshot) și o poză a insignei pe placă. Adu-le mâine pentru **portofoliul** tău.  
- Dacă ai Complet: completează Verificarea Modulului 1 de mai jos și bifează autoevaluarea.  

## Verificarea Modulului 1
Răspunde pe foaie, fără să te uiți în lecții. Răspunsurile sunt la final.

1. Câte LED-uri are ecranul micro:bit și cum sunt așezate?  
2. Care e diferența dintre `on start` și `forever`?  
3. Ce înseamnă `pause (ms) 500`?  
4. Cum faci placa să răspundă când apeși **A și B deodată**?  
5. Ce este o variabilă? Dă un exemplu.  
6. Care e diferența dintre `set score to 5` și `change score by 5`?  
7. Ce face `if … else`?  
8. De câte ori repetă `for index from 0 to 4`?  
9. Ce măsoară accelerometrul? Dă un gest pe care îl poate recunoaște.  
10. Cum ai folosi `light level` ca să faci o seră inteligentă?

**Autoevaluare** (bifează sincer):

Bifează ce poți face **singur**:

- [ ] trimit un program pe placă
- [ ] desenez și animez pe LED-uri
- [ ] folosesc butoanele A, B, A+B
- [ ] creez și schimb o variabilă
- [ ] folosesc `if` și `else`
- [ ] folosesc bucle
- [ ] citesc accelerometrul, lumina, temperatura

**Răspunsuri:**
1. 25, în 5 rânduri și 5 coloane. 2. `on start` rulează o dată, `forever` se repetă. 3. Așteaptă jumătate de secundă. 4. `on button A+B pressed`. 5. O cutie cu nume și valoare, de exemplu `score`. 6. `set` pune valoarea; `change` o adună la valoarea veche. 7. Face un lucru dacă e adevărat, altul dacă nu. 8. De 5 ori. 9. Mișcarea; de exemplu `shake`. 10. Dacă `light level` e sub un prag, arăți o față tristă.

---

## Ce urmează
În **Modulul 2** placa **vorbește cu alte plăci** prin radio, iar tu legi **LED-uri externe** la pini.
