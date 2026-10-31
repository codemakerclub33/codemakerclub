# Lecția 2 — Busola de buzunar
### Direcții, else if și map
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi înveți să citești busola în **puncte cardinale** și faci **„Busola de buzunar”**:  
> placa spune N, E, S sau V, iar la un buton un ac de LED-uri arată cum te întorci.  
> Fișier: `Prenume_Nume_MB2_L02` (ex. `Ana_Pop_MB2_L02`)

---

## Obiectiv
La finalul orei folosești `else if` și blocul `map` ca să transformi un număr mare (grade) într-unul mic (poziție pe ecran).  
**Minim:** placa arată litera **N**, **E**, **S** sau **V** după direcție, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: la **B** un **ac** de LED-uri arată direcția pe ecran, cu cel puțin **6 blocuri diferite**.

## De ce contează
Navigatorii, excursioniștii și piloții folosesc busola ca să nu se rătăcească. Telefonul tău are una, pentru hărți.  
Azi faci una la scară mică și înveți cum să transformi un număr în ceva ce **vezi**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1: `mod`, busola, calibrare |
| 10–30 | Jocul „Unde e Nordul?” fără calculator |
| 30–50 | Grade și puncte cardinale: intervale |
| 50–70 | `else if`: mai multe variante într-un singur `if` |
| 70–95 | Busola de buzunar (**Minim**) |
| 95–112 | **Complet:** acul de LED-uri cu `map` |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#5C2D91;font-weight:700">LED</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(blocurile noi: `else if` (plusul de pe `if`) și `map` (Math).)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#00A4A6;font-weight:700">else if</span> | o variantă în plus la un `if` (apeși **+** pe bloc); se verifică în ordine |
| <span style="color:#9C00C8;font-weight:700">map</span> | mută un număr dintr-un interval în altul: de exemplu 0–360 devine 0–4 |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#D400D4;font-weight:700">compass heading</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 < 0</span>, <span style="color:#00A4A6;font-weight:700">or</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>.

---

## Pas cu pas

### 1) Jocul „Unde e Nordul?” (fără calculator)
Un copil stă cu ochii închiși în mijlocul clasei. Ceilalți îi spun în ce direcție să se întoarcă: „spre Nord!”, „spre Est!”. Nordul e **peretele de la tablă** (stabiliți voi). Copilul se întoarce și deschide ochii: a nimerit?

Busola are nevoie de un punct de plecare, **Nordul**, și de **patru direcții**: N, E, S, V.

**Încearcă tu — (5–8 min)**  
- [ ] Ai găsit Nordul în clasă (cu busola sau cu un coleg)  
- [ ] Ai arătat Est, Sud și Vest  

### 2) Grade și puncte cardinale
<span style="color:#D400D4;font-weight:700">compass heading</span> dă un număr între `0` și `359`. Îl împărțim în patru **intervale**:

| Număr | Direcția |
|-------|----------|
| mai mic de `45` **sau** mai mare de `315` | N (Nord) |
| între `45` și `135` | E (Est) |
| între `135` și `225` | S (Sud) |
| între `225` și `315` | V (Vest) |

Nordul e special: el e și la `10`, și la `350`, adică la **începutul** și la **sfârșitul** cercului. De aceea pentru N folosim <span style="color:#00A4A6;font-weight:700">or</span>.

**Încearcă tu — (8–10 min)**  
- [ ] Spui direcția pentru `100`, `200` și `350`  
- [ ] Spui de ce N are nevoie de `or`  

### 3) else if: mai multe variante
La Bila magică ai pus un <span style="color:#00A4A6;font-weight:700">if … then … else</span> **în** altul. Există o variantă mai scurtă: apeși **+** pe blocul <span style="color:#00A4A6;font-weight:700">if</span> și apare <span style="color:#00A4A6;font-weight:700">else if</span> `…` <span style="color:#00A4A6;font-weight:700">then</span>.

Placa verifică **în ordine**: primul `if`; dacă nu, primul `else if`; dacă nu, al doilea `else if`; iar dacă niciuna nu e adevărată, `else`.

<span style="color:#00A4A6;font-weight:700">if</span> `compass heading < 45 or compass heading > 315` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `N`  
<span style="color:#00A4A6;font-weight:700">else if</span> `compass heading < 135` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `E`

**Încearcă tu — (8–10 min)**  
- [ ] Ai găsit **+** pe blocul `if`  
- [ ] Ai adăugat un `else if` și un `else`  

### 4) Busola de buzunar: Minim
1. Proiect nou: `Prenume_Nume_MB2_L02`  
2. În <span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#00A4A6;font-weight:700">if</span> pentru N, două <span style="color:#00A4A6;font-weight:700">else if</span> pentru E și S și <span style="color:#00A4A6;font-weight:700">else</span> pentru V  
3. La final <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`, ca litera să nu clipească  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `compass heading < 45 or compass heading > 315` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `N`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `compass heading < 135` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `E`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `compass heading < 225` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `S`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `V`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`

**Încearcă tu — (15–20 min)**  
- [ ] Placa arată N când o îndrepți spre Nord  
- [ ] Rotești placa și litera se schimbă: E, S, V  
- [ ] Programul e pe placa adevărată  

### 5) Complet: acul de LED-uri cu map
Pe ecran avem **5 coloane** (`0`–`4`), dar busola dă numere până la `360`. Blocul <span style="color:#9C00C8;font-weight:700">map</span> le potrivește: `0`–`360` devine `0`–`4`.

