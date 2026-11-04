# LECȚIA 5 — Broscuța care înoată
### Direcție, repetare și ritm
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești o **broscuță** cu aripioare, pe care o pui să „înoate”: motorul se învârte într-o parte, apoi în cealaltă, iar broscuța își mișcă aripioarele în ritm.  
> Proiect: **„Broscuța care înoată”** · Salvezi programele ca `Prenume_Nume_R1_L05`

---

## Ce facem azi
La finalul orei ai o **broscuță** care își mișcă aripioarele: înainte, înapoi, înainte, înapoi. Înveți să schimbi **direcția** motorului (🟢 **Motor This Way** și 🟢 **Motor That Way**) și să **repeți** o mișcare cu 🟡 **Loop**. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** te învață să faci broscuța să „înoate” în ritm, cu sunet, mesaj și lumină.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4 · pregătim piesele |
| 10–50 | **Proiectul 1** · corpul, motorul și aripioarele |
| 50–70 | **Proiectul 1** · ochii, picioarele și programul **A** |
| 70–100 | **Proiectul 2** · programul **B** și experimentul cu trei ritmuri |
| 100–115 | **Suplimentul** · programul **C**, broscuța care înoată |
| 115–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🟢 **Motor This Way** / 🟢 **Motor That Way** | Învârte motorul într-o parte sau în cealaltă | Aripioarele merg în sus, apoi în jos |
| 🟡 **Loop** | Repetă blocurile dinăuntru | Bate de 5 ori |
| 🟡 **Wait** | Alege cât durează fiecare mișcare | Wait 1 secundă |
| 🟢 **Motor Power** | Alege viteza, de la 1 la 9 | Mai încet sau mai repede |
| 🔴 **Display**, 🔴 **Play Sound**, 🟢 **Hub Light** | Mesaj, sunet, lumină | „Plici!” la fiecare bătaie |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori). Azi folosim blocuri 🟡, 🟢 și 🔴.

Le pui în rând, de la stânga la dreapta, lipite unul de altul. Blocurile din interiorul unui 🟡 **Loop** sunt cele repetate.

---

## Pas cu pas

### 1) Piesele și locul de lucru
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, piese verzi, portocalii, albastre și două piese curbe, transparente, pentru aripioare. Broscuța stă pe masă, pe o suprafață plată.

**Încearcă tu — locul (3 min)**  
- [ ] Masa e plată și liberă  
- [ ] Ai piesele la îndemână  

### 2) Proiectul 1 — Corpul, motorul și aripioarele
Construiești broscuța din cei 30 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · corpul (pașii 1–7)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–4** | Plăcile **portocalii** și barele verzi, care fac corpul | Corpul stă drept |
| **5–7** | Pui **hub-ul** deasupra, apoi piesele albastre | Hub-ul e prins |

**Etapa 2 · motorul și axa (pașii 8–13)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **8** | Prinzi **motorul**, cu cablul lui, lângă hub și conectezi cablul la hub | Cablul ajunge la hub |
| **9–13** | Capacul albastru, axa cu capătul roșu și roțile dințate | Axa se învârte când o atingi |

**Etapa 3 · spatele și aripioarele (pașii 14–22)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **14–20** | Piesele portocalii și verzi din spate (la pasul 14 întorci modelul) | Spatele e prins |
| **21–22** | Cele **două aripioare** curbe, transparente (la pasul 21 întorci modelul) | Aripioarele se mișcă odată cu axa |

**Încearcă tu — corpul și aripioarele (18 min)**  
- [ ] Motorul e prins ferm și cablul nu e strâns  
- [ ] Rotești axa cu degetul: aripioarele se mișcă fără să se agațe  

### 3) Proiectul 1 — Ochii, picioarele și programul A
**Etapa 4 · ochii și picioarele (pașii 23–30)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **23–25** | Cei **doi ochi** albi și piesele din jurul lor | Ochii privesc în față |
| **26–28** | Picioarele: piese mici gri, cu capăt roșu | Fiecare picior stă singur |
| **29–30** | Prinzi picioarele de corp | Broscuța stă dreaptă pe masă |

Verifici toți cei **30 de pași**: broscuța ta seamănă cu poza finală?

**Programul A — O mișcare**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor Power** 5 → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor Off** | Aripioarele se mișcă 3 secunde și se opresc |

Schema programului:

```
  [🟡 Start] → [🟢 Motor Power 5] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Încearcă tu — broscuța (20 min)**  
- [ ] Broscuța seamănă cu poza finală  
- [ ] Programul A: aripioarele se mișcă 3 secunde și se opresc  
- [ ] Spui în ce parte se învârte motorul  

### 4) Proiectul 2 — Înotul: programul B și experimentul
**Programul B — Înot**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟡 **Loop** 5 ori [ 🟢 **Motor This Way** → 🟡 **Wait** 1 s → 🟢 **Motor That Way** → 🟡 **Wait** 1 s ] → 🟢 **Motor Off** | Aripioarele merg înainte, apoi înapoi, de 5 ori |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🟡 Loop 5 ori] → [🟢 Motor Off]
                     │
                     └─ în Loop:
                        [🟢 Motor This Way] → [🟡 Wait 1 s]
                        → [🟢 Motor That Way] → [🟡 Wait 1 s]
```

