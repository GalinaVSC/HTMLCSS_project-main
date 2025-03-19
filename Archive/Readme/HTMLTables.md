# Теги таблиц
`<table>` - определение таблицы\
`<tr>` - строка таблицы\
`<th>` - заголовок таблицы (используется в первой строке)\
`<td>` - данные таблицы (внутри ячейки)\
`<caption>` - заголовок для таблицы\
`<colgroup>` - группировка одного или нескольких столбцов для форматирования\
`<col>` - свойства столбцов для каждого столбца внутри\
`<colgroup>` - элемент\
`<thead>` - группировка содержимого заголовка в таблице\
`<tbody>` - группировка содержимого основного текста\
`<tfoot>` - группировка содержимого нижнего колонтитула

---


### Simple table:
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>

### Headers:
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table> 

### Colspan
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>43</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>57</td>
  </tr>
</table> 

### Rowspan
<table>
  <tr>
    <th>Name</th>
    <td>Jill</td>
  </tr>
  <tr>
    <th rowspan="2">Phone</th>
    <td>555-1234</td>
  </tr>
  <tr>
    <td>555-8745</td>
  </tr>
</table> 

## References:
[Create Tables Visually](https://htmltable.com/)