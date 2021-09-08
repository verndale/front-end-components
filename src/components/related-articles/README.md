# Related Articles

Displays up to four Article Cards

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/related-articles/styles';
```

Copy and paste to your project any of the markup - you can find the markup in the **HTML tab**.

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The module has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
// Colors
$article-card-bg
$article-card-border
$article-card-title
$article-card-text
```

```scss
$gap: 15px;

@import '../../node_modules/@verndale/front-end-components/lib/related-articles/styles';
```
