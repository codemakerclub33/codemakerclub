# LECȚIA 7 — Fluturele
### Simetria cu Mirror
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> Multe lucruri sunt **simetrice**: fața, avionul, fluturele. Cu modificatorul **Mirror** modelezi doar jumătate, iar Blender face cealaltă jumătate singur.  
> Proiect: **„Fluturele”** · `Prenume_Nume_B2_L07.blend`

---

## Ce facem azi
La finalul orei ai un **fluture simetric**, cu aripa modelată o singură dată, cu pete, corp, cap și antene. Modelezi de **două ori mai repede**, iar cele două jumătăți ies identice. Modelatorii folosesc Mirror mereu pentru personaje, avioane și animale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6: editare proporțională |
| 10–25 | Ce e un modificator și Mirror |
| 25–60 | Aripa |
| 60–80 | Corpul și antenele |
| 80–105 | Pete și culori |
| 105–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Modifiers → Mirror** | Face automat oglinda unui obiect | aripa dreaptă apare și în stânga |
| **Clipping** | Lipește jumătățile la mijloc | fără linie între aripi |
| **Click dreapta → Subdivide** | Taie fețele în fețe mai mici | grilă 4 × 4 |
| **N → Item → Dimensions** | Setează mărimea exactă a obiectului | corp 0.3 × 2 × 0.3 |
| **Assign** (în Materials) | Pune un material pe fețele selectate | pete negre pe aripă |

---

## Pas cu pas

### 1) Ce e un modificator?
Un **modificator** e o „regulă” pusă pe un obiect, care îi schimbă forma **fără să strice obiectul**: poți opri sau șterge regula oricând. Îl găsești în **Properties → tab-ul cheii franceze** (Modifiers).

### 2) Pregătim jumătatea de aripă
1. Șterge cubul (**X**). **Shift + A → Mesh → Plane**.  
2. Vedere de sus (**Numpad 7**). **Tab** (Edit Mode), **A** (selectează tot).  
3. **G X 1 Enter**: planul se mută spre dreapta, iar marginea lui din stânga ajunge exact pe **X = 0**. Centrul obiectului (punctul portocaliu) rămâne la mijloc.  
4. Cu planul selectat: **click dreapta → Subdivide**, apoi în panoul **Adjust Last Operation** pune **Number of Cuts = 3**. Ai o grilă de 4 × 4 pătrate.

**Încearcă tu — jumătatea de aripă (3 min)**  
- [ ] Marginea din stânga a planului este exact pe linia verde a axei Y (X = 0)  
- [ ] Ai o grilă de 4 × 4 pătrate  

### 3) Adăugăm Mirror
1. **Tab** (Object Mode).  
2. **Properties → Modifiers → Add Modifier → Generate → Mirror**.  
3. Bifează **Clipping**: jumătățile rămân lipite la mijloc.  
4. La **Axis** trebuie să fie bifat doar **X**.

Acum modelezi doar în dreapta, iar în stânga apare **oglindirea**.

**Încearcă tu — Mirror (4 min)**  
- [ ] Vezi planul și oglinda lui, lipite la mijloc, fără linie între ele  
- [ ] Ai bifat doar **X** la Axis  
- [ ] Ai apăsat pe ochiul modificatorului: oglinda dispare și reapare  

### 4) Forma aripii
Revino în Edit Mode (**Tab**), modul **Vertex** (butonul din antet), vedere de sus (**Numpad 7**), **Alt + Z** pornit:

1. **Aripa de sus (mare):** selectează vârful din colțul de sus-dreapta. **G X 0.8 Enter**, apoi **G Y 0.6 Enter**.  
2. **Aripa de jos (mică):** colțul de jos-dreapta. **G X −0.2 Enter**, apoi **G Y −0.3 Enter**.  
3. **Crestătura dintre aripi:** vârful din mijlocul marginii din dreapta: **G X −0.6 Enter**.  
4. Rotunjește colțurile cu **O** (editare proporțională, rotița pentru rază) și **G** pe vârfurile de margine, ca să arate ca o aripă și nu ca un pătrat.  
5. Aripile pot fi puțin ridicate, ca în zbor: selectează vârfurile cele mai din exterior și **G Z 0.3**.

Privește și din față (**Numpad 1**): aripile fac un „V” ușor.

**Încearcă tu — aripa (10 min)**  
- [ ] Aripa de sus este mai mare decât cea de jos  
- [ ] Între ele este o crestătură  
- [ ] Colțurile sunt rotunjite  
- [ ] Din față, aripile fac un „V” ușor  

### 5) Grosime
O aripă fără grosime dispare când o privești din lateral:

1. **A** (selectează tot), **E Z 0.03 Enter**.  
2. **Tab**, apoi click dreapta → **Shade Smooth**.

**Încearcă tu — grosimea (3 min)**  
- [ ] Din lateral aripa se vede ca o linie subțire, dar nu dispare  
- [ ] Suprafața este netedă  

