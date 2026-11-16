# LECȚIA 5 — Paznicul de la intrare
### Formulare: verificarea datelor
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Ce se întâmplă dacă vizitatorul lasă o casetă goală sau scrie într-o casetă pentru număr un cuvânt? Azi înveți să ceri **răspunsuri corecte**: câmpuri obligatorii, lungimi, limite și forma potrivită. Se numește **validare**, iar formularul tău devine un paznic politicos la intrarea unui muzeu.  
> Proiect: **„Rezervare de bilete la muzeu”** · folder: `Prenume_Nume_W2_L5` (ex. `Ana_Pop_W2_L5`)

---

## Ce facem azi
La final ai un formular de **rezervare de bilete la un muzeu imaginar**, care nu pleacă până nu este completat corect. Știi să faci un câmp obligatoriu cu `required`, să limitezi lungimea cu `minlength` și `maxlength`, să limitezi numerele cu `min`, `max` și `step`, să folosești `type="email"` și `type="url"` și să ceri o formă anume cu `pattern`. Fără validare, cineva poate trimite un formular gol sau cu un răspuns fără sens. Cu validare, browserul **te oprește** și îți spune ce să repari, înainte de trimitere.

> **Siguranță:** folosim adrese de probă cu `example.com` și o poreclă în loc de nume. Nu scriem email, telefon sau adresă reale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul · aducem sondajul despre articol |
| 15–35 | `required` · lungimi (**Exemplele 1–2**) |
| 35–55 | Numere cu limite · `email` · `url` (**Exemplele 3–4**) |
| 55–75 | `pattern` și `title` (**Exemplul 5**) |
| 75–90 | Alegeri obligatorii (**Exemplul 6**) |
| 90–115 | Ce nu poate face validarea · formularul complet (**Exemplele 7–8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `required` | Câmpul nu poate rămâne gol | `<input type="text" required>` |
| `minlength` / `maxlength` | Lungimea minimă și maximă a textului | `minlength="3" maxlength="15"` |
| `min` / `max` / `step` | Limitele și pasul unui număr | `<input type="number" min="1" max="5">` |
| `type="email"` / `type="url"` | Verifică forma unei adrese de email sau web | `<input type="email">` |
| `pattern` și `title` | Cere o formă anume și o explică | `pattern="[A-Z]{3}[0-9]{2}"` |

---

## 1. Recapitulare rapidă

- `radio`: o alegere, același `name`; `checkbox`: mai multe alegeri.  
- `select` cu `option`: listă de alegere.  
- `value` este răspunsul păstrat.  
- Nu cerem și nu scriem date personale.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L5` și fișierul `index.html` cu scheletul complet  
- [ ] Copiază în folder pagina `sondaj.html` din lecția trecută  
- [ ] Deschide-o cu Live Server, trimite-o goală și vezi ce se întâmplă: azi o facem să se apere singură  
- [ ] Creează un `<h1>` și un formular cu o casetă de text, `name="porecla"`, o etichetă legată și un buton „Trimite”  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, iar la mini-proiect scriem pagina completă. Pentru fiecare exemplu, **încearcă să trimiți formularul greșit**, ca să vezi mesajul browserului.

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

**Încearcă tu (9 min)**  
- [ ] Adaugă un câmp cu `required` și încearcă să trimiți formularul gol  
- [ ] Adaugă un câmp cu `minlength` și `maxlength` și testează valori prea scurte  
- [ ] Explică ce se întâmplă când apeși „Trimite” cu un câmp obligatoriu gol  
- [ ] În `sondaj.html`, pune `required` la întrebarea `radio` și la `select`  
- [ ] Adaugă o casetă „Porecla” cu `required`, `minlength="3"` și `maxlength="15"`  

---

## 3. Numere, email și adresă web

### Exemplul 3 — Numere cu limite: `min`, `max`, `step`

```html
<label for="bilete">Câte bilete (1–5)?</label>
<input type="number" id="bilete" name="bilete" min="1" max="5" required>

<label for="nota">Nota ta pentru muzeu (1–10, din 0,5 în 0,5):</label>
<input type="number" id="nota" name="nota" min="1" max="10" step="0.5">
```

- `min` și `max` dau limitele; `6` sau `0` sunt respinse;  
- `step` este „pasul” numerelor permise: `step="0.5"` acceptă 1, 1.5, 2 și așa mai departe, nu 1.3. Fără `step`, sunt acceptate doar numere întregi.  
- La `type="number"` nu poți scrie litere.

### Exemplul 4 — `type="email"` și `type="url"`

```html
<label for="email">Email de probă:</label>
<input type="email" id="email" name="email" placeholder="ana@example.com" required>

<label for="site">Site-ul muzeului:</label>
<input type="url" id="site" name="site" placeholder="https://ro.wikipedia.org">
```

- Cu `type="email"`, browserul verifică forma: trebuie să existe un `@` și un text înainte și după el. `ana@example.com` este acceptat, `ana` nu.  
- La `type="url"` browserul cere o adresă completă, care începe cu `https://` (sau `http://`). `www.exemplu.ro` fără `https://` este respins.

> Browserul verifică **doar forma**, nu dacă adresa există. Pentru exerciții folosim adrese de probă cu `example.com`, nu adrese reale.

**Încearcă tu (9 min)**  
- [ ] Adaugă un câmp `number` cu `min` și `max` și încearcă o valoare în afara limitelor  
- [ ] Adaugă un câmp `email` și încearcă `ana` (fără `@`), apoi `ana@example.com`  
- [ ] Adaugă un câmp `url` și încearcă o adresă fără `https://`  
- [ ] În `sondaj.html`, pune o notă `number` între 1 și 10, cu `min` și `max`  
- [ ] Adaugă „Adresa articolului” cu `type="url"` și verifică-o cu adresa de pe Wikipedia  

---

## 4. Forma cerută: `pattern`

### Exemplul 5 — `pattern` și `title`

Uneori cerem o formă anume, de exemplu un **cod de rezervare** din 3 litere mari și 2 cifre, ca `MUZ12`.

```html
<label for="cod">Codul rezervării (3 litere mari și 2 cifre, ca MUZ12):</label>
<input type="text" id="cod" name="cod"
       pattern="[A-Z]{3}[0-9]{2}"
       title="Trei litere mari urmate de două cifre, de exemplu MUZ12"
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

**Încearcă tu (8 min)**  
- [ ] Adaugă un câmp cu `pattern` și cu `title` explicativ  
- [ ] În `sondaj.html`, cere porecla cu `pattern` doar din litere, cu `title` care spune regula  
- [ ] Încearcă un cod greșit (de exemplu `muz12` cu litere mici) și unul corect (`MUZ12`)  
- [ ] Citește `pattern="[0-9]{4}"` cu cuvinte  

---

## 5. Alegeri obligatorii

### Exemplul 6 — `required` la `radio`, `checkbox` și `select`

```html
<fieldset>
  <legend>Ce zi preferi?</legend>

  <input type="radio" id="sambata" name="zi" value="sambata" required>
  <label for="sambata">Sâmbătă</label><br>

  <input type="radio" id="duminica" name="zi" value="duminica">
  <label for="duminica">Duminică</label>
</fieldset>

<p>
  <input type="checkbox" id="regula" name="regula" value="da" required>
  <label for="regula">Am citit regulile muzeului</label>
</p>

<label for="ora">Ora vizitei:</label>
<select id="ora" name="ora" required>
  <option value="">-- alege o oră --</option>
  <option value="10">10:00</option>
  <option value="12">12:00</option>
  <option value="14">14:00</option>
</select>
```

- La `radio`, `required` pus pe **una** dintre variante cere ca din grup să fie bifată una.  
- La `checkbox`, vizitatorul **trebuie să bifeze** căsuța ca să poată trimite.  
- La `select`, prima opțiune trebuie să aibă `value=""`, ca browserul să înțeleagă că „-- alege --” nu este un răspuns.

**Încearcă tu (8 min)**  
- [ ] Fă un grup `radio` cu `required` și o bifă `required`  
- [ ] Încearcă să trimiți `sondaj.html` greșit în trei feluri și notează mesajele într-un comentariu  
- [ ] Adaugă un `select` cu `required` și prima opțiune cu `value=""`  

---

## 6. Mini-proiect

### Exemplul 7 — Ce nu poate face validarea din browser

Validarea din HTML este ca un **portar politicos**: oprește greșelile obișnuite și te ajută. Dar:
- nu verifică dacă o adresă de email **există**;  
- poate fi ocolită de cineva care știe să schimbe codul paginii (de exemplu cu DevTools);  
- nu înlocuiește verificarea făcută de **serverul** care primește datele.

Pe un site adevărat, **și browserul, și serverul** verifică datele. Noi folosim validarea din browser ca să ajutăm vizitatorul. Mai târziu, în Modulul 5, vom face formularul să verifice și cu JavaScript.

### Exemplul 8 — „Rezervare de bilete la muzeu”

Acesta este proiectul **complet**, cu tot scheletul paginii. Salvează-l în `index.html` și scrie-l singur, bucată cu bucată.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rezervare de bilete la muzeu</title>
</head>
<body>
  <h1>Rezervare de bilete la muzeu</h1>

  <form>
    <p>
      <label for="porecla">Porecla ta (3–15 caractere):</label><br>
      <input type="text" id="porecla" name="porecla" minlength="3" maxlength="15" required>
    </p>

    <p>
      <label for="bilete">Câte bilete (1–5)?</label><br>
      <input type="number" id="bilete" name="bilete" min="1" max="5" required>
    </p>

    <p>
      <label for="email">Email de probă:</label><br>
      <input type="email" id="email" name="email" placeholder="ana@example.com" required>
    </p>

    <p>
      <label for="cod">Codul rezervării (ca MUZ12):</label><br>
      <input type="text" id="cod" name="cod"
             pattern="[A-Z]{3}[0-9]{2}"
             title="Trei litere mari urmate de două cifre, de exemplu MUZ12"
             required>
    </p>

    <fieldset>
      <legend>Ce zi preferi?</legend>
      <input type="radio" id="sambata" name="zi" value="sambata" required>
      <label for="sambata">Sâmbătă</label><br>
      <input type="radio" id="duminica" name="zi" value="duminica">
      <label for="duminica">Duminică</label>
    </fieldset>

    <p>
      <input type="checkbox" id="regula" name="regula" value="da" required>
      <label for="regula">Am citit regulile muzeului</label>
    </p>

    <p>
      <button type="submit">Rezervă</button>
      <button type="reset">Șterge tot</button>
    </p>
  </form>
</body>
</html>
```

Trimite formularul **greșit** în trei feluri diferite și citește mesajele. Apoi completează formularul corect și citește în adresă ce s-a trimis.

---

## De făcut azi — „Rezervare de bilete la muzeu”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un formular cu un câmp obligatoriu, un câmp text cu lungime limitată și un câmp numeric cu limite |
| **Complet** | Minim + `type="email"`, `pattern` cu `title`, o alegere `radio` obligatorie, o bifă obligatorie, un `select` obligatoriu și cinci greșeli de completare notate într-un comentariu |

### Pasul 1 — Minim
Fă formularul unui **muzeu imaginar ales de tine** (de exemplu muzeul jocurilor, al orașului sau al sportului).

- [ ] Folderul `Prenume_Nume_W2_L5` are `index.html` cu scheletul complet  
- [ ] Un câmp text cu `required`, `minlength` și `maxlength`  
- [ ] Un câmp `number` cu `min` și `max`  
- [ ] Ai încercat să trimiți formularul gol și ai citit mesajul  

### Pasul 2 — Complet
Îmbunătățești formularul:

- [ ] Ai un câmp `email` cu adresă de probă în `placeholder`  
- [ ] Ai un câmp cu `pattern` și `title`  
- [ ] Ai o întrebare `radio` cu `required`, o bifă `required` și un `select` cu `required`  
- [ ] Ai notat într-un comentariu cinci greșeli de completare și mesajele lor  
- [ ] Codul este indentat și are comentarii  

---

## Bonus ★★★ — Provocare: Biletul cu surprize
*Doar dacă ai terminat Complet.*

- [ ] Adaugă `disabled` la o casetă și vezi ce face (caută „HTML disabled input”)  
- [ ] Compară `disabled` cu `readonly` din Lecția 3: care valoare se trimite?  
- [ ] Împreună cu un adult, deschide DevTools și șterge `required`: ce se întâmplă?  
- [ ] Fă din `sondaj.html` un formular care nu se trimite dacă lipsește ceva: toate întrebările cu reguli, sursa într-un `<small>`  

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
1. Fă un formular „Înscriere la un concurs imaginar”: poreclă (obligatorie), număr de locuri (1–5), alegerea zilei (`radio`) și o bifă „Am citit regulile”. Folosește `required` unde este nevoie și testează formularul. Salvează în `Prenume_Nume_W2_L5`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Cursorul pornește în casetă: `autofocus`.**

```html
<label for="porecla">Porecla ta:</label>
<input type="text" id="porecla" name="porecla" autofocus required>
```

Cu `autofocus` cursorul intră singur în casetă când se deschide pagina.

**Acasă 2 — Data și ora: `date` și `time`.**

```html
<label for="data">Data vizitei:</label>
<input type="date" id="data" name="data" required>

<label for="ora">Ora vizitei:</label>
<input type="time" id="ora" name="ora" required>
```

Browserul arată un calendar și un ceas. Folosește-le fără date personale (de exemplu „Când începe filmul?”).

4. **Încă patru exerciții (B–E):**

**B — Trimite greșit.** Încearcă să trimiți formularul în cel puțin cinci feluri greșite diferite. Într-un comentariu din cod, notează ce ai greșit și ce mesaj a apărut.

**C — Ce atribut?** Ce atribut folosești pentru: (1) „nu lăsa gol”; (2) „cel mult 20 de caractere”; (3) „număr între 1 și 5”; (4) „forma unei adrese de email”?

**D — Găsește greșelile.** Găsește **3 greșeli** în primul cod și **2 greșeli** în al doilea. Repară greșelile:

```text
<input type="text" name="nume" minlength="10" maxlength="5" required>
<input type="number" name="nota" min="10" max="1">
<select name="grupa" required>
  <option value="mici">Mici</option>
  <option value="mari">Mari</option>
</select>
```

```text
<input type="text" id="cod" name="cod" pattern="[A-Z]{3}[0-9]{2}">
<input type="number" id="bilete" name="bilete" min="1" max="5" value="50">
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: la ce folosește validarea din HTML? De ce nu este suficientă singură?

## Ce urmează — Lecția 6
**Sunetele orașului**: punem sunete și filme în pagină, cu `audio` și `video`.

---

## Răspunsuri
- **Quiz scurt:** (1) cere ca un câmp să fie completat: browserul nu trimite formularul dacă este gol; (2) cu `maxlength="10"`; (3) exact 4 cifre; (4) forma adresei: trebuie să existe un `@` și text înainte și după el (nu verifică dacă adresa există); (5) poate fi ocolită de cineva care schimbă codul paginii, iar serverul trebuie să verifice și el datele.  
- **Tema, exercițiul C:** (1) `required`; (2) `maxlength="20"`; (3) `type="number"` cu `min="1"` și `max="5"`; (4) `type="email"`.  
- **Tema, exercițiul D, primul cod:** (1) `minlength="10"` este mai mare decât `maxlength="5"`: nimeni nu poate completa câmpul; (2) `min="10"` este mai mare decât `max="1"`; (3) prima opțiune a lui `select` trebuie să fie `<option value="">-- alege o grupă --</option>`, altfel `required` nu are efect.  
- **Tema, exercițiul D, al doilea cod:** (1) `pattern` fără `title`, deci mesajul de eroare este neclar; (2) `value="50"` este în afara limitelor `1–5`: formularul s-ar bloca chiar dacă vizitatorul nu a schimbat nimic.  
- **Tema, exercițiul E:** validarea ajută la greșeli obișnuite și poate fi ocolită; serverul trebuie să verifice și el.  
- **Siguranță:** adrese de probă (`example.com`) și fără date personale.
