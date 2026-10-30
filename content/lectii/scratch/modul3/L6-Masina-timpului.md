# Lecția 6 — Mașina timpului
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi înveți să folosești **data de azi** în joc. Un Pilot pornește Mașina timpului și călătorește la trei evenimente din istorie, iar tu calculezi **câți ani au trecut** de atunci.  
> Proiect: **„Mașina timpului”** · fișier: `Prenume_Nume_L6` (ex. `Ana_Pop_L6`)

---

## Obiectiv
La finalul orei joci propriul joc: Pilotul te salută pe nume, Mașina timpului pornește, iar Pilotul îți spune un eveniment din istorie. Tu scrii **câți ani au trecut** de atunci. Dacă ai calculat bine, primești un punct. Dacă nu, pierzi o viață și afli răspunsul corect. La final, Capsula te aduce înapoi, în anul de azi.  
**Minim:** personajul 1 (Pilotul), cu **scriptul întreg**, și personajul 2 (Capsula), cu **3 scripturi**.  
**Ținta orei (Complet):** jocul, testat în toate cazurile: răspuns corect, răspuns greșit, nume gol și pierderea tuturor vieților.

## De ce contează
Calculatorul știe **ce an e azi**, chiar și atunci când tu nu știi. Cu blocul `anul curent` jocul tău nu mai are un răspuns scris de mână: îl **calculează** singur, deci rămâne corect și peste zece ani. Mai înveți să afli **numele celui care joacă** și să verifici dacă există. La Bonus, mai afli câte **zile** au trecut de la anul 2000 și dacă jocul e **conectat la internet**.

