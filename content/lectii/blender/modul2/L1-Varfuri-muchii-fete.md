# LECȚIA 1 — Cubul care se transformă
### Vârfuri, muchii, fețe
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> Până acum ai mutat **obiecte întregi**. Azi intri **înăuntrul** lor și miști chiar „oasele” unui model: vârfurile, muchiile și fețele. Dintr-un singur cub faci piramidă, rampă și trunchi.  
> Proiect: **„Cubul care se transformă”** · `Prenume_Nume_B2_L01.blend`

---

## Ce facem azi
La finalul orei ai **trei obiecte făcute dintr-un cub**: o piramidă, o rampă și un trunchi de piramidă, plus încă un obiect la alegere. Orice model 3D este o **plasă** (în engleză, *mesh*) făcută din puncte, linii și suprafețe. Dacă înțelegi cele trei piese, poți modela orice formă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap Modulul 1 |
| 10–30 | Object Mode și Edit Mode, contorul de piese |
| 30–55 | Cele 3 moduri de selectare, selectare și mutare |
| 55–95 | Piramida, rampa, trunchiul |
| 95–110 | Creezi tu: cele 3 forme, puse la rând |
| 110–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Tab** | Trece între Object Mode și Edit Mode | intri în cub, ieși din cub |
| Butoanele **Vertex / Edge / Face** | Aleg ce piesă selectezi | punct, linie sau suprafață |
| **Alt + Z** | X-ray: vezi și piesele din spate | selectezi muchii ascunse |
| **M** | Meniul Merge: unește vârfuri | **At Center**, **By Distance** |
| *Recap:* **G / S / R** | Mută / scalează / rotește | acum și pe piese, nu doar pe obiecte |

---

## Pas cu pas

### 1) Pornim curat
**File → New → General.** Ai cubul, lumina și camera.

Ca să vezi câte piese are un obiect, deschide meniul **Overlays** (în bara de sus a viewport-ului, iconița cu două cercuri suprapuse și săgeata de lângă ea) și bifează **Statistics**. În colț apar numere: *Vertices*, *Edges*, *Faces*.

**Încearcă tu — contorul (2 min)**  
- [ ] Ai bifat **Statistics** și vezi numerele în colțul viewport-ului  
- [ ] Ai găsit cuvintele *Vertices*, *Edges* și *Faces*  

### 2) Două moduri de lucru

| Mod | Ce muți | Cum intri |
|-----|---------|-----------|
| **Object Mode** | obiectul întreg | modul de pornire |
| **Edit Mode** | piese din interiorul obiectului | **Tab** |

Selectează cubul și apasă **Tab** (mouse peste viewport): apare rețeaua portocalie, iar sus-stânga scrie **Edit Mode**. Apasă **Tab** din nou ca să ieși.

> Cât ești în Object Mode muți obiectul întreg. În Edit Mode muți doar ce ai selectat.

**Încearcă tu — Tab (3 min)**  
- [ ] Intri în Edit Mode și vezi rețeaua portocalie  
- [ ] Ieși din nou, cu **Tab**  
- [ ] Spui cu voce tare în ce mod ești, uitându-te sus-stânga  

### 3) Cele 3 piese ale unei plase

| Piesă | Ce e | Câte are cubul |
|-------|------|----------------|
| **Vertex** (vârf) | un punct | 8 |
| **Edge** (muchie) | o linie între 2 vârfuri | 12 |
| **Face** (față) | suprafața dintre mai multe muchii | 6 |

În Edit Mode, sus-stânga, lângă numele modului, sunt **trei butoane mici**: **Vertex**, **Edge**, **Face**. Cu ele alegi ce piesă selectezi. Altă variantă: **Ctrl + Tab** deschide un meniu rotund cu cele trei moduri.

> **Laptop cu Emulate Numpad?** Atunci cifrele **1, 2, 3** de sus schimbă vederea, nu modul de selectare. Folosește butoanele sau **Ctrl + Tab**. Dacă ai mouse și ai dezactivat Emulate Numpad, cifrele **1, 2, 3** merg și ele.

**Încearcă tu — cele 3 piese (4 min)**  
- [ ] Alegi **Vertex**, dai click pe un colț și în contor vezi **1/8**  
- [ ] Alegi **Edge**, dai click pe o muchie și vezi **1/12**  
- [ ] Alegi **Face**, dai click pe o față și vezi **1/6**  

### 4) Selectăm și mutăm
- **Click** pe o piesă o selectează.  
- **Shift + click** adaugă la selecție.  
- **A** selectează tot, **Alt + A** deselectează tot.  
- **G** mută, cu **X / Y / Z** pentru axă. **S** scalează, **R** rotește.  
- Tragi cu mouse-ul un dreptunghi gol pe ecran: selectezi tot ce e în el (**Box select**).  
- **Alt + Z** pornește X-ray: vezi și piesele din spate. Fără X-ray, selectezi doar ce se vede din față.  
- **Ctrl + Z** anulează o greșeală.

**Încearcă tu — selectăm și mutăm (5 min)**  
- [ ] Alegi **Vertex**, selectezi un colț și îl muți cu **G**: cubul se deformează  
- [ ] Anulezi cu **Ctrl + Z** și forma revine  
- [ ] Cu **Alt + Z** pornit, tragi un dreptunghi peste **partea de sus** a cubului și vezi **4/8** în contor  

### 5) Piramida
1. Cub nou (șterge cubul vechi cu **X**, apoi **Shift + A → Mesh → Cube**).  
2. **Tab**, alegi **Face**, click pe **fața de sus**.  
3. **S 0 Enter**: cele 4 vârfuri de sus ajung în același loc. Pare piramidă!  
4. Dar sunt **4 vârfuri suprapuse**. Selectează-le (cu fața de sus încă selectată, sunt deja selectate) și unește-le: **M → At Center**.  
5. Ieși din Edit Mode cu **Tab**.

