# VisiCalc

The original!

## VisiCalc 1.0

I have not found a copy of the original VisiCalc manual from the 1979 release, but I have found a copy of the manual for the Atari 800 32k release with a copyright date of 1981. It lists Dan Fylstra and Bill Kling as authors. I also have the manual for a TRS-80 Model I that lists Dan Fylstra and Kathleen Mandis as authors (copyright 1980).

Dan Bricklin hosts what I think is the original reference card for the first release and they seem to line up with each other well. I assume the Atari 800 32k is a direct port of the first release of VisiCalc and that manual is a good reference for the features in that first release.

### Out of Scope

In VisiCalc, the recalculation mode defaults to column but can be switched to rows. It is likely that this was a limitation in place to keep the codebase small enough to fit in memory as opposed to calculating cells in natural order. Later spreadsheets used topological sorting to ensure that cells were calculated after all their dependent cells have been calculated. Cinque will not be replicating the row and column revaluation method that VisiCalc used.

You could temporarily disable calculations and force recalculations, but that is not necessary when using natural order for reevaluations on modern hardware.

VisiCalc had a prompt line that was used to display prompts from the chosen command. Cinque will use a Command Palette for command selections. The prompt line also showed the memory available, but that isn't relevant for a web-based system.

There was a command called Clear that would erase the spreadsheet with the intention to create a new sheet from scratch. With Cinque you would just create a new sheet.

You could set a global format for the entire sheet. Cinque will provide formatting by cell, row, or column.

Rudimentary bar graphs could be created. A cell can contain an integer from 1-10 and instead of displaying the integer it displayed that number of asterisks (\*). Charts and graphs are going to be out of scope until all spreadsheet functionality is complete. However, integrations with other charting or graphing systems will be possible.

Anything related to printing beyond the basics of what a browser provides by default will be out of scope until all spreadsheet functionality is complete. Integration with other systems is possible.

Anything related to storage commands are out of scope.

Split screen is out of scope for now. You can accomplish the equivalent of what you could do in VisiCalc using multiple browser windows and the OS windowing system. It is possible that a tiling manager like how i3 works could be implemented as part of the roadmap or after all spreadsheet functionality is done.

The repeating label was used to make horizontal lines and decorations, but eventually Cinque will get borders for cells so this functionality would become redundant, so it is out of scope.

### Features

- **Moving the cursor:** use the arrow symbols to change the active cell to be an adjacent cell
- **Go to: Coordinate:** when the user types > followed by the coordinates of a cell AM205 followed by the Enter key, the chosen cell becomes the active cell, and the visible grid is updated to contain the newly active cell
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
- **Tile Command** freeze the rows, columns, or both to the top or left of the cursor

### Functions

In VisiCalc functions began with the @ symbol. Some functions expect a single value, and some accept a list of values. A value can be a number or a cell reference. A list can be a comma separated list of values in addition to a range of cells. In VisiCalc ranges were specified with 3 dots between the two cell references (although you only typed the first dot). VisiCalc evaluated labels and blank entries as 0 (this might be wrong). If you add a column or row in the middle of a defined range, then the new cells are included in the existing range.

| Function                  | Definition                                               |
| ------------------------- | -------------------------------------------------------- |
| @sum(list)                | adds the values of all entry positions cited in the list |
| @min(list)                | chooses the smallest value in the list                   |
| @max(list)                | chooses the largest value in the list                    |
| @count(list)              | results in the number of non-blank entries in the list   |
| @average(list)            | @SUM(list) divided by @COUNT(list)                       |
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
- @npv(discount_rate,range) - Calculates the Net Present Value of the cash flows in the range, discounted at the rate specified by discount_rate (the discount rate expressed as a decimal). The first entry in the range is the cash flow at the end of the first period, the second entry is the cash flow at the end of the second period

## VisiCalc 1.1

The VisiCalc manual I have for version 1.1 was written by Van Walverton and copyright 1981 but shares much with the previous manual. It is for the IBM release. While the manual for the first edition was written for a computer with 32kb of memory, this edition requires at least 64kb of memory and works with 80-character screens in addition to 40 character. Supports up to 256kb of memory.

### Features

- **Cursor Options:** choose between blinking and solid cursor; option to deselect cell and disable cursor
- **Edit Cell**
- **Comparison Operators:**
  - \< less than
  - \> greater than
  - = equal to
  - \<= less than or equal to
  - \>= greater than or equal to
  - \<\> not equal to
- **Logic Functions**
- **Additional Printing Options:**
  - Typeface: emphasized
  - Typeface: condensed
  - Print title and subtitle
  - Double space option

### Functions

| Function                  | Definition                                                 |
| ------------------------- | ---------------------------------------------------------- |
| @true                     | returns true                                               |
| @false                    | returns false                                              |
| @not(value)               | given an evaluation of true or false, returns inverse      |
| @and(list)                | returns true if all members of the list are true           |
| @or(list)                 | returns true if any of the members are true                |
| @if(value1,value2,value3) | if value1 is true returns value2 otherwise returns value3  |
| @isna(value)              | returns true if if value is @na otherwise returns false    |
| @iserror(value)           | returns true if if value is @error otherwise returns false |
| @choose(value,list)       | see below                                                  |

- @choose(value,list) - value is an integer that is used as an index to choose which item to return from the list. For example, in @CHOOSE(A4,17,6,33,39), A4 is evaluated first. If A4 is 1, the result is 17; if A4 is 2, the result is 6; and so on. Only works if the chosen item in the list is a value.

