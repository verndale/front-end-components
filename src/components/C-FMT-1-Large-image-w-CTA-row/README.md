# Large Image w CTA Row

Allow content authors to create a flexible, image-focused component to entice users to further explore the content of the website.

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/large-image-cta-row/styles';
```

Copy and paste to your project the markup - you can find the markup in the **HTML tab**.

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The module has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
$large-image-w-cta-mobile-margin-bottom
$large-image-w-cta-mobile-margin-top
$large-image-w-cta-desktop-margin-bottom
$large-image-w-cta-desktop-margin-top
$large-image-w-cta-overlay-color
$large-image-w-cta-mobile-text-color
$large-image-w-cta-desktop-text-color

```

**_You always need to set your overrides before the import of you component - for example:_**

```scss
$large-image-w-cta-mobile-margin-bottom: 20px;
$large-image-w-cta-mobile-margin-top: 40px;

@import '../../node_modules/@verndale/front-end-components/lib/large-image-cta-row/styles';
```
