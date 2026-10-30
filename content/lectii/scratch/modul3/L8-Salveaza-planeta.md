# Lecția 8 — Salvează planeta
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi faci un joc de **reciclare**: deșeurile cad din cer, iar tu le tragi cu mouse-ul în coșul potrivit: hârtie, plastic sau gunoi. Cu cât reciclezi mai bine, cu atât planeta e mai sănătoasă.  
> Proiect: **„Salvează planeta”** · fișier: `Prenume_Nume_L8` (ex. `Ana_Pop_L8`)

---

## Obiectiv
La finalul orei joci propriul joc: un deșeu apare sus și **cade**, din ce în ce mai repede sau mai încet. Îl prinzi cu mouse-ul și îl duci la coșul potrivit. Ai **10 deșeuri** și **3 vieți**. Dacă ai nimerit coșul, primești un punct. Dacă ai greșit coșul sau ai lăsat deșeul să cadă, pierzi o viață.  
**Minim:** cele **3 coșuri**, fiecare cu **1 script**, și **Gunoiul**, cu **scriptul întreg**.  
**Ținta orei (Complet):** jocul, testat în toate cazurile: fiecare tip de deșeu în coșul corect, coș greșit, deșeu scăpat, terminarea celor 10 deșeuri și pierderea tuturor vieților.

## De ce contează
Într-un joc, **un singur personaj** poate fi mai multe lucruri: are mai multe **costume**, iar costumul are un **număr**. Blocul <span style="color:#9966FF;font-weight:700">costumul [număr]</span> îți spune care costum e acum activ: `1`, `2` sau `3`. Dacă decizi că `1` înseamnă hârtie, `2` plastic și `3` gunoi, un singur număr îți spune **ce fel de deșeu** ții în mână. Compari acel număr cu coșul pe care l-ai atins și afli dacă ai nimerit.

