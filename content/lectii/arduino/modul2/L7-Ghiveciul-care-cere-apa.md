# LECȚIA 7 — Planta mea
### Senzor de sol, procente și reamintiri
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi faci o plantă „vorbitoare”: un senzor de **umiditate a solului** îți spune când are nevoie de apă.  
> Proiect: **„Planta mea”** · `Prenume_Nume_A2_L07`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Planta mea** (umiditatea în procente, trei LED-uri și buzzer) și o **Pompă automată**, care pornește când solul e uscat și se oprește când e destul de ud. Sistemele de irigații inteligente funcționează așa.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6 · stare și timp |
| 10–25 | Circuit și calibrarea senzorului de sol |
| 25–50 | Minim · „mi-e sete” |
| 50–75 | **Proiectul 1** · procente și 3 LED-uri |
| 75–110 | **Proiectul 2** · reamintiri și pompă automată |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **Soil Moisture Sensor** · 3 × LED (roșu, verde, albastru) · 3 × Resistor 220 Ω · Piezo · **LED albastru pentru pompă** · Resistor 220 Ω · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `millis()` | Milisecundele de la pornire (reamintiri fără `delay`) | `if (millis() - ultima >= 10000) { ... }` |
| `unsigned long ultima` | Ține minte când ai făcut ceva ultima dată | `ultima = millis();` |
| `procentAnterior` | Compară valoarea de acum cu cea de dinainte | `if (procent - procentAnterior > 20) { ... }` |
| praguri cu histerezis | Pornește sub un prag, oprește peste altul | `if (procent < 30) pompa = true;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L07`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L07`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **Senzor sol · semnal** | **A0** |
| **Senzor sol · alimentare** | **5V** |
| **Senzor sol · GND** | **GND** |
| **LED roșu** (uscat) | pin **4** → 220 Ω → anod · catod → GND |
| **LED verde** (ok) | pin **5** → 220 Ω → anod · catod → GND |
| **LED albastru** (prea ud) | pin **6** → 220 Ω → anod · catod → GND |
| **Piezo** | pin **8** și **GND** |

În Tinkercad, dai click pe senzor și muți glisorul de umiditate.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Calibrare
Fiecare senzor dă alte valori, așa că începem cu **măsurarea**:

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(analogRead(A0));
  delay(300);
}
```

Completează:

| Situație | Valoare |
|----------|---------|
| Sol complet uscat (glisor la minim) | ____ |
| Sol ud (glisor la maxim) | ____ |

În simulator, valoarea **crește** cu umiditatea. Dacă la senzorul real e invers, schimbi ordinea în `map`.

### 4) Minim — „mi-e sete”

```cpp
const int SENZOR = A0;
const int LED_ROSU = 4;
const int PRAG_USCAT = 300;

void setup() {
  pinMode(LED_ROSU, OUTPUT);
}

void loop() {
  int umiditate = analogRead(SENZOR);

  if (umiditate < PRAG_USCAT) {
    digitalWrite(LED_ROSU, HIGH);
  } else {
    digitalWrite(LED_ROSU, LOW);
  }
  delay(200);
}
```

Pune la `PRAG_USCAT` o valoare luată din calibrare.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Complet — procente și 3 LED-uri

```cpp
const int SENZOR = A0;
const int LED_ROSU = 4;
const int LED_VERDE = 5;
const int LED_ALBASTRU = 6;
const int BUZZER = 8;

const int VAL_USCAT = 0;
const int VAL_UD = 700;

void setup() {
  pinMode(LED_ROSU, OUTPUT);
  pinMode(LED_VERDE, OUTPUT);
  pinMode(LED_ALBASTRU, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int brut = analogRead(SENZOR);
  int procent = map(brut, VAL_USCAT, VAL_UD, 0, 100);
  procent = constrain(procent, 0, 100);

  digitalWrite(LED_ROSU, LOW);
  digitalWrite(LED_VERDE, LOW);
  digitalWrite(LED_ALBASTRU, LOW);

  if (procent < 30) {
    digitalWrite(LED_ROSU, HIGH);
    tone(BUZZER, 500, 100);
  } else if (procent < 70) {
    digitalWrite(LED_VERDE, HIGH);
  } else {
    digitalWrite(LED_ALBASTRU, HIGH);
  }

  Serial.print("Umiditate: ");
  Serial.print(procent);
  Serial.println(" %");
  delay(1000);
}
```

| Umiditate | Lumina | Ce înseamnă |
|-----------|--------|-------------|
| sub 30 % | roșu + bip | Dă-mi apă! |
| 30–69 % | verde | Sunt bine |
| 70 % sau mai mult | albastru | Prea multă apă |

`VAL_UD = 700` e doar un exemplu: pune valoarea măsurată de tine la calibrare.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) De ce `map` + `constrain`
- `map` transformă valorile senzorului într-o scală **0–100**.  
- `constrain` o ține în limite, chiar dacă senzorul dă o valoare mai mare.

