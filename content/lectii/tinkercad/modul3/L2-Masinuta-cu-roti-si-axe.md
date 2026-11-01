# Lecția 2 — Mașinuță cu roți și axe
### Piese care se rotesc cu joc și un cuplaj
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci o **mașinuță** ale cărei roți stau pe axe separate, cu joc, și o **remorcă** pe care o poți **cupla** de mașinuță.  
> Proiect: **„Mașinuța mea”**  
> Fișier: `Prenume_Nume_T3_L02` (obiectul 1) și `Prenume_Nume_T3_L02_B` (obiectul 2)

---

## Obiectiv
La finalul orei ai **două vehicule**: **Mașinuța** și **Remorca**.  
**Minim:** **Obiectul 1:** mașinuța (caroserie `80 × 36 × 12` cu 2 găuri `Ø7`, cabină `40 × 32 × 12`, 2 axe `Ø5 × 52`, 4 roți `Ø24 × 6` cu gaură `Ø7`) și **Obiectul 2:** remorca (corp `60 × 36 × 10` cu gaură `Ø7`, o axă cu 2 roți, **lance** `30 × 14 × 4` cu gaură `Ø8` pentru cui), cu roțile și axele **separate** și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** cuplajul: un **cui** `Ø6` pe mașinuță, remorca pusă pe el, distanțele măsurate cu <span style="color:#E65722;font-weight:700">Ruler</span> și culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Ca să se învârtă o roată, trebuie să aibă **loc** pe ax: gaura roții e mai mare decât axul. Spațiul acesta se numește **joc**. Azi avem joc de **1 mm pe parte**: gaura `7`, axul `5`. Același joc îl are și cuplajul: gaura `8`, cuiul `6`.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design. În Tinkercad piesele nu se învârt; vezi că **ar avea loc** să se învârtă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 · desen pe foaie: roată, ax, caroserie |
| 10–50 | **Obiectul 1** — Mașinuța (Minim) |
| 50–85 | **Obiectul 2** — Remorca (Minim) |
| 85–110 | **Complet** pe primul obiect: cuplajul |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">rotire</span> | săgeata curbă învârte piesa în pași de `22,5°`: 4 pași = `90°` |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte, la fiecare direcție |
| <span style="color:#00A600;font-weight:700">Hole</span> | găurile pentru axe și pentru cui: taie după Group |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași mutare repetată |
| <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span> | copiezi piese dintr-un proiect și le lipești în altul |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică piesa cu un număr exact de milimetri |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută piesa cu un pas de grilă (`1` sau `5` mm) |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară gaura, axul și distanța dintre piese |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Mașinuța**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T3_L02`  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  
*Mașinuța „merge” spre dreapta pe ecran, văzută din <span style="color:#D400D4;font-weight:700">Front</span>. Axele merg pe adâncime (față–spate).*

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T3_L02`  

### 2) Roata și axul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **24 · 24 · 6** *(un disc subțire)*. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **7 · 7 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi gaura și discul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — roata cu gaură în centru  
3. Rotești roata **90°** (`4` pași de câte 22,5° pe <span style="color:#E65722;font-weight:700">săgeata curbă</span>). <span style="color:#D400D4;font-weight:700">Front</span>: roata se vede ca un **cerc**? Dacă vezi o linie, mai rotește `90°` pe cealaltă săgeată. Apoi <span style="color:#E65722;font-weight:700">D</span>  
4. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **5 · 5 · 52** *(axul)*. Îl rotești la fel, până când din <span style="color:#D400D4;font-weight:700">Front</span> se vede ca un cerc mic. Apoi <span style="color:#E65722;font-weight:700">D</span>  

**Încearcă tu — Roata și axul (10 min)**  
- [ ] Roata (**24 · 24 · 6**, gaură **7 mm**) se vede ca un **cerc** din Front și stă pe plan  
- [ ] Axul (**5 · 5 · 52**) se vede ca un cerc mic din Front și stă pe plan  

### 3) Setul „ax + 2 roți”
1. Roata → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → ai 2 roți; le tragi pe amândouă **peste ax**, între capetele lui (din <span style="color:#D400D4;font-weight:700">Top</span>, axul trece prin ele)  
2. Selectezi **axul și cele două roți** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe direcția stânga–dreapta și pe înălțime  
3. Selectezi **axul** și **prima roată** → <span style="color:#E65722;font-weight:700">L</span> → pe adâncime, punctul de la **capătul din spate**. Apoi **axul** și **a doua roată** → <span style="color:#E65722;font-weight:700">L</span> → punctul de la **capătul din față**  
4. Fiecare roată stă la capătul axului, **nelipită de el**: axul trece prin gaura de `7` mm  
5. Selectezi **cele trei piese** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **50 mm** pe direcția lungimii mașinii (Snap Grid **5.0 mm**, `10` sărituri) — al doilea set  

