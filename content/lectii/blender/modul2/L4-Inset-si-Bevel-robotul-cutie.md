# LECȚIA 4 — Robotul cutie
### Inset, Extrude și Bevel
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> Azi construiești un **personaj** cu unelte de detaliu: **Inset + Extrude** pentru ochi și butoane, **Bevel** pentru colțuri rotunjite, ca la jucăriile din plastic. Începi de la două cuburi și termini cu un robot simpatic.  
> Proiect: **„Robotul cutie”** · `Prenume_Nume_B2_L04.blend`

---

## Ce facem azi
La finalul orei ai un robot cu **corp, cap, ochi, gură, antenă, brațe și butoane**, cu colțurile rotunjite. Detaliile mici fac diferența între „cutie” și „personaj”. Rețeta **Inset + Extrude** (din lecția trecută) pune ochi, butoane și ferestre. **Bevel** rotunjește muchiile.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3: E și I |
| 10–30 | Inset + Extrude = detaliu |
| 30–50 | Bevel |
| 50–95 | Robotul, pe rând |
| 95–110 | Finisaje și creezi tu |
| 110–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **I + E** (împreună) | Chenar, apoi tragi sau împingi: ochi, butoane, ferestre | **I 0.05**, apoi **E −0.1** |
| **Ctrl + B** | Bevel: rotunjește muchiile selectate | muchii fără colțuri tăioase |
| **Rotița mouse-ului** în timpul Bevel | Schimbă numărul de segmente | mai multe = mai neted |
| **Shift + A** în Edit Mode | Adaugă o piesă nouă în același obiect | un nasture în corp |
| **Ctrl + A → Scale** | „Fixează” scara: obiectul rămâne la fel, dar scara devine 1 | măsurătorile din Edit Mode ies exacte |
| *Recap:* **E** cu număr | Extrude cu distanță exactă | **E 0.05 Enter** |

---

## Pas cu pas

### 1) Inset + Extrude = detaliu
Rețeta pentru ochi, butoane și ferestre, cu o **față** selectată:
1. **I**, scrii o distanță mică (de exemplu **0.05**) și **Enter**: apare un chenar.  
2. **E**, scrii **−0.1** (în interior) sau **0.1** (în exterior) și **Enter**.

Cu numere negative faci o **adâncitură**, cu numere pozitive faci o **ieșitură**.

**Încearcă tu — I + E (4 min)**  
- [ ] Pe un cub nou, pe o față faci o adâncitură cu **I 0.2**, **E −0.2**  
- [ ] Pe altă față faci o ieșitură cu **I 0.2**, **E 0.2**  

### 2) Bevel (Ctrl + B)
Rotunjește muchiile ca să nu fie „tăioase”.

| Pas | Cum |
|-----|-----|
| Selectezi muchiile | **Edge** din butoanele din antet; **Shift + click**, sau **A** pentru toate |
| **Ctrl + B** | începi bevel-ul |
| mișcă mouse-ul | cât de mare e rotunjirea (sau scrii **0.1**) |
| **rotița** | câte „segmente” (mai multe = mai neted) |
| **Enter** | confirmi |

Pentru colțuri (vârfuri) există **Ctrl + Shift + B**.

> 2–3 segmente sunt de ajuns. Cu 10 segmente modelul are prea multe piese.

**Încearcă tu — Bevel (4 min)**  
- [ ] Pe un cub nou, cu **A** selectezi toate muchiile și faci **Ctrl + B**  
- [ ] Cu rotița schimbi segmentele de la 1 la 3 și vezi diferența  

### 3) Corpul și capul
Șterge cubul de start și adaugă un **Cube**. Valorile sunt pentru panoul **N** (Scale și Location):

| Piesă | Scale | Location |
|-------|-------|----------|
| **Corp** | X 1.2 · Y 1 · Z 1.5 | Z 1.5 |
| **Cap** (cub nou) | 0.8 pe toate | Z 3.8 |

Poți folosi și tastele: **S X 1.2**, **S Z 1.5**, **G Z 1.5**.

**Important:** după ce scalezi o piesă, apasă **Ctrl + A**, alege **Scale** și ține mouse-ul peste viewport. Obiectul arată la fel, dar scara lui devine 1, iar **I** și **E** din Edit Mode folosesc apoi numere exacte. Faci asta la fiecare piesă scalată: corp, cap, ochi, gură.

**Încearcă tu — corpul și capul (3 min)**  
- [ ] Corpul stă pe podea, iar capul stă exact deasupra lui  
- [ ] Ai aplicat scara (**Ctrl + A → Scale**) și în panoul **N** scara arată 1 pe toate axele  
- [ ] Din față (**1**) vezi o cutie lată și o cutie mai mică, deasupra  

### 4) Ochii, gura și antena
**Ochii:** cub nou, **Scale 0.15 pe toate**, **Location**: X −0.35 · Y −0.8 · Z 4.0.
1. **Tab**, alegi **Face**, selectezi fața din față a cubului mic (cea cu −Y).  
2. **I 0.05 Enter**, apoi **E −0.1 Enter**: un ochi adâncit.  
3. **Tab**, apoi **Shift + D**, **G X 0.7** și ai al doilea ochi, simetric (X = 0.35).

**Gura:** cub nou, **Scale** X 0.4 · Y 0.1 · Z 0.08, **Location** X 0 · Y −0.8 · Z 3.45.

**Antena:** pe capul robotului, **Tab**, **Face**, fața de sus.
1. **I 0.6 Enter**: o față mică în mijloc.  
2. **E Z 0.8 Enter**, apoi **E Z 0.2 Enter** și **S 2 Enter**: un „bec” mai lat în vârf.