**Personajele le alegi tu.** Alegi din bibliotecă deșeurile și butoanele pentru coșuri. Mărimea o setăm în script, pentru că unele personaje din bibliotecă sunt foarte mari.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Salvează planeta” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 7):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span>  
*(Restul din Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `(costumul [număr])` | valoare: numărul costumului activ, `1`, `2` sau `3` (din **Aspect**) |
| `<atinge [alt personaj]?>` | condiție: adevărată când personajul atinge un alt personaj, de exemplu un coș (din **Detectare**) |
| `setează mod tragere [activat]` | ne lasă să tragem personajul cu mouse-ul (din **Detectare**) |
| `(poziția y)` | valoare: cât de sus sau cât de jos e personajul (din **Mișcare**) |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la`, `modifică … cu` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă până când`, `la infinit`, `așteaptă până când`, `dacă … atunci`, `dacă … atunci … altfel` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`costumul [număr]`**, `schimbă costumul la`, `spune`, `spune … pentru … secunde`, `arată`, `setează mărimea la`, `setează efectul` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`atinge [alt personaj]?`**, **`setează mod tragere`**, `butonul mouse-ului e apăsat?` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) * ( )`, `( ) = ( )`, `( ) < ( )`, `( ) > ( )`, `<> și <>`, `<> sau <>`, `nu <>`, `alege aleator între ( ) și ( )`, `alătură ( ) ( )` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | **`poziția y`**, `modifică y cu`, `mergi la x: y:`, `rotește-te ↻` |

### 1) Un personaj, trei costume
1. Alegi un deșeu din bibliotecă. Mergi în tab-ul **Costume** și apeși jos, în stânga, pe **Alege un costum**. Adaugi încă două deșeuri, ca **costume** ale aceluiași personaj
2. **Ordinea** contează: costumul `1` e hârtie, costumul `2` e plastic, costumul `3` e gunoi menajer
3. <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> primește un număr. Îi dai `(alege aleator între 1 și 3)` și apare un deșeu la întâmplare

**Încearcă tu — costumele (3–4 min)**  
- [ ] Personajul tău are **3 costume**, în ordinea hârtie, plastic, gunoi  
- [ ] Faci click pe `schimbă costumul la (alege aleator între 1 și 3)` și costumul se schimbă  
- [ ] Bifezi `costumul [număr]`, ca să vezi numărul pe scenă  

### 2) Deșeul cade cu viteză la întâmplare
1. Pui o variabilă `viteză`. La fiecare deșeu nou: `setează viteză la (alege aleator între 1 și 4)`
2. Deșeul pornește sus: `mergi la x: (alege aleator între -150 și 150) y: 150`
3. Cade cu blocul <span style="color:#4C97FF;font-weight:700">modifică y cu</span>. Ca să **coboare**, numărul trebuie să fie negativ: `modifică y cu ((viteză) * -1)`
4. <span style="color:#4C97FF;font-weight:700">poziția y</span> îți spune cât de jos a ajuns. Dacă `(poziția y) < -150`, deșeul a căzut jos de tot

**Încearcă tu — căderea (3–4 min)**  
- [ ] Deșeul apare sus, la un `x` ales la întâmplare  
- [ ] Cade drept în jos, într-o buclă `repetă până când <(poziția y) < -150>`  
- [ ] La fiecare rulare cade mai repede sau mai încet  

### 3) Prinzi deșeul cu mouse-ul
1. <span style="color:#5CB1D1;font-weight:700">setează mod tragere [activat]</span> îți permite să tragi personajul cu mouse-ul. Îl pui o singură dată, la început
2. Ai prins deșeul când ții **butonul apăsat** și cursorul **atinge** deșeul: `<<butonul mouse-ului e apăsat?> și <atinge [cursorul mouse-ului]?>>`
3. Cât timp ții deșeul, el nu mai cade. După ce îl prinzi, <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> `<nu <butonul mouse-ului e apăsat?>>`: așteaptă până dai drumul la buton

**Încearcă tu — prinsul (3–4 min)**  
- [ ] Cât deșeul cade, apeși pe el și îl poți trage  
- [ ] Când îl prinzi, nu mai cade singur  
- [ ] Scriptul așteaptă până dai drumul la butonul mouse-ului  

### 4) Coșul potrivit
1. Fiecare coș e un personaj. Deșeul **atinge** un coș: `<atinge [Coș hârtie]?>`
2. Dacă a atins coșul de hârtie, verifici costumul: `<(costumul [număr]) = 1>`. Dacă e `1`, e corect: `modifică scor cu 1`. Altfel, e greșit: `modifică vieți cu -1`
3. Faci la fel și pentru coșul de plastic, cu numărul `2`, și pentru coșul de gunoi, cu numărul `3`
4. După fiecare deșeu: `modifică nr cu 1`. Așa numeri cele 10 deșeuri

**Încearcă tu — verificarea (3–4 min)**  
- [ ] Pui deșeul de hârtie în coșul de hârtie: `scor` crește cu `1`  
- [ ] Pui deșeul de hârtie în coșul de plastic: `vieți` scade cu `1`  
- [ ] Lași un deșeu să cadă: `vieți` scade cu `1`  

---

## Greșeli frecvente
1. **Deșeul urcă în loc să coboare** — în `modifică y cu` lipsește minusul. Folosești `(viteză) * -1`.  
2. **Deșeul nu cade deloc** — `viteză` nu are număr, sau blocul `setează viteză` lipsește din buclă.  
3. **Nu poți trage deșeul** — lipsește `setează mod tragere [activat]`, sau nu ții butonul apăsat pe deșeu.  
4. **Deșeul cade prin coș și nu se întâmplă nimic** — coșul se verifică doar după ce dai drumul la buton. Verifici blocul `așteaptă până când <nu <butonul mouse-ului e apăsat?>>`.  
5. **Coșul corect scade vieți** — ordinea costumelor nu e hârtie, plastic, gunoi, sau numărul din `dacă <(costumul [număr]) = ...>` nu se potrivește cu coșul.  
6. **Gunoiul e uriaș sau minuscul** — personajele din bibliotecă au mărimi diferite. Schimbi `50` din `setează mărimea la`.  
7. **Coșurile nu au etichetă** — blocul `spune` din scriptul coșului nu are text.  
8. **Jocul nu se termină la 10 deșeuri** — lipsește `modifică nr cu 1` sau `repetă până când` nu are `<(nr) = 10>`.  
9. **Jocul nu se oprește la zero vieți** — în `repetă până când` lipsește `sau <(vieți) < 1>`.  
10. **Planeta nu se schimbă** *(Bonus)* — `scor` nu e pentru toate personajele, sau `setează efectul` e în afara buclei `la infinit`.  
11. **Nume fișier** — `Prenume_Nume_L8`, nu doar `Ana_L8`.  

---

## De făcut azi — „Salvează planeta”
Salvat: `Prenume_Nume_L8`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3**: pregătirea, cele **3 coșuri**, fiecare cu **1 script**, și Gunoiul, cu **scriptul întreg**. Jocul merge doar cu toate |
| **Complet (ținta orei)** | Minim, testat în toate cazurile: fiecare tip de deșeu în coșul corect, coș greșit, deșeu scăpat, terminarea celor 10 deșeuri și pierderea tuturor vieților |
| **Bonus** | **Pasul 4**: personajul **Planeta**, cu **1 script**. Scripturile din Pașii 2 și 3 nu se mai schimbă |

Fiecare personaj are scripturile lui **întregi**, de la început. Nu se completează nimic după aceea. Scriptul Gunoiului e **lung**: îl construiești **bucată cu bucată**, de sus în jos, dar e **un singur script**.

Dacă rămâi în urmă: salvează ce ai. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Pregătirea: variabile și personaje *(Minim)*
**Variabilele:** `scor`, `vieți`, `nr` și `viteză`, toate **pentru toate personajele**. Bifezi doar `scor` și `vieți`, ca să se vadă pe scenă.  
**Gunoiul:** alegi din bibliotecă un deșeu și îl redenumești `Gunoiul`. Apoi, în tab-ul **Costume**, cu **Alege un costum**, adaugi încă două. Ordinea e: costumul `1` hârtie, costumul `2` plastic, costumul `3` gunoi menajer. Poți alege de exemplu `Party Hats` pentru hârtie, `Beachball` pentru plastic și `Apple` pentru gunoi, dar alegi tu ce ți se pare potrivit.  
**Coșurile:** alegi din bibliotecă **3 butoane** (de exemplu `Button1`, `Button2` și `Button3`), în culori diferite. Le redenumești `Coș hârtie`, `Coș plastic` și `Coș gunoi`.  
**Decorul:** alegi unul din bibliotecă, de exemplu un parc sau o stradă.  
**Mărimea** o setăm din scripturi. Dacă un personaj e prea mare sau prea mic, schimbi numărul din blocul `setează mărimea la`.

- [ ] Variabilele `scor`, `vieți`, `nr` și `viteză` sunt **pentru toate personajele**; se văd doar `scor` și `vieți`  
- [ ] Gunoiul are **3 costume**, în ordinea hârtie, plastic, gunoi  
- [ ] Cele 3 coșuri sunt alese și redenumite  

### Pasul 2 — Cele 3 coșuri, câte un script *(Minim)*
Fiecare coș are **1 script** complet. Pe coș, textul din `spune` rămâne mereu pe scenă, ca o **etichetă**, pentru că nu are `pentru … secunde`. Cele trei scripturi sunt la fel, doar poziția și textul se schimbă.

**Coș hârtie:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `80` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#9966FF;font-weight:700">spune</span> `Hârtie`  

**Coș plastic:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `80` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#9966FF;font-weight:700">spune</span> `Plastic`  

**Coș gunoi:**

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `80` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `-120`  
<span style="color:#9966FF;font-weight:700">spune</span> `Gunoi`  

- [ ] Cele 3 coșuri stau jos, unul lângă altul, la `-150`, `0` și `150`  
- [ ] Fiecare coș are eticheta lui: `Hârtie`, `Plastic`, `Gunoi`  
- [ ] Dacă un coș e prea mare sau prea mic, schimbi `80` din `setează mărimea la`  

### Pasul 3 — Gunoiul, scriptul întreg *(Minim)*
Ordinea e un **model**: poți schimba numerele și textele. Gunoiul are **un singur script**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#5CB1D1;font-weight:700">setează mod tragere</span> `[activat]`  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează vieți la</span> `3`  
<span style="color:#FF8C1A;font-weight:700">setează nr la</span> `0`  

<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(nr)</span> <span style="color:#59C059;font-weight:700">=</span> `10` <span style="color:#59C059;font-weight:700">&gt; sau &lt;</span><span style="color:#FF8C1A;font-weight:700">(vieți)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `1` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#9966FF;font-weight:700">schimbă costumul la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `3` <span style="color:#59C059;font-weight:700">)</span>  
↳ <span style="color:#FF8C1A;font-weight:700">setează viteză la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `4` <span style="color:#59C059;font-weight:700">)</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `-150` <span style="color:#59C059;font-weight:700">și</span> `150` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#4C97FF;font-weight:700">y:</span> `150`  
↳ <span style="color:#9966FF;font-weight:700">arată</span>  
↳ <span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;&lt;</span><span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span><span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#5CB1D1;font-weight:700">atinge [cursorul mouse-ului]?</span><span style="color:#59C059;font-weight:700">&gt;&gt; sau &lt;</span><span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `-150` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică y cu</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(viteză)</span> <span style="color:#59C059;font-weight:700">*</span> `-1`<span style="color:#59C059;font-weight:700">)</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#4C97FF;font-weight:700">(poziția y)</span> <span style="color:#59C059;font-weight:700">&lt;</span> `-150` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;nu &lt;</span><span style="color:#5CB1D1;font-weight:700">butonul mouse-ului e apăsat?</span><span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Coș hârtie]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#9966FF;font-weight:700">(costumul [număr])</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Coș plastic]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#9966FF;font-weight:700">(costumul [număr])</span> <span style="color:#59C059;font-weight:700">=</span> `2` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">atinge [Coș gunoi]?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#9966FF;font-weight:700">(costumul [număr])</span> <span style="color:#59C059;font-weight:700">=</span> `3` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică vieți cu</span> `-1`  
↳ <span style="color:#FF8C1A;font-weight:700">modifică nr cu</span> `1`  

<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(scor)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `6` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Planeta e salvată!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FFAB19;font-weight:700">altfel</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Mai încearcă! Scor: ` <span style="color:#FF8C1A;font-weight:700">(scor)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

