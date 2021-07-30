# Testimonials

Testimonials module allows users to display one or more Testimonial Cards. The module consist of a Heading, Copy and a slider displaying the testimonial cards. When there is more than one Testimonial Object managed, navigation will be displayed.

Each testitmonial card consist of Thumbnail, Full Name, Testimonial Context, Testimonial and a Link

## Styling

The component will already have a default style/theme set, so it will work out of the box.
The testimonial module has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`

```scss
$accordion-mobile-margin-bottom
$accordion-mobile-margin-top
$accordion-desktop-margin-bottom
$accordion-desktop-margin-top
$accordion-item-border
$accordion-item-focus-background
$accordion-item-focus-text-color
$accordion-item-font-family
$accordion-item-title-font-family
$accordion-item-heading-font-family
$accordion-item-icon-fill
```

**_You always need to set your overrides before the import of you component - for example:_**

```scss
$accordion-mobile-margin-bottom: 20px;
$accordion-mobile-margin-top: 40px;

@import "../../node_modules/@verndale/front-end-components/lib/testimonials/styles";
```

---

## Instantiation
