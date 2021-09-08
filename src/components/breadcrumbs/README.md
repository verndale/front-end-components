# Breadcrumbs
This component renders a delimited list of links and a final optional link.

## Usage
Add the front-end-copmonent library to your project
```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project
```scss
@import "../../node_modules/@verndale/front-end-components/lib/breadcrumbs/styles";
```

Copy and paste to your project any of the markup in the button variations - you can find the markup in the **HTML tab**.

_________

## Styling
The component will already have a default style/theme set, so it will work out of the box.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`
```scss
// Colors
$brd-primary-link-color
$brd-primary-link-color-hover
$brd-current-page-color
$brd-separator-color

// Spacing
$brd-margin-top
$brd-margin-bottom
$brd-separator-spacing

// Fonts
$brd-font-size
$brd-font-family
```

***You always need to set your overrides before the import of you component - for example:***
```scss
$brd-primary-link-color: #808080;
$brd-primary-link-color-hover: #101010;

@import "../../node_modules/@verndale/front-end-components/lib/breadcrumbs/styles";
```
