### What are Pseudo-Elements?

A CSS pseudo-element is used to style specific parts of an element.

For example, it can be used to:

- Style the first letter or line, of an element
- Insert content before or after an element
- Style the markers of list items
- Style the viewbox behind a dialog box

### Syntax
selector::pseudo-element {
  property: value;
}

### The ::first-line Pseudo-element
The `::first-line pseudo-element` is used to add a special style to the first line of a text.

The following example formats the first line of the text in all  `<p>` elements:
### Example
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
Note: The ::first-line pseudo-element can only be applied to block-level elements.

The following properties apply to the ::first-line pseudo-element:

- font properties
- color properties
- background properties
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

### The ::first-letter Pseudo-element

The ::first-letter pseudo-element is used to add a special style to the first letter of a text.

The following example formats the first letter of the text in all `<p>` elements: 

- font properties
- color properties 
- background properties
- margin properties
- padding properties
- border properties
- text-decoration
- vertical-align (only if "float" is "none")
- text-transform
- line-height
- float
- clear
### HTML Classes
p.intro::first-letter {
  color: #ff0000;
  font-size: 200%;
}
### Multiple Pseudo-elements
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}

p::first-line {
  color: #0000ff;
  font-variant: small-caps;
}

### CSS - The ::after Pseudo-element

The ::after pseudo-element can be used to insert some content after the content of an element.

The following example inserts an image after the content of each `<h1>` element:

h1::after {
  content: url(smiley.gif);
}
### CSS - The ::marker Pseudo-element

The `::marker` pseudo-element selects the markers of list items.

The following example styles the markers of list items:\
`::marker` {
  color: red;
  font-size: 23px;
}

### CSS - The ::selection Pseudo-element

The `::selection` pseudo-element matches the portion of an element that is selected by a user.

The following CSS properties can be applied to `::selection: color`, `background`, `cursor`, and `outline`.

The following example makes the selected text red on a yellow background:\
`::selection` {
  color: red;
  background: yellow;
}