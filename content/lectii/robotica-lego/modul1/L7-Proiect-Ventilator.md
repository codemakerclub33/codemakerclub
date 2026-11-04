# LECȚIA 7 — Stăvilarul
### Timp, direcție și semnale
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești un **stăvilar**: o poartă care se ridică și coboară ca să lase o barcă să treacă. Afli cum controlezi cât de mult se ridică poarta cu **timpul**, și faci un program cu **semnale** de lumină.  
> Proiect: **„Stăvilarul”** · Salvezi programele ca `Prenume_Nume_R1_L07`

---

## Ce facem azi
La finalul orei ai un **stăvilar** care ridică poarta, o ține deschisă cât trece barca și o coboară la loc. Înveți că **timpul** (🟡 **Wait**) și **direcția** motorului (🟢 **Motor This Way** și 🟢 **Motor That Way**) hotărăsc **cât** se ridică poarta. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** îți arată cum faci un stăvilar cu semnale: lumină roșie și verde, sunet și mesaj.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6 · pregătim piesele |
| 10–50 | **Proiectul 1** · baza, hub-ul, motorul și mecanismul porții |
| 50–70 | **Proiectul 1** · zidul, poarta, barca și programul **A** |
| 70–100 | **Proiectul 2** · programul **B** și experimentul cu trei durate |
| 100–115 | **Suplimentul** · programul **C**, stăvilarul cu semnale |
| 115–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🟢 **Motor This Way** / 🟢 **Motor That Way** | Ridică sau coboară poarta | O parte = ridică, cealaltă = coboară |
| 🟡 **Wait** | Alege **cât** se mișcă motorul, deci cât se ridică poarta | **Wait** 2 secunde |
| 🟢 **Hub Light** | Lumina hub-ului ca **semnal** | Roșu = închis, verde = deschis |
| 🔴 **Play Sound**, 🔴 **Display** | Sunet și mesaj | „Deschis!” când poarta e sus |
| 🟡 **Loop** | Repetă blocurile dinăuntru | Deschide și închide de 2 ori |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori). Azi folosim blocuri 🟡, 🟢 și 🔴.

Le pui în rând, de la stânga la dreapta, lipite unul de altul. Blocurile din interiorul unui 🟡 **Loop** sunt cele repetate.

---

## Pas cu pas

### 1) Piesele și locul de lucru
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, piese verzi, portocalii, albastre și gri, plus piesele pentru barcă. Stăvilarul stă pe masă, cu **loc în față** pentru barcă.

**Încearcă tu — locul (3 min)**  
- [ ] Masa e plată și liberă  
- [ ] Ai loc în fața stăvilarului pentru barcă  

### 2) Proiectul 1 — Baza, hub-ul, motorul și mecanismul porții
Construiești stăvilarul din cei 38 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · baza și hub-ul (pașii 1–10)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–9** | Plăcile **portocalii** și barele lungi **verzi**, care fac baza | Baza stă dreaptă |
| **10** | Pui **hub-ul** deasupra | Hub-ul e prins |

**Etapa 2 · motorul și mecanismul (pașii 11–25)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **11** | Prinzi **motorul**, cu cablul lui, lângă hub și conectezi cablul la hub | Cablul ajunge la hub |
| **12–19** | Axa, roata mică și piesa roșie de la capătul ei | Axa se învârte liber |
| **20–25** | Prinzi mecanismul de bază (la pasul 20 întorci modelul) | Mecanismul e prins ferm |

**Încearcă tu — mecanismul (14 min)**  
- [ ] Motorul e prins ferm și cablul nu e strâns  
- [ ] Rotești axa cu degetul: roata se învârte fără să se agațe  

### 3) Proiectul 1 — Zidul, poarta, barca și programul A
**Etapa 3 · zidul cu poarta (pașii 26–33)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **26–31** | **Zidul** din piese albastre, cu „ferestre”, și învelișul verde | Zidul stă drept |
| **32** | Prinzi zidul de baza cu motorul | Zidul e lipit de baza |
| **33** | Cele **două plăci gri**, care sunt **poarta** | Poarta alunecă ușor în sus și în jos |

**Etapa 4 · barca (pașii 34–38)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **34–37** | Barca: o placă portocalie, un bloc negru și o piesă albastră | Barca nu se desface |
| **38** | Pui barca în fața zidului | Barca nu atinge poarta |

Verifici toți cei **38 de pași**: stăvilarul tău seamănă cu poza finală?

**Programul A — Poarta se ridică**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 5 → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor Off** | Poarta se mișcă 3 secunde și se oprește |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 5] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Încearcă tu — stăvilarul (22 min)**  
- [ ] Stăvilarul seamănă cu poza finală  
- [ ] Programul A: poarta se mișcă 3 secunde și se oprește  
- [ ] Spui dacă poarta s-a ridicat sau a coborât, și în ce parte trebuie să învârți motorul pentru **cealaltă** mișcare  

### 4) Proiectul 2 — Barca trece: programul B și experimentul
**Programul B — Deschide, așteaptă, închide**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor This Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** → 🟡 **Wait** 5 s → 🟢 **Motor That Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** | Poarta se ridică, stă deschisă 5 secunde cât trece barca, apoi coboară |

Schema programului:

