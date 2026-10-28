# Lecția 6 — Poarta secretă
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **compară numere**, **verifică mai multe condiții deodată** și **măsoară timpul**.  
> Proiect: **„Poarta secretă”** · fișier: `Prenume_Nume_L6` (ex. `Ana_Pop_L6`)

---

## Obiectiv
La finalul orei Paznicul îți cere parola și ai zece secunde să o scrii, iar dacă ghicești, Exploratorul pornește după Cheie.  
**Minim:** personajul 1 (Paznicul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Exploratorul), cu cel puțin **8 blocuri diferite**, care pornește când poarta se deschide și caută Cheia în douăzeci de secunde.

## De ce contează
Un joc decide mereu: ai destule puncte? A trecut timpul? Ai apăsat și tasta, și butonul? Pentru asta compari numere și legi condiții cu blocurile din <span style="color:#59C059;font-weight:700">Operatori</span> (EN: *Operators*) și măsori timpul cu <span style="color:#5CB1D1;font-weight:700">Detectare</span> (EN: *Sensing*).

**În clasă:** la proiect scrii parola cu litere mici, fără spații în plus.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolele Operatori și Detectare |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Poarta secretă” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 7):**  
<span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Operatori — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `<( ) > ( )>` | condiție: adevărată când primul număr e mai mare decât al doilea |
| `<( ) < ( )>` | condiție: adevărată când primul număr e mai mic decât al doilea |
| `<( ) = ( )>` | condiție: adevărată când cele două sunt egale (merge și cu text) |
| `<<> și <>>` | condiție: adevărată doar când **amândouă** condițiile din ea sunt adevărate |
| `<<> sau <>>` | condiție: adevărată când **cel puțin una** dintre condiții e adevărată |
| `<nu <>>` | condiție: adevărată când condiția din ea **nu** e adevărată (o întoarce invers) |
| `cronometru` | valoare: câte secunde au trecut de la ultima resetare |
| `resetează cronometru` | pune cronometrul înapoi pe zero |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#59C059;font-weight:700">Operatori</span> | **`<( ) > ( )>`**, **`<( ) < ( )>`**, **`<( ) = ( )>`**, **`<<> și <>>`**, **`<<> sau <>>`**, **`<nu <>>`**, `( ) * ( )` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`cronometru`**, **`resetează cronometru`**, `întreabă ( ) și așteaptă`, `răspuns`, `atinge [ ]?`, `tasta [ ] apăsată?` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `dacă … atunci`, `dacă … atunci … altfel`, `repetă până când`, `la infinit` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `arată`, `ascunde`, `setează mărimea la`, `setează efectul [culoare] la` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `glisează în … secunde la x: y:`, `mergi … pași` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Mai mare, mai mic, egal
1. Din <span style="color:#59C059;font-weight:700">Operatori</span> iei <span style="color:#59C059;font-weight:700">( ) &gt; ( )</span>, <span style="color:#59C059;font-weight:700">( ) &lt; ( )</span> și <span style="color:#59C059;font-weight:700">( ) = ( )</span>: sunt **condiții** (blocuri cu colțuri). Se pun în `dacă`, în `repetă până când` sau în `așteaptă până când`
2. Într-un loc scrii un număr, iar în celălalt pui o valoare, de exemplu `cronometru`, `bani` sau `răspuns`
3. <span style="color:#59C059;font-weight:700">( ) = ( )</span> merge și cu **text**: `răspuns = scratch`. Nu ține cont de litere mari sau mici, dar spațiul în plus **contează**
4. Faci click pe condiție: apare **adevărat** sau **fals**

**Încearcă tu — comparații (3–4 min)**  
- [ ] `5 > 3` dă adevărat, `5 < 3` dă fals  
- [ ] `răspuns = scratch` dă adevărat când ai scris `scratch`  
- [ ] Ai pus o comparație într-un `dacă`  

### 2) Și, sau, nu
1. <span style="color:#59C059;font-weight:700">&lt;&gt; și &lt;&gt;</span> are **două** locuri pentru condiții. E adevărat doar dacă **amândouă** sunt adevărate
2. <span style="color:#59C059;font-weight:700">&lt;&gt; sau &lt;&gt;</span> e adevărat dacă **cel puțin una** e adevărată
3. <span style="color:#59C059;font-weight:700">nu &lt;&gt;</span> întoarce condiția: ce era adevărat devine fals
4. În cele două locuri pui **condiții** (cu colțuri), nu numere. Poți pune condiții în condiții

**Încearcă tu — și, sau, nu (3–4 min)**  
- [ ] `și` dă adevărat doar când ambele condiții sunt adevărate  
- [ ] `sau` dă adevărat când măcar una e adevărată  
- [ ] `nu` o întoarce: cât ții spațiu apăsat dă fals  

