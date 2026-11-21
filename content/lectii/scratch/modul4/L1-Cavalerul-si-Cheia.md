# Lecția 1 — Cavalerul și Cheia
### Joc de aventură pe două nivele, cu final
**Modulul 4 · Proiecte & autonomie**  
**Code Maker Club · Scratch Creator**

> Azi construiești un joc de aventură cu **mai multe personaje**: Cavalerul caută Cheia în pădure, deschide Poarta și ajunge în Castel, la Nivelul 2, unde îl păzește un Dragon. Jocul se termină fie cu ieșirea din castel, fie cu pierderea tuturor vieților.  
> Proiect: **„Cavalerul și Cheia”** · fișier: `Prenume_Nume_M4_L1` (ex. `Ana_Pop_M4_L1`)  
> Din acest modul, fiecare lecție e un **joc de sine stătător**, cu start, final și restart.

---

## Obiectiv
La finalul orei ai un joc care se joacă de la început până la final: Cavalerul se mișcă cu săgețile, ia Cheia, deschide Poarta și trece de la pădure la Castel. Cu steagul verde, jocul pornește mereu curat.  
**Minim:** Cavalerul (cu un bloc propriu), Cheia și Poarta, cu **cel puțin 10 blocuri diferite** pe Cavaler. Jocul se joacă de la pădure până la ieșirea din castel.  
**Ținta orei (Complet):** personajul 4 (Dragonul), cu **cel puțin 12 blocuri diferite**, pe care îl scrii **după o schemă**, nu după un script dat gata. Cu el, jocul poate fi și pierdut.

## De ce contează
De azi nu mai urmărești scripturi gata făcute. Un joc are mai multe personaje care se **ajută între ele prin mesaje**: Cavalerul, Cheia și Poarta se înțeleg fără să se vadă. Mai ai nevoie de un început curat, de un pericol și de un final clar. Pentru lucrurile care se repetă folosești un **bloc propriu cu intrări**, făcut o singură dată.

**În clasă:** variabilele de azi sunt `vieți`, `cheie` și `nivel`, toate **pentru toate personajele**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + cum se leagă personajele prin mesaje |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Cavalerul și Cheia” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (toate 9):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#FF6680;font-weight:700">Blocurile mele</span>  
*(Folosești ce ai învățat în M1–M3.)*

**Blocuri noi azi:** niciunul. Reluăm tot ce știi, într-un joc cu mai multe personaje.

---

## Pas cu pas

| Capitol | Ce reluăm azi |
|---------|---------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează`, `difuzează … și așteaptă` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `dacă … atunci`, `dacă … atunci … altfel`, `așteaptă`, `așteaptă până când`, `stop [totul]` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `tasta [ ] apăsată?`, `atinge [personaj]?` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la`, `modifică … cu` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `schimbă decorul la`, `anulează efectele grafice`, `spune … pentru … secunde`, `setează mărimea la`, `arată`, `ascunde` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `mergi … pași`, `modifică y cu`, `orientează-te în direcția`, `setează stilul de rotație`, `dacă atinge marginea, ricoșează` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `oprește toate sunetele` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) * ( )`, `( ) = ( )`, `( ) < ( )`, `și` |
| <span style="color:#FF6680;font-weight:700">Blocurile mele</span> | `creează un bloc` cu intrări, `definește` |

### 1) Resetul complet și blocul tău
1. Un joc bun pornește **la fel** de fiecare dată. De aceea fiecare personaj are un script la steag, care pune totul la loc: <span style="color:#9966FF;font-weight:700">arată</span> sau <span style="color:#9966FF;font-weight:700">ascunde</span>, locul de start, variabilele, decorul, efectele și sunetele
2. Testul: apeși steagul de **două** ori. Dacă a doua oară e altfel decât prima, lipsește ceva din listă
3. Cavalerul se întoarce la start în trei locuri: la steag, la nivelul nou și după o lovitură. De aceea faci un **bloc propriu**: <span style="color:#FF6680;font-weight:700">pune (x) (y)</span>, cu două intrări
4. Definiția: <span style="color:#FF6680;font-weight:700">definește pune (x) (y)</span> → <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `(x)` <span style="color:#4C97FF;font-weight:700">y:</span> `(y)` și <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`. Îl folosești de câte ori vrei, cu alte numere