### 6) Corpul
Corpul nu are nevoie de Mirror: e deja simetric.

1. **Shift + A → Mesh → UV Sphere**. În **N → Item → Dimensions** pune **X 0.3, Y 2, Z 0.3**.  
2. **Shade Smooth**. Corpul e acum ca un ou lung, în lungul axei Y.  
3. **Capul:** altă UV Sphere, **Dimensions 0.4 × 0.4 × 0.4**, la **Y = 1.1**.

**Încearcă tu — corpul (4 min)**  
- [ ] Corpul stă între cele două aripi, în lungul axei Y  
- [ ] Capul se atinge de corp, în partea din față  

### 7) Antenele
1. **Shift + A → Mesh → Cylinder**: **Vertices 8, Radius 0.015, Depth 0.8**.  
2. **R X 90 Enter**, ca să stea pe lungimea lui Y.  
3. **R Z −20 Enter**, apoi **Location X 0.1, Y 1.5**.  
4. **Shift + D**, **Enter**, apoi în **N → Item** schimbă **Location X** în **−0.1** și **Rotation Z** în **20°**.

**Încearcă tu — antenele (4 min)**  
- [ ] Două antene, care se depărtează una de alta spre vârf  
- [ ] Ambele pornesc de la cap  

### 8) Complet — pete și culori
**Petele de pe aripă** (în Edit Mode, pe aripă):
1. Modul **Face** (butonul din antet). Selectează 3–4 fețe, la întâmplare.  
2. **I 0.06 Enter** (inset): apar „pete” pe aripă.  
3. Încă o dată **I 0.04**, pe alte fețe.

**Materiale:**
1. Aripa: **Properties → Material → New**, culoare portocalie.  
2. Pete: apasă **+** (slot nou), **New**, culoare neagră, apoi în Edit Mode, cu fețele petelor selectate, apasă **Assign**.  
3. Corp și cap: maro închis, antene negre.  
4. Randare: fundal deschis, lumină de sus (ca în Modulul 1).

**Gata când:**  
- [ ] Aripa are pete negre, iar petele se văd și pe cealaltă aripă  
- [ ] Corpul, capul și antenele au culori proprii  
- [ ] Obiectele au nume (`Aripa`, `Corp`, `Cap`, `Antena`)  

### 9) Creează tu — fluturele tău
Schimbă ceva: culorile, forma aripii sau numărul de pete. Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Nu apare oglinda | Modificatorul nu e pe aripă sau Axis e greșit | Selectează aripa; bifează doar **X** |
| Rămâne o linie la mijloc | Nu ai bifat **Clipping** | Bifează **Clipping** |
| Aripa e într-o parte și oglinda în alta | Marginea din stânga nu e la X = 0 | Refă pasul 2.3 |
| Aripile arată ca un pătrat | Ai mutat prea puține vârfuri | Folosește **O** și mută mai multe vârfuri |
| Modificatorul „dispare” | E ascuns | Apasă pe ochiul din listă |

---

## De făcut azi — „Fluturele”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Aripă cu Mirror + corp |
| **Complet** | Minim + formă de aripă + pete + antene + culori |

### Pasul 1 — Minim
- [ ] Planul mutat la X = 0  
- [ ] Mirror cu Clipping  
- [ ] Corp  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Aripi de sus și de jos  
- [ ] Pete pe aripi  
- [ ] Antene  
- [ ] Culori pe fiecare piesă  
- [ ] Numele `B2_L07` e corect

---

## Bonus ★★★ — Provocare: Libelula
*Doar dacă ai terminat Complet.*

Construiește o libelulă cu aceeași tehnică.

- [ ] Un corp lung și subțire (UV Sphere cu **Y 3**, **X 0.2**, **Z 0.2**)  
- [ ] Două perechi de aripi lungi (**Plane**, modelate o singură dată, cu **Mirror**)  
- [ ] Un cap cu doi ochi mari (sfere)  
- [ ] Culori vii și nume clare  

---

## Recapitulare pe scurt
1. **Modificator** = regulă reversibilă  
2. **Mirror** = simetrie automată  
3. **Clipping** lipește jumătățile  
4. **Assign** pune un material pe fețe alese  
5. Modelezi o parte și vezi ambele

## Mai departe *(opțional)*
Caută poze cu fluturi sau avioane și observă simetria. Ce altceva ai modela cu Mirror?

## Quiz scurt
- Ce face modificatorul Mirror?  
- De ce bifăm Clipping?  
- Unde trebuie să fie marginea aripii față de axa X?  
- Ce face butonul Assign?

## Temă
Alege un obiect simetric din casă (o jucărie, o pereche de ochelari, un avion de hârtie) și **refă-l în Blender**, cu **Mirror**.
- Desenează pe foaie jumătatea pe care o modelezi.
- Construiește jumătatea, adaugă `Mirror` cu `Clipping` și verifică din față că nu rămâne nicio linie la mijloc.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L07_Tema.blend`.
