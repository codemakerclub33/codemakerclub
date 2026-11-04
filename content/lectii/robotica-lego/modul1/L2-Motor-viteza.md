# LECȚIA 2 — Robotul care trage
### Motor, viteză, forță și măsurători
**Modulul 1 · Robotică LEGO WeDo 2.0**  
**Code Maker Club · Robot Starter**

> Azi construiești un **robot care trage** un cadru încărcat prin lanțuri, apoi măsori cât de repede și cât de departe îl trage, schimbând **viteza** motorului și **greutatea**.  
> Proiect: **„Pull”** · Salvezi programele ca `Prenume_Nume_R1_L02`

---

## Ce facem azi
La finalul orei ai un robot care **trage** un cadru. Înveți că motorul poate fi făcut **mai lent** sau **mai rapid** și vezi cu rigla ce se schimbă când pui **greutate** în cadru. Programele din aplicație sunt aceleași pentru toți, iar **suplimentul** îți dă comenzi în plus: viteză, repetare, lumină, sunet și mesaj.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 · pregătim piesele și locul |
| 10–50 | **Proiectul 1** · robotul (pașii 1–21) |
| 50–70 | **Proiectul 1** · cadrul, lanțurile, conectarea și programul **A** (pașii 22–33) |
| 70–100 | **Proiectul 2** · experimentul cu viteză și greutate, programul **B** |
| 100–115 | **Suplimentul** · comenzi în plus |
| 115–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| 🟢 **Motor This Way** / 🟢 **Motor That Way** | Pornește motorul într-o direcție sau în cealaltă | Robotul trage, apoi eliberează |
| 🟢 **Motor Power** | Schimbă **viteza** motorului, de la 1 la 9 | O valoare mică = lent, una mare = repede |
| 🟢 **Motor On For** | Pornește motorul pentru un timp | Motor On For 3 secunde |
| 🟡 **Loop** | Repetă blocurile dinăuntru | Trage, oprește, trage din nou |
| 🟢 **Hub Light**, 🔴 **Play Sound**, 🔴 **Display** | Culoare, sunet, mesaj | Lumină verde cât trage |

---

## Culorile blocurilor
Blocurile din aplicație au culori: 🟡 **galbene** (pornesc și conduc programul), 🟢 **verzi** (motor și lumina hub-ului), 🔴 **roșii** (ecran și sunet), 🔵 **albastre** (senzori, se atașează dedesubtul altor blocuri). La Pull folosim mai ales blocurile 🟡 și 🟢.

**Cum așezi blocurile:** le pui într-un **rând**, de la **stânga la dreapta**, lipite unul de altul. Programul se citește în aceeași ordine. Blocurile 🔵 se prind **dedesubt**, în crestătura blocului de care au nevoie.

```
  [🟡 Start] → [🟢 Motor This Way] → [🟡 Wait] → [🟢 Motor Off]
                                         │
                                     [🔵 senzor]   ← se prinde dedesubt
```


---

## Pas cu pas

### 1) Piesele și locul de lucru
Pe masă pui doar ce ai nevoie: **hub-ul**, **motorul**, piese verzi, portocalii, albastre, două lanțuri și patru piese rotunde negre. Faci loc: cadrul va merge pe masă, deci ai nevoie de un drum liber, de cel puțin **o riglă lungă**.

**Încearcă tu — locul (3 min)**  
- [ ] Masa e liberă pe aproximativ un metru  
- [ ] Rigla e la îndemână  

### 2) Proiectul 1 — Robotul: motorul, hub-ul și fața
Construiești robotul din cei 33 de pași. Pe fiecare pas ai nevoie de anumite piese, în număr precis; ia doar atât. Cine are calculatorul la îndemână poate deschide aplicația **WeDo 2.0 pentru calculator**, unde construcția e arătată pas cu pas.

**Etapa 1 · motorul (pașii 1–10)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **1–3** | Baza din piese portocalii și verzi, apoi **motorul** cu cablul lui | Motorul e prins ferm |
| **4–10** | Axa cu piesele mici de legătură, cuburile negre și piesele albastru deschis | Axa se învârte liber |

**Etapa 2 · hub-ul (pașii 11–16)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **11** | Pui **hub-ul** lângă motor | Cablul motorului ajunge la hub |
| **12–16** | Axa a doua, plăcile verzi și piesele de prindere | Hub-ul nu cade când ridici robotul |

