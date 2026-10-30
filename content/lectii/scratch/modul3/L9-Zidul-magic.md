# Lecția 9 — Zidul magic
### Recapitulare
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi faci un joc **adevărat**, cu meniu: un vrăjitor a ridicat un **zid magic** de cărămizi, iar tu îl dărâmi cu o sferă de lumină și o paletă. Alegi cărămizi mai tari sau mai slabe, pui jocul pe pauză și găsești o cărămidă de aur.  
> Proiect: **„Zidul magic”** · fișier: `Prenume_Nume_L9` (ex. `Ana_Pop_L9`)

---

## Obiectiv
La finalul orei joci propriul joc: din **meniu** apeși **Play**. Un zid de cărămizi apare sus, iar tu mișcă paleta cu săgețile ca sfera să nu cadă. Fiecare cărămidă spartă dă un punct. Ai **3 vieți**. Cu butonul **Modelul** alegi cărămizi tari, iar pe parcurs zidul devine tot mai greu.  
**Minim:** **Paleta**, **Sfera**, **Cărămida** și butonul **Play**, toate cu scripturile lor întregi. Jocul merge doar cu toate.  
**Ținta orei (Complet):** Minim + butoanele **Instrucțiuni**, **Modelul** și **Pauză**, testate în toate cazurile.

## De ce contează
Un joc adevărat nu începe direct: are un **meniu** cu butoane și poate fi pus pe **pauză**. Azi pui împreună ce ai învățat în tot Modulul 3: **clonele** zidului (L3), **variabilele** pentru scor și vieți (L2), **costumul cu număr** (L8), **tastele** pentru paletă (L5) și **mesajele** care leagă butoanele de joc. Nu înveți blocuri noi, ci **le folosești pe toate** într-un proiect întreg.

**Personajele le alegi tu.** Alegi din bibliotecă o paletă sau un obiect lung și plat, o sferă sau o minge, trei obiecte dreptunghiulare în culori diferite pentru cărămizi și câte un buton pentru fiecare buton din meniu. Mărimea o setăm în script, pentru că unele personaje din bibliotecă sunt foarte mari.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + ce refolosim |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Zidul magic” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Azi nu ai blocuri noi: le refolosești pe cele din L2–L8.)*

**Ce refolosim azi:**

| Bloc | De unde îl știi | La ce îl folosim |
|------|-----------------|------------------|
| `creează o clonă a [mea]`, `când încep ca și clonă`, `șterge această clonă` | L3 | zidul de cărămizi: fiecare cărămidă e o clonă |
| `(costumul [număr])`, `schimbă costumul la` | L8 | modelul cărămizii: costumul `1`, `2` sau `3` spune câte lovituri rezistă |
| `tasta [ ] apăsată?`, `modifică x cu` | L5 | paleta care se mișcă cu săgețile |
| `dacă atinge marginea, ricoșează`, `(direcția)` | M2 L1 | sfera care sare de margini și de cărămizi |
| `setează … la`, `modifică … cu`, `așteaptă până când` | L2 | `scor`, `vieți`, `model` și `pauză` |
| `difuzează`, `când primesc`, `schimbă decorul la` | L5 | meniul care pornește jocul |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la`, `modifică … cu`, `scor`, `vieți`, `model`, `pauză` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `repetă`, `dacă … atunci`, `dacă … atunci … altfel`, `așteaptă până când`, `creează o clonă a [mea]`, `când încep ca și clonă`, `șterge această clonă`, `stop [totul]` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când se dă click pe acest personaj`, `când primesc`, `difuzează` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `schimbă costumul la`, `(costumul [număr])`, `schimbă decorul la`, `spune`, `arată`, `ascunde`, `setează mărimea la` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `atinge [alt personaj]?`, `tasta [ ] apăsată?` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) - ( )`, `( ) < ( )`, `( ) > ( )`, `( ) = ( )`, `<> și <>`, `<> sau <>`, `alege aleator între ( ) și ( )`, `alătură ( ) ( )` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi … pași`, `dacă atinge marginea, ricoșează`, `orientează-te în direcția`, `(direcția)`, `(poziția y)`, `modifică x cu`, `modifică y cu`, `mergi la x: y:` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Zidul de clone
1. Cărămida mamă e **ascunsă**. Pentru fiecare cărămidă din zid ea se pune la locul ei cu `mergi la x: y:`, își alege costumul și face `creează o clonă a [mea]`. Clona **rămâne** acolo
2. Două `repetă` unul în altul fac zidul: `repetă 3` pentru rânduri și, înăuntru, `repetă 6` pentru coloane. După fiecare cărămidă `modifică coloană cu 80`, iar după fiecare rând `modifică rând cu -35`
3. Variabila `cărămizi` numără câte clone au mai rămas: `modifică cărămizi cu 1` la fiecare clonă nouă și `modifică cărămizi cu -1` când se sparge una. Când `cărămizi` ajunge la `0`, zidul e dărâmat

