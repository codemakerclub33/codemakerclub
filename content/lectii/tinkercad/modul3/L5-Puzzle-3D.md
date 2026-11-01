# Lecția 5 — Puzzle 3D
### Dop și locaș cu joc: un cub din 2 piese și un puzzle în șir
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci **două puzzle-uri**: un **cub** din 2 piese, cu dop și locaș, și un **puzzle plat** din 3 piese, care se potrivesc **într-un singur fel**. Între piese lași un **joc** mic, ca să intre ușor.  
> Proiect: **„Puzzle-ul meu”**  
> Fișier: `Prenume_Nume_T3_L05` (obiectul 1) și `Prenume_Nume_T3_L05_B` (obiectul 2)

---

## Obiectiv
La finalul orei ai **două puzzle-uri**: **Cubul** și **Puzzle-ul în șir**.  
**Minim:** **Obiectul 1:** cubul `40 × 40 × 40` din 2 piese (piesa A: cub `40·40·20` cu dop `16·16·10`; piesa B: cub `40·40·20` cu locaș `16,4 · 16,4`, joc `0,2` mm pe parte) și **Obiectul 2:** puzzle-ul plat din 3 plăci `40 · 30 · 8` (A cu dop `16`, B cu locaș `16,4` și dop `10`, C cu locaș `10,4`), cu piesele **separate** și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: un al doilea dop mai mic la cub, care face ca piesele să se potrivească **într-un singur fel**, și culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Ca două piese să intre una în alta, golul trebuie să fie **puțin mai mare** decât dopul. Acest spațiu se numește **joc**: aici `0,2` mm pe parte (`16` față de `16,4`). Dacă golul are exact mărimea dopului, piesele nu intră. Dacă e prea mare, se mișcă prea tare.  
Dopuri de **mărimi diferite** fac ca piesele să se potrivească doar în ordinea corectă.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4 · ce puzzle-uri cunoașteți? Cum se potrivesc piesele? |
| 10–50 | **Obiectul 1** — Cubul din 2 piese (Minim) |
| 50–85 | **Obiectul 2** — Puzzle-ul în șir (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">mărimi cu numere</span> | și zecimale (`16,4`): apeși pe un număr și scrii mărimea exactă |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte, la fiecare direcție |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică piesa cu un număr exact de milimetri |
| <span style="color:#00A600;font-weight:700">Hole</span> | locașul în care intră dopul: taie după Group |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași mutare repetată |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută piesa cu `1` sau `5` mm |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup |
| <span style="color:#E65722;font-weight:700">rotire</span> | întorci o piesă cu `180°` ca să vezi dacă se potrivește |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară dopul și locașul |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Cubul din 2 piese**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T3_L05`  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T3_L05`  

### 2) Piesa A cu dop și piesa B
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **40 · 40 · 20**. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **16 · 16 · 10** *(dopul)*  
2. Selectezi dopul și cubul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **două** direcții de pe plan. Ridici dopul cu <span style="color:#E65722;font-weight:700">conul negru</span> la **20 mm**: stă pe fața de sus a cubului  
3. Selectezi dopul și cubul → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — **piesa A**  
4. <span style="color:#1E90FF;font-weight:700">Box</span> → **40 · 40 · 20** *(piesa B)*. Selectezi B și A → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan. Ridici B cu conul negru la **20 mm**: stă exact pe A, ca un cub întreg de `40`  

**Încearcă tu — Piesa A cu dop și piesa B (12 min)**  
- [ ] Piesa A: cub **40 · 40 · 20** și dop **16 · 16 · 10** pe fața de sus, grupate  
- [ ] Piesa B (**40 · 40 · 20**) stă exact pe A, ca un cub întreg de **40**  

### 3) Locașul din B
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **16,4 · 16,4 · 12** → <span style="color:#00A600;font-weight:700">Hole</span> *(scrii zecimala cu punct sau cu virgulă, cum cere Tinkercad)*  
2. Selectezi locașul și piesa A → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **două** direcții de pe plan  
3. Ridici locașul cu conul negru la **19 mm**: taie B de la `20` mm în sus, **11 mm** adâncime, și iese **1 mm** sub B  
4. Din <span style="color:#D400D4;font-weight:700">Front</span>: locașul înconjoară dopul, cu loc pe lateral  
5. Selectezi **locașul și B** (nu și A!) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: locaș cu `0,2` mm joc pe fiecare parte  

**Încearcă tu — Locașul din B (14 min)**  
- [ ] Locașul (**16,4 · 16,4 · 12**, Hole) e la **19 mm**  
- [ ] Locașul e grupat cu **B**, nu cu A  
- [ ] Din Front, locașul înconjoară dopul, cu joc  

### 4) Separarea și verificarea
1. Selectezi B → o muți **60 mm** lateral (rămâne la aceeași înălțime, în aer — e ok): sunt acum **două** piese separate  
2. <span style="color:#D400D4;font-weight:700">Front</span>: dopul se vede la A, locașul la B. <span style="color:#E65722;font-weight:700">Ruler</span>: dopul **16 mm**, locașul **16,4 mm**  
3. Muți B **60 mm** înapoi, deasupra lui A (cum era): dopul intră în locaș  

**Încearcă tu — Separarea și verificarea (10 min)**  
- [ ] B mutată lateral: sunt **două** piese separate  
- [ ] Cu Ruler: dopul **16**, locașul **16,4**; B pusă la loc: dopul intră în locaș  

**Obiectul 2 — Puzzle-ul în șir**

### 5) Puzzle-ul în șir: proiect nou și cele 3 plăci
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L05_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**.  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **40 · 30 · 8** *(placa A)*. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **40 mm** spre dreapta (`8` apăsări): placa B. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> din nou: placa C, la **80 mm** de A  
3. Cele 3 plăci stau una lângă alta, într-un șir de `120` mm. Nu le grupa: sunt **3 piese separate**  

**Încearcă tu — Puzzle-ul în șir: proiect nou și cele 3 plăci (12 min)**  
- [ ] Ai **3** plăci **40 · 30 · 8**, în șir, la **40 mm** una de alta, negrupate  

### 6) Îmbinarea A–B: dop de 16
1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Box</span> → **9 · 16 · 8** *(dopul)* → îl tragi peste placa A → <span style="color:#E65722;font-weight:700">L</span> cu A: punctul din **dreapta** pe stânga–dreapta și mijloc pe față–spate. Apoi îl muți **7 mm** spre dreapta (`7` apăsări): intră `2` mm în A, iar `7` mm ies spre B  
2. Selectezi dopul și placa A → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
3. <span style="color:#1E90FF;font-weight:700">Box</span> → **8,4 · 16,4 · 10** → <span style="color:#00A600;font-weight:700">Hole</span> *(locașul)* → îl tragi peste placa B → <span style="color:#E65722;font-weight:700">L</span> cu B: punctul din **stânga** pe stânga–dreapta și mijloc pe față–spate. Îl cobori cu conul negru cu **1 mm**: taie prin toată placa  
4. Selectezi locașul și placa B → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Îmbinarea A–B: dop de 16 (12 min)**  
- [ ] A are dopul (**9 · 16 · 8**), care iese `7` mm din ea  
- [ ] B are locașul (**8,4 · 16,4 · 10**, Hole), care trece prin placă  

### 7) Îmbinarea B–C: dop de 10 și verificare
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **9 · 10 · 8** *(dopul mai mic)* → îl tragi peste placa B → <span style="color:#E65722;font-weight:700">L</span>: punctul din **dreapta** pe stânga–dreapta și mijloc pe față–spate. Îl muți **7 mm** spre dreapta (`7` apăsări)  
2. Selectezi dopul și placa B (care are deja locașul) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
3. <span style="color:#1E90FF;font-weight:700">Box</span> → **8,4 · 10,4 · 10** → <span style="color:#00A600;font-weight:700">Hole</span> → îl tragi peste placa C → <span style="color:#E65722;font-weight:700">L</span>: punctul din **stânga** și mijloc pe față–spate → îl cobori cu conul negru cu **1 mm**. Selectezi locașul și C → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → muți plăcile `A` și `B` împreună **15 mm** spre stânga, apoi `C` **15 mm** spre dreapta: le vezi separate. Apoi le pui la loc: dopurile intră în locașuri  
5. Test: dopul mare (`16`) **nu** intră în locașul mic (`10,4`). Cu <span style="color:#E65722;font-weight:700">Ruler</span>: `16` față de `10,4`. Ordinea corectă e doar **A, B, C**  

**Încearcă tu — Îmbinarea B–C: dop de 10 și verificare (10 min)**  
- [ ] B are dopul (**9 · 10 · 8**), iar C are locașul (**8,4 · 10,4 · 10**)  
- [ ] Cu plăcile la loc, cele două dopuri intră în locașuri  
- [ ] Am verificat că dopul de `16` nu intră în locașul de `10,4`  

**Complet**

### 8) Complet — al doilea dop și culori
*Deschizi din nou proiectul `Prenume_Nume_T3_L05` din lista **Designs**.*

1. Piesa A → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> *(desfaci cubul și dopul)*  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **8 · 8 · 10** *(dopul mic)* → îl tragi peste cubul A → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan  
3. Îl muți **14 mm** spre dreapta (Snap Grid **1.0**) și îl ridici la **20 mm**  
4. Selectezi cubul A și cele două dopuri → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — piesa A nouă  
5. Piesa B → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>; locaș nou **8,4 · 8,4 · 12** (<span style="color:#00A600;font-weight:700">Hole</span>) → <span style="color:#E65722;font-weight:700">L</span> cu cubul B → mijloc pe cele două direcții de pe plan → îl muți **14 mm** spre dreapta (la fel ca dopul mic) → îl ridici la **19 mm**  
6. Selectezi B, locașul mare și locașul mic → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
7. <span style="color:#00A600;font-weight:700">Color</span>: A o culoare, B alta  
8. Rotești B cu **180°** (pe loc, săgeata de sus): dopul mic nu mai are locaș — piesele se potrivesc **într-un singur fel**  

**Încearcă tu — Complet — al doilea dop și culori (25 min)**  
- [ ] Al doilea dop (**8 · 8 · 10**) e la **14 mm** de centru, la **20 mm** înălțime  
- [ ] Locașul mic (**8,4**) e în B, la **14 mm**  
- [ ] Cu B rotită **180°**, dopul mic nu mai intră: piesele se potrivesc într-un singur fel  
- [ ] A și B au culori diferite  

---

## Greșeli frecvente
1. **Piesa B e lipită de A** — ai selectat și A la Group. Locașul se grupează **doar** cu B.  
2. **Locașul nu taie** — nu e Hole, sau nu ai dat Group.  
3. **Dopul nu intră** — locașul e prea mic. Folosește `16,4`, nu `16`.  
4. **Joc prea mare** — dacă faci `20`, piesele se mișcă prea tare. `16,4` e potrivit.  
5. **Dopul e lipit de piesa B** — A și B trebuie să fie separate; B se mută singură.  
6. **Locașul e mai adânc decât B** — nu strica A; verifică din <span style="color:#D400D4;font-weight:700">Front</span> că locașul începe la `19` mm și are `11` mm adâncime în B.  
7. **La al doilea dop piesa nu se potrivește** — locașul mic nu e la `14` mm de centru, ca dopul mic, sau nu e la `19` mm înălțime.  
8. **Plăcile puzzle-ului s-au lipit** — ai grupat și plăcile între ele. Grupezi doar fiecare placă cu dopul sau locașul ei.  
9. **Dopul de 9 mm nu iese afară** — nu l-ai mutat cu `7` mm spre dreapta după <span style="color:#E65722;font-weight:700">L</span>.  

---

## De făcut azi — „Puzzle-ul meu”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–4** — cubul din 2 piese (A cu dop `16`, B cu locaș `16,4`, piesele separate) **și** pașii 5–7 — puzzle-ul din 3 plăci `40 · 30 · 8`, cu dopuri de `16` și `10` și locașuri de `16,4` și `10,4`, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — al doilea dop la cub, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Cubul *(Minim)*
- [ ] Piesa A: cub **40 · 40 · 20** + dop **16 · 16 · 10** la `20`, grupate  
- [ ] Piesa B: cub **40 · 40 · 20** + locaș **16,4 · 16,4 · 12** la `19`, grupate  
- [ ] A și B separate; dopul intră în locaș  

### Pasul 2 — Obiectul 2: Puzzle-ul în șir *(Minim)*
- [ ] **3** plăci **40 · 30 · 8**, în șir, negrupate  
- [ ] A cu dop **9 · 16 · 8**; B cu locaș **8,4 · 16,4 · 10** și dop **9 · 10 · 8**; C cu locaș **8,4 · 10,4 · 10**  
- [ ] Ordinea **A, B, C** se potrivește, iar dopul de `16` nu intră în locașul de `10,4`  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#E65722;font-weight:700">mărimi cu numere</span>  

**→ Ai Minim când:** un coleg potrivește piesele la ambele puzzle-uri: cubul din 2 piese și plăcile A, B, C, în ordine.

### Pasul 3 — Complet
- [ ] Al doilea dop **8 · 8 · 10** la `14` mm de centru, locaș **8,4** în B  
- [ ] Cu B rotită `180°`, piesele nu mai intră  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L05` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#00A600;font-weight:700">Color</span>  

**Gata Complet când:** piesele cubului se potrivesc într-un singur fel, iar A și B au culori diferite.

---

## Bonus ★★★ — Provocare: Cub din 3 straturi
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și gravează un text mic pe o față (Hole, `1` mm adâncime)  
- [ ] **Provocarea (obiect mai complicat):** în proiectul `Prenume_Nume_T3_L05_C`, un **cub de `40 · 40 · 60`** din **3 straturi** `40 · 40 · 20`, care se montează într-o singură ordine. Stratul de jos are dop `16 · 16 · 10`, stratul de mijloc are locaș `16,4` jos și dop `8 · 8 · 10` sus, la `14` mm de centru, iar stratul de sus are locaș `8,4` la `14` mm de centru. Straturile rămân **separate**. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi înălțimea cubului (`60` mm) și jocul (`16` față de `16,4`, `8` față de `8,4`). Un coleg încearcă să pună stratul de sus întors cu `180°`: nu intră.  

## Recapitulare rapidă
1. Locașul e **puțin mai mare** decât dopul: asta e jocul  
2. Locașul se grupează **doar** cu piesa în care intră  
3. Piesele rămân **separate**  
4. Dopuri de mărimi diferite dau **o singură ordine** de montaj  
5. Rotirea cu `180°` arată dacă piesele se potrivesc într-un singur fel  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** A: cub 40·40·20 + dop 16·16·10 · B: cub 40·40·20 − locaș 16,4·16,4·12 (la 19) · plăci 40·30·8: A + dop 9·16·8 · B − locaș 8,4·16,4·10 + dop 9·10·8 · C − locaș 8,4·10,4·10  
**Complet:** + dop 8·8·10 și locaș 8,4 (la 14 mm) · culori

**Quiz scurt:**  
- De ce locașul are `16,4`, nu `16`?  
- Cu cât e mai mare locașul decât dopul, pe fiecare parte?  
- De ce dopul de `16` nu intră în locașul de `10,4`?

## Temă
Opțional: desenezi pe foaie un puzzle din **4** piese și marchezi ce dop intră în ce locaș.

## Ce urmează
În **Lecția 6** faci un **set de piese de șah** și o **tablă mică**: piese pe baze identice, care stau în locașuri cu joc.
