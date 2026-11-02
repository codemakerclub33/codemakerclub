# LECȚIA 5 — Pădurea
### Camera, Play și testarea
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi înveți să-ți miști **camera**, să testezi cu **Play** și construiești **Etapa 5**: o pădure cu copaci, un râu și un traseu pe ciocuri de copac până la o cabană.  
> Proiect: **„Etapa5_Padure”** · Place: `Prenume_Nume_M1` (același ca la L1–L4)

---

## Ce facem azi
La finalul orei ai **Etapa 5**: o pădure cu șase copaci (trunchi din **Cylinder** și coroană din **Sphere**), un râu și un obby: pornești de la **Start**, sari pe patru **ciocuri** de copac din râu, mergi pe o **buturugă** și ajungi la **cabană**. Înveți să miști **camera** în editare și să privești etapa din **trei puncte** (de sus, din lateral și de la nivelul avatarului). La final faci un ciclu complet: **găsești o problemă, o repari, testezi din nou**.

**Notă:** azi tot fără cod.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–30 | Camera în editare · Play și Stop (**Încearcă tu**) |
| 30–65 | **Proiectul 1** · sol, râu, 6 copaci |
| 65–95 | **Proiectul 2** · ciocuri, buturugă, cabană, grupul |
| 95–120 | Testare cu reparație · recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Click dreapta ținut + mouse** | Te uiți în jur, în editare | Te întorci spre copac |
| **Click dreapta ținut + W A S D** | Zbori cu camera | Te apropii de o piesă |
| **Scroll** | Zoom aproape / departe | Vezi golul dintre ciocuri |
| **F** | Camera se duce la piesa selectată | Selectezi `Cabana`, apeși **F** |
| **Play** / **Stop** | Pornești testul / te întorci la editare | Joci ca avatar |
| **Ctrl+G** pe piese, apoi **Ctrl+D** | Faci un grup (Model) și îl copiezi | Un copac întreg |

---

## Pas cu pas

### 1) Camera în editare
Nu ești încă avatarul: camera e liberă. Încearcă pe ce ai construit la L4.

1. Ții apăsat **click dreapta** și miști mouse-ul: te uiți în jur  
2. Ții **click dreapta** și apeși **W A S D**: te miști prin scenă  
3. **Scroll** pentru zoom  
4. Selectezi o piesă și apeși **F**: camera se duce la ea  

**Trei puncte de privit** (le folosim și azi, la testare):

| Punct | Cum arată | Ce vezi |
|-------|-----------|---------|
| **De sus** | Zbori deasupra etapei | Traseul întreg, golurile |
| **Din lateral** | La înălțimea pieselor | Înălțimi: treptele, ciocurile |
| **La nivelul avatarului** | Aproape de sol | Cum vede jucătorul |

**Încearcă tu — camera (4 min)**  
- [ ] Privești **Etapa4_Parcare** de sus  
- [ ] O privești din lateral, la rampă  
- [ ] Selectezi `Finish` și apeși **F**  

### 2) Play = ești jucătorul
1. Apeși **Play** (butonul de sus din bara Test) și avatarul apare la **SpawnLocation**  
2. Controale: **W A S D** (mers), mouse (camera), **Space** (salt)  
3. Poți apăsa **Pause** ca să te uiți liniștit; **Stop** te întoarce la editare  
4. **Nu editezi** în timpul testului: mai întâi **Stop**  

**Încearcă tu — un tur (3 min)**  
- [ ] **Play** pe Etapa 4  
- [ ] Ajungi la Finish  
- [ ] **Stop** și spui care a fost cel mai greu punct  

### 3) Proiectul 1 — Sol, râu, copaci
Etapa 5 stă la **150 de stud-uri** de Etapa 4, spre **stânga** pe axa roșie: centrul ei e `-150, 0, 150`, iar pădurea are **80 × 60** stud-uri.

Schița pădurii, **văzută de sus** (nu e la scară):

```
┌────────────────────────────────────────┐
│                                        │
│              T               T         │
│      T                                 │
│                      T              T  │
│                                        │
│    T                                   │
│          ~~~~~~~~~~~~~~~~~~~~~         │
│     S    ~~1~~~~2~~~~3~~~~4~=======  C │
│          ~~~~~~~~~~~~~~~~~~~~~         │
│                                        │
└────────────────────────────────────────┘
```

**S** = Start · **T** = copac · **~** = râu · **1–4** = ciocuri · **=** = buturugă · **C** = cabană (Finish)