**Încearcă tu — zidul (3–4 min)**  
- [ ] Cărămida mamă e ascunsă, iar clonele formează un zid de `3` rânduri a câte `6`  
- [ ] Cu click pe o clonă (încercare) o poți șterge și `cărămizi` scade  
- [ ] Cărămizile nu se suprapun: dacă sunt prea late, schimbi `50` din `setează mărimea la`  

### 2) Modelul cărămizii: costumul spune câte lovituri
1. Cărămida are **3 costume**: costumul `1` verde, `2` galben, `3` roșu. Costumul spune câte lovituri mai rezistă: `1` se sparge dintr-o lovitură, `2` din două, `3` din trei
2. Când sfera atinge o cărămidă, verifici costumul: dacă `<(costumul [număr]) = 1>`, cărămida se sparge (`scor` crește, clona dispare). Altfel, costumul scade cu unu: `schimbă costumul la ((costumul [număr]) - 1)`
3. Modelul din meniu pune costumul de start: `schimbă costumul la (model)`. Cu `model = 3` toate cărămizile au nevoie de trei lovituri

**Încearcă tu — modelul (3 min)**  
- [ ] Cărămida are `3` costume în ordinea verde, galben, roșu  
- [ ] Cu `model = 2`, o cărămidă galbenă devine verde după prima lovitură  
- [ ] La a doua lovitură cărămida dispare, iar `scor` crește cu `1`  

### 3) Sfera ricoșează
1. <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span> o întoarce de la margini, ca la meciul de fotbal din M2 L1
2. La paletă, sfera pleacă în sus, într-o direcție la întâmplare: `orientează-te în direcția (alege aleator între -30 și 30)`
3. La cărămidă, sfera își **inversează** direcția în sus-jos: `orientează-te în direcția (180 - (direcția))`. Cărămida îi spune cu mesajul `lovit`
4. Dacă `(poziția y) < -155`, sfera a căzut: `vieți` scade cu `1` și sfera pornește din nou de jos

**Încearcă tu — sfera (3 min)**  
- [ ] Sfera sare de marginile de sus, stânga și dreapta  
- [ ] Atinge paleta și pleacă în sus  
- [ ] Dacă o lași să cadă, `vieți` scade cu `1` și sfera pornește din nou  

### 4) Meniul și pauza
1. Butonul **Play** are un script la click: schimbă decorul la `Zidul` și `difuzează joc`. Toate celelalte personaje pornesc la `când primesc joc`
2. La `joc`, celelalte butoane se **ascund** (`când primesc joc` → `ascunde`), iar **Pauză** apare
3. **Pauză** schimbă variabila `pauză`: `dacă <(pauză) = 0> atunci setează pauză la 1, altfel setează pauză la 0`
4. În **fiecare** `la infinit` al jocului, primul bloc e `așteaptă până când <(pauză) = 0>`. Cât timp `pauză` e `1`, nimic nu se mișcă
5. **Modelul** crește `model` cu `1` la fiecare click, până la `3`, apoi revine la `1`

