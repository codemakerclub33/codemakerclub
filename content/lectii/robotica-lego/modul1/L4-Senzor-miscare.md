# LECȚIA 4 — Simulatorul de cutremur
### Vibrații, intensitate și durată
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești un **simulator de cutremur**: un motor care zguduie o platformă cu trei clădiri. Afli ce se întâmplă când schimbi **intensitatea** și **durata**.  
> Proiect: **„Simulatorul de cutremur”** · Salvezi programele ca `Prenume_Nume_R1_L04`

---

## Ce facem azi
La finalul orei ai un **simulator de cutremur** care scutură o platformă cu trei clădiri. Înveți că un cutremur are o **intensitate** (🟢 **Motor Power**) și o **durată** (🟡 **Wait**), și vezi ce clădiri rezistă și care cad. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** te învață să faci o **alarmă** cu lumină, sunet și mesaj pe ecran, apoi cutremurul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3 · pregătim piesele și un loc stabil |
| 10–50 | **Proiectul 1** · baza, motorul și mecanismul care zguduie |
| 50–70 | **Proiectul 1** · platforma, clădirile și programul **A** |
| 70–100 | **Proiectul 2** · programul **B** și experimentul cu trei intensități |
| 100–115 | **Suplimentul** · programul **C**, alarma și cutremurul |
| 115–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🟢 **Motor Power** | Alege **intensitatea**, de la 1 la 9 | 3 = cutremur slab, 9 = puternic |
| 🟡 **Wait** | Alege **durata** | **Wait** 5 secunde |
| 🟡 **Loop** | Repetă blocurile dinăuntru | Zguduie de 3 ori |
| 🔴 **Display** | Scrie un mesaj pe ecran | „Cutremur!” |
| 🔴 **Play Sound** | Redă un sunet | Alarmă înainte de cutremur |
| 🟢 **Hub Light** | Culoarea hub-ului | Roșu în timpul cutremurului |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori). Azi folosim blocuri 🟡, 🟢 și 🔴.

Le pui în rând, de la stânga la dreapta, lipite unul de altul. Programul se citește în aceeași ordine. Blocurile din interiorul unui 🟡 **Loop** sunt cele repetate.

---

## Pas cu pas

### 1) Piesele și locul stabil
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, piese verzi, gri, portocalii și albastre, plus piese pentru trei clădiri mici. Simulatorul **vibrează**: îl pui pe o masă stabilă, departe de margine, fără obiecte fragile lângă el.

**Încearcă tu — locul (3 min)**  
- [ ] Masa e stabilă, simulatorul e departe de margine  
- [ ] Ai loc să vezi clădirile din toate părțile  

### 2) Proiectul 1 — Baza, motorul și mecanismul care zguduie
Construiești simulatorul din cei 46 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · baza și hub-ul (pașii 1–6)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–5** | Piese verzi, o piesă neagră și o placă portocalie, care fac baza | Baza stă dreaptă |
| **6** | Pui **hub-ul** deasupra | Hub-ul e prins |

**Etapa 2 · motorul și greutatea (pașii 7–16)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **7** | Prinzi **motorul**, cu cablul lui, lângă hub | Cablul ajunge la hub |
| **8–14** | Un braț verde lung și axa, cu piesele mici de legătură | Axa se învârte liber |
| **15–16** | La capătul axei pui piesa roșie și **greutatea neagră** (la pasul 15 întorci modelul) | Greutatea e **în afara axei**, nu în centru |

Greutatea neagră, așezată într-o parte, face ca motorul să **zguduie**: când axa se învârte, greutatea trage după ea tot mecanismul.

**Încearcă tu — mecanismul (14 min)**  
- [ ] Motorul e prins ferm și cablul nu e strâns  
- [ ] Rotești axa cu degetul: greutatea se învârte fără să se agațe  

### 3) Proiectul 1 — Platforma, clădirile și programul A
**Etapa 3 · platforma (pașii 17–31)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **17–24** | **Platforma** din plăci verzi, cu piese gri și albastre pe margini | Platforma e dreaptă și plată |
| **25–30** | Piesele portocalii și o **floare** roșie, ca decor | Piesele nu se mișcă |
| **31** | Prinzi platforma de brațul motorului | Platforma se mișcă odată cu brațul |

**Etapa 4 · clădirile (pașii 32–46)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **32–38** | Prima și a doua clădire din piese albastre și portocalii | Fiecare stă singură |
| **39–45** | A treia clădire, mai înaltă, cu acoperiș | E mai înaltă decât celelalte |
| **46** | Pui cele trei clădiri pe platformă | Nu se ating între ele |

Verifici toți cei **46 de pași**: simulatorul tău seamănă cu poza finală?

**Programul A — Cutremur slab**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 3 → 🟢 **Motor This Way** → 🟡 **Wait** 5 secunde → 🟢 **Motor Off** | Platforma se zguduie încet 5 secunde, apoi se oprește |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 3] → [🟢 Motor This Way] → [🟡 Wait 5 s] → [🟢 Motor Off]
```

**Încearcă tu — simulatorul (20 min)**  
- [ ] Simulatorul seamănă cu poza finală  
- [ ] Programul A: platforma se zguduie 5 secunde și se oprește singură  
- [ ] Spui ce clădiri s-au mișcat, dacă s-au mișcat  

### 4) Proiectul 2 — Cutremurul: programul B și experimentul
**Programul B — Cutremur puternic**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 9 → 🟢 **Motor This Way** → 🟡 **Wait** 5 secunde → 🟢 **Motor Off** | Platforma se zguduie cât de tare poate, 5 secunde |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 9] → [🟢 Motor This Way] → [🟡 Wait 5 s] → [🟢 Motor Off]
```

