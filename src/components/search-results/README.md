# Search Results

A user can search the site using this module. The module accepts default search, for when the user comes from a search form from a different page.

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/search-results/styles';
```

Copy and paste to your project any of the markup in the alert variations - you can find the markup in the **HTML tab**.

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The alert has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
$masthead-background
$masthead-color
$masthead-placeholder-color
$masthead-search-color
$content-background-color
$result-divider-color

```
