# LECȚIA 1 — Milo, roverul de știință
### Construcția lui Milo, brațul și primele programe
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești **Milo**, un rover cu motor, îi montezi **brațul cu senzor** și îl pui să meargă, să se oprească și să-ți răspundă.  
> Proiect: **„Milo”** · Salvezi programele ca `Prenume_Nume_R1_L01`

---

## Ce facem azi
La finalul orei ai un **Milo** construit și pornit: merge, se oprește și pornește din nou când înclini brațul. Înveți ce face fiecare piesă electronică din cutie: **hub-ul**, **motorul** și **senzorul**. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** de la sfârșit îți dă comenzi în plus, ca să faci mai mult decât lecția din aplicație.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Piesele din cutie · conectăm hub-ul la aplicație (**Încearcă tu**) |
| 10–55 | **Proiectul 1** · construim Milo și programul **A** |
| 55–95 | **Proiectul 2** · brațul, floarea și programul **B** |
| 95–115 | **Suplimentul** · comenzi în plus |
| 115–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Hub** (Smart Hub) | Creierul lui Milo: primește programul din aplicație prin Bluetooth și comandă motorul | Apeși butonul verde, lumina clipește |
| **Motor** | Învârte roțile | Blocurile 🟢 **Motor This Way** și 🟢 **Motor On For** |
| 🔵 **Tilt Sensor** | Simte în ce parte e înclinat | Blocul 🟡 **Wait For Tilt** |
| **Blocurile din aplicație** | Le așezi unul sub altul; programul începe cu 🟡 **Start** | 🟡 **Start** → 🟢 **Motor On For** → 🟢 **Motor Off** |

---

## Culorile blocurilor
În aplicație, blocurile au culori. Culoarea îți spune la ce folosește blocul:

| Culoare | Ce fac blocurile | Exemple |
|---------|------------------|---------|
| 🟡 **Galbene** | Pornesc și conduc programul | **Start**, **Wait**, **Loop** |
| 🟢 **Verzi** | Pun robotul în mișcare și schimbă lumina hub-ului | **Motor This Way**, **Motor Power**, **Hub Light** |
| 🔴 **Roșii** | Ecranul și sunetul | **Play Sound**, **Display** |
| 🔵 **Albastre** | Senzorii: se atașează dedesubtul altor blocuri și le dau o valoare | senzorul de înclinare, senzorul de distanță, număr aleatoriu |

Un program începe mereu cu un bloc 🟡 **Start**.

**Cum așezi blocurile:** le pui într-un **rând**, de la **stânga la dreapta**, lipite unul de altul. Programul se citește în aceeași ordine. Blocurile 🔵 se prind **dedesubt**, în crestătura blocului de care au nevoie.

```
  [🟡 Start] → [🟢 Motor This Way] → [🟡 Wait] → [🟢 Motor Off]
                                         │
                                     [🔵 senzor]   ← se prinde dedesubt
```


---

## Pas cu pas

### 1) Piesele din cutie
Pe masă pui doar ce ai nevoie. Găsești:

| Piesă | Cum o recunoști | Ce face |
|-------|-----------------|---------|
| **Hub** | Cutie gri-albă cu buton verde | Primește programul și pornește motorul |
| **Motor** | Piesă gri cu cablu și o axă care se rotește | Învârte roțile |
| **Tilt Sensor** | Piesă cu cablu, care simte înclinarea | Spune în ce parte e înclinată |

**Încearcă tu — piesele (4 min)**  
- [ ] Îți spui cu voce tare ce face hub-ul, motorul și senzorul  
- [ ] Apeși butonul verde de pe hub: lumina începe să clipească  

### 2) Conectarea: aplicația și hub-ul
**Ce deschizi acasă.** Aplicația WeDo 2.0 pentru tabletă nu se mai găsește în magazine, dar pe **calculator** (Windows sau Mac) merge în continuare: o descarci de pe site-ul LEGO Education, la produse retrase. Cine o are deja instalată pe tabletă o poate folosi. Pe calculator ai nevoie de Bluetooth.

Dacă nu o poți instala, programezi cu **Scratch 3.0**, care are extensia WeDo 2.0 (rulează în fundal aplicația **Scratch Link**), sau cu **Open Roberta Lab**, online. Acolo numele blocurilor și culorile sunt altele, dar ideea e aceeași: pornești, alegi direcția și viteza, aștepți, oprești. Construcția o faci în același fel, cu piesele din cutie.

1. Deschizi **aplicația WeDo 2.0** (sau Scratch 3.0).  
2. Apeși butonul verde de pe **hub**: lumina clipește.  
3. În aplicație alegi **hub-ul** tău din listă. Lumina nu mai clipește: s-a conectat.  
4. Deschizi proiectul **Milo, roverul de știință**.

**Încearcă tu — conectare (3 min)**  
- [ ] Hub-ul se conectează la aplicație  
- [ ] Lumina de pe hub e fixă  

