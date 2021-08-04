# Link

A link widget provides an interactive reference to a resource. The target resource can be either external or local, i.e., either outside or within the current page or application.

## Usage

Add the front-end-copmonent library to your project

```bash
yarn add @verndale/front-end-components
```

Import the style to your main style file in your project

```scss
@import '../../node_modules/@verndale/front-end-components/lib/link/styles';
```

Copy and paste to your project any of the markup in the link variations - you can find the markup in the **HTML tab**.

---

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The alert has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
// Primary - light background
$primary
// Secondary - dark background
$secondary

```

**_You always need to set your overrides before the import of you component - for example:_**

```scss
$primary: #808080;
$secondary: #101010;

@import '../../node_modules/@verndale/front-end-components/lib/link/styles';
```
