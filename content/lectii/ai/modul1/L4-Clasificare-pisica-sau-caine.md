# LECȚIA 4 — Clasificare: pisică sau câine?
**Modulul 1 · AI pentru copii · 2 ore**  
**Code Maker Club · AI Explorer**

> Azi afli cum alege un model între două sau mai multe categorii: ce sunt **trăsăturile**, cum se dă un **scor** și ce se întâmplă când modelul nu este sigur. Facem un clasificator de hârtie.  
> Proiect: **„Clasificatorul meu de hârtie”** · folder: `Prenume_Nume_AI1_L4` (ex. `Ana_Pop_AI1_L4`)

---

## Obiectiv
La finalul orei știi ce înseamnă **clasificare**, ce sunt **trăsăturile**, cum folosește un model scorurile pentru a alege și cum numeri câte răspunsuri sunt corecte.  
**Minim:** un clasificator de hârtie cu 3 trăsături care alege între două categorii.  
**Complet:** în plus un scor pentru fiecare categorie, un caz în care modelul este nesigur și un tabel cu rezultatele testării.

## De ce contează
Multe lucruri pe care le face AI sunt clasificări: spune dacă un email este spam sau nu, ce animal este într-o poză, ce emoție are o față desenată. Dacă înțelegi clasificarea, înțelegi mare parte din AI.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: date bune și date proaste |
| 10–30 | Ce este clasificarea (**Exemplele 1–2**) |
| 30–55 | Trăsături și scoruri (**Exemplul 3**) |
| 55–75 | Cazuri nesigure (**Exemplul 4**) |
| 75–95 | Testăm și numărăm (**Exemplul 5**) |
| 95–115 | Clasificatorul meu de hârtie (**Exemplul 6**) |
| 115–120 | Recap și temă |

**Ce îți trebuie:** foi A4, creioane, riglă, cartonașe cu desene de pisici și câini (le desenezi tu sau le primești de la un adult).

---

## 1. Ce este clasificarea?
**Clasificarea** înseamnă să pui un lucru într-o categorie: pisică sau câine, spam sau mesaj normal, măr sau banană. Modelul se uită la **trăsături**: lucruri pe care le poate observa, ca mărimea, culoarea sau forma urechilor.

### Exemplul 1 — Cele 20 de întrebări, varianta AI
Un coleg se gândește la un animal: pisică sau câine. Tu poți pune doar întrebări cu răspuns **da** sau **nu** despre trăsături: „Are urechile ascuțite?”, „Este mai mare decât o pisică?” Câte întrebări îți trebuie ca să ghicești?

### Exemplul 2 — Alegem trăsăturile
Pentru a deosebi o pisică de un câine, care trăsături ajută mult și care ajută puțin?

| Trăsătură | Ajută mult? |
|-----------|-------------|
| Are patru picioare | |
| Latră sau miaună | |
| Culoarea blănii | |
| Mărimea | |

Completează cu „mult” sau „puțin” și explică. (Patru picioare au amândoi, deci nu ajută. Sunetul ajută mult, dar într-o poză nu se aude.)

---

## 2. Scoruri

### Exemplul 3 — Votul trăsăturilor
Modelul nu decide dintr-o singură trăsătură. Fiecare trăsătură „votează” pentru o categorie și se adună punctele.

Pentru un animal necunoscut, notează:

| Trăsătură | Pare pisică | Pare câine |
|-----------|-------------|------------|
| Urechi ascuțite | +1 | |
| Nas mic | +1 | |
| Coadă lungă și subțire | +1 | |
| Corp mare | | +1 |
| Labe mari | | +1 |

Aduni: pisică 3, câine 2. Modelul spune „pisică”, dar nu este foarte sigur.

---

## 3. Când modelul nu este sigur

### Exemplul 4 — Zona gri
Ce faci când scorul este egal sau foarte apropiat (de exemplu 3 la 3)? Un model bun poate spune „nu sunt sigur” și cere un om să verifice.

Discutăm în perechi: într-un spital, unde un model ajută un medic, ce ar trebui să facă modelul când nu este sigur?

---

## 4. Testăm și numărăm

### Exemplul 5 — Câte răspunsuri sunt corecte?
Ai 10 cartonașe cu animale, cu eticheta ascunsă. Clasifici fiecare cu metoda ta de la Exemplul 3, apoi verifici etichetele.

Completează tabelul:

| Cartonaș | Ghicit | Real | Corect? |
|----------|--------|------|---------|
| 1 | pisică | pisică | da |
| 2 | câine | pisică | nu |
| ... | | | |

Calculează: câte corecte din 10? La acest număr i se spune **acuratețe**. 8 din 10 înseamnă 80%.

Mai notează separat: câte pisici ai luat drept câini și câți câini ai luat drept pisici? Așa vezi ce fel de greșeli face modelul.

---

## 5. Clasificatorul meu de hârtie

### Exemplul 6 — Construiesc modelul
Alege două categorii (de exemplu „fruct” și „legumă”, sau „animal de casă” și „animal sălbatic”) sau trei categorii dacă vrei o provocare.

