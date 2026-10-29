# Lecția 1 — Pădurea fermecată
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi personajele stau **pe straturi**, își schimbă **costumul** după anotimp și își **măresc sau micșorează** mărimea, ca să pară că se apropie sau se depărtează.  
> Proiect: **„Pădurea fermecată”** · fișier: `Prenume_Nume_L1` (ex. `Ana_Pop_L1`)

---

## Obiectiv
La finalul orei ai o pădure cu patru anotimpuri: Copilul se plimbă printre copaci cu săgețile, iar când apeși pe spațiu, decorul se schimbă și Copacul își schimbă costumul.  
**Minim:** personajul 1 (Copilul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Copacul), cu cel puțin **8 blocuri diferite**, care își schimbă costumul după anotimp, plus scena cu cele patru decoruri și un **contor** care numără anotimpurile parcurse.

## De ce contează
În orice joc, personajele se acoperă unul pe altul: un copac stă în fața unui lup, un copil trece în spatele unei case. Asta se numește **strat**: ca foile puse una peste alta, cea de sus acoperă ce e dedesubt. Cu blocurile din <span style="color:#9966FF;font-weight:700">Aspect</span> (EN: *Looks*) alegi cine e în față și cine e în spate, afli ce costum și ce decor e acum și îți dai seama cât de mare e un personaj.

