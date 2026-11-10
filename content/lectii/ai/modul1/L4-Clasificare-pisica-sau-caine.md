# LECȚIA 4 — Clasificare: pisică sau câine?
### Trăsături, scoruri și răspunsuri nesigure
**Modulul 1 · AI pentru copii · 2 ore**  
**Code Maker Club · AI Explorer**

> Azi afli cum alege un model între două sau mai multe categorii: ce sunt **trăsăturile**, cum se dă un **scor** și ce se întâmplă când modelul nu este sigur. Facem un clasificator de hârtie.  
> Proiect: **„Clasificatorul meu de hârtie”** · folder: `Prenume_Nume_AI1_L4` (ex. `Ana_Pop_AI1_L4`)

---

## Ce facem azi
La finalul orei știi ce înseamnă **clasificare**, ce sunt **trăsăturile**, cum folosește un model scorurile pentru a alege și cum numeri câte răspunsuri sunt corecte. Multe lucruri pe care le face AI sunt clasificări: spune dacă un email este spam sau nu, ce animal este într-o poză, ce emoție are o față desenată. Dacă înțelegi clasificarea, înțelegi mare parte din AI.

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

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** foi A4, creioane, riglă, cartonașe cu desene de pisici și câini (le desenezi tu sau le primești de la un adult)

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Clasificare** | Pui un lucru într-o categorie | pisică sau câine, spam sau mesaj normal |
| **Trăsătură** | Un lucru pe care îl poți observa | mărimea, culoarea, forma urechilor |
| **Scor** | Câte puncte are fiecare categorie | pisică 3, câine 2 |
| **Acuratețe** | Câte răspunsuri sunt corecte din total | 8 din 10 înseamnă 80% |

---

## Pas cu pas

**Partea 1 — Ce este clasificarea?**  
**Clasificarea** înseamnă să pui un lucru într-o categorie: pisică sau câine, spam sau mesaj normal, măr sau banană. Modelul se uită la **trăsături**: lucruri pe care le poate observa, ca mărimea, culoarea sau forma urechilor.

### Exemplul 1 — Cele 20 de întrebări, varianta AI
Un coleg se gândește la un animal: pisică sau câine. Tu poți pune doar întrebări cu răspuns **da** sau **nu** despre trăsături: „Are urechile ascuțite?”, „Este mai mare decât o pisică?” Câte întrebări îți trebuie ca să ghicești?

**Gata când:**  
- [ ] Am pus doar întrebări cu da sau nu despre trăsături  
- [ ] Am numărat câte întrebări mi-au trebuit  

### Exemplul 2 — Alegem trăsăturile
Pentru a deosebi o pisică de un câine, care trăsături ajută mult și care ajută puțin?

| Trăsătură | Ajută mult? |
|-----------|-------------|
| Are patru picioare | |
| Latră sau miaună | |
| Culoarea blănii | |
| Mărimea | |

Completează cu „mult” sau „puțin” și explică. (Patru picioare au amândoi, deci nu ajută. Sunetul ajută mult, dar într-o poză nu se aude.)

**Gata când:**  
- [ ] Am completat tabelul cu „mult” sau „puțin”  
- [ ] Pot explica de ce „patru picioare” nu ajută  

**Partea 2 — Scoruri**

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

**Gata când:**  
- [ ] Am adunat punctele pentru fiecare categorie  
- [ ] Pot spune de ce modelul nu e foarte sigur la 3 contra 2  

**Partea 3 — Când modelul nu este sigur**

### Exemplul 4 — Zona gri
Ce faci când scorul este egal sau foarte apropiat (de exemplu 3 la 3)? Un model bun poate spune „nu sunt sigur” și cere un om să verifice.

Discutăm în perechi: într-un spital, unde un model ajută un medic, ce ar trebui să facă modelul când nu este sigur?

**Gata când:**  
- [ ] Am spus ce face un model bun când scorurile sunt egale  
- [ ] Am dat un motiv pentru care un om trebuie să verifice  

**Partea 4 — Testăm și numărăm**

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

**Gata când:**  
- [ ] Am clasificat cele 10 cartonașe și am numărat corectele  
- [ ] Am notat separat pisicile luate drept câini și invers  

**Partea 5 — Clasificatorul meu de hârtie**

### Exemplul 6 — Construiesc modelul
Alege două categorii (de exemplu „fruct” și „legumă”, sau „animal de casă” și „animal sălbatic”) sau trei categorii dacă vrei o provocare.

1. Alege 3 trăsături potrivite.  
2. Fă o foaie cu un tabel de scor, ca în Exemplul 3.  
3. Desenează 6 exemple noi și clasifică exemplele cu foaia ta.  
4. Un coleg verifică și calculează acuratețea.

**Opțional, cu un adult:** există instrumente gratuite în browser (de exemplu Teachable Machine) care antrenează un model cu obiecte din cameră. Se face doar cu un adult, cu obiecte (nu cu fețe sau poze personale) și fără cont la copil. Dacă nu ai calculator, sari peste.

**Gata când:**  
- [ ] Clasificatorul are 2 categorii, 3 trăsături și tabel de scor  
- [ ] Un coleg a verificat cele 6 exemple  

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

## De făcut azi — „Clasificatorul meu de hârtie”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un clasificator de hârtie cu 2 categorii, 3 trăsături și tabel de scor |
| **Complet** | Minim + 6 exemple clasificate · acuratețea calculată · ce face modelul când nu e sigur · Exercițiile B–E |

