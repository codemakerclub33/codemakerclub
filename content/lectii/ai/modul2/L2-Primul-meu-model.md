# LECȚIA 2 — Primul meu model
### Planificăm, antrenăm și testăm cu un raport
**Modulul 2 · Antrenăm modele AI · 10+ · 2 ore**  
**Code Maker Club · AI Maker**

> Azi faci un model mai atent decât cel de data trecută: îl plănuiești pe hârtie, aduni exemple variate, îl antrenezi, îl testezi cu obiecte noi și scrii un raport cu rezultatele. Lucrăm la calculator, cu un adult prezent dacă se poate.  
> Proiect: **„Raportul modelului meu”** · folder: `Prenume_Nume_AI2_L2` (ex. `Ana_Pop_AI2_L2`)

---

## Ce facem azi
La finalul orei știi să plănuiești un model înainte să-l construiești, cunoști diferența dintre **setul de antrenare** și **setul de test**, calculezi acuratețea modelului tău și scrii un raport. Data trecută ai făcut un model repede, cu 10 exemple. Acum lucrăm ca niște cercetători: gândim înainte, măsurăm după și notăm tot pe foaie.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: regulile laboratorului și cei trei pași (**Exemplul 1**) |
| 10–25 | Planul modelului pe hârtie (**Exemplul 2**) |
| 25–55 | Adunăm exemplele (**Exemplul 3**) |
| 55–70 | Antrenăm modelul (**Exemplul 4**) |
| 70–95 | Testăm cu 10 situații și calculăm acuratețea (**Exemplul 5**) |
| 95–110 | Raportul modelului meu (**Exemplul 6**) |
| 110–120 | Recap și temă |

Exercițiile B–E și Provocarea sunt pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** calculator cu cameră web și browser actual, 4–6 obiecte mici de pe masă (două perechi diferite, de exemplu două creioane și două gume), foi A4, creioane colorate.  
**Fără calculator sau fără cameră:** adultul încarcă în unealtă poze cu obiecte, făcute în prealabil, sau refaceți pe hârtie „Mașina de sortat” din Modulul 1, cu set de antrenare și set de test.

---

## Cuvinte noi azi

| Cuvânt | Ce înseamnă | Exemplu |
|--------|-------------|---------|
| **Set de antrenare** | Exemplele din care învață modelul | 15 poze cu creionul și 15 cu guma |
| **Set de test** | Exemple noi, pe care modelul nu le-a văzut la antrenare | alt creion, altă gumă, ținute altfel |
| **Variație** | Același obiect arătat în moduri diferite | din față, din lateral, mai departe, în altă lumină |
| **Acuratețe** | Câte răspunsuri sunt corecte din total | 8 din 10 înseamnă 80% |

---

## Pas cu pas

**Partea 1 — Recapitulare**

### Exemplul 1 — Ne amintim regulile
Spune din memorie, pe rând, în perechi:
1. Cei trei pași ai unui model.  
2. Cele trei culori ale semaforului laboratorului, cu câte un exemplu.  
3. De ce nu închidem fila în timpul antrenării.

**Gata când:**  
- [ ] Am spus cei trei pași și cele trei culori  
- [ ] Am explicat de ce notăm rezultatele pe foaie  

**Partea 2 — Planul modelului**

### Exemplul 2 — Gândim înainte
Un model bun începe cu un plan. Pe o foaie scrie:

1. **Cele două clase** (de exemplu „creion” și „gumă”, sau „cană” și „sticlă”).  
2. **Variațiile** pe care le vei folosi: cel puțin 3 (de exemplu din față, din lateral, mai departe de cameră, în altă lumină, pe alt fundal).  
3. **Câte exemple** vei aduna pentru fiecare clasă: țintă 15.  
4. **Obiectele pentru test**: alege acum încă un obiect de fiecare fel (alt creion, altă gumă), pe care **nu** le folosești la antrenare.  

Un model nu poate fi testat cinstit cu exact aceleași obiecte din care a învățat. Ar fi ca la școală, când vezi întrebările de la test înainte de test.

**Gata când:**  
- [ ] Planul are 2 clase, cel puțin 3 variații și ținta de 15 exemple  
- [ ] Am pus deoparte obiectele pentru test  

**Partea 3 — Adunăm exemplele**

### Exemplul 3 — Exemple variate
Deschide Teachable Machine, alege proiectul cu imagini și redenumește cele două clase.

1. La prima clasă apasă „Webcam” și permite folosirea camerei.  
2. Ține apăsat butonul de înregistrare („Hold to Record”) o secundă sau două, cu obiectul într-o poziție. O apăsare lungă face multe poze aproape la fel.  
3. Schimbă poziția (față, lateral, mai departe, altă lumină) și apasă din nou.  
4. Repetă până ajungi la **15 exemple** pentru clasă. Numărul apare lângă clasă.  
5. Fă la fel pentru a doua clasă, cu **același număr** de exemple.

Regula de aur: **mai multe poziții, nu mai multe poze la fel**. Între apăsări schimbi poziția.

**Gata când:**  
- [ ] Fiecare clasă are 15 exemple  
- [ ] Pentru fiecare clasă am folosit cel puțin 3 poziții diferite  