**Încearcă tu — meniul (3 min)**  
- [ ] Click pe `Play` pornește jocul și ascunde butoanele din meniu  
- [ ] Click pe `Pauză` oprește sfera și paleta, iar un al doilea click le pornește  
- [ ] Click pe `Modelul` spune `Model: 1`, `Model: 2` sau `Model: 3`  

---

## Greșeli frecvente
1. **Nu apare zidul** — Cărămida mamă nu primește mesajul `joc`, sau lipsește `creează o clonă a [mea]`.  
2. **Zidul stă într-un singur loc sau e prea lat** — lipsește `modifică coloană cu 80` sau `modifică rând cu -35`, sau Cărămida e prea mare: schimbi `50` din `setează mărimea la`.  
3. **Clonele nu se sparg** — scriptul cu `atinge [Sfera]?` e sub steag, nu sub `când încep ca și clonă`.  
4. **Sfera trece prin cărămizi** — Sfera nu are scriptul `când primesc lovit`, sau mesajul din Cărămidă nu are același nume (`lovit`).  
5. **Sfera nu mai pleacă de la paletă** — lipsește `mergi 12 pași` după `orientează-te` în `dacă atinge [Paleta]?`.  
6. **Viețile scad mult prea repede** — după ce sfera cade lipsește `așteaptă 1 secundă`, sau poziția de start e prea jos.  
7. **Pauză nu oprește nimic** — un `la infinit` nu are `așteaptă până când <(pauză) = 0>` ca prim bloc.  
8. **Butoanele rămân pe scenă în timpul jocului** — lipsește scriptul `când primesc joc` → `ascunde` pe buton.  
9. **Nu se schimbă modelul** — `model` nu e **pentru toate personajele**, sau Cărămida nu face `schimbă costumul la (model)`.  
10. **Jocul se strică la a doua pornire** — lipsesc `setează scor la 0`, `setează vieți la 3`, `setează pauză la 0`, `setează model la 1` și `setează bonus la 0` din scriptul de la steag al lui Play.  
11. **Cărămida de aur nu cade** *(Bonus)* — nu ai apăsat pe `Bonus`: Aurul așteaptă `bonus = 1`.  
12. **Nume fișier** — `Prenume_Nume_L9`, nu doar `Ana_L9`.  

---

## De făcut azi — „Zidul magic”
Salvat: `Prenume_Nume_L9`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pașii 2–5**: pregătirea, **Paleta**, **Sfera**, **Cărămida** și butonul **Play**, cu scripturile lor întregi. Jocul merge doar cu toate |
| **Complet (ținta orei)** | Minim + **Pasul 6**: butoanele **Instrucțiuni**, **Modelul** și **Pauză**, testate în toate cazurile: fiecare model, pauză, sfera scăpată și pierderea tuturor vieților |
| **Bonus** | **Pasul 7**: butonul **Bonus** și **Aurul**, cu scripturile lor. Scripturile din Pașii 2–6 nu se mai schimbă |

Fiecare personaj are scripturile lui **întregi**, de la început. Nu se completează nimic după aceea. Scripturile Sferei și Cărămidei sunt **lungi**: le construiești **bucată cu bucată**, de sus în jos.

Dacă rămâi în urmă: salvează ce ai. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Pregătirea: decoruri, variabile și personaje *(Minim)*
**Decoruri:** `Meniu` și `Zidul` (în această ordine). Alegi din bibliotecă un decor simplu pentru meniu (de exemplu unul cu stele sau un castel) și unul pentru joc (de exemplu cu un zid sau o cameră). Ștergi decorul gol care a rămas de la început.  
**Variabilele:** `scor`, `vieți`, `model`, `pauză`, `bonus`, `cărămizi`, `rând` și `coloană`, toate **pentru toate personajele**. Bifezi doar `scor` și `vieți`, ca să se vadă pe scenă.  
**Personajele:** alegi și redenumești:
- `Paleta`: un obiect lung și plat
- `Sfera`: o sferă sau o minge, cu un costum de culoare deschisă
- `Cărămida`: adaugi **3 costume** (obiecte dreptunghiulare, în ordinea verde, galben, roșu), cu **Alege un costum**
- `Play`: un buton din bibliotecă
- `Instrucțiuni`, `Modelul`, `Pauză`: câte un buton din bibliotecă, în culori diferite

