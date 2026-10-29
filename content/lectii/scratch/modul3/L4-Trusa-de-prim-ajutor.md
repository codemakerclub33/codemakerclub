# Lecția 4 — Trusa de prim ajutor
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi înveți să **citești, cauți și schimbi** lucruri într-o listă. Un copil rănit îți spune ce are, iar tu alegi din **trusa de prim ajutor** obiectul potrivit.  
> Proiect: **„Trusa de prim ajutor”** · fișier: `Prenume_Nume_L4` (ex. `Ana_Pop_L4`)

---

## Obiectiv
La finalul orei joci propriul joc: Copilul rănit îți spune ce are (o zgârietură, o arsură, o lovitură), tu scrii ce îi pui din trusă, iar dacă ai ales bine, primești un punct. Jocul se oprește când trusa e goală sau când nu mai ai vieți, apoi îți amintește: **la răni mari anunți un adult și suni la 112**.  
**Minim:** personajul 1 (Copilul rănit), cu **scriptul întreg**, și personajul 2 (Trusa), cu **2 scripturi**.  
**Ținta orei (Complet):** jocul, testat în toate cazurile: răspuns bun, greșit, obiect lipsă, răspuns întârziat.

## De ce contează
Jocurile țin minte multe lucruri: obiecte din rucsac, nume, scoruri, întrebări. Pentru asta folosești **liste**. Azi nu doar adaugi în listă (ai făcut asta în L2), ci și **citești** un element, **numeri** câte sunt, **cauți** dacă există un obiect, **afli** pe ce loc e, apoi **îl scoți**, **îl pui** sau **îl schimbi**. Toate sunt în <span style="color:#FF8C1A;font-weight:700">Variabile</span> (EN: *Variables*).

**Atenție, e doar un joc.** Cele trei situații din joc sunt răni mici. La o rană mare, la sângerare sau dacă nu știi ce să faci, **anunți imediat un adult** și suni la **112**.

**În clasă:** listele `probleme` și `remedii` se completează în **aceeași ordine**: pe locul unu o problemă și remediul ei, pe locul doi la fel.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi din Variabile |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Trusa de prim ajutor” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span>  
*(Restul din Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `element (1) din [listă]` | valoare: ce e scris în listă pe locul ales (locurile se numără de la unu) |
| `lungimea lui [listă]` | valoare: câte elemente are lista |
| `<[listă] conține (element)?>` | condiție: adevărată dacă elementul se află în listă |
| `nr. elementului (element) în [listă]` | valoare: pe ce loc e elementul în listă (zero dacă nu există) |
| `șterge (1) din [listă]` | scoate din listă elementul de pe locul ales |
| `inserează (element) la (1) din [listă]` | pune un element nou pe locul ales, iar celelalte se mută mai jos |
| `înlocuiește item (1) din [listă] cu (element)` | schimbă elementul de pe locul ales cu altul |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | **`element … din`**, **`lungimea lui`**, **`conține?`**, **`nr. elementului`**, **`șterge (…) din`**, **`inserează … la … din`**, **`înlocuiește item … din … cu`**, `adaugă … la`, `șterge tot din`, `arată lista`, `setează … la`, `modifică … cu` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă până când`, `așteaptă ( ) secunde`, `dacă … atunci`, `dacă … atunci … altfel`, `stop [acest script]` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când se dă click pe acest personaj`, `când primesc`, `difuzează` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `schimbă costumul la`, `setează mărimea la` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `întreabă ( ) și așteaptă`, `răspuns`, `cronometru`, `resetează cronometru` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) = ( )`, `( ) < ( )`, `( ) > ( )`, `<> și <>`, `<> sau <>`, `nu <>`, `alătură ( ) ( )` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:` |