**Încearcă tu — fața robotului (5 min)**  
- [ ] Cei doi ochi sunt la aceeași înălțime și simetrici  
- [ ] Gura este lată și subțire, sub ochi  
- [ ] Antena are un „bec” în vârf  

### 5) Brațele
Selectează **corpul**, **Tab**, **Face**. Pentru brațul drept (spre +X):
1. Selectează fața din **dreapta** a corpului.  
2. **E X 1 Enter**, apoi **S 0.4 Enter**, apoi **E X 1 Enter**.  
Pentru stânga repeți pe fața din stânga, dar cu **E X −1** de ambele ori.

**Încearcă tu — brațele (4 min)**  
- [ ] Ambele brațe ies în afară, cu o treaptă mai subțire după primul segment  
- [ ] Din față (**1**) robotul arată simetric  

### 6) Butoanele de pe piept
Cu corpul în Edit Mode: **Shift + A → Mesh → Cube** adaugă un cub în același obiect.
1. Cubul nou apare în centrul scenei, selectat. **S 0.15 Enter** îl micșorează, apoi **G Y −1 Enter** îl aduce în fața corpului și **G Z 2.2 Enter** îl urcă pe piept.  
2. Alegi **Face**, selectezi fața din față a cubului mic, **I 0.05 Enter**, **E 0.05 Enter**.  
3. Faci încă 2 butoane, la **Z = 1.8** și **Z = 1.4**.

**Încearcă tu — butoanele (5 min)**  
- [ ] Trei butoane, unul sub altul, pe piept  
- [ ] Din lateral (**3**) se vede că ies puțin din corp  

### 7) Complet — rotunjim și colorăm
1. În Object Mode selectezi **corpul** și apoi, cu **Ctrl + click** în Outliner, și **capul**.  
2. **Tab**: se deschid amândouă în Edit Mode. **A**, apoi **Ctrl + B**, scrii **0.1**, cu rotița **3 segmente**, **Enter**.  
3. Ca în Modulul 1 (lecția 7): un material pentru corp (gri-albastru), unul pentru ochi (galben) și unul pentru butoane (roșu).  
4. Dai nume obiectelor cu **F2**: `Corp`, `Cap`, `Ochi1`, `Ochi2`, `Gura`.

**Gata când:**  
- [ ] Colțurile corpului și ale capului sunt rotunjite  
- [ ] Robotul are corp, cap, 2 ochi, gură, antenă, 2 brațe și 3 butoane  
- [ ] Piesele au culori diferite și nume clare  

### 8) Creează tu — robotul tău
Fă-l al tău: schimbă proporțiile (cap mai mare, corp mai lat), forma ochilor sau culorile. Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Bevel-ul face o formă ciudată | Selecția are și piese din interior | **Alt + A**, apoi selectezi doar muchiile dorite |
| Inset-ul iese din față | Mouse-ul a mers în direcția greșită | Scrie numărul: **I 0.05 Enter** |
| Ochiul iese în loc să intre | Ai scris **E** cu număr pozitiv | Scrie **E −0.1** |
| Brațele se intersectează cu corpul | Nu ai extrudat suficient | **E X 1** de două ori |
| Prea multe piese în model | Prea multe segmente la Bevel | 2–3 segmente |
| Piesele nu se potrivesc | Ai verificat doar dintr-o parte | Privește din față (**1**) și din lateral (**3**) |

---

## De făcut azi — „Robotul cutie”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Corp, cap, ochi cu **I + E** și colțuri rotunjite cu **Bevel** |
| **Complet** | Minim + gură, antenă, brațe, butoane, culori și nume |

### Pasul 1 — Minim
- [ ] Două cuburi: corp și cap  
- [ ] Ochi cu **I + E**  
- [ ] **Ctrl + B** pe muchii  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Antenă și brațe  
- [ ] Trei butoane  
- [ ] Culori și nume  
- [ ] Numele `B2_L04` e corect

---

## Bonus ★★★ — Provocare: Familia de roboți
*Doar dacă ai terminat Complet.*

Construiește o familie cu doi roboți: mama și fiul.

- [ ] Copiezi robotul în Object Mode (**A**, **Shift + D**, **G X 6**) și îl scalezi la jumătate cu **S 0.5**  
- [ ] Fiul are un detaliu diferit: altă antenă, alte ochi sau o culoare nouă  
- [ ] Mama și fiul sunt la aceeași distanță de ecran, față în față (cu **R Z 180** pentru unul)  
- [ ] Obiectele au nume clare: `Mama_Corp`, `Fiul_Corp`  

---

## Recapitulare pe scurt
1. **I** = inset · **E** = extrude  
2. **I + E** negativ = adâncitură, pozitiv = ieșitură: ochi, butoane, ferestre  
3. **Ctrl + B** = muchii rotunjite, iar rotița schimbă segmentele  
4. **Shift + A** în Edit Mode adaugă piese noi în același obiect  
5. Verifici mereu din față (**1**) și din lateral (**3**)

## Mai departe *(opțional)*
Uită-te la jucăriile tale: au muchii rotunjite? Observă cum arată colțurile obiectelor reale.

## Quiz scurt
- Ce face **Inset**?  
- Cu ce scurtătură rotunjești muchiile?  
- Cum faci o adâncitură mică într-o suprafață?  
- Ce schimbă rotița în timpul Bevel?

## Temă
Alege un obiect cu colțuri rotunjite din casă (o telecomandă, o cutie, un aparat mic) și **refă-l în Blender**, cu **Inset**, **Extrude** și **Bevel**.
- Notează pe foaie câte butoane, goluri sau ieșituri are.
- Construiește-l și rotunjește colțurile cu `Ctrl + B`; notează valoarea și numărul de segmente folosite.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L04_Tema.blend`.