**Cum îl construiești, pe bucăți:**
1. **Începutul:** steagul, `setează mărimea`, `setează mod tragere [activat]` și cele trei `setează`: `scor` la `0`, `vieți` la `3` și `nr` la `0`
2. **Bucla mare:** `repetă până când <<(nr) = 10> sau <(vieți) < 1>>`: jocul merge cât timp nu s-au terminat cele 10 deșeuri și mai ai vieți
3. **Un deșeu nou:** costum la întâmplare, `viteză` la întâmplare, `mergi la x: … y: 150`, apoi `arată`
4. **Căderea:** al doilea `repetă până când`, în care deșeul coboară cu `modifică y cu ((viteză) * -1)`. Se oprește când îl prinzi sau când ajunge jos
5. **Scăpat sau prins:** `dacă <(poziția y) < -150>` pierzi o viață. `altfel` înseamnă că l-ai prins, așa că aștepți să dai drumul la buton
6. **Cele 3 coșuri:** un `dacă <atinge [coș]?>` pentru fiecare, cu un `dacă … altfel` înăuntru, care compară `(costumul [număr])` cu `1`, `2` sau `3`
7. **După fiecare deșeu:** `modifică nr cu 1`
8. **După buclă:** `dacă <(scor) > 6>`: `Planeta e salvată!`, `altfel`: `Mai încearcă!`, cu scorul

