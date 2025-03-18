## CSS Lists

**The CSS list properties allow you to:**

- Set different list item markers for ordered lists
- Set different list item markers for unordered lists
- Set an image as the list item marker
- Add background colors to lists and list items

`list-style` 	Sets all the properties for a list in one declaration\
`list-style-image` 	Specifies an image as the list-item marker\
`list-style-position` 	Specifies the position of the list-item markers (bullet points)\
`list-style-type`	Specifies the type of list-item marker

----
### List Item Markers
`list-style-type` property specifies the type of list item marker.

### Example:

ul.a {
  list-style-type: circle;
}

ul.b {
  list-style-type: square;
}

ol.c {
  list-style-type: upper-roman;
}

ol.d {
  list-style-type: lower-alpha;
}

----
### Image as List Time Marker
`list-style-image` property specifies an image as the list item marker:
### Example:
ul {
  list-style-image: url('sqpurple.gif');
}

----
### Position List Item Markers
`list-style-position` property specifies the position of the list-item markers (bullet points).\
`list-style-position: outside;` means that the bullet points will be outside the list item.\
`list-style-position: inside;` means that the bullet points will be inside the list item.

### Example:
ul.a {
  list-style-position: outside;
}

ul.b {
  list-style-position: inside;
}
### Remove Default Settings
`list-style-type:none` property can also be used to remove the markers/bullets. Note that the list also has default margin and padding. To remove this, add `margin:0` and `padding:0` to `<ul> or <ol>`:
### Example:
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
### Shorthand property
`list-style property` is a shorthand property. It is used to set all the list properties in one declaration
### Example
ul {
  list-style: square inside url("sqpurple.gif");
}

Order of the property values is:

- `list-style-type` (if a list-style-image is specified, the value of this property will be displayed if the image for some reason cannot be displayed)
- `list-style-position` (specifies whether the list-item markers should appear inside or outside the content flow)
- `list-style-image` (specifies an image as the list item marker)
### Styling with Colors
Anything added to the `<ol>` or `<ul>` tag, affects the entire list, while properties added to the `<li>` tag will affect the individual list items
### Example:
ol {
  background: #ff9999;
  padding: 20px;
}

ul {
  background: #3399ff;
  padding: 20px;
}

ol li {
  background: #ffe5e5;
  color: darkred;
  padding: 5px;
  margin-left: 35px;
}

ul li {
  background: #cce5ff;
  color: darkblue;
  margin: 5px;
}