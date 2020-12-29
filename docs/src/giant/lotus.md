# Lotus 1-2-3

This section will introduce features that appeared in Lotus 1-2-3 that were not part of VisiCalc.

## Lotus 1-2-3 1A

The manual I am working off of is copyright 1983 and credits John Posner, Jeff Hill, Steven E . Miller, Ezra Gottheil, Mary Lynn Davis as authors.

The first release of Lotus 1-2-3 was significantly more complicated than the final release of VisiCalc. For that reason I will be breaking up the Cinque release into several point releases to flush out the featureset with Lotus 1-2-3. The release was compadible with DOS 1.10 and 2.00. It required 192 KB of memory and could use up to 544 KB of memory.

The grid is much larger at 256 columns (A through IV) by 2,048 rows. A cell can contain up to 240 characters.

### Out of Scope

### Features

- **Color:** the border, the cell pointer and the menu pointer appear in light blue; unprotected cells appear in green characters, and protected cells appear in white characters
- **Absolute Range:** prepend a $ sign in front of a column or row cell reference ($A\$1)
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
  - /XClocation~ - Call subroutine (GoTo, then return)
  - /XR - Return from subroutine
  - /XQ - Quit macro execution
  - /XMlocation~ - Process user-defined menu
  - /XLmessage~location~ - Display a message, then accept a label that is input into location
  - /XNmessage~location~ - Display a message, then accept a number that is input into location

### Functions