### Pasul 1 — Minim
Fă foaia din Exemplul 6: alege 2 categorii, 3 trăsături și desenează tabelul de scor.

**→ Minim când:** foaia are categoriile, trăsăturile și tabelul de scor.

### Pasul 2 — Complet

**Exercițiul A — „Clasificatorul meu de hârtie” (obligatoriu)**  
Foaia cu 2 categorii, 3 trăsături, tabelul de scor, 6 exemple clasificate și acuratețea calculată.

**Exercițiul B — Trăsături bune**  
Pentru a deosebi „mașină” de „bicicletă”, alege 3 trăsături utile și una inutilă.

**Exercițiul C — Calculează acuratețea**  
Un model a clasificat 20 de poze și a greșit 4. Câte sunt corecte? Ce procent este?

**Exercițiul D — Ce face modelul?**  
Scorurile sunt: pisică 4, câine 4. Ce ar trebui să facă modelul? Scrie două variante.

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: cum alege un model între „pisică” și „câine”?

**Gata când:**  
- [ ] Clasificatorul are 2 categorii, 3 trăsături și tabel de scor  
- [ ] Ai clasificat 6 exemple și ai calculat acuratețea  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Ai spus ce face modelul când nu este sigur  
- [ ] Foaia se numește `Prenume_Nume_AI1_L4`  

---

## Bonus ★★★ — Provocare: Clasificatorul cu trei categorii
*Doar dacă ai terminat Complet.*

Fă un clasificator care alege între trei categorii și care știe să spună „nu sunt sigur”.

- [ ] Ai 3 categorii (de exemplu pisică, câine, iepure) și cel puțin 4 trăsături, fiecare votând pentru o categorie
- [ ] Tabelul de scor are câte o coloană pentru fiecare categorie
- [ ] Ai o regulă scrisă: dacă primele două scoruri sunt **egale**, modelul spune „nu sunt sigur”
- [ ] Clasifici 8 animale (desenate sau descrise) și notezi: corecte, greșite și „nu sunt sigur”
- [ ] Calculezi acuratețea din cele 8 și, separat, din cele la care modelul a răspuns
- [ ] Găsești un animal pe care îl încurcă și scrii de ce
- [ ] Salvează foaia ca `Prenume_Nume_AI1_L4_Trei`

---

## Recapitulare pe scurt

- **Clasificarea** pune un lucru într-o categorie.  
- Modelul se uită la **trăsături** și adună **scoruri**.  
- Când scorurile sunt apropiate, modelul este **nesigur**.  
- **Acuratețea** arată câte răspunsuri au fost corecte din total.  
- Contează și ce fel de greșeli face modelul.  

**Schema pe scurt (pe foaie):** trăsături → scoruri pe categorii → alegem cel mai mare scor · scoruri egale → „nu sunt sigur” → verifică un om

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
4. Adaugă o a treia categorie.  
5. Salvează foaia ca `Prenume_Nume_AI1_L4_Tema`.

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

**Bonus ★★★ — Clasificatorul cu trei categorii:**

*Schema logicii:*
1. Alegi categoriile pisică, câine și iepure și 4 trăsături, fiecare votând pentru o categorie.  
2. Pentru fiecare animal bifezi trăsăturile pe care le are și aduni punctele pe categorii.  
3. Cea mai mare sumă câștigă. Dacă primele două sume sunt egale, scrii „nu sunt sigur”.  
4. Compari cu realitatea și numeri corecte, greșite și nesigure.  
5. Calculezi acuratețea de două ori: din toate cele 8 și din cele la care modelul a răspuns.

*Tabelul de voturi:*

| Trăsătură | Votează pentru |
|-----------|----------------|
| Urechi foarte lungi | iepure |
| Sare în loc să alerge | iepure |
| Coadă lungă și subțire | pisică |
| Corp mare, labe mari | câine |

*Exemplu cu 8 animale:*

| Nr. | Animalul | Trăsături prezente | Scor (pisică / câine / iepure) | Răspuns | Real | Rezultat |
|-----|----------|--------------------|--------------------------------|---------|------|----------|
| 1 | iepure care sare | urechi lungi, sare | 0 / 0 / 2 | iepure | iepure | corect |
| 2 | pisică obișnuită | coadă lungă | 1 / 0 / 0 | pisică | pisică | corect |
| 3 | câine mare | corp mare | 0 / 1 / 0 | câine | câine | corect |
| 4 | pisică mare, cu coadă lungă | coadă lungă, corp mare | 1 / 1 / 0 | nu sunt sigur | pisică | nesigur |
| 5 | iepure care stă | urechi lungi | 0 / 0 / 1 | iepure | iepure | corect |
| 6 | câine mic, cu coadă subțire | coadă lungă | 1 / 0 / 0 | pisică | câine | greșit |
| 7 | iepure uriaș | urechi lungi, corp mare | 0 / 1 / 1 | nu sunt sigur | iepure | nesigur |
| 8 | pisică cu pete | coadă lungă | 1 / 0 / 0 | pisică | pisică | corect |

- Rezultat: 5 corecte, 1 greșit, 2 nesigure.  
- Acuratețe din toate cele 8: 5 din 8, adică aproximativ 63%.  
- Acuratețe din cele la care a răspuns (6): 5 din 6, adică aproximativ 83%.  
- Animalul încurcat: câinele mic cu coadă subțire, pentru că singura lui trăsătură a votat pentru pisică. Lipsește o trăsătură care să deosebească mai bine câinele de pisică.  
- Numerele pot ieși altfel la alt animal sau alte trăsături: contează să explice ce a încurcat modelul.  