### 3) Cronometrul
1. <span style="color:#5CB1D1;font-weight:700">cronometru</span> e o **valoare**: câte secunde au trecut de la ultima resetare (sau de la începutul proiectului)
2. <span style="color:#5CB1D1;font-weight:700">resetează cronometru</span> îl pune pe zero. Îl folosești înainte de ce vrei să măsori
3. Cronometrul nu se oprește: merge mereu, și îl compari cu un număr: `(cronometru) > (10)`

**Încearcă tu — cronometru (2–3 min)**  
- [ ] Ai bifat `cronometru` și vezi cum crește  
- [ ] După `resetează cronometru` revine la zero  

### 4) Le punem împreună
1. Pui `resetează cronometru`, apoi `întreabă`, apoi `dacă <<(răspuns) = (parola)> și <(cronometru) < (10)>>`. Scriptul verifică parola **și** timpul
2. În `altfel` poți pune alt `dacă … altfel`: întâi vezi dacă a trecut timpul, apoi dacă parola e greșită
3. Pentru un personaj care se mișcă „dacă nu ții spațiu”: `dacă <nu <tasta [spațiu] apăsată?>>`

**Încearcă tu — împreună (3 min)**  
- [ ] Cu parola corectă, la timp, Paznicul zice „Poți trece!”  
- [ ] După zece secunde zice „Prea târziu!”  
- [ ] Cu parolă greșită, la timp, zice „Parolă greșită!”  

---

## Greșeli frecvente
1. **`și` sau `sau` nu merg** — în locurile lor ai pus numere sau valori. Acolo se pun condiții cu colțuri (de exemplu `răspuns = scratch`).  
2. **Paznicul nu te lasă să treci** — în `=` ai scris parola cu spațiu în plus, sau cu alte litere. Trebuie să fie identică.  
3. **Cronometrul arată un timp prea mare** — nu ai resetat cronometrul înainte de întrebare.  
4. **Timpul nu pare să se oprească** — cronometrul nu se oprește singur: îl resetezi tu.  
5. **`>` și `<` sunt încurcate** — vârful micuț arată către numărul mai mic. `cronometru > 10` înseamnă „mai mult de zece secunde”.  
6. **Exploratorul nu pornește** — `ascunde` e la steag, dar lipsește `arată` după `când primesc` `deschis`.  
7. **Cheia nu apare sau nu crește** — `când primesc` `deschis` nu are `arată`, sau lipsește `resetează cronometru` la Paznic.  
8. **Povestea se blochează** — Paznicul ar folosi `difuzează … și așteaptă`, dar Cheia are `la infinit`. Aici folosești `difuzează` simplu.  
9. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`deschis` și `deschide` sunt mesaje diferite).  
10. **Nume fișier** — `Prenume_Nume_L6`, nu doar `Ana_L6`.  

---

## De făcut azi — „Poarta secretă”
Salvat: `Prenume_Nume_L6`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, personajele + **Paznicul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Exploratorul** cu ≥ 8 blocuri diferite, care pornește când poarta se deschide și caută Cheia în douăzeci de secunde |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Poarta și personajele *(Minim)*
Alegi din bibliotecă un decor cu o poartă, un castel sau o pădure, fără să desenezi. Adaugi trei personaje și le redenumești exact: `Paznicul` (un personaj de om, cu înfățișare serioasă), `Exploratorul` (un personaj care merge) și `Cheia` (o cheie sau o stea). Pe Cheie adaugi în tab-ul **Sunete** un sunet.  
Parola din proiect este `scratch`. Poți alege alta, dar o scrii la fel în bloc și la răspuns.

- [ ] Decor cu poartă, castel sau pădure  
- [ ] Personajele se numesc `Paznicul`, `Exploratorul` și `Cheia`  
- [ ] Cheia are un sunet  

### Pasul 2 — Paznicul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-120` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  
<span style="color:#9966FF;font-weight:700">spune</span> `Stop! Cine trece?` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#5CB1D1;font-weight:700">resetează cronometru</span>  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Care e parola? Ai 10 secunde!` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">=</span> `scratch` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `10` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Poți trece!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#5CB1D1;font-weight:700">resetează cronometru</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `deschis`  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `10` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> <span style="color:#9966FF;font-weight:700">spune</span> `Prea târziu!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde **altfel** <span style="color:#9966FF;font-weight:700">spune</span> `Parolă greșită!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