**În clasă:** decorurile și costumele se numără de la unu, în ordinea din taburi. Dacă ordinea nu e aceeași la Copac și la scenă, anotimpurile se încurcă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi din Aspect |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Pădurea fermecată” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 7):**  
<span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span>  
*(Restul din Aspect — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `mergi la stratul [în față]` | mută personajul peste toate celelalte (sau, alegând `în spate`, sub toate) |
| `mergi [înainte] (1) straturi` | mută personajul cu un strat în față (sau în spate, alegând `înapoi`), peste vecinul lui |
| `costumul [număr]` | valoare: numărul costumului pe care îl are personajul acum |
| `decor [număr]` | valoare: numărul decorului care e acum pe scenă |
| `mărime` | valoare: cât de mare e personajul acum, în procente |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#9966FF;font-weight:700">Aspect</span> | **`mergi la stratul [în față]`**, **`mergi [înainte] (1) straturi`**, **`costumul [număr]`**, **`decor [număr]`**, **`mărime`**, `schimbă costumul la`, `costumul următor`, `schimbă decorul la`, `decorul următor`, `setează mărimea la`, `modifică mărimea cu`, `spune … pentru … secunde` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când tasta [ ] este apăsată`, `când primesc`, `difuzează` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `modifică x cu`, `modifică y cu` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `dacă … atunci`, `așteaptă până când` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `tasta [ ] apăsată?`, `distanța până la [ ]` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) > ( )`, `( ) < ( )`, `( ) = ( )`, `<> și <>`, `alătură ( ) ( )` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `Creează o variabilă`, `setează … la`, `modifică … cu` |

### 1) Straturi: cine e în față?
1. Adaugi două personaje din bibliotecă și le pui unul peste altul. Cel adăugat **ultimul** e în față
2. <span style="color:#9966FF;font-weight:700">mergi la stratul [în față]</span> mută personajul peste toate celelalte. Cu `în spate` îl pui sub toate
3. <span style="color:#9966FF;font-weight:700">mergi [înainte] (1) straturi</span> îl mută doar **un strat**, peste vecinul lui. Cu `înapoi` merge un strat în spate. Dacă pui `(2)`, sare peste doi vecini
4. Faci click pe bloc, direct din paleta de blocuri, și vezi cum se schimbă ordinea

**Încearcă tu — straturi (3–4 min)**  
- [ ] Un personaj trece în fața celuilalt, cu `în față`  
- [ ] Același personaj trece în spatele celuilalt, cu `în spate`  
- [ ] Cu trei personaje, `înainte` `1` îl duce doar peste vecinul lui, nu peste toți  

### 2) Costumul și decorul sunt numere
1. În tab-ul **Costume** costumele au numere: 1, 2, 3… Tot așa decorurile, în tab-ul **Decoruri**
2. <span style="color:#9966FF;font-weight:700">costumul [număr]</span> este o **valoare**: îți spune pe ce costum e personajul acum. Bifezi căsuța de lângă ea și o vezi pe scenă
3. <span style="color:#9966FF;font-weight:700">decor [număr]</span> este tot o valoare: îți spune ce decor e pe scenă. O vede **orice personaj**
4. Valorile se pun în alte blocuri: `schimbă costumul la` `(decor [număr])` pune costumul cu **același număr** ca decorul

**Încearcă tu — numere (3–4 min)**  
- [ ] Cu `costumul următor` valoarea `costumul [număr]` crește  
- [ ] Cu `decorul următor` valoarea `decor [număr]` crește  
- [ ] Un personaj cu `schimbă costumul la (decor [număr])` își ia costumul egal cu decorul  

### 3) Mărimea
1. <span style="color:#9966FF;font-weight:700">mărime</span> este o valoare: cât de mare e personajul acum, în procente (`100` e mărimea obișnuită)
2. Un personaj **mai mic** pare mai **departe**, unul **mai mare** pare mai **aproape**. Așa faci o pădure cu adâncime
3. `modifică mărimea cu` `(-2)` îl micșorează puțin la fiecare pas. Cu `dacă <(mărime) > (40)>` îl oprești să nu devină prea mic

**Încearcă tu — mărimea (2–3 min)**  
- [ ] Ai bifat `mărime` și vezi că scade când pui `modifică mărimea cu -2`  
- [ ] Personajul se oprește la `40`, nu mai devine mai mic  

### 4) Le punem împreună
1. **Copacul își face costumele singur.** Biblioteca are un copac cu un singur costum. Faci click dreapta pe el, în tab-ul **Costume**, și alegi **Duplică**, de trei ori. Cu **Umple**, din editorul de desen, colorezi coroana fiecărei copii, **în ordinea decorurilor**: roz sau verde deschis, verde închis, portocaliu, alb
2. **Decorurile din bibliotecă:** `Woods`, `Forest`, `Pathway`, `Winter`, în **această ordine** (primăvară, vară, toamnă, iarnă)
3. Când scena difuzează `anotimp nou`, Copacul pune costumul cu numărul decorului: `schimbă costumul la (decor [număr])`
4. Scena numără anotimpurile într-o variabilă `anotimpuri`, creată **pentru toate personajele**: `setează anotimpuri la 0` la început și `modifică anotimpuri cu 1` la fiecare spațiu. Copacul o citește și, la al patrulea anotimp, spune că a trecut un an

**Încearcă tu — împreună (3 min)**  
- [ ] Copacul are patru costume, în ordinea anotimpurilor  
- [ ] Scena are patru decoruri, în ordinea `Woods`, `Forest`, `Pathway`, `Winter`  
- [ ] Cu `decorul următor`, apoi `schimbă costumul la (decor [număr])`, Copacul se potrivește cu decorul  
- [ ] Variabila `anotimpuri` crește cu unu la fiecare `modifică anotimpuri cu 1`  

---

## Greșeli frecvente
1. **Copacul are costumul greșit pentru anotimp** — ordinea costumelor nu e aceeași cu ordinea decorurilor. Trage costumele în tab-ul **Costume** până sunt în ordinea: primăvară, vară, toamnă, iarnă.  
2. **Copacul nu își schimbă costumul** — scena nu difuzează `anotimp nou`, sau numele din `difuzează` și din `când primesc` nu e același mesaj.  
3. **Decorul nu se schimbă la spațiu** — scriptul cu `decorul următor` e pe un personaj, nu pe **Scenă**. Scena are scripturile ei: o selectezi din dreapta jos.  
4. **Copilul trece în spatele copacului** — lipsește `mergi la stratul [în față]` la steag.  
5. **Copilul devine uriaș sau minuscul** — nu ai pus `setează mărimea la 100 %` la început, sau lipsește limita cu `mărime`.  
6. **Copilul nu mai urcă** — a ajuns la limita `(mărime) > 40`. E normal: acolo e orizontul.  
7. **Lupul se vede tot timpul** — nu e destul de mic sau destul de aproape de Copac. Mută-l cu mouse-ul în spatele coroanei și mărește Copacul.  
8. **Lupul apare în fața Copilului** — ai pus `înainte` de două ori. Ai nevoie de un singur pas, după `așteaptă până când`.  
9. **`decor [număr]` nu se găsește** — blocurile `costumul [număr]`, `decor [număr]` și `mărime` sunt jos în paleta <span style="color:#9966FF;font-weight:700">Aspect</span>.  
10. **Contorul rămâne la zero** — variabila `anotimpuri` e făcută **numai pentru acest personaj**, sau lipsește `modifică anotimpuri cu 1` din scriptul cu spațiu. Trebuie **pentru toate personajele**.  
11. **Copacul nu spune „Un an întreg!”** — contorul a trecut de patru, fiindcă ai apăsat de mai multe ori spațiu înainte să se verifice `= 4`, sau ai uitat `setează anotimpuri la 0` la steag.  
12. **Nume fișier** — `Prenume_Nume_L1`, nu doar `Ana_L1`.  

---

## De făcut azi — „Pădurea fermecată”
Salvat: `Prenume_Nume_L1`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorurile + **Copilul** cu ≥ 8 blocuri diferite: merge cu săgețile și se micșorează când se depărtează |
| **Complet (ținta orei)** | Minim + **Copacul** cu ≥ 8 blocuri diferite, care își schimbă costumul după anotimp și spune când a trecut un an, plus **Scena** care schimbă decorul la spațiu și numără anotimpurile |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Decorurile și Copilul *(Minim)*
**Decorurile:** în tab-ul **Decoruri** alegi din bibliotecă, **în această ordine**: `Woods`, `Forest`, `Pathway`, `Winter`. Ștergi decorul gol care a rămas de la început.  
**Copilul:** adaugi din bibliotecă un personaj de copil care merge, cu mai multe costume (în căutare scrii `walking`) și îl redenumești `Copilul`.

- [ ] Ai patru decoruri, în ordinea `Woods`, `Forest`, `Pathway`, `Winter`  
- [ ] Personajul se numește `Copilul` și are mai multe costume de mers  

### Pasul 2 — Copilul *(Minim)*
Ordinea e un **model**: poți schimba numerele și poziția de start. Copilul are **un script**, care rulează tot timpul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-150` <span style="color:#4C97FF;font-weight:700">y:</span> `-100`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  
<span style="color:#9966FF;font-weight:700">mergi la stratul</span> `[în față]`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `5`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">costumul următor</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată stânga] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `-5`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">costumul următor</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">tasta [săgeată sus] apăsată?</span> <span style="color:#59C059;font-weight:700">și &lt;</span><span style="color:#9966FF;font-weight:700">(mărime)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `40` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `3`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `-2`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată jos] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `-3`  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `2`  

- [ ] Copilul pornește din colțul de jos, la mărimea obișnuită  
- [ ] Cu săgețile stânga și dreapta merge și își mișcă picioarele  
- [ ] Cu săgeata sus se depărtează: urcă și se micșorează  
- [ ] Cu săgeata jos se apropie: coboară și se mărește  
- [ ] Nu se micșorează mai mult de `40`  
- [ ] Salvat: `Prenume_Nume_L1`  

**→ Minim când:** Copilul se plimbă prin pădure cu cele patru săgeți, se micșorează când urcă spre orizont și se oprește la mărimea `40`.

### Pasul 3 — Copacul și Scena *(Complet)*
Întâi creezi variabila `anotimpuri`, **pentru toate personajele**.

**Copacul:** adaugi din bibliotecă un copac (în căutare scrii `tree`) și îl redenumești `Copacul`. Îi faci **patru costume**: cu click dreapta pe costum alegi **Duplică**, de trei ori, iar cu **Umple** colorezi coroana fiecărei copii: roz sau verde deschis (primăvară), verde închis (vară), portocaliu (toamnă), alb (iarnă). Costumele trebuie să fie în această ordine.

Copacul are **2 scripturi**, iar al doilea pornește când Scena difuzează `anotimp nou`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `100` <span style="color:#4C97FF;font-weight:700">y:</span> `-20`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `150` %  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> `[primăvară]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `anotimp nou`  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> <span style="color:#9966FF;font-weight:700">(decor [număr])</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `Costumul` <span style="color:#9966FF;font-weight:700">(costumul [număr])</span><span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(anotimpuri)</span> <span style="color:#59C059;font-weight:700">=</span> `4` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Un an întreg!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

**Scena** are alte două scripturi. O selectezi din dreapta jos, apoi îi pui în tab-ul **Cod**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează anotimpuri la</span> `0`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Woods]`  

<span style="color:#E6A800;font-weight:700">când tasta</span> `[spațiu]` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#9966FF;font-weight:700">decorul următor</span>  
<span style="color:#FF8C1A;font-weight:700">modifică anotimpuri cu</span> `1`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `anotimp nou`  

- [ ] Copacul are patru costume, în ordinea anotimpurilor  
- [ ] La steag, decorul e `Woods`, iar Copacul are costumul de primăvară  
- [ ] La spațiu, decorul se schimbă la `Forest`, iar Copacul trece la costumul doi  
- [ ] La fiecare spațiu, Copacul spune numărul costumului lui  
- [ ] Contorul `anotimpuri` crește cu unu la fiecare spațiu și se vede pe scenă  
- [ ] La al patrulea spațiu, Copacul spune „Un an întreg!”  
- [ ] După `Winter`, spațiul duce din nou la `Woods`  
- [ ] Salvat din nou: `Prenume_Nume_L1`  

**Gata Complet când:** apeși pe steag, te plimbi cu Copilul prin pădure, iar la fiecare spațiu decorul și Copacul trec împreună la alt anotimp, contorul numără anotimpurile și la al patrulea Copacul spune „Un an întreg!”, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Lupul), care stă ascuns în spatele copacului și iese când te apropii. Adaugi din bibliotecă un animal (în căutare scrii `wolf`, sau alegi `Dog1`) și îl redenumești `Lupul`. Îl așezi cu mouse-ul în spatele coroanei Copacului.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `100` <span style="color:#4C97FF;font-weight:700">y:</span> `-30`  
<span style="color:#9966FF;font-weight:700">mergi la stratul</span> `[în spate]`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(distanța până la [Copilul])</span> <span style="color:#59C059;font-weight:700">&lt;</span> `120` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#9966FF;font-weight:700">mergi</span> `[înainte]` `1` <span style="color:#9966FF;font-weight:700">straturi</span>  
↳ <span style="color:#9966FF;font-weight:700">spune</span> `Bu!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#5CB1D1;font-weight:700">(distanța până la [Copilul])</span> <span style="color:#59C059;font-weight:700">&gt;</span> `200` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#9966FF;font-weight:700">mergi la stratul</span> `[în spate]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `anotimp nou`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#9966FF;font-weight:700">(decor [număr])</span> <span style="color:#59C059;font-weight:700">=</span> `4` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#9966FF;font-weight:700">spune</span> `Brrr, e iarnă!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

