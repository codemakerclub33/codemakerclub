# LECȚIA 2 — Turul obiectului
### Navigare în 3D
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi înveți să te **plimbi** prin lumea 3D: să te rotești în jurul unui obiect, să te apropii și să te îndepărtezi, să vezi din față, de sus și din lateral.  
> Proiect: **„Turul obiectului”** · `Prenume_Nume_B1_L02.blend`

---

## Ce facem azi
La finalul orei te miști în 3D fără să te pierzi și găsești oricând obiectul. Un obiect 3D are **lățime, înălțime și adâncime**. Ca să modelezi bine obiectul, îl privești din mai multe părți, ca atunci când te uiți la o jucărie.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 |
| 10–45 | Rotire, deplasare, zoom |
| 45–75 | Vederi standard (față, dreapta, sus) |
| 75–90 | Perspectivă / ortografic, joc „găsește obiectul” |
| 90–110 | Creezi tu: turul ghidat |
| 110–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · fișierul din L1 sau unul nou · mouse cu rotiță (sau emulare)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| Rotița apăsată + mișcarea mouse-ului | Rotește vederea în jurul scenei | ține rotița apăsată și mișcă |
| **Shift** + rotița apăsată | Deplasează vederea în lateral | Shift + rotiță + mouse |
| Rotița învârtită | Apropie sau depărtează (zoom) | înainte = mai aproape |
| **1 / 3 / 7** (Numpad) | Vedere din față / dreapta / sus | 7 = privești de sus |
| **5** (Numpad) | Perspectivă ↔ ortografic | vezi fără deformare |
| **Home** | Arată toată scena | când te-ai pierdut |

---

## Pas cu pas

### 1) Deschide scena
**File → New → General.** Ai din nou cubul, lumina și camera.

### 2) Cele 3 mișcări de bază (mouse peste viewport)

| Ce vrei | Cu mouse-ul | Fără rotiță (emulare) |
|---------|-------------|------------------------|
| **Rotești** vederea | ține apăsat **rotița** și mișcă | **Alt + click stânga** și mișcă |
| **Deplasezi** vederea | **Shift + rotiță** și mișcă | **Shift + Alt + click stânga** |
| **Zoom** | **învârți rotița** | **Ctrl + Alt + click stânga**, sau rotița de pe touchpad |

Încearcă fiecare 1 minut. La început pare ciudat, dar în 10 minute e firesc!

**Încearcă tu — mișcările (3 min)**  
- [ ] Poți roti vederea în jurul cubului  
- [ ] Poți deplasa vederea și poți mări sau micșora  
- [ ] Fără rotiță: știi combinațiile cu **Alt**  

### 3) „Giroscopul” din colțul dreapta sus
În colțul viewport-ului e o **sferă cu axe colorate**:

| Culoare | Axa |
|---------|-----|
| **Roșu** | X (stânga ↔ dreapta) |
| **Verde** | Y (față ↔ spate) |
| **Albastru** | Z (sus ↔ jos) |

- **Click** pe o axă → te uiți **pe direcția** ei.  
- **Trage** cu mouse-ul pe sferă → rotești vederea.  
- Mici butoane lângă ea: **mâna** (deplasare) și **lupa** (zoom). Le tragi cu mouse-ul.

**Încearcă tu — giroscopul (2 min)**  
- [ ] Un click pe axa roșie, verde sau albastră schimbă vederea  
- [ ] Tragând pe sferă, vederea se rotește  

### 4) Vederi standard
Cu **Numpad** (sau emulat, cu tastele de sus):

| Tasta | Vederea |
|-------|---------|
| **1** | din **față** |
| **3** | din **dreapta** |
| **7** | de **sus** |
| **Ctrl + 1 / 3 / 7** | din **spate / stânga / jos** |
| **0** | prin **camera** |
| **5** | schimbă **perspectivă ↔ ortografic** |

- **Perspectivă:** ca ochiul tău, lucrurile îndepărtate par mici.  
- **Ortografic:** toate liniile paralele rămân paralele, perfect pentru a modela precis.

**Încearcă tu — vederile (3 min)**  
- [ ] Tastele **1**, **3** și **7** dau față, dreapta și sus  
- [ ] Tasta **0** arată prin cameră, iar **5** schimbă perspectiva cu ortografic  

### 5) Nu te pierde!

| Tasta | Ce face |
|-------|---------|
| **Home** | arată **toată scena** |
| **Numpad .** (punct) | **apropie** obiectul selectat |
| **Shift + C** | resetează vederea și cursorul 3D |

