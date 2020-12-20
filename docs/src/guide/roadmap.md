# Roadmap

If I was writing a spreadsheet from scratch with no guideline of when to expect certain features, then I should expect to get feature requests for everything that currently exists in Excel. Alternatively not release it until it is feature complete. Instead I plan to systematically add features and functions roughly in the order that they were initially launched historically.

Between sprints where I add new features and functions based on historic releases I will be doing other cleanup tasks to improve the experience of Cinque. This includes things like:

- UI/UX improvements - as in the way that you interact with the tool as a user
- API functionalities to allow people extend Cinque with complementary systems
- Documentation - [10,000 people a day](https://xkcd.com/1053/) in my native country learn about spreadsheets for the first time every day, and it would be nice for them to have access to first class documentation like users in the 20th century had for the products of that era

Having a public roadmap with a clear plan and path will help keep me and users informed of what is likely coming next. You will know by the roadmap when Cinque is feature complete enough for your personal use cases. It also helps me have a strong and clear focus on what I should be working on. Instead of me being tempted to work on a shiny object that will be the most fun thing for me to work on, I'm making a loose contract with the user to build out future functionalities in a certain order.

Unlike the developers of the past, I have the context of knowing where spreadsheet technology is moving towards. Not in the present future, but the past future. What I mean by that is that when VisiCalc was being written and decisions were made for things like how to design a function or a keyboard shortcut, I can compare their decisions with how Excel and Google Sheets evolved and make decisions that make it easier for me as the developer when I work on later features.

In other words, when I am working on the VisiCalc release, I am not building an identical clone of VisiCalc. If there is a more natural keyboard shortcut than what VisiCalc chose, I can choose the better option now. If there was some limitation that systems of the time had but are no longer constraints, then I don't need to make short term compromises, I can implement code that takes advantage of modern stacks.

## v1 - the VisiCalc Release

- [ ] Display the coordinate of the selected cell (ie. A1)
- [ ] Display the contents of the selected cell in original data format
- [ ] Display format attributes of cell
- [ ] Display row and column headers
- [ ] Build grid 63 columns wide (A..BK) and 254 rows (1..254)
- [ ] Enable cursors to change which cell is active
- [ ] Typeahead - queue up keyboard commands into a buffer so the user does not have to wait for the last command to complete before inputting the next
- [ ] Go to: Coordinate (hotkey >)
- [ ] Label entry
- [ ] Value entry
- [ ] Indicate that a column is not wide enough to show the value in the cell
- [ ] Display ERROR if there is an illegal calculation in the cell with the error as well as all other cells that reference the error cell
- [ ] Arthmetic operators: + - / \* ^ (addition, subtraction, division, multiplication, division)
- [ ] Calculator mode
- [ ] Value Reference
- [ ] @sum(list)
- [ ] @min(list)
- [ ] @max(list)
- [ ] @count(list)
- [ ] @average(list)
- [ ] @abs(value)
- [ ] @int(value)
- [ ] @sqrt(value)
- [ ] @exp(value)
- [ ] @log10(value)
- [ ] @ln(value)
- [ ] @sin(value)
- [ ] @cos(value)
- [ ] @tan(value)
- [ ] @asin(value)
- [ ] @acos(value)
- [ ] @atan(value)
- [ ] @pi
- [ ] @npv(discount_rate,range)
- [ ] @na
- [ ] @error
- [ ] @lookup(value,range)
- [ ] Delete cell
- [ ] Delete row
- [ ] Delete column
- [ ] Format Number
- [ ] Justify - left, right, center
- [ ] Change column width
- [ ] Insert row
- [ ] Insert column
- [ ] Move row
- [ ] Move column
- [ ] Replicate cells
- [ ] Title - horizontal, vertical, both, none
- [ ] Circular reference detection\*
- [ ] Money entry\*
- [ ] Formula entry\*

### Differences

Items above marked with an \* were not included in the original VisiCalc release but are part of Cinque.

- VisiCalc was one of the only spreadsheets that used the decimal form of number storage. VisiCalc stored all values with either 11 or 12 significant digits. In scientific notation it could store any value between 9.999999999E-66 and 9.99999999999E+61. Cinque also stores numbers in an exact manner (as opposed to later spreadsheets that store an approximation of the number as a floating point). It can store any number up to 131072 digits before the decimal point and up to 16383 digits after the decimal point.
- VisiCalc displayed >>>>>>>> in a cell if the column was not wide enough to display the value, but modern systems display ######## instead.
- VisiCalc did math from left to right ignoring algebraic prcedence with the exception of prioritizing operations within ( ). Cinque uses the [order of operations](https://en.wikipedia.org/wiki/Order_of_operations).
- VisiCalc calculated cells sequentially by column (or optionally by row). Cinque will use something more similar to natural order.
- You could temporarily disable recalculations or manually recalculate the sheet.
- Number formatting was limited to either integer or currency. Cinque will provide flexible number formatting.
- Column width could be between 3 and 39 characters, but it was a universal setting so all columns had the same width. Cinque will allow a different column width for each column. Unlike most modern spreadsheets, Cinque will have limited choices for column sizes with the intention of using it as a spreadsheet and not a layout engine. The user will increase or decrease the width with less granularity as it gets wider.
- VisiCalc could copy a vertical or a horizontal range of cells, but not a rectangle (meaning cells in more than one row and more than one column). Cinque will allow for rectanglur range copying as well.
- VisiCalc did not have both fixed and relative references in formulas. You chose at the time of replicating a cell from one place to another if it should be replicated relative or fixed. If you are copying a range then you have to answer that question for each cell that has a reference to another cell. Cinque will go ahead and use the \$ symbol to represent when a column or row in a reference should be fixed during replication.
- VisiCalc allowed circular references, primarily because of the recalculation mode. The manual said they can be very useful, but I'm skeptical.
- VisiCalc had a monetary format but Cinque will have a monetary field type. At this time that just means that it is a numeric field with a scale of 2 (only two digits to the right of the decimal point).
- VisiCalc stored numbers and formulas in the same field. Cinque stores formulas separate from numbers.
- Cinque will naturally allow multiple users to edit the same document at the same time.

### v1.1 - UI Improvements

Step 5 of the [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) states that all bugs need to be resolved before new code is written. This will be considered a given for all further releases.

As for the UI improvements, this sprint will be to put in place the bare minimum expectations of users today that were not part of VisiCalc:

- add mouse related functionality
- add touch related functionality for phone/tablet use
- dark mode - this is a bit of a fad in 2020, but VisiCalc was in dark mode in the 80's so it makes sense to include this at this time

### v1.2 - API Alpha

I have not started to define what the API is at this time, but it will be very simple and since it will be considered Alpha, there will be no contract that it will not include breaking changes on a regular basis.

### v1.3 - VisiCalc 1.1

VisiCalc added the concept of Logic functions in 1.1. Functions like:

- if
- and
- or
- not
- choose

And also new operators like:

- \<
- \>
- \=
- \>\=
- \<\=
- \<\>
- \!\=

This created the possibility to make much more complicated sheets.

### v1.4 - VisiCalc Advanced

The final release of VisiCalc added several types of functions:

- dates
  - day
  - hms
  - hour
  - mdy
  - minute
  - month
  - second
  - year
- financial functions
  - fv
  - pv
  - irr
  - periods
  - pmt
  - rate
- math functions
  - dotprod
  - round

## v2 - Lotus 1-2-3 v1 Release

The next major planned release is to bring up the minimal functionality to include everything that was part of Lotus 1-2-3 v1. I have not started reading the manual for v1 Lotus 1-2-3, so I do not currently know what exactly will be in this and the following releases.

## v3 - 1985 Release

This release focuses on all the additional features of Lotus 1-2-3 v2 as well as include features of SuperCalc 3 v2 and Multiplan v2

## v4 - Quattro v1 Release

Quattro was the first spreadsheet that I worked with, so this has sentimental value, but also Quattro was the first product that pushed Lotus 1-2-3 to improve. Borland did not win a majority of market share, but they did put a product out with deep features.

## v5 - 1992 Release

By 1992 there was the major release of Lotus 1-2-3 v3 and also Quattro Pro was also up to v3. This release also will include the wisdom of the final release of SuperCalc v5.1 and Multiplan v4. My guess is that by the time v5 is released that Cinque will be a decent competitor of Excel and Google Sheets in terms of the functions that 95% of people use in spreadsheets in modern times.

## v6 - Classified

I'm not talking about v6 yet, but it is the reason I began building Cinque. Hopefully I can pull it off.

## v7 - Excel Release

While Excel initially came out in 1985 on the Macintosh and in 1987 on Windows, I have been ignoring it before v7. Everything up until v7 has been based on non-Windows based products. This release will cover Excel v3.

## v8 - 1993 Release

This is an update to Quattro Pro v5 and Excel v5. I will ignore the Windows version of Quattro Pro.

## v9 - 1997 Release

This is the final planned release to match the functionality of 20th century spreadsheets. It will include the final Lotus 1-2-3 for Dos version v4, the Windows release of Lotus 1-2-3 v97, the final release of Quattro Pro for Dos v5.6, Quattro Pro for Windows v6, and Excel v8.