**Piesele din Proiectul 1:**

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `SolPadure` | Block | `80, 1, 60` | `-150, 0.5, 150` | Grass | verde |
| `Rau` | Block | `40, 0.2, 14` | `-150, 1.1, 135` | Glass | albastru |
| `Trunchi1` | Cylinder | `10, 3, 3` | `-178, 6, 165` | Wood | maro |
| `Coroana1` | Sphere | `10, 10, 10` | `-178, 14, 165` | Grass | verde închis |

Pentru `Rau`, setezi **Transparency** `0.4` și debifezi **CanCollide**: e doar decor, poți călca prin el.

**Cum faci un copac:**
1. Faci `Trunchi1`: **Cylinder**, **Size** `10, 3, 3`, **Orientation** `0, 0, 90` (stă în picioare), **Anchor**  
2. Faci `Coroana1`: **Sphere**, o pui deasupra trunchiului, **Anchor**  
3. Le selectezi pe amândouă, **Ctrl+G**, redenumești grupul **`Copac1`**  
4. Selectezi `Copac1`, **Ctrl+D**, apoi îl muți cu **Move** în altă parte; redenumești `Copac2`  
5. Faci 6 copaci în total, la marginea terenului, **departe de râu**: aproximativ pe pozițiile **T** din schiță (în partea de nord a terenului și în colțul din stânga)  
6. Mută **SpawnLocation** (Move sau **Position** `-180, 1.5, 135`) la capătul din stânga al râului, ca să apari în pădure, nu la Etapa 1  
7. **Play**: te plimbi printre copaci și te lovești de ei. **Stop**. Salvezi  

**Încearcă tu — pădurea (20–30 min)**  
- [ ] `SolPadure` cu **Grass** și `Rau` albastru, transparent, fără **CanCollide**  
- [ ] 6 copaci, fiecare **grup** cu trunchi și coroană, toate **ancorate**  
- [ ] **SpawnLocation** e în pădure  
- [ ] **Play**: copacii te opresc, râul nu  
- [ ] Salvezi  

### 4) Proiectul 2 — Ciocuri, buturugă, cabană
**Obby-ul pădurii:** de la **Start** sari pe ciocurile **1, 2, 3, 4** din râu, mergi pe **buturugă** și ajungi la **cabană**.

| Nume | Formă | Size | Position | Orientation | Material |
|------|-------|------|----------|-------------|----------|
| `Ciot1` | Cylinder | `4, 6, 6` | `-166, 3, 135` | `0, 0, 90` | Wood |
| `Ciot2` | Cylinder | `6, 6, 6` | `-156, 4, 135` | `0, 0, 90` | Wood |
| `Ciot3` | Cylinder | `8, 6, 6` | `-146, 5, 135` | `0, 0, 90` | Wood |
| `Ciot4` | Cylinder | `10, 6, 6` | `-136, 6, 135` | `0, 0, 90` | Wood |
| `Buturuga` | Cylinder | `20, 3, 3` | `-124, 9.5, 135` | `0, 0, 0` | Wood |
| `Cabana` | Block | `10, 1, 10` | `-112, 10.5, 135` | — | Neon, galben |

**Cum faci:**
1. **Ciocurile:** `Ciot1`, apoi **Ctrl+D** de 3 ori; schimbi **Name**, **Size** (primul număr, lungimea) și **Position**. Fiecare e mai înalt cu 2 stud-uri decât cel dinainte  
2. **Buturuga:** Cylinder **culcat**, cu **Orientation** `0, 0, 0`, cu vârful la același nivel ca `Ciot4`  
3. **Cabana:** **Neon** și galben, ca la Finish-ul de la L4  
4. Toate **ancorate**  
5. **Play**: sari pe `Ciot1`…`Ciot4`, mergi pe buturugă și ajungi la `Cabana`. **Stop**  
6. Selectezi **tot ce ai făcut azi** (fără SpawnLocation) și **Ctrl+G**; redenumești grupul **`Etapa5_Padure`**  
7. Salvezi  

**Încearcă tu — obby-ul pădurii (15–25 min)**  
- [ ] 4 ciocuri, buturuga și cabana, toate ancorate  
- [ ] Parcurgi de la Start la `Cabana`, **fără să cazi**  
- [ ] Grupat și numit `Etapa5_Padure`  
- [ ] Salvat  

### 5) Găsești, repari, testezi din nou
Un playtest bun urmează trei pași: **găsești** o problemă, **o repari**, **testezi din nou**.

| Ce vezi în Play | Ce faci în editare |
|-----------------|--------------------|
| Nu ajungi cu saltul pe un ciot | Apropii ciotul (**Position**) sau îl faci mai scund (**Size**) |
| Cazi de pe buturugă | Verifici că vârful ei e la același nivel ca `Ciot4` |
| O piesă a căzut sau a dispărut | **Anchor** |
| Un copac stă în drum | Îl muți cu **Move** |
| Nu vezi unde e Finish-ul | **Color** și **Material** (**Neon**) |

