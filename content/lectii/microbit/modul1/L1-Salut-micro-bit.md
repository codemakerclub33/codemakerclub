# Lecția 1 — Inima mea
### Placa micro:bit, MakeCode și primele desene pe LED-uri
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi faci cunoștință cu placa micro:bit, deschizi editorul MakeCode și faci **„Inima mea”**:  
> un program care arată o inimă și **două forme desenate de tine**, mai întâi în simulator, apoi pe placa adevărată.  
> Fișier: `Prenume_Nume_MB1_L01` (ex. `Ana_Pop_MB1_L01`)

---

## Obiectiv
La finalul orei știi ce are placa, ai făcut un program cu blocuri și îl vezi rulând pe placa adevărată.  
**Minim:** inima, numele tău, un număr și **2 forme desenate de tine**, în simulator și pe placă, cu **8 blocuri diferite**.  
**Ținta orei (Complet):** a doua parte a programului, cu alte forme, alt mesaj și alt număr, cu cel puțin **6 blocuri diferite**.

## De ce contează
micro:bit e un calculator mic cât o carte de joc. Programele tale nu rămân pe ecran: aprind lumini, simt mișcarea și răspund la butoane.  
Azi înveți drumul de bază, pe care îl folosești la fiecare lecție: **faci un program → îl trimiți pe placă → îl vezi rulând.**

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Cunoaștem placa: LED-uri, butoane, pini, port USB |
| 15–30 | Deschidem MakeCode, proiect nou, privim simulatorul |
| 30–45 | Prima formă: inima, cu `show icon` |
| 45–60 | Trimitem programul pe placa adevărată |
| 60–95 | Formele noastre, text, număr și `forever` (**Minim**) |
| 95–112 | **Complet:** partea a doua |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB (cu date) · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitol azi (doar acesta):**  
<span style="color:#1E90FF;font-weight:700">Basic</span>  
*(Input, Loops, Logic, Variables — mai târziu.)*

**Limba blocurilor:** în lecții folosim numele **în engleză**, așa cum le vezi în editor. Dacă editorul tău e în română, apeși rotița ⚙ (sus-dreapta) → **Language** → **English**.

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#1E90FF;font-weight:700">on start</span> | ce e înăuntru rulează **o singură dată**, la pornire |
| <span style="color:#1E90FF;font-weight:700">show icon</span> | arată o poză gata făcută pe LED-uri |
| <span style="color:#1E90FF;font-weight:700">show leds</span> | un ecran de 5 pe 5: **tu** alegi ce LED-uri se aprind |
| <span style="color:#1E90FF;font-weight:700">pause (ms)</span> | așteaptă (1000 ms = 1 secundă) |
| <span style="color:#1E90FF;font-weight:700">clear screen</span> | stinge toate LED-urile |
| <span style="color:#1E90FF;font-weight:700">show string</span> | arată un text care se derulează |
| <span style="color:#1E90FF;font-weight:700">show number</span> | arată un număr |
| <span style="color:#1E90FF;font-weight:700">forever</span> | ce e înăuntru se repetă **la nesfârșit** |
| **Download** *(buton)* | trimite programul pe placă |
| **Reset** *(butonul din spatele plăcii)* | pornește programul de la început |

---

## Pas cu pas

### 1) Cunoaștem placa
Ține placa cu **LED-urile spre tine**.
- **Ecranul de LED-uri:** 25 de luminițe roșii, așezate 5 pe 5. Din ele facem desenele și literele.
- **Butoanele A și B:** A e în **stânga**, B e în **dreapta**.
- **Pinii:** 5 inele mari de metal jos (**0, 1, 2, 3V, GND**). Mai târziu vom lega cabluri la ei.
- **Portul micro-USB:** sus. Prin el placa primește curent și programe.
- **Butonul mic de pe spate:** este **Reset**.
- **Senzori:** placa simte **mișcarea** și **temperatura**. Cu LED-urile poate simți și **lumina**.

**Placa V2** (cu margine aurie în jurul logoului) mai are și **difuzor**, **microfon** și un **logo care se atinge** ca un buton. Programele de azi merg pe ambele.

> **Grijă:** nu pui placa pe o masă udă și nu atingi pinii cu mâinile ude.

**Încearcă tu — placa (2–3 min)**  
- [ ] Arăți: LED-urile · butonul A · butonul B · portul USB · Reset  
- [ ] Spui câte LED-uri are ecranul  

### 2) Deschidem editorul
1. Intri pe **makecode.microbit.org**  
2. Apeși **New Project** (Proiect nou)  
3. Numele: `Prenume_Nume_MB1_L01` → **Create**  
4. Pe ecran vezi trei zone:  
   - **stânga:** simulatorul, o placă micro:bit desenată  
   - **mijloc:** lista cu blocuri (Basic, Input, Music, LED …)  
   - **dreapta:** zona unde construiești programul  
