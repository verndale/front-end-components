# Index

An accordion is a vertically stacked set of elements, such as labels or thumbnails, that allow the user to toggle the display of sections of content.
Each labeling element can be expanded or collapsed to reveal or hide its associated content.
Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

This component is WAI-ARIA compliant.

## Keyboard interactions
When focus is on a header, the following key commands are available:

* `TAB`: When focus moves into the accordion, places focus on the active `tab` element. When the tab list contains the focus, moves focus to the next element in the tab sequence, which is the `tabpanel` element.
* `UP`: Move focus to the previous header. If on first header, moves focus to last header.
* `DOWN`: Move focus to the next header. If on last header, moves focus to first header.
* `SPACE/ENTER/RETURN`: Open/close a panel associated with focused header.
* `SHIFT + TAB`: Moves focus to the previous focusable element.
* `HOME`: Move focus to the first header.
* `END`: Move focus to the last header.

***

## Instantiation
This component is able to take in _data attributes_ from the root HTML element via `dataset`. This is ideal if you have multiple
accordions on the page that need different functionality.