- [ ] ★★★ **Provocare:** adaugi un al cincilea anotimp: un decor nou la sfârșit (de exemplu `Stars`, noaptea) și un al cincilea costum la Copac (coroană neagră, cu puncte galbene). Nu schimbi niciun script. Observi că decorul și costumul rămân împreună, pentru că au același număr

## Recapitulare rapidă
1. Personajele stau pe **straturi**: `mergi la stratul [în față]` îl pune peste toate, `[în spate]` sub toate  
2. `mergi [înainte] (1) straturi` îl mută doar peste vecinul lui  
3. `costumul [număr]` și `decor [număr]` sunt valori: costumele și decorurile se numără de la unu  
4. `schimbă costumul la (decor [număr])` potrivește costumul cu decorul, dacă au aceeași ordine  
5. `mărime` e valoarea mărimii în procente: mai mic înseamnă mai departe  
6. O variabilă numără ce se întâmplă în joc: `modifică anotimpuri cu 1` la fiecare schimbare, iar un `dacă` o verifică  
7. Nume: **`Prenume_Nume_L1`**  

## Schema pe scurt *(pe foaie)*

**Pe Copil**  
la steag → `mergi la x: y:` → `setează mărimea la 100` → `mergi la stratul [în față]` → `la infinit` (`dacă tasta [dreapta] apăsată?` `atunci` `modifică x cu 5` + `costumul următor` · la fel pentru stânga cu `-5` · `dacă <tasta [sus] apăsată?> și <(mărime) > 40>` `atunci` `modifică y cu 3` + `modifică mărimea cu -2` · `dacă tasta [jos] apăsată?` `atunci` `modifică y cu -3` + `modifică mărimea cu 2`)