**Scriptul Gunoiului merge doar după ce faci și Pasul 2**, pentru că de la coșuri vin cele 3 atingeri.

- [ ] Apeși pe steag: apare un deșeu sus și cade, cu viteză diferită de fiecare dată  
- [ ] Îl prinzi cu mouse-ul și nu mai cade singur  
- [ ] Coșul corect: `scor` crește cu `1`  
- [ ] Coșul greșit sau deșeul scăpat: `vieți` scade cu `1`  
- [ ] După 10 deșeuri sau la zero vieți, jocul se oprește: cu scor peste `6` spune `Planeta e salvată!`, altfel `Mai încearcă!`  
- [ ] Salvat: `Prenume_Nume_L8`  

**→ Minim când:** apeși pe steag, deșeurile cad, le prinzi cu mouse-ul, le duci la coș, iar scorul și viețile se schimbă corect.  
**→ Complet când:** ai testat jocul în toate cazurile: fiecare tip de deșeu în coșul corect, coș greșit, deșeu scăpat, terminarea celor 10 deșeuri și pierderea tuturor vieților.

---

## Bonus (dacă ai terminat Complet)
### Pasul 4 — Planeta, scriptul ei *(★★★)*
Al 5-lea personaj e **Planeta**: se învârte mereu, își schimbă culoarea și **crește** pe măsură ce reciclezi, iar când pierzi vieți devine tot mai **estompată**. Alegi din bibliotecă `Earth` sau `Planet2` și o redenumești `Planeta`. Scripturile din Pașii 2 și 3 **nu se mai schimbă**: mesajul „Planeta e salvată!” e deja în scriptul Gunoiului.

Planeta are **1 script** complet:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `30` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `200` <span style="color:#4C97FF;font-weight:700">y:</span> `130`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">rotește-te ↻</span> `1` grade  
↳ <span style="color:#9966FF;font-weight:700">setează efectul</span> `[culoare]` <span style="color:#9966FF;font-weight:700">la</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(scor)</span> <span style="color:#59C059;font-weight:700">*</span> `10`<span style="color:#59C059;font-weight:700">)</span>  
↳ <span style="color:#9966FF;font-weight:700">setează mărimea la</span> <span style="color:#59C059;font-weight:700">(</span>`30` <span style="color:#59C059;font-weight:700">+</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(scor)</span> <span style="color:#59C059;font-weight:700">*</span> `4`<span style="color:#59C059;font-weight:700">))</span> %  
↳ <span style="color:#9966FF;font-weight:700">setează efectul</span> `[fantomă]` <span style="color:#9966FF;font-weight:700">la</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#59C059;font-weight:700">(</span>`3` <span style="color:#59C059;font-weight:700">-</span> <span style="color:#FF8C1A;font-weight:700">(vieți)</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#59C059;font-weight:700">*</span> `20`<span style="color:#59C059;font-weight:700">)</span>  

