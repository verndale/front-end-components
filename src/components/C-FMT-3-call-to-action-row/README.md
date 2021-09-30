# Call to Action Row

This component contains a title, description, CTA and image.
There are two different variations to this component. One is a background image only, and the other one will have the background image and the default image as well.

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/cta-row/styles';
```

Copy and paste to your project any of the markup in the button variations - you can find the markup in the **HTML tab**.

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The cta-row has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
// Spacing for Mobile
$module-spacing-mobile
// Spacing for Desktop
$module-spacing-desktop
```

**_You always need to set your overrides before the import of you component - for example:_**

```scss
$module-spacing-mobile: 60px;
$module-spacing-desktop: 150px;

@import '../../node_modules/@verndale/front-end-components/lib/cta-row/styles';
```