**Încearcă tu — resetul (4–5 min)**  
- [ ] Un personaj al tău are un script la steag, care îl pune pe locul de start  
- [ ] Ai făcut blocul `pune` cu intrările `x` și `y`, iar parametrii sunt trași în `mergi la`  
- [ ] Ai mutat personajul cu mouse-ul, ai apăsat steagul și blocul l-a adus înapoi  

### 2) Mișcare și atingere
1. Pentru fiecare săgeată pui în <span style="color:#FFAB19;font-weight:700">la infinit</span> un <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span> cu <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90` și <span style="color:#4C97FF;font-weight:700">mergi</span> `5` pași
2. Direcțiile sunt: dreapta `90`, stânga `-90`. Sus și jos se mută cu <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `5` și `-5`
3. <span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]` îl pui o singură dată, la steag: personajul se oglindește, nu se răstoarnă
4. <span style="color:#5CB1D1;font-weight:700">atinge [personaj]?</span> e condiția pentru ciocniri: Cavalerul atinge Cheia, Poarta sau Dragonul

**Încearcă tu — mișcare (3–4 min)**  
- [ ] Cavalerul merge în toate cele patru direcții  
- [ ] La stânga se oglindește, nu se răstoarnă  
- [ ] Un personaj spune ceva când atinge alt personaj  

### 3) Variabile și condiții împreună
1. `cheie` e un **comutator**: `0` înseamnă că nu ai cheia, `1` că ai cheia. La început o pui pe `0`, iar când iei Cheia o pui pe `1`
2. <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> oprește scriptul până când condiția e adevărată. Cu <span style="color:#59C059;font-weight:700">și</span> pui două condiții în una: `atinge Poarta` **și** `cheie = 1`
3. Poarta se deschide **doar** dacă ai ambele: ai ajuns la ea și ai cheia
4. `nivel` ține minte unde ești: `1` e pădurea, `2` e Castelul

**Încearcă tu — comutatorul (3–4 min)**  
- [ ] Variabilele `cheie` și `nivel` se văd pe scenă  
- [ ] Cheia se ascunde când o atingi, iar `cheie` devine `1`  
- [ ] La Poartă, fără cheie nu se întâmplă nimic  