## VisiCalc Advanced

The VisiCalc Advanced manual I have is copyright 1982 and is written by Rob Merges and Van Wolverton for the Apple III.

### Out of Scope

~~This version could lock a cell to only accept a label, a number, or a formula. I can't understand the value of this in modern times.~~ Add this feature back in, it is almost certainly for templates as a form of error-checking/form-validation.

You could use a fill character to repeat between the gutter and the displayed text. An example would be "---Total---" where the hyphens are filling the space because the text is centered. This style is no longer used.

There was a custom format command /F= but I am unable to divine what it did.

### Features

- **Attributes Command:**
  - Displaying formulas or expressions
  - Hiding an entry
  - Protecting entries
  - Setting tab stops
  - Label attributes
  - Value attributes
  - Attribute defaults
- **Help**
- **Percentage:** type a number followed by a % sign and the number will be divided by 100 and display the result
- **Replicate Command:**
  - A - replicate only attributes (new)
  - C - replicate only contents (new)
  - R - replicate using cell references in the same relative position
  - N - replicate with no change in expressions which reference other cells
- **Keystroke Memory:** You could record a keyboard sequence, define a keyboard sequence with text, list all keyboard sequences, edit a keyboard sequence, delete a keyboard sequence, run a keyboard sequence, run a keyboard sequence a set number of times in repetition. If you recorded a keyboard sequence then it automatically puts in special characters to represent certain activities, this is the list of those if you were to define one by text or edit one:
  - ^^ caret
  - ^U up arrow
  - ^D down arrow
  - ^\< left arrow
  - ^\> right arrow
  - ^B delete
  - ^C break
  - ^E edit
  - ^K chain with another keyboard sequence
  - ^P pause execution
  - ^R return
  - ^TF tab
  - ^TB tab back
  - ^? help
- **Additional Printing Options:**
  - Print page numbers
  - Set number of lines per page (0..253)
  - Set width of page in characters (0..255)
  - Set length of paper (0..253)
  - Set width of left margin in characters (0..255)
- **Column Width:** now possible for each column to have its own specified width
- **Replicate Rectangular Area** also called a "block" at the time

### Functions

| Function                         | Definition                                                                       |
| -------------------------------- | -------------------------------------------------------------------------------- |
| @mod(value,divisor)              | returns remainder after a division operation                                     |
| @dotprod(range1,range2)          | returns the sum of each number in range1 multiplied by its counterpart in value2 |
| @round(value,precision)          | returns the value rounded to the precision                                       |
| @mdy(month,day,year)             | returns the number of days since epoch, can use negative values as inputs        |
| @vmdy(month,day,year)            | same as @mdy but requires valid dates                                            |
| @year(value)                     | returns the year based on the number of the epoch value                          |
| @month(value)                    | returns the month of the epoch value                                             |
| @day(value)                      | returns the days of the epoch value                                              |
| @hms(hours,minutes,seconds)      | returns a fraction since midnight of the defined time                            |
| @hour(value)                     | given a fraction of 1 returns the hour since midnight                            |
| @minute(value)                   | given a fraction of 1 returns the hour since midnight                            |
| @second(value)                   | given a fraction of 1 returns the second since midnight                          |
| @lchoose(value,range)            | returns the contents of the n'th cell in the range, regardless if value or label |
| @label(expression)               | returns the label of the expression if it is a label otherwise the expression    |
| @value(expression)               | returns the value of the expression if it is a value otherwise 0                 |
| @irr(value,range)                | see below                                                                        |
| @rate(periods,payment,pv,fv)     | see below                                                                        |
| @pmt(interest,periods,pv,fv)     | see below                                                                        |
| @periods(interest,payment,pv,fv) | see below                                                                        |
| @pv(interest,periods,payment,fv) | see below                                                                        |
| @fv(interest,periods,payment,pv) | see below                                                                        |

- IRR - Returns the interest rate for which the discounted cash flows in the range equals the cash flow v at time 0. In other words, @IRR returns a rate for which the NPV of the cash flows is 0
- Rate - Returns the interest rate given the number of periods (n), payment (pmt), present value of the sum (pv) or future value of the sum (fv). You must enter n and at least two additional arguments. You can enter all arguments. @NA specifies the argument not entered, for example, @RATE(12, -100, 1000, @NA)
- Payment - Returns the payment necessary to comply with the parameters given. You must enter interest rate (i) in decimal form, and the number of periods (n). You must also enter either the present value (pv) or future value (fv). You can enter all arguments. @NA specifies the argument not entered, for example, @PMT(.12, 120, -1000, @NA)
- Periods - Returns the number of periods necessary to comply with the parameters given. You must enter interest rate (i) in decimal form, and at least two additional arguments. You can enter all arguments. @NA specifies the argument not entered, e.g. @PERIODS(.18, 100, @NA, -1000)
- Present Value - Returns the present value of a future sum of money (fv) or of an annuity (pmt) given the parameters specified. You must enter the interest rate (i) in decimal form, and the number of periods (n). You must also specify either the payment or the future value. @NA specifies the argument not entered, e.g. @PV(.18, 25, @NA, 1000).
- Future Value - Returns the future value of a sum of money (pv) or of an annuity (pmt) given the parameters specified. You must enter the interest rate (i) in decimal form and the number of periods (n). You must also specify either the payment (pmt) or the present value (pv). You can enter all arguments. @NA specifies the argument not entered, for example, @FV(.18, 25, -100, @NA)
