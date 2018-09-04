# Code

<p class="lead">Documentation and examples for displaying inline and multiline blocks of code with Bootstrap.</p>

## Inline code

Wrap inline snippets of code with `code`. Be sure to escape HTML angle brackets.

<Example>
  <p>For example, <code>&lt;section&gt;</code> should be wrapped as inline.</p>
</Example>

## Code blocks

Use `pre`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering. You may optionally add the `.pre-scrollable` class, which will set a max-height of 340px and provide a y-axis scrollbar.

<!-- TODO: This needs to work properly, prism is messing it up? -->

<Example>
  <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
  &lt;p&gt;And another line of sample text here...&lt;/p&gt;
  </code></pre>
</Example>

## Variables

For indicating variables use the `var` tag.

<Example>
  <p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
</Example>

## User input

Use the `kbd` to indicate input that is typically entered via keyboard.

<Example>
  <p>To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br></p>
  <p>To edit settings, press <kbd>ctrl</kbd> + <kbd>,</kbd></p>
</Example>

## Sample output

For indicating sample output from a program use the `samp` tag.

<Example>
  <p><samp>This text is meant to be treated as sample output from a computer program.</samp></p>
</Example>