- [ ] Decorurile `Meniu` și `Zidul`, în această ordine  
- [ ] Cele opt variabile sunt **pentru toate personajele**; se văd doar `scor` și `vieți`  
- [ ] Paleta, Sfera și Cărămida sunt alese și redenumite  
- [ ] Cărămida are **3 costume**, în ordinea verde, galben, roșu  

### Pasul 2 — Paleta, cele 2 scripturi *(Minim)*
Paleta are **2 scripturi** complete. Primul o ascunde în meniu, iar al doilea o pune jos și o mișcă:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-140`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(pauză)</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată stânga] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `-10`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `10`

- [ ] În meniu, Paleta nu se vede  
- [ ] După `Play`, Paleta apare jos, la `y` `-140`  
- [ ] Săgețile stânga și dreapta o mișcă  

### Pasul 3 — Sfera, cele 3 scripturi *(Minim)*
Sfera are **3 scripturi** complete. Primul o ascunde, al doilea o pornește și o mișcă, al treilea o face să ricoșeze de cărămizi:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#9966FF;font-weight:700">ascunde</span>

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `30`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(pauză)</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi</span> `8` pași  
↳ <span style="color:#4C97FF;font-weight:700">dacă atinge marginea, ricoșează</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Paleta]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-30` <span style="color:#59C059;font-weight:700">și</span> `30` <span style="color:#59C059;font-weight:700">)</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `12` pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `-155` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `30`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(vieți)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Joc terminat! Scor: ` <span style="color:#FF8C1A;font-weight:700">(scor)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">stop [totul]</span>

<span style="color:#E6A800;font-weight:700">când primesc</span> `lovit`  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> <span style="color:#59C059;font-weight:700">(</span>`180` <span style="color:#59C059;font-weight:700">-</span> <span style="color:#4C97FF;font-weight:700">(direcția)</span><span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#4C97FF;font-weight:700">mergi</span> `10` pași

- [ ] În meniu, Sfera nu se vede  
- [ ] După `Play`, Sfera pornește din jos, în sus  
- [ ] Sare de margini și de paletă  
- [ ] Dacă cade, `vieți` scade cu `1`; la zero vieți spune scorul și jocul se oprește  

### Pasul 4 — Cărămida, cele 3 scripturi *(Minim)*
Cărămida are **3 scripturi** complete. Primul o ascunde, al doilea construiește zidul (și îl reface mai tare când e dărâmat), al treilea e scriptul fiecărei clone:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#9966FF;font-weight:700">ascunde</span>

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#FF8C1A;font-weight:700">setează cărămizi la</span> `0`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(scor)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `15` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#FF8C1A;font-weight:700">(model)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `2` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">setează model la</span> `2`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(scor)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `35` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#FF8C1A;font-weight:700">(model)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `3` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">setează model la</span> `3`  
↳ <span style="color:#FF8C1A;font-weight:700">setează rând la</span> `130`  
↳ <span style="color:#FFAB19;font-weight:700">repetă</span> `3`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">setează coloană la</span> `-200`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">repetă</span> `6`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#FF8C1A;font-weight:700">(coloană)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#FF8C1A;font-weight:700">(rând)</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> <span style="color:#FF8C1A;font-weight:700">(model)</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică cărămizi cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">creează o clonă a [mea]</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică coloană cu</span> `80`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică rând cu</span> `-35`  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(cărămizi)</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span>

<span style="color:#FFAB19;font-weight:700">când încep ca și clonă</span>  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(pauză)</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Sfera]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `lovit`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#9966FF;font-weight:700">(costumul [număr])</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică cărămizi cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">șterge această clonă</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#9966FF;font-weight:700">(costumul [număr])</span> <span style="color:#59C059;font-weight:700">-</span> `1`<span style="color:#59C059;font-weight:700">)</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0.3` secunde

