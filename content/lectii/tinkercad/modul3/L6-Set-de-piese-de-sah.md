# Lecția 6 — Set de piese de șah
### Piese pe baze identice și o tablă cu locașuri
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci un **set de piese de șah** (pion și turn, pe baze identice) și o **tablă mică** cu locașuri în care stau bazele, cu joc.  
> Proiect: **„Șahul meu”**  
> Fișier: `Prenume_Nume_T3_L06` (obiectul 1) și `Prenume_Nume_T3_L06_B` (obiectul 2)

---

## Obiectiv
La finalul orei ai **două obiecte**: **Piesele** și **Tabla**.  
**Minim:** **Obiectul 1:** pionul (bază `Ø30 × 4`, gât `Ø14 × 18`, cap sferă `Ø16`) și turnul (aceeași bază, corp `Ø18 × 34`, coroană `Ø24 × 8` cu **4 creneluri**), la `40` mm unul de altul, și **Obiectul 2:** tabla (placă `160 × 80 × 6` cu **8 locașuri** `Ø31`, la `40` mm între centre), cu pionul și turnul puse în locașuri, **separate** de tablă și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: **nebunul** (con `Ø18 × 32`, cap sferă `Ø12`, crestătură), un pion în altă culoare și culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Un set de piese trebuie să fie **coerent**: toate piesele stau pe **aceeași bază** (`Ø30`), dar se recunosc după **siluetă** și înălțime. Aceeași bază înseamnă că orice piesă intră în **orice locaș** al tablei.  
Locașul are `31` mm, baza `30` mm: joc de `0,5` mm pe parte, ca piesa să intre și să iasă ușor.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5 · privim piese de șah: ce silueta au pionul, turnul, nebunul? |
| 10–42 | **Obiectul 1** — Pionul și turnul (Minim) |
| 42–70 | **Obiectul 2** — Tabla cu locașuri (Minim) |
| 70–85 | **Complet** pe primul obiect |
| 85–110 | **Bonus ★★★** — regele, regina și tabla mare, pe trepte (fiecare merge cât apucă) |
| 110–120 | Recap, quiz, galerie |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Sphere</span>, <span style="color:#1E90FF;font-weight:700">Cone</span> | corpul, capul și conul pieselor |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte (mijloc, sus, margini) |
| <span style="color:#00A600;font-weight:700">Hole</span> | creneluri, crestătură și locașurile tablei |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași mutare repetată |
| <span style="color:#E65722;font-weight:700">Snap Grid</span> și <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută piesa cu `5` mm sau `1` mm |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică piesa cu un număr exact de milimetri |
| <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span> | copiezi piese dintr-un proiect în altul |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară baza și locașul |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Pionul și turnul**

### 1) Proiect nou și bazele
1. **Create new design** · nume `Prenume_Nume_T3_L06`  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **30 · 30 · 4** *(baza)*  
3. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0 mm** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **40 mm** (`8` apăsări) → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> din nou: **3** baze identice, la `40` mm una de alta  
*Atenție la <span style="color:#E65722;font-weight:700">Align</span>: mută **ambele** piese spre mijlocul lor. Ca baza să rămână pe loc, trage forma nouă **peste** baza ei înainte de <span style="color:#E65722;font-weight:700">L</span>.*

