# Lecția 5 — Formula 1
### Taste, viteză și ture
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi înveți să **conduci** un personaj cu tastele, să îi dai **viteză**, să numeri **turele** unei curse și să schimbi **pista**. Bolidul tău concurează cu al unui coleg pe trei ture.  
> Proiect: **„Formula 1”** · fișier: `Prenume_Nume_L5` (ex. `Ana_Pop_L5`)

---

## Obiectiv
La finalul orei joci propria cursă: Semaforul trece prin roșu, galben și verde, iar tu conduci Bolidul cu tastele. **Săgeată sus** accelerează, **săgeată stânga** și **săgeată dreapta** întorc volanul. Dacă ieși pe iarbă, încetinești. Cine face primul **trei ture** câștigă. Un coleg conduce Adversarul, cu **alte taste**.  
**Minim:** Semaforul, cu **scriptul întreg**, și Bolidul, cu **4 scripturi**.  
**Ținta orei (Complet):** jocul cu doi jucători, testat: câștigi, pierzi, iarba încetinește, iar turele se numără corect pentru amândoi.

## De ce contează
În jocurile de curse, viteza nu e un număr fix: crește când accelerezi și scade când dai drumul tastei. Pentru asta ții viteza într-o **variabilă** și o pui în `mergi (viteză) pași`. Azi mai înveți să **întrebi dacă o tastă e apăsată**, să **recunoști culori** de pe pistă (iarba încetinește, linia de sosire numără o tură) și să **schimbi decorul** ca să treci pe altă pistă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi |
| 5–35 | Pas cu pas: **5** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Formula 1” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span>  
*(Restul din Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `<tasta [săgeată sus] apăsată?>` | condiție: adevărată cât timp ții tasta apăsată |
| `schimbă decorul la [Pista 2]` | pune alt decor pe scenă |
| `([nr. decor] din [Scenă])` | valoare: numărul decorului de acum (primul decor e `1`) |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la`, `modifică … cu` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă până când`, `așteaptă ( ) secunde`, `dacă … atunci`, `dacă … atunci … altfel` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`schimbă decorul la`**, `schimbă costumul la`, `setează mărimea la`, `spune … pentru … secunde` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`tasta [săgeată sus] apăsată?`**, **`[nr. decor] din [Scenă]`**, `atinge culoarea ( )?` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) = ( )`, `( ) < ( )`, `( ) > ( )`, `<> sau <>`, `alătură ( ) ( )` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi ( ) pași`, `mergi la x: y:`, `rotește-te ↻ ( ) grade`, `rotește-te ↺ ( ) grade`, `orientează-te în direcția` |

### 1) Tastele conduc mașina
1. <span style="color:#5CB1D1;font-weight:700">tasta [săgeată sus] apăsată?</span> este o **condiție**: e adevărată cât timp ții tasta apăsată. O pui în `dacă`
2. Diferența față de `când tasta … este apăsată`: acela pornește un script o dată, iar `tasta … apăsată?` se întreabă **mereu**, în buclă, ca să afli dacă tasta e apăsată **acum**
3. Volanul: `dacă <tasta [săgeată stânga] apăsată?>` pune `rotește-te ↺ 5 grade`, iar `dacă <tasta [săgeată dreapta] apăsată?>` pune `rotește-te ↻ 5 grade`. Alegi tasta din meniul blocului

**Încearcă tu — volanul (3 min)**  
- [ ] Ai pus două `dacă` într-o buclă `la infinit`, unul pentru stânga și unul pentru dreapta  
- [ ] Cât ții săgeata stânga, personajul se rotește spre stânga, iar cu săgeata dreapta, spre dreapta  

### 2) Viteza e o variabilă
1. Creezi variabila `viteză`, **pentru toate personajele**. Pui `mergi (viteză) pași`: cu cât `viteză` e mai mare, cu atât personajul aleargă mai repede
2. Cât ții săgeata sus, viteza crește cu `1`: `modifică viteză cu 1`. Dar are o limită: pui `dacă <(viteză) < 5>` ca să nu depășească `5`
3. Când dai drumul tastei, intri pe `altfel`: viteza scade cu `1`. Pui `dacă <(viteză) > 0>` ca să nu coboare sub zero
4. Rezultatul: Bolidul prinde viteză treptat și frânează treptat, ca o mașină adevărată