### 4) Două nivele, un singur joc
1. Trecerea la Nivelul 2 e o **poveste în trei pași**: `setează nivel la 2`, <span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Castel`, apoi <span style="color:#E6A800;font-weight:700">difuzează</span> `nivel nou`
2. Fiecare personaj care are ceva de făcut la Nivelul 2 primește mesajul cu <span style="color:#E6A800;font-weight:700">când primesc</span> `nivel nou`: Cavalerul se întoarce la start, Cheia apare în alt loc
3. <span style="color:#FFAB19;font-weight:700">dacă</span> `nivel = 1` <span style="color:#FFAB19;font-weight:700">atunci</span> … <span style="color:#FFAB19;font-weight:700">altfel</span> … alege între Nivelul 1 și Nivelul 2: la primul deschide Castelul, la al doilea termină jocul
4. **Alegi tu** unde stau Cheia și Poarta la Nivelul 2. Un nivel nou înseamnă alt decor, alte locuri și un inamic mai rapid, cu <span style="color:#59C059;font-weight:700">( ) * ( )</span>: `nivel * 3`

**Încearcă tu — nivelele (3–4 min)**  
- [ ] Un personaj apare în alt loc când primește un mesaj  
- [ ] Un personaj se mută în alt loc la mesajul `nivel nou`  
- [ ] Cu `dacă … altfel` alegi între două drumuri după valoarea `nivel`  

---

## Greșeli frecvente
1. **Cheia nu mai apare la al doilea steag** — lipsește `arată` în scriptul ei de la steag. Un personaj ascuns rămâne ascuns.  
2. **La al doilea steag jocul pornește din mijloc** — resetul e incomplet: verifică poziția, variabilele și decorul.  
3. **Blocul `pune` nu se vede** — l-ai făcut pe alt personaj. Fiecare personaj are blocurile lui.  
4. **Cavalerul ajunge în alt loc decât vrei** — ai încurcat ordinea intrărilor: întâi `x`, apoi `y`.  
5. **Poarta nu se deschide** — `cheie` nu e `1`, sau ai pus doar `atinge`, fără `și`.  
6. **Dragonul îți ia toate viețile deodată** — lipsește `așteaptă 1 secundă` după lovitură.  
7. **Variabilele nu se văd la toate personajele** — `vieți`, `cheie` și `nivel` trebuie făcute **pentru toate personajele**.  
8. **Cavalerul merge cu capul în jos** — lipsește `setează stilul de rotație [stânga-dreapta]`.  
9. **Mesajul nu ajunge** — `nivel nou` și `nivel_nou` sunt mesaje diferite.  
10. **Nivelul 2 e la fel ca Nivelul 1** — schimbă decorul, locul Cheii și al Porții.  
11. **Nume fișier** — `Prenume_Nume_M4_L1`, nu doar `Ana_L1`.  

---

## De făcut azi — „Cavalerul și Cheia”
Salvat: `Prenume_Nume_M4_L1`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3** — 2 decoruri · **Cavalerul** cu blocul `pune` și ≥ 10 blocuri diferite, **Cheia** și **Poarta** — jocul se joacă de la pădure până la ieșirea din castel |
| **Complet (ținta orei)** | Minim + **Dragonul** cu ≥ 12 blocuri diferite, scris **după schemă**, care ia viețile și poate duce la „Sfârșitul jocului” |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Lumea *(Minim)*
**Decorurile:** în tab-ul **Decoruri** alegi din bibliotecă, **în această ordine**: un decor de pădure (de exemplu `Woods`), redenumit `Pădure`, și un decor de castel, redenumit `Castel`. Ștergi decorul gol care a rămas de la început.  
**Personajele:** alegi din bibliotecă și redenumești exact: `Cavalerul` (în căutare scrii `knight`), `Cheia` (în căutare scrii `key`) și `Poarta` (o poartă sau o ușă, sau o desenezi cu **Dreptunghi**, maro). Pe Cheie adaugi în tab-ul **Sunete** un sunet. `Dragonul` îl adaugi la Complet, iar `Vrăjitorul` și `Prințesa` la Bonus.  
**Variabilele:** `vieți`, `cheie` și `nivel`, toate **pentru toate personajele**. Le bifezi, ca să se vadă pe scenă.

- [ ] Decorurile `Pădure` și `Castel`, în această ordine  
- [ ] Personajele se numesc `Cavalerul`, `Cheia` și `Poarta`  
- [ ] Cheia are un sunet  
- [ ] Variabilele `vieți`, `cheie` și `nivel` sunt **pentru toate personajele**  

### Pasul 2 — Cavalerul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și poziția de start. Cavalerul are **6 scripturi**. Primul e **blocul tău**:

<span style="color:#FF6680;font-weight:700">definește pune (x) (y)</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#FF6680;font-weight:700">(x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#FF6680;font-weight:700">(y)</span>  
<span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  

Al doilea e **resetul**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează vieți la</span> `3`  
<span style="color:#FF8C1A;font-weight:700">setează cheie la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">setează nivel la</span> `1`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Pădure]`  
<span style="color:#9966FF;font-weight:700">anulează efectele grafice</span>  
<span style="color:#CF63CF;font-weight:700">oprește toate sunetele</span>  
<span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#FF6680;font-weight:700">pune</span> `-200` `-120`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Găsește cheia!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

Al treilea e **mișcarea**, care rulează tot timpul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `90`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `5` pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată stânga] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">orientează-te în direcția</span> `-90`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi</span> `5` pași  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată sus] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `5`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată jos] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `-5`  

Ultimele trei răspund la mesajele jocului:

<span style="color:#E6A800;font-weight:700">când primesc</span> `cheie`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am cheia! Fugi la poartă!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `nivel nou`  
<span style="color:#FF6680;font-weight:700">pune</span> `-200` `-120`  
<span style="color:#9966FF;font-weight:700">spune</span> `Nivelul 2!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am ieșit din castel!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `4` secunde  
<span style="color:#FFAB19;font-weight:700">stop [totul]</span>  

- [ ] Steag de **două** ori → Cavalerul pornește mereu din colțul de jos, stânga, cu `vieți` `3`  
- [ ] Merge în toate cele patru direcții și se oglindește la stânga  
- [ ] Blocul `pune` e folosit în două scripturi  
- [ ] Salvat: `Prenume_Nume_M4_L1`  

### Pasul 3 — Cheia și Poarta *(Minim)*
**Cheia** are **3 scripturi**. Primul o pune pe scenă, al doilea o ascunde când o atinge Cavalerul, al treilea o mută la Nivelul 2:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `30` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `150` <span style="color:#4C97FF;font-weight:700">y:</span> `-100`  
<span style="color:#9966FF;font-weight:700">arată</span>  

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#5CB1D1;font-weight:700">atinge [Cavalerul]?</span><span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#FF8C1A;font-weight:700">(cheie)</span> <span style="color:#59C059;font-weight:700">=</span> `0` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FF8C1A;font-weight:700">setează cheie la</span> `1`  
↳ <span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
↳ <span style="color:#9966FF;font-weight:700">ascunde</span>  
↳ <span style="color:#E6A800;font-weight:700">difuzează</span> `cheie`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `nivel nou`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `100`  
<span style="color:#9966FF;font-weight:700">arată</span>  

**Poarta** are **2 scripturi**. Al doilea decide dacă trece la Nivelul 2 sau termină jocul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `50` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `200` <span style="color:#4C97FF;font-weight:700">y:</span> `110`  
<span style="color:#9966FF;font-weight:700">arată</span>  

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#5CB1D1;font-weight:700">atinge [Cavalerul]?</span><span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#FF8C1A;font-weight:700">(cheie)</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt;&gt;</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(nivel)</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">setează nivel la</span> `2`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">setează cheie la</span> `0`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Castel]`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> `200` <span style="color:#4C97FF;font-weight:700">y:</span> `-110`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `nivel nou`  
↳ <span style="color:#FFAB19;font-weight:700">altfel</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> `final`  

La Nivelul 2 poți pune Cheia și Poarta **în alte locuri**, cum vrei tu. Numerele de mai sus sunt doar un model.

- [ ] Cheia stă jos, în dreapta, și dispare când o atinge Cavalerul  
- [ ] Cavalerul spune „Am cheia!”, iar `cheie` devine `1`  
- [ ] Fără cheie, la Poartă nu se întâmplă nimic  
- [ ] Cu cheia, la Poartă decorul trece la `Castel`, Poarta se mută jos, iar Cheia apare în alt loc  
- [ ] La a doua Poartă Cavalerul spune „Am ieșit din castel!” și jocul se oprește  
- [ ] Steag din nou → totul începe curat, cu Cheia la loc  
- [ ] Salvat: `Prenume_Nume_M4_L1`  

**→ Minim când:** apeși pe steag, iei Cheia, deschizi Poarta, treci în Castel, iei a doua Cheie, deschizi a doua Poartă și jocul se termină. La al doilea steag, totul începe de la zero.

### Pasul 4 — Dragonul *(Complet, după schemă)*
Aici nu mai primești scripturile. Primești **ce trebuie să facă** personajul, iar blocurile le alegi tu. Adaugi din bibliotecă un dragon (în căutare scrii `dragon`), îl redenumești `Dragonul` și îi adaugi un sunet. Scripturile din Pașii 2 și 3 **nu se schimbă**.

**Dragonul** (≥ 12 blocuri diferite):

| Ce trebuie să facă | Indiciu |
|--------------------|---------|
| La steag stă pe loc, cu mărimea potrivită, și se oglindește, nu se răstoarnă | `setează mărimea`, `setează stilul de rotație`, `mergi la x: y:` |
| Patrulează tot timpul pe scenă și se întoarce la margine | `la infinit`, `mergi … pași`, `dacă atinge marginea, ricoșează` |
| La Nivelul 2 merge de **două ori** mai repede decât la Nivelul 1 | `( ) * ( )`: pașii se calculează din `nivel` |
| Dacă atinge Cavalerul, acesta pierde o viață, se aude un sunet și Dragonul nu mai lovește imediat din nou | `dacă atinge`, `modifică vieți cu`, `pornește sunetul`, `așteaptă` |
| Anunță lovitura celorlalți | `difuzează lovit` |

**Cavalerul** primește lovitura (un script nou):

| Ce trebuie să facă | Indiciu |
|--------------------|---------|
| La `lovit` se întoarce la start, cu blocul **tău** | `când primesc`, `pune` |
| Dacă nu mai are vieți, spune „Sfârșitul jocului!” și jocul se oprește | `dacă vieți < 1`, `spune`, `stop [totul]` |

