# VisiCalc

The original!

## VisiCalc 1.0

I have not found a copy of the original VisiCalc manual from the 1979 release, but I have found a copy of the manual for the Atari 800 32k release with a copyright date of 1981. Dan Bricklin hosts what I think is the original reference card for the first release and they seem to line up with each other well. I assume the Atari 800 32k is a direct port of the first release of VisiCalc and that manual is a good reference for the features in that first release.

### Out of Scope

In VisiCalc the recalculation mode defaults to column but can be switched to rows. I think it is likely this was a limitation in place to keep the codebase small enough to fit in memory as opposed to calculating cells in natural order. Later spreadsheets used topological sorting to ensure that cells were calculated after all their dependent cells have been calculated. Cinque will not be replicating the row and column revaluation method that VisiCalc used.

You could temporarily disable calculations and force recalculations, but that is not necessary when using natural order for reevaluations on modern hardware.

VisiCalc had a prompt line that was used to display prompts from the chosen command. Cinque will use a Command Pallette for command selections. The prompt line also showed the memory available, but that isn't really relevant for a web-based system.

There was a command called Clear that would erase the spreadsheet with the intention to create a new sheet from scratch. With Cinque you would just create a new sheet.

You could set a global format for the entire sheet. Cinque will provide formatting by cell, row or column.

Rudimentary bar graphs could be created. A cell can contain an integer from 1-10 and instead of displaying the integer it displayed that number of asterisks (\*). Charts and graphs are going to be out of scope until all spreadsheet functionality is complete. However, integrations with other charting or graphing systems will be possible.

Anything related to printing beyond the basics of what a browser provides by default will be out of scope until all spreadsheet functionality is complete. Integrations with other systems is possible.

Anything related to storage commands are out of scope.

Split screen is out of scope for now. You can accomplish the equivalent of what you could do in VisiCalc using multiple browser windows and the OS windowing system. It is possible that a tiling manager similar to how i3 works could be implemented as part of the roadmap or after all spreadsheet functionality is done.

The repeating label was used to make horizontal lines and decorations, but eventually Cinque will get borders for cells so this functionality would become redundant, so it is out of scope.

### Features

- **Moving the cursor:** use the arrow symbols to change the active cell to be an adjacent cell
- **Go to: Coordinate:** when the use types > followed by the coordinates of a cell AM205 followed by the Enter key, the chosen cell becomes the active cell and the visible grid is updated to contain the newly active cell
- **Label Entry:** type a single quotation mark (") to indicate that you are inputting a label into a cell
- **Value Entry:** type pound (#) to indicate that you are inputting a numeric value
- **Arithmetic:** simple math using operators for addition, subtraction, division, multiplication, and division
- **Calculator Mode:** typing a bang (!) after an arithmetic expression replaces the expression with the calculated value. Typing (3 / 4) + 2 ! would replace the expression with 2.75
- **Value Reference:** typing pound (#) after a cell reference in a formula will replace the cell coordinate with the actual value of the cell
  typing + followed by a cell reference (H14) followed by # and the cell will be set to the value of the cell reference
- **Delete Cell**
- **Delete Row**
- **Delete Column**
- **Format:** Integer, left justify, right justify, currency
- **Change Column Width**
- **Insert Row or Column**
- **Move Row or Column** move the current column or row directly left or above the cell chosen after typing /m
- **Replicate Command**
- **Tile Command** freeze the rows, columns or both to the top or left of the cursor

### Functions

In VisiCalc functions began with the @ symbol. Some functions expect a single value, and some accept a list of values. A value can be a number or a cell reference. A list can be a comma separated list of values in addition to a range of cells. In VisiCalc ranges were specified with 3 dots between the two cell references. VisiCalc evaluated labels and blank entries as 0 (this might be wrong). If you add a column or row in the middle of a defined range then the new cells are included in the existing range.

| Function                  | Definition                                               |
| ------------------------- | -------------------------------------------------------- |
| @sum(list)                | adds the values of all entry positions cited in the list |
| @min(list)                | chooses the smallest value in the list                   |
| @max(list)                | chooses the largest value in the list                    |
| @count(list)              | results in the number of non-blank entries in the list   |
| @average(list)            | @SUM(list) divided by @CQUNT(list)                       |
| @abs(value)               | results in the absolute value of value                   |
| @int(value)               | results in the integer portion of value                  |
| @sqrt(value)              | results in the square root of value                      |
| @exp(value)               | returns e (2.71828 ...) to the value power.              |
| @log10(value)             | results in the logarithm (base 10) of value              |
| @ln(value)                | returns the natural log (base e) of a number.            |
| @sin(value)               | returns the sine of an angle provided in radians         |
| @cos(value)               | returns the cosine of an angle provided in radians       |
| @tan(value)               | returns the tangent of an angle provided in radians      |
| @asin(value)              | returns the inverse sine of a value in radians           |
| @acos(value)              | returns the inverse cosine of a value in radians         |
| @atan(value)              | returns the inverse tangent of a value in radians        |
| @pi                       | see below                                                |
| @npv(discount_rate,range) | see below                                                |
| @na                       | see below                                                |
| @error                    | see below                                                |
| @lookup(value,range)      | see below                                                |

- @pi - returns the ratio of the circumference of a circle to its diameter as a constant 3.1415926536.
- @na - Not Available is used when a sheet must be set up before the data to be evaluated is available. If entry positions that will later contain data are left blank, they will be evaluated as zero if used as value references in formulas. This will produce the entry ERROR on the sheet wherever zeros appear as denominators and may produce incorrect or misleading values elsewhere. Entering @NA into the blank data positions causes VisiCalc to evaluate all entries that refer to those positions as NA. Without entering the data, you can be assured that all your formulas are legal in VisiCalc.
- @error - Any illegal calculations will show up as ERROR. Like @NA, @ERROR is also displayed in the entry position into which it is entered and all positions that refer to it. In addition, the @ERROR function is often generated by VisiCalc in such cases as when a deleted row or column contained entry positions that are value references in formulas. An ERROR message will also result from a too deep nesting of ( or of +. An expression syntax error, such as NPV with a range, can also generate an ERROR message. Note: it's okay to save sheets that include either ERROR or NA entries
- @lookup(value,range) - Looks up a numeric value in a table and finds the value that corresponds to it. For example, when you do taxes, you look up the gross pay in a tax table and then use a corresponding tax rate. The table used by the @LOOKUP function may be a range within a column or a row. The value that is being looked up will be compared to successive values in that table until a value is found that is larger than the value being looked up (or until the end of the table is reached). The entry in the table that is before this entry is the one that VisiCalc will consider as the "match" for the value being looked up. If the table is in a column, VisiCalc returns the value of the entry that is immediately to the right of the "matching" entry as the value of the function. If the table is in a row, VisiCalc returns the value immediately below the "matching" entry as the value of the function. If the first value in the table is greater than the value being looked up, then the value of the function will be NA.
- @npv(discount_rate,range) - Calculates the Net Present Value of the cash flows in the range, discounted at the rate specified by dr (the discount rate expressed as a decimal). The first entry in the range is the cash flow at the end of the first period, the second entry is the cash flow at the end of the second period