1. Alege 3 trăsături potrivite.  
2. Fă o foaie cu un tabel de scor, ca în Exemplul 3.  
3. Desenează 6 exemple noi și clasifică exemplele cu foaia ta.  
4. Un coleg verifică și calculează acuratețea.

**Opțional, cu un adult:** există instrumente gratuite în browser (de exemplu Teachable Machine) care antrenează un model cu obiecte din cameră. Se face doar cu un adult, cu obiecte (nu cu fețe sau poze personale) și fără cont la copil. Dacă nu ai calculator, sari peste.

**Încearcă tu (10 min)**  
- [ ] Spune ce este o trăsătură  
- [ ] Explică de ce un singur indiciu nu ajunge  
- [ ] Calculează acuratețea pentru 7 corecte din 10  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Clasificatorul meu de hârtie” (obligatoriu)
Foaia cu 2 categorii, 3 trăsături, tabelul de scor, 6 exemple clasificate și acuratețea calculată.

### Exercițiul B — Trăsături bune
Pentru a deosebi „mașină” de „bicicletă”, alege 3 trăsături utile și una inutilă.

### Exercițiul C — Calculează acuratețea
Un model a clasificat 20 de poze și a greșit 4. Câte sunt corecte? Ce procent este?

### Exercițiul D — Ce face modelul?
Scorurile sunt: pisică 4, câine 4. Ce ar trebui să facă modelul? Scrie două variante.

### Exercițiul E — Explică cu cuvintele tale
Răspunde în 3 propoziții: cum alege un model între „pisică” și „câine”?

**Gata când:**
- [ ] Clasificatorul are 2 categorii, 3 trăsături și tabel de scor  
- [ ] Ai clasificat 6 exemple și ai calculat acuratețea  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Ai spus ce face modelul când nu este sigur  
- [ ] Foaia se numește `Prenume_Nume_AI1_L4`  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un clasificator cu 3 categorii (de exemplu pisică, câine, iepure)  
- [ ] Găsește un animal pe care clasificatorul tău îl încurcă și explică de ce  
- [ ] Inventează o trăsătură nouă și vezi dacă îmbunătățește rezultatul  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „O trăsătură ajunge” | Poate încurca | Se folosesc mai multe trăsături |
| „Modelul este mereu sigur” | Nu este | Poate spune „nu sunt sigur” |
| „Acuratețea 100% înseamnă că e perfect” | Doar pe exemplele testate | Pe exemple noi poate greși |
| „Orice trăsătură e bună” | Unele sunt la fel la toate | Alegem trăsături care deosebesc |
| „Greșelile sunt toate la fel” | Sunt de mai multe feluri | Contează ce confundă modelul |

---

## Recapitulare pe scurt

- **Clasificarea** pune un lucru într-o categorie.  
- Modelul se uită la **trăsături** și adună **scoruri**.  
- Când scorurile sunt apropiate, modelul este **nesigur**.  
- **Acuratețea** arată câte răspunsuri au fost corecte din total.  
- Contează și ce fel de greșeli face modelul.  

---

## Quiz scurt
- Ce este clasificarea?  
- Ce este o trăsătură? Dă un exemplu.  
- De ce folosim mai multe trăsături?  
- Cum calculezi acuratețea?  
- Ce poate face un model când nu este sigur?

---

## Temă
1. Termină clasificatorul, dacă nu ai terminat.  
2. Testează clasificatorul pe 5 desene noi, cu un coleg sau cu cineva din familie.  
3. Scrie 2 lucruri pe care clasificatorul tău le încurcă.  
4. **Bonus:** adaugă o a treia categorie.  
5. Salvează foaia ca `Tema_AI1_L4_Prenume_Nume`.

---

## Ce urmează — Lecția 5
Aflăm ce sunt predicțiile și probabilitățile și de ce AI nu spune „sigur”, ci „cât de sigur”.

---

## Răspunsuri
- **Quiz scurt:** (1) punerea unui lucru într-o categorie; (2) un lucru observabil, de exemplu mărimea sau culoarea; (3) pentru că o singură trăsătură poate încurca, iar mai multe dau un răspuns mai bun; (4) numărul de răspunsuri corecte împărțit la total, apoi la procent; (5) să spună „nu sunt sigur” și să ceară verificarea unui om.  
- **Exemplul 2:** ajută mult: sunetul (dar nu în poză) și combinația mărime plus forma urechilor; ajută puțin: patru picioare (au ambele), culoarea blănii (variază la ambele), mărimea (variază mult la câini).  
- **Exercițiul B:** utile: număr de roți, are motor, are volan, viteza; inutilă: de exemplu „are culoare”.  
- **Exercițiul C:** 16 corecte, 80%.  
- **Exercițiul D:** modelul spune „nu sunt sigur” sau cere o nouă trăsătură; acceptați și „cere ajutor unui om”.  
- **Exercițiul E:** se uită la trăsături, adună puncte pentru fiecare categorie și o alege pe cea cu scorul mai mare.  
- **Notă pentru adultul care ajută:** nu folosiți fețe sau poze cu copii în partea opțională. Dacă nu este timp, treceți direct la Exemplul 6.  