**Încearcă tu — viteza (3–4 min)**  
- [ ] `viteză` pornește de la `0` și crește cât ții tasta, până la `5`  
- [ ] Când dai drumul tastei, scade până la `0`  
- [ ] Personajul merge mai repede cu cât `viteză` e mai mare  

### 3) Iarba și linia de sosire
1. <span style="color:#5CB1D1;font-weight:700">atinge culoarea (verde)?</span> întreabă dacă personajul atinge culoarea aleasă. O alegi **cu pipeta, direct de pe pistă**, ca să fie exact aceeași
2. **Iarba încetinește:** `dacă <atinge culoarea [verde]?> atunci setează viteză la 1`. Mașina nu trebuie să aibă verde în ea
3. **Linia de sosire numără turele:** pe drum desenezi o linie **violet**. `dacă <atinge culoarea [violet]?> atunci modifică ture cu 1`, apoi `așteaptă 1 secunde`, ca tura să nu se numere de mai multe ori cât stai pe linie
4. Pui numărarea turelor într-un **script separat**, ca așteptarea de o secundă să nu oprească Bolidul din mers
5. Cursa se termină cu `repetă până când <(ture) = 3>`: bucla se oprește singură după trei ture. Ai doi concurenți, deci două variabile: `ture` pentru Bolid și `ture adversar` pentru Adversar. Bucla se oprește când **oricare** ajunge la trei: `<<(ture) = 3> sau <(ture adversar) = 3>>`

**Încearcă tu — culorile (3 min)**  
- [ ] Pe iarbă, viteza coboară la `1`  
- [ ] Pe drum, viteza revine când ții săgeata sus  
- [ ] La linia violet, `ture` crește cu `1`, o singură dată  

### 4) Al doilea jucător, pe alte taste
1. Adversarul are aceleași scripturi ca Bolidul, dar le citește **alte taste**: `w` accelerează, `a` întoarce spre stânga, `d` întoarce spre dreapta. Alegi tastele din meniul blocului `tasta [ ] apăsată?`
2. Fiecare mașină are **viteza ei**: Bolidul folosește `viteză`, iar Adversarul `viteză adversar`. Dacă ar folosi aceeași variabilă, și-ar da viteza una alteia
3. La fel și turele: Bolidul numără în `ture`, iar Adversarul în `ture adversar`
4. **Truc:** ca să nu refaci totul, tragi un script de la Bolid peste Adversar, în lista de personaje de jos. Se copiază acolo. Apoi schimbi **tastele**, **variabilele** (`viteză adversar`, `ture adversar`) și **locul de start**

**Încearcă tu — copierea (3–4 min)**  
- [ ] Ai copiat un script de la Bolid la Adversar  
- [ ] Ai schimbat tastele în `w`, `a`, `d`  
- [ ] Ai schimbat `viteză` în `viteză adversar` și `ture` în `ture adversar`  

### 5) Schimbă pista
1. <span style="color:#9966FF;font-weight:700">schimbă decorul la [Pista 2]</span> pune alt decor pe scenă. Decorurile sunt numerotate: primul e `1`, al doilea `2`
2. <span style="color:#5CB1D1;font-weight:700">([nr. decor] din [Scenă])</span> este o **valoare**: îți spune ce număr are decorul de acum. Cu `dacă <([nr. decor] din [Scenă]) = 1>` știi dacă ești încă pe prima pistă
3. Așa faci o cursă în două etape: după prima cursă, dacă ești pe pista `1`, treci pe pista `2` și pornești din nou. Dacă ești deja pe pista `2`, cursa se termină

**Încearcă tu — pista (3 min)**  
- [ ] Ai două decoruri, `Pista 1` și `Pista 2`  
- [ ] Un click pe un bloc `schimbă decorul la` schimbă pista  
- [ ] `[nr. decor] din [Scenă]` arată `1` sau `2`, după decorul de acum  

---

