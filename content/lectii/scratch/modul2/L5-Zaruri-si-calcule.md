# Lecția 5 — Zaruri și calcule
### Numere aleatoare
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **aruncă zaruri**, **fac socoteli** și **găsesc restul unei împărțiri**.  
> Proiect: **„Zaruri și calcule”** · fișier: `Prenume_Nume_L5` (ex. `Ana_Pop_L5`)

---

## Obiectiv
La finalul orei Zarul tău se rostogolește de două ori, apoi un Calculator face socoteli cu cele două numere, pe scenă.  
**Minim:** personajul 1 (Zarul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Calculatorul), cu cel puțin **8 blocuri diferite**, care apare la semnalul Zarului și spune diferența, media, media rotunjită și restul.

## De ce contează
Un joc aruncă zaruri, adună puncte, împarte premii și alege lucruri la întâmplare. Pentru asta folosești blocurile din <span style="color:#59C059;font-weight:700">Operatori</span> (EN: *Operators*): ele fac socotelile în locul tău, iar rezultatul îl pui într-o variabilă sau îl spui.

**În clasă:** la proiect aștepți să se termine tot scriptul înainte să apeși din nou pe zar.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolul Operatori |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Zaruri și calcule” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Operatori — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `alege aleator între ( ) și ( )` | valoare: un număr ales la întâmplare între cele două scrise |
| `( ) + ( )` | valoare: suma a două numere |
| `( ) - ( )` | valoare: diferența: primul număr minus al doilea |
| `( ) * ( )` | valoare: produsul: primul număr înmulțit cu al doilea |
| `( ) / ( )` | valoare: câtul: primul număr împărțit la al doilea (poate avea zecimale) |
| `rotunjește ( )` | valoare: numărul rotunjit la cel întreg cel mai apropiat |
| `( ) mod ( )` | valoare: restul împărțirii primului număr la al doilea |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#59C059;font-weight:700">Operatori</span> | **`alege aleator între ( ) și ( )`**, **`( ) + ( )`**, **`( ) - ( )`**, **`( ) * ( )`**, **`( ) / ( )`**, **`rotunjește ( )`**, **`( ) mod ( )`**, `alătură ( ) ( )` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează [ ] la ( )`, `arată variabila`, valoarea variabilei |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `întreabă ( ) și așteaptă`, `răspuns` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când se dă click pe acest personaj`, `când primesc`, `difuzează`, `difuzează … și așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `schimbă costumul la`, `arată`, `ascunde`, `setează efectul [culoare] la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `așteaptă`, `la infinit` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Alege aleator
1. Din <span style="color:#59C059;font-weight:700">Operatori</span> iei <span style="color:#59C059;font-weight:700">alege aleator între ( ) și ( )</span>: e o **valoare**, deci o pui în locul unei valori
2. Scrii cele două numere: pentru un zar `1` și `6`. La fiecare click pe bloc dă alt număr
3. Îl pui în <span style="color:#FF8C1A;font-weight:700">setează [zar1] la ( )</span>: variabila ține numărul ales
4. Variabila merge și în <span style="color:#9966FF;font-weight:700">schimbă costumul la ( )</span>: personajul arată costumul cu **numărul** respectiv

**Încearcă tu — alege aleator (3–4 min)**  
- [ ] Ai creat `zar1`, `zar2` și `suma`  
- [ ] La fiecare click pe bloc numărul se schimbă  
- [ ] `zar1` primește un număr de la 1 la 6  
- [ ] Zarul arată fața cu numărul din `zar1`  

### 2) Adună, scade, înmulțește, împarte
1. <span style="color:#59C059;font-weight:700">( ) + ( )</span>, <span style="color:#59C059;font-weight:700">( ) - ( )</span>, <span style="color:#59C059;font-weight:700">( ) * ( )</span> și <span style="color:#59C059;font-weight:700">( ) / ( )</span> au câte **două** locuri goale. Scrii numere sau pui variabile
2. Rezultatul îl pui într-un `setează` (de exemplu <span style="color:#FF8C1A;font-weight:700">setează [suma] la</span> `(zar1) + (zar2)`) sau într-un `spune`
3. Ordinea contează la minus și la împărțire: `5 - 2` nu e `2 - 5`
4. La `/` rezultatul poate avea zecimale: `7 / 2` dă `3,5`
5. Poți pune un operator **în altul**, de exemplu `(zar1) + (zar2)` în locul unui loc gol din `*`

**Încearcă tu — cele patru operații (3–4 min)**  
- [ ] `suma` este `zar1` plus `zar2`  
- [ ] Personajul spune câte puncte are: `suma` înmulțită cu `10`  
- [ ] Ai încercat `7 / 2` și ai văzut `3,5`  

### 3) Rotunjește
1. <span style="color:#59C059;font-weight:700">rotunjește ( )</span> face din `3,5` un număr întreg: `4`
2. Se rotunjește la cel mai apropiat întreg: `3,4` devine `3`, iar `3,5` devine `4`
3. Pui în el un alt operator: `rotunjește ((suma) / (2))`

