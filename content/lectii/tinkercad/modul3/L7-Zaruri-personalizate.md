# Lecția 7 — Zaruri personalizate
### Precizie, simetrie și o cutie în care zarurile stau cu joc
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci un **zar** cu puncte pe toate cele 6 fețe, unde fețele opuse dau **7**, și o **cutie cu capac** pentru două zaruri, în care zarurile stau cu joc.  
> Proiect: **„Zarul meu”**  
> Fișier: `Prenume_Nume_T3_L07` (obiectul 1) și `Prenume_Nume_T3_L07_B` (obiectul 2)

---

## Obiectiv
La finalul orei ai **două obiecte**: **Zarul** și **Cutia pentru zaruri**.  
**Minim:** **Obiectul 1:** zarul (cub `40 × 40 × 40`, puncte `Ø6` adânci de `2` mm, **1** opus lui **6**, **2** opus lui **5**, **3** opus lui **4**, puncte aranjate simetric la `10` mm) și **Obiectul 2:** cutia pentru 2 zaruri (cutie `87 × 47 × 48` cu gol `81 × 41`, capac cu placă `87 × 47 × 4` și dop `80 × 40 × 4`, joc de `0,5` mm pe parte), cu zarurile și capacul **separate** de cutie și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: un **al doilea zar** în altă culoare și verificarea că fiecare pereche de fețe dă **7**, cu cel puțin **6 unelte diferite**.

