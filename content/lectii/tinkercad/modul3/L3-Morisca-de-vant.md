# Lecția 3 — Morișcă și ventilator
### Un rotor care se învârte pe un stâlp
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci **două rotoare** care stau pe câte un stâlp, separate de el, cu joc: o **morișcă** cu palete în cruce și un **ventilator** cu șase palete.  
> Proiect: **„Morișca mea”**  
> Fișier: `Prenume_Nume_T3_L03` (obiectul 1) și `Prenume_Nume_T3_L03_B` (obiectul 2)

---

## Obiectiv
La finalul orei ai **două obiecte care se pot roti**: **Morișca** și **Ventilatorul**.  
**Minim:** **Obiectul 1:** morișca (bază `Ø50 × 5`, stâlp `Ø8 × 70`, capac `Ø14 × 4`, rotor cu butuc `Ø20 × 8`, gaură `Ø9` și **4 palete** `80 × 12 × 2` la `40` mm de bază) și **Obiectul 2:** ventilatorul (bază `Ø50 × 5`, stâlp `Ø8 × 50`, capac `Ø14 × 4`, rotor cu butuc `Ø16 × 10`, gaură `Ø9` și **6 palete** `56 × 10 × 2` la `30` mm de bază), cu rotoarele **separate** de stâlp și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: morișca cu **8 palete**, spațiul măsurat cu <span style="color:#E65722;font-weight:700">Ruler</span> și culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Un rotor se învârte dacă stă **liber** pe axa lui: gaura din butuc e mai mare decât stâlpul. Azi gaura are `9`, stâlpul `8`: joc de `0,5` mm pe parte. Rotorul stă între bază și capac și **nu atinge** niciuna.  
Mai înveți un truc: o bară centrată dă **două palete**, iar prin copiere cu rotire ajungi la câte palete vrei.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design. În Tinkercad rotorul nu se învârte; vezi că **ar avea loc** să se învârtă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 · privim o morișcă și un ventilator: ce se învârte și pe ce? |
| 10–50 | **Obiectul 1** — Morișca (Minim) |
| 50–85 | **Obiectul 2** — Ventilatorul (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte, la fiecare direcție |
| <span style="color:#E65722;font-weight:700">rotire</span> | săgeata curbă de pe plan: `4` pași de `22,5°` fac `90°`, iar câmpul cu număr primește orice unghi (de ex. `60`) |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi **aceeași rotire** repetată |
| <span style="color:#00A600;font-weight:700">Hole</span> | gaura din butuc: taie după Group |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică rotorul la înălțimea potrivită |
| <span style="color:#E65722;font-weight:700">Snap Grid</span> | piesa sare din `5` în `5` mm sau din `1` în `1` mm |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară gaura, stâlpul și spațiile |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Morișca**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T3_L03`  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T3_L03`  

### 2) Baza și stâlpul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **50 · 50 · 5** *(baza)*. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **8 · 8 · 70** *(stâlpul)*  
2. Selectezi stâlpul și baza → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan  
3. <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — baza cu stâlp  
4. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → muți grupul **100 mm** deoparte (`20` apăsări): rotorul se face separat, lângă el. Apoi Snap Grid înapoi pe **1.0**  

**Încearcă tu — Baza și stâlpul (8 min)**  
- [ ] Baza are **50 · 50 · 5**, iar stâlpul **8 · 8 · 70**, centrat  
- [ ] Baza și stâlpul sunt grupate și mutate deoparte  

### 3) Rotorul cu 4 palete
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **20 · 20 · 8** *(butucul)*. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **9 · 9 · 14** → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi gaura și butucul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții *(gaura iese sus și jos)*  
3. <span style="color:#1E90FF;font-weight:700">Box</span> → **80 · 12 · 2** *(prima bară = două palete)*. Selectezi cu Shift+click **butucul, gaura și bara** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții  
4. Bara trece prin centru și iese în ambele părți. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **90°** (`4` pași de câte 22,5°) → a doua bară, în cruce  
5. Selectezi cu Shift+click **butucul, gaura și cele două bare** *(nu Ctrl+A — ar prinde și baza)* → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
6. Din <span style="color:#D400D4;font-weight:700">Top</span>: **4** palete egale, în cruce  

**Încearcă tu — Rotorul cu 4 palete (12 min)**  
- [ ] Butucul (**20 · 20 · 8**) are gaura **9 mm**, centrată pe trei direcții  
- [ ] Din Top: **4** palete egale, în cruce  
- [ ] Butucul, gaura și paletele sunt grupate  

### 4) Rotorul pe stâlp, capacul și verificarea
1. <span style="color:#E65722;font-weight:700">D</span> pe rotor (stă pe plan). Selectezi rotorul și baza cu stâlp → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → ridici rotorul cu <span style="color:#E65722;font-weight:700">conul negru</span> la **40 mm** (`8` sărituri)  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **14 · 14 · 4** *(capacul)* → îl tragi peste stâlp → selectezi capacul și baza cu stâlp → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan și punctul de **sus**  
4. Selectezi capacul și baza cu stâlp → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — rotorul rămâne **separat**  
5. <span style="color:#D400D4;font-weight:700">Front</span>: stâlpul trece prin gaura rotorului; rotorul **nu atinge** baza și nici capacul. Click pe rotor → se selectează singur  

**Încearcă tu — Rotorul pe stâlp, capacul și verificarea (12 min)**  
- [ ] Rotorul e la **40 mm** și stâlpul trece prin gaura lui  
- [ ] Capacul (**14 · 14 · 4**) stă pe vârful stâlpului, iar rotorul rămâne o piesă separată  

**Obiectul 2 — Ventilatorul**

### 5) Ventilatorul: proiect nou, baza și stâlpul
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L03_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**.  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **50 · 50 · 5** *(baza)* și <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **8 · 8 · 50** *(stâlpul)*. <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
3. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → muți grupul **100 mm** deoparte → Snap Grid înapoi pe **1.0**  

**Încearcă tu — Ventilatorul: proiect nou, baza și stâlpul (12 min)**  
- [ ] Baza are **50 · 50 · 5**, stâlpul **8 · 8 · 50**, grupate  

### 6) Rotorul cu 6 palete
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **16 · 16 · 10** *(butucul)* și <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **9 · 9 · 14** → <span style="color:#00A600;font-weight:700">Hole</span>. Selectezi gaura și butucul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **56 · 10 · 2** *(bara = două palete)*. Selectezi cu Shift+click **butucul, gaura și bara** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții  
3. Selectezi **bara** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → apeși pe <span style="color:#E65722;font-weight:700">săgeata curbă</span> de pe plan și, în câmpul cu număr, scrii **60** (copia se rotește cu `60°`)  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> din nou — repetă aceeași rotire → a treia bară. Ai **3** bare, la **0°, 60°, 120°**  
5. Selectezi cu Shift+click **butucul, gaura și cele 3 bare** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. Din <span style="color:#D400D4;font-weight:700">Top</span>: **6** palete egale  

**Încearcă tu — Rotorul cu 6 palete (12 min)**  
- [ ] Butucul (**16 · 16 · 10**) are gaura **9 mm**, iar bara are **56 · 10 · 2**  
- [ ] Ai **3** bare la **0°, 60°, 120°**, adică **6** palete egale  

### 7) Rotorul pe stâlp și capacul
1. <span style="color:#E65722;font-weight:700">D</span> pe rotor. Selectezi rotorul și baza cu stâlp → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → ridici rotorul cu <span style="color:#E65722;font-weight:700">conul negru</span> la **30 mm** (`6` sărituri)  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **14 · 14 · 4** *(capacul)* → <span style="color:#E65722;font-weight:700">L</span> cu baza și stâlpul: mijloc pe ambele direcții de pe plan și punctul de **sus**. Selectezi capacul și baza cu stâlp → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. <span style="color:#D400D4;font-weight:700">Front</span>: rotorul stă între bază și capac, **nu atinge** niciuna și se selectează singur  

**Încearcă tu — Rotorul pe stâlp și capacul (10 min)**  
- [ ] Rotorul e la **30 mm**, cu stâlpul prin gaură  
- [ ] Capacul stă pe vârf, iar rotorul rămâne separat  

**Complet**

### 8) Complet — 8 palete, Ruler, culori
*Deschizi din nou proiectul `Prenume_Nume_T3_L03` din lista **Designs**.*

1. Rotorul → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> *(desfaci ultimul Group: butuc, gaură și bare)*  
2. Selectezi o bară → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **45°** (`2` pași) → bară la 45°. Apoi bara de la **90°** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **45°** → bară la 135°. Acum ai **4** bare la 0°, 45°, 90°, 135° → **8** palete  
3. Selectezi cu Shift+click **butucul, gaura și cele 4 bare** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. <span style="color:#E65722;font-weight:700">Ruler</span>: gaura (`9` mm) față de stâlp (`8` mm). Spațiul dintre rotor și baza: `35` mm; între rotor și capac: `18` mm  
5. <span style="color:#00A600;font-weight:700">Color</span>: paletele în culori diferite  

**Încearcă tu — Complet — 8 palete, Ruler, culori (25 min)**  
- [ ] Ai **8** palete (bare la 0°, 45°, 90°, 135°)  
- [ ] Cu Ruler: gaura **9 mm**, stâlpul **8 mm**  
- [ ] Paletele au culori diferite  

---

## Greșeli frecvente
1. **Rotorul e lipit de stâlp** — ai dat Group cu stâlpul. Rotorul rămâne **separat**.  
2. **Gaura nu trece prin butuc** — Hole-ul nu a fost grupat cu butucul, sau e mai mică decât butucul.  
3. **Paletele nu sunt egale** — bara nu e centrată pe butuc. Selectezi butucul, gaura și bara, apoi <span style="color:#E65722;font-weight:700">L</span>, mijloc pe cele trei direcții.  
4. **Ctrl+A a prins și baza** — selectează cu Shift+click doar butucul, gaura și barele.  
5. **Rotorul atinge baza sau capacul** — verifică din <span style="color:#D400D4;font-weight:700">Front</span> înălțimea: `40` mm la morișcă, `30` mm la ventilator.  
6. **Stâlpul nu trece prin gaură** — gaura trebuie să fie `9`, stâlpul `8`.  
7. **La ventilator ai 4 palete în loc de 6** — ai rotit cu `90°` în loc de `60°`. Scrie `60` în câmpul cu număr.  
8. **Capacul nu e pe vârf** — la <span style="color:#E65722;font-weight:700">L</span> alege punctul de **sus**.  

---

## De făcut azi — „Morișca mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–4** — morișca (bază, stâlp `Ø8 × 70`, capac, rotor cu 4 palete la `40` mm) **și** pașii 5–7 — ventilatorul (stâlp `Ø8 × 50`, rotor cu 6 palete la `30` mm), cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — 8 palete la morișcă, `Ruler`, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Morișca *(Minim)*
- [ ] Bază **50 · 50 · 5** + stâlp **8 · 8 · 70**, grupate  
- [ ] Butuc **20 · 20 · 8** cu Hole **9 · 9 · 14** + 2 bare **80 · 12 · 2** în cruce = **4** palete  
- [ ] Rotorul la **40 mm**, capacul **14 · 14 · 4** pe vârf, rotorul separat  

### Pasul 2 — Obiectul 2: Ventilatorul *(Minim)*
- [ ] Bază **50 · 50 · 5** + stâlp **8 · 8 · 50**, grupate  
- [ ] Butuc **16 · 16 · 10** cu Hole **9 · 9 · 14** + 3 bare **56 · 10 · 2** la 0°, 60°, 120° = **6** palete  
- [ ] Rotorul la **30 mm**, capac pe vârf, rotorul separat  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">Snap Grid</span>  

**→ Ai Minim când:** la ambele obiecte, rotorul stă pe stâlp, între bază și capac, fără să le atingă.

### Pasul 3 — Complet
- [ ] **8** palete la morișcă (bare la 0°, 45°, 90°, 135°)  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: **9** și **8** mm  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L03` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>  

**Gata Complet când:** morișca are 8 palete egale, joc verificat cu Ruler și culori diferite.

---

## Bonus ★★★ — Provocare: Turnul eolian cu 2 rotoare
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă un text pe una dintre baze  
- [ ] **Provocarea (obiect mai complicat):** în proiectul `Prenume_Nume_T3_L03_B`, un **suport nou**: bază `Ø50 × 5`, stâlp `Ø8 × 100`, capac `Ø14 × 4` cu partea de sus la `100`. Pe el pui **două rotoare**: rotorul ventilatorului (copia lui, înălțime `10`) la **40 mm** de bază și rotorul morișcii (copiat din primul proiect cu <span style="color:#DC143C;font-weight:700">Ctrl+C</span> și <span style="color:#DC143C;font-weight:700">Ctrl+V</span>, înălțime `8`) la **70 mm**. Rotoarele rămân separate și nu se ating. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi **20 mm** între cele două rotoare (`70 − 50`), și că gaura (`9`) e mai mare decât stâlpul (`8`). Un coleg verifică din <span style="color:#D400D4;font-weight:700">Front</span> că niciun rotor nu atinge capacul sau baza.  

## Recapitulare rapidă
1. Rotorul stă **liber** pe stâlp: gaura (`9`) e mai mare decât stâlpul (`8`)  
2. O bară centrată pe butuc dă **două** palete  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> repetă aceeași rotire: `4` bare dau `8` palete, `3` bare dau `6`  
4. Rotorul rămâne **separat** de stâlp (între bază și capac)  
5. Rotirea cu număr (`60°`) face orice unghi  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** baza 50·50·5 + stâlp 8·8·70 → Group · butuc 20·20·8 − Hole 9·9·14 + 2 bare 80·12·2 (90°) → Group · rotor la 40 · capac 14·14·4 · ventilator: baza + stâlp 8·8·50 · butuc 16·16·10 − Hole 9 + 3 bare 56·10·2 (60°) → rotor la 30 · capac  
**Complet:** + 8 palete (45°) · Ruler · culori

**Quiz scurt:**  
- De ce gaura rotorului e mai mare decât stâlpul?  
- Câte palete dau 3 bare centrate pe butuc?  
- De ce rotorul nu trebuie lipit de stâlp?

## Temă
Opțional: desenezi pe foaie o **moară de vânt** cu **3** palete și scrii unghiul dintre ele (`120°`). Câte bare ar trebui?

## Ce urmează
În **Lecția 4** faci un **labirint cu bilă** și un **labirint rotund**: culoare cu joc pentru o bilă.