**Experimentul:** pui cele trei clădiri pe platformă și le zguduie de **trei ori**, cu intensități diferite, **5 secunde** de fiecare dată. Notezi ce se întâmplă cu fiecare clădire.

| Încercarea | Motor Power | Durata | Clădirea 1 | Clădirea 2 | Clădirea 3 (înaltă) |
|------------|-------------|--------|------------|------------|---------------------|
| 1 | 3 | 5 s | ___ | ___ | ___ |
| 2 | 6 | 5 s | ___ | ___ | ___ |
| 3 | 9 | 5 s | ___ | ___ | ___ |

În fiecare casetă scrii: **stă** / **se mișcă** / **cade**. Schimbi doar **Motor Power**; după fiecare încercare pui clădirile la loc, în aceleași locuri.

**Încearcă tu — experiment (20 min)**  
- [ ] Programul B: platforma se zguduie puternic  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui care clădire cade prima  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**: o **alarmă**, apoi cutremurul.

**Programul C — Alarma de cutremur**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🔴 **Play Sound** → 🔴 **Display** „Cutremur!” → 🟢 **Hub Light** roșu → 🟡 **Wait** 2 s → 🟡 **Loop** 3 ori [ 🟢 **Motor Power** 6 → 🟢 **Motor This Way** → 🟡 **Wait** 2 s → 🟢 **Motor Off** → 🟡 **Wait** 1 s ] → 🟢 **Hub Light** verde | Alarmă și mesaj, apoi trei zguduiri cu pauză; la final lumina e verde |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🔴 Play Sound] → [🔴 Display Cutremur!] → [🟢 Hub Light roșu]
  → [🟡 Wait 2 s] → [🟡 Loop 3 ori] → [🟢 Hub Light verde]
                          │
                          └─ în Loop:
                             [🟢 Motor Power 6] → [🟢 Motor This Way] → [🟡 Wait 2 s]
                             → [🟢 Motor Off] → [🟡 Wait 1 s]
```

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: alarmă, mesaj, apoi trei zguduiri  
- [ ] Lumina e roșie la alarmă și verde la final  
- [ ] Schimbi **Motor Power** în Loop și vezi ce clădire cade  

---

## Greșeli frecvente
1. **Platforma nu se mișcă** — verifici dacă motorul e conectat la hub și dacă hub-ul e conectat la aplicație (lumina fixă).  
2. **Se mișcă, dar clădirile stau** — greutatea neagră e prea aproape de axă; verifici pașii 15–16.  
3. **Simulatorul „umblă” pe masă** — nu e stabil; îl pui pe un loc plat sau pe un prosop subțire.  
4. **Clădirile cad la orice intensitate** — nu sunt prinse bine sau stau prea aproape de margine.  
5. **Rezultatele nu se potrivesc** — nu pui clădirile în aceleași locuri sau schimbi două lucruri odată.

---

## De făcut azi — „Simulatorul de cutremur”
Salvat: `Prenume_Nume_R1_L04`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** simulatorul construit după cei 46 de pași · programul **A** zguduie platforma 5 secunde |
| **Complet** | Minim + **Proiectul 2:** programul **B** · tabelul cu 3 încercări completat · programul **C** (alarma) |

Dacă rămâi în urmă: lasă simulatorul gata și programul **A** pornit.

### Pasul 1 — Locul și piesele
- [ ] Masă stabilă, simulator departe de margine  

### Pasul 2 — Simulatorul *(Minim)*
- [ ] Simulatorul e construit, cu greutatea neagră în afara axei  
- [ ] Programul **A** merge și se oprește singur  

**→ Minim când:** platforma se zguduie 5 secunde la intensitatea 3, fără ajutor.

### Pasul 3 — Experimentul și alarma *(Complet)*
- [ ] Programul **B** merge  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C**: alarmă, mesaj, trei zguduiri  

**Gata Complet când:** poți spune ce clădire cade prima și la ce intensitate.

---

## Bonus ★★★ — Provocare: „Clădirea care rezistă”
*Doar dacă ai terminat Complet.*

Construiești o a patra clădire, **mai rezistentă** decât celelalte: mai lată la bază sau mai scundă. Faci un program care zguduie platforma 5 secunde la **Motor Power 9** și vezi dacă **toate patru** clădirile rămân în picioare.

Ce schimbare a ajutat cel mai mult clădirea?

---

## Recapitulare pe scurt
1. 🟢 **Motor Power** alege intensitatea, de la 1 la 9  
2. 🟡 **Wait** alege durata cutremurului  
3. Greutatea neagră, așezată într-o parte, face ca mecanismul să **zguduie**  
4. Un cutremur mai puternic dărâmă mai multe clădiri, mai ales pe cele **înalte**  
5. Un experiment bun schimbă **un singur lucru** o dată

---

## Quiz scurt
1. Ce alege 🟢 **Motor Power** într-un cutremur?  
2. De ce se zguduie platforma?  
3. Ce clădire cade prima: cea joasă sau cea înaltă?  
4. Ce schimbi ca să faci cutremurul mai lung?  
5. De ce punem clădirile de fiecare dată în aceleași locuri?

---

## Temă
- Scrii într-o propoziție ce ai aflat din tabelul cu 3 încercări.  
- Gândești cum ai construi o clădire care rezistă la un cutremur puternic; o desenezi pe foaie.  
- Nu demontezi nimic: simulatorul rămâne pregătit pentru lecția următoare.

---

## Ce urmează — Lecția 5
Construim o **broscuță cu aripioare** și învățăm să schimbăm direcția motorului și să repetăm o mișcare în ritm.