**Încearcă tu — rotunjește (2 min)**  
- [ ] `rotunjește (7 / 2)` dă `4`  
- [ ] Media se vede cu zecimale, iar cea rotunjită ca număr întreg  

### 4) Mod: restul împărțirii
1. <span style="color:#59C059;font-weight:700">( ) mod ( )</span> dă **restul** împărțirii: `7 mod 2` este `1`, iar `8 mod 2` este `0`
2. La împărțirea cu `2`: rest `0` înseamnă număr **par**, rest `1` înseamnă **impar**
3. Îl pui în `spune`, în `alătură` sau într-un `setează`

**Încearcă tu — mod (2 min)**  
- [ ] `8 mod 2` dă `0`  
- [ ] `7 mod 2` dă `1`  
- [ ] `suma mod 2` arată dacă suma e pară sau impară  

---

## Greșeli frecvente
1. **Zarul nu arată fața bună** — costumele nu sunt 6, nu sunt în ordine (de la 1 la 6) sau ai pus alt număr decât de la 1 la 6.  
2. **Operatorul nu intră** — blocurile rotunde se pun în locul gol al altui bloc, nu singure.  
3. **`suma` e greșit** — ai pus `zar1` de două ori, sau ai uitat `setează [zar2]` înainte.  
4. **Rezultatul are zecimale** — așa e la `/`: pentru număr întreg folosești `rotunjește`.  
5. **Diferența e negativă** — la minus ordinea contează: `zar1 - zar2` poate fi sub zero.  
6. **`mod` pare greșit** — `mod` dă restul, nu rezultatul împărțirii.  
7. **Scriptul pornește de la capăt** — ai apăsat din nou pe zar cât rula. Așteaptă să se termine.  
8. **Calculatorul vorbește deodată cu Zarul** — Zarul trebuie să difuzeze `calcul` cu `și așteaptă`, nu fără.  
9. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`calcul` și `calculează` sunt mesaje diferite).  
10. **Nume fișier** — `Prenume_Nume_L5`, nu doar `Ana_L5`.  

---

## De făcut azi — „Zaruri și calcule”
Salvat: `Prenume_Nume_L5`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, personajele, variabilele + **Zarul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Calculatorul** cu ≥ 8 blocuri diferite, care apare la semnalul Zarului și spune diferența, media, media rotunjită și restul |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Masa de joc, personajele și variabilele *(Minim)*
Alegi din bibliotecă un decor de joc sau de masă. Adaugi din bibliotecă două personaje și le redenumești exact: `Calculatorul` (un robot sau un calculator) și `Jucătorul` (un personaj de copil). Pe Calculator adaugi în tab-ul **Sunete** un sunet.  
**Zarul îl faci tu**, prin desen, ca personaj nou: în tab-ul **Costume** desenezi cu unealta **Dreptunghi** un pătrat alb cu margine neagră, apoi scrii în el cu unealta **Text** cifra `1`. Duplici costumul de 5 ori și schimbi cifra în `2`, `3`, `4`, `5` și `6`, **în ordine**. Redenumești personajul `Zarul`. Îți ia 5–8 minute.
Creezi variabilele `zar1`, `zar2` și `suma`, **pentru toate personajele**.

- [ ] Decor de joc sau de masă  
- [ ] Personajele se numesc `Zarul`, `Calculatorul` și `Jucătorul`  
- [ ] Zarul e desenat de tine și are 6 costume, cu cifrele de la 1 la 6, în ordine  
- [ ] Variabilele `zar1`, `zar2` și `suma` există, pentru toate personajele  

### Pasul 2 — Zarul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Apasă pe mine!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FF8C1A;font-weight:700">arată variabila [suma]</span>  
<span style="color:#FF8C1A;font-weight:700">setează [suma] la</span> `0`  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FF8C1A;font-weight:700">setează [zar1] la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `6` <span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> <span style="color:#FF8C1A;font-weight:700">(zar1)</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#FF8C1A;font-weight:700">setează [zar2] la</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `6` <span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#9966FF;font-weight:700">schimbă costumul la</span> <span style="color:#FF8C1A;font-weight:700">(zar2)</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#FF8C1A;font-weight:700">setează [suma] la</span> <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(zar1)</span> <span style="color:#59C059;font-weight:700">+</span> <span style="color:#FF8C1A;font-weight:700">(zar2)</span><span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Suma este ”` <span style="color:#FF8C1A;font-weight:700">(suma)</span> <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Puncte: ”` <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(suma)</span> <span style="color:#59C059;font-weight:700">*</span> `10` <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `calcul` <span style="color:#E6A800;font-weight:700">și așteaptă</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final`  

- [ ] La click Zarul arată o față, așteaptă, apoi arată alta  
- [ ] `suma` este suma celor două numere  
- [ ] Zarul spune suma și punctele (de zece ori mai mari)  
- [ ] Fără Calculator și Jucător, Zarul își termină povestea singur  
- [ ] Salvat: `Prenume_Nume_L5`  

