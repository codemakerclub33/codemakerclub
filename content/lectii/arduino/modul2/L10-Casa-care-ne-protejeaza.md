# LECȚIA 10 — Casa protejată
### Mini-proiectul modulului
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Proiectul modulului: combini **lumină, mișcare și temperatură** într-o casă care se apără singură.  
> Proiect: **„Casa protejată”** · `Prenume_Nume_A2_L10`

---

## Ce facem azi
La finalul orei ai **două proiecte** în aceeași casă: **Casa protejată** (lampă automată, alarmă armabilă, alertă de căldură și raport) și o **Lampă inteligentă**, care se aprinde doar când e întuneric **și** e mișcare. Mai adaugi o **întârziere de ieșire** pentru alarmă și un LED verde „totul e în regulă”.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1–L9 · ce senzori știm |
| 10–25 | Planul: 3 sisteme într-o casă |
| 25–65 | **Proiectul 1** · Casa protejată (lampă, alarmă, termostat, raport) |
| 65–100 | **Proiectul 2** · întârziere de ieșire, LED verde și lampă inteligentă |
| 100–110 | Scenarii de test |
| 110–120 | Verificare finală Modul 2, galerie · **Bonus ★★★** |

**Componente azi:** Arduino Uno · Breadboard · Photoresistor · Resistor 10 kΩ · PIR · TMP36 · Pushbutton · 3 × LED · **LED verde** · 4 × Resistor 220 Ω · Piezo · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `unsigned long armatLa` | Momentul armării alarmei | `armatLa = millis();` |
| `bool activ` | Alarma e armată **și** a trecut întârzierea | `bool activ = armat && (millis() - armatLa > 5000);` |
| `\|\|` | „SAU”: e adevărat dacă măcar una e adevărată | `bool alerta = (activ && miscare) \|\| cald;` |
| `&&` | „ȘI”: e adevărat doar dacă ambele sunt adevărate | `if (intuneric && miscare) { ... }` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L10`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L10`  

### 2) Planul: 3 sisteme într-o casă

| Sistem | Senzor | Reacție |
|--------|--------|---------|
| **Lampa** | fotorezistor (A0) | LED aprins la întuneric |
| **Alarma** | PIR (pin 2) + buton (pin 3) | sirenă, doar dacă e armată |
| **Termostat** | TMP36 (A1) | LED roșu + bip la temperatură mare |

### 3) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **Fotorezistor** | 5V → fotorezistor → **A0** → 10 kΩ → GND |
| **TMP36** | 5V · semnal **A1** · GND |
| **PIR** | semnal **2** · 5V · GND |
| **Buton** | pin **3** și **GND** (diagonal) |
| **LED lampă (galben)** | pin **9** → 220 Ω → anod · catod → GND |
| **LED alarmă (roșu)** | pin **10** → 220 Ω → anod · catod → GND |
| **LED căldură (portocaliu/roșu)** | pin **7** → 220 Ω → anod · catod → GND |
| **Piezo** | pin **8** și **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 4) Structura codului
Fiecare sistem are **propria funcție**, iar `loop()` doar le apelează:

```cpp
void loop() {
  lampa();
  alarma();
  termostat();
  raport();
}
```

Așa poți testa, repara și îmbunătăți fiecare parte **separat**.

### 5) Codul complet

```cpp
const int LUMINA = A0;
const int TEMP = A1;
const int PIR = 2;
const int BUTON = 3;
const int BUZZER = 8;
const int LED_LAMPA = 9;
const int LED_ALARMA = 10;
const int LED_CALDURA = 7;

const int PRAG_NOAPTE = 300;
const float PRAG_CALD = 35.0;

bool armat = false;
unsigned long ultimulRaport = 0;

float temperatura() {
  float volti = analogRead(TEMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void lampa() {
  digitalWrite(LED_LAMPA, analogRead(LUMINA) < PRAG_NOAPTE);
}

void alarma() {
  if (digitalRead(BUTON) == LOW) {
    armat = !armat;
    noTone(BUZZER);
    delay(300);
  }
  digitalWrite(LED_ALARMA, armat);

  if (armat && digitalRead(PIR) == HIGH) {
    tone(BUZZER, 1200, 100);
  }
}

void termostat() {
  if (temperatura() > PRAG_CALD) {
    digitalWrite(LED_CALDURA, HIGH);
    tone(BUZZER, 600, 100);
  } else {
    digitalWrite(LED_CALDURA, LOW);
  }
}

void raport() {
  if (millis() - ultimulRaport >= 2000) {
    ultimulRaport = millis();
    Serial.print("Lumina: ");
    Serial.print(analogRead(LUMINA));
    Serial.print("  Temp: ");
    Serial.print(temperatura(), 1);
    Serial.print(" C  Alarma: ");
    Serial.println(armat ? "ARMATA" : "oprita");
  }
}

void setup() {
  pinMode(PIR, INPUT);
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(LED_LAMPA, OUTPUT);
  pinMode(LED_ALARMA, OUTPUT);
  pinMode(LED_CALDURA, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  lampa();
  alarma();
  termostat();
  raport();
}
```

**Ce e nou**

- `millis()` = milisecundele de la pornire. `millis() - ultimulRaport >= 2000` face raportul **la 2 secunde, fără `delay`**, deci restul casei nu „îngheață”.  
- `armat ? "ARMATA" : "oprita"` alege între două texte.  
- `const float PRAG_CALD = 35.0;` — o valoare de configurare, ușor de schimbat.

### 6) Scenarii de test

