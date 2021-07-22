# Button
This component can be both a `<button>` and a link (`<a>`) that looks like a button.
There are two different themes to this button. One is a light button (primary) that will be used on darker backgrounds, and a lighter button (secondary) that will be used on darker background.

## Usage
Add the front-end-copmonent library to your project
```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project
```scss
@import "../../node_modules/@verndale/front-end-components/lib/button/styles";
```

Copy and paste to your project any of the markup in the button variations - you can find the markup in the **HTML tab**.

## Styling
The component will already have a default style/theme set, so it will work out of the box.
The button has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`
```scss
// Primary button
$btn-primary-background
$btn-primary-focus-background
$btn-primary-text-color
$btn-primary-outline-border
$btn-primary-outline-text-color
$btn-primary-outline-focus-background
$btn-primary-outline-focus-border
$btn-primary-outline-focus-text-color
$btn-primary-disabled-background
$btn-primary-disabled-text-color

// Secondary button
$btn-secondary-background
$btn-secondary-focus-background
$btn-secondary-focus-text-color
$btn-secondary-text-color
$btn-secondary-outline-border
$btn-secondary-outline-text-color
$btn-secondary-outline-focus-background
$btn-secondary-outline-focus-text-color
$btn-secondary-disabled-border
$btn-secondary-disabled-text-color
```

***You always need to set your overrides before the import of you component - for example:***
```scss
$btn-primary-background: #808080;
$btn-primary-focus-background: #101010;

@import "../../node_modules/@verndale/front-end-components/lib/button/styles";
```
