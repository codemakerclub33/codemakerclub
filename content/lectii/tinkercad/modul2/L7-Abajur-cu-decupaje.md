# Lecția 7 — Abajur cu decupaje
### Goluri repetate și rotite
**Modulul 2 · Obiecte utile**  
**Code Maker Club · Object Maker**  

> Azi faci un abajur cu **ferestre** prin care iese lumina, aranjate în jurul lui ca un model.  
> Proiect: **„Abajurul meu”**  
> Fișier: `Prenume_Nume_T2_L07` (obiectul 1) și `Prenume_Nume_T2_L07_B` (obiectul 2)


---

## Obiectiv
La finalul orei ai **două obiecte utile**: **Abajurul** și **Lampionul**.  
**Minim:** **Obiectul 1:** abajurul (tub `Ø70 × 70`, **8 ferestre** din 4 bare rotite din `45°` în `45°`) și **Obiectul 2:** lampionul (tub `Ø50 × 60`, **4 ferestre** din 2 bare rotite `90°`), ambele grupate, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: al doilea rând de ferestre decalat cu `22,5°` la abajur și culoare, cu cel puțin **6 unelte diferite**.

## De ce contează
Un model se face dintr-o formă **repetată și rotită**. Faci o bară Hole o dată, o copiezi și o rotești — iese un model simetric.  
Lumina trece **doar** prin golurile tăiate de tine.