**Încearcă tu — Proiect nou și bazele (6 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T3_L06`  
- [ ] Ai **3** baze identice (**30 · 30 · 4**), la **40 mm** una de alta  

### 2) Pionul
1. <span style="color:#E65722;font-weight:700">Snap Grid</span> înapoi pe **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **14 · 14 · 18** *(gâtul)* → <span style="color:#E65722;font-weight:700">L</span> cu prima bază → mijloc pe cele două direcții de pe plan  
2. <span style="color:#1E90FF;font-weight:700">Sphere</span> → **16 · 16 · 16** *(capul)* → <span style="color:#E65722;font-weight:700">L</span> cu prima bază (nu cu gâtul) → mijloc pe cele două direcții. Ridici sfera cu <span style="color:#E65722;font-weight:700">conul negru</span> la **14 mm**: capul se așază pe vârful gâtului  
3. Din <span style="color:#D400D4;font-weight:700">Front</span>: baza, gâtul, capul — o siluetă clară de pion  
4. Selectezi baza, gâtul și capul (Shift+click) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Pionul (10 min)**  
- [ ] Pionul are bază, gât (**14 · 14 · 18**) și cap (sferă **16**, la **14 mm**)  
- [ ] Pionul e grupat  

### 3) Turnul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **18 · 18 · 34** *(corpul)* → <span style="color:#E65722;font-weight:700">L</span> cu a doua bază → mijloc pe cele două direcții de pe plan  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **24 · 24 · 8** *(coroana)* → <span style="color:#E65722;font-weight:700">L</span> cu a doua bază → mijloc pe cele două direcții → ridici la **30 mm**  
3. <span style="color:#1E90FF;font-weight:700">Box</span> → **6 · 28 · 8** → <span style="color:#00A600;font-weight:700">Hole</span> *(un crenel)* → <span style="color:#E65722;font-weight:700">L</span> cu a doua bază: mijloc pe cele două direcții; apoi <span style="color:#E65722;font-weight:700">L</span> cu coroana: punctul de **sus**  
4. Îl ridici cu conul negru cu **2 mm**: taie `6` mm adâncime în coroană  
5. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **90°** (`4` pași de 22,5°) → crenelurile în cruce  
6. Selectezi baza, corpul, coroana și cele două Hole-uri (Shift+click) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
7. Din <span style="color:#D400D4;font-weight:700">Top</span>: coroana are **4** creneluri; din <span style="color:#D400D4;font-weight:700">Front</span>: turnul (`38` mm) e mai înalt decât pionul (`30` mm)  

**Încearcă tu — Turnul (16 min)**  
- [ ] Turnul are corp (**18 · 18 · 34**) și coroană (**24 · 24 · 8**, la **30 mm**)  
- [ ] Coroana are **4** creneluri în cruce (din Top)  
- [ ] Turnul e mai înalt decât pionul (din Front)  

**Obiectul 2 — Tabla cu locașuri**

### 4) Tabla: proiect nou, placa și locașurile
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L06_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**.  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **160 · 80 · 6** *(tabla)*  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **31 · 31 · 4** → <span style="color:#00A600;font-weight:700">Hole</span> *(primul locaș)* → îl tragi peste tablă → <span style="color:#E65722;font-weight:700">L</span> cu tabla: mijloc pe cele două direcții de pe plan. Apoi <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → îl muți **60 mm** spre stânga (`12` apăsări) și **20 mm** spre față (`4` apăsări). Îl ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> la **3 mm**: fundul locașului are `3` mm  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **40 mm** spre dreapta (`8` apăsări) → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> de încă **2** ori: **4** locașuri în rând  
5. Selectezi cele **4** locașuri (Shift+click) → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copiile **40 mm** spre spate (`8` apăsări): al doilea rând, **8** locașuri  
6. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Tabla: proiect nou, placa și locașurile (10 min)**  
- [ ] Tabla are **160 · 80 · 6**  
- [ ] Ai **8** locașuri (**31 · 31 · 4**, Hole), la **40 mm** între centre, cu fund de `3` mm  

### 5) Piesele pe tablă
1. În proiectul `Prenume_Nume_T3_L06` selectezi **pionul** și **turnul** → <span style="color:#DC143C;font-weight:700">Ctrl+C</span>. Revii în `Prenume_Nume_T3_L06_B` → <span style="color:#DC143C;font-weight:700">Ctrl+V</span>. *(Dacă lipirea între proiecte nu merge, refaci piesele cu pașii 2 și 3.)*  
2. Pionul → <span style="color:#E65722;font-weight:700">L</span> cu tabla: punctul din **stânga** și punctul din **față**. Apoi <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → **1** apăsare spre dreapta și **1** spre spate: baza e chiar în primul locaș. O ridici cu conul negru cu **3 mm**: baza stă în locaș  
3. Turnul → <span style="color:#E65722;font-weight:700">L</span> cu tabla: punctul din **dreapta** și punctul din **față**. Apoi **1** apăsare spre stânga și **1** spre spate: baza e în locașul din dreapta, în fața tablei. Îl ridici cu **3 mm**  

**Încearcă tu — Piesele pe tablă (10 min)**  
- [ ] Pionul și turnul stau în locașuri, cu bazele ridicate cu **3 mm**  
- [ ] Piesele sunt **separate** de tablă (click pe piesă → se selectează singură)  

### 6) Verificare
1. <span style="color:#D400D4;font-weight:700">Front</span>: bazele stau în locașuri, cu un spațiu mic în jur. <span style="color:#D400D4;font-weight:700">Top</span>: spațiu egal pe toate părțile  
2. <span style="color:#E65722;font-weight:700">Ruler</span>: baza **30 mm**, locașul **31 mm** → joc de `0,5` mm pe parte  
3. Distanța dintre centrul pionului și al turnului: **120 mm**  

**Încearcă tu — Verificare (8 min)**  
- [ ] Cu Ruler: baza **30**, locașul **31**  
- [ ] Distanța dintre pion și turn e **120 mm**  

**Complet**

### 7) Complet — nebunul și culorile
*Deschizi din nou proiectul `Prenume_Nume_T3_L06` din lista **Designs**.*

1. <span style="color:#1E90FF;font-weight:700">Cone</span> → **18 · 18 · 32** → <span style="color:#E65722;font-weight:700">L</span> cu a treia bază → mijloc pe cele două direcții de pe plan  
2. <span style="color:#1E90FF;font-weight:700">Sphere</span> → **12 · 12 · 12** → <span style="color:#E65722;font-weight:700">L</span> cu a treia bază (mijloc, două direcții), ridicat la **28 mm** *(capul)*  
3. <span style="color:#1E90FF;font-weight:700">Box</span> → **2 · 20 · 8** → <span style="color:#00A600;font-weight:700">Hole</span> *(crestătura)* → <span style="color:#E65722;font-weight:700">L</span> cu a treia bază (mijloc, două direcții), ridicat la **34 mm**, rotit **45°**  
4. Selectezi baza, conul, capul și crestătura → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. Din <span style="color:#D400D4;font-weight:700">Front</span>: nebunul e cel mai înalt (`40` mm), turnul are `38` mm, pionul `30` mm  
5. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → pionul → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **120 mm** spre dreapta (`24` apăsări), în dreapta nebunului  
6. <span style="color:#00A600;font-weight:700">Color</span>: pionul original alb (sau deschis), copia neagră (sau închis). La fel poți colora turnul  

**Încearcă tu — Complet — nebunul și culorile (15 min)**  
- [ ] Nebunul are con (**18 · 18 · 32**), cap (sferă **12**, la **28 mm**) și crestătură rotită **45°**  
- [ ] Nebunul e cel mai înalt (**40 mm**)  
- [ ] Ai un pion alb și unul negru  

---

## Greșeli frecvente
1. **Bazele nu sunt identice** — toate au **30 · 30 · 4**. Copiază cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, nu desena de la zero.  
2. **Capul plutește** — sfera nu e ridicată la `14` mm, deci nu se sprijină pe gât.  
3. **Crenelurile nu taie** — nu e Hole, sau lipsește <span style="color:#DC143C;font-weight:700">Ctrl+G</span> pe turn.  
4. **Turnul nu are 4 creneluri** — ai uitat copia rotită cu `90°`.  
5. **Ctrl+A a prins și celelalte piese** — selectează cu Shift+click doar piesa la care lucrezi.  
6. **Piesa nu intră în locaș** — locașul trebuie să fie `31`, baza `30`. Verifică cu <span style="color:#E65722;font-weight:700">Ruler</span>.  
7. **Piesa a intrat în placă** — nu ai ridicat baza cu `3` mm, deci stă în locul fundului.  
8. **Locașurile nu sunt egal depărtate** — mută fiecare copie cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span> și **aceeași** mutare (`40` mm).  
9. **Locașul a tăiat tabla pe toată grosimea** — nu l-ai ridicat la `3` mm.  

---

## De făcut azi — „Șahul meu”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–3** — pionul și turnul pe baze identice `Ø30 × 4` **și** pașii 4–6 — tabla `160 × 80 × 6` cu 8 locașuri `Ø31`, cu pionul și turnul în locașuri, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — nebunul, un pion în altă culoare, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Pionul și turnul *(Minim)*
- [ ] **3** baze **30 · 30 · 4**, la `40` mm  
- [ ] Pion: gât **14 · 14 · 18** + cap sferă **16** la `14` mm, grupat  
- [ ] Turn: corp **18 · 18 · 34** + coroană **24 · 24 · 8** la `30` mm + **4** creneluri, grupat  

### Pasul 2 — Obiectul 2: Tabla *(Minim)*
- [ ] Placă **160 · 80 · 6** cu **8** locașuri **31 · 31 · 4** (Hole), la `40` mm  
- [ ] Pionul și turnul în locașuri, bazele ridicate cu `3` mm, separate de tablă  
- [ ] Cu Ruler: baza **30**, locașul **31**  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Sphere</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span>  

**→ Ai Minim când:** pionul și turnul stau în locașurile tablei, cu joc egal în jur, și se recunosc după siluetă.

### Pasul 3 — Complet
- [ ] Nebun: con **18 · 18 · 32** + cap sferă **12** la `28` mm + crestătură rotită `45°`  
- [ ] Pion alb și pion negru · <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L06` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Cone</span>, <span style="color:#1E90FF;font-weight:700">Sphere</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#00A600;font-weight:700">Color</span>  

**Gata Complet când:** nebunul e cea mai înaltă piesă (`40` mm), iar pionii au culori diferite.

---

## Bonus ★★★ — Provocare: Regele, regina și tabla mare
*Doar dacă ai terminat Complet. Treptele 1–3 sunt în proiectul `Prenume_Nume_T3_L06`, **lângă** piesele de până acum. Treptele 4–6 sunt în `Prenume_Nume_T3_L06_B`, lângă tabla de până acum. Fiecare piesă o faci de la zero. Treapta următoare o începi după ce ai încheiat-o pe cea dinainte. Snap Grid: **1.0 mm**, iar la mutări de `40` mm: **5.0 mm**.*

- [ ] **Treapta 1 — Regele.** O bază `Cylinder` `30 · 30 · 4`, identică cu celelalte, un corp `Cylinder` `18 · 18 · 40` și o coroană `Cylinder` `24 · 24 · 6`, la `38`. Toate centrate pe bază.  
- [ ] **Treapta 2 — Crucea regelui.** Un `Box` vertical `4 · 4 · 14`, la `42`, și unul orizontal `12 · 4 · 4`, la `48`, centrate pe coroană. `Ctrl+G` pe tot regele. Înălțimea totală e de **56 mm**.  
- [ ] **Treapta 3 — Regina.** O bază `30 · 30 · 4`, un corp `18 · 18 · 40`, o coroană `24 · 24 · 6`, la `38`, și o `Sphere` `12 · 12 · 12`, la `42`. `Ctrl+G`. Înălțimea totală e de **54 mm**.  
- [ ] **Treapta 4 — Tabla mare.** Un `Box` `160 · 160 · 6` cu `16` locașuri `Hole` `Cylinder` `31 · 31 · 4`, ridicate la `3`, în `4` rânduri a câte `4`, la `40` mm între centre. Locașurile de la margine rămân la `4,5` mm de margine.  
- [ ] **Treapta 5 — Piesele pe tablă.** Regele și regina, copiați cu `Ctrl+C` și `Ctrl+V` în proiectul tablei, stau în locașuri vecine, cu bazele ridicate cu `3` mm. Cu `Ruler` confirmi `40` mm între centrele lor.  
- [ ] **Treapta 6 — Verificarea.** Cu `Ruler` confirmi bazele (`30` mm), locașurile (`31` mm) și înălțimile (`56` și `54` mm). Din `Front` și `Top`, piesele stau în locașuri, cu joc egal în jur.  

**Verificare (cu un coleg):** colegul recunoaște în cel mult **30 de secunde** piesele după siluetă și numără cele **16** locașuri.  

## Recapitulare rapidă
1. Toate piesele stau pe **aceeași bază** (`Ø30 × 4`)  
2. Piesele se recunosc după **siluetă** și înălțime  
3. Locașul (`31`) e puțin mai mare decât baza (`30`): joc de `0,5` mm pe parte  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> cu aceeași mutare dă locașuri la distanțe egale  
5. Piesele rămân **separate** de tablă  

**Quiz scurt:**  
- De ce toate piesele au aceeași bază?  
- Cu cât e mai mare locașul decât baza, pe fiecare parte?  
- Cum faci 8 locașuri egale depărtate?

## Temă (opțional)
- Dacă ai doar Minim: acasă termini în același proiect ce nu ai apucat.  
- Dacă ai Complet: într-un proiect nou `T3_L06_C`, **3** piese de șah cu înălțimi diferite. Notează înălțimea fiecăreia cu Ruler.  
- Dacă ai terminat și Bonusul: opțional, acasă, într-un proiect nou `T3_L06_D`, o **cutie pentru piese**, cu `4` locașuri `Ø31` într-un rând și pereți de `5` mm, cu lungimea calculată de tine.  

## Ce urmează
În **Lecția 7** faci **zaruri personalizate** și o **cutie pentru zaruri**: un cub cu puncte și o cutie în care stă cu joc.
