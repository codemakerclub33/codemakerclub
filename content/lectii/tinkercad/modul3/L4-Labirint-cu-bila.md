# Lecția 4 — Labirint cu bilă
### Culoare cu joc pentru o bilă: un labirint pătrat și unul rotund
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci **două labirinturi** pentru o bilă: unul **pătrat**, cu pereți alternanți, și unul **rotund**, cu inele. Culoarele sunt mai late decât bila, ca ea să treacă.  
> Proiect: **„Labirintul meu”**  
> Fișier: `Prenume_Nume_T3_L04` (obiectul 1) și `Prenume_Nume_T3_L04_B` (obiectul 2)

---

## Obiectiv
La finalul orei ai **două labirinturi cu bilă**: **Labirintul pătrat** și **Labirintul rotund**.  
**Minim:** **Obiectul 1:** labirintul pătrat (placă `100 × 100 × 4` cu cadru de `3` mm, **3 pereți** `75 × 3 × 10` alternanți la `25` mm, culoar de `22` mm, start, final, bilă `Ø10`) și **Obiectul 2:** labirintul rotund (placă `Ø100 × 4` cu cadru, **2 inele** `Ø60` și `Ø26` cu câte o deschidere de `14` mm, start, final, bilă `Ø10`), ambele grupate, cu bila **separată** și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: **2 pinteni** la labirintul pătrat, drumul verificat cu degetul și culoarele măsurate cu <span style="color:#E65722;font-weight:700">Ruler</span>, culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Un labirint bun nu e doar desenat: culoarele trebuie să fie **mai late decât bila**. Bila are `10` mm, iar culoarele `22`, `16` sau `14` mm. Aici planifici **înainte** de construcție, cu un plan și cu numere.  
La labirintul rotund înveți că o **deschidere** se face cu un <span style="color:#00A600;font-weight:700">Hole</span> care taie prin perete.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3 · privim un labirint și urmărim drumul bilei |
| 10–42 | **Obiectul 1** — Labirintul pătrat (Minim) |
| 42–70 | **Obiectul 2** — Labirintul rotund (Minim) |
| 70–85 | **Complet** pe primul obiect |
| 85–110 | **Bonus ★★★** — labirintul cu patru pereți și capac, pe trepte (fiecare merge cât apucă) |
| 110–120 | Recap, quiz, galerie |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte (marginea stângă, față, mijloc) |
| <span style="color:#E65722;font-weight:700">Snap Grid</span> și <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută piesa din `5` în `5` mm: pereți la distanțe exacte |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași mutare repetată |
| <span style="color:#00A600;font-weight:700">Hole</span> | golul cadrului și deschiderile inelelor: taie după Group |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică piesa pe placă, cu `4` mm |
| <span style="color:#1E90FF;font-weight:700">Sphere</span> | bila de `Ø10` |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară culoarul față de bilă |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Labirintul pătrat**

### 1) Proiect nou și planul
1. **Create new design** · nume `Prenume_Nume_T3_L04`  
2. Îți faci planul în minte: pătratul de `100 × 100`, **3 pereți** orizontali, iar drumul merge **în zigzag** de jos în sus. Îl spui colegului  
3. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  