## Greșeli frecvente
1. **Bolidul nu pornește** — lipsește `difuzează start` de la Semafor, sau mesajul din `când primesc` nu e același.  
2. **Bolidul nu se întoarce** — lipsește scriptul Volanul, sau ai ales alte taste decât săgeată stânga și săgeată dreapta.  
3. **Bolidul se mișcă fără să apeși tasta** — scriptul pune viteza la un număr fix. Viteza trebuie să crească doar în `dacă <tasta … apăsată?>`.  
4. **Viteza trece de 5 sau devine negativă** — lipsesc cele două `dacă`, `viteză < 5` și `viteză > 0`.  
5. **Iarba nu încetinește** — culoarea `verde` din bloc nu e aleasă cu pipeta de pe pistă, sau mașina are și ea verde în ea și încetinește mereu. Alegi o mașină roșie, albastră sau portocalie.  
6. **Turele nu se numără** — culoarea `violet` din bloc nu e aleasă cu pipeta de pe linie, sau linia e prea subțire. Desenează-o cât un deget de lată.  
7. **Se numără mai multe ture odată** — lipsește `așteaptă 1 secunde` din scriptul Turelor.  
8. **Prima tură se numără imediat** — Bolidul pornește înainte de linia violet. Trebuie să pornească **după** ea, la `x: 40`.  
9. **Cursa a doua se termină imediat** — nu ai pus `setează ture la 0` și `setează ture adversar la 0` înainte de al doilea `difuzează start`.  
10. **Adversarul merge cu tastele Bolidului, sau cei doi se încurcă** — scripturile copiate au rămas cu tastele sau cu variabilele Bolidului. La Adversar folosești `w`, `a`, `d`, `viteză adversar` și `ture adversar`.  
11. **Semaforul nu schimbă culorile** — costumele nu sunt redenumite `roșu`, `galben` și `verde`, exact așa.  
12. **Pista 2 nu apare** — decorurile nu sunt în ordine: `Pista 1` trebuie să fie primul, `Pista 2` al doilea.  
13. **Scorul nu crește** — `modifică scor cu 1` e în `altfel`, nu în ramura cu `Ai câștigat!`.  
14. **Nume fișier** — `Prenume_Nume_L5`, nu doar `Ana_L5`.  

---

## De făcut azi — „Formula 1”
Salvat: `Prenume_Nume_L5`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3**: pregătirea, Semaforul, cu scriptul întreg, și Bolidul, cu cele **4 scripturi**. Jocul merge și fără Adversar: Bolidul face cele trei ture |
| **Complet (ținta orei)** | Minim + **Pasul 4**: Adversarul, cu **4 scripturi**, pe alte taste. Testezi: câștigi, pierzi, iarba încetinește, iar turele se numără corect |
| **Bonus** | **Pasul 5**: a doua pistă și personajul **Arbitrul**, cu **2 scripturi**. Scripturile din Pașii 2, 3 și 4 nu se mai schimbă |

Fiecare personaj are scripturile lui **întregi**, de la început. Nu se completează nimic după aceea. Bolidul are mai multe scripturi, dar fiecare e mic: le faci **unul câte unul**.

Dacă rămâi în urmă: salvează ce ai. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Pregătirea: pista, variabile și personaje *(Minim)*
**Pista:** pe scenă, în tab-ul **Decoruri**, desenezi decorul `Pista 1` cu unealta **Dreptunghi**, umplut, în patru pași:
1. **Iarba:** un dreptunghi **verde** pe tot fundalul
2. **Drumul:** peste iarbă, un dreptunghi **gri**, mare, aproape cât scena, cu o margine verde în jur
3. **Interiorul:** în mijloc, un dreptunghi **verde**, cam cât jumătate din scenă. Rămâne un **inel gri**, un drum pătrat, lat cât trei degete
4. **Linia de sosire:** pe drumul de jos, la mijloc, o linie **violet**, cât un deget de lată, de la iarba din interior până la cea din exterior

Redenumești decorul `Pista 1`.  
**Variabilele:** `scor`, `ture`, `ture adversar`, `viteză` și `viteză adversar`, toate **pentru toate personajele**.  
**Personajele:** adaugi trei și le redenumești exact:
- `Semaforul`: desenezi cu unealta **Cerc** un cerc roșu. Copiezi costumul de două ori și faci celelalte două galben și verde. Redenumești costumele `roșu`, `galben` și `verde`. Adaugi în tab-ul **Sunete** un sunet scurt
- `Bolidul`: un personaj de tip mașină din bibliotecă, **fără verde în el** (roșie, albastră sau portocalie)
- `Adversarul`: o altă mașină din bibliotecă, de altă culoare, tot fără verde. O conduce un coleg, pe alte taste
- `Arbitrul` îl adaugi doar la Bonus

