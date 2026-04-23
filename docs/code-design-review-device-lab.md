# Interactive Functionality

## Code/Design Review - Device Lab

Deze week heb je geleerd over _Progressive Enhancement_; een codeerstrategie waarmee je ervoor kunt zorgen dat zoveel mogelijk mensen jouw werk kunnen gebruiken. 
In de deeltaak _progressive-enhancement_ heb je geleerd hoe je een UI component kunt ontwerpen en bouwen met behulp van _PE_, zodat deze voor iedereen toegankelijk is. 

### Aanpak

Je laat jouw website voor de leertaak vandaag door drie peers testen. Je kiest zelf drie testpersonen die jouw website gaan testen op verschillende devices en browsers.  

## Code Review  

### Live zetten en drie testpersonen benaderen  

Zorg er allereerst voor dat de laatste aanpassingen op GitHub staan voor de leertaak _the-web-is-for-everyone-interactive-functionality_ en dat de live link werkt. Zonder live link kan je niet testen...
<!--Zet ook je issues aan, mocht je dit nog niet hebben gedaan.-->

Noteer jouw naam op het whiteboard en plaats daaronder een opsomming met drie, nu nog lege, rijen.  

Kies vervolgens drie testpersonen. Houd bij je keuze rekening met de devices en browsers die jouw testpersonen gebruiken. Zorg ervoor dat je een diverse selectie hebt van apparaten, browsers en besturingssystemen. Noteer jouw GitHub-handle bij degene die jouw website gaat testen. Iedereen heeft ruimte voor drie tests.  

### Testen en issues aanmaken  

Test de drie websites die jij gaat beoordelen één voor één en kijk waar iets kapot gaat. Let daarbij op het volgende:  

- Test eerst de website op je eigen devices (bijvoorbeeld laptop, telefoon, tablet). Gebruik de browsers die je normaal gesproken gebruikt. Wat valt op?  
- Test vervolgens op browsers die je minder vaak gebruikt. Misschien moet je daarvoor een nieuwe browser installeren, zoals [Lynx](https://lynx.browser.org/).  
- Kies minimaal één device uit het Device Lab waarop je de website test.  

Maak voor elk probleem dat je tegenkomt een issue aan:  

- Benoem in het issue wat er niet werkt en waarop je hebt getest. Geef alle relevante informatie (browser, versie, device, etc.).  
- Geef aan wat de mogelijke oorzaak zou kunnen zijn. Ligt het bijvoorbeeld aan CSS Nesting, dat niet wordt ondersteund, of aan een JavaScript-functie die in een van de eerste regels wordt aangeroepen, waardoor de code daaronder niet meer wordt uitgevoerd?  
- Schrijf ook een mogelijke oplossing. Geef een goed onderbouwd antwoord. Zeg bijvoorbeeld niet:  
  - ❌ *"Gebruik CSS Nesting niet meer."*  
  
  maar
  - ✅ *"CSS Nesting zorgt ervoor dat jouw core-functionaliteit niet meer werkt. Zorg ervoor dat de CSS die essentieel is voor de core-functionaliteit niet genest is. Eventuele enhancements kunnen wel genest worden."*  
- Voeg waar nodig bronnen toe om je oplossing te verduidelijken.  

**Tip:** Kun je moeilijk achterhalen waarom iets niet werkt? Je kunt een apparaat uit het Device Lab aansluiten op je computer om het te inspecteren. Let erop dat je het device eerst in de developersmodus zet voordat je het aansluit op jouw laptop.

#### Bronnen  
- [Remote debugging met Chrome DevTools](https://developer.chrome.com/docs/devtools/remote-debugging?hl=nl)

### Dilemma's noteren
Schrijf tot slot op het whiteboard een of meerdere dilemma's waar jullie nu nog geen antwoord op hebben. Deze gaan we volgende week behandelen.
bijvoorbeeld: 
Wat te doen met moderne HTML uit 2024?
Hoe kan je 'flexbox' toepassen zonder dat een website stuk gaat met een oude browser?
Bestaat er een goede fallback voor de 'rgba()' functie?


