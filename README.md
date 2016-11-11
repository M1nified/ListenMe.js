# ListenMe.js

Simply add event listeners for nonDOM objects in JavaScript.

## Installation

In command line

```bash
npm install listenme --save
```

## Basic usage NodeJS

Require

```javascript
var listenme = require('listenme');
```

Use

```javascript
listenme.listenme.call(objectToListenOn);
```

or

```javascript
listenme.listenme(objectToListenOn);
```


## Basic usage browser

```html
<script src="./node_modules/listenme/build/aio.js"></script>
```

## Example

```javascript
...
class SomeClass{
  constructor(){
    listenme.listenme.call(this); // or ListenMe.listenme.call(this);
    this.event1 = this.addEventListener('event1',()=>{
      console.log('event1');
    })
  }
  example(){
    this.dispatchEvent('event1'); // true - event exists
    console.log('example');
    this.dispatchEvent('event2'); // false - event not defined
  }
}
let sc = new SomeClass();
sc.example(); // Output:
              // event1
              // example
sc.removeEventListener(sc.event1); // removes event1
sc.example(); // Output:
              // example
```