**Atenție la istorie.** Evenimentele sunt reale: **1903**, primul zbor cu avionul al fraților Wright; **1918**, Marea Unire de la Alba Iulia; **1969**, primul pas pe Lună.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Mașina timpului” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span>  
*(Restul din Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `[anul] curent` | valoare: anul de azi, de exemplu `2026` |
| `nume utilizator` | valoare: numele contului Scratch al celui care joacă (gol, dacă nu e conectat) |
| `lungimea lui (text)` | valoare: câte litere are un text (din **Operatori**, nu din Variabile) |
| `zile din 2000` | valoare: câte zile au trecut de la anul 2000 *(Bonus)* |
| `online?` | condiție: adevărată dacă ești conectat la internet *(Bonus)* |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `element (…) din [listă]`, `lungimea lui [listă]`, `setează … la`, `modifică … cu` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă ( )`, `repetă până când`, `așteaptă ( ) secunde`, `dacă … atunci`, `dacă … atunci … altfel` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează … și așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `schimbă costumul la`, `setează mărimea la` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`anul curent`**, **`nume utilizator`**, `întreabă ( ) și așteaptă`, `răspuns`; la Bonus: **`zile din 2000`**, **`online?`** |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) - ( )`, `( ) / ( )`, `( ) = ( )`, `( ) > ( )`, `( ) < ( )`, `<> sau <>`, `alătură ( ) ( )`, **`lungimea lui ( )`**, `rotunjește ( )` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `rotește-te ↻ ( ) grade` |

### 1) Anul de azi
1. <span style="color:#5CB1D1;font-weight:700">anul curent</span> este o **valoare**: dai click pe el și apare anul de azi
2. Cu `( ) - ( )` afli **cât timp a trecut**: `(anul curent) - (1969)` dă numărul de ani de la primul pas pe Lună
3. În joc nu scrii `1969` în bloc: îl iei din lista `ani`, cu `element (nr) din [ani]`, ca să funcționeze pentru toate evenimentele

**Încearcă tu — anul (3 min)**  
- [ ] `anul curent` arată anul de azi  
- [ ] `(anul curent) - (1969)` arată câți ani au trecut de la primul pas pe Lună  
- [ ] Ai pus un număr în loc de `1969`, ca să vezi că rezultatul se schimbă  

### 2) Numele pilotului
1. <span style="color:#5CB1D1;font-weight:700">nume utilizator</span> este o **valoare**: numele contului Scratch al celui care joacă. Dacă nu ești conectat, e **gol**
2. <span style="color:#59C059;font-weight:700">lungimea lui (text)</span> din **Operatori** spune câte litere are un text. Pentru un nume gol dă `0`
3. Cu `dacă <(lungimea lui (nume utilizator)) = 0>` știi dacă numele lipsește. Atunci Pilotul se prezintă ca `Pilot Explorator`. Dacă există, spune `(alătură (Salut, ) (nume utilizator))`
4. Atenție: în `Salut, ` lași un spațiu după virgulă, ca numele să nu se lipească de cuvânt

**Încearcă tu — numele (3 min)**  
- [ ] `nume utilizator` arată numele tău sau nu arată nimic  
- [ ] `lungimea lui (nume utilizator)` dă un număr  
- [ ] Un `dacă … altfel` alege între `Pilot Explorator` și numele tău  

### 3) Întrebarea cu răspuns calculat
1. Cele două liste, `evenimente` și `ani`, merg în **pereche**, în aceeași ordine: pe locul unu evenimentul și anul lui
2. Pilotul spune `element (nr) din [evenimente]` și întreabă `Câți ani au trecut de atunci?`
3. Răspunsul bun nu e scris nicăieri. Îl **calculezi** cu `(anul curent) - (element (nr) din [ani])`. Compari: `dacă <(răspuns) = ((anul curent) - (element (nr) din [ani]))>`
4. Dacă greșești, Pilotul îți spune răspunsul corect cu `alătură`
5. Jocul merge până nu mai sunt evenimente: `repetă până când <<(nr) > (lungimea lui [evenimente])> sau <(vieți) < 1>>`. Dacă adaugi un eveniment în listă, jocul îl găsește singur

**Încearcă tu — răspunsul (3–4 min)**  
- [ ] Pilotul spune primul eveniment din listă  
- [ ] Cu răspunsul corect, `scor` crește  
- [ ] Cu un răspuns greșit, `vieți` scade și Pilotul spune câți ani au trecut  

### 4) Capsula pornește
1. <span style="color:#E6A800;font-weight:700">difuzează (plecăm) și așteaptă</span> trimite mesajul și **așteaptă** până când scriptul care îl primește se termină. Pilotul nu începe întrebările până când Capsula nu a terminat de pornit
2. Capsula primește `plecăm`, schimbă costumul în `pornită`, pornește sunetul și se rotește: `repetă 10` cu `rotește-te ↻ 36 grade` și `așteaptă 0,1`
3. La final, Pilotul trimite `sfârșit`, iar Capsula se oprește și spune anul de azi

**Încearcă tu — capsula (3 min)**  
- [ ] Un personaj trimite `plecăm`, iar altul se rotește o dată, complet  
- [ ] `difuzează … și așteaptă` face personajul care trimite să aștepte  
- [ ] Capsula spune la final anul de azi, cu `alătură`  

---

## Greșeli frecvente
1. **Pilotul nu spune nimic** — listele `evenimente` și `ani` sunt goale, sau sunt făcute doar pentru un personaj. Trebuie **pentru toate personajele**.  
2. **Evenimentul nu se potrivește cu anul** — cele două liste au altă ordine. Anul `1969` trebuie să fie pe același loc cu evenimentul cu Luna.  
3. **Răspunsul bun e mereu greșit** — ai pus `anul curent` și `element (nr) din [ani]` în altă ordine, sau ai uitat cele două paranteze. Corect: `(anul curent) - (element (nr) din [ani])`.  
4. **Spune `Salut,` lipit de nume** — lipsește spațiul după virgulă în `Salut, `.  
5. **Nu spune niciodată `Pilot Explorator`** — ești conectat la contul Scratch, deci numele nu e gol. Ca să testezi numele gol, ieși din cont.  
6. **Jocul se termină imediat** — `repetă până când` are condiția greșită: `nr > lungimea lui [evenimente]` trebuie să fie fals la început, când `nr` e `1`.  
7. **Se repetă mereu același eveniment** — lipsește `modifică nr cu 1` de la finalul buclei.  
8. **Pilotul începe întrebările în timp ce Capsula se rotește** — ai pus `difuzează plecăm` fără `și așteaptă`.  
9. **Capsula nu se oprește la final** — mesajul din `când primesc` nu e `sfârșit`, sau lipsește `difuzează sfârșit` din scriptul Pilotului.  
10. **Capsula se învârte fără să se oprească** — ai pus `la infinit` în loc de `repetă 10`.  
11. **Calendarul nu spune nimic** *(Bonus)* — mesajul din `când primesc` nu e `sfârșit`.  
12. **Nume fișier** — `Prenume_Nume_L6`, nu doar `Ana_L6`.  

---

## De făcut azi — „Mașina timpului”
Salvat: `Prenume_Nume_L6`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3**: pregătirea, Pilotul, cu scriptul întreg, și Capsula, cu **3 scripturi**. Jocul merge doar cu amândouă |
| **Complet (ținta orei)** | Minim, testat în toate cazurile: răspuns corect, răspuns greșit, nume gol și pierderea tuturor vieților |
| **Bonus** | **Pasul 4**: al treilea personaj, **Calendarul**, cu **2 scripturi**. Scripturile din Pașii 2 și 3 nu se mai schimbă |

Fiecare personaj are scripturile lui **întregi**, de la început. Nu se completează nimic după aceea. Scriptul Pilotului e **lung**: îl construiești **bucată cu bucată**, de sus în jos, dar e **un singur script**.

Dacă rămâi în urmă: salvează ce ai. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Pregătirea: liste, variabile și personaje *(Minim)*
**Listele:** creezi două liste, `evenimente` și `ani`, ambele **pentru toate personajele**. În fereastra listelor apeși `+` din colțul de jos și scrii câte un rând, **în aceeași ordine**.

| Loc | `evenimente` | `ani` |
|-----|-------------|-------|
| 1 | `Frații Wright zboară cu primul avion` | `1903` |
| 2 | `România se unește la Alba Iulia` | `1918` |
| 3 | `Primul om pășește pe Lună` | `1969` |

**Variabilele:** `scor`, `vieți` și `nr`, toate **pentru toate personajele**. Bifezi `scor` și `vieți`, ca să se vadă pe scenă.  
**Pilotul:** adaugi din bibliotecă un personaj de om (de exemplu `Ben` sau `Abby`) și îl redenumești `Pilotul`.  
**Capsula:** în **Costume** alegi **Desenează** și faci o capsulă din dreptunghiuri și un cerc. Faci **două costume**: `oprită` și `pornită`. La `pornită` schimbi culoarea, ca să se vadă diferența. O redenumești `Capsula`. Adaugi în tab-ul **Sunete** un sunet.  
**Decorul:** alegi unul din bibliotecă, de laborator sau de spațiu.

- [ ] Listele `evenimente` și `ani` au câte trei rânduri, în aceeași ordine  
- [ ] Variabilele `scor`, `vieți` și `nr` sunt **pentru toate personajele**  
- [ ] Pilotul e redenumit `Pilotul`  
- [ ] Capsula are costumele `oprită` și `pornită` și un sunet  

### Pasul 2 — Pilotul, scriptul întreg *(Minim)*
Ordinea e un **model**: poți schimba textele și numerele. Pilotul are **un singur script**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează vieți la</span> `3`  
<span style="color:#FF8C1A;font-weight:700">setează nr la</span> `1`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-100` <span style="color:#4C97FF;font-weight:700">y:</span> `-20`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `70` %  

<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;(lungimea lui</span> <span style="color:#5CB1D1;font-weight:700">(nume utilizator)</span><span style="color:#59C059;font-weight:700">) =</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Salut, Pilot Explorator!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Salut, ` <span style="color:#5CB1D1;font-weight:700">(nume utilizator)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">difuzează</span> `plecăm` <span style="color:#E6A800;font-weight:700">și așteaptă</span>  

<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(nr)</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FF8C1A;font-weight:700">(lungimea lui [evenimente])</span> <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(vieți)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#FF8C1A;font-weight:700">(element (nr) din [evenimente])</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
↳ <span style="color:#5CB1D1;font-weight:700">întreabă</span> `Câți ani au trecut de atunci?` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">=</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#5CB1D1;font-weight:700">(anul curent)</span> <span style="color:#59C059;font-weight:700">-</span> <span style="color:#FF8C1A;font-weight:700">(element (nr) din [ani])</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Corect!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Nu. Au trecut ` <span style="color:#59C059;font-weight:700">(</span><span style="color:#5CB1D1;font-weight:700">(anul curent)</span> <span style="color:#59C059;font-weight:700">-</span> <span style="color:#FF8C1A;font-weight:700">(element (nr) din [ani])</span><span style="color:#59C059;font-weight:700">)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
↳ <span style="color:#FF8C1A;font-weight:700">modifică nr cu</span> `1`  

<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(vieți)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Mașina timpului se oprește!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Bravo, ai ajuns la ziua de azi!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

<span style="color:#E6A800;font-weight:700">difuzează</span> `sfârșit`  

**Cum îl construiești, pe bucăți:**
1. **Începutul:** steagul, cele trei variabile, poziția și mărimea
2. **Salutul:** `dacă <(lungimea lui (nume utilizator)) = 0>` cu `altfel`: două feluri de salut
3. **Plecarea:** `difuzează plecăm și așteaptă`
4. **Bucla:** `repetă până când <<(nr) > (lungimea lui [evenimente])> sau <(vieți) < 1>>`. Înăuntru: evenimentul, întrebarea, `dacă … altfel` cu răspunsul, apoi `modifică nr cu 1`
5. **După buclă:** `dacă <(vieți) < 1>`, cu `altfel`, apoi `difuzează sfârșit`, la același nivel cu `repetă până când`

**Scriptul Pilotului merge doar după ce faci și Pasul 3**, pentru că Capsula îi răspunde la `plecăm`.

### Pasul 3 — Capsula, cele 3 scripturi *(Minim)*
Capsula are **3 scripturi** complete. Primul o așază pe scenă, al doilea o pornește când primește `plecăm`, al treilea o oprește la `sfârșit`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[oprită]`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `80` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `plecăm`  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[pornită]`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#FFAB19;font-weight:700">repetă</span> `10`  
↳ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `36` grade  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,1` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `sfârșit`  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[oprită]`  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Anul de azi: ` <span style="color:#5CB1D1;font-weight:700">(anul curent)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

- [ ] Apeși pe steag: Pilotul te salută, cu numele tău sau cu `Pilot Explorator`  
- [ ] Capsula se rotește o dată, cu sunet, apoi încep întrebările  
- [ ] Pilotul spune pe rând cele trei evenimente  
- [ ] Cu răspunsul corect, `scor` crește; cu unul greșit, `vieți` scade și afli răspunsul bun  
- [ ] Jocul se oprește după trei evenimente sau când nu mai ai vieți  
- [ ] La final, Pilotul spune `Bravo, ai ajuns la ziua de azi!` (sau `Mașina timpului se oprește!`), iar Capsula spune anul de azi  
- [ ] Salvat: `Prenume_Nume_L6`  

**→ Minim când:** apeși pe steag, Pilotul te salută, Capsula pornește, calculezi câți ani au trecut pentru cele trei evenimente, scorul și viețile se schimbă corect, iar la final Capsula spune anul de azi.  
**→ Complet când:** ai testat jocul în toate cazurile: răspuns corect, răspuns greșit, nume gol și pierderea tuturor vieților.

---

## Bonus (dacă ai terminat Complet)
### Pasul 4 — Calendarul *(★★★)*
Al 3-lea personaj te ajută să vezi **cât timp a trecut** de la anul 2000 și dacă ești conectat. Alegi din bibliotecă un personaj care arată a foaie sau a ceas, sau desenezi un calendar, și îl redenumești `Calendarul`. Scripturile din Pașii 2 și 3 **nu se mai schimbă**: Pilotul trimite deja `sfârșit`, iar Calendarul îl primește.

Calendarul are **2 scripturi** complete:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-170` <span style="color:#4C97FF;font-weight:700">y:</span> `120`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `sfârșit`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">online?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Sunt online!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Sunt offline!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Zile de la anul 2000: ` <span style="color:#59C059;font-weight:700">(rotunjește</span> <span style="color:#5CB1D1;font-weight:700">(zile din 2000)</span><span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Ani de la anul 2000: ` <span style="color:#59C059;font-weight:700">(rotunjește ((</span><span style="color:#5CB1D1;font-weight:700">zile din 2000</span><span style="color:#59C059;font-weight:700">) / (</span> `365` <span style="color:#59C059;font-weight:700">))))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

- [ ] Calendarul apare sus, în stânga  
- [ ] La final spune `Sunt online!` sau `Sunt offline!`, după cum ești conectat  
- [ ] Spune câte zile au trecut de la anul 2000, ca număr întreg  
- [ ] Spune câți ani sunt, împărțind zilele la `365`  
- [ ] ★★★ **Provocare:** adaugi un eveniment nou în **ambele** liste, la sfârșit (de exemplu `Prima legătură prin radio` și `1895`). Codul nu se schimbă: jocul are acum patru evenimente  

## Recapitulare rapidă
1. `anul curent` îți dă anul de azi; cu `-` calculezi cât timp a trecut  
2. `nume utilizator` e gol dacă nu ești conectat; cu `lungimea lui` verifici asta  
3. Două liste făcute în aceeași ordine merg în pereche, cu același `nr`  
4. `difuzează … și așteaptă` face personajul să aștepte până se termină cel care primește  
5. `repetă până când <<…> sau <…>>` se oprește când oricare condiție e adevărată  
6. Nume: **`Prenume_Nume_L6`**  

## Schema pe scurt *(pe foaie)*

**Pe Pilot** *(un singur script)*  
la steag → `setează scor la 0` → `setează vieți la 3` → `setează nr la 1` → `mergi la x: y:` → `setează mărimea` → `dacă <(lungimea lui (nume utilizator)) = 0>` `atunci` `spune Salut, Pilot Explorator!` `altfel` `spune (alătură Salut, (nume utilizator))` → `difuzează plecăm și așteaptă` → `repetă până când <<(nr) > (lungimea lui [evenimente])> sau <(vieți) < 1>>` (`spune (element (nr) din [evenimente])` + `întreabă Câți ani au trecut de atunci?` + `dacă <(răspuns) = ((anul curent) - (element (nr) din [ani]))>` `atunci` (`modifică scor cu 1` + `spune Corect!`) `altfel` (`modifică vieți cu -1` + `spune (alătură Nu. Au trecut …)`) + `modifică nr cu 1`) → `dacă <(vieți) < 1>` `atunci` `spune Mașina timpului se oprește!` `altfel` `spune Bravo, ai ajuns la ziua de azi!` → `difuzează sfârșit`

**Pe Capsulă** *(3 scripturi)*  
la steag → `schimbă costumul la [oprită]` → `mergi la x: y:` → `setează mărimea`  
când primesc plecăm → `schimbă costumul la [pornită]` → `pornește sunetul` → `repetă 10` (`rotește-te ↻ 36` + `așteaptă 0,1`)  
când primesc sfârșit → `schimbă costumul la [oprită]` → `spune (alătură Anul de azi: (anul curent))`

**Pe Calendar** *(Bonus, 2 scripturi)*  
la steag → `mergi la x: y:` → `setează mărimea`  
când primesc sfârșit → `dacă <online?>` `atunci` `spune Sunt online!` `altfel` `spune Sunt offline!` → `spune (alătură Zile de la anul 2000: (rotunjește (zile din 2000)))` → `spune (alătură Ani de la anul 2000: (rotunjește ((zile din 2000) / (365))))`

**Quiz scurt (cu profesorul):**  
- Ce dă `anul curent` și de ce e mai bun decât să scrii anul de mână?  
- Ce dă `nume utilizator` dacă nu ești conectat?  
- Ce face `difuzează … și așteaptă` față de `difuzează`?  
- De ce `evenimente` și `ani` trebuie scrise în aceeași ordine?

## Temă (opțional)
- Dacă ai doar Minim: testezi acasă jocul în toate cazurile, apoi adaugi Calendarul (Pasul 4), în același `Prenume_Nume_L6`.  
- Dacă ai Complet: adaugi acasă Calendarul (Pasul 4), în același `Prenume_Nume_L6`.  
- Dacă ai terminat și Bonusul: adaugi două evenimente noi în ambele liste, cu anii lor reali, ca jocul să aibă cinci runde. Dacă nu ești sigur de un an, îl cauți cu un adult.  