**Încearcă tu — „nu te pierde” (2 min)**  
- [ ] **Home** aduce toată scena în vedere  
- [ ] După un click pe un obiect în **Outliner**, **Numpad .** sare la el  

### 6) Complet — jocul „Găsește obiectul”
1. Adaugă 3 obiecte (**Shift + A → Mesh**: Cone, Torus, Monkey) și mută obiectele departe de centru cu **G**.  
2. Apasă **Home**: le vezi pe toate.  
3. Click pe fiecare în **Outliner**, apoi **Numpad .**: vederea sare la el.  
4. Fă un scurt „tur”: față (1), dreapta (3), sus (7) și cameră (0).

**Încearcă tu — jocul (3–4 min)**  
- [ ] Ai 3 obiecte mutate departe de centru, iar **Home** le arată pe toate  
- [ ] Faci turul: față, dreapta, sus, cameră  

### 7) Creează tu — „Turul ghidat”
Acum aranjezi tu scena și o arăți altcuiva.
1. Construiește o scenă cu **5 obiecte diferite** (Shift + A → Mesh), la distanțe diferite față de centru. Dă fiecărui obiect un nume clar cu **F2**.  
2. Așază obiectele ca să existe cel puțin un obiect **mai sus** decât celelalte și două obiecte **aproape unul de altul**.  
3. Scrie pe o foaie sau în caiet 3 propoziții:  
   - Din ce vedere se vede cel mai bine **înălțimea** obiectelor?  
   - Din ce vedere vezi dacă două obiecte sunt **aliniate**?  
   - Din ce vedere vezi cât de **departe** sunt două obiecte între ele?  
4. **Jocul:** un coleg sau un adult spune numele unui obiect, iar tu îl găsești în **mai puțin de 10 secunde** cu **Outliner** și **Numpad .**. Repetați de 3 ori.

**Gata când:**  
- [ ] Scena are 5 obiecte cu nume  
- [ ] Am scris cele 3 propoziții  
- [ ] Am găsit un obiect cerut în sub 10 secunde  

---

## Greșeli frecvente
1. **Totul pare strâmb** — ești în perspectivă; apasă **5** pentru ortografic.  
2. **Nu vezi nimic** — ești prea aproape sau prea departe; **Home**.  
3. **Numpad nu merge** — activează **Emulate Numpad** în Preferences.  
4. **Vederea se învârte în loc** — ai ținut Alt apăsat.  
5. **Confuzie între vedere și obiect** — la navigare **nu muți obiectul**, doar „camera ta”.

---

## De făcut azi — „Turul obiectului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Rotire, deplasare, zoom |
| **Complet** | Minim + 4 vederi + ortografic + Home și Numpad . + turul ghidat (5 obiecte, 3 propoziții) |

### Pasul 1 — Minim
- [ ] Rotesc vederea  
- [ ] Mă apropii și mă îndepărtez  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Văd scena din față, dreapta, sus  
- [ ] Trec între perspectivă și ortografic  
- [ ] Găsesc fiecare obiect cu Numpad .  
- [ ] Am făcut turul ghidat: scenă cu 5 obiecte și 3 propoziții  
- [ ] Numele `B1_L02` e corect

---

## Bonus ★★★ — Provocare: Comoara ascunsă
*Doar dacă ai terminat Complet.*

Ascunde trei obiecte în scenă, iar un coleg le găsește doar cu navigarea.

- [ ] Un cub, o sferă și un con, puse departe unul de altul și de centru
- [ ] Din vederea de start nu se văd toate trei deodată
- [ ] Colegul le găsește pe toate trei în mai puțin de un minut, doar cu rotire, deplasare și zoom, fără Outliner
- [ ] Notezi pe foaie ce vedere (`1`, `3` sau `7`) l-a ajutat cel mai mult

## Recapitulare pe scurt
1. Rotire · deplasare · zoom  
2. **1 / 3 / 7** = față / dreapta / sus  
3. **5** = perspectivă ↔ ortografic  
4. **Home** te readuce la scenă

## Mai departe *(opțional)*
Joacă un joc de aventură 3D și observă cum se mișcă camera. Acolo, camera e „ochiul” tău, ca la navigarea din Blender.

## Quiz scurt
- Ce culoare are axa Z?  
- Ce face **Home**?  
- Când e util modul ortografic?

## Temă
Alege un obiect din casă (cană, jucărie) și spune ce ai vedea din **față, dreapta, sus**.