**Etapa 3 · fața și discurile (pașii 17–21)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **17–19** | Plăcile verzi și piesa cu **ochii** | Ochii privesc în față |
| **20–21** | Cele două piese verzi în unghi și cele două **discuri albastre** (la 21 întorci modelul) | Discurile se învârt liber |

**Încearcă tu — robotul (18 min)**  
- [ ] Motorul e prins ferm, iar axa se rotește liber  
- [ ] Hub-ul nu cade când ridici robotul  
- [ ] Robotul seamănă cu poza din pasul 21  

### 3) Proiectul 1 — Cadrul și programul A
Acum faci „încărcătura” robotului: un **cadru dreptunghiular** verde.

**Cadrul (pașii 22–32)**

| Pași | Ce construiești | Verifici |
|------|-----------------|----------|
| **22–29** | Colțurile cadrului din piese portocalii și verzi, apoi laturile lungi | Cadrul e dreptunghi, fără colțuri strâmbe |
| **30** | Plăcile albe și bara gri de capăt | Cadrul e rigid |
| **31** | Patru piese rotunde **negre** sub cadru (întorci modelul) | Cele patru piese ating masa |
| **32** | Cele **două lanțuri**, prinse de cadru | Lanțurile sunt lungi și nu se încurcă |

**Pasul 33 · legăm cadrul de robot**

Pasul 33 arată cum prinzi lanțurile de robot. Cadrul se află în spatele robotului, iar lanțurile sunt **întinse**, nu moi.

Apoi pornești **aplicația WeDo 2.0**: apeși butonul verde de pe hub, alegi hub-ul tău din listă (lumina nu mai clipește) și deschizi proiectul **Pull** (sau creezi un proiect nou, dacă nu îl găsești).

**Programul A — Trage**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor Off** | Robotul trage cadrul 3 secunde |

Schema programului:

```
  [🟡 Start] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor Off]
```

**Încearcă tu — cadrul (16 min)**  
- [ ] Cadrul alunecă ușor pe masă, iar lanțurile sunt întinse  
- [ ] Hub-ul e conectat la aplicație  
- [ ] Programul A: cadrul se mută  

### 4) Proiectul 2 — Experimentul
**Programul B — Trage, apoi eliberează**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟢 **Motor This Way** → 🟡 **Wait** 3 secunde → 🟢 **Motor That Way** → 🟡 **Wait** 1 secundă → 🟢 **Motor Off** | Trage, apoi slăbește lanțurile |

Schema programului:

```
  [🟡 Start] → [🟢 Motor This Way] → [🟡 Wait 3 s] → [🟢 Motor That Way] → [🟡 Wait 1 s] → [🟢 Motor Off]
```

Schimbi viteza cu 🟢 **Motor Power** și măsori cu rigla cât de mult s-a mutat cadrul în 3 secunde. Notezi pe foaie.

| Încercarea | Motor Power | Greutate în cadru | Cât s-a mutat (cm) |
|------------|-------------|-------------------|--------------------|
| 1 | mică | goală | ___ |
| 2 | mare | goală | ___ |
| 3 | mare | cu 5 piese LEGO în cadru | ___ |

Pui toate trei încercările pe aceeași masă și la aceeași distanță de la început.

**Încearcă tu — experiment (15 min)**  
- [ ] Programul B: robotul trage și eliberează  
- [ ] Completezi toate cele 3 încercări din tabel  
- [ ] Spui în ce încercare s-a mutat cadrul cel mai puțin  

### 5) Proiectul 2 — Suplimentul: programul C
Aplicația te învață programele A și B. Aici adaugi comenzi noi și le legi într-un **program C**.

**Programul C — Trage de 3 ori, cu pauză**

| Blocurile | Ce se întâmplă |
|-----------|----------------|
| 🟡 **Start** → 🟡 **Loop** 3 ori [ 🟢 **Hub Light** verde → 🟢 **Motor This Way** → 🟡 **Wait** 2 s → 🟢 **Motor Off** → 🟢 **Hub Light** roșu → 🟡 **Wait** 1 s ] | Robotul trage 2 secunde cu lumina verde, apoi stă 1 secundă cu lumina roșie, de 3 ori |

Schema programului (blocurile din paranteze stau **în** 🟡 **Loop**):