**Partea 4 — Antrenăm**

### Exemplul 4 — Train Model
1. Verifică încă o dată: ambele clase au același număr de exemple.  
2. Apasă „Train Model”.  
3. **Nu închide și nu schimba fila** cât timp antrenează.  
4. Când se termină, apare „Preview”, cu răspunsul modelului în timp real.

Ține fiecare obiect folosit la antrenare în fața camerei și vezi dacă modelul îl recunoaște. Acestea sunt doar verificări rapide, nu testul cinstit.

**Gata când:**  
- [ ] Modelul este antrenat și apare „Preview”  
- [ ] Am făcut o verificare rapidă cu fiecare clasă  

**Partea 5 — Testăm**

### Exemplul 5 — Zece situații noi
Acum testul cinstit, cu obiectele puse deoparte și cu poziții noi. Completează pe foaie tabelul:

| Nr. | Ce arăt modelului | Ce a spus | Încredere | Corect? |
|-----|--------------------|-----------|-----------|---------|
| 1 | alt creion, din față | | | |
| 2 | alt creion, din lateral | | | |
| 3 | altă gumă, din față | | | |
| 4 | altă gumă, mai departe | | | |
| ... | ... | | | |

Fă **10 situații**, 5 pentru fiecare clasă. Numără câte sunt corecte. Acuratețea este numărul corectelor împărțit la 10, înmulțit cu 100. Dacă ai 8 corecte din 10, acuratețea este 80%.

Uită-te și la **greșeli**: ce obiect confundă modelul și în ce poziție?

**Gata când:**  
- [ ] Am completat tabelul cu 10 situații  
- [ ] Am calculat acuratețea și am notat o greșeală a modelului  

**Partea 6 — Raportul**

### Exemplul 6 — „Raportul modelului meu”
Pe o foaie A4 scrie:

1. **Titlu și nume.**  
2. **Planul:** cele 2 clase, variațiile și numărul de exemple.  
3. **Tabelul de test** din Exemplul 5, cu acuratețea.  
4. **Trei propoziții:** ce a mers bine, ce a greșit modelul și o schimbare pe care ai face-o la date ca să meargă mai bine.

**Gata când:**  
- [ ] Raportul are planul, tabelul și acuratețea  
- [ ] Am scris cele 3 propoziții, cu o schimbare propusă la date  

---

## Greșeli frecvente

| Ce crezi | De fapt | Corect |
|----------|---------|--------|
| „Testez cu aceleași obiecte” | Nu e un test cinstit | Folosesc obiecte noi, puse deoparte |
| „Mai multe poze la fel sunt mai bune” | Nu aduc nimic nou | Schimb poziția între apăsări |
| „O clasă poate avea 40 de exemple și alta 5” | Modelul se poate înclina spre clasa mare | Folosesc același număr în ambele clase |
| „Dacă recunoaște obiectele de la antrenare, e gata” | Asta nu este un test | Contează obiectele noi |
| „Acuratețea 100% pe zece teste înseamnă model perfect” | Testul a fost mic | Mai testez în alte situații |

---

## De făcut azi — „Raportul modelului meu”

### Minim vs Complet

| | Ce trebuie |
|--------|------------|
| **Minim** | Planul pe hârtie · modelul antrenat cu 2 clase de câte 15 exemple · tabelul de test cu cel puțin 6 situații |
| **Complet** | Minim + 10 situații de test · acuratețea calculată · cele 3 propoziții · Exercițiile B–E |

### Pasul 1 — Minim
**Exercițiul A — „Raportul modelului meu” (obligatoriu).** Completează raportul din Exemplul 6, cu planul, tabelul de test și acuratețea.

**→ Minim când:** modelul este antrenat și tabelul are cel puțin 6 situații de test completate.

### Pasul 2 — Complet

**Exercițiul B — Antrenare sau test?**  
Spune pentru fiecare dacă este în **setul de antrenare** sau în **setul de test**:
1. Pozele cu care înveți modelul.  
2. Un creion nou, arătat modelului după antrenare.  
3. Cele 15 poze cu guma.  
4. O gumă pe care modelul nu a mai văzut-o.

**Exercițiul C — Calculează acuratețea**  
1. Un model a ghicit corect 8 din 10 situații.  
2. Un model a ghicit corect 15 din 20 de situații.  
Care este acuratețea fiecăruia, în procente?

**Exercițiul D — Variații**  
Vrei un model care deosebește o **cană** de o **sticlă**. Scrie 5 variații pe care le-ai folosi la antrenare.

**Exercițiul E — Explică cu cuvintele tale**  
Răspunde în 3 propoziții: de ce testăm modelul cu exemple noi, nu cu cele de la antrenare?

**Gata când:**  
- [ ] Raportul este completat, cu plan, tabel și acuratețe  
- [ ] Ai antrenat și testat un model cu 2 clase de câte 15 exemple  
- [ ] Ai răspuns la Exercițiile B–E  
- [ ] Foaia se numește `Prenume_Nume_AI2_L2`  

---