### 1) Citește din listă
1. O listă are locuri **numerotate de la unu**: pe locul 1 primul element, pe locul 2 al doilea și tot așa
2. <span style="color:#FF8C1A;font-weight:700">element (1) din [probleme]</span> este o **valoare**: îți dă ce e scris pe locul ales. Faci click pe bloc și apare textul. În loc de `1` poți pune o variabilă, de exemplu `nr`
3. <span style="color:#FF8C1A;font-weight:700">lungimea lui [probleme]</span> este tot o valoare: câte elemente are lista. Îl pui în `repetă (lungimea lui [probleme])`: jocul are exact atâtea runde câte probleme sunt în listă, oricâte ar fi
4. Două liste făcute în **aceeași ordine** merg în pereche: `element (nr) din [probleme]` și `element (nr) din [remedii]` au același `nr`

**Încearcă tu — citirea (3–4 min)**  
- [ ] Ai făcut o listă cu trei rânduri și `element (2) din` îți arată al doilea rând  
- [ ] `lungimea lui` arată `3`  
- [ ] `<(lungimea lui [listă]) = 0>` e adevărat doar când lista e goală  

### 2) Caută în listă
1. <span style="color:#FF8C1A;font-weight:700">&lt;[trusa] conține (plasture)?&gt;</span> este o **condiție**: adevărată dacă `plasture` se află în listă. O pui în `dacă`
2. <span style="color:#FF8C1A;font-weight:700">nr. elementului (plasture) în [trusa]</span> este o **valoare**: pe ce loc e `plasture`. Dacă nu e în listă, dă `0`
3. Verifici întâi cu `conține?` și abia apoi cauți locul. Dacă pui un cuvânt care nu e în listă, `nr. elementului` dă `0`
4. Textul se caută **exact** cum e scris: același cuvânt, aceleași litere și spații

**Încearcă tu — căutarea (3 min)**  
- [ ] `conține` dă adevărat pentru un cuvânt din listă și fals pentru unul care nu e  
- [ ] `nr. elementului` îți spune locul cuvântului (de exemplu `2`)  
- [ ] Pentru un cuvânt care nu e în listă, `nr. elementului` dă `0`  

### 3) Schimbă lista
1. <span style="color:#FF8C1A;font-weight:700">șterge (1) din [trusa]</span> scoate elementul de pe locul ales. Celelalte se mută cu un loc mai sus. Nu e același bloc cu `șterge tot din`, care golește toată lista
2. <span style="color:#FF8C1A;font-weight:700">inserează (element) la (1) din [trusa]</span> pune un element nou pe locul ales, iar celelalte se mută cu un loc mai jos. Cu `1` îl pui la început
3. <span style="color:#FF8C1A;font-weight:700">înlocuiește item (1) din [record] cu (element)</span> schimbă elementul de pe locul ales cu altul. Lista rămâne la fel de lungă
4. Ca să ștergi un obiect după nume, pui în loc de număr `nr. elementului (…) în [listă]`: `șterge (nr. elementului (răspuns) în [trusa]) din [trusa]`

**Încearcă tu — schimbările (3–4 min)**  
- [ ] `inserează` pune un cuvânt nou chiar în capul listei  
- [ ] `șterge (1) din` scoate primul rând, iar celelalte urcă  
- [ ] `înlocuiește item (1) din` schimbă primul rând, fără să adauge altul  

### 4) Le punem împreună
1. **Problema:** `setează nr la 1` înainte de buclă, apoi în buclă `spune (element (nr) din [probleme])`. `nr` crește cu `1` (`modifică nr cu 1`) doar când răspunzi bine: dacă greșești, aceeași problemă se repetă
2. **Remediul:** răspunsul e bun dacă `(răspuns) = (element (nr) din [remedii])`: același loc, în lista cealaltă
3. **Trusa:** înainte de a primi punctul, `<[trusa] conține (răspuns)?>`. Dacă ai folosit obiectul, îl ștergi cu `șterge (nr. elementului (răspuns) în [trusa]) din [trusa]`
4. **Timp și vieți:** `resetează cronometru` înainte de `întreabă`, iar răspunsul e bun doar dacă `(cronometru) < 10`. Un răspuns greșit sau întârziat costă o viață: `modifică vieți cu -1`

**Încearcă tu — împreună (3 min)**  
- [ ] Copilul rănit spune problemele pe rând, iar dacă greșești, o repetă  
- [ ] Cu remediul potrivit, scorul crește  
- [ ] Obiectul folosit dispare din trusă  