```
  [🟡 Start] → [🟡 Loop 3 ori]
                    │
                    └─ în Loop:
                       [🟢 Hub Light verde] → [🟢 Motor This Way] → [🟡 Wait 2 s]
                       → [🟢 Motor Off] → [🟢 Hub Light roșu] → [🟡 Wait 1 s]
```

Mai poți încerca aceste blocuri:

| Bloc | Ce face | Încearcă |
|------|---------|----------|
| 🟢 **Motor Power** | Schimbă viteza, de la 1 la 9 | Mică, apoi mare |
| 🟡 **Loop** | Repetă | Programul C îl folosește pentru **3 ori** |
| 🟢 **Hub Light** | Culoarea hub-ului | Verde cât trage, roșu când se oprește |
| 🔴 **Play Sound** | Redă un sunet | Un sunet la start |
| 🔴 **Display** | Scrie un mesaj | „Trag!” cât trage |

**Încearcă tu — supliment (12 min)**  
- [ ] Programul C: robotul trage de **3 ori**, cu pauză între  
- [ ] Lumina e verde cât trage și roșie în pauză  
- [ ] Adaugi un 🔴 **Play Sound** la start  

---

## Greșeli frecvente
1. **Motorul merge, dar cadrul nu se mișcă** — lanțurile sunt moi sau prinse greșit; le întinzi.  
2. **Roțile patinează** — cadrul e prea greu pentru viteza aleasă; încerci o viteză mai mică.  
3. **Cadrul se mișcă strâmb** — cele patru piese negre nu ating masa la fel; verifici pasul 31.  
4. **Nu compari corect încercările** — pornești de la locuri diferite sau schimbi două lucruri odată.  
5. **Cablul se prinde în lanț** — îl treci pe deasupra.

---

## De făcut azi — „Pull”
Salvat: `Prenume_Nume_R1_L02`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** robotul și cadrul construite după cei 33 de pași · programul **A** trage cadrul |
| **Complet** | Minim + **Proiectul 2:** programul **B** · tabelul cu 3 încercări completat · programul **C** (🟡 **Loop**) |

Dacă rămâi în urmă: lasă robotul gata și programul **A** pornit.

### Pasul 1 — Locul și piesele
- [ ] Masa e liberă pe un metru, cu riglă la îndemână  

### Pasul 2 — Robotul și cadrul *(Minim)*
- [ ] Robotul și cadrul sunt construite, lanțurile sunt întinse  
- [ ] Programul **A** trage cadrul  

**→ Minim când:** cadrul se mută 3 secunde, fără ajutor.

### Pasul 3 — Experimentul și suplimentul *(Complet)*
- [ ] Programul **B** merge  
- [ ] Tabelul cu 3 încercări e completat  
- [ ] Programul **C**: trage de 3 ori, cu pauză  

**Gata Complet când:** tabelul tău spune ce s-a întâmplat la fiecare încercare.

---

## Bonus ★★★ — Provocare: „Cursa de tractoare”
*Doar dacă ai terminat Complet.*

Faci un program care trage cadrul **exact 20 cm**, fără să treacă de linia de sosire, apoi oprește motorul, aprinde lumina verde și redă un sunet.  
Reglezi **timpul** din 🟡 **Wait** și **viteza** din 🟢 **Motor Power** până îți iese.

Ți-a ieșit la **mai puțin de 3 cm** diferență?

---

## Recapitulare pe scurt
1. 🟢 **Motor This Way** trage, 🟢 **Motor That Way** eliberează  
2. 🟢 **Motor Power** schimbă viteza  
3. Cadrul mai greu se mută **mai puțin** sau mai încet  
4. 🟡 **Loop** repetă comenzile  
5. Un experiment bun schimbă **un singur lucru** o dată

---

## Quiz scurt
1. Ce schimbă 🟢 **Motor Power**?  
2. Ce blocuri trag și ce bloc eliberează lanțurile?  
3. Ce se întâmplă când pui piese în cadru?  
4. De ce schimbăm un singur lucru o dată?  
5. Ce face un 🟡 **Loop**?

---

## Temă
- Scrii pe foaie ce ai aflat din tabelul cu 3 încercări, într-o propoziție.  
- Gândești cum ai face robotul să tragă un cadru mai greu.  
- Nu demontezi nimic: robotul rămâne pregătit pentru lecția următoare.

---

## Ce urmează — Lecția 3
Construim o **mașină de curse**: măsurăm cum se schimbă distanța și timpul când schimbi viteza și o facem să accelereze.
