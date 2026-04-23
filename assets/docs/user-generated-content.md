# Interactive functionality

## User Generated Content

Deze workshop gaat over het POSTen en bewaren van data op de server, en hoe je dit weer kunt tonen op een pagina.


### Aanpak

Vandaag gaan we, net als in Sprint 7 bij de squad page, gegevens _opslaan_ in Directus. Maar deze keer voor het project van jullie opdrachtgever.

Eerst ga je bedenken welke interactieve functionaliteit je gaat maken. Wat voor POST? Als de database van jullie project hiervoor aangepast moet worden, kunnen we dat meteen doen.

Hierna ga je de interactie netjes ontwerpen met een Wireflow, en een breakdown maken met URLs en routes en HTML elementen.

Daarna kan je verder met het uitwerken van je ontwerp in code.
Daarvoor ga je Progressive Enhancement toepassen: Eerst de HTML, formulier, Routes en de data opslaan in de database. 
Als dat goed werkt dan ga je de interactieve functionaliteit mooi maken. 

Komende vrijdag ga je je interactie testen tijdens de code/design review.

### Progressive Enhancement

Progressive Enhancement is een coding strategie, waarmee je er voor kunt zorgen dat je website het _altijd_ doet, voor _iedereen_. Het zorgt er ook voor dat je minder hoeft te testen. Tijdens deze sprint gaan we je in verschillende workshops deze strategie aanleren, zodat je dit uiteindelijk kunt dromen:

1) Bouw de functionaliteit robuust, met de simpelste techniek (HTML en Server-Side Rendering)​
2) Voeg Mobile First CSS voor de huisstijl toe​
3) _Enhance_ de functionaliteit geleidelijk voor een betere User Experience​ (De leukste stap. Met moderne CSS en client-side JS.)

Later deze sprint (en in Sprint 10 en 11 nog meer) gaan we je een aantal strategieën leren om dit enhancen geleidelijk goed te doen. Voor nu richten we ons op de eerste twee stappen van _Progressive Enhancement_, zodat we die goed onder de knie krijgen. Het is helemaal ok als je vandaag nog niet jouw uiteindelijke ontwerp hebt kunnen maken.


## POST Interactie bedenken en schetsen

Tot nu toe heb je minimaal een overzichtspagina en een detailpagina gemaakt voor de opdrachtgever. Je hebt hiervoor `GET` requests gebruikt. Voor je eigen routes én voor de fetches naar Directus. Hier komen deze sprint `POST` requests bij. Maar hiervoor moeten we eerst bepalen _wat_ we willen gaan maken.