**Încearcă tu — Setul „ax + 2 roți” (8 min)**  
- [ ] Axul trece prin gaura roților, fără să le lipească  
- [ ] Ai al doilea set „ax + 2 roți”, la **50 mm** de primul  

### 4) Caroseria
1. Selectezi **cele două seturi** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(temporar)* → le muți **60 mm** spre față (12 sărituri), ca să nu te încurci  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **80 · 36 · 12**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **7 · 7 · 40** → <span style="color:#00A600;font-weight:700">Hole</span>, rotit la fel ca axul  
3. Selectezi gaura și caroseria → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții. Muți gaura **25 mm** spre stânga (5 sărituri de câte 5 mm)  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia o muți **50 mm** spre dreapta → două găuri pentru axe  
5. Shift+click pe **caroserie și pe cele două găuri** *(nu Ctrl+A — ar prinde și roțile)* → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
6. <span style="color:#E65722;font-weight:700">D</span>, apoi o ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> cu **6 mm** (Snap Grid **1.0**): găurile ajung la **12 mm** de plan, ca axele  

**Încearcă tu — Caroseria (10 min)**  
- [ ] Caroseria are **80 · 36 · 12**, cu **2** găuri la **50 mm** una de alta  
- [ ] Găurile sunt la **12 mm** de plan, ca axele  

### 5) Axele prin caroserie și cabina
1. Selectezi grupul temporar (cele două seturi) și caroseria → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **două** direcții de pe plan — **nu** pe înălțime  
2. Selectezi grupul temporar → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>. <span style="color:#D400D4;font-weight:700">Front</span>, <span style="color:#D400D4;font-weight:700">Top</span>: axele trec prin găuri, roțile sunt în afara caroseriei  
3. <span style="color:#1E90FF;font-weight:700">Box</span> → **40 · 32 · 12** → <span style="color:#E65722;font-weight:700">L</span> cu caroseria, mijloc pe cele două direcții de pe plan. Îl ridici cu conul negru la **18 mm**, pe acoperiș  
4. Selectezi cabina și caroseria → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Axele prin caroserie și cabina (8 min)**  
- [ ] Din Front și Top, axele trec prin găuri și roțile sunt în afara caroseriei  
- [ ] Cabina (**40 · 32 · 12**) stă pe acoperiș, la **18 mm**  

**Obiectul 2 — Remorca**

### 6) Remorca: proiect nou, corpul și roțile
1. Selectezi **un set** „ax + 2 roți” din mașinuță → <span style="color:#DC143C;font-weight:700">Ctrl+C</span>. Dai **Create new design**, numele `Prenume_Nume_T3_L02_B`, Snap Grid **1.0 mm**, apoi <span style="color:#DC143C;font-weight:700">Ctrl+V</span>. *(Dacă lipirea între proiecte nu merge, refaci setul cu pașii 2 și 3.)*  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **60 · 36 · 10** *(corpul remorcii)*. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **7 · 7 · 40** → <span style="color:#00A600;font-weight:700">Hole</span>, rotit la fel ca axul  
3. Selectezi gaura și corpul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. Selectezi corpul și setul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **două** direcții de pe plan — **nu** pe înălțime  
5. <span style="color:#E65722;font-weight:700">D</span>, apoi ridici **corpul** cu <span style="color:#E65722;font-weight:700">conul negru</span> cu **7 mm**: gaura ajunge la **12 mm**, ca axul  

**Încearcă tu — Remorca: proiect nou, corpul și roțile (14 min)**  
- [ ] Corpul are **60 · 36 · 10** și o gaură **Ø7** la **12 mm** de plan  
- [ ] Axul trece prin gaură, iar roțile sunt la capete, nelipite  

### 7) Lancea cu gaura de cuplare
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **30 · 14 · 4** *(lancea)*. O tragi lângă partea **dreaptă** a corpului  
2. Selectezi lancea și corpul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe față–spate. Apoi o muți cu săgețile până când lancea intră **2 mm** în corp, iar `28` mm ies afară. Din <span style="color:#D400D4;font-weight:700">Top</span>: lancea pornește din mijlocul laturii drepte  
3. O ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> la **9 mm**  
4. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **8 · 8 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>. Selectezi gaura și lancea → <span style="color:#E65722;font-weight:700">L</span> → punctul din **dreapta** pe stânga–dreapta și mijloc pe față–spate. Apoi o muți **4 mm** spre stânga (4 apăsări, Snap Grid **1.0**): centrul găurii e la `8` mm de vârful lăncii  
5. Ridici gaura la **6 mm** cu conul negru: ea trece prin toată lancea (de la `9` la `13`)  
6. Shift+click pe **corp, lance și gaura nouă** (nu pe roți și axe) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Lancea cu gaura de cuplare (12 min)**  
- [ ] Lancea (**30 · 14 · 4**) iese `28` mm din corp, la **9 mm** de plan  
- [ ] Gaura (**Ø8**) trece prin lance, la `8` mm de vârf  