- [ ] Decorul se numește `Pista 1`: inel gri, iarbă verde în jur și în mijloc, linie violet pe drumul de jos  
- [ ] Variabilele `scor`, `ture`, `ture adversar`, `viteză` și `viteză adversar` sunt **pentru toate personajele**  
- [ ] Semaforul are costumele `roșu`, `galben` și `verde` și un sunet  
- [ ] Bolidul și Adversarul nu au verde în ele  

### Pasul 2 — Semaforul, scriptul întreg *(Minim)*
Ordinea e un **model**: poți schimba numerele. Semaforul are **un singur script**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează ture la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează ture adversar la</span> `0`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Pista 1]`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `20`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[roșu]`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[galben]`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[verde]`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  

- [ ] La steag, Semaforul trece prin roșu, galben și verde, cu câte o secundă  
- [ ] Pe verde se aude sunetul  
- [ ] La final trimite mesajul `start`  
- [ ] Variabilele pornesc de la `0`, iar decorul e `Pista 1`  

### Pasul 3 — Bolidul, cele 4 scripturi *(Minim)*
Bolidul are **4 scripturi** complete. Ordinea lor pe ecran nu contează. Primul îl așază la start, **după linia violet**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `40` <span style="color:#4C97FF;font-weight:700">y:</span> `-85`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

Al doilea e **volanul**, iar următoarele sunt **motorul** și **turele**. Toate trei pornesc când Semaforul difuzează `start`:

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(ture adversar)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [săgeată stânga] apăsată?</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↺</span> `5` grade  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `5` grade  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FF8C1A;font-weight:700">setează viteză la</span> `0`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `40` <span style="color:#4C97FF;font-weight:700">y:</span> `-85`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  

<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(ture adversar)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [săgeată sus] apăsată?</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(viteză)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `5` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică viteză cu</span> `1`  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(viteză)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică viteză cu</span> `-1`  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> <span style="color:#FF8C1A;font-weight:700">(viteză)</span> pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea</span> `verde` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">setează viteză la</span> `1`  

<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Ai câștigat!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Ai pierdut!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">difuzează</span> `sfârșit`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(ture adversar)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea</span> `violet` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică ture cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  

**Ce face fiecare script:**
1. **Pornirea:** așază Bolidul la start, orientat spre dreapta
2. **Volanul:** cât durează cursa, întreabă mereu dacă ții săgeata stânga sau dreapta și rotește mașina
3. **Motorul:** accelerează cu săgeata sus, merge `(viteză)` pași, încetinește pe iarbă, iar la final spune dacă ai câștigat și trimite `sfârșit`
4. **Turele:** numără o tură de fiecare dată când Bolidul trece peste linia violet

- [ ] Apeși pe steag: Semaforul pornește, iar pe verde Bolidul e la start  
- [ ] Cât ții săgeata sus, Bolidul prinde viteză până la `5`  
- [ ] Cu săgeata stânga și săgeata dreapta Bolidul se întoarce  
- [ ] Când dai drumul tastei, Bolidul încetinește  
- [ ] Pe iarbă, Bolidul merge încet  
- [ ] Trecând peste linia violet, `ture` crește cu `1`, o singură dată  
- [ ] După trei ture, Bolidul spune `Ai câștigat!` și `scor` crește  
- [ ] Salvat: `Prenume_Nume_L5`  

**→ Minim când:** apeși pe steag, Semaforul dă startul, conduci Bolidul cu tastele, pe iarbă încetinești, faci trei ture și Bolidul spune că ai câștigat.

### Pasul 4 — Adversarul, cele 4 scripturi *(Complet)*
Adversarul are **4 scripturi** complete, ca Bolidul, dar cu **alte taste**: `w` accelerează, `a` și `d` întorc. Îl conduce un coleg. Poți copia scripturile de la Bolid, ca la Încearcă tu, apoi le schimbi cum arată mai jos. Mai întâi, așezarea la start, **sub** Bolid, pe banda de jos:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `40` <span style="color:#4C97FF;font-weight:700">y:</span> `-125`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

Apoi volanul, motorul și turele. Toate trei pornesc când Semaforul difuzează `start`:

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(ture adversar)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [a] apăsată?</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↺</span> `5` grade  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [d] apăsată?</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `5` grade  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FF8C1A;font-weight:700">setează viteză adversar la</span> `0`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `40` <span style="color:#4C97FF;font-weight:700">y:</span> `-125`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  

