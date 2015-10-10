# Webpack + React DevKit ***WIP***

### CLI  

Installing webpack and dev-server globally (-g) will save us time when running the scripts from the command-line.

```
npm i -g webpack webpack-dev-server
```

**Install all dependencies**
```
npm install
```

**Run dev server** *`http://localhost:8080/webpack-dev-server/`*
```
npm start
```  

**Make build**
```
npm run build
```

### Config File  

You can add an array of files to the entry *(file that are not required anywhere else)* :

```
entry: [ "./otherFile", "./app/app.js"]
```  


Webpack resolves every .js file but if you want to use different extensions, you can set this after the *modules*:  
```
resolve: {
  extensions: ['', '.js', '.es6', '.ejs', .. ]
}
```

### Dev Server  
### Loaders  
### Production Builds  

1 - Clone  
2 - Change Names (root folder & package.json)  
3 - Run scripts


## Scripts  

`npm install` -> install dependencies  
`npm run build` -> create 'build/' folder   
`npm start` -> run development server

on the browser:  
`http://localhost:3000`


### TODO

- yeoman generator
- create own hjs-webpack
- ability to choose different css frameworks
- Lots of things :P
