# Pager
This is a react component. Mostly used in listings,

## Usage
Add the front-end-copmonent library to your project
```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project
```scss
@import "../../node_modules/@verndale/front-end-components/lib/pager/styles";
```

Import the component like this with the following props
```js
import Pager from "../../node_modules/@verndale/front-end-components/lib/pager/Pager";
<Pager
  total={10}
  page={1}
  onChange={() => {}}
  prevLabel="Previous"
  nextLabel="Next"
/>
```
_________