### 3) Proiectul 1 — Milo: platforma, axa și motorul
Construiești Milo din cei 29 de pași. Pe fiecare pas ai nevoie de anumite **piese**, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · platforma (pașii 1–8)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–4** | Plăcile **verzi** una lângă alta, o piesă neagră pe ele, apoi o bară lungă | Placa e dreaptă |
| **5–8** | Placa **portocalie**, un cub negru și o piesă albastră deschisă; le prinzi sub platformă | Piesele nu se mișcă |

**Etapa 2 · axa și motorul (pașii 9–16)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **9–13** | O piesă albastră, **axa** neagră care trece prin platformă, și un opritor mic pe ea | Axa se învârte liber |
| **14–16** | **Motorul** cu cablul lui: îi pui piesa din pasul 15 și îl prinzi pe platformă | Cablul iese în spate, nu pe sub roți |

**Încearcă tu — platforma și motorul (12 min)**  
- [ ] Platforma verde stă dreaptă, cu partea portocalie dedesubt  
- [ ] Motorul e prins ferm  
- [ ] Axa se rotește când o atingi cu degetul  

### 4) Proiectul 1 — Milo: hub-ul, roțile și camera
**Etapa 3 · hub-ul și roțile (pașii 17–22)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **17–19** | **Hub-ul** deasupra, apoi plăcile laterale (la pasul 18 întorci modelul) | Hub-ul e prins, nu cade când îl ridici |
| **20–21** | Un inel și **elasticul galben**, care leagă motorul de axă | Elasticul e întins, nu atârnă |
| **22** | Cele **două roți** negre | Roțile se învârt când împingi Milo |

**Etapa 4 · camera (pașii 23–29)**

Aici faci „camera” lui Milo: o piesă **de decor**, care nu măsoară nimic.

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **23–27** | Placa portocalie cu piese albastre, antena mică și „ochii” albaștri | Camera arată ca în poza lui Milo |
| **28–29** | Pui **tija** cu capete portocalii și prinzi camera în **fața** lui Milo (la 29 întorci modelul) | Camera privește înainte |

Treci prin toți **cei 29 de pași**: modelul tău seamănă cu poza de pe copertă?

**Programul A — Merge**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor This Way** → 🟡 **Wait** 2 secunde → 🟢 **Motor Off** | Milo merge 2 secunde și se oprește |

Schema programului (de la stânga la dreapta):

```
  [🟡 Start] → [🟢 Motor This Way] → [🟡 Wait 2 s] → [🟢 Motor Off]
```

**Încearcă tu — Milo gata (14 min)**  
- [ ] Milo seamănă cu poza de pe copertă  
- [ ] Împingi Milo ușor pe masă: merge drept  
- [ ] Programul A: Milo merge 2 secunde  

### 5) Proiectul 2 — Brațul și floarea
Brațul se adaugă peste Milo, în 10 pași. Pasul 1 e poza finală; construiești de la pasul 2.

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **2–5** | O piesă albastră deschisă, o placă portocalie pe hub și **brațul**: o axă cu un capăt portocaliu la fiecare capăt | Brațul se mișcă sus și jos |
| **6–7** | Prinzi brațul în față și conectezi **senzorul** la hub, în portul liber | Cele două cabluri sunt în porturi diferite |
| **8–10** | Faci **floarea**: două discuri albastre, o frunză, o floare roșie și două tulpini | Floarea stă dreaptă |

Pasul 11 arată floarea pusă în fața lui Milo. Ea e **ținta** lui.

**Programul B — Pornește când îl înclini**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟡 **Wait For Tilt** (cu 🔵 senzorul de înclinare dedesubt) → 🟢 **Motor On For** 2 secunde | Înclini brațul și Milo pornește 2 secunde |

Schema programului:

```
  [🟡 Start] → [🟡 Wait For Tilt] → [🟢 Motor On For 2 s]
                     │
              [🔵 senzor de înclinare]   ← dedesubt
```

**Încearcă tu — brațul (12 min)**  
- [ ] Brațul se mișcă fără să se agațe de roți  
- [ ] Floarea stă în fața lui Milo  
- [ ] Programul B: înclini brațul și Milo pornește  

### 6) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**.

**Programul C — Înainte și înapoi, cu lumină**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟡 **Loop** 3 ori [ 🟢 **Hub Light** verde → 🟢 **Motor This Way** → 🟡 **Wait** 1 s → 🟢 **Hub Light** roșu → 🟢 **Motor That Way** → 🟡 **Wait** 1 s ] → 🟢 **Motor Off** | Milo merge înainte cu lumina verde, apoi înapoi cu lumina roșie, de 3 ori |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🟡 Loop 3 ori] → [🟢 Motor Off]
                    │
                    └─ în Loop:
                       [🟢 Hub Light verde] → [🟢 Motor This Way] → [🟡 Wait 1 s]
                       → [🟢 Hub Light roșu] → [🟢 Motor That Way] → [🟡 Wait 1 s]
