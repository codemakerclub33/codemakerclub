# LECȚIA 10 — Telecomanda magică
### Proiectul modulului · infraroșu, coduri și comenzi la distanță
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Proiectul modulului: controlezi LED-uri de la distanță cu o **telecomandă cu infraroșu**, ca la televizor.  
> Proiect: **„Telecomanda magică”** · `Prenume_Nume_A3_L10`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Telecomanda magică** (trei butoane care comută trei LED-uri, Power care stinge totul și volum +/− care schimbă luminozitatea) și o **încuietoare cu telecomandă**, care se deschide doar dacă apeși butoanele în ordinea secretă. Telecomenzile TV, aerul condiționat și boxele folosesc **infraroșu**: un LED trimite impulsuri de lumină invizibilă, iar un receptor le transformă în **coduri**. Azi citești și folosești aceste coduri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap modul · parcurgem proiectele |
| 10–25 | Cum trimite și primește IR · conexiuni |
| 25–45 | **Proiectul 1** · aflăm codurile și comandăm 3 LED-uri |
| 45–70 | **Proiectul 1** · Power și luminozitate |
| 70–105 | **Proiectul 2** · încuietoarea cu telecomandă |
| 105–120 | Verificare finală Modul 3, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **IR Sensor** (receptor) · **IR Remote** · 4 × LED · 4 × Resistor 220 Ω · Piezo (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `IRrecv receptor(PIN_IR);` | Creează receptorul infraroșu, pe un pin | `IRrecv receptor(11);` |
| `receptor.enableIRIn()` | Pornește receptorul (în `setup`) | `receptor.enableIRIn();` |
| `receptor.decode(&rezultat)` | Adevărat când a sosit un cod | `if (receptor.decode(&rezultat)) { ... }` |
| `rezultat.value` · `receptor.resume()` | Codul primit · pregătește receptorul pentru următorul | `unsigned long cod = rezultat.value;` |
| `void comuta(int pin)` | Inversează un LED: aprins ↔ stins | `comuta(LED1);` |
| `SECRET[pozitie]` | Un tablou de coduri; `pozitie` arată ce cod aștepți acum | `if (cod == SECRET[pozitie]) pozitie++;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L10`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L10`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **Receptor IR · OUT / semnal** | pin **11** |
| **Receptor IR · VCC** | **5V** |
| **Receptor IR · GND** | **GND** |
| **LED 1** | pin **4** → 220 Ω → anod · catod → GND |
| **LED 2** | pin **5** → 220 Ω → anod · catod → GND |
| **LED 3** | pin **6** → 220 Ω → anod · catod → GND |
| **LED 4 (luminozitate)** | pin **9** → 220 Ω → anod · catod → GND |

Telecomanda din Tinkercad nu se conectează la nimic: o selectezi, ținând-o „spre” receptor, și apeși butoanele cu mouse-ul.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Cum merge
- Fiecare buton trimite un **cod numeric** unic (în hexazecimal, de ex. `FF30CF`).  
- Receptorul primește codul, iar biblioteca `IRremote` îl **decodează**.  
- Tu compari codul primit cu codurile pe care le cunoști și decizi ce faci.

### 4) Aflăm codurile
Orice telecomandă are alte coduri, deci mai întâi le **citim**:

```cpp
#include <IRremote.h>

const int PIN_IR = 11;

IRrecv receptor(PIN_IR);
decode_results rezultat;

void setup() {
  Serial.begin(9600);
  receptor.enableIRIn();
}

void loop() {
  if (receptor.decode(&rezultat)) {
    Serial.println(rezultat.value, HEX);
    receptor.resume();
  }
}
```

- `receptor.decode(&rezultat)` e adevărat când a sosit un cod.  
- `rezultat.value` e codul; `HEX` îl afișează în hexazecimal.  
- `receptor.resume()` pregătește receptorul pentru **următorul** cod. Fără el, nu mai primești nimic.

Apasă butoanele telecomenzii și notează codurile în tabel:

| Buton | Cod (hex) |
|-------|-----------|
| 1 | ____ |
| 2 | ____ |
| 3 | ____ |
| Power | ____ |
| Volum + | ____ |
| Volum − | ____ |

> Dacă apare `FFFFFFFF`, e semnalul de **repetare** (buton ținut apăsat), nu un buton nou.

### 5) Minim — trei LED-uri
Pune codurile **tale** în locul celor din exemplu:

```cpp
#include <IRremote.h>

const int PIN_IR = 11;

const unsigned long BTN_1 = 0xFF30CF;
const unsigned long BTN_2 = 0xFF18E7;
const unsigned long BTN_3 = 0xFF7A85;

const int LED1 = 4;
const int LED2 = 5;
const int LED3 = 6;

IRrecv receptor(PIN_IR);
decode_results rezultat;

void setup() {
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  receptor.enableIRIn();
}

void comuta(int pin) {
  digitalWrite(pin, !digitalRead(pin));
}

void loop() {
  if (receptor.decode(&rezultat)) {
    unsigned long cod = rezultat.value;

    if (cod == BTN_1) comuta(LED1);
    if (cod == BTN_2) comuta(LED2);
    if (cod == BTN_3) comuta(LED3);

    receptor.resume();
  }
}
```

`comuta(pin)` **inversează** starea LED-ului: dacă era aprins se stinge și invers.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 6) Complet — Power și luminozitate

```cpp
#include <IRremote.h>

const int PIN_IR = 11;

const unsigned long BTN_1 = 0xFF30CF;
const unsigned long BTN_2 = 0xFF18E7;
const unsigned long BTN_3 = 0xFF7A85;
const unsigned long BTN_POWER = 0xFFA25D;
const unsigned long BTN_VOL_PLUS = 0xFFA857;
const unsigned long BTN_VOL_MINUS = 0xFFE01F;

const int LED1 = 4;
const int LED2 = 5;
const int LED3 = 6;
const int LED_LUMINA = 9;

IRrecv receptor(PIN_IR);
decode_results rezultat;

int luminozitate = 128;

void comuta(int pin) {
  digitalWrite(pin, !digitalRead(pin));
}

void setup() {
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED_LUMINA, OUTPUT);
  receptor.enableIRIn();
  Serial.begin(9600);
}