5. În zona de lucru sunt deja două blocuri: <span style="color:#1E90FF;font-weight:700">on start</span> și <span style="color:#1E90FF;font-weight:700">forever</span>

**Încearcă tu — editorul (2–3 min)**  
- [ ] Proiectul se numește `Prenume_Nume_MB1_L01`  
- [ ] Arăți: simulatorul · lista de blocuri · zona de lucru  

### 3) Prima formă: inima
1. Apeși capitolul <span style="color:#1E90FF;font-weight:700">Basic</span>  
2. Tragi <span style="color:#1E90FF;font-weight:700">show icon</span> și îl pui **înăuntrul** lui <span style="color:#1E90FF;font-weight:700">on start</span> (blocurile se potrivesc ca piesele de Lego; dacă ai făcut bine, se „lipește”)  
3. Apeși pe inima din bloc și alegi **Heart** din lista de poze  
4. Privește simulatorul: **inima apare pe LED-uri!**

Programul tău:

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  

**Ce vezi pe ecran (simulator și placă):**
```text
. # . # .
# # # # #
# # # # #
. # # # .
. . # . .
```
(`#` = LED aprins, `.` = LED stins)

> Un bloc care **nu e lipit** de <span style="color:#1E90FF;font-weight:700">on start</span> sau <span style="color:#1E90FF;font-weight:700">forever</span> rămâne gri și **nu rulează**.

**Încearcă tu — inima (3–5 min)**  
- [ ] <span style="color:#1E90FF;font-weight:700">show icon</span> e înăuntrul lui <span style="color:#1E90FF;font-weight:700">on start</span>  
- [ ] Simulatorul arată inima  
- [ ] Încerci și altă poză din listă (**Happy**, **House**, **Duck**), apoi revii la **Heart**  

### 4) Trimitem programul pe placă
1. Conectezi placa la calculator cu cablul micro-USB (un cablu care știe și să transmită date). Placa apare ca o unitate numită **MICROBIT**.  
2. **Metoda 1 — conectare directă** (Chrome sau Edge): apeși **Download**, alegi placa, iar programul pleacă singur.  
3. **Metoda 2 — fișier:** apeși **Download**, se salvează un fișier `.hex`, pe care îl tragi peste unitatea **MICROBIT**.  
4. Așteaptă până se oprește luminița galbenă de pe placă. Apoi **inima apare pe LED-uri**.  
5. Vrei s-o vezi din nou? Apeși **Reset** (butonul din spate).

**Încearcă tu — pe placă (5 min)**  
- [ ] Placa apare ca unitate **MICROBIT**  
- [ ] Inima se vede pe placa adevărată  
- [ ] Apeși **Reset** și inima apare din nou  

### 5) Desenăm noi: blocul show leds
Poza din <span style="color:#1E90FF;font-weight:700">show icon</span> e gata făcută. Cu <span style="color:#1E90FF;font-weight:700">show leds</span> **desenezi tu** forma.

1. Din <span style="color:#1E90FF;font-weight:700">Basic</span> tragi <span style="color:#1E90FF;font-weight:700">show leds</span> **sub** <span style="color:#1E90FF;font-weight:700">show icon</span>  
2. Blocul are o grilă de 5 pe 5 pătrățele. **Apeși pe un pătrățel** și LED-ul se aprinde; apeși din nou și se stinge  
3. Desenezi **prima ta formă**: o față zâmbitoare, o casă, o săgeată, o stea… ce vrei tu  
4. Fără pauză, formele se schimbă prea repede și nu le vezi. Din <span style="color:#1E90FF;font-weight:700">Basic</span> tragi <span style="color:#1E90FF;font-weight:700">pause (ms)</span> **între** inimă și forma ta și scrii `1000` (o secundă)  
5. Sub forma ta pui încă o <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`, apoi încă un <span style="color:#1E90FF;font-weight:700">show leds</span> cu **a doua formă** și iar o pauză  

> Regula: **după fiecare desen, o pauză**.

Model *(poți desena altceva)*, o casă:
```text
. . # . .
. # # # .
# # # # #
# # . # #
# # . # #
```

**Încearcă tu — două forme (8–12 min)**  
- [ ] Inima, forma 1 și forma 2 apar una după alta, cu pauze  
- [ ] Formele sunt **desenate de tine**, nu copiate  

### 6) Text, număr și ecran curat
1. La **sfârșitul** lui <span style="color:#1E90FF;font-weight:700">on start</span> adaugi <span style="color:#1E90FF;font-weight:700">show string</span> cu prenumele tău. **Fără diacritice!** LED-urile nu știu literele cu semne: scrii `Ana`, nu `Ană`  
2. După el adaugi <span style="color:#1E90FF;font-weight:700">show number</span> cu un număr la alegere (vârsta ta, numărul preferat)  
3. La final pui <span style="color:#1E90FF;font-weight:700">clear screen</span>, ca să se stingă ecranul  

Programul tău până aici:

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(forma 1)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(forma 2)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Ana`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `10`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

