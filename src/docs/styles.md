---
title: CSS
status: draft
---

These components are using SCSS and processed with node-sass.

## Breakpoints
Components are using `sass-mq` mixins for breakpoints **which you will need to include in your own project** as these components do not ship with `sass-mq`. The following settings are configured for breakpoints:
<a name="breakpoint-defaults"></a>
```css
$mq-breakpoints: (
  mobile:  360px,
  tablet:  768px,
  tablet-landscape: 1024px,
  desktop: 1280px,
  wide: 1600px
) !default;
```
These overrides can be found in `./src/components/_theme.scss` and can be overriden in your project.

In your project, install `sass-mq`
```bash
yarn add sass-mq
```

In your main styles file in your project, set the breakpoints to whatever you wish and import `sass-mq`

***you may add to this map - those that are not included below will be set to their default value ([see above](#breakpoints)).***
```scss
$mq-breakpoints: (
  mobile:  360px,
  tablet:  768px,
  tablet-landscape: 1024px,
  desktop: 1280px,
  wide: 1600px
);

@import "../../node_modules/sass-mq/mq";
```

For more information on `sass-mq` check out the [documentation](https://www.npmjs.com/package/sass-mq#media-queries-with-superpowers)
_________

## Theming and Usage
There are a few variables and maps set to `!default` that can be overriden.

If you are going to use a component, bring in it's styles in your main file.

Install the front end components
```bash
yarn add @verndale/front-end-components
```

Import the component that you are going to be using (in this example, we'll use the button)
```scss
@import "../../node_modules/@verndale/front-end-components/lib/button/styles";
```

### Theme colors
There is a map of global colors that can be overriden. Theming can be done at the global level as well as the individual component level. The component specific variables for theming are documented in the **Notes** section of the fractal interface.

***If you choose to not use the overrides defined at the component level, you can just override the actual styles in your project!***

**This map or any other overriden variable needs to come before the import of the style**
```scss
// define colors in your project
$theme-colors: (
  primary: #06847b,
  primary-dark: #1e3f36,
  primary-light: #6f8f89,
  primary-gray: #4a4a4a,
  primary-light-gray: #e5e5e5,
  warning: #fb9300,
  critical: #f54748
);

// import button
@import "../../node_modules/@verndale/front-end-components/lib/button/styles";
```

### Theme fonts
The components have a primary and secondary font already set.
These can be overriden, and you can use the `@import url(...)` method to set another font or include the font in the `head` of your HTML to your project if you choose.
```scss
// import and set font
@import url("http://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100&display=swap");
$primary-font: "Roboto", sans-serif;
$secondary-font: ...;

// import button
@import "../../node_modules/@verndale/front-end-components/lib/button/styles";
```

_________

## Linting
Components are linted using...
