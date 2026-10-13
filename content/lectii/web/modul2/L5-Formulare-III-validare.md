# LECȚIA 5 — Formulare III: validare
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Ce se întâmplă dacă vizitatorul lasă o casetă goală sau scrie într-o casetă pentru număr un cuvânt? Azi înveți să ceri **răspunsuri corecte**: câmpuri obligatorii, lungimi, limite și forma potrivită. Se numește **validare**.  
> Proiect: **„Înscriere la club, cu verificări”** · folder: `Prenume_Nume_W2_L5` (ex. `Ana_Pop_W2_L5`)

---

## Obiectiv
La finalul orei știi să faci un câmp obligatoriu cu `required`, să limitezi lungimea cu `minlength` și `maxlength`, să limitezi numerele cu `min` și `max`, să folosești `type="email"` și `type="url"` și să ceri o formă anume cu `pattern`.  
**Minim:** un formular cu un câmp obligatoriu, unul cu lungime limitată și unul numeric cu limite.  
**Ținta orei (Complet):** + `type="email"`, `pattern` cu explicația lui în `title`, o alegere `radio` obligatorie, o bifă obligatorie și o explicație pe foaie a limitelor validării.

## De ce contează
Fără validare, cineva poate trimite un formular gol sau cu un răspuns fără sens. Cu validare, browserul **te oprește** și îți spune ce să repari, înainte de trimitere.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `required` · lungimi (**Exemplele 1–2**) |
| 35–55 | Numere cu limite · `email` · `url` (**Exemplele 3–5**) |
| 55–75 | `pattern` și `title` (**Exemplul 6**) |
| 75–90 | Alegeri obligatorii (**Exemplul 7**) |
| 90–115 | Formularul complet · limitele validării (**Exemplele 8–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- `radio`: o alegere, același `name`; `checkbox`: mai multe alegeri.  
- `select` cu `option`: listă de alegere.  
- `value` este răspunsul păstrat.  
- Nu cerem și nu scriem date personale.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L5` și fișierul `index.html` cu scheletul complet  
- [ ] Creează un `<h1>` și un formular cu o casetă de text, `name="porecla"`, o etichetă legată și un buton „Trimite”  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**. Pentru fiecare exemplu, **încearcă să trimiți formularul greșit**, ca să vezi mesajul browserului.

---

## 2. Câmpuri obligatorii și lungimi

### Exemplul 1 — `required`: nu poți lăsa gol

```html
<form>
  <label for="porecla">Porecla ta (obligatoriu):</label>
  <input type="text" id="porecla" name="porecla" required>
  <button type="submit">Trimite</button>
</form>
```

Dacă apeși „Trimite” cu caseta goală, browserul **nu trimite** formularul. Îți arată un mesaj, de exemplu „Completează acest câmp”, și pune cursorul în casetă. Mesajul îl scrie browserul, deci poate arăta diferit în Chrome, Firefox sau Safari.

### Exemplul 2 — Lungimea: `minlength` și `maxlength`

```html
<label for="parola">Parola de probă (4–8 caractere):</label>
<input type="password" id="parola" name="parola" minlength="4" maxlength="8" required>
```

- `minlength="4"`: cel puțin 4 caractere;  
- `maxlength="8"`: cel mult 8 caractere. Browserul **nici nu te lasă** să scrii mai mult.

Scrie 2 caractere și apasă „Trimite”: primești un mesaj. Scrie 10: caseta oprește la 8.

> Reține: parola e tot **de probă**. Nu scriem parole reale.

**Gata când:**  
- [ ] Ai un câmp cu `required` și ai încercat să trimiți formularul gol  
- [ ] Ai un câmp cu `minlength` și `maxlength` și ai testat valori prea scurte  
- [ ] Poți explica ce se întâmplă când apeși „Trimite” cu un câmp obligatoriu gol  

---

## 3. Numere, email și adresă web

### Exemplul 3 — Numere cu limite: `min`, `max`, `step`

```html
<label for="varsta">Câți ani are animalul tău (0–30)?</label>
<input type="number" id="varsta" name="varsta" min="0" max="30" required>

<label for="nota">Nota ta pentru club (1–10, din 0,5 în 0,5):</label>
<input type="number" id="nota" name="nota" min="1" max="10" step="0.5">
```

- `min` și `max` dau limitele; `31` sau `-1` sunt respinse;  
- `step` este „pasul” numerelor permise: `step="0.5"` acceptă 1, 1.5, 2 și așa mai departe, nu 1.3. Fără `step`, sunt acceptate doar numere întregi.  
- La `type="number"` nu poți scrie litere.

### Exemplul 4 — `type="email"`

```html
<label for="email">Email de probă:</label>
<input type="email" id="email" name="email" placeholder="ana@example.com" required>
```

Cu `type="email"`, browserul verifică forma: trebuie să existe un `@` și un text înainte și după el. `ana@example.com` este acceptat, `ana` nu.

> Browserul verifică **doar forma**, nu dacă adresa există. Pentru exerciții folosim adrese de probă cu `example.com`, nu adrese reale.

### Exemplul 5 — `type="url"`

```html
<label for="site">Site-ul clubului:</label>
<input type="url" id="site" name="site" placeholder="https://ro.wikipedia.org">
```

La `type="url"` browserul cere o adresă completă, care începe cu `https://` (sau `http://`). `www.exemplu.ro` fără `https://` este respins.

**Încearcă tu (6 min)**  
- [ ] Adaugă un câmp `number` cu `min` și `max` și încearcă o valoare în afara limitelor  
- [ ] Adaugă un câmp `email` și încearcă `ana` (fără `@`), apoi `ana@example.com`  
- [ ] Adaugă un câmp `url` și încearcă o adresă fără `https://`  

---

## 4. Forma cerută: `pattern`

### Exemplul 6 — `pattern` și `title`

Uneori cerem o formă anume, de exemplu un **cod de club** din 3 litere mari și 2 cifre, ca `ABC12`.

```html
<label for="cod">Codul clubului (3 litere mari și 2 cifre, ca ABC12):</label>
<input type="text" id="cod" name="cod"
       pattern="[A-Z]{3}[0-9]{2}"
       title="Trei litere mari urmate de două cifre, de exemplu ABC12"
       required>
```

Citește `pattern="[A-Z]{3}[0-9]{2}"` bucată cu bucată:

| Bucată | Ce înseamnă |
|--------|-------------|
| `[A-Z]` | o literă mare de la A la Z |
| `{3}` | de 3 ori |
| `[0-9]` | o cifră de la 0 la 9 |
| `{2}` | de 2 ori |

Mesajul din `title` apare în fereastra de eroare, ca vizitatorul să înțeleagă ce formă se cere. Fără el, ar vedea doar „Potriviți formatul solicitat”.

Alte exemple de `pattern`:
- `[0-9]{4}` înseamnă „exact 4 cifre”;  
- `[a-z]+` înseamnă „una sau mai multe litere mici”.

> `pattern` este puternic, dar nu e nevoie să știi totul. În lecție folosim doar aceste forme simple.

**Gata când:**  
- [ ] Ai un câmp cu `pattern` și cu `title` explicativ  
- [ ] Ai încercat un cod greșit (de exemplu `abc12` cu litere mici) și unul corect (`ABC12`)  
- [ ] Poți citi `pattern="[0-9]{4}"` cu cuvinte  

---

## 5. Alegeri obligatorii

### Exemplul 7 — `required` la `radio`, `checkbox` și `select`

```html
<fieldset>
  <legend>Cum ai aflat de club?</legend>

  <input type="radio" id="prieteni" name="aflat" value="prieteni" required>
  <label for="prieteni">De la prieteni</label><br>

  <input type="radio" id="scoala" name="aflat" value="scoala">
  <label for="scoala">De la școală</label>
</fieldset>

<p>
  <input type="checkbox" id="regula" name="regula" value="da" required>
  <label for="regula">Am citit regulile clubului</label>
</p>

<label for="clasa">Grupa:</label>
<select id="clasa" name="grupa" required>
  <option value="">-- alege o grupă --</option>
  <option value="mici">Mici</option>
  <option value="mari">Mari</option>
</select>
```

- La `radio`, `required` pus pe **una** dintre variante cere ca din grup să fie bifată una.  
- La `checkbox`, vizitatorul **trebuie să bifeze** căsuța ca să poată trimite.  
- La `select`, prima opțiune trebuie să aibă `value=""`, ca browserul să înțeleagă că „-- alege --” nu este un răspuns.

---

## 6. Formularul complet

### Exemplul 8 — „Înscriere la club, cu verificări”

```html
<h1>Înscriere la clubul de animale</h1>

<form>
  <p>
    <label for="porecla">Porecla ta (3–15 caractere):</label><br>
    <input type="text" id="porecla" name="porecla" minlength="3" maxlength="15" required>
  </p>

  <p>
    <label for="varsta">Câți ani are animalul tău (0–30)?</label><br>
    <input type="number" id="varsta" name="varsta" min="0" max="30" required>
  </p>

  <p>
    <label for="email">Email de probă:</label><br>
    <input type="email" id="email" name="email" placeholder="ana@example.com" required>
  </p>

  <p>
    <label for="cod">Codul clubului (ca ABC12):</label><br>
    <input type="text" id="cod" name="cod"
           pattern="[A-Z]{3}[0-9]{2}"
           title="Trei litere mari urmate de două cifre, de exemplu ABC12"
           required>
  </p>

  <fieldset>
    <legend>Ce animal preferi?</legend>
    <input type="radio" id="pisica" name="animal" value="pisica" required>
    <label for="pisica">Pisică</label><br>
    <input type="radio" id="catel" name="animal" value="catel">
    <label for="catel">Cățel</label>
  </fieldset>

  <p>
    <input type="checkbox" id="regula" name="regula" value="da" required>
    <label for="regula">Am citit regulile clubului</label>
  </p>

  <p>
    <button type="submit">Trimite</button>
    <button type="reset">Șterge tot</button>
  </p>
</form>
```

Trimite formularul **greșit** în trei feluri diferite și citește mesajele. Apoi completează formularul corect și citește în adresă ce s-a trimis.

### Exemplul 9 — Ce nu poate face validarea din browser

Validarea din HTML este ca un **portar politicos**: oprește greșelile obișnuite și te ajută. Dar:
- nu verifică dacă o adresă de email **există**;  
- poate fi ocolită de cineva care știe să schimbe codul paginii (de exemplu cu DevTools);  
- nu înlocuiește verificarea făcută de **serverul** care primește datele.

Pe un site adevărat, **și browserul, și serverul** verifică datele. Noi folosim validarea din browser ca să ajutăm vizitatorul. Mai târziu, în Modulul 5, vom face formularul să verifice și cu JavaScript.

### Exemplul 10 — Greșeli frecvente

```text
<input type="text" id="cod" name="cod" pattern="[A-Z]{3}[0-9]{2}">
<input type="number" id="varsta" name="varsta" min="0" max="30" value="50">
```

Primul câmp nu are `title`, deci mesajul de eroare este neclar. Al doilea are valoarea de început `50`, care este în afara limitelor `0–30`: formularul s-ar bloca chiar dacă vizitatorul nu a schimbat nimic.

**Gata când:**  
- [ ] Ai completat formularul din Exemplul 8 și ai trimis formularul greșit în trei feluri diferite  
- [ ] Ai citit și ai explicat cu cuvintele tale mesajele browserului  
- [ ] Poți explica de ce validarea din browser nu este suficientă singură  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Înscriere la club, cu verificări” (obligatoriu)
Fă formularul unui **club imaginar ales de tine**, cu:
- un câmp text cu `required`, `minlength` și `maxlength`;  
- un câmp `number` cu `min`, `max`;  
- un câmp `email` cu adresă de probă în `placeholder`;  
- un câmp cu `pattern` și `title`;  
- o întrebare `radio` cu `required`;  
- o bifă `required`;  
- un `select` cu `required`;  
- butoanele „Trimite” și „Șterge tot”.

### Exercițiul B — Trimite greșit
Încearcă să trimiți formularul în cel puțin cinci feluri greșite diferite. Pe foaie, notează ce ai greșit și ce mesaj a apărut.

### Exercițiul C — Ce atribut?
Ce atribut folosești pentru: (1) „nu lăsa gol”; (2) „cel mult 20 de caractere”; (3) „număr între 1 și 5”; (4) „forma unei adrese de email”?

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** și repară greșelile:

```text
<input type="text" name="nume" minlength="10" maxlength="5" required>
<input type="number" name="nota" min="10" max="1">
<select name="grupa" required>
  <option value="mici">Mici</option>
  <option value="mari">Mari</option>
</select>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: la ce folosește validarea din HTML? De ce nu este suficientă singură?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L5` conține `index.html` cu formularul complet  
- [ ] Toate verificările funcționează (ai testat fiecare verificare cu valori greșite)  
- [ ] Ai notat pe foaie cinci greșeli de completare și mesajele lor  
- [ ] Codul este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile C–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă atributul `autofocus` la prima casetă și vezi ce face  
- [ ] Încearcă `type="tel"`, `type="date"` sau `type="time"` într-un formular fără date personale (de exemplu „Când începe filmul?”)  
- [ ] Adaugă `disabled` la o casetă și vezi ce face (caută „HTML disabled input”)  
- [ ] Cu profesorul, caută în DevTools cum poți șterge `required` și ce se întâmplă  

---

## Greșeli frecvente
1. **Ai uitat `required`** — câmpul poate rămâne gol.  
2. **`minlength` mai mare decât `maxlength`** — nimeni nu poate completa câmpul.  
3. **`min` mai mare decât `max`** — la fel.  
4. **Ai uitat `title` la `pattern`** — vizitatorul nu înțelege ce se cere.  
5. **La `select` cu `required` prima opțiune nu are `value=""`** — „-- alege --” este acceptat ca răspuns.  
6. **Ai pus `required` la toate casetele de `radio`** — este de ajuns la una.  
7. **Ai crezut că `email` verifică dacă adresa există** — verifică doar forma.  
8. **Ai uitat că validarea nu înlocuiește verificarea serverului**.  

---

## Recapitulare pe scurt
1. `required` cere ca un câmp să fie completat.  
2. `minlength` și `maxlength` limitează lungimea textului.  
3. `min`, `max` și `step` limitează numerele.  
4. `type="email"` și `type="url"` verifică forma.  
5. `pattern` cere o formă anume; `title` o explică.  
6. Validarea din browser ajută, dar nu este singura verificare.

## Quiz scurt
- Ce face `required`?  
- Cum limitezi un text la cel mult 10 caractere?  
- Ce citește `pattern="[0-9]{4}"`?  
- Ce verifică `type="email"`?  
- De ce nu este suficientă validarea din browser?

## Temă
Fă un formular „Rezervare la un spectacol imaginar”: poreclă (obligatorie), număr de bilete (1–5), alegerea zilei (`radio`) și o bifă „Am citit regulile”. Folosește `required` unde este nevoie și testează formularul. Salvează în `Prenume_Nume_W2_L5`.

## Ce urmează — Lecția 6
**Audio și video**: punem sunete și filme în pagină.

---

## Răspunsuri pentru profesor
- **Exercițiul C:** (1) `required`; (2) `maxlength="20"`; (3) `type="number"` cu `min="1"` și `max="5"`; (4) `type="email"`.  
- **Exercițiul D:** (1) `minlength="10"` este mai mare decât `maxlength="5"`: nimeni nu poate completa câmpul; (2) `min="10"` este mai mare decât `max="1"`; (3) prima opțiune a lui `select` trebuie să fie `<option value="">-- alege o grupă --</option>`, altfel `required` nu are efect.  
- **Exemplul 10:** `pattern` fără `title`; `value="50"` în afara limitelor.  
- **Exercițiul E:** validarea ajută la greșeli obișnuite și poate fi ocolită; serverul trebuie să verifice și el.  
- **Siguranță:** adrese de probă (`example.com`) și fără date personale.