**Încearcă tu — text și număr (4–6 min)**  
- [ ] Numele e fără diacritice  
- [ ] Numărul se vede pe LED-uri  
- [ ] La final ecranul se stinge  

### 7) Forever și așteptarea
Vrem ca formele tale să se **repete singure**, fără să mai apară inima și numele de fiecare dată. Pentru asta folosim <span style="color:#1E90FF;font-weight:700">forever</span>.

1. Muți cele două forme, cu pauzele lor, din <span style="color:#1E90FF;font-weight:700">on start</span> în <span style="color:#1E90FF;font-weight:700">forever</span>  
2. Primul bloc din <span style="color:#1E90FF;font-weight:700">forever</span> este o <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `5000`  
3. La sfârșitul lui <span style="color:#1E90FF;font-weight:700">forever</span> lași un <span style="color:#1E90FF;font-weight:700">clear screen</span>  

**De ce `5000`?** <span style="color:#1E90FF;font-weight:700">forever</span> pornește **imediat**, în același timp cu <span style="color:#1E90FF;font-weight:700">on start</span>. Dacă amândouă desenează, se încurcă. Prima pauză din <span style="color:#1E90FF;font-weight:700">forever</span> așteaptă să se termine introducerea (inima, numele și numărul), ca la Scratch când personajul doi începe cu „așteaptă”.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Ana`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `10`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `5000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(forma 1)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(forma 2)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

**Încearcă tu — repetarea (6–10 min)**  
- [ ] La început vezi inima, numele și numărul, o singură dată  
- [ ] Apoi formele tale se repetă singure  
- [ ] Ai apăsat **Download** din nou și rulează pe placă  

### 8) Complet — partea a doua
Adaugi în <span style="color:#1E90FF;font-weight:700">forever</span>, **după** cele două forme și înainte de <span style="color:#1E90FF;font-weight:700">clear screen</span>, o **parte nouă**, cu aceleași blocuri:

- altă poză din <span style="color:#1E90FF;font-weight:700">show icon</span> (de exemplu `Happy`), urmată de o pauză  
- o **a treia formă** desenată de tine, urmată de o pauză  
- un mesaj nou cu <span style="color:#1E90FF;font-weight:700">show string</span> (fără diacritice) și un alt număr cu <span style="color:#1E90FF;font-weight:700">show number</span>  

Model pentru partea a doua *(alte forme, alt mesaj, alt număr)*:

<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
<span style="color:#1E90FF;font-weight:700">show leds</span> *(forma 3)*  
<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
<span style="color:#1E90FF;font-weight:700">show string</span> `Salut`  
<span style="color:#1E90FF;font-weight:700">show number</span> `7`  

> Fiecare desen are o pauză după el. Nu pune două desene unul după altul, fără pauză.

**Încearcă tu — partea a doua (6–10 min)**  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Mesajul nu are diacritice  
- [ ] Totul merge pe placa adevărată  

---

## Greșeli frecvente
1. **Nu se întâmplă nimic în simulator** — blocul e lăsat singur, nu e lipit de <span style="color:#1E90FF;font-weight:700">on start</span> sau <span style="color:#1E90FF;font-weight:700">forever</span>.  
2. **Văd doar ultimul desen** — ai uitat <span style="color:#1E90FF;font-weight:700">pause (ms)</span> între desene.  
3. **Forma nu seamănă cu a mea** — verifică rândurile de sus în jos și coloanele de la stânga la dreapta.  
4. **Textul are semne ciudate** — ai scris diacritice.  
5. **Inima și formele se amestecă** — <span style="color:#1E90FF;font-weight:700">forever</span> nu începe cu <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `5000`, deci pornește odată cu <span style="color:#1E90FF;font-weight:700">on start</span>.  
6. **Nu vezi unitatea MICROBIT** — cablul poate fi doar de încărcat. Încearcă altul.  
7. **Ai apăsat Download, dar placa nu s-a schimbat** — ai uitat să tragi fișierul `.hex` pe unitatea MICROBIT sau lumina galbenă nu a terminat de clipit.  
8. **Ai șters un bloc din greșeală** — apeși **Ctrl + Z** (pe Mac, **Command + Z**).  

---

