---
title: CSS
status: draft
---

These components are using SCSS and processed with node-sass.

### Breakpoints
Components are using `sass-mq` mixins for breakpoints. The following settings are configured for breakpoints:
```css
$mq-breakpoints: (
  mobile:  360px,
  tablet:  768px,
  tablet-landscape: 1024px,
  desktop: 1280px,
  wide: 1600px
);
```
These overrides can be found in **`./components/_base.scss`**

For more information on `sass-mq` check out the [documentation](https://www.npmjs.com/package/sass-mq#media-queries-with-superpowers)

### Theming
Theming instructions here

### Linting
Components are linted using...