- [ ] Planeta stă sus, în dreapta, și se învârte mereu  
- [ ] Cu cât `scor` e mai mare, cu atât culoarea ei se schimbă mai mult, iar Planeta crește de la `30` % spre `70` %  
- [ ] Cu cât pierzi mai multe vieți, cu atât Planeta se vede mai estompat (`fantomă`)  
- [ ] ★★★ **Provocare:** în scriptul Gunoiului schimbi `4` din `alege aleator între 1 și 4` cu `6` și vezi cât de greu devine jocul  

## Recapitulare rapidă
1. Un personaj poate avea mai multe costume, iar `costumul [număr]` îți spune care e activ  
2. `modifică y cu ((viteză) * -1)` face personajul să coboare, iar `viteză` la întâmplare face căderea diferită  
3. `setează mod tragere [activat]` te lasă să tragi personajul cu mouse-ul  
4. `așteaptă până când <nu <butonul mouse-ului e apăsat?>>` așteaptă să dai drumul la buton  
5. `<atinge [coș]?>` și `(costumul [număr])` îți spun dacă ai pus deșeul în coșul potrivit  
6. Nume: **`Prenume_Nume_L8`**  

## Schema pe scurt *(pe foaie)*

**Pe fiecare coș** *(3 personaje, câte un script)*  
la steag → `setează mărimea la 80` → `mergi la x: (-150, 0 sau 150) y: -120` → `spune (Hârtie, Plastic sau Gunoi)`

**Pe Gunoiul** *(un singur script)*  
la steag → `setează mărimea` → `setează mod tragere [activat]` → `setează scor la 0` → `setează vieți la 3` → `setează nr la 0` → `repetă până când <<(nr) = 10> sau <(vieți) < 1>>` (`schimbă costumul la (alege aleator între 1 și 3)` + `setează viteză la (alege aleator între 1 și 4)` + `mergi la x: (alege aleator între -150 și 150) y: 150` + `arată` + `repetă până când <<<butonul mouse-ului e apăsat?> și <atinge [cursorul mouse-ului]?>> sau <(poziția y) < -150>>` (`modifică y cu ((viteză) * -1)`) + `dacă <(poziția y) < -150>` `atunci` `modifică vieți cu -1` `altfel` (`așteaptă până când <nu <butonul mouse-ului e apăsat?>>` + pentru fiecare coș `dacă <atinge [coș]?>` `atunci` `dacă <(costumul [număr]) = N>` `atunci` `modifică scor cu 1` `altfel` `modifică vieți cu -1`) + `modifică nr cu 1`) → `dacă <(scor) > 6>` `atunci` `spune Planeta e salvată!` pentru 3 `altfel` `spune (alătură Mai încearcă! Scor: (scor)) pentru 3`

**Pe Planeta** *(Bonus, 1 script)*  
la steag → `setează mărimea` → `mergi la x: y:` → `la infinit` (`rotește-te ↻ 1 grade` + `setează efectul [culoare] la ((scor) * 10)` + `setează mărimea la (30 + (scor * 4))` + `setează efectul [fantomă] la ((3 - (vieți)) * 20)`)  

**Quiz scurt (cu profesorul):**  
- La ce folosește blocul `costumul [număr]` în acest joc?  
- De ce trebuie `* -1` în `modifică y cu`?  
- De ce așteptăm să dai drumul la butonul mouse-ului înainte să verificăm coșurile?  
- Ce se întâmplă cu viețile dacă un deșeu cade jos de tot?

## Temă (opțional)
- Dacă ai doar Minim: testezi acasă jocul în toate cazurile, apoi adaugi Planeta (Pasul 4), în același `Prenume_Nume_L8`.  
- Dacă ai Complet: adaugi acasă Planeta (Pasul 4), în același `Prenume_Nume_L8`.  
- Dacă ai terminat și Bonusul: schimbi numărul de deșeuri (`10`), numărul de vieți (`3`) sau viteza maximă (`4`) și îl lași pe un coleg să încerce jocul.  