```
  [🟡 Start] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
  → [🟡 Wait 5 s] → [🟢 Motor That Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Experimentul:** schimbi **cât timp** merge motorul și măsori cu rigla **cât s-a ridicat** poarta. Pornești de fiecare dată cu poarta jos.

| Încercarea | 🟡 **Wait** | Cât s-a ridicat poarta (cm) |
|------------|-------------|------------------------------|
| 1 | 1 secundă | ___ |
| 2 | 2 secunde | ___ |
| 3 | 3 secunde | ___ |

Folosești **Motor Power** 5 la toate trei, schimbi doar **Wait**. După fiecare încercare cobori poarta la loc, cu mâna sau cu programul.

**Încearcă tu — experiment (20 min)**  
- [ ] Programul B: poarta se ridică, stă, coboară  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui cât timp îi trebuie porții ca să lase barca să treacă  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**: un stăvilar cu semnale, ca la un drum cu semafor.

**Programul C — Stăvilar cu semnale**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Hub Light** roșu → 🔴 **Display** „Așteaptă!” → 🟡 **Wait** 2 s → 🟢 **Hub Light** verde → 🔴 **Play Sound** → 🟢 **Motor This Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** → 🟡 **Wait** 5 s → 🟢 **Hub Light** roșu → 🟢 **Motor That Way** → 🟡 **Wait** 3 s → 🟢 **Motor Off** | Lumina roșie și mesajul „Așteaptă!”; apoi lumina verde și sunet, poarta se ridică, barca trece, poarta coboară, iar lumina redevine roșie |

Schema programului (de la stânga la dreapta, pe trei rânduri):

```
  [🟡 Start] → [🟢 Hub Light roșu] → [🔴 Display Așteaptă!] → [🟡 Wait 2 s]
  → [🟢 Hub Light verde] → [🔴 Play Sound] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
  → [🟡 Wait 5 s] → [🟢 Hub Light roșu] → [🟢 Motor That Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: lumină roșie, apoi verde, poarta se ridică și coboară  
- [ ] Se aude un sunet când poarta începe să se ridice  
- [ ] Mesajul „Așteaptă!” apare pe ecran  

---

## Greșeli frecvente
1. **Poarta nu se mișcă** — verifici dacă motorul e conectat la hub și dacă hub-ul e conectat la aplicație (lumina fixă).  
2. **Axa se învârte, dar poarta stă** — mecanismul nu e prins de poartă; verifici pașii 20–25 și 33.  
3. **Poarta se ridică prea mult sau cade** — **Wait** e prea mare; scazi timpul.  
4. **Poarta nu coboară la loc** — la a doua mișcare ai uitat **Motor That Way**.  
5. **Barca nu trece** — poarta nu stă suficient de sus; mărești **Wait** din prima mișcare.

---

## De făcut azi — „Stăvilarul”
Salvat: `Prenume_Nume_R1_L07`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** stăvilarul construit după cei 38 de pași · programul **A** mișcă poarta 3 secunde |
| **Complet** | Minim + **Proiectul 2:** programul **B** · tabelul cu 3 încercări completat · programul **C** (cu semnale) |

Dacă rămâi în urmă: lasă stăvilarul gata și programul **A** pornit.

### Pasul 1 — Locul și piesele
- [ ] Masă plată, loc în față pentru barcă  

### Pasul 2 — Stăvilarul *(Minim)*
- [ ] Stăvilarul e construit, cu poarta liberă  
- [ ] Programul **A** merge și se oprește singur  

**→ Minim când:** poarta se mișcă 3 secunde, fără ajutor.

### Pasul 3 — Barca și semnalele *(Complet)*
- [ ] Programul **B** merge  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C**: semnale și mișcarea porții  

**Gata Complet când:** barca trece prin stăvilar iar lumina schimbă culoarea.

---

## Bonus ★★★ — Provocare: „Două bărci”
*Doar dacă ai terminat Complet.*

Faci un program în care **două bărci** trec una după alta. Poarta se ridică, stă deschisă cât trece prima barcă, se închide, apoi se deschide din nou pentru a doua. Folosești un 🟡 **Loop** de **2 ori** și semnalele din programul C (roșu, verde). Încerci ca între cele două bărci poarta să stea închisă **exact 3 secunde**.

Ce blocuri ai pus în Loop?

---

## Recapitulare pe scurt
1. 🟢 **Motor This Way** și 🟢 **Motor That Way** ridică și coboară poarta  
2. 🟡 **Wait** hotărăște **cât** se mișcă poarta  
3. 🟢 **Hub Light** poate fi un **semnal**: roșu = oprit, verde = liber  
4. 🔴 **Display** și 🔴 **Play Sound** anunță ce se întâmplă  
5. Un experiment bun schimbă **un singur lucru** o dată

---

## Quiz scurt
1. Ce hotărăște cât se ridică poarta?  
2. Ce blocuri ridică și coboară poarta?  
3. Ce înseamnă lumina roșie în programul C?  
4. De ce pornim cu poarta jos la fiecare încercare?  
5. Ce se întâmplă dacă ai uitat **Motor Off** după ridicare?

---

## Temă
- Scrii într-o propoziție ce ai aflat din tabelul cu 3 încercări.  
- Gândești unde ai mai găsi o poartă care se ridică și coboară (parcare, barieră) și desenezi semnalele ei pe foaie.  
- Nu demontezi nimic: stăvilarul rămâne pregătit pentru lecția următoare.

---

## Ce urmează — Lecția 8
Construim un **elicopter de salvare**, cu troliu și sfoară, și facem semnale care clipesc.