**Cum îl construiești, pe bucăți (scriptul al doilea):**
1. `setează cărămizi la 0` și `la infinit`: zid după zid
2. Cele două `dacă` care schimbă `model`: la scor peste `15` zidul devine cu cărămizi galbene (`model` `2`), iar la scor peste `35` cu cărămizi roșii (`model` `3`)
3. `setează rând la 130`, apoi `repetă 3` pentru rânduri și, înăuntru, `repetă 6` pentru coloane
4. În cele `6`: `mergi la x: (coloană) y: (rând)`, `schimbă costumul la (model)`, `modifică cărămizi cu 1`, `creează o clonă a [mea]`, `modifică coloană cu 80`
5. La final: `așteaptă până când <(cărămizi) = 0>` și zidul se reface

- [ ] După `Play` apare un zid de `18` cărămizi, în `3` rânduri  
- [ ] Sfera ricoșează de cărămizi, iar cărămida verde dispare la prima lovitură  
- [ ] Scorul crește cu `1` la fiecare cărămidă spartă  
- [ ] Când ai spart tot zidul, apare unul nou, cu cărămizi mai tari (peste scor `15` și `35`)  

### Pasul 5 — Play, cele 3 scripturi *(Minim)*
Play are **3 scripturi**: primul pregătește tot meniul și variabilele, al doilea pornește jocul, al treilea ascunde butonul când începe jocul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Meniu`  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează vieți la</span> `3`  
<span style="color:#FF8C1A;font-weight:700">setează pauză la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează model la</span> `1`  
<span style="color:#FF8C1A;font-weight:700">setează bonus la</span> `0`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `60`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Play`

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Zidul`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `joc`

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#9966FF;font-weight:700">ascunde</span>

**Minim când:** apeși pe steag, vezi meniul cu `Play`, apeși pe `Play`, apare zidul, Paleta merge cu săgețile, Sfera ricoșează, cărămizile se sparg și dau scor, iar la zero vieți jocul spune scorul și se oprește.

### Pasul 6 — Instrucțiuni, Modelul și Pauză *(Complet)*
Fiecare buton are **3 scripturi**: poziția lui, click-ul lui și ascunderea (sau apariția) la `joc`.

**Instrucțiuni** *(3 scripturi)*

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `0`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Instrucțiuni`

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Mută paleta cu săgețile. Sparge zidul cu sfera și nu o lăsa să cadă!` <span style="color:#9966FF;font-weight:700">pentru</span> `6` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Instrucțiuni`

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#9966FF;font-weight:700">ascunde</span>

**Modelul** *(3 scripturi)*

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-60`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Model`

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FF8C1A;font-weight:700">modifică model cu</span> `1`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(model)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `3` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#FF8C1A;font-weight:700">setează model la</span> `1`  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Model: ` <span style="color:#FF8C1A;font-weight:700">(model)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Model`

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#9966FF;font-weight:700">ascunde</span>

