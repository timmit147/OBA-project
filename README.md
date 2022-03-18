# Project 1 @cmda-minor-web · 2020-2021

## User story Voeding en diëtiek 
Als sportieve twintiger wil ik mij verdiepen in het effect van gezonde voeding op mijn conditie, om te leren hoe ik mijn sport beter kan beoefenen.

Link to website: https://timmit147.github.io/OBA-project/website/

## Schetsen
<img src="https://user-images.githubusercontent.com/29665951/158983933-e324cf02-85e9-47e1-8111-acf757d7f0aa.png"  width="250px">


## Ontwerp v1

<img src="https://user-images.githubusercontent.com/29665951/158984064-70cc3839-3d83-40c5-b9f9-a0952e17f087.png"  width="250px">

## Ontwerp v2

<img src="https://user-images.githubusercontent.com/29665951/158984215-71c14040-18fb-4942-85f8-0e81b9af7b6d.png"  width="250px">

## Eind ontwerp

<img src="https://user-images.githubusercontent.com/29665951/158984599-d18d1198-971e-4c05-9f16-e04e2eb80649.png"  width="250px">

## Problemen code
Tijdens het werken aan dit project ben ik een aantal problemen tegen gekomen.

### 1. To many request error
Doordat iedereen van de klas tegelijk de zelften API key gebruikten raakten de key snel tot te max aanvragen. Ik heb 2 backups gemaakt wanneer deze error tevoorschijn komt. #1 Wanneer het de eerste keer wel lukt maakt die een localstorage aan die de volgende keer opgevraagd kan worden als een backup die geuptodate is met je laatste bezoek. #2 Ik heb een json file op github staan wanneer de localstorage niet werkt.

### 2. Afbeelding kleur pakken van afbeelding.
Op de afbeeldingen van de OBA API staan beveiligingen zodat je niet direct de afbeeldingen kan gebruiken. 
Wat je moet doen is de afbeeldingen crossOrigin Anonymous maken in javascript of html.

### 3 Code werkt wel op codepen maar niet op github

Het probleem was dat het laden van de afbeelding tijd kosten en een promise terug geeften. De oplossing die ik heb gedaan is de code laten wachten tot dat de afbeelding is geladen. Daarna heb ik een nieuwe afbeelding aangemaakt waar de afbeelding word opgeslagen om te gebruiken als een canvas. De reden dat ik een andere afbeelding gebruik is dat je niet wil dat je de orginele afbeelding ziet veranderen.


```
img.crossOrigin = "Anonymous";
```

Het probleem was dat wanneer je de afbeelding van OBA crossOrigin maakt je deze niet meer kan zien door de beveiliging. Om deze beveiliging te omzeilen kan je de link van de afbeelding omzetten naar crossOrigin;

```
let text = "https://cors-anywhere.herokuapp.com/"+document.querySelector("#imageid").src;
```


## Eind recultaat

<img src="https://user-images.githubusercontent.com/29665951/158983589-eef88cbd-093b-4213-9e95-fd6cbf92a2bc.png"  width="250px">

## Eind recultaat video

![ezgif-2-0e115ada78](https://user-images.githubusercontent.com/29665951/158986066-7109bb15-b4f1-460f-95d2-72b8fb98e9e1.gif)


- [x] Fork github
- [x] Kies een user story
- [x] Link toevoegen in readme
- [x] API data ophalen
- [ ] Table of content maken
- [x] Schets maken
- [x] Ontwerp maken
- [ ] Poster van eind product
- [ ] Hoe project installeren
- [ ] Hoe project gebruiken
- [x] Licence toevoegen
- [x] Afbeelding omzetten naar base64
- [x] Kleur van afbeelding krijgen
- [x] Notities toevoegen in code
- [ ] Video toevoegen in read me
- [x] UX stake toevoegen
- [x] Backup maken met json of localstorage
- [x] Json data ophalen uit bestand