La <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#1E90FF;font-weight:700">clear screen</span>, apoi <span style="color:#5C2D91;font-weight:700">plot x y</span> cu `x` = <span style="color:#9C00C8;font-weight:700">map</span> `compass heading` from `0` `360` to `0` `4` și `y` = `4`. Acul (un LED pe rândul de jos) se mută în stânga sau în dreapta, după direcție.

Ca să nu se încurce cu litera din <span style="color:#1E90FF;font-weight:700">forever</span>, folosim `ocupat` (ca la Sera inteligentă din Modulul 1).

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `ocupat = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;*(cele patru litere, ca în Minim)*  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> <span style="color:#9C00C8;font-weight:700">map</span> `compass heading` from `0` `360` to `0` `4` `4`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`

**Încearcă tu — (15–20 min)**  
- [ ] La B apare un LED pe rândul de jos  
- [ ] Rotești placa și LED-ul se mută  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Litera clipește sau nu se schimbă** — <span style="color:#1E90FF;font-weight:700">forever</span> nu are <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, sau `else if` e în loc de `else`.  
2. **N nu apare niciodată** — ai folosit `and` în loc de `or` (nimic nu e și sub `45`, și peste `315`).  
3. **Direcțiile sunt mutate** — busola nu e calibrată. Fă cercul de pe ecran.  
4. **Acul nu se mișcă** — ai uitat blocul `map` și ai pus `compass heading` direct în `plot`.  
5. **Eroare de ordine** — `else if` cu `< 225` pus înaintea celui cu `< 135`. Verifică ordinea.  
6. **Busola arată greșit lângă un telefon sau un magnet** — mută-te, magneții stricează citirea.  

---

## De făcut azi — „Busola de buzunar”
Salvat: `Prenume_Nume_MB2_L02`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — placa arată N, E, S sau V după direcție, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — un ac de LED-uri arată direcția la B, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Busola de buzunar *(Minim)*
<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `compass heading < 45 or compass heading > 315` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `N`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `compass heading < 135` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `E`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `compass heading < 225` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `S`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `V`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L02`  
- [ ] Litera se schimbă când rotești placa  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">else if</span>, <span style="color:#00A4A6;font-weight:700">else</span>, <span style="color:#00A4A6;font-weight:700">0 < 0</span>, <span style="color:#00A4A6;font-weight:700">or</span>, <span style="color:#D400D4;font-weight:700">compass heading</span>  
- [ ] Placa e calibrată; programul e trimis pe placă  

**→ Ai Minim când:** un coleg îți spune „arată-mi Estul” și placa arată E când o întorci în direcția bună.

### Pasul 2 — Acul de LED-uri *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `ocupat = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;*(cele patru litere, ca în Minim)*  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> <span style="color:#9C00C8;font-weight:700">map</span> `compass heading` from `0` `360` to `0` `4` `4`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `ocupat` to `0`

- [ ] Variabila `ocupat` pusă la `0` în <span style="color:#1E90FF;font-weight:700">on start</span>  
- [ ] Literele apar doar când `ocupat = 0`  
- [ ] La B: <span style="color:#5C2D91;font-weight:700">plot x y</span> cu <span style="color:#9C00C8;font-weight:700">map</span> la `x` și `y` = `4`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L02`  

**Gata Complet când:** la B un LED de pe rândul de jos se mută în stânga sau dreapta când rotești placa.

---

## Bonus ★★★ — Provocare: Vânătoarea de ținte
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pauza dintre litere și vezi cum se simte  
- [ ] **Provocarea:** placa alege la întâmplare o țintă (N, E, S sau V) cu <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `3` la A și o arată. Când o întorci spre ținta aleasă și o ții **cel puțin 2 secunde**, placa arată `Yes`. Un coleg găsește **3 ținte la rând în 30 de secunde**.  

## Recapitulare rapidă
1. <span style="color:#D400D4;font-weight:700">compass heading</span> dă direcția în grade: `0` = Nord, `90` = Est  
2. <span style="color:#00A4A6;font-weight:700">else if</span> adaugă variante într-un singur `if`, verificate în ordine  
3. N are nevoie de <span style="color:#00A4A6;font-weight:700">or</span>, pentru că e la **începutul** și la **sfârșitul** cercului  
4. <span style="color:#9C00C8;font-weight:700">map</span> potrivește un interval mare cu unul mic  
5. Busola trebuie calibrată și ținută departe de magneți  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
<span style="color:#1E90FF;font-weight:700">forever</span>: `< 45 sau > 315`: N · `< 135`: E · `< 225`: S · altfel: V → pauză

B → `ocupat = 1` → <span style="color:#5C2D91;font-weight:700">plot x y</span> (<span style="color:#9C00C8;font-weight:700">map</span> direcția la 0–4, 4) → pauză → `ocupat = 0`

**Quiz scurt (cu profesorul):**  
- Ce număr dă busola spre Est?  
- De ce N folosește `or`?  
- În ce ordine verifică placa un `if` cu mai multe `else if`?  
- Ce face blocul `map`?  
- De ce nu ții busola lângă un magnet?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi acul de LED-uri (Pasul 2), în același `Prenume_Nume_MB2_L02`.  
- Dacă ai Complet: desenezi pe foaie o busolă cu 8 direcții (NE, SE, SV, NV) și scrii intervalele de grade pentru fiecare.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi ținta cu o direcție aleasă de tine.  

## Ce urmează
În **Lecția 3** placa **numără pașii** cu accelerometrul: un pedometru.