- [ ] Dragonul patrulează și se oglindește la margini  
- [ ] La Nivelul 2 Dragonul merge de **două** ori mai repede  
- [ ] La atingere, Cavalerul pierde o viață, se aude sunetul și Cavalerul se întoarce la start  
- [ ] La zero vieți apare „Sfârșitul jocului!” și jocul se oprește  
- [ ] Salvat din nou: `Prenume_Nume_M4_L1`  

**Gata Complet când:** apeși pe steag, ocolești Dragonul, iei Cheia, deschizi Poarta, în Castel Dragonul e mai rapid, iar jocul se termină fie cu „Am ieșit din castel!”, fie cu „Sfârșitul jocului!”.

---

## Bonus ★★★ — Provocare
*Doar dacă ai terminat Complet.*

- [ ] **Al 5-lea personaj:** Prințesa te așteaptă în Castel. Ea apare doar când jocul se termină cu bine, îți mulțumește și spune câte vieți ți-au rămas (spune `alătură` cu variabila `vieți`).  
- [ ] ★★★ **Provocare:** al 6-lea personaj, **Vrăjitorul**, păzește Castelul. Apare doar la Nivelul 2 și traversează scena sus-jos. Dacă atinge Cavalerul, acesta pierde **două** vieți și se întoarce la start. Scrii singur scripturile, cu aceleași mesaje ca până acum. Nu schimbi niciun script de la Minim.

## Recapitulare rapidă
1. Fiecare personaj are un script de **reset** la steag  
2. Un bloc propriu cu intrări (`pune (x) (y)`) înlocuiește locurile unde te repeți  
3. `cheie` e un comutator, iar `așteaptă până când` cu `și` așteaptă două lucruri deodată  
4. Un nivel nou: `setează nivel`, `schimbă decorul`, `difuzează nivel nou`  
5. Un inamic mai rapid la nivelul 2 se face cu o variabilă: `nivel * 3`  
6. Nume: **`Prenume_Nume_M4_L1`**  

## Schema pe scurt *(pe foaie)*

**Cavaler** *(6 scripturi)*  
definește pune (x) (y) → `mergi la x: y:` → `orientează-te`  
la steag → `setează vieți` → `setează cheie` → `setează nivel` → `schimbă decorul` → `anulează efectele` → `oprește sunetele` → `stil rotație` → `mărimea` → `pune` → `arată` → `spune`  
la steag → `la infinit` (`dacă tasta` `atunci` `orientează-te` + `mergi`, de două ori; `dacă tasta` `atunci` `modifică y`, de două ori)  
când primesc cheie → `spune`; nivel nou → `pune` → `spune`; final → `spune` → `așteaptă` → `stop`

**Cheie** *(3 scripturi)*  
la steag → `mărimea` → `mergi la` → `arată`  
la steag → `la infinit` (`așteaptă până când` `atinge Cavalerul` `și` `cheie = 0` → `setează cheie la 1` → `pornește sunetul` → `ascunde` → `difuzează cheie`)  
când primesc nivel nou → `mergi la` → `arată`

**Poartă** *(2 scripturi)*  
la steag → `mărimea` → `mergi la` → `arată`  
la steag → `la infinit` (`așteaptă până când` `atinge Cavalerul` `și` `cheie = 1` → `dacă nivel = 1` `atunci` `setează nivel la 2` + `setează cheie la 0` + `schimbă decorul` + `mergi la` + `difuzează nivel nou` `altfel` `difuzează final și așteaptă`)

**Dragon** *(Complet, după schemă)*: patrulează, `nivel * 3`, `dacă atinge Cavalerul` → `modifică vieți cu -1` + `pornește sunetul` + `difuzează lovit` + `așteaptă`  
**Cavaler** *(Complet)*: lovit → `pune` → `dacă vieți < 1` → `spune` + `stop`

**Quiz scurt (cu profesorul):**  
- Ce pui în scriptul de reset, la steag?  
- De ce `pune` are două intrări?  
- Ce face `și` în `așteaptă până când`?  
- De ce Dragonul are `așteaptă` după lovitură?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Dragonul, în același `Prenume_Nume_M4_L1`.  
- Dacă ai Complet: adaugi acasă Prințesa (Bonus).  
- Dacă ai terminat și Bonusul: schimbi povestea (alt erou, altă țintă, alt pericol) și păstrezi aceleași scripturi.
