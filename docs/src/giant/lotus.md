# Lotus 1-2-3

This section will introduce features that appeared in Lotus 1-2-3 that were not part of VisiCalc.

## Lotus 1-2-3 1A

The manual I am working off of is copyright 1983 and credits John Posner, Jeff Hill, Steven E . Miller, Ezra Gottheil, Mary Lynn Davis as authors.

The first release of Lotus 1-2-3 was significantly more complicated than the final release of VisiCalc. For that reason I will be breaking up the Cinque release into several point releases to flush out the featureset with Lotus 1-2-3. The release was compadible with DOS 1.10 and 2.00. It required 192 KB of memory and could use up to 544 KB of memory.

The grid is much larger at 256 columns (A through IV) by 2,048 rows. A cell can contain up to 240 characters.

Lotus 1-2-3 did not get rid of circular references and gives an example of how it can be used to have a counter. It also mentions the possibility that you may hvae formed your worksheet that needs it for convergance, but I suspect that is only if you switch it to row or column recalc mode.

- SuperCalc has an example of using a circular reference to close out a period of time. By using a flag to represent if you are updating a year-to-date section inside of an if statement then you can tell a cell to add itself to another value (recursion) and then set the flag bag to false after the calculations are complete.

When you set the global format options it only impacts cells added after the change, pre-existing cells keep their formats.

Column width could be from 1 to 72 and defaulted to 9.

15 character range names.

8 character filenames

### Out of Scope

### Features

- **Color:** the border, the cell pointer and the menu pointer appear in light blue; unprotected cells appear in green characters, and protected cells appear in white characters
- **Absolute Range:** prepend a $ sign in front of a column or row cell reference (\$A\$1)
- **Expand Cursor to Range**
- **Named Range:** alias a range like A1..B7 with an up to 15 character name like SALES
- **Precendence:** math done in the order of: exponation, negation, multiplication/division, addition/subtraction.
- **Macros:** basically the same as keystroke memory
  - uses {} symbols to contain special keys
  - allows you to store the macro definitions in cells and assign them to an Alt-{key}
  - added multiple cell macros (to break up long macros into a more digestable format)
  - can pause a macro for manual input
  - single-step mode to do one command at a time of the macto to help diagnose issues
- **/X commands:**
  - /XIcondition~ - If-Then
  - /XGlocation~ - GoTo
  - /XClocation~ - Call subroutine (GoTo, then return) (could nest up to 16 levels)
  - /XR - Return from subroutine
  - /XQ - Quit macro execution
  - /XMlocation~ - Process user-defined menu
  - /XLmessage~location~ - Display a message, then accept a label that is input into location
  - /XNmessage~location~ - Display a message, then accept a number that is input into location
- **Natural Calculation Order:** don't calculate a cell until all of its depedencies have been calculated.
- **Circular Reference Detection:** if a circular reference is detected (a cell depends indirectly on its self) then CALC is displayed in the bottom right corner of the screen
- **Iteration Count:** toggle how many times Lotus can cycle through a set of formulas until they converge or gives up
- **Range Justify:** an unbroken column of labels can be treated as a paragraph, which is similar to merging cells and adjusting justification
- **Range Input:** allow the cursor to only go to unrpotected fields to make the sheet like a form, and then can use macro to move record into data table and clear form fields
- **File Xtract:** create a new sheet based on a range of data from current sheet. Can choose to have the new sheet use just the values or also the formulas

### Functions
