# Lecția 1 — Roți dințate simple
### Angrenaj, reducție și piese care se rotesc pe axe
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci **două mecanisme cu roți dințate**: un angrenaj cu două roți egale și o reducție cu o roată mare și una mică. Roțile se „mușcă” una în alta și se învârt pe axe.  
> Proiect: **„Angrenajul meu”**  
> Fișier: `Prenume_Nume_T3_L01` (obiectul 1) și `Prenume_Nume_T3_L01_B` (obiectul 2)  
> *Roțile reale au dinți curbați — pe ei îi facem în Modulul 5. Azi dinții sunt simpli, dar ideea e aceeași.*

---

## Obiectiv
La finalul orei ai **două mecanisme**: **Angrenajul** și **Reducția**.  
**Minim:** **Obiectul 1:** angrenajul (două roți cu **8 dinți**, disc `Ø40` și dinți de `8` mm, gaură `Ø8`, pe o placă `120 × 64 × 4` cu 2 pivoturi `Ø6` la `50` mm) și **Obiectul 2:** reducția (roată mare cu **16 dinți** `Ø60`, roată mică cu **8 dinți** `Ø30`, placă `110 × 76 × 4`, pivoturi la `50` mm), cu roțile **separate** de placă și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a treia roată în șir la angrenaj, culori și distanțele măsurate cu <span style="color:#E65722;font-weight:700">Ruler</span>, cu cel puțin **6 unelte diferite**.

