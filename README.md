# React Starter DevKit
[![Build Status](https://travis-ci.org/juanmnl/react-starter.svg?branch=master)](https://travis-ci.org/juanmnl/react-starter)
[![Dependencies](https://david-dm.org/juanmnl/react-starter.svg?branch=master)](https://david-dm.org/juanmnl/react-starter)
[![Code Climate](https://codeclimate.com/github/juanmnl/react-starter/badges/gpa.svg)](https://codeclimate.com/github/juanmnl/react-starter)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


**A small boilerplate for lightning-fast prototyping :rocket: :moon:**

![Preview](https://github.com/juanmnl/react-starter/blob/master/previews/preview.png)

### Featuring:
* NPM
* Webpack
* React
* Scss (-> PostCss)
* Bootstrap *(don't like bootstrap? Try the alternatives)*
* Babel
* [Standard.js](http://standardjs.com/)

#### Extras:
* React-HMR
* React-router & History
* Font-awesome

---
## Getting Started

#### Check :crystal_ball: [Gitano-CLI](https://github.com/juanmnl/gitano-cli) for an even faster setup. :rocket:

### Install

**1. Clone the react-starter project.**

`git clone https://github.com/juanmnl/react-starter.git`

**2. Change the folder (react-starter) name with your project name.**

`mv react-starter/ [yourProjectName]/`

`cd [yourProjectName]/`

*FROM YOUR PROJECT (ROOT) FOLDER*

**3. Remove the template .git file and add a fresh one.**

`rm -rf .git previews && git init`

From this point this is your own project.  
You can commit and push from 0 to your own repo.

*Follow the instructions when creating a new repo* or check [How to create a repo.](https://help.github.com/articles/create-a-repo/)


**4. Install dependencies**

`npm install`

**5. Run dev server** *`http://localhost:8080/webpack-dev-server/`*

`npm start`

**6. Check js style**

`npm run check-js`

**7. Build project**

`npm run build`

#### –––– That's all folks! :smile: ––––
##### –––– Start building awesome things! :rocket: ––––

---

## Alternative installs

#### No Css Framework

`git clone -b no-css-framework https://github.com/juanmnl/react-starter.git`

![no-css-framework](https://github.com/juanmnl/react-starter/blob/master/previews/no-css.png)

---
#### [Bulma flexbox-based Css Framework](http://bulma.io/)

`git clone -b bulma https://github.com/juanmnl/react-starter.git`

![no-css-framework](https://github.com/juanmnl/react-starter/blob/master/previews/bulma.png)

---
#### Webpack Config File - Quick Tips  

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
