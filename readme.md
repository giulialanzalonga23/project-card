# Git & GitHub: strumenti di collaborazione

Mini progetto didattico per esercitarsi con **Git** e **GitHub**: versionamento, documentazione e pubblicazione del progetto.

La pagina web è volutamente semplice: contiene un titolo, un blocco di testo e un pulsante che permette di mostrare o nascondere il testo.

## Anteprima

La pagina mostra:

- un titolo (`h1`) in rosso su sfondo corallo;
- un paragrafo di testo segnaposto (Lorem ipsum);
- un pulsante verde che alterna tra **"Nascondi Testo"** e **"Mostra Testo"**.

## Struttura del progetto

```
.
├── index.html   # struttura della pagina
├── style.css    # stili grafici
├── app.js       # logica del pulsante (mostra/nascondi testo)
└── readme.md    # documentazione del progetto
```

## Tecnologie utilizzate

- **HTML5** per la struttura della pagina
- **CSS3** per lo stile (colori, spaziature, effetto hover sul pulsante)
- **JavaScript (vanilla)** per l'interazione con il DOM

## Come eseguire il progetto

1. Clona il repository:
   ```bash
   git clone https://github.com/tuo-utente/nome-repository.git
   ```
2. Entra nella cartella del progetto:
   ```bash
   cd nome-repository
   ```
3. Apri il file `index.html` nel browser (doppio clic oppure tramite un'estensione come *Live Server* in VS Code).

Non sono necessarie dipendenze né installazioni.

## Funzionamento

Lo script `app.js` seleziona il pulsante e il testo tramite il DOM e ascolta l'evento `click`. Un contatore tiene traccia dei clic:

- ai clic **dispari** il testo viene nascosto e il pulsante mostra "Mostra Testo";
- ai clic **pari** il testo viene mostrato di nuovo e il pulsante torna a "Nascondi Testo".

## Obiettivi didattici

- Inizializzare e gestire un repository con Git
- Fare commit chiari e ben descritti
- Lavorare con branch e pull request
- Pubblicare il progetto su GitHub
- Scrivere una documentazione efficace con Markdown

## Autore

Realizzato da **Il tuo nome** come esercizio su Git e GitHub.

## Licenza
Giulia Lanzalonga & Company (Hello World!)

## Note
Questo repository è stato creato durante un'esercitazione pratica
su Git e GitHub.

## Altre modifiche
Aggiungo testo di prova che dovrei vedere in VSC