**Pauză** *(3 scripturi, dar apare la `joc`, nu se ascunde)*

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `200` <span style="color:#4C97FF;font-weight:700">y:</span> `160`  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Pauză`

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(pauză)</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#FF8C1A;font-weight:700">setează pauză la</span> `1`  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#FF8C1A;font-weight:700">setează pauză la</span> `0`

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#9966FF;font-weight:700">arată</span>

- [ ] În meniu se văd `Play`, `Instrucțiuni` și `Modelul`; `Pauză` nu se vede  
- [ ] `Instrucțiuni` spune regulile timp de `6` secunde  
- [ ] `Modelul` schimbă între `Model: 1`, `Model: 2` și `Model: 3`  
- [ ] La `Play`, butoanele din meniu dispar, iar `Pauză` apare sus, în dreapta  
- [ ] `Pauză` oprește sfera și paleta, iar un al doilea click le pornește  
- [ ] Salvat din nou: `Prenume_Nume_L9`  

**→ Complet când:** ai testat jocul în toate cazurile: fiecare model (`1`, `2` și `3`), pauză, sfera scăpată și pierderea tuturor vieților.

---

## Bonus (dacă ai terminat Complet)
### Pasul 7 — Butonul Bonus și Aurul *(★★★)*
Două personaje noi: butonul **Bonus** și **Aurul**, o cărămidă de aur care **cade** din când în când și dă `5` puncte dacă o prinzi cu paleta. Aurul apare doar dacă ai pornit jocul cu **Bonus**. Scripturile din Pașii 2–6 **nu se mai schimbă**.

Alegi din bibliotecă un buton (`Bonus`) și un obiect strălucitor (`Aurul`). Adaugi în **Sunete** un sunet pe Aur.

**Bonus** *(3 scripturi: poziție, click, ascundere)*

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Bonus`

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FF8C1A;font-weight:700">setează bonus la</span> `1`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Zidul`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `joc`

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#9966FF;font-weight:700">ascunde</span>

**Aurul** *(2 scripturi)*

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#9966FF;font-weight:700">ascunde</span>

