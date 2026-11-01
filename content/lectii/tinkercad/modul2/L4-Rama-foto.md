# Lecția 4 — Rama foto
### Decupaje exacte pe trei direcții
**Modulul 2 · Obiecte utile**  
**Code Maker Club · Object Maker**  

> Azi faci o ramă cu **fereastră exactă** și, dacă apuci, un loc unde se strecoară poza.  
> Proiect: **„Rama mea”**  
> Fișier: `Prenume_Nume_T2_L04` (obiectul 1) și `Prenume_Nume_T2_L04_B` (obiectul 2)


---

## Obiectiv
La finalul orei ai **două obiecte utile**: **Rama foto** și **Rama rotundă**.  
**Minim:** **Obiectul 1:** rama dreptunghiulară (placă `90 × 70 × 3`, fereastră <span style="color:#00A600;font-weight:700">Hole</span> `60 × 40`, margini egale de `15`) și **Obiectul 2:** rama rotundă (placă `Ø80 × 3`, fereastră <span style="color:#00A600;font-weight:700">Hole</span> `Ø50`, margine de `15` și un ochi de agățat `Ø4`), ambele grupate, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: strat din spate cu buzunar `70 × 50` pentru poză, culoare, <span style="color:#E65722;font-weight:700">Ruler</span>, cu cel puțin **6 unelte diferite**.

