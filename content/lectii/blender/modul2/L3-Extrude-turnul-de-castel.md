# LECȚIA 3 — Turnul de castel
### Extrude
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> **Extrude** (tasta **E**) este cea mai folosită unealtă din modelare: „trage” o piesă din model ca pe plastilină. Cu ea construiești turnuri, brațe, copaci. Azi ridici un turn de castel dintr-un simplu cilindru.  
> Proiect: **„Turnul de castel”** · `Prenume_Nume_B2_L03.blend`

---

## Ce facem azi
La finalul orei ai un turn de castel cu **trunchi, balcon, gol în vârf și creneluri**. Fără Extrude ai nevoie de zeci de obiecte. Cu Extrude, dintr-o singură formă faci turnuri, copaci, mâini și tuburi. Înveți și **Inset** (tasta **I**), care îți desenează un chenar pe o față.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 |
| 10–35 | Extrude pe față, muchie și vârf |
| 35–60 | Turnul și balconul |
| 60–85 | Inset, golul și crenelurile |
| 85–105 | Creezi tu: turnul tău |
| 105–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **E** | Extrude: trage piesa selectată din model | **E Z 3 Enter** |
| **I** | Inset: desenează un chenar în interiorul feței | **I 0.3 Enter** |
| **E** cu număr negativ | Extrude **în jos**: face un gol | **E Z −0.4 Enter** |
| *Recap:* **S** | Scalează piesa selectată | **S 1.3** mărește |
| *Recap:* **Shift + click** | Adaugă piese la selecție | crenelurile alternate |

---

## Pas cu pas

### 1) Cilindrul de pornire
1. **File → New → General**, șterge cubul cu **X**.  
2. **Shift + A → Mesh → Cylinder**. În panoul din stânga-jos: **Vertices = 8**, **Radius = 1.5**, **Depth = 2**.  
3. Pune-l pe podea: **G Z 1 Enter**.  
4. **Tab**, alegi **Face** și dai click pe **fața de sus**.

**Încearcă tu — cilindrul (3 min)**  
- [ ] Cilindrul are 8 laturi, nu e rotund  
- [ ] Fața de sus este selectată și portocalie  

### 2) Ce face E
**E** în Edit Mode **dublează piesa selectată și o mută**, lăsând „pereți” între vechea și noua poziție.

| Ai selectat | E face |
|-------------|--------|
| o **față** | trage un „bloc” din ea |
| o **muchie** | trage un perete subțire |
| un **vârf** | trage o linie (muchie) |

După **E**, mișcă mouse-ul și dai click, sau scrii o distanță: **E Z 2 Enter**. Dacă apeși **Esc** sau click dreapta, piesa nouă rămâne pe loc, dar **rămâne extrudată**. Atenție: în felul acesta rămân fețe duble, care strică modelul. Dacă greșești, **Ctrl + Z**.

**Încearcă tu — E (3 min)**  
- [ ] Ai extrudat fața de sus cu **E Z 1 Enter** și apoi ai anulat cu **Ctrl + Z**  
- [ ] Ai încercat **Esc** după **E** și ai văzut că nu rămâne totul ca la început  

### 3) Turnul în trei pași
Cu fața de sus selectată:
1. **E Z 3 Enter**: turnul crește.  
2. **E Z 2 Enter**.  
3. **E Z 2 Enter** încă o dată: turnul are acum trei niveluri.

> Dacă nu scrii numărul, trebuie să confirmi cu click.

**Încearcă tu — turnul (4 min)**  
- [ ] Turnul are baza pe podea și trei niveluri  
- [ ] Îl privești din față (**1**) și laturile sunt drepte  

### 4) Balconul
Un turn de castel are balcon mai lat, sub creneluri. Cu fața de sus selectată:
1. **E Z 0.3 Enter**: un strat subțire.  
2. **S 1.3 Enter**: îl mărești.  
3. **E Z 0.3 Enter**: zidul balconului.

**Încearcă tu — balconul (3 min)**  
- [ ] Balconul iese în afară față de turn  
- [ ] Din lateral (**3**) se vede o treaptă lată sub vârf  

### 5) Inset: chenarul feței
Ca să faci vârful **gol** pe dinăuntru, ai nevoie de un chenar:
1. Cu fața de sus selectată, apasă **I**, scrie **0.3** și **Enter**. Apare un inel de fețe în jurul unei fețe mai mici, selectate.  
2. **E Z −0.4 Enter**: fața din mijloc coboară, iar vârful devine **gol**, ca o cupă.

**Încearcă tu — golul (3 min)**  
- [ ] Vezi un inel de 8 fețe în jurul golului  
- [ ] Golul are fundul mai jos decât marginea  

