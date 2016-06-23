# Démo application hybride Electron / Cordova

Le principe de cette démo est détaillé ici : https://makina-corpus.com/blog/metier/2016/construire-une-application-hybride-mobile-et-desktop-avec-cordova-et-electron


## Installation / Ajout des dépendances

Les modules utilisés ici sont déjà inclus dans le projet pour en simplifier le développement, mais on pourrait aussi utiliser des modules via github ou npm.

Nous avons donc besoin de référencer dans notre package.json le chemin absolue de nos modules.

### Electron

```
cd electron
npm install ./../modules/reader
npm install ./../modules/tts.webapi
```

### Cordova

```
cd cordova/www
npm install ./../../modules/reader
npm install ./../../modules/tts.cordova
```

## Comment exécuter les projets cordova et electron ?

### Electron

Lancer l'app (développement)

```
cd electron
npm install
npm run start
```

Builder l'application (pour Windows x64, cf. script npm pour d'autres paramètres/os)

```
npm install der-reader
npm run build
```


### Cordova

```
cd cordova/www
npm install
cordova prepare
cordova run android
```

## Utilisation du module reader et des services TTS

En JS, si on a accès à require, on charge les dépendances (electron)

```
var ttsWebApi = require('tts.webapi');
var Reader = require('reader');
```
Ou dans le HTML (cordova)

```
<script type="text/javascript" src="node_modules/tts.cordova/tts.cordova.js"></script>
<script type="text/javascript" src="node_modules/reader/reader.js"></script>
```

Puis on initialise le module avec la configuration adéquate

```
Reader.init({
  container: 'container',
  tts: ttsWebApi,
  text: 'Bonjour, bienvenue sur cette démonstration d\'une application Electron !'
});

```

Pour modifier un module (exemple avec reader)

```
cd modules/reader
npm install
npm run start  # Webpack with --watch option
npm run build  # Build project
```

Il faudra ensuite mettre à jour nos projets electron/cordova pour récupérer la dernière version de notre module

```
npm install reader
```
