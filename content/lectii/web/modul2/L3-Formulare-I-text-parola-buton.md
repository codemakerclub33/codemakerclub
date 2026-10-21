# LECȚIA 3 — Formulare I: text, parolă, buton
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Când te înscrii la un joc sau scrii un mesaj pe un site, completezi un **formular**. Azi înveți să faci primul tău formular: casete de text, o casetă pentru parolă, un loc pentru mesaje lungi și butoane.  
> Proiect: **„Formular pentru clubul meu”** · folder: `Prenume_Nume_W2_L3` (ex. `Ana_Pop_W2_L3`)

---

## Obiectiv
La finalul orei știi să faci un formular cu `<form>`, să pui casete cu `<input>` de tip `text` și `password`, să le legi de o etichetă cu `<label>`, să faci o casetă mare cu `<textarea>` și să adaugi butoane.  
**Minim:** un formular cu două casete de text, fiecare cu etichetă, și un buton.  
**Ținta orei (Complet):** + o casetă pentru parolă, o casetă de mesaj, butonul de ștergere și o explicație pe foaie a ce vezi în adresa paginii după apăsarea butonului.

## De ce contează
Formularele sunt singurul mod prin care vizitatorul scrie ceva pe o pagină: nume, mesaj, căutare. Fără ele, paginile ar fi doar de citit.

---

