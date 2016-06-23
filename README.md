# Démo application hybride Electron / Cordova

Le principe de cette démo est détaillé ici : https://makina-corpus.com/blog/metier/2016/construire-une-application-hybride-mobile-et-desktop-avec-cordova-et-electron

Cette démo se base sur 3 modules qui se trouvent dans des dépots différents :

* [reader](https://github.com/lellex/reader) : notre application principale, qui pourra si besoin include d'autres modules
* [tts.webapi](https://github.com/lellex/tts.webapi) : un module spécifique pour utiliser le talk to speech dans un environnement web
* [tts.cordova](https://github.com/lellex/tts.cordova) : un module spécifique pour utiliser le talk to speech dans un environnement cordova

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

## Utilisation du module reader

Pour développer notre application commune electron/cordova, il faudra modifier le module de base (ici reader).

On peut par exemple cloner le repo à la racine et remplacer le chemin du module dans package.json.

```
cd reader
npm install
npm run start  # Webpack with --watch option
npm run build  # Build project
```

Il faudra ensuite mettre à jour nos projets electron/cordova pour récupérer la dernière version de notre module

```
npm install reader
```
