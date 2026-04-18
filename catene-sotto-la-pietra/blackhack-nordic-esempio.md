# Il Sistema

::: twocol

The Black Hack usa un principio solo: tira **d20 sotto la tua statistica**.
Riesci? L'azione funziona. Fallisci? Le conseguenze arrivano.

## Statistiche Base

Ogni personaggio ha sei statistiche, generate con 3d6 in ordine:

| Statistica | Abbreviazione | Uso principale          |
|------------|:-------------:|-------------------------|
| Forza      | FOR           | Combattimento, forza    |
| Destrezza  | DES           | Schivate, furtività     |
| Costituzione | COS         | Resistenza, veleni      |
| Intelligenza | INT         | Magia, conoscenza       |
| Saggezza   | SAG           | Percezione, guarigione  |
| Carisma    | CAR           | Persuasione, reazioni   |

## Vantaggio & Svantaggio

Quando le circostanze favoriscono il personaggio, ha **Vantaggio**: tira due d20 e usa il risultato più basso. In condizioni avverse, **Svantaggio**: tira due d20 e usa il più alto.

Niente modificatori. Niente bonus. Solo dadi.

> "Se vuoi sapere se riesci a farlo, tira.
> Se non tiri, ci riesci e basta."
>
> *— David Black*

:::
---

# Combattimento

I giocatori tirano sempre. Il Master non tira mai.

## Struttura del Turno

Ogni turno i personaggi possono fare **una cosa**: muoversi E attaccare,
lanciare un incantesimo, usare un oggetto, fuggire.

1. Dichiarazione azioni (giocatori prima, poi PNG)
2. Tiro iniziativa — DES sotto il valore per agire prima dei nemici
3. Risoluzione in ordine

## Zone di Distanza

| Zona     | Distanza | Armi utilizzabili          |
|----------|----------|---------------------------|
| Vicina   | 0–3 m    | Corpo a corpo, pistole     |
| Lontana  | 3–15 m   | Archi corti, giavellotti   |
| Distante | 15+ m    | Solo archi lunghi          |

::: highlight-rule
**REGOLA CHIAVE:** Quando un giocatore attacca, tira FOR sotto il suo valore.
Quando subisce un attacco, tira DES sotto il suo valore per schivare.
:::

## Dadi Utilizzo

Torce, frecce, razioni — ogni risorsa consumabile usa un **dado utilizzo**.
Dopo ogni impiego, tira il dado corrente:

::: dice-track
d20 → d12 → d10 → d8 → d6 → d4 → ESAURITO
:::

Se esce **1 o 2**, la risorsa scala al dado inferiore. Quando il d4 segna 1–2,
la risorsa è finita.

---

# Bestiari

::: twocol

## Nemici Comuni

### Scheletro

::: stat-block
#### Scheletro

*Non-morto · Neutrale*

**PF** 8 · **CA** 12 · **Mov.** Vicino/Lontano

| FOR | DES | COS | INT | SAG | CAR |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 10  | 12  |  —  |  2  |  8  |  3  |

**Attacco.** Arma d6.

**Immunità.** Veleno, esaurimento.
:::

### Goblin

::: stat-block
#### Goblin

*Umanoide piccolo · Caotico malvagio*

**PF** 5 · **CA** 11 · **Mov.** Vicino

| FOR | DES | COS | INT | SAG | CAR |
|:---:|:---:|:---:|:---:|:---:|:---:|
|  8  | 14  | 10  |  8  | 8   |  6  |

**Attacco.** Lama corta d6 o arco d4.

**Viltà.** Se ridotto a metà PF, tira CAR — se fallisce, fugge.
:::

::: colbreak
:::

## Nemici Pericolosi

### Draugr

::: stat-block
#### Draugr

*Non-morto nordico · Neutrale malvagio*

**PF** 18 · **CA** 14 · **Mov.** Vicino

[
[[FOR]{.lbl} [14]{.val}]{.sb-stat}
[[DES]{.lbl} [9]{.val}]{.sb-stat}
[[COS]{.lbl} [16]{.val}]{.sb-stat}
[[INT]{.lbl} [6]{.val}]{.sb-stat}
[[SAG]{.lbl} [10]{.val}]{.sb-stat}
[[CAR]{.lbl} [4]{.val}]{.sb-stat}
]{.sb-stat-row}

**Attacco.** Ascia arrugginita d8 o morso d6 + CD COS o perdi 1 FOR.

**Ira del Sepolcro.** Se ridotto a 0 PF senza decapitazione, si rialza
con 1 PF al turno successivo.

**Luce del Sole.** Svantaggio sotto luce solare diretta.

**Taglia** Media · **Livello** 3 · **PE** 120
:::

:::

---

# Morte & Sopravvivenza

A **0 PF** il personaggio è *Fuori Combattimento*. Ogni turno tira FOR:

- **Successo** → stabile, recupera 1 PF dopo il combattimento
- **Fallimento ×1** → incosciente, morente
- **Fallimento ×2** → stato critico, –1 a una statistica permanente
- **Fallimento ×3** → **morte**. Crea un nuovo personaggio.

::: nota
ᚱ *Nota del Master:* In The Black Hack la morte è definitiva.
Non esistono resurrezioni a buon mercato. Perdere un personaggio fa male —
ed è proprio questo il punto.
:::
