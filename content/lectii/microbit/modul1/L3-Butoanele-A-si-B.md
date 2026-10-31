# Lecția 3 — Comutatorul de emoții
### Evenimente: butoanele A, B și A+B
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți ce este un **eveniment** și faci **„Comutatorul de emoții”**:  
> placa arată o emoție diferită când apeși A, B sau A și B împreună.  
> Fișier: `Prenume_Nume_MB1_L03` (ex. `Ana_Pop_MB1_L03`)

---

## Obiectiv
La finalul orei știi să faci placa să **răspundă** când apeși un buton.  
**Minim:** trei butoane (A, B, A+B), fiecare cu emoția lui, și o stare de somn la pornire, cu **8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: la **A+B** apare o mică „explozie” de emoții, cu cel puțin **6 blocuri diferite**.

## De ce contează
Telecomanda, tastatura și mouse-ul funcționează la fel: tu **faci ceva**, iar aparatul **răspunde**. În programare, „ceva ce se întâmplă” se numește **eveniment**.  
Blocurile de eveniment așteaptă liniștite, apoi pornesc exact când apeși.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2: `plot`, `repeat`, `pause` |
| 10–25 | Ce este un eveniment? Jocul „Eu sunt placa”, fără calculator |
| 25–45 | `on button A pressed` și starea de somn |
| 45–65 | Butonul B și butonul A+B (**Minim**) |
| 65–95 | Trimitem pe placă și testăm |
| 95–112 | **Complet:** explozia de emoții la A+B |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#1E90FF;font-weight:700">Basic</span> · <span style="color:#00A600;font-weight:700">Loops</span> · <span style="color:#5C2D91;font-weight:700">LED</span>  
*(Logic, Variables — mai târziu.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#D400D4;font-weight:700">on button A pressed</span> | pornește blocurile din el **doar** când apeși butonul ales. Din listă alegi **A**, **B** sau **A+B** |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">show leds</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>.

---

## Pas cu pas

### 1) Jocul „Eu sunt placa” (fără calculator)
Lucrați în perechi. Un copil e **placa**, celălalt e **omul**.

- Omul spune „Apas A!”, iar placa face o față veselă.  
- Omul spune „Apas B!”, iar placa face o față tristă.  
- Omul spune „Apas A și B!”, iar placa face o față mirată.  

Ce s-a întâmplat? Omul a făcut **ceva**, iar placa a **răspuns**. Acel „ceva” se numește **eveniment**.

**Încearcă tu — (5–8 min)**  
- [ ] Spui 3 evenimente din viața de zi cu zi (sonerie, telecomandă, lumină)  
- [ ] Placa a răspuns diferit la fiecare gest  

### 2) Proiect nou și starea de somn
1. Proiect nou: `Prenume_Nume_MB1_L03`  
2. În <span style="color:#1E90FF;font-weight:700">on start</span> pui <span style="color:#1E90FF;font-weight:700">show icon</span> `Asleep` (placa doarme)  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Asleep`  

Placa doarme până apeși un buton. Blocul de la pornire rulează o singură dată.

**Încearcă tu — (5 min)**  
- [ ] Placa „doarme” în simulator  
- [ ] Ai încercat și alte fețe din listă, apoi ai revenit la `Asleep`  

### 3) Butonul A
1. Din <span style="color:#D400D4;font-weight:700">Input</span> tragi <span style="color:#D400D4;font-weight:700">on button A pressed</span> pe zona de lucru (e un bloc de sine stătător, **nu** îl pui în <span style="color:#1E90FF;font-weight:700">on start</span>)  
2. Înăuntru pui: <span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`, <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`, <span style="color:#1E90FF;font-weight:700">show string</span> `Hei`, <span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Hei`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

**Ce vezi:** apeși **A** în simulator și apare fața veselă, apoi „Hei”, apoi ecranul se stinge.

**Încearcă tu — (8–10 min)**  
- [ ] A arată fața veselă, apoi Hei  
- [ ] Ai apăsat A de mai multe ori la rând  

### 4) Butonul B
Tragi încă un bloc <span style="color:#D400D4;font-weight:700">on button … pressed</span> și din listă alegi **B**. Înăuntru: <span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`, <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`, <span style="color:#1E90FF;font-weight:700">show number</span> `5`, <span style="color:#1E90FF;font-weight:700">clear screen</span>.

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `5`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

> Pentru fiecare buton ai nevoie de **un singur** bloc. Dacă pui două blocuri pentru același buton, nu știi care rulează.

**Încearcă tu — (5–8 min)**  
- [ ] B arată fața tristă și numărul `5` (cât de trist ești, de la 1 la 5)  
- [ ] Ai schimbat numărul  

### 5) A+B: fața ta
Al treilea bloc <span style="color:#D400D4;font-weight:700">on button … pressed</span>, cu **A+B** în listă. Aici **desenezi tu** o față, cu <span style="color:#1E90FF;font-weight:700">show leds</span> (o față mirată, o față somnoroasă, ce vrei tu).

Model *(poți desena altceva)*:
```text
. # . # .
. # . # .
. . . . .
. # # # .
. # # # .
```

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Asleep`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Hei`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `5`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(fața ta, desenată de tine)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

**Ce vezi:** la pornire placa doarme. Apeși A, B sau A+B și fiecare buton are emoția lui.

**Încearcă tu — (10–12 min)**  
- [ ] Toate cele 3 butoane merg în simulator  
- [ ] Fața de la A+B e desenată de tine  
- [ ] Programul e pe placa adevărată (Download)  

### 6) Complet: explozia de emoții
Înlocuiești conținutul blocului **A+B** cu **partea a doua**. Mai întâi ecranul „pâlpâie” de 3 ori, apoi apare fața ta și o scânteie în mijloc.

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(fața ta, desenată de tine)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

> Dacă apeși alt buton **în timp ce rulează** explozia, celălalt bloc începe și el. Așteaptă să se termine.

**Încearcă tu — (10–15 min)**  
- [ ] Ecranul pâlpâie de 3 ori la A+B  
- [ ] Fața ta apare apoi, urmată de scânteia din mijloc  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **A+B nu merge** — ai ales **A** în loc de **A+B** din lista blocului, sau ai apăsat butoanele pe rând, nu deodată.  
2. **Nu se întâmplă nimic** — <span style="color:#D400D4;font-weight:700">on button A pressed</span> e pus în <span style="color:#1E90FF;font-weight:700">on start</span>. Blocurile de eveniment stau singure pe zona de lucru.  
3. **Fața rămâne pe ecran** — lipsește <span style="color:#1E90FF;font-weight:700">clear screen</span> la sfârșit.  
4. **Apar două răspunsuri** — ai pus două blocuri pentru același buton.  
5. **Fața trece prea repede** — lipsește <span style="color:#1E90FF;font-weight:700">pause (ms)</span>.  
6. **Explozia se încurcă** — ai apăsat alt buton cât timp rula. Așteaptă să se termine.  

---

## De făcut azi — „Comutatorul de emoții”
Salvat: `Prenume_Nume_MB1_L03`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — 3 butoane cu emoții și starea de somn, cu **8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — explozia de emoții la A+B, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Comutatorul de emoții *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Asleep`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Hei`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `5`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(fața ta, desenată de tine)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L03`  
- [ ] La pornire placa doarme (`Asleep`)  
- [ ] Fiecare buton (A, B, A+B) are emoția lui și se oprește cu un `clear screen`  
- [ ] Ai **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">show leds</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>  
- [ ] Fața de la A+B e desenată de tine  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg apasă pe rând A, B și A+B și vede de fiecare dată altă emoție, fără explicații.

### Pasul 2 — Explozia de emoții *(Complet)*
<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(fața ta, desenată de tine)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] În blocul **A+B**: <span style="color:#00A600;font-weight:700">repeat</span> `3` times cu <span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`, pauză, <span style="color:#1E90FF;font-weight:700">clear screen</span>, pauză  
- [ ] Apoi <span style="color:#1E90FF;font-weight:700">show leds</span> cu fața ta și <span style="color:#5C2D91;font-weight:700">plot x y</span> în mijloc  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L03`  

**Gata Complet când:** la A+B ecranul pâlpâie de 3 ori, apoi apar fața ta și scânteia, iar A și B merg ca înainte.

---

## Bonus ★★★ — Provocare: Semaforul dispozițiilor
*Doar dacă ai terminat Complet.*

- [ ] Schimbă timpii: `500` pentru o reacție rapidă, `2000` pentru una lentă  
- [ ] **Provocarea:** toate cele **3 emoții** (A, B și A+B) sunt **fețe desenate de tine**, nu din listă. Fiecare are câte un cuvânt scurt cu <span style="color:#1E90FF;font-weight:700">show string</span> și un număr de la 1 la 5 cu <span style="color:#1E90FF;font-weight:700">show number</span>. Un coleg apasă butoanele și **ghicește emoția** din ce vede.  

## Recapitulare rapidă
1. **Eveniment** = ceva ce se întâmplă (apeși un buton)  
2. <span style="color:#D400D4;font-weight:700">on button A pressed</span> pornește doar când apeși A; din listă alegi A, B sau A+B  
3. Pentru fiecare buton ai nevoie de **un singur** bloc, pus singur pe zona de lucru  
4. <span style="color:#1E90FF;font-weight:700">on start</span> rulează o dată, la pornire; blocurile de buton rulează de fiecare dată când apeși  
5. După fiecare reacție, un <span style="color:#1E90FF;font-weight:700">clear screen</span>  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
<span style="color:#1E90FF;font-weight:700">on start</span> → <span style="color:#1E90FF;font-weight:700">show icon</span> `Asleep`

A → <span style="color:#1E90FF;font-weight:700">show icon</span> → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> → <span style="color:#1E90FF;font-weight:700">show string</span> → <span style="color:#1E90FF;font-weight:700">clear screen</span>

B → <span style="color:#1E90FF;font-weight:700">show icon</span> → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> → <span style="color:#1E90FF;font-weight:700">show number</span> → <span style="color:#1E90FF;font-weight:700">clear screen</span>

A+B → <span style="color:#00A600;font-weight:700">repeat</span> <span style="color:#1E90FF;font-weight:700">show icon</span> → <span style="color:#1E90FF;font-weight:700">show leds</span> → <span style="color:#5C2D91;font-weight:700">plot x y</span>

**Quiz scurt (cu profesorul):**  
- Ce este un eveniment? Dă un exemplu din viața de zi cu zi.  
- Pe ce parte a plăcii se află butonul B?  
- Cum faci ca placa să răspundă când apeși A și B deodată?  
- De ce nu punem blocul de buton în `on start`?  
- Ce se întâmplă dacă apeși alt buton cât rulează explozia?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi explozia de la A+B (Pasul 2), în același `Prenume_Nume_MB1_L03`.  
- Dacă ai Complet: alegi un aparat de acasă cu butoane (telecomandă, cuptor) și desenezi pe foaie 3 butoane și ce ar trebui să facă placa la fiecare.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi emoțiile.  

## Ce urmează
În **Lecția 4** placa **ține minte numere**, cu variabile: un contor magic.