**Experimentul:** schimbi **ritmul** (cât durează fiecare mișcare) și numeri câte „bătăi” face broscuța în **10 secunde**. O bătaie = înainte și înapoi.

| Încercarea | Wait din Loop | Câte bătăi în 10 s |
|------------|---------------|--------------------|
| 1 | 2 secunde | ___ |
| 2 | 1 secundă | ___ |
| 3 | 0,5 secunde | ___ |

Schimbi doar **Wait** din Loop. Pornești cronometrul când apeși 🟡 **Start**.

**Încearcă tu — experiment (20 min)**  
- [ ] Programul B: aripioarele merg înainte și înapoi  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui ce se întâmplă cu numărul de bătăi când **Wait** scade  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**: broscuța care „înoată” cu sunet, mesaj și lumină.

**Programul C — Plici, plici!**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🔴 **Display** „Plici!” → 🟡 **Loop** 4 ori [ 🟢 **Hub Light** verde → 🔴 **Play Sound** → 🟢 **Motor Power** 7 → 🟢 **Motor This Way** → 🟡 **Wait** 1 s → 🟢 **Hub Light** roșu → 🟢 **Motor That Way** → 🟡 **Wait** 1 s ] → 🟢 **Motor Off** | La fiecare bătaie se aude un sunet; lumina e verde la înainte și roșie la înapoi |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🔴 Display Plici!] → [🟡 Loop 4 ori] → [🟢 Motor Off]
                                          │
                                          └─ în Loop:
                                             [🟢 Hub Light verde] → [🔴 Play Sound] → [🟢 Motor Power 7]
                                             → [🟢 Motor This Way] → [🟡 Wait 1 s]
                                             → [🟢 Hub Light roșu] → [🟢 Motor That Way] → [🟡 Wait 1 s]
```

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: sunet la fiecare bătaie  
- [ ] Lumina e verde la înainte și roșie la înapoi  
- [ ] Schimbi **Motor Power** și vezi cât de repede bate  

---

## Greșeli frecvente
1. **Aripioarele nu se mișcă** — verifici dacă motorul e conectat la hub și dacă hub-ul e conectat la aplicație (lumina fixă).  
2. **Axa se învârte, dar aripioarele stau** — nu sunt prinse bine de axă; verifici pașii 21–22.  
3. **Broscuța se răstoarnă** — picioarele nu sunt prinse la fel; verifici pașii 26–30.  
4. **Programul B merge doar o dată** — blocurile nu sunt **în** Loop; le tragi înăuntru.  
5. **Numeri greșit bătăile** — o bătaie e înainte **și** înapoi; numeri ambele mișcări o dată.

---

## De făcut azi — „Broscuța care înoată”
Salvat: `Prenume_Nume_R1_L05`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** broscuța construită după cei 30 de pași · programul **A** mișcă aripioarele 3 secunde |
| **Complet** | Minim + **Proiectul 2:** programul **B** · tabelul cu 3 încercări completat · programul **C** (înot cu sunet) |

Dacă rămâi în urmă: lasă broscuța gata și programul **A** pornit.

### Pasul 1 — Locul și piesele
- [ ] Masă plată, piese la îndemână  

### Pasul 2 — Broscuța *(Minim)*
- [ ] Broscuța e construită, cu aripioarele prinse de axă  
- [ ] Programul **A** merge și se oprește singur  

**→ Minim când:** aripioarele se mișcă 3 secunde, fără ajutor.

### Pasul 3 — Înotul și suplimentul *(Complet)*
- [ ] Programul **B** merge  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C**: sunet și lumină la fiecare bătaie  

**Gata Complet când:** poți spune cum se schimbă numărul de bătăi când **Wait** scade.

---

## Bonus ★★★ — Provocare: „Zece bătăi exact”
*Doar dacă ai terminat Complet.*

Faci un program în care broscuța face **exact 10 bătăi** și se oprește singură, cu lumina verde și un sunet la final.  
Folosești 🟡 **Loop**, 🟡 **Wait** și 🟢 **Motor Power**. Apoi schimbi ritmul astfel încât cele 10 bătăi să dureze **cât mai puțin**, fără ca aripioarele să se agațe.

În cât timp ai făcut cele 10 bătăi?

---

## Recapitulare pe scurt
1. 🟢 **Motor This Way** și 🟢 **Motor That Way** schimbă direcția motorului  
2. 🟡 **Loop** repetă blocurile dinăuntru  
3. 🟡 **Wait** mai mic înseamnă bătăi mai multe în aceeași perioadă  
4. 🟢 **Motor Power** schimbă viteza  
5. Un experiment bun schimbă **un singur lucru** o dată

---

## Quiz scurt
1. Ce fac 🟢 **Motor This Way** și 🟢 **Motor That Way**?  
2. Ce face un 🟡 **Loop**?  
3. Ce se întâmplă cu numărul de bătăi când **Wait** scade?  
4. Unde pui blocurile care se repetă?  
5. Ce înseamnă o bătaie?

---

## Temă
- Scrii într-o propoziție ce ai aflat din tabelul cu 3 încercări.  
- Gândești un alt animal care se mișcă în ritm (pește, pasăre) și scrii blocurile pe foaie.  
- Nu demontezi nimic: broscuța rămâne pregătită pentru lecția următoare.

---

## Ce urmează — Lecția 6
Construim o **floare mecanică** și o legăm la un **senzor de mișcare**: floarea se deschide singură când apropii mâna.
