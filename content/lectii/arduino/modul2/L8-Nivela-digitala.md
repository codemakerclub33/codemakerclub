# LECȚIA 8 — Nivela mea
### Senzori de înclinare și pedometru
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi folosești **senzori de înclinare** (tilt) ca să construiești o nivelă: LED-urile îți arată încotro e înclinat obiectul.  
> Proiect: **„Nivela mea”** · `Prenume_Nume_A2_L08`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Nivela mea** (doi senzori de înclinare, trei LED-uri și un bip când obiectul e drept) și un **Pedometru** care numără pașii și are buton de resetare. Telefoanele și brățările de fitness numără pașii în același fel: detectează o **schimbare**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 · stare și timp |
| 10–25 | Cum merge senzorul de înclinare |
| 25–50 | Minim · un senzor, un LED |
| 50–75 | **Proiectul 1** · nivela cu doi senzori și bip |
| 75–110 | **Proiectul 2** · pedometru cu buton de resetare |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · 2 × **Tilt Sensor** · 3 × LED · 3 × Resistor 220 Ω · Piezo · **Pushbutton** · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `stare && !stareAnterioara` | Detectează **schimbarea** „deschis → închis” | `if (stare && !stareAnterioara) { pasi++; }` |
| `pasi++` | Crește contorul cu 1 | `pasi++;` |
| `pasi % 10 == 0` | Restul împărțirii la 10 este 0: din 10 în 10 | `if (pasi % 10 == 0) { ... }` |
| `INPUT_PULLUP` | Butonul de resetare, ca în lecțiile trecute | `pinMode(RESET, INPUT_PULLUP);` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L08`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L08`  

### 2) Cum merge
Senzorul de înclinare are o bilă metalică mică. Când îl înclini într-o direcție, bila **închide contactul** dintre doi pini, ca un buton. Îl tratăm exact ca pe un **buton** cu `INPUT_PULLUP`:

| Piesă | Se conectează |
|-------|---------------|
| **Tilt stânga** | un pin la **2**, celălalt la **GND** |
| **Tilt dreapta** | un pin la **3**, celălalt la **GND** |
| **LED stânga (galben)** | pin **5** → 220 Ω → anod · catod → GND |
| **LED centru (verde)** | pin **6** → 220 Ω → anod · catod → GND |
| **LED dreapta (galben)** | pin **7** → 220 Ω → anod · catod → GND |
| **Piezo** | pin **8** și **GND** |

În Tinkercad poți **roti** senzorul: dai click pe el și folosești butonul de rotire din bara de sus.

> Montezi cei doi senzori **în oglindă**: unul se închide când înclini spre stânga, celălalt spre dreapta.

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 3) Minim — un senzor, un LED

```cpp
const int TILT = 2;
const int LED = 6;

void setup() {
  pinMode(TILT, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
}

void loop() {
  bool inclinat = (digitalRead(TILT) == LOW);
  digitalWrite(LED, inclinat);
}
```

`digitalRead(TILT) == LOW` înseamnă „contact închis” (ca la butonul apăsat).

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Complet — nivela

```cpp
const int TILT_ST = 2;
const int TILT_DR = 3;
const int LED_ST = 5;
const int LED_CENTRU = 6;
const int LED_DR = 7;
const int BUZZER = 8;

void setup() {
  pinMode(TILT_ST, INPUT_PULLUP);
  pinMode(TILT_DR, INPUT_PULLUP);
  pinMode(LED_ST, OUTPUT);
  pinMode(LED_CENTRU, OUTPUT);
  pinMode(LED_DR, OUTPUT);
}

void loop() {
  bool stanga = (digitalRead(TILT_ST) == LOW);
  bool dreapta = (digitalRead(TILT_DR) == LOW);
  bool drept = !stanga && !dreapta;

  digitalWrite(LED_ST, stanga);
  digitalWrite(LED_DR, dreapta);
  digitalWrite(LED_CENTRU, drept);

  if (drept) {
    tone(BUZZER, 1000, 50);
    delay(500);
  } else {
    noTone(BUZZER);
  }
  delay(20);
}
```

| Stânga | Dreapta | Rezultat |
|--------|---------|----------|
| închis | deschis | LED stânga |
| deschis | închis | LED dreapta |
| deschis | deschis | **drept** (centru + bip) |
| închis | închis | scuturat sau răsturnat (ambele LED-uri laterale) |

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 5) Proiectul 2 — Pedometrul
Un **pedometru** numără pașii: de fiecare dată când senzorul se **închide**, e un pas. Circuitul: senzorul de înclinare pe pin **2** (și GND), un LED pe pin **6** (cu rezistor), un buton de **resetare** pe pin **4** (și GND).