| Scenariu | Ce faci | Rezultat |
|----------|---------|----------|
| Zi | lumină multă | lampa stinsă |
| Noapte | lumină mică | lampa aprinsă |
| Intrus | armezi, apoi miști obiectul | bip de alarmă |
| Incendiu | TMP36 peste 35 °C | LED roșu + bip |
| Dezarmare | apeși butonul | LED alarmă stins |

Bifează fiecare scenariu în caiet.

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 7) Proiectul 2 — Întârziere de ieșire
În `alarma()`, ca la Santinela din lecția 6, alarma devine **activă** abia după 5 secunde de la armare. Adaugă în afara funcțiilor `unsigned long armatLa = 0;` și modifică `alarma()`:

```cpp
unsigned long armatLa = 0;

void alarma() {
  if (digitalRead(BUTON) == LOW) {
    armat = !armat;
    armatLa = millis();
    noTone(BUZZER);
    delay(300);
  }
  digitalWrite(LED_ALARMA, armat);

  bool activ = armat && (millis() - armatLa > 5000);

  if (activ && digitalRead(PIR) == HIGH) {
    tone(BUZZER, 1200, 100);
  }
}
```

**Gata când:**  
- [ ] După armare, mișcarea nu sună timp de 5 secunde  
- [ ] După 5 secunde, mișcarea sună ca înainte  

### 8) LED verde „totul e în regulă”
Un al patrulea LED, **verde**, pe pin **11** (cu rezistor 220 Ω, catod la GND), se aprinde când **nu** e nicio alertă: nici mișcare pe alarmă activă, nici căldură peste prag. În afara funcțiilor adaugă `const int LED_OK = 11;`, în `setup()` adaugă `pinMode(LED_OK, OUTPUT);`, apoi scrie funcția:

```cpp
void semnalOK() {
  bool activ = armat && (millis() - armatLa > 5000);
  bool alerta = (activ && digitalRead(PIR) == HIGH) || temperatura() > PRAG_CALD;
  digitalWrite(LED_OK, !alerta);
}
```

Apeleaz-o în `loop()`, după `termostat();`:

```cpp
  semnalOK();
```

**Gata când:**  
- [ ] LED-ul verde e aprins când totul e liniștit  
- [ ] Se stinge la mișcare cu alarma activă sau la temperatură peste prag  

---

## Greșeli frecvente
1. **Un sistem blochează pe celelalte** — folosești `delay` lung. Folosește `millis()`.  
2. **Alarma sună și când nu e armată** — lipsește `armat &&`.  
3. **Bipurile se acoperă** — alarmă și căldură folosesc același buzzer; e normal, dar ai grijă la praguri.  
4. **Lampa clipește** — vezi histerezisul din L2.  
5. **Nu iese nimic în Serial Monitor** — lipsește `Serial.begin(9600)`.  
6. **Alarma sună imediat după armare** — lipsește `armatLa = millis();` la armare.  
7. **LED-ul verde nu se stinge** — funcția `semnalOK()` nu e apelată în `loop()`.

---

## De făcut azi — „Casa protejată”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Lampa automată + alarma armabilă |
| **Complet** | Minim + alertă de căldură + raport la 2 secunde |
| **Proiectul 2** | Întârziere de ieșire de 5 secunde + LED verde „totul e în regulă” + lampă inteligentă |

### Pasul 1 — Minim
- [ ] Lampa funcționează  
- [ ] Alarma funcționează cu buton  

### Pasul 2 — Complet
- [ ] Termostatul cu bip  
- [ ] Raportul cu `millis()`  
- [ ] Numele `A2_L10` e corect

### Pasul 3 — Proiectul 2
- [ ] Alarma devine activă după 5 secunde de la armare  
- [ ] LED verde pe pin 11, aprins când nu e nicio alertă  
- [ ] `semnalOK()` apelată în `loop()`

### Verificare finală Modul 2
- [ ] Citesc un senzor analogic și afișez valoarea  
- [ ] Calibrez un senzor cu Serial Monitor  
- [ ] Folosesc praguri și, la nevoie, histerezis  
- [ ] Rulez mai multe funcții în același proiect

---

## Bonus ★★★ — Provocare: Lampa inteligentă
*Doar dacă ai terminat Proiectul 2.*

O lampă care se aprinde doar când are motiv.

- [ ] Lampa se aprinde doar când e **întuneric ȘI e mișcare**  
- [ ] Rămâne aprinsă încă **10 secunde** după ultima mișcare (cu `millis()`), apoi se stinge  
- [ ] Testezi: cu lumină și mișcare lampa e stinsă; la întuneric fără mișcare e stinsă; la întuneric cu mișcare se aprinde; după **10 secunde** fără mișcare se stinge (între 10 și 11 secunde)

## Recapitulare pe scurt
1. Împarte proiectul în **funcții**  
2. `loop()` doar le apelează  
3. `millis()` înlocuiește `delay` când ai mai multe sarcini  
4. Testează fiecare scenariu  
5. `&&` și `||` combină senzorii în decizii mai deștepte

## Pe placa reală *(opțional)*
Într-o casă adevărată ai folosi relee și senzori certificați, cu alimentare separată. Aici facem doar modelul.

## Quiz scurt
- De ce e util să ai o funcție pentru fiecare sistem?  
- Ce face `millis()`?  
- Ce se întâmplă dacă pui `delay(5000)` în `lampa()`?  
- Care e diferența dintre `&&` și `||`?

## Temă
Alege o funcție nouă pentru casa ta (ex. detector de scurgeri) și scrie ce senzor și ce reacție ar avea.

---

## Ce urmează
Ai terminat **Modulul 2**! În Modulul 3 afișezi date pe un ecran LCD și pui lucrurile în mișcare cu servomotoare.
