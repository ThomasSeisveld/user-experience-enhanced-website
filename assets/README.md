# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-web-is-for-everyone-interactive-functionality/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

**PreludeFonds Instrumentenbeheer** is een toegankelijke webtoepassing voor het beheren van een instrumentencollectie. De applicatie is ontworpen en gebouwd met het principe van **Progressive Enhancement** als kernbenadering, wat garanteert dat de applicatie voor iedereen werkt — ongeacht hun browser, apparaat of internetsnelheid.

## Gebruik

### User Story
Als gebruiker van het PreludeFonds wil ik mijn instrumentencollectie kunnen bekijken, filteren en beheren, zodat ik altijd weet welke instrumenten beschikbaar zijn.

### Functionaliteiten

- **Overzicht instrumenten**: Bekijk alle instrumenten in de collectie
- **Filteren**: Filter op instrumenttype en beschikbaarheidsstatus
- **Paginering**: Controleer hoeveel items u wilt zien (10, 20 of alles)
- **Detail pagina**: Bekijk volledige informatie van een instrument
- **Nieuw instrument toevoegen**: Voeg nieuwe instrumenten toe via een formulier
- **Responsive design**: Werkt op alle apparaten en schermformaten

## Kenmerken

### Progressive Enhancement 

Dit project is gebouwd volgens het principe van **Progressive Enhancement**.

- er worden maar 10 instrumenten geladen om de site sneller te laten zijn 


### Stappen voor instalatie

1. **Clone de repository**
```bash
git clone https://github.com/[username]/the-web-is-for-everyone-interactive-functionality.git
cd the-web-is-for-everyone-interactive-functionality
```

2. **Installeer dependencies**
```bash
npm install
```

3. **Start de applicatie (development/ nodemon)**
```bash
npm run dev
```
De applicatie is beschikbaar op `http://localhost:8000`

4. **Start de applicatie**
```bash
npm start
```

### Mapstructuur
```
├── server.js                 # Express-server hoofd bestand
├── public/
│   ├── script.js            # Client-side JavaScript
│   └── css/                 # Stylesheets
├── views/                   # Liquid templates
│   ├── partials/           # Herbruikbare template delen
│   ├── index.liquid        # Homepage
│   ├── overzicht.liquid    # Instrumentenoverzicht
│   ├── informatie.liquid   # Detail pagina
│   └── toevoegen.liquid    # Formulier nieuw instrument
└── docs/                    # Documentatie
```

## Bronnen

- [Directus API Documentatie](https://docs.directus.io/)
- [Express.js Documentatie](https://expressjs.com/)
- [LiquidJS Template Engine](https://liquidjs.com/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