### 6) Crenelurile
Crenelurile sunt zidurile joase de sus, din loc în loc. Ele se fac pe **inelul** de 8 fețe din jurul golului.
1. Alegi **Face** și dai click pe o față din inel.  
2. Cu **Shift + click** alegi **una da, una nu**: în total **4 fețe**, care nu se ating pe lateral.  
3. **E Z 0.5 Enter**: apar 4 creneluri.

> Dacă ai selectat fețe vecine, ele se extrudează ca un singur bloc lat. Alege fețe care **nu se ating** pe lateral.

**Încearcă tu — crenelurile (4 min)**  
- [ ] Ai 4 creneluri, cu goluri între ele  
- [ ] Privit de sus (**7**), turnul arată ca o coroană  

### 7) Complet — turnul final
Ar trebui să ai, de jos în sus:

| Partea | Cum |
|--------|-----|
| **Baza** | cilindrul de pornire |
| **Trunchiul** | extrude de 3 ori |
| **Balconul** | extrude + scale mai lat |
| **Golul** | inset + extrude în jos |
| **Crenelurile** | fețe alternate, extrude |

Ieși din Edit Mode cu **Tab** și dă-i un nume cu **F2**: `Turn`.

**Gata când:**  
- [ ] Turnul are trunchi, balcon, gol și 4 creneluri  
- [ ] Privit din față (**1**), balconul este mai lat decât trunchiul  
- [ ] Obiectul se numește `Turn`  

### 8) Creează tu — turnul tău
Schimbă ceva la turn, ca să fie al tău:
1. Alege altă înălțime sau alt număr de niveluri.  
2. Alege alt număr de creneluri (3 sau 4 fețe care nu se ating) sau alt număr de laturi la cilindrul de pornire (de exemplu 6).  
3. Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Extrude, dar nu se mișcă | Ai apăsat **Esc** după **E**: piesa e dublată pe loc | **Ctrl + Z** și reiei |
| Turnul are „coaste” duble | Ai dat **E** de două ori fără să muți | **Ctrl + Z** de două ori |
| Fața de sus lipsește | Ai șters fața cu **X** în loc s-o extrudezi | **Ctrl + Z**, apoi **E** |
| Crenelurile sunt un bloc lat | Ai selectat fețe vecine | Alege fețe care nu se ating |
| Crenelurile sunt prea mici | Distanța e mică | **E Z 0.7** |
| Piesele nu sunt drepte | Ai mutat cu mouse-ul, nu cu numere | Scrie distanța: **E Z 2 Enter** |

---

## De făcut azi — „Turnul de castel”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Turn cu 3 extrudări |
| **Complet** | Minim + balcon + gol + creneluri alternate |

### Pasul 1 — Minim
- [ ] Cilindru cu 8 laturi  
- [ ] Extrude de 3 ori  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Balcon mai lat (**S**)  
- [ ] Gol cu **Inset** + **Extrude** în jos  
- [ ] 4 creneluri  
- [ ] Numele `B2_L03` e corect

---

## Bonus ★★★ — Provocare: Castelul întreg
*Doar dacă ai terminat Complet.*

Construiește un castel cu trei turnuri și un zid.

- [ ] 3 turnuri de înălțimi diferite: copiezi turnul în Object Mode cu **Shift + D**, îl muți cu **G X** și îl scalezi cu **S**  
- [ ] Turnurile stau la distanțe egale, pe o linie  
- [ ] Un zid între ele, făcut dintr-un cub lungit cu **S X**  
- [ ] O poartă în zid: **I** și **E** în jos, ca la ușă  
- [ ] Obiectele au nume clare: `Turn1`, `Turn2`, `Turn3`, `Zid`  

---

## Recapitulare pe scurt
1. **E** trage piesa din model  
2. **E Z 3 Enter** = extrude cu distanță exactă  
3. **E** + **S** = o treaptă mai lată sau mai îngustă  
4. **I** desenează un chenar, iar **E** cu minus face un gol  
5. Fețele alese pentru creneluri nu se ating pe lateral

## Mai departe *(opțional)*
Caută poze cu un castel real. Cum sunt turnurile? Ce forme au în vârf?

## Quiz scurt
- Ce face tasta **E**?  
- Cum faci un balcon mai lat?  
- Cum faci un gol într-o față?  
- De ce nu alegem fețe vecine pentru creneluri?

## Temă
Alege o clădire din cartierul tău (un bloc, un turn de apă, o biserică) și **refă-o în Blender**, cu **Extrude**.
- Notează pe foaie câte niveluri are și ce formă are fiecare.
- Construiește-o din cilindri sau cuburi, cu `E` și numere exacte, și adaugă un detaliu cu `I` + `E` (ferestre sau ușă).
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L03_Tema.blend`.
