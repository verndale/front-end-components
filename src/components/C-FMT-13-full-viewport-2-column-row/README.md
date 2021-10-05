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
_________

## Styling
The component will already have a default style/theme set, so it will work out of the box.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`
```scss
$page-intro-headline-color;

```

***You always need to set your overrides before the import of you component - for example:***
```scss

@import "../../node_modules/@verndale/front-end-components/lib/page-intro/styles";
```