> Verificare: în contor trebuie să vezi **5 vertices, 8 edges, 5 faces**.

**Încearcă tu — piramida (5 min)**  
- [ ] Piramida are un singur vârf, sus  
- [ ] Contorul arată 5 · 8 · 5  

### 6) Rampa
1. Cub nou, **Tab**, alegi **Edge** și pornești **Alt + Z**.  
2. Selectează **muchia de sus** din partea din față.  
3. **G Z −2 Enter**: muchia coboară până jos și cubul devine o **pană**, adică o rampă.  
4. Acum muchia coborâtă se suprapune cu cea de jos. Selectează tot (**A**) și curăță cu **M → By Distance**.

> Verificare: contorul arată **6 vertices, 9 edges, 5 faces**.

**Încearcă tu — rampa (5 min)**  
- [ ] Rampa urcă de la podea spre spate  
- [ ] După **By Distance** contorul arată 6 · 9 · 5  
- [ ] Ai rotit vederea ca să te uiți la rampă din lateral  

### 7) Trunchiul de piramidă
1. Cub nou, **Tab**, alegi **Face**.  
2. Selectează fața de sus și apasă **S 0.4 Enter**: partea de sus se micșorează, iar laturile se înclină.  
3. Cu fața încă selectată: **G Z 1 Enter**. Trunchiul crește.  
4. Compară cu piramida: piramida se termină într-un punct, trunchiul are vârful tăiat, ca un pahar cu gura mai îngustă.

> Verificare: contorul rămâne **8 vertices, 12 edges, 6 faces**, pentru că nu ai unit nimic.

**Încearcă tu — trunchiul (4 min)**  
- [ ] Sus este o față plată, mai mică decât baza  
- [ ] Schimbi **0.4** în **0.7** (după **Ctrl + Z**) și compari cele două trunchiuri  

### 8) Creează tu — „Cubul care se transformă”
Pune cele trei forme una lângă alta:
1. Pe fiecare cub ieși din Edit Mode (**Tab**), apoi îl muți în Object Mode: **G X** cu o valoare (de exemplu **−3**, **0**, **3**).  
2. Dai fiecărui obiect un nume cu **F2**: `Piramida`, `Rampa`, `Trunchiul`.  
3. Verifici din față și de sus (vederile din Modulul 1).  

**Gata când:**  
- [ ] Cele 3 forme sunt una lângă alta, fără să se atingă  
- [ ] Fiecare are numele ei în **Outliner**  
- [ ] Spui ce piese ai mutat pentru fiecare formă  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Muți tot obiectul, nu piesa | Ești în Object Mode | Apasă **Tab** |
| Selectezi doar partea din față | X-ray este oprit | **Alt + Z** |
| Cifrele schimbă vederea, nu selectarea | Emulate Numpad este activ | Butoanele din antet sau **Ctrl + Tab** |
| Piramida nu e „curată” | Ai uitat să unești vârfurile | **M → At Center** |
| Rampa are muchii duble | Ai lăsat vârfurile suprapuse | **A**, apoi **M → By Distance** |
| Ai stricat forma | Ai mutat prea mult | **Ctrl + Z** |

---

## De făcut azi — „Cubul care se transformă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Intri și ieși din Edit Mode, selectezi un vârf, o muchie și o față și le muți |
| **Complet** | Minim + piramidă (cu Merge), rampă și trunchi, puse una lângă alta și cu nume |

### Pasul 1 — Minim
- [ ] Știu să intru și să ies din Edit Mode  
- [ ] Am selectat și am mutat un vârf, o muchie și o față  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Piramidă cu **M → At Center** (5 · 8 · 5)  
- [ ] Rampă curățată cu **By Distance** (6 · 9 · 5)  
- [ ] Trunchi de piramidă (8 · 12 · 6)  
- [ ] Cele trei obiecte au nume și sunt puse la rând  
- [ ] Numele `B2_L01` e corect

---

## Bonus ★★★ — Provocare: Satul din cuburi
*Doar dacă ai terminat Complet.*

Construiește un sat de cinci clădiri, toate făcute din cuburi transformate prin Edit Mode.

- [ ] Cel puțin 5 clădiri diferite: casă cu acoperiș (cortul), turn (trunchiul), piramidă, rampă și cristal  
- [ ] Toate stau pe aceeași linie, la distanțe egale  
- [ ] Fiecare clădire are un nume clar în **Outliner**  
- [ ] Una dintre ele are o formă gândită de tine  

---

## Recapitulare pe scurt
1. **Tab**: Object Mode ↔ Edit Mode  
2. Vertex, Edge, Face: punct, linie, suprafață (cubul: 8 · 12 · 6)  
3. **Alt + Z**: X-ray, ca să selectezi și ce nu se vede  
4. **M → At Center** unește vârfuri, **M → By Distance** curăță vârfurile suprapuse  
5. **G / S / R** merg și pe piese, nu doar pe obiecte  

## Mai departe *(opțional)*
Ia un cub de jucărie și gândește-te ce formă ar apărea dacă ai trage de un colț. Ce piesă ar trebui să muți?

## Quiz scurt
- Câte vârfuri, muchii și fețe are un cub?  
- Cum treci în Edit Mode?  
- Ce face **M → At Center**?  
- De ce pornim X-ray când selectăm?

## Temă
Fotografiază sau fă un screenshot al piramidei tale în Edit Mode și scrie pe el numele celor trei piese: vârf, muchie și față, cu un exemplu pentru fiecare.
