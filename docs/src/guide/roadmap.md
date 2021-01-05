# Roadmap

If I was writing a spreadsheet from scratch with no guideline of when to expect certain features, then I should expect to get feature requests for everything that currently exists in Excel. Alternatively, not release it until it is feature complete. Instead, I plan to systematically add features and functions in the order that they were initially launched historically.

Between sprints where I add new features and functions based on historic releases, I will be doing other cleanup tasks to improve the experience of Cinque. This includes things like:

- UI/UX improvements - as in the way that you interact with the tool as a user
- API functionalities to allow people extend Cinque with complementary systems
- Documentation - [10,000 people a day](https://xkcd.com/1053/) in my native country learn about spreadsheets for the first time every day, and it would be nice for them to have access to first class documentation like users in the 20th century had for the products of that era

Having a public roadmap with a clear plan and path will help keep me and users informed of what is coming next. You will know by the roadmap when Cinque is feature complete enough for your personal use cases. It also helps me have a strong and clear focus on what I should be working on. Instead of me being tempted to work on a shiny object that will be the most fun thing for me to work on, I'm making a loose contract with the user to build out future functionalities in a certain order.

I am not building an exact clone of VisiCalc. If there is a more natural keyboard shortcut than what VisiCalc chose, I can choose the better option now. If there was some limitation that systems of the time had but are no longer constraints, then I don't need to make short term compromises, I can implement code that takes advantage of modern stacks.

## v0.1 - the VisiCalc Release

- [ ] Display the coordinate of the selected cell (i.e. A1)
- [ ] Display the contents of the selected cell in original data format
- [ ] Display format attributes of cell
- [ ] Display row and column headers
- [ ] Build grid 63 columns wide (A..BK) and 254 rows (1..254)
- [ ] Enable cursors to change which cell is active
- [ ] Typeahead - queue up keyboard commands into a buffer so the user does not have to wait for the last command to complete before inputting the next
- [ ] Go to: Coordinate (hotkey >)
- [ ] Label entry
- [ ] Edit cell
- [ ] Value entry
- [ ] Indicate that a column is not wide enough to show the value in the cell
- [ ] Display ERROR if there is an illegal calculation in the cell with the error as well as all other cells that reference the error cell
- [ ] Arithmetic operators: + - / \* ^ (addition, subtraction, division, multiplication, division)
- [ ] Calculator mode (!)
- [ ] Value Reference (#)
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
- [ ] Justify: left, right, center
- [ ] Change column width
- [ ] Insert row
- [ ] Insert column
- [ ] Move row
- [ ] Move column
- [ ] Replicate cells
- [ ] Title: horizontal, vertical, both, none
- [ ] Circular reference detection\*
- [ ] Money entry\*
- [ ] Formula entry\*

#### Differences

Items above marked with an \* were not included in the original VisiCalc release but are part of Cinque.

- VisiCalc was one of the only spreadsheets that used the decimal form of number storage. VisiCalc stored all values with either 11 or 12 significant digits. In scientific notation it could store any value between 9.999999999E-66 and 9.99999999999E+61. Cinque also stores numbers in an exact manner (as opposed to later spreadsheets that store an approximation of the number as a floating point). It can store any number up to 131072 digits before the decimal point and up to 16383 digits after the decimal point.
- VisiCalc displayed >>>>>>>> in a cell if the column was not wide enough to display the value, but modern systems display ######## instead.
- VisiCalc did math from left to right ignoring algebraic precedence apart from prioritizing operations within ( ). Cinque uses the [order of operations](https://en.wikipedia.org/wiki/Order_of_operations).
- VisiCalc calculated cells sequentially by column (or optionally by row). Cinque will use something more like natural order.
- You could temporarily disable recalculations or manually recalculate the sheet.
- Number formatting was limited to either integer or currency. Cinque will provide flexible number formatting.
- Column width could be between 3 and 39 characters, but it was a universal setting, so all columns had the same width. Cinque will allow a different column width for each column. Unlike most modern spreadsheets, Cinque will have limited choices for column sizes with the intention of using it as a spreadsheet and not a layout engine. The user will increase or decrease the width with less granularity as it gets wider.
- VisiCalc did not have both fixed and relative references in formulas. You chose at the time of replicating a cell from one place to another if it should be replicated relative or fixed. If you are copying a range, then you must answer that question for each cell that has a reference to another cell. Cinque will go ahead and use the \$ symbol to represent when a column or row in a reference should be fixed during replication.
- VisiCalc allowed circular references, primarily because of the recalculation mode. The manual said they can be very useful, but I'm skeptical. The manual for v1.1 no longer mentions the usefulness of a circular reference.
- Cinque will naturally allow multiple users to edit the same document at the same time.
- I think you could only overwrite a cell in the first release of VisiCalc, not edit existing text/value/formula.
- VisiCalc had a monetary format but Cinque will have a monetary field type. The monetary field type stores currency with a fixed fractional precision (2 digits to the right of the decimal). It can store any value between -92233720368547758.08 and +92233720368547758.07. Most spreadsheets do not have a monetary field and can create math errors due to rounding and storing money at a greater precision than the currency allows.
- VisiCalc stored numbers and formulas in the same field. Cinque stores formulas separate from numbers.

#### Artificial Limits

- 255 rows
- 63 columns
- 63 max length
- pi digits
- precision
- nested deep calculations
- number of commands in a macro

### v0.2 - UI Sprint

Step 5 of the [Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/) states that all bugs need to be resolved before new code is written. This will be considered a given for all further releases.

The first UI sprint will be to bring the UI to modern parity of web-based spreadsheets in terms of keyboard commands alone.

- [ ] Highlight a range of cells
- [ ] Dark mode

### v0.3 - API Alpha

I have not started to define what the API is at this time, but the first release of the API will be a quite simple REST based API. It will be considered Alpha, there will be no contract that it will not include breaking changes on a regular basis.

It will expose all the functionality that the web-based version does. It should be possible to build an entirely new clone of the UI but let Cinque handle all the logic.

All new functionality in the future will be released to the API at the same time it is release to the UI.

### v0.4 - VisiCalc 1.1

Introducing logic to functions adds quite a bit of power.

- [ ] New operators: \< \> = \<= \>= \<\>
- [ ] @not(value)
- [ ] @and(list)
- [ ] @or(list)
- [ ] @if(value1,value2,value3)
- [ ] @isna(value)
- [ ] @iserror(value)
- [ ] @choose(value,list)
- [ ] Print sheet title

### v0.5 UI Sprint

This sprint will be based around adding mouse-based gestures that you would find in modern spreadsheets.

- [ ] Select cell with mouse
- [ ] Select range with mouse

Although it will now be possible to have a mouse-based UI, all features of Cinque will always be able to be accomplished by way of the keyboard.

### v0.6 - VisiCalc Advanced

This is a pretty major release because "keystroke memory" is a macro system.

- [ ] Help (?)
- [ ] Percentage (%)
- [ ] Expression format
- [ ] Replicate Block (rectangle)
- [ ] Replicate attributes
- [ ] Replicate contents
- [ ] Hide column
- [ ] Hide row
- [ ] Protect cells
- [ ] Tab stops
- [ ] Center format
- [ ] Add left padding
- [ ] Add right padding
- [ ] Keystroke memory
- [ ] Print page numbers
- [ ] Date entry\*
- [ ] Date formatting
- [ ] @mod(value,divisor)
- [ ] @dotprod(range1,range2)
- [ ] @round(value,precision)
- [ ] @mdy(month,day,year)
- [ ] @vmdy(month,day,year)
- [ ] @year(value)
- [ ] @month(value)
- [ ] @day(value)
- [ ] @hms(hours,minutes,seconds)
- [ ] @hour(value)
- [ ] @minute(value)
- [ ] @second(value)
- [ ] @lchoose(value,range)
- [ ] @label(expression)
- [ ] @value(expression)
- [ ] @irr(value,range)
- [ ] @rate(periods,payment,pv,fv)
- [ ] @pmt(interest,periods,pv,fv)
- [ ] @periods(interest,payment,pv,fv)
- [ ] @pv(interest,periods,payment,fv)
- [ ] @fv(interest,periods,payment,pv)

#### Differences

- I think that the hide attribute just made the cell look blank, but I plan to implement it to hide entire columns and rows
- The mode attribute could be used to limit a cell to only be able to contain a label, a number, or a formula. I don't think that adds value to Cinque.
- The label attribute allowed you to fill the space between displayed text and the gutter with a repeating character.
- VisiCalc Advanced added much better number formatting, but my intention was to provide a very flexible number format system in the initial release. For reference (and to verify that all of these were included in the first version) these are the additional formats:
  - \+ - display positive numbers with a plus sign in front of them and negative values with a minus sign
  - \( - display negative numbers inside of parenthesis
  - c - display CR to the right of negative numbers and DR to the right of positive numbers. I was taught in accounting that debit means left and credit means right and has no association with positive or negative numbers, so I think this might be a bad practice to re-introduce.
  - , - display a comma between sets of 3 digits (1,000,000)
  - . - display a decimal point always
  - z - do not show trailing zeros after the decimal point
  - % - display the cell as a percentage (.3333 becomes 33.33%)
  - \$ - display a dollar sign to the left of the number
  - f - specifies how many digits to the right of the decimal should display (fixed format)
  - i - display as an integer
  - s - display as scientific notation
- I do not know how the Keystroke memory system worked, so I'm sure my implementation will be different, but either way it is the start of a macro system. I do know that VisiCalc limited it to 123 keystrokes, which I likely will not do. I assume you could have up to 26 keyboard sequences since they were named with a single alphabetic character. It also supported a pause function, but I don't know how it worked.
- The date and time functions in VisiCalc Advanced don't really map to how we handle dates and times in the 21st century. I'll provide functions based on modern standards instead.
- VisiCalc used an epoch date of 1979-Jan-01. I don't intend on having an epoch date. Linux uses 1970-Jan-01 but most spreadsheets after VisiCalc used 1900-01-01. My plan is to use the ISO 8601 standard for date storage. Cinque will allow dates to go as far back as 4,713 BC all the way to 294,276 AD.

### v0.7 UI Sprint

- [ ] Mobile device compatibility

### v0.8 Tutorial

Write a tutorial that is like the tutorial provided in the VisiCalc manual covering all features implemented. Use the keyboard sequence system to allow people to follow along in a live tutorial in the actual application.

## v1.0 - Lotus 1-2-3 v1A Release

The first spreadsheet to compete with VisiCalc was not Lotus 1-2-3. VisiCalc was initially released in 1979, and in 1980 SuperCalc was released. Later Microsoft released MicroPlan in 1982. SuperCalc started as mostly a clone of VisiCalc and MultiPlan was difficult to learn and use. Lotus 1-2-3 was the first major competitor to VisiCalc that brought in a large amount of new functionality and also benefited by targeting DOS. Both SuperCalc and MultiPlan introduced features and are recognized later in the roadmap. Some of the features that Lotus 1-2-3 introduced were included in later releases of VisiCalc, so the below is not an exhaustive list of features that Lotus premiered, but features that the final release of VisiCalc did not include.

I'm breaking the Lotus 1-2-3 parity release into four parts: named ranges and new functions, macro imporvements, data commands, and database management.

- [ ] Named range
  - [ ] Range Name Create
  - [ ] Range Name Delete
  - [ ] Range Name Reset
- [ ] Range name labels - sort of like naming constants, one column of labels and next to it is a column of values (or row to row)
- [ ] Range format
- [ ] Range label prefix - change alignment of labels in a range
- [ ] Range justify - create paragraph out of long label
- [ ] Range input - only allow cursor to move to unprotected cells
- [ ] Range erase - delete cell(s)
- [ ] Default format for new cells (precedence row, column, default)
  - [ ] number format
  - [ ] date format
  - [ ] justification
  - [ ] column-width
- [ ] Remove cell or column or row formatting (cells revert to current default format)
- [ ] @atan2(x,y)
- [ ] @rand
- [ ] @hlookup(x,range,offset)
- [ ] @vlookup(x,range,offset)
- [ ] @std(list)
- [ ] @var(list)

#### Differences

- Lotus introduced both relative and absolute named ranges, but a named range should only ever be considered the cells in that list for the named range.
- I may handle moving cells that are part of a named range differently than Lotus (and future spreadsheets) did. I see named ranges as an array of defined cells, so once you add a cell to a named range, I don't think it matters if it moves elsewhere on the sheet. Lotus considered the boundry cells and the middle cells functionally different when moving a cell.

### v1.1 - API Beta

A graphql version of the API will be provided. This should be a significant performance increase for requesting data since you should be able to request a full sheet with as a single action instead of requesting each cell individually.

The previous REST API will still function but may be modified. Although there is not yet a contract, the hope is that I have had time to think through the API by this time to be able to make the next release the first stable release with a contract that it will be supported for some time.

### v1.2 - Integration Foundation

Now that we have a stronger API system we can include all of the necessary API calls to allow for third party integrations to be able to perform the same functionality that Lotus could in reference to file management, graphinh and printing.

- [ ] File xtract
- [ ] Graphing API
- [ ] Printing API

### v1.3 - Macro Improvements

- [ ] Multiple-cell macros
- [ ] Pause macro
- [ ] Single-step mode macros
- [ ] /X commands

#### Differences

- The way /X commands were implemented, while historically relevant as a big breakthrough in the power of a spreadsheet, is certainly not close to what would be considered best practices today. I will attempt to design a system that will allow the user to build a similarly complex spreadsheet but using functional programming paradigm.

### v1.4 Data Commands

This release includes data command features that are not part of the Database Management System (DBMS) functionality.

- [ ] Data Table 1
- [ ] Data Table 2
- [ ] Fill
- [ ] Distribution

### v1.5 - Database Management System

Database Management functionality is a prretty impressive feature to add to a spreadsheet by todays standards, and justifies the price that was being charged for the product (around \$1k in 2020 dollars).

- [ ] Database
  - [ ] Sort
  - [ ] Query
    - [ ] Find
    - [ ] Extract
    - [ ] Unique
    - [ ] Delete
    - [ ] Label match criteria
      - [ ] ? - matches any single character
      - [ ] - - matches all characters to the end of the label
      - [ ] ~ - return everything that does not match the criteria after the tilde
    - [ ] Number match criteria
    - [ ] Formula criteria (numeric comparison)
    - [ ] "and" criteria
    - [ ] "or" criteria
  - [ ] @dcount
  - [ ] @dsum
  - [ ] @davg
  - [ ] @dvar
  - [ ] @dstd
  - [ ] @dmax
  - [ ] @dmin

## v2 - 1985 Release

This release focuses on all the additional features of Lotus 1-2-3 v2 as well as include features of SuperCalc 3 and MultiPlan v2. Some features that SuperCalc and MultiPlan introduced were immitated in later releases of VisiCalc and Lotus 1-2-3. So don't take this feature list to be an exhaustive list of features first premiered by SuperCalc or MultipPlan, just features that were not included in VisiCalc or Lotus 1-2-3 v1A. The point of this release branch of Cinque is to bring it up to speed with all major features of spreadsheets available in the market in 1985.

### v2.0 - SuperCalc 3

- [ ] Goto column
- [ ] Goto row
- [ ] Hide row and column titles
- [ ] Control if the enter key moves to next cell or stay on current cell
  - in Cinque this will be Ctrl-arrow to move into edit of next cell using same data type
- [ ] Display formulas
- [ ] If active cell has no text, display it blank even if a cell to the left is a long-label
- [ ] Sort
- [ ] Hide row
- [ ] Hide column
- [ ] Hide cell (no data sent to browser)
- [ ] CSV
- [ ] Area chart support
- [ ] Hi-Lo graph support

### v2.1 - MultiPlan v2

- [ ]

### v2.2 - Lotus 1-2-3 v2.2

- [ ]

## v3 - Quattro v1 Release

Quattro was the first spreadsheet that I worked with, so this has sentimental value, but also Quattro was the first product that pushed Lotus 1-2-3 to improve. Borland did not win a majority of market share, but they did put a product out with deep features.

## v4 - 1992 Release

By 1992 there was the major release of Lotus 1-2-3 v3 and Quattro Pro was also up to v3. This release also will include the wisdom of the final release of SuperCalc v5.1 and MultiPlan v4. My guess is that this release will be a decent competitor of Excel and Google Sheets in terms of the functions that 95% of people use in spreadsheets in modern times.

## v5 - Classified

I'm not talking about v5 yet, but it is the reason I began building Cinque. Hopefully, I can pull it off.

## v6 - Excel v3 Release

While Excel initially came out in 1985 on the Macintosh and in 1987 on Windows, I have been ignoring it before v6. Everything up until v6 has been based on non-Windows based products. This release will cover Excel v3.

## v7 - 1993 Release

This is an update to Quattro Pro v5 and Excel v5. I will ignore the Windows version of Quattro Pro.

## v8 - 1997 Release

This is the final planned release to match the functionality of 20th century spreadsheets. It will include the final Lotus 1-2-3 for Dos version v4, the Windows release of Lotus 1-2-3 v97, the final release of Quattro Pro for Dos v5.6, Quattro Pro for Windows v6, and Excel v8.

## v9 - 2000 Release

Excel 2000 came out in early 1999.