## Siguranță: ce NU scriem în formulare
Formularele noastre sunt **de exercițiu**. Ele nu trimit nimic pe internet. Totuși:
- nu scriem **parole reale** (nici ale noastre, nici ale altcuiva), doar cuvinte de probă, de exemplu `test123`;  
- nu scriem adresa, telefonul sau numele complet;  
- pentru nume folosim o **poreclă** sau un prenume inventat.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `form` · `input` · `label` (**Exemplele 1–3**) |
| 35–55 | `name` · `placeholder` · parola (**Exemplele 4–5**) |
| 55–75 | `textarea` · butoane (**Exemplele 6–7**) |
| 75–95 | Aranjarea formularului · ce se întâmplă la trimitere (**Exemplele 8–9**) |
| 95–115 | Greșeli și proiect (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- Tabelele folosesc `table`, `tr`, `th` și `td`.  
- `colspan` și `rowspan` unesc celule.  
- `thead`, `tbody`, `tfoot` împart tabelul.  
- Tagurile se indentează cu 2 spații.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L3` și deschide folderul în VS Code  
- [ ] Creează `index.html` cu scheletul complet și pornește Live Server  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

---

## 2. Formularul și caseta de text

### Exemplul 1 — Primul formular

```html
<form>
  <label for="prenume">Prenumele tău:</label>
  <input type="text" id="prenume" name="prenume">
</form>
```

| Parte | Ce înseamnă |
|-------|-------------|
| `<form>` | învelește tot formularul |
| `<label>` | eticheta: textul care spune ce se scrie |
| `<input>` | caseta în care scrie vizitatorul |
| `type="text"` | caseta primește text |
| `id` | numele unic al casetei în pagină |
| `name` | numele sub care se păstrează ce scrie vizitatorul |

`<input>` este un tag **fără închidere**, ca `<img>` sau `<br>`.

### Exemplul 2 — Eticheta și caseta se leagă între ele

```html
<label for="prenume">Prenumele tău:</label>
<input type="text" id="prenume" name="prenume">
```

Valoarea din `for` din etichetă este **aceeași** cu `id` din casetă: `prenume`. Acum, dacă apeși pe cuvintele „Prenumele tău”, cursorul intră în casetă. Fără legătura asta, eticheta ar fi doar text. Un cititor de ecran citește eticheta când ajunge la casetă.

> Fiecare `id` trebuie să fie **unic** în pagină. Nu pune același `id` la două casete.

### Exemplul 3 — Text care ajută: `placeholder`

```html
<label for="porecla">Porecla ta:</label>
<input type="text" id="porecla" name="porecla" placeholder="de exemplu: Ninja">
```

`placeholder` („text-loc”) arată un exemplu gri în casetă, care dispare când scrii. Nu înlocuiește eticheta: eticheta rămâne mereu vizibilă.

**Gata când:**  
- [ ] Ai făcut un formular cu o casetă de text și o etichetă legată prin `for` și `id`  
- [ ] Ai verificat că apăsarea pe etichetă pune cursorul în casetă  
- [ ] Ai adăugat un `placeholder` care dă un exemplu  

---

## 3. `name`, parola și mesajele lungi

### Exemplul 4 — De ce există `name`

Când formularul se trimite, fiecare casetă trimite perechea **nume = valoare**. Numele este cel din `name`.

```html
<form>
  <label for="animal">Animalul tău preferat:</label>
  <input type="text" id="animal" name="animal">
  <button type="submit">Trimite</button>
</form>
```

Scrie `pisică` și apasă butonul. Privește **adresa paginii** din browser: apare ceva ca `index.html?animal=pisic%C4%83`. Vezi numele casetei (`animal`) și ce ai scris. Diacriticele se transformă în coduri, dar înțelesul rămâne.

> Dacă o casetă nu are `name`, valoarea ei nu apare deloc.

### Exemplul 5 — Parola

```html
<label for="parola">Parola de probă:</label>
<input type="password" id="parola" name="parola">
```

La `type="password"`, literele sunt înlocuite cu puncte, ca să nu le vadă cineva peste umăr. **Atenție:** în formularul nostru de exercițiu parola apare totuși în adresa paginii (vezi mai jos), de aceea scriem doar cuvinte de probă.

### Exemplul 6 — Mesaje lungi: `textarea`

Pentru mesaje pe mai multe rânduri folosești `<textarea>`:

```html
<label for="mesaj">Mesajul tău:</label>
<textarea id="mesaj" name="mesaj" rows="4" cols="30"></textarea>
```

- `rows="4"` înseamnă patru rânduri vizibile; `cols="30"` înseamnă 30 de caractere în lățime.  
- `<textarea>` **are** tag de închidere. Ce scrii între taguri apare ca text de început.

**Încearcă tu (6 min)**  
- [ ] Adaugă o a doua casetă de text cu `name` diferit  
- [ ] Adaugă o casetă `password` cu o parolă de probă  
- [ ] Adaugă un `<textarea>` cu `rows` și `cols`  

---

## 4. Butoane și aranjare

### Exemplul 7 — Trei feluri de butoane

```html
<button type="submit">Trimite</button>
<button type="reset">Șterge tot</button>
<button type="button">Nu face nimic încă</button>
```

| Buton | Ce face |
|-------|---------|
| `type="submit"` | trimite formularul |
| `type="reset"` | șterge ce ai scris în toate casetele |
| `type="button"` | un buton simplu, care nu face nimic singur (în Modulul 4 îl vei face să facă lucruri cu JavaScript) |

Textul dintre `<button>` și `</button>` este ce apare pe buton.

### Exemplul 8 — Formular ordonat

Dacă pui totul una lângă alta, apar înghesuite. Învelește fiecare pereche etichetă + casetă într-un `<p>`:

```html
<h1>Înscriere la clubul meu</h1>

<form>
  <p>
    <label for="porecla">Porecla ta:</label><br>
    <input type="text" id="porecla" name="porecla" placeholder="de exemplu: Ninja">
  </p>

  <p>
    <label for="parola">Parola de probă:</label><br>
    <input type="password" id="parola" name="parola">
  </p>

  <p>
    <label for="mesaj">De ce vrei să intri în club?</label><br>
    <textarea id="mesaj" name="mesaj" rows="4" cols="30"></textarea>
  </p>

  <p>
    <button type="submit">Trimite</button>
    <button type="reset">Șterge tot</button>
  </p>
</form>
```

`<br>` duce caseta pe rândul de sub etichetă.

### Exemplul 9 — Ce se întâmplă când apeși „Trimite”

Formularul tău nu are încă un loc unde să trimită datele. De aceea, browserul **reîncarcă aceeași pagină** și pune datele în adresă, după semnul `?`, despărțite de `&`:

```text
index.html?porecla=Ninja&parola=test123&mesaj=Vreau+sa+invat
```

Observă:
- fiecare casetă apare cu `name` și valoarea ei;  
- **parola se vede în adresă**!  

Site-urile reale trimit parolele altfel: nu le pun în adresă (folosesc metoda `post`) și le protejează pe un site cu `https`, adică cu lacăt în adresă. Pentru exercițiile noastre, **scriem doar parole de probă**. Mai târziu, în Modulul 5, vei învăța ca formularul să verifice datele cu JavaScript.

### Exemplul 10 — Greșeli frecvente

```text
<label for="nume">Numele:</label>
<input type="text" id="prenume" name="prenume">
```

Aici `for` este `nume`, iar `id` este `prenume`: nu se potrivesc, deci eticheta nu este legată de casetă. Corect:

```html
<label for="prenume">Prenumele:</label>
<input type="text" id="prenume" name="prenume">
```

**Gata când:**  
- [ ] Ai apăsat „Trimite” și ai găsit în adresa paginii numele și valorile din casete  
- [ ] Poți explica de ce nu scriem parole reale  
- [ ] Ai găsit greșeala din Exemplul 10 fără să te uiți la rezolvare  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Înscriere la clubul meu” (obligatoriu)
Fă formularul din Exemplul 8 pentru **un club imaginar ales de tine** (de exemplu clubul animalelor, clubul de desen, clubul de fotbal). Trebuie să aibă:
- un `<h1>` și un `<form>`;  
- cel puțin două casete de text, o casetă `password` (cu parolă de probă), un `<textarea>` și cele două butoane;  
- toate casetele cu etichete legate prin `for` și `id`;  
- cel puțin un `placeholder` care dă un exemplu.

### Exercițiul B — Ce vezi în adresă?
Completează formularul cu date inventate, apasă „Trimite” și copiază pe foaie ce apare în adresa paginii, după `?`. Marchează numele casetelor și valorile.

### Exercițiul C — Ce tip?
Pentru fiecare, alege `text`, `password` sau `textarea`: (1) porecla; (2) parola de probă; (3) povestea unei zile; (4) animalul preferat.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** și repară greșelile:

```text
<form>
  <label for="animale">Animalul tău:</label>
  <input type="text" id="animal">
  <label for="mesaj">Mesaj:</label>
  <textarea id="mesaj" name="mesaj" rows="4" cols="30">
  <button type="submit">Trimite</button>
</form>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: la ce folosește eticheta `<label>` și de ce `for` trebuie să fie la fel cu `id`? De ce nu scriem parole reale în formularele de exercițiu?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L3` conține `index.html` cu formularul complet  
- [ ] Toate casetele au etichete legate, iar butoanele merg  
- [ ] Ai notat pe foaie ce se vede în adresă după trimitere  
- [ ] Codul este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile C–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă o casetă `<input type="text" value="Ana">`: ce face `value`?  
- [ ] Adaugă un titlu mic cu `<h2>` pentru fiecare grup de întrebări  
- [ ] Încearcă `<input type="text" size="40">` și vezi cum se schimbă lățimea  
- [ ] Deschide DevTools (**F12**), fila **Elements**, și caută formularul: vezi cum este legată eticheta de casetă  

---

## Greșeli frecvente
1. **`for` diferit de `id`** — eticheta nu mai este legată de casetă.  
2. **Același `id` pe două casete** — fiecare `id` este unic.  
3. **Ai uitat `name`** — valoarea nu apare la trimitere.  
4. **Ai uitat `</textarea>`** — tot restul paginii intră în casetă.  
5. **Ai pus `/` la `<input>`** sau ai scris `</input>` — `input` nu are închidere.  
6. **Ai folosit `placeholder` în loc de etichetă** — eticheta trebuie să fie vizibilă tot timpul.  
7. **Ai scris o parolă reală în formular** — folosește doar o parolă de probă.  
8. **Ai pus butonul în afara formularului** — nu trimite nimic.  

---

## Recapitulare pe scurt
1. `<form>` învelește formularul.  
2. `<label for="x">` se leagă de `<input id="x">`.  
3. `type="text"` pentru text, `type="password"` pentru parolă.  
4. `<textarea>` este pentru mesaje lungi și are tag de închidere.  
5. `name` dă numele sub care se păstrează ce scrie vizitatorul.  
6. Butoane: `submit` trimite, `reset` șterge, `button` nu face nimic singur.  
7. Fără un loc de trimitere, pagina se reîncarcă și datele apar în adresă.

## Quiz scurt
- Cum legi o etichetă de o casetă?  
- Ce face `type="password"`?  
- Care este diferența dintre `submit` și `reset`?  
- De ce este important `name`?  
- De ce nu scriem parole reale în formularele de exercițiu?

## Temă
Fă un formular „Fișa prietenului meu” pentru un prieten **imaginar**: poreclă, hobby, mesaj. Pune în el un buton de trimitere și unul de ștergere și salvează în `Prenume_Nume_W2_L3`.

## Ce urmează — Lecția 4
Formulare II: **alegeri**. Butoane rotunde, căsuțe bifate, liste de unde alegi.

---

## Răspunsuri
- **Quiz scurt:** (1) valoarea `for` din `<label>` este la fel cu `id` din `<input>`; (2) înlocuiește literele cu puncte, ca să nu le vadă cineva peste umăr; (3) `submit` trimite formularul, `reset` șterge ce ai scris în toate casetele; (4) `name` este numele sub care se trimite valoarea casetei (perechea nume = valoare); fără el valoarea nu apare; (5) parola apare în adresa paginii și poate fi văzută, deci scriem doar parole de probă.  
- **Exercițiul C:** (1) `text`; (2) `password`; (3) `textarea`; (4) `text`.  
- **Exercițiul D:** (1) `for="animale"` nu se potrivește cu `id="animal"`; (2) caseta `animal` nu are `name`; (3) `<textarea>` nu este închis cu `</textarea>`.  
- **Exemplul 10:** `for="nume"` nu se potrivește cu `id="prenume"`.  
- **Siguranță:** verificați că nimeni nu scrie parole sau date reale în exerciții.
