# LECȚIA 2 — Veioza mea
### Fotorezistor, prag și histerezis
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi folosești un **fotorezistor** (senzor de lumină) ca să aprinzi singur un LED când se face întuneric.  
> Proiect: **„Veioza mea”** · `Prenume_Nume_A2_L02`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Veioza mea** (un LED care se aprinde singur când se face întuneric) și **Lumina de noapte cu 3 stări** (zi, amurg și noapte). Lămpile de stradă, luminile din telefon și farurile automate folosesc același lucru: un senzor de lumină și un **prag**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 · cum citim un senzor |
| 10–25 | Circuit: fotorezistor + rezistor (divizor de tensiune) |
| 25–45 | Calibrăm pragul cu Serial Monitor |
| 45–75 | **Proiectul 1** · prag, lumină proporțională, histerezis |
| 75–110 | **Proiectul 2** · lumina de noapte cu 3 stări |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **Photoresistor** · **Resistor 10 kΩ** · LED · Resistor 220 Ω · **Pushbutton** · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `const int PRAG = 300;` | Dă un nume unei valori pe care o poți schimba ușor | `const int PRAG = 300;` |
| `if (lumina < PRAG)` | Compară valoarea senzorului cu un prag | `if (lumina < PRAG) { ... }` |
| `map(lumina, 0, 1023, 255, 0)` | Interval **inversat**: cu cât e mai întuneric, cu atât lumina e mai mare | `int luminozitate = map(lumina, 0, 1023, 255, 0);` |
| `constrain(x, 0, 255)` | Taie valorile care ies din interval | `luminozitate = constrain(luminozitate, 0, 255);` |
| `bool aprins` | Ține minte starea LED-ului (pentru histerezis) | `bool aprins = false;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L02`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L02`  

### 2) Divizorul de tensiune
Un fotorezistor își schimbă **rezistența** după lumină, dar Arduino citește **tensiune**. De aceea îl punem în serie cu un rezistor fix:

| De la | La |
|-------|----|
| **5V** | un picior al fotorezistorului |
| celălalt picior al fotorezistorului | **A0** **și** rezistorul de 10 kΩ |
| celălalt capăt al rezistorului de 10 kΩ | **GND** |

| Piesă | Se conectează |
|-------|---------------|
| **LED** | pin **9** → rezistor 220 Ω → anod · catod → GND |

La lumină multă, fotorezistorul are rezistență mică și **A0 citește valori mari**. La întuneric, A0 citește **valori mici**.

### 3) Calibrare — ce valori am?

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(analogRead(A0));
  delay(300);
}
```

În Tinkercad, dai click pe fotorezistor și muți glisorul de lumină. Notează:

| Situație | Valoare aproximativă |
|----------|----------------------|
| Lumină multă | ____ |
| Întuneric | ____ |
| **Pragul tău** (la mijloc) | ____ |

### 4) Minim — se aprinde sub prag

```cpp
const int SENZOR = A0;
const int LED = 9;
const int PRAG = 300;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  int lumina = analogRead(SENZOR);

  if (lumina < PRAG) {
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(LED, LOW);
  }
  delay(50);
}
```

Schimbă `PRAG` după valorile tale din tabel.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Complet — lumină proporțională
Cu cât e mai întuneric, cu atât LED-ul e mai puternic. Inversăm intervalul în `map`:

```cpp
const int SENZOR = A0;
const int LED = 9;

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lumina = analogRead(SENZOR);
  int luminozitate = map(lumina, 0, 1023, 255, 0);
  luminozitate = constrain(luminozitate, 0, 255);
  analogWrite(LED, luminozitate);

  Serial.print(lumina);
  Serial.print(" -> ");
  Serial.println(luminozitate);
  delay(100);
}
```

`constrain(x, 0, 255)` taie valorile care ies din interval.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Histerezis — fără clipiri la limită
Dacă lumina e **exact** la prag, valoarea sare puțin în sus și în jos și LED-ul **clipește**. Soluția: **două praguri**, unul pentru aprindere, altul pentru stingere.

```cpp
const int SENZOR = A0;
const int LED = 9;
const int PRAG_APRINDE = 250;
const int PRAG_STINGE = 350;

bool aprins = false;

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  int lumina = analogRead(SENZOR);

  if (!aprins && lumina < PRAG_APRINDE) {
    aprins = true;
  }
  if (aprins && lumina > PRAG_STINGE) {
    aprins = false;
  }

  digitalWrite(LED, aprins);
  delay(50);
}
```

Ca la termostat: se pornește la 250, dar se oprește abia la 350.

### 7) Proiectul 2 — Lumina de noapte cu 3 stări
Aceeași schemă ca la proiectul 1 (fotorezistor pe A0, LED pe pin 9). Acum nu mai avem doar „aprins / stins”, ci **trei stări**, după două praguri: dacă e **zi**, LED-ul e stins; la **amurg** luminează slab; la **noapte** luminează puternic.

