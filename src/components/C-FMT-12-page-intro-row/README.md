# Page Intro
Headline and lead in text. Headline appears to the left on desktop and above the lead in on mobile and tablet.

## Usage
Add the front-end-copmonent library to your project
```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project
```scss
@import "../../node_modules/@verndale/front-end-components/lib/page-intro/styles";
```

Copy and paste to your project any of the markup in the button variations - you can find the markup in the **HTML tab**.

_________

## Styling
The component will already have a default style/theme set, so it will work out of the box.
The button has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`
```scss
$page-intro-headline-color;

```

***You always need to set your overrides before the import of you component - for example:***
```scss
$page-intro-headline-color: #808080;

@import "../../node_modules/@verndale/front-end-components/lib/page-intro/styles";
```
