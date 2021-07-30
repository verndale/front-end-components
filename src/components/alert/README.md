# Alert

An alert is an element that displays a brief, important message in a way that attracts the user's attention without interrupting the user's task. Dynamically rendered alerts are automatically announced by most screen readers, and in some operating systems, they may trigger an alert sound. It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes.

Because alerts are intended to provide important and potentially time-sensitive information without interfering with the user's ability to continue working, it is crucial they do not affect keyboard focus. The alert dialog is designed for situations where interrupting work flow is necessary.

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
// Primary Alert
$alert-primary
// Critical Alert
$alert-critical
// Warning Alert
$alert-warning
// Alert font color
$alert-primary-font
```

**_You always need to set your overrides before the import of you component - for example:_**

```scss
$alert-primary: #808080;
$alert-primary-font: #101010;

@import '../../node_modules/@verndale/front-end-components/lib/alert/styles';
```