**→ Minim când:** apeși pe zar, el arată două fețe una după alta, spune suma și apoi punctele.

### Pasul 3 — Calculatorul *(Complet)*
Calculatorul are **2 scripturi**, iar al doilea pornește când Zarul difuzează `calcul`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `120` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `calcul`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Eu sunt Calculatorul!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Diferența: ”` <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(zar1)</span> <span style="color:#59C059;font-weight:700">-</span> <span style="color:#FF8C1A;font-weight:700">(zar2)</span><span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Media: ”` <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(suma)</span> <span style="color:#59C059;font-weight:700">/</span> `2` <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Media rotunjită: ”` <span style="color:#59C059;font-weight:700">(rotunjește (</span><span style="color:#FF8C1A;font-weight:700">(suma)</span> <span style="color:#59C059;font-weight:700">/</span> `2` <span style="color:#59C059;font-weight:700">)))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Restul la 2: ”` <span style="color:#59C059;font-weight:700">(</span><span style="color:#FF8C1A;font-weight:700">(suma)</span> <span style="color:#59C059;font-weight:700">mod</span> `2` <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

- [ ] Calculatorul e ascuns până vine `calcul`  
- [ ] Spune pe rând diferența, media, media rotunjită și restul  
- [ ] La media cu zecimale (de exemplu `3,5`) cea rotunjită arată `4`  
- [ ] Salvat din nou: `Prenume_Nume_L5`  

**Gata Complet când:** apeși pe zar, el arată două fețe, spune suma, apoi Calculatorul apare și spune cele patru rezultate pe rând, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Jucătorul), care îți ia un număr și îl calculează cu suma:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-110`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Scrie un număr de la 1 la 6.` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Înmulțit cu suma: ”` <span style="color:#59C059;font-weight:700">(</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">*</span> <span style="color:#FF8C1A;font-weight:700">(suma)</span><span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Jumătate: ”` <span style="color:#59C059;font-weight:700">(</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">/</span> `2` <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Rest la 3: ”` <span style="color:#59C059;font-weight:700">(</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">mod</span> `3` <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Numărul norocos: ”` <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `100` <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> <span style="color:#FF8C1A;font-weight:700">(suma)</span>  
↳ <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,1` secunde  

- [ ] ★★★ **Provocare:** pe Zar, creezi variabila `total` și, la fiecare click, o modifici cu `suma`: la finalul mai multor aruncări Zarul spune câte puncte ai adunat în total

## Recapitulare rapidă
1. `alege aleator între ( ) și ( )` dă un număr la întâmplare; pentru un zar scrii `1` și `6`  
2. `+`, `-`, `*` și `/` au câte două locuri: rezultatul îl pui într-un `setează` sau într-un `spune`  
3. La minus și la împărțire ordinea contează; la `/` pot apărea zecimale  
4. `rotunjește ( )` face un număr întreg: `3,5` devine `4`  
5. `( ) mod ( )` dă restul împărțirii; cu `2`, rest `0` înseamnă par, iar `1` impar  
6. Nume: **`Prenume_Nume_L5`**  

## Schema pe scurt *(pe foaie)*

**Pe Zar**  
la steag → `spune` → `arată variabila [suma]` → `setează [suma] la 0`  
click pe el → `setează [zar1] la (alege aleator 1 și 6)` → `schimbă costumul la (zar1)` → `așteaptă` → `setează [zar2] la (alege aleator 1 și 6)` → `schimbă costumul la (zar2)` → `așteaptă` → `setează [suma] la (zar1 + zar2)` → `spune (alătură … (suma))` → `spune (alătură … (suma * 10))` → `difuzează calcul și așteaptă` → `difuzează final`

**Pe Calculator**  
la steag → `ascunde` → `mergi la x: y:`  
când primesc calcul → `arată` → `pornește sunetul` → `spune` → `spune (… zar1 - zar2)` → `spune (… suma / 2)` → `spune (… rotunjește (suma / 2))` → `spune (… suma mod 2)`

**Pe Jucător**  
la steag → `ascunde` → `mergi la x: y:`  
când primesc final → `arată` → `întreabă` → `spune (… răspuns * suma)` → `spune (… răspuns / 2)` → `spune (… răspuns mod 3)` → `spune (… alege aleator 1 și 100)` → `la infinit` (`setează efectul [culoare] la (suma)` + `așteaptă`)

**Quiz scurt (cu profesorul):**  
- Ce numere poate da `alege aleator între 1 și 6`?  
- Cât este `7 mod 2`? Ce înseamnă rezultatul?  
- Ce face `rotunjește` cu `4,5`? Dar cu `4,4`?  
- De ce contează ordinea numerelor la minus?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Calculatorul, în același `Prenume_Nume_L5`.  
- Dacă ai Complet: adaugi acasă Jucătorul, în același `Prenume_Nume_L5`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alt joc cu zaruri, alte socoteli, alt personaj care calculează).
