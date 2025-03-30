### What are Pseudo-Elements?

Псевдоэлемент CSS используется для стилизации определенных частей элемента.

Например, его можно использовать для:

- Style the first letter or line, of an element (Стилизация первой буквы или строки элемента)
- Insert content before or after an element (Вставка содержимого до или после элемента)
- Style the markers of list items (Стилизация маркеров элементов списка)
- Style the viewbox behind a dialog box (Стилизация области просмотра позади диалогового окна)

### Syntax
selector::pseudo-element {
  property: value;
}

### The ::first-line Pseudo-element
The `::first-line pseudo-element` is used to add a special style to the first line of a text. (используется для добавления специального стиля к первой строке текста)

The following example formats the first line of the text in all  `<p>` elements: (В следующем примере форматируется первая строка текста во всех элементах `<p>`:)
### Example
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
Note: The ::first-line pseudo-element can only be applied to block-level elements.(можно применять только к элементам блочного уровня.)

The following properties apply to the ::first-line pseudo-element:
К псевдоэлементу ::first-line применяются следующие свойства:

- font properties - свойства шрифта
- color properties - свойства цвета
- background properties - свойства фона
- word-spacing - интервал между словами
- letter-spacing - интервал между буквами
- text-decoration - оформление текста
- vertical-align - вертикальное выравнивание
- text-transform - преобразование текста
- line-height - высота строки
- clear - очистить

### The ::first-letter Pseudo-element

The ::first-letter pseudo-element is used to add a special style to the first letter of a text. (используется для добавления специального стиля к первой букве текста.)

The following example formats the first letter of the text in all `<p>` elements: (Следующий пример форматирует первую букву текста во всех элементах `<p>`:)

- font properties - свойства шрифта
- color properties - свойства цвета
- background properties - свойства фона
- margin properties - свойства полей
- padding properties - свойства отступов
- border properties - свойства границ
- text-decoration - оформление текста
- vertical-align (only if "float" is "none") - вертикальное выравнивание (только если "float" равно "none")
- text-transform - преобразование текста
- line-height - высота строки
- float - плавающий
- clear - очистка

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

The ::after pseudo-element can be used to insert some content after the content of an element. (можно использовать для вставки некоторого содержимого после содержимого элемента.)

The following example inserts an image after the content of each `<h1>` element: (В следующем примере изображение вставляется после содержимого каждого элемента `<h1>`:)

h1::after {
  content: url(smiley.gif);
}
### CSS - The ::marker Pseudo-element

The `::marker` pseudo-element selects the markers of list items. (выбирает маркеры элементов списка.)

The following example styles the markers of list items: (В следующем примере маркеры элементов списка оформляются:)
`::marker` {
  color: red;
  font-size: 23px;
}

### CSS - The ::selection Pseudo-element

The `::selection` pseudo-element matches the portion of an element that is selected by a user. (Псевдоэлемент `::selection` соответствует части элемента, выбранной пользователем.)

The following CSS properties can be applied to (Следующие свойства CSS можно применить к)`::selection: color`, `background`, `cursor`, and `outline`.

The following example makes the selected text red on a yellow background:(Следующий пример делает выделенный текст красным на желтом фоне:)
`::selection` {
  color: red;
  background: yellow;
}