## De ce contează
O fereastră „cu ochiul” iese strâmbă. Cu <span style="color:#E65722;font-weight:700">Align</span> și numere, marginile ies **egale pe toate laturile**.  
Buzunarul din spate e o piesă făcută din **două straturi** — așa se construiesc multe obiecte reale.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap lecția trecută · privim obiecte reale: ce părți au? |
| 10–50 | **Obiectul 1** — Rama foto (Minim) |
| 50–85 | **Obiectul 2** — Rama rotundă (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#00A600;font-weight:700">Hole</span> | fereastra: taie după Group |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | centrează fereastra pe trei direcții |
| <span style="color:#1E90FF;font-weight:700">Box</span> | placa dreptunghiulară |
| <span style="color:#1E90FF;font-weight:700">Cylinder</span> | placa rotundă și fereastra rotundă |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: fereastra taie placa |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară marginile |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută ochiul de agățat cu pași de `5` mm |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Rama foto**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T2_L04`  
2. Snap Grid: **1.0 mm**

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T2_L04`

### 2) Placa
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **90 · 70 · 3** (o placă subțire)  
2. Rămâne <span style="color:#00A600;font-weight:700">Solid</span>

**Încearcă tu — Placa (6 min)**  
- [ ] Placa are **90 · 70 · 3** (Solid)

### 3) Fereastra
1. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **60 · 40 · 7** → fereastra piesei → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi Hole-ul și placa → <span style="color:#E65722;font-weight:700">L</span>  
3. Click pe punctul de **mijloc** pe fiecare din cele **trei** direcții (stânga–dreapta, față–spate, sus–jos)  
4. Hole-ul e mai gros decât placa și centrat pe înălțime → iese **2 mm sus și 2 mm jos**. *(Align poate ridica placa 2 mm de pe plan — nu-i nimic.)*  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — fereastra e tăiată  
6. Apasă <span style="color:#E65722;font-weight:700">D</span> — rama coboară pe plan

**Încearcă tu — Fereastra (10 min)**  
- [ ] Fereastra (**60 · 40 · 7**) e <span style="color:#00A600;font-weight:700">Hole</span>, centrată pe cele **trei** direcții  
- [ ] După Group și <span style="color:#E65722;font-weight:700">D</span>, rama stă pe plan, cu fereastra tăiată

### 4) Verificare
1. View Cube → <span style="color:#D400D4;font-weight:700">Top</span>: marginile sunt egale? (**15 mm** stânga–dreapta, **15 mm** sus–jos)  
2. <span style="color:#E65722;font-weight:700">Ruler</span>: pui rigla în colțul plăcii și măsori până la fereastră: o margine lungă și una scurtă — amândouă 15 mm *(Hole-ul se măsoară doar separat: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, măsori, apoi <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#E65722;font-weight:700">D</span>)*  
3. Rotești vederea: golul se vede și din spate?

**Încearcă tu — Verificare (6 min)**  
- [ ] Am parcurs toate punctele din verificare  
- [ ] Am corectat ce nu se potrivea

**Obiectul 2 — Rama rotundă**

### 5) Rama rotundă: proiect nou și fereastra
1. Dai **Create new design** și scrii numele `Prenume_Nume_T2_L04_B`. Snap Grid: **5.0 mm**.  
2. Trage un <span style="color:#1E90FF;font-weight:700">Cylinder</span> **80 · 80 · 3**: placa rotundă  
3. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> **50 · 50 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>: fereastra rotundă  
4. Selectezi fereastra și placa → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe **toate cele trei** direcții. Marginea e `(80 − 50) / 2 = 15` mm peste tot  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. View Cube → <span style="color:#D400D4;font-weight:700">Top</span>: gaura se vede, cu margine egală  

**Încearcă tu — Rama rotundă: proiect nou și fereastra (12 min)**  
- [ ] Placa are **80 · 80 · 3**, fereastra **50 · 50 · 10**, centrată  
- [ ] Marginea e de `15` mm peste tot  

### 6) Rama rotundă: ochiul de agățat
1. Dacă ai grupat deja: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>. Trage un <span style="color:#1E90FF;font-weight:700">Cylinder</span> **4 · 4 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi ochiul și placa → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe sus–jos. Apoi apeși **săgeata** spre spate de `6` ori (`6 × 5 = 30` mm): ochiul e la `10` mm de marginea de sus, în **margine**, nu în fereastră  
3. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. <span style="color:#D400D4;font-weight:700">Top</span>: ochiul nu atinge fereastra (`15` mm margine, ochiul între `8` și `12` mm de margine)  

**Încearcă tu — Rama rotundă: ochiul de agățat (10 min)**  
- [ ] Ochiul (**4 · 4 · 10**, Hole) e în margine, la `10` mm de marginea de sus  
- [ ] După <span style="color:#DC143C;font-weight:700">Group</span>, ochiul trece prin placă și nu atinge fereastra  

**Complet**

### 7) Complet — stratul din spate
*Deschizi din nou proiectul `Prenume_Nume_T2_L04` din lista **Designs**.*

1. <span style="color:#1E90FF;font-weight:700">Box</span> **90 · 70 · 3** (alt strat, la fel de mare) — îl pui **lângă** ramă, nu peste ea  
2. Hole <span style="color:#1E90FF;font-weight:700">Box</span> **70 · 50 · 7**, aliniat pe mijloc pe cele **trei** direcții cu stratul  
3. <span style="color:#DC143C;font-weight:700">Ctrl+G</span> apoi <span style="color:#E65722;font-weight:700">D</span> — un strat cu gol mai mare (70 × 50) decât fereastra (60 × 40)  
4. Ridici stratul cu 3 mm, folosind **<span style="color:#E65722;font-weight:700">conul negru</span>**, deasupra plăcii din față *(grosimea plăcii)*  
5. Selectezi ambele straturi → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan  
6. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — o ramă din două straturi

**Încearcă tu — Complet — stratul din spate (12 min)**  
- [ ] Al doilea strat are **90 · 70 · 3**, cu gol **70 · 50**  
- [ ] Straturile sunt grupate; stratul din spate e peste cel din față

### 8) Cum se folosește
*(Rama stă pe plan cu **fața în jos**; stratul cu buzunar e deasupra, pe spate.)*  
1. Poza (70 × 50) intră în **buzunarul** din stratul de sus  
2. Fereastra din față (60 × 40) lasă să se vadă poza, dar nu o lasă să cadă  
3. <span style="color:#00A600;font-weight:700">Color</span> — rama într-o culoare care se potrivește cu poza ta

**Încearcă tu — Cum se folosește (5 min)**  
- [ ] Poți spune unde intră poza (în buzunarul din stratul de sus)  
- [ ] Rama are o culoare care se potrivește cu poza

---

## Greșeli frecvente
1. **Marginile nu sunt egale** — nu ai aliniat pe mijloc. Selectezi placa și Hole-ul și apeși <span style="color:#E65722;font-weight:700">L</span>, mijloc pe ambele direcții.  
2. **Fereastra nu taie** — lipsește <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, sau Box-ul e încă Solid.  
3. **Rămâne o foiță subțire în fereastră** — Hole-ul e la fel de gros ca placa. Fă-l **mai gros** (7 mm) și centrează-l și pe înălțime.  
4. **Straturile nu se prind** — al doilea strat nu e ridicat exact 3 mm; din <span style="color:#D400D4;font-weight:700">Front</span> nu trebuie să fie gol între ele.  
5. **Buzunarul e mai mic decât fereastra** — 70 × 50 trebuie să fie **mai mare** decât 60 × 40.  
6. **Am grupat prea devreme** — Ungroup (<span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>), modifici, regrupezi.
7. **Ochiul taie fereastra** — l-ai mutat prea mult: trebuie să rămână în margine, la `10` mm de margine.  

---

## De făcut azi — „Rama mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1 și 2** — rama dreptunghiulară (`90 × 70 × 3`, fereastră `60 × 40`) **și** rama rotundă (`Ø80 × 3`, fereastră `Ø50`, ochi de agățat), cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — strat din spate cu buzunar, culoare, `Ruler`, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Rama foto *(Minim)*
- [ ] Placă **90 · 70 · 3**  
- [ ] Hole **60 · 40 · 7**, aliniat pe mijloc pe **trei** direcții  
- [ ] <span style="color:#DC143C;font-weight:700">Ctrl+G</span> + <span style="color:#E65722;font-weight:700">D</span> · golul se vede și din spate  
- [ ] Margini egale (15 mm), verificat din <span style="color:#D400D4;font-weight:700">Top</span>

### Pasul 2 — Obiectul 2: Rama rotundă *(Minim)*
- [ ] Placa are **80 · 80 · 3**, fereastra **50 · 50 · 10**, centrată  
- [ ] Marginea e de `15` mm peste tot  
- [ ] Ochiul (**4 · 4 · 10**, Hole) e în margine, la `10` mm de marginea de sus  
- [ ] După <span style="color:#DC143C;font-weight:700">Group</span>, ochiul trece prin placă și nu atinge fereastra  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+A</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>, <span style="color:#E65722;font-weight:700">mărimi cu numere</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>  

**→ Ai Minim când:** un coleg vede două rame cu ferestre centrate, margini egale, iar golul se vede din ambele părți.

### Pasul 3 — Complet
- [ ] Strat din spate **90 · 70 · 3** cu gol **70 · 50**  
- [ ] Cele două straturi unite și aliniate  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: marginea ferestrei = 15 mm · <span style="color:#00A600;font-weight:700">Color</span> · `T2_L04` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Gata Complet când:** strat din spate cu buzunar, culoare, Ruler și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Rama dublă pentru două poze
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă pe margine text cu numele tău (`1` mm)  
- [ ] **Provocarea (obiect mai complicat):** o **ramă dublă**: placă `150 × 70 × 3`, **2 ferestre** `60 × 40`, cu **toate marginile egale** pe lungime (`10` mm la stânga, între ferestre și la dreapta; `15` mm sus și jos) și **2 găuri de agățat** sus. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi cele trei margini de `10` mm; un coleg vede din Top **două** poze încadrate la fel.  

## Recapitulare rapidă
1. **Hole mai gros** decât placa, centrat pe înălțime = taie complet  
2. <span style="color:#E65722;font-weight:700">L</span> pe 3 direcții = fereastra exact la mijloc  
3. Rama cu buzunar = **2 straturi**, golul din spate **mai mare**  
4. <span style="color:#E65722;font-weight:700">Ruler</span> verifică marginile
5. Al doilea obiect (Rama rotundă) exersează aceeași idee pe alte mărimi

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** Box 90·70·3 + Hole 60·40·7 → <span style="color:#E65722;font-weight:700">L</span> (3 direcții) → Group  
**Complet:** + strat 90·70·3 cu Hole 70·50 → <span style="color:#E65722;font-weight:700">L</span> → Group · Ruler · Color

**Quiz scurt:**  
- De ce Hole-ul e mai gros decât placa?  
- Cât e marginea ramei din Minim?  
- De ce buzunarul (70 × 50) e mai mare decât fereastra (60 × 40)?

## Temă
Opțional: o ramă pentru o poză **verticală** (inversezi cele două numere) — același proiect, o copie nouă `T2_L04_v2`.

## Ce urmează
În **Lecția 5** faci o **săpunieră cu scurgere** și un **grătar** care intră în ea.