<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(ture adversar)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [w] apăsată?</span><span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(viteză adversar)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `5` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică viteză adversar cu</span> `1`  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(viteză adversar)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică viteză adversar cu</span> `-1`  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> <span style="color:#FF8C1A;font-weight:700">(viteză adversar)</span> pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea</span> `verde` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">setează viteză adversar la</span> `1`  

<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture adversar)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Adversarul a câștigat!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(ture)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(ture adversar)</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge culoarea</span> `violet` <span style="color:#5CB1D1;font-weight:700">?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică ture adversar cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  

- [ ] Adversarul pornește odată cu Bolidul, pe banda de jos  
- [ ] Cu `w` prinde viteză, cu `a` și `d` se întoarce  
- [ ] Pe iarbă încetinește, iar la linia violet `ture adversar` crește cu `1`  
- [ ] Bolidul și Adversarul nu își dau viteza unul altuia  
- [ ] Dacă pierzi, Bolidul spune `Ai pierdut!`, iar Adversarul spune că a câștigat  
- [ ] Dacă câștigi tu, Adversarul nu mai spune că a câștigat  

**→ Complet când:** doi jucători au făcut cursa pe taste diferite: a câștigat primul, apoi a câștigat al doilea.

---

## Bonus (dacă ai terminat Complet)
### Pasul 5 — A doua pistă și Arbitrul *(★★★)*
Mai întâi creezi **a doua pistă**: în tab-ul **Decoruri**, copiezi `Pista 1`, schimbi culoarea drumului din gri în **maro** (iarba rămâne verde, linia rămâne violet) și o redenumești `Pista 2`. Ordinea contează: `Pista 1` primul, `Pista 2` al doilea. Apoi adaugi un personaj de om din bibliotecă, fără verde în el, și îl redenumești `Arbitrul`. Scripturile din Pașii 2, 3 și 4 **nu se mai schimbă**: Bolidul trimite deja `sfârșit` la finalul cursei, iar Arbitrul îl primește.

