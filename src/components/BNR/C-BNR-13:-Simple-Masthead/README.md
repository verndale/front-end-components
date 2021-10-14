# Link List

Allow content authors to display a simple masthead at the top of a page

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/simple-msterhead/styles';
```

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The link list has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
$masthead-copy-font-family,
$masthead-heading-font-family,
$masthead-subheading-font-family,
$masthead-copy-color,
$masthead-heading-color,
$masthead-subheading-color
```

**_You always need to set your overrides before the import of you component - for example:_**

```scss
$masthead-subheading-color: #06847b;

@import '../../node_modules/@verndale/front-end-components/lib/masthead/styles';
```