### 7) Proiectul 2 — Reamintiri
O plantă uitată rămâne uscată. Adaugă o **reamintire la 10 secunde**: cât timp solul e uscat (sub 30 %), buzzerul sună scurt, dar nu mai des de o dată la 10 s. Circuitul e cel de la proiectul 1.

În afara funcțiilor adaugă:

```cpp
unsigned long ultima = 0;
```

Și în `loop()`, în ramura `procent < 30`, înlocuiește `tone(BUZZER, 500, 100);` cu:

```cpp
    if (millis() - ultima >= 10000) {
      ultima = millis();
      tone(BUZZER, 500, 300);
      Serial.println("Ud-ma, te rog!");
    }
```

Așa nu mai „țipă” planta la fiecare secundă, și nu folosim `delay`.

**Gata când:**  
- [ ] Cât timp solul e uscat, buzzerul sună o dată la 10 secunde  
- [ ] În Serial Monitor vezi mesajul „Ud-ma, te rog!” la același interval  

### 8) Mulțumesc!
Planta poate spune și **mulțumesc**. Ții minte procentul de la runda trecută și, dacă a **crescut brusc** (cu mai mult de 20 de puncte), înseamnă că ai udat-o:

```cpp
int procentAnterior = 100;
```

Îl pornim de la 100, ca la pornire programul să nu creadă că ai udat deja planta.

Apoi, în `loop()`, după ce ai calculat `procent`:

```cpp
  if (procent - procentAnterior > 20) {
    Serial.println("Multumesc!");
  }
  procentAnterior = procent;
```

**Gata când:**  
- [ ] Când muți glisorul de la uscat spre ud, vezi „Multumesc!”  
- [ ] Mesajul apare o singură dată, nu la fiecare rundă  

---

## Greșeli frecvente
1. **Mereu 0 %** — senzorul nu e alimentat sau semnalul nu e la A0.  
2. **Procente negative** — ai uitat `constrain` sau calibrarea e greșită.  
3. **Prea sensibil** — mărește zona „ok”.  
4. **Buzzerul sună continuu** — folosește `tone` cu **durată** (al treilea argument).  
5. **Merge invers** (cu senzorul real) — inversează valorile în `map`.  
6. **Planta cere apă la fiecare secundă** — ai uitat `ultima = millis();` după reamintire.  
7. **„Multumesc!” nu apare niciodată** — `procentAnterior` e declarat în `loop()`, nu în afara funcțiilor.

---

## De făcut azi — „Planta mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un LED roșu când solul e uscat |
| **Complet** | Minim + procente + 3 LED-uri + bip |
| **Proiectul 2** | Reamintire la 10 secunde + mesajul „Multumesc!” + pompă automată |

### Pasul 1 — Minim
- [ ] Calibrare notată în tabel  
- [ ] LED roșu funcționează  

### Pasul 2 — Complet
- [ ] `map` + `constrain` pentru procente  
- [ ] 3 trepte cu LED-uri  
- [ ] Numele `A2_L07` e corect

### Pasul 3 — Proiectul 2
- [ ] Reamintire o dată la 10 secunde, cu `millis()`  
- [ ] „Multumesc!” când procentul crește cu peste 20  
- [ ] Fără `delay` lung pentru reamintire

---

## Bonus ★★★ — Provocare: Pompa automată
*Doar dacă ai terminat Proiectul 2.*

Planta se udă singură, fără să clipească la limită.

- [ ] Un LED albastru pe pin 3 este **pompa**: **pornește** sub 30 % și **se oprește** abia peste 60 % (histerezis)  
- [ ] Testezi cu glisorul **0 → 100 → 0 %**: pompa pornește o singură dată și se oprește o singură dată  
- [ ] Între 30 și 60 % pompa își păstrează starea de dinainte

## Recapitulare pe scurt
1. Senzorul de sol dă o valoare analogică  
2. Calibrăm înainte de a alege praguri  
3. `map` + `constrain` = procente sigure  
4. Mai multe trepte = mai multă informație  
5. Reamintirile cu `millis()` nu blochează programul

## Pe placa reală *(opțional)*
Senzorii de sol ieftini (rezistivi) se corodează în timp. Alimentează-i doar când citești, nu permanent.

## Quiz scurt
- De ce calibrăm senzorul?  
- Ce face `constrain(procent, 0, 100)`?  
- Ce LED se aprinde la 85 % umiditate?  
- De ce pompa pornește la 30 % și se oprește la 60 %, nu la același procent?

## Temă
Fă o listă cu 3 plante și de câtă apă are nevoie fiecare (multă / medie / puțină). Ce praguri ai alege?

---

## Ce urmează — Lecția 8
În **lecția 8** folosești senzori de înclinare și construiești o nivelă digitală cu pedometru.
