# Accordion

An accordion is a vertically stacked set of elements, such as labels or thumbnails, that allow the user to toggle the display of sections of content.
Each labeling element can be expanded or collapsed to reveal or hide its associated content.
Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

This component is WAI-ARIA compliant and is AA compliant.

## Keyboard interactions
When focus is on a header, the following key commands are available:

* `TAB`: When focus moves into the accordion, places focus on the active `tab` element. When the tab list contains the focus, moves focus to the next element in the tab sequence, which is the `tabpanel` element.
* `UP`: Move focus to the previous header. If on first header, moves focus to last header.
* `DOWN`: Move focus to the next header. If on last header, moves focus to first header.
* `SPACE/ENTER/RETURN`: Open/close a panel associated with focused header.
* `SHIFT + TAB`: Moves focus to the previous focusable element.
* `HOME`: Move focus to the first header.
* `END`: Move focus to the last header.

_________

## Styling
The component will already have a default style/theme set, so it will work out of the box.
The button has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
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

***You always need to set your overrides before the import of you component - for example:***
```scss
$accordion-mobile-margin-bottom: 20px;
$accordion-mobile-margin-top: 40px;

@import "../../node_modules/@verndale/front-end-components/lib/accotdion/styles";
```

_________

## Instantiation
..some instructions here