void loop() {
  if (receptor.decode(&rezultat)) {
    unsigned long cod = rezultat.value;

    if (cod == BTN_1) comuta(LED1);
    else if (cod == BTN_2) comuta(LED2);
    else if (cod == BTN_3) comuta(LED3);
    else if (cod == BTN_POWER) {
      digitalWrite(LED1, LOW);
      digitalWrite(LED2, LOW);
      digitalWrite(LED3, LOW);
      luminozitate = 0;
    }
    else if (cod == BTN_VOL_PLUS) {
      luminozitate = constrain(luminozitate + 25, 0, 255);
    }
    else if (cod == BTN_VOL_MINUS) {
      luminozitate = constrain(luminozitate - 25, 0, 255);
    }

    analogWrite(LED_LUMINA, luminozitate);
    Serial.println(luminozitate);

    receptor.resume();
  }
}
```

| Buton | Efect |
|-------|-------|
| 1, 2, 3 | comută LED 1, 2, 3 |
| Power | stinge totul |
| Vol + | LED 4 mai luminos (+25) |
| Vol − | LED 4 mai slab (−25) |

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Proiectul 2 — Încuietoarea cu telecomandă
Ca la seif, dar fără tastatură: încuietoarea se deschide doar dacă apeși **trei butoane în ordinea secretă** (de exemplu 3, 1, 2). Un buton greșit la orice pas **anulează tot** și aprinde LED-ul roșu. Codurile secrete stau într-un **tablou**, iar variabila `pozitie` ține minte cât din secvență ai nimerit. Folosește LED verde pe pin 4 și LED roșu pe pin 5 (ca LED 1 și LED 2 de la proiectul 1), iar receptorul pe pin 11.

```cpp
#include <IRremote.h>

const int PIN_IR = 11;
const int VERDE = 4;
const int ROSU = 5;

const unsigned long BTN_1 = 0xFF30CF;
const unsigned long BTN_2 = 0xFF18E7;
const unsigned long BTN_3 = 0xFF7A85;

const int LUNGIME = 3;
const unsigned long SECRET[LUNGIME] = {BTN_3, BTN_1, BTN_2};

IRrecv receptor(PIN_IR);
decode_results rezultat;

int pozitie = 0;

void lumina(int pin) {
  digitalWrite(pin, HIGH);
  delay(1000);
  digitalWrite(pin, LOW);
}

void setup() {
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
  receptor.enableIRIn();
  Serial.begin(9600);
}