**Încearcă tu — Proiect nou și planul (5 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T3_L04`  
- [ ] Știi planul: pătrat `100 × 100`, **3** pereți și drum în zigzag  

### 2) Placa și cadrul
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **100 · 100 · 4** *(placa)*. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **100 · 100 · 10** *(cadrul, încă plin)*  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **94 · 94 · 14** → <span style="color:#00A600;font-weight:700">Hole</span>. Selectezi Hole-ul și cadrul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: un inel cu pereți de `3` mm  
3. Selectezi placa și inelul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan  
4. <span style="color:#E65722;font-weight:700">D</span> pe inel, apoi îl ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> cu **4 mm**: stă **pe** placă, nu în ea  
5. <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: placă cu cadru, iar pereții se văd `10` mm deasupra podelei  
*Atenție la <span style="color:#E65722;font-weight:700">Align</span>: mută **ambele** piese spre mijlocul lor. Ca placa să rămână pe loc, trage forma nouă **peste** ea înainte de <span style="color:#E65722;font-weight:700">L</span>.*

**Încearcă tu — Placa și cadrul (8 min)**  
- [ ] Placa (**100 · 100 · 4**) are cadrul (inel cu pereți de **3 mm**)  
- [ ] Cadrul stă **pe** placă, la `4` mm  

### 3) Cei 3 pereți interiori
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **75 · 3 · 10** *(primul perete)*. Selectezi peretele și placa → <span style="color:#E65722;font-weight:700">L</span> → punctul din **stânga** (marginea stângă) și punctul de la **marginea din față**. Îl ridici cu conul negru cu **4 mm**  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0 mm** → muți peretele **25 mm** spre spate (`5` apăsări): culoarul de jos are `22` mm  
3. Primul perete → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia încă **25 mm** spre spate. Apoi <span style="color:#E65722;font-weight:700">L</span> cu placa → punctul din **dreapta**: peretele se lipește de dreapta, golul rămâne în stânga  
4. Primul perete → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **50 mm** spre spate → al treilea perete, lipit de stânga  
5. Din <span style="color:#D400D4;font-weight:700">Top</span>: pereții alternează — gol la dreapta, gol la stânga, gol la dreapta  

**Încearcă tu — Cei 3 pereți interiori (10 min)**  
- [ ] Primul perete (**75 · 3 · 10**) e lipit de stânga, la **25 mm** de față  
- [ ] Pereții alternează: gol la dreapta, la stânga, la dreapta  

### 4) Start, final și bila
1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm** → <span style="color:#1E90FF;font-weight:700">Box</span> → **12 · 12 · 1** *(marcaj de start)*. Selectezi marcajul și placa → <span style="color:#E65722;font-weight:700">L</span> → punctul din **stânga** și punctul din **față**. Apoi îl muți **5 mm** spre dreapta și **5 mm** spre spate  
2. Îl ridici cu conul negru la **4 mm** (suprafața plăcii): stă pe ea  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → marcajul de final: la fel, dar în colțul din **stânga-spate** (margini: stânga și spate; `5` mm spre dreapta și `5` mm spre față)  
4. <span style="color:#00A600;font-weight:700">Color</span>: start verde, final roșu  
5. <span style="color:#1E90FF;font-weight:700">Sphere</span> → **10 · 10 · 10** → <span style="color:#E65722;font-weight:700">L</span> cu marcajul de start (mijloc pe cele două direcții de pe plan) → o ridici cu conul negru la **5 mm**  
6. <span style="color:#DC143C;font-weight:700">Ctrl+A</span>, apoi Shift+click pe **bilă** (o scoți din selecție) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Start, final și bila (9 min)**  
- [ ] Start-ul e în colțul din față (verde), iar final-ul în colțul din spate (roșu)  
- [ ] Bila (**10 mm**) stă pe marcajul de start și rămâne **în afara grupului**  

**Obiectul 2 — Labirintul rotund**

### 5) Labirintul rotund: proiect nou, placa și cadrul
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L04_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**.  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **100 · 100 · 4** *(placa rotundă)*. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **100 · 100 · 10** *(cadrul, încă plin)*  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **94 · 94 · 14** → <span style="color:#00A600;font-weight:700">Hole</span>. Selectezi Hole-ul și cadrul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. Selectezi placa și inelul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan. Inelul → <span style="color:#E65722;font-weight:700">D</span> → îl ridici cu conul negru cu **4 mm** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
*Și aici: trage fiecare formă nouă **peste** placă înainte de <span style="color:#E65722;font-weight:700">L</span>, ca placa să rămână pe loc.*

**Încearcă tu — Labirintul rotund: proiect nou, placa și cadrul (8 min)**  
- [ ] Placa (**Ø100 · 4**) are cadru cu pereți de **3 mm**, ridicat pe ea la `4` mm  

### 6) Cele 2 inele și deschiderile lor
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **60 · 60 · 10** și <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **54 · 54 · 14** → <span style="color:#00A600;font-weight:700">Hole</span> → <span style="color:#E65722;font-weight:700">L</span> mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: **inelul mare**, cu perete de `3` mm  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **26 · 26 · 10** și <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **20 · 20 · 14** → <span style="color:#00A600;font-weight:700">Hole</span> → <span style="color:#E65722;font-weight:700">L</span> mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: **inelul mic**  
3. Fiecare inel → <span style="color:#E65722;font-weight:700">L</span> cu placa → mijloc pe cele două direcții de pe plan → <span style="color:#E65722;font-weight:700">D</span> → ridicat cu conul negru la **4 mm**. Rezultat: culoar exterior de `17` mm, culoar de mijloc de `14` mm  
4. <span style="color:#1E90FF;font-weight:700">Box</span> → **8 · 14 · 14** → <span style="color:#00A600;font-weight:700">Hole</span> *(deschiderea inelului mare)*. <span style="color:#E65722;font-weight:700">L</span> cu placa → mijloc pe cele două direcții de pe plan. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → o muți **30 mm** spre dreapta (`6` apăsări). O ridici cu conul negru la **4 mm**  
5. <span style="color:#1E90FF;font-weight:700">Box</span> → **8 · 14 · 14** → <span style="color:#00A600;font-weight:700">Hole</span> *(deschiderea inelului mic)*. La fel, dar o muți **10 mm** spre **stânga** (`2` apăsări) și o ridici la **4 mm**  

**Încearcă tu — Cele 2 inele și deschiderile lor (12 min)**  
- [ ] Inelul mare (**60 · 60 · 10**, gol **54**) și inelul mic (**26 · 26 · 10**, gol **20**) sunt centrate pe placă  
- [ ] Deschiderea inelului mare e în **dreapta**, iar a celui mic în **stânga**  

### 7) Start, final și bila
1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **12 · 12 · 1** *(start)* → <span style="color:#E65722;font-weight:700">L</span> cu placa → mijloc pe cele două direcții. Apoi <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → îl muți **40 mm** spre stânga (`8` apăsări): în culoarul exterior, opus deschiderii. Îl ridici la **4 mm**  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → marcajul de final: <span style="color:#E65722;font-weight:700">L</span> cu placa, mijloc pe cele două direcții — în **centrul** inelului mic. Ridici la **4 mm**  
3. <span style="color:#00A600;font-weight:700">Color</span>: start verde, final roșu  
4. <span style="color:#1E90FF;font-weight:700">Sphere</span> → **10 · 10 · 10** → <span style="color:#E65722;font-weight:700">L</span> cu marcajul de start → o ridici la **5 mm**  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span>, apoi Shift+click pe **bilă** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. Drumul: din start în jurul inelului mare până la deschiderea din dreapta, apoi prin culoarul de mijloc până la deschiderea din stânga, apoi în centru  

**Încearcă tu — Start, final și bila (8 min)**  
- [ ] Start-ul e în culoarul exterior, final-ul în centru; bila (**10 mm**) stă pe start, în afara grupului  
- [ ] Cu degetul pe ecran, drumul start → final trece doar prin deschideri  

**Complet**

### 8) Complet — pinteni, test, culori
*Deschizi din nou proiectul `Prenume_Nume_T3_L04` din lista **Designs**.*

1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Box</span> → **3 · 11 · 10** *(pintenul)* → îl tragi **peste** placă → <span style="color:#E65722;font-weight:700">L</span> cu placa: mijloc pe stânga–dreapta și punctul din **față**. Apoi <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → îl muți **25 mm** spre spate (`5` apăsări): e chiar în dreptul feței primului perete. Îl ridici la **4 mm**. Pintenul iese `8` mm în culoarul al doilea  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia încă **25 mm** spre spate (`5` apăsări): al doilea pinten, pe al doilea perete  
3. Între fiecare pinten și peretele următor rămân **14 mm**: bila trece (nu bloca drumul!)  
4. Trasezi cu degetul pe ecran drumul de la start la final: nu trebuie să treci prin perete  
5. <span style="color:#E65722;font-weight:700">Ruler</span>: culoarul (`22` mm) față de bilă (`10` mm) și golul de `14` mm de lângă pinten  
6. <span style="color:#00A600;font-weight:700">Color</span>: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe labirint → colorezi placa cu cadru într-o culoare și pereții interiori în alta → <span style="color:#DC143C;font-weight:700">Ctrl+A</span>, Shift+click pe bilă, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Complet — pinteni, test, culori (15 min)**  
- [ ] Ai **2** pinteni (**3 · 11 · 10**), la `25` mm unul de altul  
- [ ] Cu degetul pe ecran, drumul start → final nu trece prin perete  
- [ ] Cu Ruler: culoarul **22 mm**, bila **10 mm**, golul de lângă pinten **14 mm**  
- [ ] Placa și pereții interiori au culori diferite  

---

## Greșeli frecvente
1. **Bila nu încape pe traseu** — culoarul e mai îngust decât `10` mm. Păstrează `22` la labirintul pătrat și `14` la cel rotund.  
2. **Pereții nu alternează** — ai uitat <span style="color:#E65722;font-weight:700">L</span> pe punctul din dreapta la al doilea perete.  
3. **Cadrul a luat toată placa** — Hole-ul nu a fost grupat cu cadrul (inel).  
4. **Deschiderea nu taie inelul** — nu e <span style="color:#00A600;font-weight:700">Hole</span>, nu e ridicată la `4` mm, sau lipsește <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
5. **Bila a intrat în grup** — scoate-o din selecție cu Shift+click înainte de <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
6. **Pintenul blochează drumul** — între pinten și peretele următor trebuie să rămână cel puțin `14` mm.  
7. **Piesele plutesc sau intră în placă** — ridică-le exact cu `4` mm, adică suprafața plăcii.  
8. **Deschiderile inelelor sunt de aceeași parte** — bila ar ajunge direct în centru. Pune-le în părți opuse.  

---

## De făcut azi — „Labirintul meu”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–4** — labirintul pătrat (placă `100 × 100 × 4`, cadru, 3 pereți alternanți, start, final, bilă) **și** pașii 5–7 — labirintul rotund (placă `Ø100`, 2 inele cu deschideri opuse, start, final, bilă), cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — 2 pinteni, drumul verificat, `Ruler`, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Labirintul pătrat *(Minim)*
- [ ] Placă **100 · 100 · 4** cu cadru de `3` mm, ridicat la `4` mm  
- [ ] **3** pereți **75 · 3 · 10**, la `25` mm, alternând  
- [ ] Start (verde) și final (roșu) **12 · 12 · 1**, bila **Ø10** separată  

### Pasul 2 — Obiectul 2: Labirintul rotund *(Minim)*
- [ ] Placă **Ø100 · 4** cu cadru, inele **Ø60** (gol `54`) și **Ø26** (gol `20`)  
- [ ] Deschideri **8 · 14 · 14** (Hole), una în dreapta, una în stânga  
- [ ] Start în culoarul exterior, final în centru, bila **Ø10** separată  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Sphere</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">Snap Grid</span>  

**→ Ai Minim când:** la ambele labirinturi, un coleg poate trasa drumul bilei de la start la final cu degetul, fără să treacă prin perete.

### Pasul 3 — Complet
- [ ] **2** pinteni **3 · 11 · 10**, la `25` mm unul de altul  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: culoarul **22**, bila **10**, golul de lângă pinten **14**  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L04` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">Snap Grid</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>  

**Gata Complet când:** drumul de la start la final trece printre pinteni, iar culoarele sunt verificate cu Ruler.

---

## Bonus ★★★ — Provocare: Labirintul cu patru pereți și capac
*Doar dacă ai terminat Complet. Lucrezi în proiectul `Prenume_Nume_T3_L04`, **lângă** labirintul pătrat de până acum, pe trepte, de la ușor la greu. Fiecare piesă o faci de la zero, nu o copiezi din altă piesă. Treapta următoare o începi după ce ai încheiat-o pe cea dinainte. Snap Grid: **1.0 mm**.*

- [ ] **Treapta 1 — Placa nouă.** Un `Box` `100 · 100 · 4`, cu un cadru de `3` mm (inel făcut cu `Hole`), ridicat la `4`. `Ctrl+G`.  
- [ ] **Treapta 2 — Patru pereți.** Patru pereți `Box` `75 · 3 · 10`, ridicați la `4` și alternanți: primul lipit de stânga, la `19` mm de marginea din față, al doilea lipit de dreapta, apoi câte `19` mm între ei. Culoarele ies de `16` mm, mai late decât bila.  
- [ ] **Treapta 3 — Start, final și bila.** Marcaje `12 · 12 · 1` (start în colțul din față-stânga, final în colțul din spate-stânga, unde duce ultima deschidere) și o bilă `Sphere` `10 · 10 · 10` la `5`, **separată** de grup.  
- [ ] **Treapta 4 — Capacul.** Un `Box` `100 · 100 · 3`, ridicat la `14` (stă pe pereți), cu o fereastră `Hole` `60 · 60 · 6`, centrată și ridicată la `13`. `Ctrl+G` între ele, **separat** de labirint.  
- [ ] **Treapta 5 — Numele tău.** Un `Text` cu numele tău, de `1` mm înălțime, lipit pe marginea din față a capacului, între fereastră și margine. Din `Top` verifici că nu intră în fereastră.  
- [ ] **Treapta 6 — Verificarea.** Cu `Ruler` confirmi culoarul de `16` mm, capacul `100 × 100` la `14` mm și fereastra `60 × 60`.  

**Verificare (cu un coleg):** colegul trasează în cel mult **30 de secunde** drumul bilei prin fereastră, cu degetul, de la start la final, și numără cei **4** pereți.  

## Recapitulare rapidă
1. Culoarul trebuie să fie **mai lat decât bila** (`10` mm)  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> cu aceeași mutare dă pereți la distanțe egale  
3. O **deschidere** în perete se face cu <span style="color:#00A600;font-weight:700">Hole</span>, după <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. Bila rămâne **separată** de labirint  
5. Pintenii nu trebuie să blocheze drumul: rămân `14` mm  

**Quiz scurt:**  
- De ce culoarul trebuie să fie mai lat decât bila?  
- Câți milimetri are culoarul labirintului pătrat? Dar golul lângă pinten?  
- Cum faci o deschidere într-un inel?

## Temă (opțional)
- Dacă ai doar Minim: acasă termini în același proiect ce nu ai apucat.  
- Dacă ai Complet: într-un proiect nou `T3_L04_C`, un labirint cu **5** pereți. Cât de lat e fiecare culoar? Trece bila de `10` mm?  
- Dacă ai terminat și Bonusul: opțional, acasă, într-un proiect nou `T3_L04_D`, un **labirint rotund cu `3` inele** pe o placă `Ø140`, cu culoare de `14` mm, calculând tu diametrele inelelor (pereții inelelor de `3` mm).  

## Ce urmează
În **Lecția 5** faci un **puzzle 3D**: piese care se potrivesc cu joc, dop în locaș.