1. Testezi în **Play** și notezi **o** problemă  
2. **Stop**, repari în editare  
3. **Play** din nou: problema a dispărut?  
4. Privești etapa din **cele trei puncte** de la pasul 1 și salvezi  

**Încearcă tu — ciclul de test (5–7 min)**  
- [ ] Ai notat o problemă  
- [ ] Ai reparat-o  
- [ ] Al doilea Play e mai curat  
- [ ] Salvat  

---

## Greșeli frecvente
1. **Editezi în timpul testului** — mai întâi **Stop**.  
2. **Camera e „în” piesă** — dai înapoi cu scroll.  
3. **Un copac e doar trunchi sau doar coroană** — le selectezi pe amândouă înainte de **Ctrl+G**.  
4. **Piesele cad la Play** — lipsește **Anchor**.  
5. **Ciocurile sunt culcate** — **Orientation** `0, 0, 90`; **buturuga** are `0, 0, 0`.  
6. **Treci prin râu și te blochezi** — `Rau` trebuie să aibă **CanCollide** debifat.  
7. **Un singur Play și gata** — a doua rulare arată ce ai reparat.  

---

## De făcut azi — „Etapa5_Padure”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** sol, râu, 6 copaci (grupuri), **SpawnLocation** mutat în pădure, un tur Play |
| **Complet** | Minim + **Proiectul 2:** 4 ciocuri, buturugă, cabană, grup `Etapa5_Padure`, parcurs de la Start la `Cabana`, **o** problemă găsită, reparată și retestată |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Camera și Play
- [ ] Ai privit etapa din trei puncte  
- [ ] Un tur Play pe etapa 4, apoi **Stop**  

### Pasul 2 — Pădurea *(Minim)*
- [ ] `SolPadure`, `Rau`, 6 copaci  
- [ ] **SpawnLocation** în pădure  
- [ ] Tur în Play · salvat  

**→ Minim când:** pornești în pădure, copacii te opresc și râul nu.

### Pasul 3 — Ciocuri, buturugă, cabană *(Complet)*
- [ ] 4 ciocuri · buturugă · cabană  
- [ ] Parcurs de la Start la `Cabana`  
- [ ] O problemă reparată · grup `Etapa5_Padure` · salvat  

**Gata Complet când:** ajungi la `Cabana` fără să cazi.

---

## Bonus ★★★ — Provocare: Insula plutitoare
*Doar dacă ai terminat Complet.*

De la `Cabana` urci pe 5 pietre până la o insulă care plutește deasupra pădurii.

| Nume | Formă | Size | Position |
|------|-------|------|----------|
| `Piatra1` | Block | `5, 1.5, 5` | `-112, 13, 144` |
| `Piatra2` | Block | `5, 1.5, 5` | `-120, 17, 150` |
| `Piatra3` | Block | `5, 1.5, 5` | `-128, 21, 150` |
| `Piatra4` | Block | `5, 1.5, 5` | `-136, 25, 150` |
| `Piatra5` | Block | `5, 1.5, 5` | `-144, 29, 150` |
| `Insula` | Block | `16, 3, 16` | `-156, 30, 150` |

- [ ] 6 piese noi, toate **ancorate**, cu **Material** și **Color** la alegere  
- [ ] Un copac mic pe `Insula` (grup cu trunchi și coroană)  
- [ ] Vezi toată etapa din **3 unghiuri** (de sus, din lateral, de la nivelul avatarului) și alegi cel mai frumos  
- [ ] Parcurgi tot: Start → `Cabana` → pietre → `Insula`, **fără să cazi**  

## Recapitulare pe scurt
1. **Click dreapta ținut** + mouse sau **W A S D** = camera în editare; **F** = la piesa selectată  
2. **Play** = testezi ca avatar; **Stop** = editezi; **Space** = salt  
3. **Ctrl+G** face un grup (copac); **Ctrl+D** îl copiază  
4. **Găsești → repari → testezi din nou**  
5. Etapa 5 e grupul `Etapa5_Padure`  

## Quiz scurt
- Ce faci înainte să editezi din nou după un test?  
- De ce privești etapa și din lateral?  
- Cum faci mai mulți copaci identici, repede?  

## Temă
Opțional, acasă (dacă ai Studio): mai adaugă 3 copaci în `Etapa5_Padure`, cu **Material** și **Color** diferite, și testează din nou. Rămâi în același Place.

---

## Ce urmează — Lecția 6
În **lecția 6** construiești **Etapa 6**: un labirint cu **Start** și **Finish**, un singur drum corect și cel puțin două fundături.