---

## Greșeli frecvente
1. **Copilul rănit nu spune nimic** — lista `probleme` e goală. Scrii în ea cu butonul `+` din fereastra listei, câte un rând, apoi **Enter**.  
2. **Problema și remediul nu se potrivesc** — cele două liste au altă ordine. `plasture` trebuie să fie pe același loc cu zgârietura.  
3. **Scorul nu crește deși ai scris bine** — răspunsul nu e scris **exact** ca în listă (litere, diacritice, spațiu în plus). `apă rece` trebuie scris cu diacritică și cu un singur spațiu.  
4. **Spune mereu „Nu ai asta în trusă”** — lista `trusa` e goală, sau e făcută numai pentru un personaj. Trebuie **pentru toate personajele**.  
5. **Jocul se termină imediat** — lista `trusa` e goală când începe bucla, deci `(lungimea lui [trusa]) = 0` e adevărat din prima. Verifici `șterge tot din [trusa]` și cele trei `adaugă`, înainte de `repetă până când`.  
6. **`nr. elementului` dă 0** — cuvântul nu e în listă. Verifici întâi cu `conține?`.  
7. **Se șterge alt obiect** — în `șterge (…) din` pui un **număr** (locul), nu cuvântul. Pentru nume folosești `nr. elementului (…) în [trusa]`.  
8. **Pierzi vieți și când răspunzi bine** — `modifică vieți cu -1` e pus în partea cu răspuns bun. Trebuie să fie în `altfel`, adică doar când răspunsul nu e potrivit.  
9. **Spune „a trecut timpul” mereu** — lipsește `resetează cronometru` înainte de `întreabă`.  
10. **Trofeul nu apare sau recordul nu se schimbă** — lipsește `difuzează sfârșit` de la finalul scriptului Copilului, sau lista `record` nu are `0` scris în ea.  
11. **Trusa adaugă un rând gol** — ai dat click pe Trusa înainte să răspunzi la prima întrebare. Răspunde mai întâi.  
12. **Trusa are un dreptunghi alb în jur** — poza nu are fundal transparent. Alegi altă poză, în care trusa e singură, sau o desenezi.  
13. **Nume fișier** — `Prenume_Nume_L4`, nu doar `Ana_L4`.  

---

## De făcut azi — „Trusa de prim ajutor”
Salvat: `Prenume_Nume_L4`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3**: pregătirea, Copilul rănit, cu scriptul întreg, și Trusa, cu cele **2 scripturi**. Jocul merge doar cu amândouă |
| **Complet (ținta orei)** | Minim, testat în toate cazurile din listele de verificare: răspuns bun, răspuns greșit, obiect lipsă și răspuns întârziat |
| **Bonus** | **Pasul 4**: al treilea personaj, **Trofeul**, cu **2 scripturi**. Scriptul Copilului nu se mai schimbă |

Fiecare personaj are scripturile lui **întregi**, de la început. Nu se completează nimic după aceea. Scriptul Copilului e **lung** (peste 14 blocuri): îl construiești **bucată cu bucată**, de sus în jos, dar e **un singur script**.

Dacă rămâi în urmă: salvează ce ai. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Pregătirea: liste, variabile și personaje *(Minim)*
**Listele:** creezi trei liste, `probleme`, `remedii` și `trusa`, toate **pentru toate personajele**. În fereastra listelor `probleme` și `remedii` apeși `+` din colțul de jos și scrii câte un rând, **în aceeași ordine**. Lista `trusa` o lași goală: o umple scriptul Trusei.

| Loc | `probleme` | `remedii` |
|-----|-----------|-----------|
| 1 | `Am o zgârietură la genunchi` | `plasture` |
| 2 | `Am o arsură la deget` | `apă rece` |
| 3 | `Am o lovitură la picior` | `gheață` |