Arbitrul are **2 scripturi** complete:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-30`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `sfârșit`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">([nr. decor] din [Scenă])</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Hai pe Pista 2!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
↳ <span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Pista 2]`  
↳ <span style="color:#FF8C1A;font-weight:700">setează ture la</span> `0`  
↳ <span style="color:#FF8C1A;font-weight:700">setează ture adversar la</span> `0`  
↳ <span style="color:#E6A800;font-weight:700">difuzează</span> `start`  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Curse câștigate:` <span style="color:#FF8C1A;font-weight:700">(scor)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

- [ ] Ai două decoruri, `Pista 1` primul și `Pista 2` al doilea  
- [ ] După prima cursă, Arbitrul spune `Hai pe Pista 2!` și decorul se schimbă  
- [ ] A doua cursă pornește singură, cu turele de la `0`  
- [ ] După a doua cursă, Arbitrul spune câte curse ai câștigat  
- [ ] ★★★ **Provocare:** vrei o cursă cu o mașină mai rapidă? Schimbi în scriptul Motor al Adversarului limita `5` din `<(viteză adversar) < 5>` cu `6`. Mașina lui devine mai rapidă: mai poți câștiga?  

## Recapitulare rapidă
1. `tasta [săgeată sus] apăsată?` e o condiție care e adevărată cât ții tasta  
2. Viteza e o **variabilă** pusă în `mergi (viteză) pași`; o limitezi cu `dacă`  
3. `atinge culoarea` recunoaște iarba (încetinești) și linia de sosire (numeri o tură)  
4. `repetă până când` cu `sau` se oprește când oricare condiție e adevărată  
5. Fiecare mașină are viteza ei (`viteză`, `viteză adversar`) și turele ei (`ture`, `ture adversar`)  
6. `schimbă decorul la` schimbă pista, iar `[nr. decor] din [Scenă]` spune pe care ești  
7. Nume: **`Prenume_Nume_L5`**  

## Schema pe scurt *(pe foaie)*

**Pe Semafor** *(un singur script)*  
la steag → `setează scor la 0` → `setează ture la 0` → `setează ture adversar la 0` → `schimbă decorul la [Pista 1]` → `mergi la x: y:` → `setează mărimea` → `schimbă costumul la [roșu]` → `așteaptă 1` → `[galben]` → `așteaptă 1` → `[verde]` → `pornește sunetul` → `așteaptă 1` → `difuzează start`

**Pe Bolid** *(4 scripturi)*  
la steag → `mergi la x: y:` → `orientează-te în direcția 90` → `setează mărimea`  
Volanul: când primesc start → `repetă până când <<(ture) = 3> sau <(ture adversar) = 3>>` (`dacă <tasta [săgeată stânga] apăsată?>` `atunci` `rotește-te ↺ 5` + `dacă <tasta [săgeată dreapta] apăsată?>` `atunci` `rotește-te ↻ 5`)  
Motorul: când primesc start → `setează viteză la 0` → `mergi la x: y:` → `orientează-te în direcția 90` → `repetă până când <<(ture) = 3> sau <(ture adversar) = 3>>` (`dacă <tasta [săgeată sus] apăsată?>` `atunci` (`dacă <(viteză) < 5>` `atunci` `modifică viteză cu 1`) `altfel` (`dacă <(viteză) > 0>` `atunci` `modifică viteză cu -1`) + `mergi (viteză) pași` + `dacă <atinge culoarea [verde]?>` `atunci` `setează viteză la 1`) → `dacă <(ture) = 3>` `atunci` (`modifică scor cu 1` + `spune Ai câștigat!`) `altfel` `spune Ai pierdut!` → `difuzează sfârșit`  
Turele: când primesc start → `repetă până când <<(ture) = 3> sau <(ture adversar) = 3>>` (`dacă <atinge culoarea [violet]?>` `atunci` (`modifică ture cu 1` + `așteaptă 1`))

**Pe Adversar** *(4 scripturi, ca Bolidul, dar cu `w`, `a`, `d`, `viteză adversar`, `ture adversar`)*  
la steag → `mergi la x: y:` → `orientează-te în direcția 90` → `setează mărimea`  
Volanul: când primesc start → `repetă până când <<(ture) = 3> sau <(ture adversar) = 3>>` (`dacă <tasta [a] apăsată?>` `atunci` `rotește-te ↺ 5` + `dacă <tasta [d] apăsată?>` `atunci` `rotește-te ↻ 5`)  
Motorul: când primesc start → `setează viteză adversar la 0` → `mergi la x: y:` → `orientează-te în direcția 90` → `repetă până când <<(ture) = 3> sau <(ture adversar) = 3>>` (`dacă <tasta [w] apăsată?>` `atunci` (`dacă <(viteză adversar) < 5>` `atunci` `modifică viteză adversar cu 1`) `altfel` (`dacă <(viteză adversar) > 0>` `atunci` `modifică viteză adversar cu -1`) + `mergi (viteză adversar) pași` + `dacă <atinge culoarea [verde]?>` `atunci` `setează viteză adversar la 1`) → `dacă <(ture adversar) = 3>` `atunci` `spune Adversarul a câștigat!`  
Turele: când primesc start → `repetă până când <<(ture) = 3> sau <(ture adversar) = 3>>` (`dacă <atinge culoarea [violet]?>` `atunci` (`modifică ture adversar cu 1` + `așteaptă 1`))

**Pe Arbitru** *(Bonus, 2 scripturi)*  
la steag → `mergi la x: y:` → `setează mărimea`  
când primesc sfârșit → `dacă <([nr. decor] din [Scenă]) = 1>` `atunci` (`spune Hai pe Pista 2!` + `schimbă decorul la [Pista 2]` + `setează ture la 0` + `setează ture adversar la 0` + `difuzează start`) `altfel` `spune (alătură Curse câștigate: (scor))`

**Quiz scurt (cu profesorul):**  
- Care e diferența dintre `când tasta … este apăsată` și `tasta … apăsată?`  
- De ce ținem viteza într-o variabilă?  
- De ce Adversarul are `viteză adversar` și nu aceeași `viteză` ca Bolidul?  
- De ce numărăm turele într-un script separat?  
- Ce dă `[nr. decor] din [Scenă]` pe prima pistă?

## Temă (opțional)
- Dacă ai doar Minim: testezi acasă jocul, apoi adaugi Adversarul (Pasul 4), în același `Prenume_Nume_L5`.  
- Dacă ai Complet: adaugi acasă a doua pistă și Arbitrul (Pasul 5), în același `Prenume_Nume_L5`.  
- Dacă ai terminat și Bonusul: desenezi o pistă nouă, cu altă formă, de exemplu un cerc lat sau un 8 din două cercuri late puse unul lângă altul, și o pui ca al treilea decor. Pe pista nouă pui linia violet și muți mașinile la start pe drum.  