## De făcut azi — „Inima mea”
Salvat: `Prenume_Nume_MB1_L01`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — inimă, nume, număr și 2 forme desenate de tine, cu **8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — partea a doua, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru L2.

### Pasul 1 — Programul de bază *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Prenumele tău`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `un număr`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `5000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(forma ta 1)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(forma ta 2)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L01`  
- [ ] Cele două forme sunt **desenate de tine**  
- [ ] După fiecare desen e o pauză  
- [ ] Ai **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">show leds</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show number</span>  
- [ ] Programul e trimis pe placă (**Download** sau **Connect device**)  

**→ Ai Minim când:** pe placă se vede inima, apoi numele și numărul tău, apoi formele tale se repetă singure, fără explicații.

### Pasul 2 — Partea a doua *(Complet)*
- [ ] În <span style="color:#1E90FF;font-weight:700">forever</span> adaugi o poză nouă din <span style="color:#1E90FF;font-weight:700">show icon</span>, urmată de pauză  
- [ ] Adaugi o a treia formă desenată de tine, urmată de pauză  
- [ ] Adaugi un mesaj nou (<span style="color:#1E90FF;font-weight:700">show string</span>) și un alt număr (<span style="color:#1E90FF;font-weight:700">show number</span>)  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L01`  

**Gata Complet când:** placa repetă singură formele, apoi poza nouă, forma a treia, mesajul și numărul nou, fără să se încurce.

---

## Bonus ★★★ — Provocare: Inițialele mele pe LED-uri
*Doar dacă ai terminat Complet.*

- [ ] Schimbă timpii: `500` pentru un ritm rapid, `2000` pentru unul lent  
- [ ] **Provocarea:** desenezi cu <span style="color:#1E90FF;font-weight:700">show leds</span> **primele 3 litere** din prenumele tău, câte una pe cadru, cu <span style="color:#1E90FF;font-weight:700">pause (ms)</span> între ele, **fără** <span style="color:#1E90FF;font-weight:700">show string</span>. Arată placa unui coleg fără să spui nimic: poate ghici cum te cheamă?

Model pentru litera `A` *(literele B, C, M, S, T le desenezi tu)*:
```text
. . # . .
. # . # .
# # # # #
# . . . #
# . . . #
```

## Recapitulare rapidă
1. micro:bit are **25 de LED-uri**, **2 butoane (A, B)**, **pini** și **senzori**  
2. <span style="color:#1E90FF;font-weight:700">show icon</span> = poză gata făcută · <span style="color:#1E90FF;font-weight:700">show leds</span> = desenezi **tu**  
3. După fiecare desen, o <span style="color:#1E90FF;font-weight:700">pause (ms)</span>  
4. <span style="color:#1E90FF;font-weight:700">on start</span> rulează o dată · <span style="color:#1E90FF;font-weight:700">forever</span> se repetă la nesfârșit  
5. <span style="color:#1E90FF;font-weight:700">forever</span> începe cu o pauză, ca să nu se încurce cu <span style="color:#1E90FF;font-weight:700">on start</span>  
6. **Download** trimite programul pe placă; **Reset** îl pornește de la început  
7. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*

**<span style="color:#1E90FF;font-weight:700">on start</span>** (o dată)  
<span style="color:#1E90FF;font-weight:700">show icon</span> → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> → <span style="color:#1E90FF;font-weight:700">show string</span> → <span style="color:#1E90FF;font-weight:700">show number</span> → <span style="color:#1E90FF;font-weight:700">clear screen</span>

**<span style="color:#1E90FF;font-weight:700">forever</span>** (se repetă)  
<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `5000` → <span style="color:#1E90FF;font-weight:700">show leds</span> → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> → <span style="color:#1E90FF;font-weight:700">show leds</span> → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> → <span style="color:#1E90FF;font-weight:700">clear screen</span>

**Quiz scurt (cu profesorul):**  
- Câte LED-uri are ecranul plăcii?  
- Care e diferența dintre <span style="color:#1E90FF;font-weight:700">show icon</span> și <span style="color:#1E90FF;font-weight:700">show leds</span>?  
- De ce avem nevoie de <span style="color:#1E90FF;font-weight:700">pause (ms)</span> între desene?  
- De ce începe <span style="color:#1E90FF;font-weight:700">forever</span> cu o pauză de `5000`?  
- De ce scriem numele fără diacritice?

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi partea a doua (Pasul 2), în același `Prenume_Nume_MB1_L01`.  
- Dacă ai Complet: adaugi o a patra formă.  
- Dacă ai terminat și Bonusul: faci o copie a proiectului și schimbi povestea (alt mesaj, alte forme).  

## Ce urmează
În **Lecția 2** facem desenele să se miște ca într-un desen animat: o floare care se deschide, cadru cu cadru.