void loop() {
  if (receptor.decode(&rezultat)) {
    unsigned long cod = rezultat.value;

    if (cod != 0xFFFFFFFF) {
      if (cod == SECRET[pozitie]) {
        pozitie++;
        Serial.print("Corect: ");
        Serial.println(pozitie);

        if (pozitie == LUNGIME) {
          lumina(VERDE);
          pozitie = 0;
        }
      } else {
        lumina(ROSU);
        pozitie = 0;
      }
    }

    receptor.resume();
  }
}
```

- `SECRET[pozitie]` e codul pe care îl **aștepți acum**: la început `BTN_3`, apoi `BTN_1`, apoi `BTN_2`.  
- Dacă apeși butonul așteptat, `pozitie++` te duce la pasul următor; dacă ajungi la `LUNGIME`, încuietoarea se deschide (LED verde) și începe din nou.  
- Orice alt buton aprinde LED-ul roșu și pune `pozitie` înapoi la 0.  
- `0xFFFFFFFF` e semnalul de **repetare** (buton ținut apăsat): îl ignorăm, ca să nu fie luat drept greșeală.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Secvența corectă aprinde LED-ul verde, iar orice greșeală pe cel roșu  

### 8) Testul încuietorii

| Ce apeși | Ce vezi |
|----------|---------|
| 3, 1, 2 | LED verde |
| 3, 1, 3 | LED roșu (al treilea buton e greșit) |
| 1, 3, 1, 2 | LED roșu la primul buton; apoi începi de la zero și 3, 1, 2 dau LED verde |
| 3, 1, 2, apoi din nou 3, 1, 2 | LED verde de două ori |

Alege-ți **propria secvență secretă** schimbând ordinea din `SECRET`.

**Gata când:**  
- [ ] Am încercat fiecare secvență din tabel  
- [ ] Am schimbat secvența secretă și am verificat-o

---

## Greșeli frecvente
1. **Nu primești nimic** — lipsește `receptor.enableIRIn()` sau pinul nu e 11.  
2. **Primești un singur buton** — ai uitat `receptor.resume()`.  
3. **Butoanele nu fac nimic** — codurile din program nu sunt cele ale telecomenzii tale; citește-le la pasul „Aflăm codurile”.  
4. **LED-ul clipește la ținut apăsat** — vezi `FFFFFFFF` (repetare); ignoră-l.  
5. **Eroare `IRremote.h`** — în Tinkercad biblioteca e inclusă; pe Arduino real trebuie instalată (și versiunile noi au alte comenzi).
6. **Încuietoarea se deschide la orice buton** — compari cu `SECRET[0]`, nu cu `SECRET[pozitie]`.  
7. **Nu se deschide niciodată** — codurile din program nu sunt cele ale telecomenzii tale, sau nu pui `pozitie = 0` după deschidere.  
8. **LED roșu la un buton ținut apăsat** — nu ignori codul de repetare `FFFFFFFF`.  

---

## De făcut azi — „Telecomanda magică”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 butoane comută 3 LED-uri |
| **Complet** | Minim + Power + Vol +/− |
| **Proiectul 2** | Încuietoare cu telecomandă: secvență secretă de 3 butoane, LED verde / roșu |

### Pasul 1 — Minim
- [ ] Codurile butoanelor citite și notate  
- [ ] LED-urile se comută  

### Pasul 2 — Complet
- [ ] Power stinge tot  
- [ ] Luminozitate cu Vol +/−  
- [ ] Numele `A3_L10` e corect

### Pasul 3 — Proiectul 2
- [ ] Secvența secretă stă într-un tablou  
- [ ] `pozitie` avansează la fiecare buton corect  
- [ ] Un buton greșit aprinde LED-ul roșu și începe de la zero  

### Verificare finală Modul 3
- [ ] Afișez text pe un LCD  
- [ ] Mișc un servo la un unghi dorit  
- [ ] Controlez un motor cu tranzistor  
- [ ] Citesc o tastatură sau o telecomandă

---

## Bonus ★★★ — Provocare: Scene de lumină cu sunet
*Doar dacă ai terminat Proiectul 2.*

Transformă telecomanda într-un **panou de scene**: butoanele 4, 5 și 6 pornesc efecte cu cele trei LED-uri din proiectul 1 (coduri citite de tine). **Piesă nouă:** un buzzer pe pin 8 și GND.

- [ ] Butonul 4 aprinde toate cele trei LED-uri, butonul 5 le aprinde pe rând, iar butonul 6 le face să clipească de 3 ori împreună  
- [ ] Un buton recunoscut dă un bip scurt (1000 Hz), iar un cod necunoscut un bip grav (300 Hz)  
- [ ] Power stinge LED-urile oricând  

## Recapitulare pe scurt
1. Fiecare buton IR = un **cod**  
2. Citește mai întâi codurile, apoi folosește-le  
3. `resume()` după fiecare cod  
4. `comuta()` inversează un LED  
5. Un tablou de coduri + `pozitie` = o secvență secretă  

## Pe placa reală *(opțional)*
Receptorul fizic (VS1838B) are 3 pini: OUT, GND, VCC. Biblioteca `IRremote` din versiunea 3 în sus folosește alte nume (`IrReceiver.decode()`), dar ideea e aceeași.

## Quiz scurt
- De ce citim mai întâi codurile?  
- Ce face `resume()`?  
- Cum ai adăuga un al cincilea buton?
- De ce ignorăm codul `FFFFFFFF` la încuietoare?  

## Temă
Desenează o telecomandă pentru **robotul tău** (4 butoane) și scrie ce face fiecare.

---

## Ce urmează — Modulul 4
Ai terminat **Modulul 3**! În Modulul 4 pui laolaltă tot ce ai învățat: planifici, faci schema și construiești proiecte complete, de la o casă inteligentă la un joc de reflexe.