**Variabilele:** `scor`, `nr` și `vieți`, toate **pentru toate personajele**.  
**Copilul rănit:** adaugi din bibliotecă un personaj de copil cu mai multe costume (de exemplu `Abby` sau `Ben`) și îl redenumești `Copilul`. Redenumești două costume `trist` și `vesel`. Dacă nu ai două costume potrivite, copiezi unul și schimbi gura cu **Desenează**. Adaugi în tab-ul **Sunete** un sunet vesel.  
**Trusa:** în **Costume** alegi **Desenează**: un dreptunghi alb și o cruce roșie, din două dreptunghiuri. O redenumești `Trusa` și o pui jos, într-un colț.

**Alternativă la desen** *(cu profesorul alături)*: în loc să desenezi trusa, o poți aduce de pe internet, ca imagine:
1. În browser, la Google, alegi **Imagini** și cauți `first aid kit png`
2. Alegi o poză în care trusa e **singură**, fără pătrate sau fundal în spate. Faci click dreapta pe ea, alegi să **salvezi imaginea** și o pui pe **desktop**
3. În Scratch, treci cu mouse-ul peste butonul albastru de adăugat personaj, jos în dreapta, și alegi opțiunea de **încărcare a unui personaj** (cea cu săgeata în sus). Alegi poza de pe desktop
4. O redenumești `Trusa` și o micșorezi din câmpul **Mărime**, de exemplu la `20`

Imaginea o folosești doar în proiectul tău. Dacă nu găsești una bună, desenezi trusa.

**Decorul:** alegi unul de interior sau de grădină, din bibliotecă.

- [ ] Listele `probleme` și `remedii` au câte trei rânduri, în aceeași ordine; lista `trusa` e goală  
- [ ] Variabilele `scor`, `nr` și `vieți` sunt **pentru toate personajele**  
- [ ] Copilul are costumele `trist` și `vesel` și un sunet  
- [ ] Trusa e desenată (sau încărcată) și așezată jos  

### Pasul 2 — Copilul rănit, scriptul întreg *(Minim)*
Ordinea e un **model**: poți schimba textele și numerele. Copilul are **un singur script**, pe care îl faci acum, complet:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează vieți la</span> `3`  
<span style="color:#FF8C1A;font-weight:700">setează nr la</span> `1`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secunde  

<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(lungimea lui [trusa])</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(vieți)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[trist]`  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#FF8C1A;font-weight:700">(element (nr) din [probleme])</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
↳ <span style="color:#5CB1D1;font-weight:700">resetează cronometru</span>  
↳ <span style="color:#5CB1D1;font-weight:700">întreabă</span> `Ce îi pui?` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  

↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">[trusa] conține</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span><span style="color:#FF8C1A;font-weight:700">?</span><span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `10` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">=</span> <span style="color:#FF8C1A;font-weight:700">(element (nr) din [remedii])</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">șterge</span> <span style="color:#FF8C1A;font-weight:700">(nr. elementului</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#FF8C1A;font-weight:700">în [trusa])</span> <span style="color:#FF8C1A;font-weight:700">din</span> `[trusa]`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică nr cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[vesel]`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Bravo!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Nu e potrivit!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Nu ai asta în trusă sau a trecut timpul!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(vieți)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Joc terminat!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Bravo, ai salvat copilul!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#9966FF;font-weight:700">spune</span> `La urgență sună la 112!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `sfârșit`  

**Cum îl construiești, pe bucăți:**
1. **Începutul:** steagul, cele trei variabile și `așteaptă 1 secunde`. Pauza lasă Trusa să-și umple lista, înainte să înceapă bucla
2. **Bucla:** `repetă până când <<(lungimea lui [trusa]) = 0> sau <(vieți) < 1>>`: jocul continuă până se golește trusa sau ți se termină viețile. Înăuntru: problema, cronometrul și întrebarea
3. **Verificarea:** `dacă` cu trusa și timpul, în care pui al doilea `dacă` cu remediul, apoi cele două `altfel`
4. **După buclă:** `dacă (vieți) < 1`, cu `altfel`, apoi mesajul cu 112
5. **La final:** `difuzează sfârșit`, la același nivel cu `repetă până când`. Îl folosește Trofeul din Bonus. Dacă nu faci Bonusul, nu strică nimic

