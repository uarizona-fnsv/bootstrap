---
title: 'Button'
description: 'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'
buttons:
- label: Bootstrap Docs
  icon: fas fa-book
  type: info
  link: 'https://getbootstrap.com/docs/4.3/components/buttons/'
---

FSO Bootstrap adds several extra button types: `accent`, `primary-light`, and `primary-dark`, which can be used to highlight additional main functionality and avoid using the same color. Generally, these additional buttons should be used sparingly and only after `primary` and `secondary` have been used. The exception occurs with `accent`, which can be used as the main button when used alone for a change of pace, especially when used on top of a blue or dark background.

## Normal

<example>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-primary-dark">Primary Dark</button>
    <button type="button" class="btn btn-primary-light">Primary Light</button>
    <button type="button" class="btn btn-accent">Accent</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
</example>

## Outline

<example>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-primary-dark">Primary Dark</button>
    <button type="button" class="btn btn-outline-primary-light">Primary Light</button>
    <button type="button" class="btn btn-outline-accent">Accent</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
</example>

## Sizes

Fancy larger or smaller buttons? Add `.btn-lg` or `.btn-sm` for additional sizes.

<example>
    <button type="button" class="btn btn-primary btn-lg">Large button</button>
    <button type="button" class="btn btn-secondary btn-lg">Large button</button>
</example>

<example>
    <button type="button" class="btn btn-primary btn-sm">Small button</button>
    <button type="button" class="btn btn-secondary btn-sm">Small button</button>
</example>

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

<example>
    <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
    <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>
</example>

## Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There’s no need to add a class to `<button>`s as they use a pseudo-class.** However, you can still force the same active appearance with `.active` (and include the `aria-pressed="true"` attribute) should you need to replicate the state programmatically.

<example>
    <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
    <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
</example>

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

<example>
    <button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
    <button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>
</example>

## Button Plugin

*Note:* requires javascript

Do more with buttons. Control button states or create groups of buttons for more components like toolbars.

### Toggle states


Add `data-toggle="button"` to toggle a button's `active` state. If you're pre-toggling a button, you must manually add the `.active` class **and** `aria-pressed="true"` to the `<button>`.

<example>
    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
        Single toggle
    </button>
</example>

### Checkbox and radio buttons

Bootstrap's `.button` styles can be applied to other elements, such as `<label>`s, to provide checkbox or radio style button toggling. Add `data-toggle="buttons"` to a `.btn-group` containing those modified buttons to enable their toggling behavior via JavaScript and add `.btn-group-toggle` to style the `<input>`s within your buttons. **Note that you can create single input-powered buttons or groups of them.**

The checked state for these buttons is **only updated via `click` event** on the button. If you use another method to update the input—e.g., with `<input type="reset">` or by manually applying the input's `checked` property—you'll need to toggle `.active` on the `<label>` manually.

Note that pre-checked buttons require you to manually add the `.active` class to the input's `<label>`.

<example>
    <div class="btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="checkbox" checked autocomplete="off"> Checked
        </label>
    </div>
</example>

<example>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
            <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options" id="option2" autocomplete="off"> Radio
        </label>
        <label class="btn btn-secondary">
            <input type="radio" name="options" id="option3" autocomplete="off"> Radio
        </label>
    </div>
</example>