**Siguranță:** abajurul se folosește doar cu **lumină LED** (lanternă / bec cu LED), **niciodată** cu lumânare sau bec fierbinte.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap lecția trecută · privim obiecte reale: ce părți au? |
| 10–50 | **Obiectul 1** — Abajurul (Minim) |
| 50–85 | **Obiectul 2** — Lampionul (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#00A600;font-weight:700">Hole</span> | tubul gol și barele care taie ferestrele |
| <span style="color:#E65722;font-weight:700">săgeata curbă</span> | rotește bara în pași de `22,5°` |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași rotire repetată |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | centrează bara pe tub |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică bara: de unde începe fereastra |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: barele taie tubul |
| <span style="color:#D400D4;font-weight:700">View Cube Top</span> | verifici ferestrele de sus |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Abajurul**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T2_L07`  
2. Snap Grid: **5.0 mm**

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T2_L07`

### 2) Tubul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **70 · 70 · 70**  
2. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **64 · 64 · 80** → <span style="color:#00A600;font-weight:700">Hole</span>  
3. Selectezi Hole-ul și cilindrul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe cele **trei** direcții (stânga–dreapta, față–spate, sus–jos)  
4. Hole-ul iese deasupra și dedesubt → **tub deschis la capete**, cu pereți de 3 mm  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, apoi <span style="color:#E65722;font-weight:700">D</span> — tubul (un singur corp) coboară pe plan

**Încearcă tu — Tubul (6 min)**  
- [ ] Tubul (**70 · 70 · 70**) are gol **64 · 64 · 80**  
- [ ] E deschis la capete și stă pe plan

### 3) Bara care face ferestrele
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **90 · 8 · 15** → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi bara și tubul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan  
3. Bara e mai lungă decât tubul → taie **ambii pereți** într-un singur pas  
4. Ridici bara cu <span style="color:#E65722;font-weight:700">conul negru</span> la **10 mm** de plan (scrii 10): fereastra începe la 10 mm și urcă până la 25 mm  
5. Fereastra are 15 mm înălțime; sub ea (10 mm) și deasupra ei (45 mm) rămâne perete plin

**Încearcă tu — Bara care face ferestrele (8 min)**  
- [ ] Bara (**90 · 8 · 15**, Hole) e la **10 mm** de plan  
- [ ] Taie ambii pereți dintr-o singură mișcare

### 4) Rotire și copiere
1. Selectezi bara → <span style="color:#DC143C;font-weight:700">Ctrl+D</span>  
2. Rotești copia **45°** (2 pași de câte 22,5° pe <span style="color:#E65722;font-weight:700">săgeata curbă</span>)  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> din nou — repetă aceeași rotire → a treia bară  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> încă o dată → a patra  
5. Rezultat: 4 bare la 0°, 45°, 90°, 135° → **8 ferestre** în jurul tubului

**Încearcă tu — Rotire și copiere (10 min)**  
- [ ] Ai **4** bare, la **0°, 45°, 90°, 135°**  
- [ ] În jurul tubului sunt **8** ferestre

### 5) Group + verificare
1. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
2. View Cube → <span style="color:#D400D4;font-weight:700">Top</span>: tubul gol, 8 deschideri în perete  
3. <span style="color:#D400D4;font-weight:700">Front</span>: ferestre egale, aceeași înălțime, același loc

**Încearcă tu — Group + verificare (6 min)**  
- [ ] Am parcurs toate punctele din verificare  
- [ ] Am corectat ce nu se potrivea

**Obiectul 2 — Lampionul**

### 6) Lampionul: proiect nou și tubul
1. Dai **Create new design** și scrii numele `Prenume_Nume_T2_L07_B`. Snap Grid: **5.0 mm**.  
2. Trage un <span style="color:#1E90FF;font-weight:700">Cylinder</span> **50 · 50 · 60**  
3. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> **44 · 44 · 70** → <span style="color:#00A600;font-weight:700">Hole</span>  
4. Selectezi golul și cilindrul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe cele **trei** direcții. Golul iese sus și jos: tub deschis la capete, cu pereți de `3` mm  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, apoi <span style="color:#E65722;font-weight:700">D</span>: tubul coboară pe plan  

**Încearcă tu — Lampionul: proiect nou și tubul (12 min)**  
- [ ] Tubul (**50 · 50 · 60**) are gol **44 · 44 · 70**  
- [ ] E deschis la capete și stă pe plan  

### 7) Lampionul: ferestrele și Group
1. Trage un <span style="color:#1E90FF;font-weight:700">Box</span> **70 · 8 · 30** → <span style="color:#00A600;font-weight:700">Hole</span>: bara. Selectezi bara și tubul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Ridici bara cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **10**  
2. Dacă tubul e grupat, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>. Selectezi **bara** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **90°** (`4` pași de `22,5°` pe <span style="color:#E65722;font-weight:700">săgeata curbă</span>)  
3. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. <span style="color:#D400D4;font-weight:700">Top</span>: **4** ferestre în cruce. <span style="color:#D400D4;font-weight:700">Front</span>: ferestrele au aceeași înălțime, între `10` și `40` mm  

**Încearcă tu — Lampionul: ferestrele și Group (12 min)**  
- [ ] Ai **2** bare, la **0°** și **90°**, și **4** ferestre în jurul tubului  
- [ ] După <span style="color:#DC143C;font-weight:700">Group</span>, ferestrele sunt egale, la aceeași înălțime  

**Complet**

### 8) Complet — al doilea rând
*Deschizi din nou proiectul `Prenume_Nume_T2_L07` din lista **Designs**.*

1. Dacă ai grupat deja: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe tot. Apoi <span style="color:#DC143C;font-weight:700">Ctrl+A</span> și <span style="color:#E65722;font-weight:700">Shift+click</span> pe tub (îl scoți din selecție) → rămân selectate doar cele **4 bare Hole**  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → ridici copiile cu <span style="color:#E65722;font-weight:700">conul negru</span> la **40 mm** (de la plan)  
3. Rotești copiile **22,5°** (un pas) → ferestrele de sus sunt **decalate** față de cele de jos  
4. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
5. <span style="color:#00A600;font-weight:700">Color</span>

**Încearcă tu — Complet — al doilea rând (12 min)**  
- [ ] Rândul al doilea e la **40 mm** și rotit cu **22,5°** (ferestrele sunt decalate)  
- [ ] Abajurul e colorat

---

## Greșeli frecvente
1. **Barele nu taie** — nu sunt Hole sau lipsește <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
2. **Taie doar un perete** — bara e prea scurtă. Păstrează **90 mm**, mai lungă decât tubul (70).  
3. **Ferestrele nu sunt la distanțe egale** — ai rotit fiecare copie „cu ochiul”. Șterge copiile și repetă: rotești o dată cu 45°, apoi doar <span style="color:#DC143C;font-weight:700">Ctrl+D</span>.  
4. **Tubul e plin** — Hole-ul interior nu e grupat sau e Solid.  
5. **Tubul nu e gol sus** — Hole-ul e mai scurt decât tubul. Pune **80** și centrează-l pe înălțime.  
6. **Ferestrele sunt prea mari** — pereții se rup. Păstrează cel puțin **10 mm** de plin între rânduri.
7. **Ferestrele nu se văd** — nu ai dat Group, sau ai uitat să pui bara pe Hole.  

---

## De făcut azi — „Abajurul meu”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1 și 2** — abajurul (tub `Ø70 × 70`, 8 ferestre) **și** lampionul (tub `Ø50 × 60`, 4 ferestre în cruce), cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — al doilea rând de ferestre decalat cu `22,5°`, culoare, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Abajurul *(Minim)*
- [ ] Tub **70 · 70 · 70** cu Hole **64 · 64 · 80** (deschis sus și jos)  
- [ ] Bară Hole **90 · 8 · 15** centrată, ridicată la 10 mm de plan  
- [ ] 3 copii rotite din 45° în 45° (<span style="color:#DC143C;font-weight:700">Ctrl+D</span>)  
- [ ] <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> · 8 ferestre vizibile din <span style="color:#D400D4;font-weight:700">Top</span> și <span style="color:#D400D4;font-weight:700">Front</span>

### Pasul 2 — Obiectul 2: Lampionul *(Minim)*
- [ ] Tubul (**50 · 50 · 60**) are gol **44 · 44 · 70**  
- [ ] E deschis la capete și stă pe plan  
- [ ] Ai **2** bare, la **0°** și **90°**, și **4** ferestre în jurul tubului  
- [ ] După <span style="color:#DC143C;font-weight:700">Group</span>, ferestrele sunt egale, la aceeași înălțime  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">săgeata curbă</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">D</span>  

**→ Ai Minim când:** din Top vezi ferestrele regulate la ambele obiecte, iar din Front toate sunt la aceeași înălțime.

### Pasul 3 — Complet
- [ ] Al doilea rând la 40 mm, rotit cu 22,5°  
- [ ] Ferestrele de sus **între** cele de jos (decalate)  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T2_L07` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#E65722;font-weight:700">săgeata curbă</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Gata Complet când:** al doilea rând de ferestre decalat cu 22,5°, culoare și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Abajur cu trei rânduri și capac
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și folosește ferestre rotunde (Cylinder Hole orizontal) la lampion  
- [ ] **Provocarea (obiect mai complicat):** un **abajur cu 3 rânduri** de ferestre (`8` ferestre pe rând, bare la `10`, `30` și `50` mm), **fiecare rând decalat cu `22,5°`** față de cel de dedesubt, plus un **capac** sus, cu un orificiu `Ø10` pentru cablu. Un coleg numără **24** de ferestre și vede din Top decalajul dintre rânduri.  

## Recapitulare rapidă
1. Tub = Cylinder Solid − Cylinder <span style="color:#00A600;font-weight:700">Hole</span> mai mic și mai înalt (deschis la capete)  
2. O bară Hole **mai lungă** decât tubul taie **ambii pereți**  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> repetă și **rotirea** → model regulat  
4. Rând decalat = rotire de **jumătate** de pas
5. Al doilea obiect (Lampionul) exersează aceeași idee pe alte mărimi

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** Cylinder 70·70·70 − Hole 64·64·80 → Hole 90·8·15 → Ctrl+D + 45° (×3) → Group  
**Complet:** + rând 2 la 40 mm, decalat 22,5° · Color

**Quiz scurt:**  
- De ce bara Hole e mai lungă decât tubul?  
- Câte ferestre dau 4 bare rotite la 45°?  
- Cum faci ferestrele de sus să nu fie exact deasupra celor de jos?

## Temă
Opțional: schimbă rotirea la **90°** (2 bare) — câte ferestre ies? Notează pe foaie și compară cu 45°.

## Ce urmează
În **Lecția 8** faci un **ghiveci cu farfurie** și un **ghiveci pătrat**, două piese care lucrează împreună.
