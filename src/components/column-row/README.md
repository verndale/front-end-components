# Columns Row

Allow content authors to create cards that can be displayed in the a 3 or up layout. (sample included 3 and 4 columns)

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/alert/styles';
```

Copy and paste to your project any of the markup in the alert variations - you can find the markup in the **HTML tab**.

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The alert has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
// Font for title
$column-row-title-font
// Gap between cards right and bottom
$gap
// Swiper styles fro slider mobile
$swiper-pagination-bullet
$swiper-pagination-bullet-active
$swiper-button-size
```

```scss
$gap: 15px;

@import '../../node_modules/@verndale/front-end-components/lib/colum-row/styles';
```
