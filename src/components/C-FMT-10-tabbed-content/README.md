# Tabbed Content
THis is a wrapper where a list of modules can be added which can then be shown one ata  time based on the current selected tab

THe identifier needs to be added to support nested tabs. Please be sure to correctly match IDs and aria-attributes between tabs and panels

## Keyboard interactions
When focus is on a header, the following key commands are available:

* `TAB`: When focus moves into the tabs, places focus on the active `tab` element. When the tab list contains the focus, moves focus to the next element in the tab sequence, which is the `tabpanel` element.
* `RIGHT`: Move focus and opens previous tab.
* `LEFT`: Move focus and opens next tab.
* `SPACE/ENTER/RETURN`: Open/close a panel associated with focused header.
* `SHIFT + TAB`: Moves focus to the previous focusable element.

_________

## Styling
The component will already have a default style/theme set, so it will work out of the box.
The button has a set of variables that may be overriden, or you may choose to just override the actual styles in your project.
It is recommended to use the overrides if you can as it will be less code in your project.

Below is the list of variables you can override. You may also find these in the **Assets tab** under `_variables.scss`
```scss
$masthead-background: map-get($theme-colors, 'primary-dark') !default;
$masthead-color: #fff;
$tab-inactive-color: $masthead-color;
$tab-inactive-border-color: #07b0e3;
$tab-inactive-background-color: transparent;
$tab-active-background-color: $tab-inactive-border-color;
$tab-active-color: $masthead-background;
$tab-panel-background: rgba(map-get($theme-colors, 'primary'), 0.1);
```

_________