```cpp
const int TILT = 2;
const int LED = 6;
const int RESET = 4;

int pasi = 0;
bool stareAnterioara = false;

void setup() {
  pinMode(TILT, INPUT_PULLUP);
  pinMode(RESET, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  bool stare = (digitalRead(TILT) == LOW);

  if (stare && !stareAnterioara) {
    pasi++;
    Serial.print("Pasi: ");
    Serial.println(pasi);
  }
  stareAnterioara = stare;

  delay(20);
}
```

Numărăm doar **schimbarea** din „deschis” în „închis” (`stare && !stareAnterioara`), nu cât timp rămâne închis. Același truc de „detectare front” e util la orice buton.

**Gata când:**  
- [ ] Fiecare înclinare numără un singur pas  
- [ ] Contorul apare în Serial Monitor  

### 6) LED, mesaj la 10 pași și resetare
Adaugă trei lucruri în `loop()`. **LED-ul** urmează senzorul, un mesaj apare la **fiecare 10 pași**, iar butonul **resetează** contorul. Înlocuiește blocul de numărare și adaugă restul înainte de `stareAnterioara = stare;`:

```cpp
  if (stare && !stareAnterioara) {
    pasi++;
    Serial.print("Pasi: ");
    Serial.println(pasi);
    if (pasi % 10 == 0) {
      Serial.println("10 pasi!");
    }
  }
  digitalWrite(LED, stare);

  if (digitalRead(RESET) == LOW) {
    pasi = 0;
    Serial.println("Resetat");
    delay(300);
  }
```

`pasi % 10 == 0` e adevărat la 10, 20, 30… (restul împărțirii la 10 este 0).

**Gata când:**  
- [ ] LED-ul se aprinde cât timp senzorul e închis  
- [ ] La al 10-lea pas apare „10 pasi!”  
- [ ] Butonul readuce contorul la 0  

---

## Greșeli frecvente
1. **Merge invers** — contactul închis = `LOW`, nu `HIGH`.  
2. **Mereu aprins** — senzorul nu are un pin la GND.  
3. **Nu reacționează** — ai uitat `INPUT_PULLUP`.  
4. **Pasul se numără de zeci de ori** — numeri tot timpul cât e închis, nu doar schimbarea.  
5. **Ambele LED-uri laterale aprinse** — senzorii nu sunt montați în oglindă.  
6. **Pedometrul nu pornește de la 0** — butonul de resetare nu are un picior la GND, sau nu e `INPUT_PULLUP`.  
7. **Mesajul „10 pasi!” apare tot timpul** — ai scris `pasi / 10` în loc de `pasi % 10`.

---

## De făcut azi — „Nivela mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un senzor aprinde un LED |
| **Complet** | Doi senzori, 3 LED-uri și bip la „drept” |
| **Proiectul 2** | Pedometru: numără pașii, mesaj la 10 pași, buton de resetare |

### Pasul 1 — Minim
- [ ] Senzor cu `INPUT_PULLUP`  
- [ ] LED reacționează la înclinare  

### Pasul 2 — Complet
- [ ] 2 senzori în oglindă  
- [ ] Variabila `drept` = niciunul închis  
- [ ] Numele `A2_L08` e corect

### Pasul 3 — Proiectul 2
- [ ] Un pas se numără o singură dată (detectarea frontului)  
- [ ] Mesaj la fiecare 10 pași  
- [ ] Butonul de pe pin 4 resetează contorul

---

## Bonus ★★★ — Provocare: Detectorul de scuturare
*Doar dacă ai terminat Proiectul 2.*

Diferența dintre **pași** și **scuturare**.

- [ ] Dacă senzorul se închide de **5 ori în 2 secunde** (măsurat cu `millis()`), scrii **SCUTURAT** și LED-ul clipește repede  
- [ ] Pașii normali (mai rari) **nu** declanșează scuturarea  
- [ ] Testezi **10 pași normali** (fără alarmă) și **1 scuturare** (cu alarmă)

## Recapitulare pe scurt
1. Senzorul de înclinare = un **întrerupător** cu bilă  
2. `INPUT_PULLUP` → închis = `LOW`  
3. `bool` ajută la citirea codului  
4. „Front” = momentul în care starea se **schimbă**  
5. `stare && !stareAnterioara` numără schimbările, nu durata

## Pe placa reală *(opțional)*
Senzorii cu bilă sunt ieftini, dar sensibili la vibrații. Accelerometrele (ADXL345, MPU6050) măsoară înclinarea cu precizie, sunt tema unui curs avansat.

## Quiz scurt
- De ce folosim `INPUT_PULLUP` și la senzorul de înclinare?  
- Ce înseamnă `!stanga && !dreapta`?  
- Cum numărăm doar „schimbările”?  
- Ce face `pasi % 10 == 0`?

## Temă
Gândește-te la 3 obiecte care ar putea avea senzor de înclinare (ex. lanternă, ceas, mașinuță).

---

## Ce urmează — Lecția 9
În **lecția 9** combini doi senzori într-o mini stație meteo, cu minime, maxime și medii.
