# Tably

Dynamic Vue.js component to create tabs for Materialize CSS.

## Installation

Install the Tably package:

```bash
npm install vue-tably
```
Install Materialize CSS:

```bash
npm install materialize-css@next
```

## Usage
#### mount with component

```javascript
import tably from 'vue-tably'

components: {
  tably
}
```
``` vue
<template>
  <div id="app">
    <tably></tably>
  </div>
</template>
```

#### add in html

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
