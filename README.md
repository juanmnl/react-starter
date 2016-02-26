# React Starter DevKit

- NPM
- Webpack  
- React  
- Scss -> PostCss
- Babel   
- Eslint  
- Bootstrap

---

### CLI  

Clone or download the react-starter project.

Install webpack and dev-server globally (-g) to save time when running the scripts.

```
npm i -g webpack webpack-dev-server
```
---
***FROM ROOT FOLDER***

**Install dependencies**
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

**Build for production w/ strip-loader and production config**
```
npm run build-prod
```

### Config File Quick Tips  

You can add an array of files to the entry *(files that are not required anywhere else)* :

```
entry: [ "./otherFile", "./app/app.js"]
```  

If you need some kind of preloading like *jshint*, you can add a .jshintrc to your root folder (for configuration), the jshint-loader to package.json and 'preloaders' into the modules:  
```
preloaders: [
  {
    test: /\.js/,
    exclude: /node_modules/,
    loader: "jshint-loader"
  }
]
```

Webpack resolves every .js file but if you want to use different extensions, you can set this after the *modules*:  
```
resolve: {
  extensions: ['', '.js', '.es6', '.ejs', .. ]
}
```