### 8) Verificare cu un cui de test
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **6 · 6 · 16** → îl pui în gaura lăncii, de sus  
2. <span style="color:#D400D4;font-weight:700">Top</span>: cuiul stă în mijlocul găurii, cu spațiu **pe toate părțile**  
3. <span style="color:#E65722;font-weight:700">Ruler</span>: gaura **8 mm**, cuiul **6 mm** → joc de `1` mm pe parte  
4. Ștergi cuiul de test (Delete). Axul și roțile rămân **separate** de corp  

**Încearcă tu — Verificare cu un cui de test (8 min)**  
- [ ] Am văzut cuiul în gaură, cu spațiu pe toate părțile  
- [ ] Cu Ruler: gaura **8 mm**, cuiul **6 mm**  

**Complet**

### 9) Complet — cuplajul pe mașinuță
*Deschizi din nou proiectul `Prenume_Nume_T3_L02` din lista **Designs**.*

1. <span style="color:#1E90FF;font-weight:700">Box</span> → **26 · 14 · 3** *(un prag pentru cui)*. Selectezi pragul și caroseria → <span style="color:#E65722;font-weight:700">L</span> → punctul din **stânga** pe stânga–dreapta și mijloc pe față–spate. Apoi îl muți **20 mm** spre stânga (4 sărituri de câte 5 mm): iese `20` mm în afară, iar `6` mm rămân sub caroserie. Îl ridici cu conul negru la **6 mm**  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **6 · 6 · 10** *(cuiul)* → <span style="color:#E65722;font-weight:700">L</span> cu pragul: punctul din **stânga** și mijloc pe față–spate. Apoi **7** apăsări spre dreapta (Snap Grid **1.0**): cuiul e la `10` mm de caroserie. Îl ridici la **9 mm**, pe prag  
3. Selectezi pragul, cuiul și caroseria → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. Revii în proiectul `Prenume_Nume_T3_L02_B`, selectezi remorca, corpul, axul și roțile → <span style="color:#DC143C;font-weight:700">Ctrl+C</span>. Înapoi în `Prenume_Nume_T3_L02` → <span style="color:#DC143C;font-weight:700">Ctrl+V</span>  
5. Muți remorca în **stânga** mașinuței, cu săgețile (întâi Snap Grid **5.0**, apoi **1.0**), până când cuiul e în **mijlocul găurii** lăncii. Din <span style="color:#D400D4;font-weight:700">Top</span>: spațiu egal pe toate părțile  
6. <span style="color:#E65722;font-weight:700">Ruler</span>: gaura **8 mm**, cuiul **6 mm**, iar între caroseria mașinuței și corpul remorcii sunt **30 mm**  
7. <span style="color:#00A600;font-weight:700">Color</span>: mașinuța o culoare, remorca alta  

**Încearcă tu — Complet — cuplajul pe mașinuță (25 min)**  
- [ ] Cuiul (**6 · 6 · 10**) stă pe prag, la `10` mm de caroserie  
- [ ] Lancea remorcii e pe cui, cu spațiu egal în jurul lui  
- [ ] Cu Ruler: **30 mm** între mașinuță și remorcă  
- [ ] Mașinuța și remorca au culori diferite  

---

## Greșeli frecvente
1. **Roata se vede ca o linie, nu ca un cerc** — mai ai de rotit 90° pe cealaltă săgeată curbă.  
2. **Roata e lipită de ax** — ai dat Group cu axul. Roțile și axele rămân **separate**.  
3. **Axul nu trece prin caroserie** — găurile nu sunt Hole, lipsește <span style="color:#DC143C;font-weight:700">Ctrl+G</span> la caroserie, sau ai aliniat și pe înălțime.  
4. **Roțile intră în caroserie** — axul e prea scurt. Păstrează **52** (36 + 2 × 8).  
5. **Roțile nu ating planul** — ai uitat <span style="color:#E65722;font-weight:700">D</span> pe prima roată. **Caroseria atinge planul** — nu ai ridicat-o cu 6 mm.  
6. **Am aliniat setul pe înălțime** — <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>; la pasul 5 aliniezi **doar** stânga–dreapta și față–spate.  
7. **Roțile s-au mutat de pe ax** — nu ai selectat axul și **ambele** roți la același <span style="color:#E65722;font-weight:700">L</span>. Refă pasul 3.  
8. **Gaura lăncii nu taie** — gaura nu e ridicată la `6` mm, deci nu ajunge la lance (`9` până la `13`), sau nu ai dat <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
9. **Cuiul nu intră în gaură** — gaura trebuie să fie `8`, cuiul `6`. Verifică cu <span style="color:#E65722;font-weight:700">Ruler</span>.  

