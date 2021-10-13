# C-CSL-2: 3 Column Image Gallery

This component renders a image gallery with a slider.

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/C-CSL-2-3-column-image-gallery/styles';
```

Copy and paste to your project any of the markup in the 3 Column Image Gallery variations - you can find the markup in the **HTML tab**.

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
$primary-color
$disabled-color
$card-title-color

```

**_You always need to set your overrides before the import of you component - for example:_**

```scss
$primary-color: map-get($theme-colors, 'primary') !default;
$disabled-color: rgba(146, 146, 146, 0.35);
$card-title-color: map-get($theme-colors, 'primary-gray') !default;

@import '../../node_modules/@verndale/front-end-components/lib/C-CSL-2-3-column-image-gallery/styles';
```
