# SuperCalc

This section will introduce features that appeared in SuperCalc but not VisiCalc or Lotus 1-2-3.

## SuperCalc 3 v1.00

SuperCalc originally came out a year after VisiCalc in 1980, but SuperCalc 3 came out in 1983. No author is mentioned, but the manual I'm using is Documentation 1.0 dated January, 1984 as the Fifth Edition.

I have not reviewed the manuals for SuperCalc 1 or SuperCalc 2, but they likely mirror the features of VisiCalc mostly.

SuperCalc 3 still had a very small grid at 63 columns by 254 rows. Cells were limited to 115 characters. Numbers were stored with a precison of 16 significant digits. Column width can be set from 0 to 127. 10 data sets for graphing. Pi is 3.141592653589793

SuperCalc has an example of using a circular reference to close out a period of time. By using a flag to represent if you are updating a year-to-date section inside of an if statement then you can tell a cell to add itself to another value (recursion) and then set the flag bag to false after the calculations are complete.

### Features

- **Sorting:**
  - Row or Column
  - Partial or All
  - Ascending or Descending
  - Secondary Sort
- **Graphs:**
  - Area Graph (stacked line)
  - Hi-Lo Graph
- **Hide row numbers and column letters** on screen and/or printer
- **Display Formula**
- **Hide:** full row or column or blank certain cells to both screen and printer
- **CSV**
- **Data Management: Select** select records from a query to extract

### Functions

| Function       | Definition             |
| -------------- | ---------------------- |
| @isnum(value)  | tests for numeric type |
| @isdate(value) | tests for date type    |
| @istext(value) | tests for textual type |