**Pe Copac**  
la steag → `mergi la x: y:` → `setează mărimea la 150` → `schimbă costumul la [primăvară]`  
când primesc anotimp nou → `schimbă costumul la (decor [număr])` → `spune (alătură Costumul (costumul [număr]))` → `dacă (anotimpuri) = 4` `atunci` `spune`

**Pe Scenă**  
la steag → `setează anotimpuri la 0` → `schimbă decorul la [Woods]`  
când tasta [spațiu] este apăsată → `decorul următor` → `modifică anotimpuri cu 1` → `difuzează anotimp nou`

**Pe Lup**  
la steag → `mergi la x: y:` → `mergi la stratul [în spate]` → `la infinit` (`așteaptă până când` `distanța < 120` + `mergi [înainte] 1 straturi` + `spune` + `așteaptă până când` `distanța > 200` + `mergi la stratul [în spate]`)  
când primesc anotimp nou → `dacă (decor [număr]) = 4` `atunci` `spune`

**Quiz scurt (cu profesorul):**  
- Ce face `mergi la stratul [în față]`? Dar `mergi [înainte] (1) straturi`?  
- De ce costumele Copacului trebuie să fie în aceeași ordine cu decorurile?  
- Ce arată `decor [număr]` când ești la al treilea decor?  
- De ce un personaj mai mic pare mai departe?  
- De ce variabila `anotimpuri` trebuie făcută pentru toate personajele?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Copacul și Scena, în același `Prenume_Nume_L1`.  
- Dacă ai Complet: adaugi acasă Lupul, în același `Prenume_Nume_L1`.  
- Dacă ai terminat și Bonusul: desenezi un al doilea copac, cu alte costume, și îl pui în fața Copilului, ca să treacă Copilul pe după el.
