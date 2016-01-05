#Single element loaders

![Preview](http://i.imgur.com/Hftcndi.gif)

##How to use it

Just add the CSS to the `head` of the page:

```html
<link href="loaders.min.css" rel="stylesheet" type="text/css" />
```

and use one of the following classes:

```html
<div class="loader loader--bounce-bottom"></div>
<div class="loader loader--bounce-top"></div>
<div class="loader loader--bounce-middle"></div>
<div class="loader loader--blink"></div>
```

##Changing the source

If you prefer to change the source code in Sass, just play arround with the following variables:

```sass
$bar-width: 4px
$bar-height: 20px
$bar-color: #00B285
$bar-radius: 2px
```

##Development

Clone the repo and run:

```
npm install
gulp
```

Open the file `index.html` to preview