**Scriptul Copilului merge doar după ce faci și Pasul 3**, pentru că lista `trusa` o umple Trusa.

### Pasul 3 — Scripturile Trusei *(Minim)*
Trusa are **2 scripturi** complete. Primul golește lista, o umple cu trei obiecte și o arată pe scenă. Al doilea adaugă un obiect când dai click pe ea:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">șterge tot din</span> `[trusa]`  
<span style="color:#FF8C1A;font-weight:700">adaugă</span> `plasture` <span style="color:#FF8C1A;font-weight:700">la</span> `[trusa]`  
<span style="color:#FF8C1A;font-weight:700">adaugă</span> `apă rece` <span style="color:#FF8C1A;font-weight:700">la</span> `[trusa]`  
<span style="color:#FF8C1A;font-weight:700">adaugă</span> `gheață` <span style="color:#FF8C1A;font-weight:700">la</span> `[trusa]`  
<span style="color:#FF8C1A;font-weight:700">arată lista</span> `[trusa]`  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;nu &lt;</span><span style="color:#FF8C1A;font-weight:700">[trusa] conține</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span><span style="color:#FF8C1A;font-weight:700">?</span><span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#FF8C1A;font-weight:700">inserează</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#FF8C1A;font-weight:700">la</span> `1` <span style="color:#FF8C1A;font-weight:700">din</span> `[trusa]`  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `În trusă sunt:` <span style="color:#FF8C1A;font-weight:700">(lungimea lui [trusa])</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

- [ ] Apeși pe steag: lista `trusa` are trei obiecte și se vede pe scenă  
- [ ] Copilul rănit, trist, spune problemele pe rând; dacă greșești, o repetă  
- [ ] Cu remediul potrivit, scorul crește, se aude sunetul, obiectul dispare din `trusa`, Copilul devine vesel și trece la următoarea problemă  
- [ ] Cu un remediu greșit, un obiect care nu e în trusă sau peste zece secunde, pierzi o viață  
- [ ] Jocul se oprește când trusa e goală sau când nu mai ai vieți  
- [ ] La final spune „Joc terminat!” (la zero vieți) sau „Bravo, ai salvat copilul!”, apoi „La urgență sună la 112!”  
- [ ] Un click pe Trusa adaugă ultimul obiect scris, dacă lipsea, și spune câte obiecte sunt  
- [ ] Salvat: `Prenume_Nume_L4`  

**→ Minim când:** apeși pe steag, Trusa își arată lista, Copilul rănit îți spune problemele pe rând, tu răspunzi cu obiecte din trusă, în zece secunde, scorul crește la răspunsurile bune, viețile scad la greșeli, iar jocul se oprește când trusa e goală sau când nu mai ai vieți, apoi spune să suni la 112.  
**→ Complet când:** ai testat jocul în toate cazurile: răspuns bun, răspuns greșit, obiect care nu e în trusă și răspuns după zece secunde.

---

## Bonus (dacă ai terminat Complet)
### Pasul 4 — Scripturile Trofeului *(★★★)*
Al 3-lea personaj ține minte cel mai bun scor. Creezi lista `record`, **pentru toate personajele**, și scrii în ea un singur rând: `0`. Alegi din bibliotecă sprite-ul `Star` (steaua va fi trofeul). Dacă vrei, o colorezi aurie în editorul de costume. Îl redenumești `Trofeul`. Scriptul Copilului **nu se mai schimbă**: are deja `difuzează sfârșit` la final, iar Trofeul îl primește.

Trofeul are **2 scripturi** complete:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `170` <span style="color:#4C97FF;font-weight:700">y:</span> `120`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#FF8C1A;font-weight:700">arată lista</span> `[record]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `sfârșit`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(scor)</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FF8C1A;font-weight:700">(element (1) din [record])</span> <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#FF8C1A;font-weight:700">înlocuiește item</span> `1` <span style="color:#FF8C1A;font-weight:700">din [record] cu</span> <span style="color:#FF8C1A;font-weight:700">(scor)</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Record:` <span style="color:#FF8C1A;font-weight:700">(element (1) din [record])</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `5` secunde  