```cpp
const int SENZOR = A0;
const int LED = 9;

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lumina = analogRead(SENZOR);

  if (lumina > 600) {
    analogWrite(LED, 0);
    Serial.println("zi");
  } else if (lumina > 300) {
    analogWrite(LED, 60);
    Serial.println("amurg");
  } else {
    analogWrite(LED, 255);
    Serial.println("noapte");
  }
  delay(200);
}
```

Ordinea contează: verificăm întâi `> 600` (zi), apoi `> 300` (amurg), iar restul e noapte.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] La lumină multă vezi „zi”, la mijloc „amurg”, la întuneric „noapte”, iar LED-ul își schimbă luminozitatea  

### 8) Modul somn, cu buton
Adaugă un **buton**: un picior la pin **2**, piciorul diagonal la **GND**. Cât ții butonul apăsat, LED-ul rămâne stins, oricât de întuneric ar fi. Butonul e `INPUT_PULLUP`, deci **neapăsat** înseamnă `HIGH`.

```cpp
const int SENZOR = A0;
const int LED = 9;
const int BUTON = 2;

void setup() {
  pinMode(LED, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int lumina = analogRead(SENZOR);

  if (digitalRead(BUTON) == LOW) {
    analogWrite(LED, 0);
    Serial.println("mod somn");
  } else if (lumina > 600) {
    analogWrite(LED, 0);
    Serial.println("zi");
  } else if (lumina > 300) {
    analogWrite(LED, 60);
    Serial.println("amurg");
  } else {
    analogWrite(LED, 255);
    Serial.println("noapte");
  }
  delay(200);
}
```

**Gata când:**  
- [ ] Cât ții butonul apăsat, LED-ul e stins și vezi „mod somn”  
- [ ] Când îl lași, lumina de noapte merge din nou  

---

## Greșeli frecvente
1. **LED-ul nu reacționează** — fotorezistorul nu e legat și la A0 **și** la rezistorul de 10 kΩ.  
2. **Merge invers** — compari cu `>` în loc de `<`, sau ai inversat 5V cu GND.  
3. **Valori fixe** (mereu 0 sau 1023) — lipsește rezistorul de 10 kΩ.  
4. **LED-ul clipește la limită** — folosește histerezisul.  
5. **Prag prea mic / prea mare** — recitește valorile din Serial Monitor.  
6. **Amurgul nu apare** — ordinea din `if / else if` e greșită: verifici întâi `> 600`, apoi `> 300`.  
7. **Modul somn merge invers** — cu `INPUT_PULLUP`, butonul neapăsat e `HIGH`, apăsat e `LOW`.

---

## De făcut azi — „Veioza mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Se aprinde la întuneric, se stinge la lumină (cu prag) |
| **Complet** | Minim + lumină proporțională + histerezis |
| **Proiectul 2** | Lumină de noapte cu 3 stări (zi / amurg / noapte) + mod somn pe buton |

### Pasul 1 — Minim
- [ ] Divizor corect (5V – fotorezistor – A0 – 10 kΩ – GND)  
- [ ] Prag calibrat în Serial Monitor  

### Pasul 2 — Complet
- [ ] `map` + `constrain` pentru lumina proporțională  
- [ ] Histerezis cu două praguri  
- [ ] Numele `A2_L02` e corect

### Pasul 3 — Proiectul 2
- [ ] Trei stări: zi (stins), amurg (slab, `60`), noapte (puternic, `255`)  
- [ ] Starea apare în Serial Monitor  
- [ ] Buton de mod somn pe pin 2

---

## Bonus ★★★ — Provocare: Două LED-uri cu histerezis
*Doar dacă ai terminat Proiectul 2.*

O lampă cu două trepte de lumină, care nu clipește.

- [ ] Un al doilea LED, pe pin 10: la **amurg** se aprinde doar primul, la **noapte** se aprind **amândouă**  
- [ ] Pragurile au **histerezis de ± 30** (de exemplu noaptea începe la 270 și se termină la 330)  
- [ ] Testezi **5 niveluri de lumină** și completezi un tabel cu starea așteptată. Cu lumina fixă la prag, timp de **10 secunde**, nu trebuie să apară nicio clipire

## Recapitulare pe scurt
1. Fotorezistor + rezistor fix = **divizor de tensiune**  
2. Praguri: `if (lumina < PRAG)`  
3. `map` + `constrain` pentru reglaj fin  
4. Histerezis = două praguri, fără clipiri  
5. Mai multe praguri dau mai multe **stări** (zi, amurg, noapte)

## Pe placa reală *(opțional)*
Fotorezistorul fizic (LDR) are 2 picioare, fără polaritate. Valorile depind de modelul lui; recalibrează-ți pragul.

## Quiz scurt
- De ce avem rezistor de 10 kΩ lângă fotorezistor?  
- Ce citește A0 la întuneric în schema ta?  
- Ce problemă rezolvă histerezisul?  
- În ce ordine verifici pragurile în `if / else if`, și de ce?

## Temă
Fotografiază pragul tău (valorile din Serial Monitor la 3 niveluri de lumină) și scrie-le într-un tabel.

---

## Ce urmează — Lecția 3
În **lecția 3** citești temperatura cu senzorul TMP36 și o transformi în grade Celsius.