<!--
Wil je een opfrisser over het verschil tussen `GET` en `POST`, lees dan eerst eens [de bron uit Sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/user-generated-content.md#get-vs-post).
-->

Overleg met studenten die dezelfde opdrachtgever hebben welke functionaliteit je zou kunnen maken, waarbij je gegevens in jullie Directus database aan moet passen of toe moet voegen. Wat wordt dus jouw _User Generated Content_ deze sprint? Misschien heeft het ontwerp van je opdrachtgever al een duidelijk idee (een wish list, likes, comments, een vragenlijst die je in kunt vullen, etc). Misschien is er tijdens de laatste Sprint Review een idee ontstaan, dat je wilt gaan maken. Of misschien wil je hiervoor zelf wel iets compleet nieuws verzinnen en laten zien tijdens de komende Sprint Review. Alles mag.

Maak een snelle schets van jouw idee, zodat je deze kunt overbrengen aan een ander aan je tafel. Deze leertaak is individueel, maar probeer samen in te schatten of een bepaald idee haalbaar is, en hoe. Analyseer samen jullie Directus database, en noteer voor jezelf mogelijke problemen en knelpunten die je verwacht voor jouw idee. Als je een aanpassing in de database nodig hebt, kunnen we dat voor jullie doen, net als bij de WHOIS API. Het is hiervoor handig als je zelf al bedenkt wat je nog nodig hebt. Als jouw idee misschien te ingewikkeld is, hou dan een ander idee achter de hand. Overleg uiteindelijk met een docent over de haalbaarheid.

Schrijf voor jouw functionaliteit een User Story, en maak hiervoor een nieuw issue aan. Gebruik hiervoor eventueel [de workshop uit Sprint 5](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/user-interface-design.md#user-story). Leg in je issue kort uit wat je nodig gaat hebben, en voeg je eerste schets(en) toe. <!-- Voeg ook een hifi ontwerp in Figma toe aan het issue.-->

Heb je voor jouw functionaliteit een aanpassing in de database nodig? Plaats dan een link naar dit issue op Teams, of tag in je issue een docent die dit op kan pakken. Het kan even duren voordat dit gedaan is, maar je kunt alvast verder met de volgende stappen.


## Interactie ontwerpen met een Wireflow en breakdown
​
De simpelste techniek voor User Generated Content is een `<form>` in HTML, met waarschijnlijk een submit button. Dit werkt in elke browser, op elk apparaat, overal, voor iedereen. Deze _simpelste techniek_ voor eindgebruikers—een `<form>`, HTTP methods en URLs—, gecombineerd met onze Directus JSON API en Express, brengt best wat complexiteit met zich mee. Daarom gaan we deze interactie eerst weer uittekenen.

Schets een Wireflow van jouw interactie. Maak je ontwerp in Figma zodat je netjes de huisstijl kan toepassen en goede feedback en feedforward kan vormgeven. 
<!-- Gebruik hiervoor [de workshops uit Sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/filteren-en-sorteren.md#wireflow-schetsen) en [Sprint 8](https://github.com/fdnd-task/server-side-rendering-server-side-website/blob/main/docs/templating-met-json.md#wireframe-met-statische-en-dynamische-data-en-componenten), en pas deze toe op het formulier dat je nu ontwerpt. --> 

Een Wireflow toont een aantal schermen van een interactie. Het is nuttig om uit te denken wat een gebruiker te zien krijgt als die iets op een pagina doet. 

Teken een Wireflow die alle mogelijke output, de belangrijkste userflow en de interactie duidelijk maakt. Een Wireflow toont opeenvolgende wireframes met de verschillende states/schermen die een gebruiker te zien krijgt.

### Breakdown
Annoteer je Wireflow met hints voor je dynamische data, en bedenk ook hoe je aan kunt geven dat je een `POST` afhandelt.

Onderzoek hoe je de interactie in HTML kan maken, en voeg dit als breakdown toe aan je schets. Bedenk nette URLs voor je pagina's en routes, en schrijf deze erbij.


💪 Na het afhandelen van een `POST`, wil je bezoekers doorsturen naar de pagina waarop ze kunnen zien wat er veranderd is (_redirecten_, met een `303` _status code_); kun je dat ook aangeven in je Wireflow?

👉 Voeg je Wireflow toe aan je User Story issue en bespreek je ontwerp met een docent.

<!-- We gaan straks verder met het aanmaken van routes, het maken van het formulier, en het opslaan van gegevens in Directus. -->

## Bouw de functionaliteit robuust, met de simpelste techniek

De eerste stap is je POST interactie bouwen met de meest betrouwbare techniek; HTML en Server-Side Rendering. Zo zorg je ervoor dat je interactie het altijd doet.


### Routes

Gebruik de hints uit je Wireflow schets, de voorbeeldcode die je van ons hebt gekregen (in comments in `server.js`) en de bronnen hieronder om jouw `POST` route(s) aan te maken in `server.js`. Je kunt hiervoor nieuwe issues aanmaken.

Neem bestanden of stukken code die je mee wilt nemen uit je vorige repository mee. Misschien wil je wel een deel opnieuw gaan bouwen.

#### Bronnen

- [GET vs POST @ Sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/user-generated-content.md#get-vs-post)
- [`app.post()` @ Express](https://expressjs.com/en/5x/api.html#app.post.method)
- [Routes en query parameters @ Sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/filteren-en-sorteren.md#routes-en-query-parameters)
- [Routing @ Sprint 8](https://github.com/fdnd-task/server-side-rendering-server-side-website/blob/main/docs/routing-request-response.md#routing)


### Formulier maken

Bouw je formulier in een Liquid view.

Als je een opfrisser wilt van hoe je formulieren afhandelt, zie dan de bronnen uit Sprint 7.

#### Bronnen

- [Oefenen met een POST @ Sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/user-generated-content.md#oefenen-met-een-post)
- [Maak één squad page @ Sprint 7](https://github.com/fdnd-task/connect-your-tribe-squad-page/blob/main/docs/user-generated-content.md#maak-%C3%A9%C3%A9n-squad-page)


### Opslaan in Directus

In `server.js` staat wat code uitgecomment. Gebruik deze om stap voor stap data op te slaan in Directus. De exacte code verschilt per project en per onderwerp, dus hiervoor zul je zelf aan de slag moeten. Hier kunnen we je goed bij helpen.

Jullie hebben dit eerder gedaan in de team-squad-page opdracht in Sprint 7, dus pak je code daarvan erbij.

#### Bronnen


- [Create an item @ Directus](https://docs.directus.io/reference/items.html#create-an-item)
- [Update an item @ Directus](https://docs.directus.io/reference/items.html#update-an-item)