```

Mai poți încerca aceste blocuri:

| Bloc | Ce face | Încearcă |
|------|---------|----------|
| 🟢 **Motor Power** | Schimbă **viteza**, de la 1 la 9 | Pui o valoare mică, apoi una mare: cât drum face în 2 secunde? |
| 🟢 **Motor That Way** | Merge **înapoi** | Înainte 2 secunde, apoi înapoi 2 secunde |
| 🟡 **Loop** | Repetă blocurile dinăuntru | Programul C îl folosește pentru **3 ori** |
| 🟢 **Hub Light** | Schimbă culoarea luminii hub-ului | Verde cât merge, roșu când se oprește |
| 🔴 **Play Sound** | Redă un sunet | Un sunet când pornește |
| 🔴 **Display** | Scrie un mesaj pe ecran | „Pornesc!” când pornește |

**Încearcă tu — supliment (15 min)**  
- [ ] Programul C: Milo merge înainte și înapoi, de **3 ori**, într-un 🟡 **Loop**  
- [ ] Lumina e verde la înainte și roșie la înapoi  
- [ ] Schimbi 🟢 **Motor Power** și vezi cât drum face în plus sau în minus  
- [ ] Adaugi un 🔴 **Play Sound** la start  

---

## Greșeli frecvente
1. **Milo nu se mișcă** — verifici dacă hub-ul e conectat (lumina fixă) și dacă motorul e prins în hub.  
2. **Motorul se aude, dar roțile stau** — elasticul galben a sărit sau nu e întins; îl pui la loc.  
3. **Programul B nu pornește** — înclini brațul mai mult și verifici cablul senzorului.  
4. **Piese în plus la sfârșit** — te întorci la pasul unde ai sărit o piesă.  
5. **Cablul în roată** — îl treci pe deasupra și îl prinzi cu mâna.

---

## De făcut azi — „Milo”
Salvat: `Prenume_Nume_R1_L01`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** Milo construit după cei 29 de pași · programul **A** merge |
| **Complet** | Minim + **Proiectul 2:** brațul și floarea · programul **B** · programul **C** (🟡 **Loop**, 🟢 **Hub Light**) |

Dacă rămâi în urmă: lasă Milo gata și programul **A** pornit.

### Pasul 1 — Piesele și conectarea
- [ ] Spui ce face hub-ul, motorul și senzorul  
- [ ] Hub-ul e conectat la aplicație (lumină fixă)  

### Pasul 2 — Milo *(Minim)*
- [ ] Milo seamănă cu poza de pe copertă  
- [ ] Programul **A** merge  

**→ Minim când:** Milo merge 2 secunde și se oprește, fără ajutor.

### Pasul 3 — Brațul și suplimentul *(Complet)*
- [ ] Brațul și floarea sunt montate  
- [ ] Programul **B** pornește când înclini brațul  
- [ ] Programul **C**: înainte și înapoi de 3 ori, lumina verde / roșie  

**Gata Complet când:** Milo pornește când înclini brațul (**B**) și face drumul de 3 ori cu lumină (**C**).

---

## Bonus ★★★ — Provocare: „Drumul lui Milo”
*Doar dacă ai terminat Complet.*
  
Faci un program care:
1. așteaptă să înclini brațul (🟡 **Wait For Tilt**);
2. aprinde lumina în **verde** și redă un **sunet**;
3. merge înainte 2 secunde, apoi se oprește și lumina devine **roșie**;
4. se întoarce înapoi exact la locul de start.

Ți-a ieșit la **mai puțin de 10 cm** de locul de start?

---

## Recapitulare pe scurt
1. **Hub** = creierul · **motor** = roțile · **Tilt Sensor** = simte înclinarea  
2. Programul începe cu 🟡 **Start**, apoi blocurile în ordine  
3. 🟡 **Wait For Tilt** așteaptă să înclini, apoi merge mai departe  
4. 🟡 **Loop** repetă comenzile, 🟢 **Motor Power** schimbă viteza  
5. Dacă ceva nu merge: cabluri, elastic, conectare

---

## Quiz scurt
1. Ce face **hub-ul**?  
2. Ce simte **Tilt Sensor**?  
3. Cum faci Milo să meargă mai încet?  
4. Care bloc face Milo să meargă înapoi?  
5. Ce se întâmplă cu blocurile dintr-un 🟡 **Loop**?

---

## Temă
- Desenezi Milo pe o foaie și scrii pe el numele pieselor: hub, motor, senzor.  
- Gândești un program nou pentru Milo și scrii blocurile pe foaie.  
- Nu demontezi nimic: Milo rămâne pregătit pentru lecția următoare.

---

## Ce urmează — Lecția 2
Continuăm cu Milo: punem **motorul** la lucru în programe mai lungi și învățăm să schimbăm viteza și direcția.