---

## De făcut azi — „Mașinuța mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–5** — mașinuța (caroserie `80 × 36 × 12` cu 2 găuri, cabină, 2 axe, 4 roți) **și** pașii 6–8 — remorca (corp `60 × 36 × 10`, axă cu 2 roți, lance cu gaură `Ø8`), cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — cuplajul pe mașinuță, `Ruler`, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Mașinuța *(Minim)*
- [ ] Roată **24 · 24 · 6** cu Hole **7 · 7 · 10**, rotită 90°, și ax **5 · 5 · 52**  
- [ ] Două seturi „ax + 2 roți”, la **50 mm**, nelipite  
- [ ] Caroserie **80 · 36 · 12** cu 2 găuri **7 · 7 · 40**, ridicată 6 mm  
- [ ] Axele prin caroserie · cabina **40 · 32 · 12** pe ea  

### Pasul 2 — Obiectul 2: Remorca *(Minim)*
- [ ] Corp **60 · 36 · 10** cu gaură **7 · 7 · 40**, ridicat 7 mm, cu un set „ax + 2 roți”  
- [ ] Lance **30 · 14 · 4** la 9 mm, cu gaură **Ø8** la 8 mm de vârf  
- [ ] Cui de test **6 · 6 · 16** verificat cu Ruler, apoi șters  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span>  

**→ Ai Minim când:** la mașinuță roțile ar avea loc să se învârtă pe axe, iar la remorcă cuiul de test intră în gaura lăncii cu spațiu pe toate părțile.

### Pasul 3 — Complet
- [ ] Prag **26 · 14 · 3** și cui **6 · 6 · 10** pe mașinuță  
- [ ] Remorca pusă cu lancea pe cui  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: **8** și **6** mm, **30** mm între vehicule  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L02` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>, <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>  

**Gata Complet când:** remorca stă pe cuiul mașinuței, cu joc egal în jur, iar distanțele sunt verificate cu Ruler.

---

## Bonus ★★★ — Provocare: Trenul cu 2 remorci
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă un text pe corpul unei remorci  
- [ ] **Provocarea (obiect mai complicat):** în proiectul `Prenume_Nume_T3_L02`, adaugă o **a doua remorcă**, identică cu prima (copia ei, cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span>), cuplată de prima. Prima remorcă primește la spate, ca mașinuța, un **prag** `26 · 14 · 3` la `6` mm și un **cui** `6 · 6 · 10` la `10` mm de corp. Lancea celei de-a doua se pune pe acest cui, cu `30` mm între remorci. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi lungimea totală a trenului, de la fața din dreapta a mașinuței până la capătul din stânga al celei de-a doua remorci: **80 + 30 + 60 + 30 + 60 = 260 mm** (fără lance și fără prag). Un coleg poate cupla remorcile în orice ordine, fiindcă sunt identice.  

## Recapitulare rapidă
1. Roată + ax + caroserie = **3 tipuri de piese separate**  
2. Gaura mai mare decât axul = **joc** (aici `1` mm pe parte)  
3. Din **Front**, roata trebuie să fie un cerc  
4. Grupul temporar centrează seturile fără să le lipească  
5. Cuiul `Ø6` în gaura `Ø8` cuplează două vehicule  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** roată 24·24·6 − Hole 7 (rotită 90°) · ax 5·5·52 · set ax+2 roți · copie la 50 mm · caroserie 80·36·12 − 2 Hole 7·7·40 (+6 mm) · cabină 40·32·12 · remorcă: corp 60·36·10 − Hole 7·7·40 (+7 mm) + set ax+2 roți + lance 30·14·4 (la 9) − Hole 8·8·10  
**Complet:** + prag 26·14·3 și cui 6·6·10 · cuplare · Ruler · culori

**Quiz scurt:**  
- De ce gaura roții e mai mare decât axul?  
- Cu cât e mai subțire cuiul decât gaura lăncii? De ce?  
- Care sunt cele trei tipuri de piese ale mașinuței?

## Temă
Opțional: desenezi pe foaie un **camion** cu 3 axe. Câte roți are? Câte găuri are caroseria?

## Ce urmează
În **Lecția 3** faci o **morișcă de vânt** și un **ventilator**: un rotor care se învârte pe un stâlp.