## Bonus ★★★ — Provocare: Pariul familiei
*Doar dacă ai terminat Complet.*

Fă un joc în care familia ghicește cât de bun este modelul tău, apoi vezi cine a avut dreptate.

- [ ] Explici familiei ce clase are modelul tău (fără să arăți rezultatul testului)
- [ ] Fiecare persoană spune, înainte de test, câte din 10 situații crede că va ghici modelul
- [ ] Scrii predicțiile într-un tabel: nume, predicție
- [ ] Faci testul cu 10 situații și notezi rezultatul real
- [ ] Calculezi pentru fiecare cât de aproape a fost de rezultat (diferența)
- [ ] Scrii 2 propoziții: cine a fost cel mai aproape și de ce credeți că modelul a greșit unde a greșit
- [ ] Salvează foaia ca `Prenume_Nume_AI2_L2_Pariu`

---

## Recapitulare pe scurt

- Un model bun începe cu un **plan**: clase, variații, număr de exemple.  
- **Setul de antrenare** învață modelul, **setul de test** îl verifică.  
- Mai multe **poziții** sunt mai bune decât mai multe poze la fel.  
- **Acuratețea** este câte răspunsuri sunt corecte din total.  
- Notăm planul, testul și greșelile într-un **raport**.  

**Schema pe scurt (pe foaie):** plan → exemple variate → antrenare → test cu obiecte noi → acuratețe → raport

---

## Quiz scurt
- Ce este setul de antrenare?  
- Ce este setul de test?  
- De ce nu testăm cu aceleași obiecte de la antrenare?  
- Cum calculezi acuratețea?  
- De ce schimbăm poziția între apăsări?

---

## Temă
1. Termină raportul, dacă nu ai terminat.  
2. Alege două obiecte din casă și scrie planul unui model nou: clase, variații, număr de exemple, obiecte pentru test.  
3. Explică unui adult de ce testul trebuie făcut cu obiecte noi.  
4. Gândește-te la o situație în care modelul tău ar greși și scrie de ce.  
5. Salvează foaia ca `Prenume_Nume_AI2_L2_Tema`.

---

## Ce urmează — Lecția 3
Aflăm dacă mai multe exemple și exemple mai bune fac un model mai bun, cu o comparație pe care o măsurăm.

---

## Răspunsuri
- **Quiz scurt:** (1) exemplele din care învață modelul; (2) exemple noi, pe care modelul nu le-a văzut la antrenare; (3) pentru că ar fi un test copiat, nu ar arăta dacă modelul se descurcă și cu lucruri noi; (4) numărul de răspunsuri corecte împărțit la total, înmulțit cu 100; (5) pentru că poze aproape la fel nu aduc informație nouă, iar modelul învață mai bine din poziții diferite.  
- **Exemplul 1:** adună exemple, antrenează, testează; verde, galben, roșu cu exemple (de exemplu obiecte, mâna proprie fără salvare, fața altcuiva); pentru că unealta nu salvează singură.  
- **Exemplul 5:** rezultatele diferă de la model la model. Contează să fie notate cinstit, inclusiv greșelile.  
- **Exercițiul B:** (1) antrenare; (2) test; (3) antrenare; (4) test.  
- **Exercițiul C:** (1) 80%; (2) 75%.  
- **Exercițiul D:** de exemplu: din față, din lateral, culcată, mai departe de cameră, în altă lumină.  
- **Exercițiul E:** pentru că modelul trebuie să funcționeze și pe lucruri pe care nu le-a văzut; dacă testăm cu aceleași, nu aflăm dacă a învățat sau doar a ținut minte.  
- **Notă pentru adultul care ajută:** verificați că fiecare pereche are obiecte pentru test puse deoparte. Dacă o pereche are acuratețe foarte mică, nu o corectați imediat: lăsați-i să găsească singuri cauza (de exemplu un obiect doar dintr-un unghi). Nu salvați proiecte în Google Drive.  

**Bonus ★★★ — Pariul familiei:**

*Schema logicii:*
1. Spui familiei ce clase are modelul, fără să arăți testul.  
2. Fiecare scrie câte din 10 crede că va ghici modelul.  
3. Faci testul cu 10 situații și notezi rezultatul real.  
4. Pentru fiecare persoană calculezi diferența dintre predicție și rezultat.  
5. Cine are diferența cea mai mică a fost cel mai aproape.  
6. Scrii cine a câștigat și unde a greșit modelul.

*Exemplu de tabel:*

| Persoana | Predicția | Rezultatul real | Diferența |
|----------|-----------|------------------|-----------|
| mama | 9 | 8 | 1 |
| tata | 7 | 8 | 1 |
| bunica | 10 | 8 | 2 |
| eu | 6 | 8 | 2 |

*Exemplu de 2 propoziții:* „Mama și tata au fost cel mai aproape, cu diferența 1. Modelul a greșit la guma ținută departe de cameră, pentru că la antrenare nu am avut poze de departe.”

- Dacă doi oameni au aceeași diferență, câștigă amândoi.  
- Rezultatul real diferă de la model la model: contează să notezi cinstit și să explici greșelile.  
- Poți face pariul și între doi prieteni, cu același model.  