## De ce contează
Un zar trebuie să fie **simetric**: toate punctele la aceleași distanțe, ca nicio față să nu arate mai „grea” decât alta. Fețele opuse dau mereu **7** (`1 + 6`, `2 + 5`, `3 + 4`).  
Cutia învață aceeași regulă ca la lecțiile trecute: golul e **puțin mai mare** decât ce intră în el. Zarul are `40`, golul `41`: joc de `0,5` mm pe parte.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6 · privim un zar real: ce număr e opus lui 1? |
| 10–50 | **Obiectul 1** — Zarul (Minim) |
| 50–85 | **Obiectul 2** — Cutia pentru zaruri (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#00A600;font-weight:700">Hole</span> | punctele zarului și golul cutiei: taie după Group |
| <span style="color:#E65722;font-weight:700">Snap Grid</span> și <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută piesa cu `10` mm (2 apăsări de `5`) |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași mutare repetată |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte, la fiecare direcție |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică sau coboară piesa cu un număr exact de milimetri |
| <span style="color:#E65722;font-weight:700">rotire</span> | culcă grupul de puncte pe altă față |
| <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span> | copiezi zarul în proiectul cutiei |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară zarul și golul |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Zarul**

### 1) Proiect nou, cubul și un punct
1. **Create new design** · nume `Prenume_Nume_T3_L07`  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm** *(pentru adâncimi)*. <span style="color:#1E90FF;font-weight:700">Box</span> → **40 · 40 · 40**  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **6 · 6 · 4** → <span style="color:#00A600;font-weight:700">Hole</span> *(punctul)*. Îl pui deasupra cubului: <span style="color:#E65722;font-weight:700">L</span> cu cubul → mijloc pe cele două direcții de pe plan și punctul de **sus**. Îl ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> cu **2 mm**: taie `2` mm adâncime în fața de sus  
4. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **5.0 mm** *(pentru mutări de 10 mm; rămâne așa până la sfârșit)*  

**Unde pui punctele** *(față de centrul feței, în mm: dreapta/stânga, spate/față)*

| Număr | Puncte |
|-------|--------|
| 1 | (0, 0) |
| 2 | (−10, −10) · (10, 10) |
| 3 | (−10, −10) · (0, 0) · (10, 10) |
| 4 | (−10, −10) · (−10, 10) · (10, −10) · (10, 10) |
| 5 | cele 4 colțuri de la „4” + (0, 0) |
| 6 | (−10, −10) · (−10, 0) · (−10, 10) · (10, −10) · (10, 0) · (10, 10) |

*(Orice punct nou: <span style="color:#DC143C;font-weight:700">Ctrl+D</span> pe un punct, apoi îl muți cu Snap Grid 5.0 mm — 2 sărituri = 10 mm.)*

**Încearcă tu — Proiect nou, cubul și un punct (6 min)**  
- [ ] Cubul are **40 · 40 · 40**  
- [ ] Punctul (**6 · 6 · 4**, Hole) taie **2 mm** în fața de sus  

### 2) Perechea 1–6 (sus 1, jos 6)
1. Punctul din pasul 1 = fața **1** (în centru)  
2. Pentru fața **6** (jos): <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia o cobori cu conul negru cu **40 mm** (`8` sărituri): ajunge la **−2 mm**, taie `2` mm în fața de jos  
3. Îl muți **10 mm** spre stânga și **10 mm** spre față (2 sărituri fiecare): primul punct din colț. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți **10 mm** spre spate → al doilea punct. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → încă **10 mm** spre spate → al treilea punct  
4. Selectezi cele trei puncte → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copiile **20 mm** spre dreapta → **6** puncte jos  
5. Selectezi **cele 7 puncte** (1 sus + 6 jos) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: o „pereche” de găuri într-un singur Group  
6. Din <span style="color:#D400D4;font-weight:700">Front</span>: un punct sus, șase jos. Muți perechea **60 mm deoparte** pe plan, ca să nu te încurce  

**Încearcă tu — Perechea 1–6 (10 min)**  
- [ ] Perechea **1–6**: un punct sus și **6** jos, la pozițiile din tabel  
- [ ] Cele **7** puncte sunt grupate  

### 3) Perechea 2–5
1. Un punct nou **6 · 6 · 4** (<span style="color:#00A600;font-weight:700">Hole</span>), făcut ca în pasul 1 (sus, `+2` mm)  
2. Fața de sus = **2**: pui punctele din tabel (<span style="color:#DC143C;font-weight:700">Ctrl+D</span> + mutare)  
3. Fața de jos = **5**: aceleași puncte, copiate și coborâte cu **40 mm** (`8` sărituri), la pozițiile din tabel  
4. Selectezi cele 7 puncte → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: perechea 2–5  
5. Rotești grupul **90°** (`4` pași de câte 22,5°, săgeata curbă care îl culcă): acum cele două fețe sunt **stânga** și **dreapta**. Muți perechea **60 mm deoparte**, în altă direcție  

**Încearcă tu — Perechea 2–5 (8 min)**  
- [ ] Perechea **2–5** e făcută după tabel și rotită **90°**  

### 4) Perechea 3–4
1. Sus = **3** și jos = **4**, după tabel, făcute ca la perechea 2–5  
2. Selectezi cele 7 puncte → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
3. Rotești `90°` pe **cealaltă** săgeată curbă: fețele sunt acum **față** și **spate**. Muți perechea **60 mm deoparte**, în altă direcție  

**Încearcă tu — Perechea 3–4 (6 min)**  
- [ ] Perechea **3–4** e făcută după tabel și rotită **90°** pe cealaltă săgeată  

### 5) Zarul gata
1. Selectezi **cubul și toate cele 3 perechi** (4 obiecte) → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții, **o singură dată** *(așa nu rămâne nicio pereche în urmă)*  
2. Selectezi **cubul** și cele **3 perechi** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
3. Rotești vederea: 1 opus 6, 2 opus 5, 3 opus 4. Adunate două câte două: **7**  

**Încearcă tu — Zarul gata (10 min)**  
- [ ] Cubul și cele **3** perechi sunt centrate dintr-o singură dată și grupate  
- [ ] 1 e opus lui 6, 2 opus lui 5, 3 opus lui 4  

**Obiectul 2 — Cutia pentru zaruri**

### 6) Cutia: proiect nou, cutia și golul
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L07_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**.  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **87 · 47 · 48** *(cutia)*. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **81 · 41 · 48** → <span style="color:#00A600;font-weight:700">Hole</span> *(golul)*  
3. Îl tragi peste cutie → <span style="color:#E65722;font-weight:700">L</span> cu cutia → mijloc pe cele două direcții de pe plan. Apoi îl ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> la **3 mm**: fundul are `3` mm, iar golul iese deasupra  
4. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. <span style="color:#D400D4;font-weight:700">Front</span>: fundul e de `3` mm, pereții de `3` mm  

**Încearcă tu — Cutia: proiect nou, cutia și golul (12 min)**  
- [ ] Cutia are **87 · 47 · 48**, cu gol **81 · 41** ridicat la **3 mm**  
- [ ] Fundul și pereții au **3 mm**  

### 7) Capacul cu dop
*Atenție la <span style="color:#E65722;font-weight:700">Align</span>: mută **ambele** piese spre mijlocul lor. Ca cutia să rămână pe loc, trage forma nouă **peste** ea înainte de <span style="color:#E65722;font-weight:700">L</span>.*

1. <span style="color:#1E90FF;font-weight:700">Box</span> → **87 · 47 · 4** *(placa capacului)* → o tragi peste cutie → <span style="color:#E65722;font-weight:700">L</span> cu cutia → mijloc pe cele două direcții de pe plan. O ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> la **48 mm**: stă pe marginea cutiei  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **80 · 40 · 4** *(dopul)* → îl tragi peste cutie → <span style="color:#E65722;font-weight:700">L</span> cu cutia → mijloc pe cele două direcții. Îl ridici la **45 mm**: `3` mm intră în gol, iar `1` mm se înfige în placă  
3. Selectezi placa și dopul → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: **capacul**. Rămâne separat de cutie  
4. Dopul (`80 × 40`) e cu `1` mm mai mic decât golul (`81 × 41`): joc de `0,5` mm pe parte  

**Încearcă tu — Capacul cu dop (10 min)**  
- [ ] Placa (**87 · 47 · 4**) stă pe marginea cutiei, la **48 mm**  
- [ ] Dopul (**80 · 40 · 4**) e la **45 mm**, în gol, cu **1 mm** mai mic decât golul  

### 8) Zarurile în cutie și capacul pus
1. În proiectul `Prenume_Nume_T3_L07` selectezi zarul → <span style="color:#DC143C;font-weight:700">Ctrl+C</span>. Revii în `Prenume_Nume_T3_L07_B` → <span style="color:#DC143C;font-weight:700">Ctrl+V</span>. *(Dacă lipirea între proiecte nu merge, refaci zarul cu pașii 1–5.)*  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → zarul → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **40 mm** (`8` apăsări): 2 zaruri lipite. Selectezi cele două zaruri → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(temporar)*  
3. Selectezi grupul de zaruri și cutia → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan. Ridici zarurile cu conul negru la **3 mm**: stau pe fundul cutiei, cu `0,5` mm joc pe fiecare parte  
4. Selectezi grupul de zaruri → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>: zarurile sunt din nou **separate**  
5. <span style="color:#D400D4;font-weight:700">Front</span>: zarurile în cutie, capacul deasupra, cu dopul înăuntru. <span style="color:#E65722;font-weight:700">Ruler</span>: golul **81 × 41**, cele două zaruri **80 × 40**  

**Încearcă tu — Zarurile în cutie și capacul pus (12 min)**  
- [ ] Cele **2** zaruri stau pe fundul cutiei, separate de ea  
- [ ] Capacul stă pe cutie, cu dopul în gol, fără să atingă zarurile (dopul la `45` mm, zarurile până la `43`)  
- [ ] Cu Ruler: golul **81 × 41**, zarurile **80 × 40**  

**Complet**

### 9) Complet — al doilea zar și suma 7
*Deschizi din nou proiectul `Prenume_Nume_T3_L07` din lista **Designs**.*

1. Zarul → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **60 mm** lateral  
2. <span style="color:#00A600;font-weight:700">Color</span>: un zar o culoare, celălalt alta  
3. Spui pe rând, pe fiecare zar: 1+6, 2+5, 3+4 → toate dau **7**  

**Încearcă tu — Complet — al doilea zar și suma 7 (25 min)**  
- [ ] Ai **2** zaruri, de culori diferite  
- [ ] Pe fiecare zar, fețele opuse dau **7**  

---

## Greșeli frecvente
1. **Punctele nu taie** — nu sunt Hole, sau nu ai dat <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
2. **Punctele iau toată fața** — Hole-ul e prea înalt sau nu e ridicat cu `2` mm. Fața trebuie să rămână plină, cu goluri mici.  
3. **Nu știu pe ce față sunt** — perechile se fac pe rând și se rotesc `90°`. Verifică din <span style="color:#D400D4;font-weight:700">View Cube</span>.  
4. **Punctele nu sunt simetrice** — ai mutat „cu ochiul”. Folosește <span style="color:#DC143C;font-weight:700">Ctrl+D</span> cu aceeași mutare (`10` mm).  
5. **Perechile nu sunt centrate** — selectezi cubul și toate cele 3 perechi și dai <span style="color:#E65722;font-weight:700">L</span> o singură dată.  
6. **Zarul nu intră în cutie** — golul trebuie să fie `81 × 41`, zarul `40`: joc de `0,5` mm pe parte.  
7. **Cutia nu are fund** — golul nu e ridicat la `3` mm, deci a tăiat tot.  
8. **Capacul nu se închide** — dopul trebuie să fie `80 × 40`, mai mic decât golul `81 × 41`.  
9. **Capacul intră în cutie sau nu o acoperă** — placa trebuie să fie la `48` mm (pe margine), iar dopul la `45` mm.  

---

## De făcut azi — „Zarul meu”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–5** — zarul `40 × 40 × 40` cu puncte `Ø6` pe cele 6 fețe, fețele opuse dau 7 **și** pașii 6–8 — cutia `87 × 47 × 48` pentru 2 zaruri, cu capac cu dop `80 × 40 × 4`, cu zarurile și capacul separate, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — al doilea zar, culori, verificarea sumei 7, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Zarul *(Minim)*
- [ ] Cub **40 · 40 · 40**, puncte **6 · 6 · 4** (Hole) adânci de `2` mm  
- [ ] Perechile **1–6**, **2–5**, **3–4**, câte `7` puncte grupate, la pozițiile din tabel  
- [ ] Toate centrate dintr-o dată și grupate; 1+6, 2+5, 3+4 dau `7`  

### Pasul 2 — Obiectul 2: Cutia *(Minim)*
- [ ] Cutie **87 · 47 · 48** cu gol **81 · 41 · 48** (Hole) la `3` mm  
- [ ] Capac: placă **87 · 47 · 4** la `48` și dop **80 · 40 · 4** la `45`, grupate  
- [ ] 2 zaruri în cutie, separate; capacul pe cutie, dopul în gol  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span>  

**→ Ai Minim când:** zarul are puncte simetrice, iar cele două zaruri intră în cutie, cu capacul închis și joc egal în jur.

### Pasul 3 — Complet
- [ ] Al doilea zar la `60` mm de primul  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L07` e corect  
- [ ] Pe fiecare zar, fețele opuse dau `7`  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">rotire</span>  

**Gata Complet când:** ai 2 zaruri de culori diferite, iar la fiecare pereche de fețe opuse suma e 7.

---

## Bonus ★★★ — Provocare: Zaruri rotunjite și cutie pentru 3
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și fă un zar cu **litere** în loc de puncte (Text Hole)  
- [ ] **Provocarea (obiect mai complicat):** în proiectul `Prenume_Nume_T3_L07_C`, **3 zaruri rotunjite**: la cub setezi **Radius** `4` în fereastra piesei (Properties), cu aceleași puncte `Ø6` adânci de `2` mm. Apoi o **cutie pentru 3 zaruri**: cutie `127 × 47 × 48`, gol `121 × 41 × 48` la `3` mm, capac cu placă `127 × 47 × 4` la `48` și dop `120 × 40 × 4` la `45`. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi golul (`121 × 41`), zarurile (`3 × 40 = 120`) și dopul (`120 × 40`). Un coleg pune cele 3 zaruri în cutie și închide capacul.  

## Recapitulare rapidă
1. Fețele opuse ale unui zar dau **7**  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> cu aceeași mutare dă puncte **simetrice**  
3. Punctele sunt <span style="color:#00A600;font-weight:700">Hole</span> și taie doar după <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. Golul cutiei (`81 × 41`) e puțin mai mare decât zarurile (`80 × 40`): joc de `0,5` mm pe parte  
5. Zarurile și capacul rămân **separate** de cutie  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** cub 40³ − puncte 6·6·4 (2 mm adâncime): 1/6, 2/5, 3/4 · cutie 87·47·48 − gol 81·41·48 (la 3) · capac: placă 87·47·4 (la 48) + dop 80·40·4 (la 45)  
**Complet:** + al doilea zar · culori

**Quiz scurt:**  
- Ce număr e opus lui 3?  
- De ce golul cutiei are `81 × 41`, nu `80 × 40`?  
- Cum faci puncte la distanțe egale?

## Temă
Opțional: desenezi pe foaie un zar cu **8** fețe: ce perechi dau **9**?

## Ce urmează
În **Lecția 8** faci o **fortăreață cu pod mobil** și o **poartă cu 2 canaturi**: piese care se mișcă pe axe, cu joc.