- [ ] Lista `record` are un rând, `0`  
- [ ] Trofeul apare sus, în colț, cu lista `record`  
- [ ] La final, dacă ai făcut mai multe puncte decât recordul, recordul se schimbă, și la câștig, și la pierdere  
- [ ] Trofeul spune recordul  
- [ ] ★★★ **Provocare:** timpul scade cu cât ai mai multe puncte. În scriptul Copilului, în loc de `(cronometru) < 10` pui <span style="color:#59C059;font-weight:700">(cronometru) &lt; ((10) - ((scor) / (2)))</span>

## Recapitulare rapidă
1. Locurile unei liste se numără de la **unu**; `element (…) din` citește un loc, `lungimea lui` spune câte sunt  
2. `conține?` e o condiție (da sau nu), `nr. elementului` spune locul (zero dacă lipsește)  
3. `șterge (…) din` scoate un loc, `inserează` pune un element, `înlocuiește item` schimbă un element  
4. Liste făcute în aceeași ordine merg în pereche, cu același număr  
5. Textul din listă și răspunsul trebuie să fie scrise **exact la fel**  
6. Nume: **`Prenume_Nume_L4`**  

## Schema pe scurt *(pe foaie)*

**Pe Copil** *(un singur script)*  
la steag → `setează scor la 0` → `setează vieți la 3` → `setează nr la 1` → `așteaptă 1 secunde` → `repetă până când <<(lungimea lui [trusa]) = 0> sau <(vieți) < 1>>` (`schimbă costumul la [trist]` + `spune (element (nr) din [probleme])` + `resetează cronometru` + `întreabă` + `dacă <<[trusa] conține (răspuns)?> și <(cronometru) < 10>>` `atunci` (`dacă (răspuns) = (element (nr) din [remedii])` `atunci` `modifică scor cu 1` + `șterge (nr. elementului (răspuns) în [trusa]) din [trusa]` + `modifică nr cu 1` + `pornește sunetul` + `schimbă costumul la [vesel]` + `spune Bravo!` `altfel` `modifică vieți cu -1` + `spune`) `altfel` (`modifică vieți cu -1` + `spune`)) → `dacă (vieți) < 1` `atunci` `spune Joc terminat!` `altfel` `spune Bravo, ai salvat copilul!` → `spune La urgență sună la 112!` → `difuzează sfârșit`

**Pe Trusa**  
la steag → `șterge tot din [trusa]` → `adaugă` ×3 → `arată lista [trusa]`  
când se dă click pe acest personaj → `dacă <nu <[trusa] conține (răspuns)?>>` `atunci` `inserează (răspuns) la 1 din [trusa]` → `spune (alătură În trusă sunt: (lungimea lui [trusa]))`

**Pe Trofeu** *(Bonus)*  
la steag → `mergi la x: y:` → `setează mărimea` → `arată lista [record]`  
când primesc sfârșit → `dacă (scor) > (element 1 din [record])` `atunci` `înlocuiește item 1 din [record] cu (scor)` → `spune (alătură Record: (element 1 din [record]))`

**Quiz scurt (cu profesorul):**  
- De unde începe numărătoarea locurilor într-o listă?  
- Ce dă `nr. elementului` dacă obiectul nu e în listă?  
- De ce `probleme` și `remedii` trebuie scrise în aceeași ordine?  
- Ce e diferența dintre `șterge (1) din` și `șterge tot din`?

## Temă (opțional)
- Dacă ai doar Minim: testezi acasă jocul în toate cazurile, apoi adaugi Trofeul (Pasul 4), în același `Prenume_Nume_L4`.  
- Dacă ai Complet: adaugi acasă Trofeul (Pasul 4), în același `Prenume_Nume_L4`.  
- Dacă ai terminat și Bonusul: adaugi o a patra problemă și un al patrulea remediu, în aceeași ordine în ambele liste, **doar pentru răni mici**, și încă un `adaugă` în scriptul Copilului, pentru noul obiect. Dacă nu ești sigur, întrebi un adult.