## De ce contează
Roțile dințate **transmit mișcarea**: dacă învârți una, se învârte și vecina, dar în **sens invers**.  
Ca să se potrivească, dinții unei roți intră în **golurile** celeilalte. De aceea a doua roată se rotește **o jumătate de pas**. La reducție, roata mică are **jumătate** din dinții roții mari: ea face **două ture** cât roata mare face una.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap M2 · privim roți dințate (poză sau desen): câți dinți are fiecare? |
| 10–50 | **Obiectul 1** — Angrenajul cu două roți egale (Minim) |
| 50–85 | **Obiectul 2** — Reducția cu roată mare și roată mică (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">mărimi cu numere</span> | apeși pe un număr din pătrățelul alb și scrii mărimea exactă |
| <span style="color:#E65722;font-weight:700">rotire</span> | săgeata curbă **de pe plan** învârte piesa în jurul axei verticale, în pași de `22,5°` |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte (stânga, mijloc, jos) |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi **aceeași mutare sau rotire** repetată |
| <span style="color:#00A600;font-weight:700">Hole</span> | gaura din mijlocul roții: taie după Group |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică piesa cu un număr exact de milimetri |
| <span style="color:#E65722;font-weight:700">Snap Grid</span> și <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | piesa sare din `5` în `5` mm: distanțe exacte |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară distanța dintre două piese |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Angrenajul cu două roți egale**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T3_L01`  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  
*Atenție la <span style="color:#E65722;font-weight:700">Align</span>: mută **ambele** piese spre mijlocul lor. Ca piesa veche să rămână pe loc, trage forma nouă **peste** ea înainte de <span style="color:#E65722;font-weight:700">L</span>.*

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T3_L01`  

### 2) Prima roată: discul și cei 8 dinți
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **40 · 40 · 6** *(discul roții)*  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **56 · 6 · 6** *(o „bară” de dinți: capetele ies afară și devin dinți)*  
3. Selectezi bara și discul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **două** direcții de pe plan și punctul de **jos**. Bara iese `8` mm în fiecare parte → doi dinți  
4. Selectezi **bara** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **45°** (2 pași de câte 22,5° pe <span style="color:#E65722;font-weight:700">săgeata curbă</span> de pe plan)  
5. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> din nou — repetă aceeași rotire → a treia bară. Încă o dată → a patra  
6. Rezultat: 4 bare la 0°, 45°, 90°, 135° → **8 dinți** egal depărtați  

**Încearcă tu — Prima roată: discul și cei 8 dinți (10 min)**  
- [ ] Discul are **40 · 40 · 6**, iar bara **56 · 6 · 6** e centrată pe el  
- [ ] Ai **4** bare, la **0°, 45°, 90°, 135°**, deci **8** dinți egal depărtați  

### 3) Gaura din mijloc și Group
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **8 · 8 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>  
2. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> (discul, cele 4 bare și gaura) → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții  
3. <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — prima roată → apeși <span style="color:#E65722;font-weight:700">D</span> (stă pe plan)  
4. View Cube → <span style="color:#D400D4;font-weight:700">Top</span>: 8 dinți, gaura în centru  

**Încearcă tu — Gaura din mijloc și Group (6 min)**  
- [ ] Gaura (**8 · 8 · 10**, Hole) e în centru  
- [ ] Prima roată e grupată și stă pe plan  

### 4) A doua roată
1. Selectezi roata → <span style="color:#DC143C;font-weight:700">Ctrl+D</span>  
2. Rotești copia **22,5°** (un singur pas) — acum are **gol** acolo unde prima are **dinte**  
3. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **5.0 mm**  
4. O muți **50 mm** spre dreapta (`10` apăsări pe săgeată, câte `5` mm)  
5. Din <span style="color:#D400D4;font-weight:700">Top</span>: dinții primei roți intră în golurile celei de-a doua și invers  

**Încearcă tu — A doua roată (8 min)**  
- [ ] A doua roată e rotită cu **22,5°** și mutată cu **50 mm**  
- [ ] Din Top, dinții unei roți intră în golurile celeilalte  

### 5) Pivoturile și placa
1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **6 · 6 · 16** → îl tragi **peste** prima roată și îl așezi cu <span style="color:#E65722;font-weight:700">L</span> pe centrul ei (mijloc pe cele două direcții de pe plan)  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, copia o tragi peste a doua roată și o aliniezi la fel cu <span style="color:#E65722;font-weight:700">L</span>  
3. Pivotul (`6`) e mai subțire decât gaura (`8`): roata se poate învârti pe el — **joc de 1 mm pe parte**  
4. <span style="color:#1E90FF;font-weight:700">Box</span> → **120 · 64 · 4** *(placa)*  
5. Selectezi **cele două roți** și **cele două pivoturi** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(temporar, doar ca să centrezi)* → cu placa → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe grupul temporar  
6. Selectezi **cele două pivoturi** și **placa** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — placa are pivoturi  

**Încearcă tu — Pivoturile și placa (8 min)**  
- [ ] Pivoturile (**6 · 6 · 16**) sunt centrate pe cele două roți  
- [ ] Placa are **120 · 64 · 4**, cu roțile centrate pe ea  
- [ ] Pivoturile și placa sunt grupate; roțile rămân separate  

### 6) Roțile stau pe pivoturi
1. Selectezi **cele două roți** (Shift+click)  
2. Le ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> cu **5 mm** — stau deasupra plăcii, nu lipite de ea  
3. View Cube → <span style="color:#D400D4;font-weight:700">Front</span>: între placă și roți e un gol mic; pivoturile trec prin roți  

**Încearcă tu — Roțile stau pe pivoturi (4 min)**  
- [ ] Roțile sunt ridicate cu **5 mm** și stau pe pivoturi, nelipite de placă  

**Obiectul 2 — Reducția cu roată mare și roată mică**

### 7) Roata mare: proiect nou, 16 dinți
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L01_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**.  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **60 · 60 · 6** *(discul)* și <span style="color:#1E90FF;font-weight:700">Box</span> → **68 · 4 · 6** *(bara de dinți: capetele ies `4` mm)*  
3. Selectezi bara și discul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **două** direcții de pe plan și punctul de **jos**  
4. Selectezi **bara** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **22,5°** (un pas). <span style="color:#DC143C;font-weight:700">Ctrl+D</span> încă de **6** ori, aceeași rotire: **8** bare, la 0°, 22,5°, … 157,5° → **16 dinți**  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(discul și barele devin un corp)*  
6. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **8 · 8 · 10** → <span style="color:#00A600;font-weight:700">Hole</span> → cu corpul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> → <span style="color:#E65722;font-weight:700">D</span>  
7. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **5.0 mm**. Muți roata mare **50 mm** spre stânga (`10` apăsări): face loc roții mici, la mijloc  

**Încearcă tu — Roata mare: proiect nou, 16 dinți (14 min)**  
- [ ] Discul are **60 · 60 · 6**, iar bara **68 · 4 · 6**  
- [ ] Ai **8** bare la câte **22,5°**, deci **16** dinți, cu gaura **8 · 8 · 10** în centru  

### 8) Roata mică și potrivirea
1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **30 · 30 · 6** și <span style="color:#1E90FF;font-weight:700">Box</span> → **38 · 4 · 6**, în centru, lângă roata mare  
2. Selectezi bara și discul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan și punctul de **jos**  
3. Bara → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **45°** (2 pași), <span style="color:#DC143C;font-weight:700">Ctrl+D</span> încă de **2** ori → **4** bare, deci **8 dinți**  
4. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Shift+click</span> pe **roata mare** (o scoți din selecție) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(corpul roții mici)*  
5. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **8 · 8 · 10** → <span style="color:#00A600;font-weight:700">Hole</span> → cu corpul mic → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> → <span style="color:#E65722;font-weight:700">D</span>  
6. Rotești **roata mică** **22,5°** (un pas): acum are **gol** înspre roata mare, iar roata mare are **dinte** înspre ea  
7. Din <span style="color:#D400D4;font-weight:700">Top</span>: dinții se potrivesc, iar centrele sunt la **50 mm**  

**Încearcă tu — Roata mică și potrivirea (12 min)**  
- [ ] Roata mică (**30 · 30 · 6**, bară **38 · 4 · 6**) are **8** dinți și gaura **8 · 8 · 10**  
- [ ] Roata mică e rotită cu **22,5°**; din Top, dinții intră în goluri și centrele sunt la **50 mm**  

### 9) Pivoturile, placa și raportul
1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **6 · 6 · 16** → îl tragi **peste** roata mare → <span style="color:#E65722;font-weight:700">L</span> pe centrul ei (mijloc pe cele două direcții). <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia o tragi peste roata mică → <span style="color:#E65722;font-weight:700">L</span> la fel  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **110 · 76 · 4** *(placa)*. Selectezi **cele două roți** și **cele două pivoturi** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(temporar)* → cu placa → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe grupul temporar  
3. Selectezi **cele două pivoturi** și **placa** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. Selectezi **cele două roți** → <span style="color:#E65722;font-weight:700">conul negru</span> → **5 mm**: stau pe pivoturi, nelipite de placă  
5. <span style="color:#D400D4;font-weight:700">Front</span>: roțile stau pe pivoturi. <span style="color:#D400D4;font-weight:700">Top</span>: placa depășește roata mare cu cel puțin `2` mm  
6. Raportul: roata mică are **8** dinți, roata mare **16** → mică face **2 ture** cât mare face **una**  

**Încearcă tu — Pivoturile, placa și raportul (10 min)**  
- [ ] Placa are **110 · 76 · 4**, cu pivoturile (**6 · 6 · 16**) grupate cu ea, iar roțile sunt **separate** și ridicate **5 mm**  
- [ ] Pot spune câte ture face roata mică cât roata mare face una  

**Complet**

### 10) Complet — a treia roată și Ruler
*Deschizi din nou proiectul `Prenume_Nume_T3_L01` din lista **Designs**.*

1. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **5.0 mm**  
2. A treia roată = **copia primei roți** (nu a celei rotite), mutată la **100 mm** de ea (`20` apăsări) — are aceeași orientare ca prima și e **deja ridicată cu 5 mm**, ca prima  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **6 · 6 · 16** nou → îl tragi peste a treia roată → <span style="color:#E65722;font-weight:700">L</span> pe centrul ei (doar cele două direcții de pe plan)  
4. Placa cu pivoturi → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> (le separi), plăcii îi pui lungimea **170**  
5. Selectezi **cele trei roți** și **cele trei pivoturi** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(temporar)* → cu placa → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe direcția lungă → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe grupul temporar  
6. Selectezi placa și **cele trei pivoturi** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
7. <span style="color:#E65722;font-weight:700">Ruler</span>: între pivoturi `50` mm și `100` mm de la primul la al treilea  
8. <span style="color:#00A600;font-weight:700">Color</span>: câte o culoare pe roată  

**Încearcă tu — Complet — a treia roată și Ruler (12 min)**  
- [ ] A treia roată e la **100 mm** de prima, la aceeași înălțime  
- [ ] Placa are lungimea **170** și **3** pivoturi  
- [ ] Cu Ruler: **50** mm între pivoturi vecine  
- [ ] Fiecare roată are altă culoare  

---

## Greșeli frecvente
1. **Dinții se ating cap la cap** — a doua roată (sau roata mică) nu e rotită cu 22,5°. Rotește-o.  
2. **Roțile se calcă una pe alta** — distanța dintre pivoturi e prea mică. Păstrează **50 mm**.  
3. **Roțile sunt prea departe** — se văd goluri mari între dinți. Mută roata înapoi la 50 mm.  
4. **Dintele e doar pe o parte** — bara nu e centrată. Selectezi bara și discul, <span style="color:#E65722;font-weight:700">L</span>, mijloc pe ambele direcții.  
5. **Roata e prinsă de placă** — nu ai ridicat roata cu 5 mm sau ai dat Group cu placa. Roțile rămân **separate**.  
6. **Gaura nu trece** — Hole-ul nu a fost grupat. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> pe roată, apoi <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
7. **Am grupat tot** — <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> și refaci doar ce trebuie: roțile separate, pivoturile cu placa.  
8. **La roata mare nu ai 16 dinți** — ai oprit la 4 bare. Pentru 16 dinți trebuie **8** bare, câte 22,5°.  
9. **Ctrl+A a luat și roata mare** — scoate-o din selecție cu Shift+click înainte de <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.

---

## De făcut azi — „Angrenajul meu”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–6 și 7–9** — angrenajul (2 roți cu 8 dinți, a doua rotită 22,5°, placă `120 × 64 × 4`, pivoturi la `50` mm) **și** reducția (roată cu 16 dinți, roată cu 8 dinți, placă `110 × 76 × 4`), cu roțile separate și ridicate `5` mm, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — a treia roată, `Ruler`, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Angrenajul *(Minim)*
- [ ] Roată: disc **40 · 40 · 6** + 4 bare **56 · 6 · 6** rotite din 45° în 45°  
- [ ] Gaură **8 · 8 · 10** în centru · <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
- [ ] A doua roată: copie rotită **22,5°**, la **50 mm**  
- [ ] Pivoturi **6 · 6 · 16** pe centrele roților  
- [ ] Placă **120 · 64 · 4**, pivoturile grupate cu ea, roțile ridicate cu **5 mm**  

### Pasul 2 — Obiectul 2: Reducția *(Minim)*
- [ ] Roata mare: disc **60 · 60 · 6** + **8** bare **68 · 4 · 6** (22,5°) = **16** dinți, gaură **8 · 8 · 10**  
- [ ] Roata mică: disc **30 · 30 · 6** + **4** bare **38 · 4 · 6** (45°) = **8** dinți, rotită **22,5°**, la **50 mm**  
- [ ] Placă **110 · 76 · 4**, pivoturi **6 · 6 · 16** grupate cu ea, roțile ridicate cu **5 mm**  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>  

**→ Ai Minim când:** la ambele obiecte, dinții intră în goluri, iar roțile stau pe pivoturi, nelipite de placă.

### Pasul 3 — Complet
- [ ] A treia roată la **100 mm** de prima, placa **170** centrată pe cele trei roți  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: **50** mm între pivoturi vecine  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L01` e corect  
- [ ] Spui: dacă prima se învârte **spre dreapta**, a doua se învârte **spre ____**, a treia spre **____**  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>  

**Gata Complet când:** cele trei roți se potrivesc, distanțele sunt verificate cu Ruler, iar fiecare roată are culoarea ei.

---

## Bonus ★★★ — Provocare: Trenul de angrenaje cu manivelă
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile roților și adaugă un text pe placă  
- [ ] **Provocarea (obiect mai complicat):** în proiectul `Prenume_Nume_T3_L01_B`, adaugă o **a doua roată mică** (copia primei roți mici), la **50 mm** de roata mare, pe partea cealaltă: așa ai un tren de **3 roți** (**8 + 16 + 8 = 32** dinți). Pune un pivot **6 · 6 · 16** și pe ea și mărește placa la `150`, centrată. Apoi o **manivelă**, piesă **separată**: <span style="color:#1E90FF;font-weight:700">Box</span> `40 · 14 · 4` cu o gaură <span style="color:#00A600;font-weight:700">Hole</span> `Ø8` la `7` mm de un capăt, ridicată cu <span style="color:#E65722;font-weight:700">conul negru</span> la `12`, ca să stea pe pivotul unei roți mici, cu **mâner** <span style="color:#1E90FF;font-weight:700">Cylinder</span> `6 · 6 · 10` la celălalt capăt. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi cele **două** distanțe de `50` mm între pivoturi și gaura manivelei (`8`) față de pivot (`6`). Un coleg numără cele **32** de dinți și vede că manivela nu e lipită de roată.  

## Recapitulare rapidă
1. Roțile vecine se învârt în **sens invers**  
2. A doua roată se rotește cu **jumătate de pas** (22,5° la 8 dinți)  
3. Distanța dintre axe = **50 mm**  
4. Pivotul e mai subțire decât gaura = **joc**  
5. Roata cu **jumătate** din dinți face **dublul** de ture  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** Cylinder 40·40·6 + 4 bare 56·6·6 (45°) − Hole 8 → Group → copie + 22,5° + 50 mm → pivoturi 6·6·16 → placă 120·64·4 → roți +5 mm · Cylinder 60·60·6 + 8 bare 68·4·6 (22,5°) − Hole 8 și Cylinder 30·30·6 + 4 bare 38·4·6 (45°) − Hole 8, rotită 22,5°, la 50 mm → pivoturi → placă 110·76·4 → roți +5 mm  
**Complet:** + roata 3 la 100 mm · Ruler · culori

**Quiz scurt:**  
- De ce a doua roată se rotește cu 22,5°?  
- Dacă prima roată se învârte spre dreapta, încotro se învârte a doua?  
- Roata mare are 16 dinți, cea mică 8. Câte ture face roata mică când cea mare face una?

## Temă
Opțional: desenezi pe foaie un șir de **4** roți. Marchezi cu săgeți sensul fiecăreia (prima spre dreapta).

## Ce urmează
În **Lecția 2** faci o mașinuță cu roți și axe și o remorcă pe care o poți cupla de ea.