<span style="color:#E6A800;font-weight:700">când primesc</span> `joc`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(bonus)</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `6` <span style="color:#59C059;font-weight:700">și</span> `12` <span style="color:#59C059;font-weight:700">)</span> secunde  
↳ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-200` <span style="color:#59C059;font-weight:700">și</span> `200` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#4C97FF;font-weight:700">y:</span> `160`  
↳ <span style="color:#9966FF;font-weight:700">arată</span>  
↳ <span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `-155` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#59C059;font-weight:700">sau &lt;</span><span style="color:#5CB1D1;font-weight:700">atinge [Paleta]?</span><span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(pauză)</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt;</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `-4`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Paleta]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `5`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
↳ <span style="color:#9966FF;font-weight:700">ascunde</span>

- [ ] În meniu se vede și butonul `Bonus`  
- [ ] Cu `Bonus` jocul pornește ca de obicei, dar din când în când cade o cărămidă de aur  
- [ ] Dacă o prinzi cu paleta, `scor` crește cu `5` și se aude sunetul  
- [ ] Cu `Play` Aurul nu cade deloc  
- [ ] ★★★ **Provocare:** schimbi `15` și `35` din scriptul Cărămidei în `8` și `20` și vezi cât de repede devine greu jocul  

## Recapitulare rapidă
1. Zidul e făcut din **clone**: mama e ascunsă, iar `creează o clonă a [mea]` pune câte o cărămidă la locul ei  
2. `(costumul [număr])` spune câte lovituri mai rezistă o cărămidă  
3. `orientează-te în direcția (180 - (direcția))` întoarce sfera în sus-jos  
4. `așteaptă până când <(pauză) = 0>` la începutul fiecărui `la infinit` pune jocul pe pauză  
5. Butoanele din meniu comunică prin **mesaje**: `Play` difuzează `joc`, iar celelalte personaje pornesc la `când primesc joc`  
6. Nume: **`Prenume_Nume_L9`**  

## Schema pe scurt *(pe foaie)*

**Pe Paleta** *(2 scripturi)*  
la steag → `ascunde`  
când primesc joc → `setează mărimea` → `mergi la x: y:` → `arată` → `la infinit` (`așteaptă până când <(pauză) = 0>` + `dacă <tasta stânga>` `modifică x cu -10` + `dacă <tasta dreapta>` `modifică x cu 10`)

**Pe Sferă** *(3 scripturi)*  
la steag → `setează mărimea` → `ascunde`  
când primesc joc → `mergi la x: y:` → `orientează-te` → `arată` → `la infinit` (`așteaptă până când <(pauză) = 0>` + `mergi 8` + `ricoșează` + `dacă <atinge [Paleta]?>` (`orientează-te (alege aleator)` + `mergi 12`) + `dacă <(poziția y) < -155>` (`modifică vieți cu -1` + `mergi la x: y:` + `orientează-te` + `așteaptă 1`) + `dacă <(vieți) < 1>` (`spune (alătură Joc terminat! Scor: (scor))` + `stop [totul]`))  
când primesc lovit → `orientează-te în direcția (180 - (direcția))` → `mergi 10`

**Pe Cărămidă** *(3 scripturi)*  
la steag → `setează mărimea` → `ascunde`  
când primesc joc → `setează cărămizi la 0` → `la infinit` (`dacă <<(scor) > 15> și <(model) < 2>>` `setează model la 2` + `dacă <<(scor) > 35> și <(model) < 3>>` `setează model la 3` + `setează rând la 130` + `repetă 3` (`setează coloană la -200` + `repetă 6` (`mergi la x: (coloană) y: (rând)` + `schimbă costumul la (model)` + `modifică cărămizi cu 1` + `creează o clonă a [mea]` + `modifică coloană cu 80`) + `modifică rând cu -35`) + `așteaptă până când <(cărămizi) = 0>`)  
când încep ca și clonă → `arată` → `la infinit` (`așteaptă până când <(pauză) = 0>` + `dacă <atinge [Sfera]?>` (`difuzează lovit` + `dacă <(costumul [număr]) = 1>` (`modifică scor cu 1` + `modifică cărămizi cu -1` + `șterge această clonă`) `altfel` (`schimbă costumul la ((costumul [număr]) - 1)` + `așteaptă 0.3`)))

**Pe fiecare buton** *(Play, Instrucțiuni, Modelul, Bonus, Pauză)*  
la steag → `setează mărimea` → `mergi la x: y:` → `arată` (sau `ascunde` la Pauză) → `spune (eticheta)`  
când se dă click pe acest personaj → ce face butonul (`difuzează joc`, `spune` regulile, `modifică model cu 1`, `setează bonus la 1` sau schimbă `pauză`)  
când primesc joc → `ascunde` (la Pauză: `arată`)

**Pe Aur** *(Bonus, 2 scripturi)*  
la steag → `setează mărimea` → `ascunde`  
când primesc joc → `la infinit` (`așteaptă până când <(bonus) = 1>` + `așteaptă (alege aleator între 6 și 12)` + `mergi la x: (alege aleator) y: 160` + `arată` + `repetă până când <<(poziția y) < -155> sau <atinge [Paleta]?>>` (`așteaptă până când <(pauză) = 0>` + `modifică y cu -4`) + `dacă <atinge [Paleta]?>` (`modifică scor cu 5` + `pornește sunetul`) + `ascunde`)

**Quiz scurt (cu profesorul):**  
- De ce Cărămida mamă e ascunsă și doar clonele se văd?  
- Cum știe o cărămidă câte lovituri mai rezistă?  
- De ce `așteaptă până când <(pauză) = 0>` e primul bloc din fiecare `la infinit`?  
- Ce mesaj leagă butonul `Play` de restul jocului?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă butoanele `Instrucțiuni`, `Modelul` și `Pauză` (Pasul 6), în același `Prenume_Nume_L9`.  
- Dacă ai Complet: adaugi acasă `Bonus` și `Aurul` (Pasul 7), în același `Prenume_Nume_L9`.  
- Dacă ai terminat și Bonusul: schimbi numărul de rânduri (`3`), numărul de vieți (`3`) sau scorurile la care crește modelul (`15` și `35`) și îl lași pe un coleg să încerce jocul.  
