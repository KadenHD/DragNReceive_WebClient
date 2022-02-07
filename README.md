<br />
<p align="center">
    <img src="https://www.promeo-formation.fr/themes/custom/promeo/img/logos/logo_promeo_white.svg" alt="Logo" height="50px"><br>
    <h3 align="center">Projet Personnel Encadré DragNReceive - Web Client </h3>
        
<details open="open">
  <summary>Summary</summary>
  <ol>
    <li>
      <a href="#Introduction">Introduction</a>
    </li>
    <li>
      <a href="#Installation">Installation</a>
    </li>
    <ul>
        <li>
            <a href="#Prerequisites">Prerequisites</a>
            <ul>
              <li>
                <a href="#Install-Laragon">Install Laragon</a>
              </li>
              <li>
                <a href="#Install-Node-and-NPM">Install Node and NPM</a>
              </li>
          </ul>
        </li>
        <li>
            <a href="#Implementation-of-the-project">Implementation of the project</a>
        </li>
    </ul>
    <li>
      <a href="#Technologies">Technologies</a>
      <ul>
        <li>
          <a href="#Softwares">Softwares</a>
        </li>
        <li>
          <a href="#Languages">Languages</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#To-do">To-do</a>
    </li>
    <li>
      <a href="#Sources">Sources</a>
    </li>
</details> 
    
# Introduction
    
The DragN'Receive company wishes to create a click & collect system across the entire Compiègne conurbation, having as partners markets and businesses mainly focused on the sale of foodstuffs and consumer products. They are therefore considering the creation of a mobile application allowing customers to orders products.
    
# Installation

## Prerequisites

### Install Laragon

> You can install Laragon, following the [Installation Tutorial](https://laragon.org/) on the official website.

### Install Node and NPM

> You can also easily install them, downloading [Node LTS version](https://nodejs.org/en/) on the official website.

## Implementation of the project

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
    
# Technologies

## Softwares

> Visual Studio Code,
> Vue,
> NPM

## Languages

> JavaScript

# To-do

- Utiliser vuex pour les actions et mutations d'axios

- faire une dialog box qui pop pour savoir le format du mot de passe (point d'interrogation click et pop-up / dialog box ?)
- faire les permissions de format d'input (se référer à l'api et aux models)

- Faire permissions router en fonction de ... (utiliser les childrens et beforeEnter)

- Mettre en place des templates "Skeleton Loader" avant le chargement des entities
- Voir les data tables de vuetify pour les tables de gestion

# Sources

- Material Design Icons (MDI), open-source icons : [Link](https://materialdesignicons.com/)
- unDraw, open-source illustrations : [Link](https://undraw.co/illustrations)
- Vuetify doc : [Link](https://https://vuetifyjs.com/en/)
- Routing with Vue-Router : [Link](https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/)
- Video tutorial for a simple form and validation with vuetify : [Link](https://youtu.be/ryndQPFt4w0)
- Video tutorial for JWT Authentication, Axios, Vue and Vuex logics : [Link](https://youtu.be/uqpM7WVTKI4)