- [ ] Paznicul te oprește și îți cere parola  
- [ ] Cu parola corectă, la timp, spune „Poți trece!”  
- [ ] După zece secunde spune „Prea târziu!”  
- [ ] Cu parolă greșită, la timp, spune „Parolă greșită!”  
- [ ] Fără Explorator și Cheie, Paznicul își termină povestea singur  
- [ ] Salvat: `Prenume_Nume_L6`  

**→ Minim când:** Paznicul îți cere parola, apoi te lasă să treci doar dacă ai scris parola corectă în mai puțin de zece secunde.

### Pasul 3 — Exploratorul *(Complet)*
Exploratorul are **2 scripturi**, iar al doilea pornește când Paznicul difuzează `deschis`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-200` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `deschis`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `40` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#5CB1D1;font-weight:700">atinge [Cheia]?</span><span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `20` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;nu &lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [spațiu] apăsată?</span><span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#4C97FF;font-weight:700">mergi</span> `1` pas  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Cheia]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Am găsit!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `găsit`  
<span style="color:#FFAB19;font-weight:700">altfel</span> → <span style="color:#9966FF;font-weight:700">spune</span> `Timpul a trecut!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

- [ ] Exploratorul e ascuns până se deschide poarta  
- [ ] Apare, se apropie de Cheie și merge doar cât timp **nu** ții spațiu apăsat  
- [ ] Dacă atinge Cheia, spune „Am găsit!”  
- [ ] Dacă trec douăzeci de secunde, spune „Timpul a trecut!”  
- [ ] Salvat din nou: `Prenume_Nume_L6`  

**Gata Complet când:** scrii parola corectă la timp, poarta se deschide, Exploratorul apare și caută Cheia, iar la final spune dacă a găsit Cheia sau a rămas fără timp, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Cheia), care crește când timpul trece de zece secunde, ca un indiciu:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `deschis`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">*</span> `20` <span style="color:#59C059;font-weight:700">)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(cronometru)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `10` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `150` % **altfel** → <span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `găsit`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bravo, explorator!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  

- [ ] ★★★ **Provocare:** repari Magazinul din L4. Deschizi proiectul `Prenume_Nume_L4`, îl salvezi ca o copie și pui `modifică [bani] cu -3` și `modifică [dulciuri] cu 1` în `dacă <(bani) > (2)> atunci`; la `altfel` pui `spune` `Nu ai destui lei!` `pentru` `2` secunde. Verifică: banii nu mai ajung sub zero

## Recapitulare rapidă
1. `>`, `<` și `=` sunt condiții; le pui în `dacă`, `repetă până când` sau `așteaptă până când`  
2. `=` merge și cu text, fără să țină cont de litere mari sau mici, dar spațiul în plus contează  
3. `și` cere ambele condiții, `sau` cere măcar una, `nu` o întoarce  
4. În `și` și `sau` pui **condiții**, nu numere  
5. `cronometru` e o valoare care merge mereu; `resetează cronometru` o pune pe zero  
6. Nume: **`Prenume_Nume_L6`**  

## Schema pe scurt *(pe foaie)*

**Pe Paznic**  
la steag → `mergi la x: y:` → `spune` → `resetează cronometru` → `întreabă` → `dacă` `<(răspuns) = scratch> și <(cronometru) < 10>` `atunci` (`spune` → `resetează cronometru` → `difuzează deschis`) `altfel` (`dacă` `(cronometru) > 10` `atunci` `spune` `altfel` `spune`)

**Pe Explorator**  
la steag → `ascunde` → `mergi la x: y:`  
când primesc deschis → `arată` → `glisează în … secunde` → `repetă până când` `<atinge Cheia> sau <(cronometru) > 20>` (`dacă` `nu <tasta spațiu apăsată?>` `atunci` `mergi 1 pas`) → `dacă` `atinge Cheia` `atunci` (`spune` → `difuzează găsit`) `altfel` `spune`

**Pe Cheie**  
la steag → `ascunde` → `mergi la x: y:`  
când primesc deschis → `arată` → `la infinit` (`setează efectul [culoare] la (cronometru * 20)` + `dacă` `(cronometru) > 10` `atunci` `setează mărimea` `altfel` `setează mărimea`)  
când primesc găsit → `spune` → `pornește sunetul`

**Quiz scurt (cu profesorul):**  
- Când e adevărată condiția `<> și <>`? Dar `<> sau <>`?  
- Ce face `nu` cu o condiție adevărată?  
- Ce arată `cronometru` după resetare, când au trecut cinci secunde?  
- De ce Paznicul nu folosește `difuzează … și așteaptă` pentru `deschis`?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Exploratorul, în același `Prenume_Nume_L6`.  
- Dacă ai Complet: adaugi acasă Cheia, în același `Prenume_Nume_L6`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (altă parolă, alt timp, alt obiect de găsit).
