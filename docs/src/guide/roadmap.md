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

I have not found a copy of the original VisiCalc manual from the 1979 release, but I have found a copy of the manual for the Atari 800 32k release with a copyright date of 1981. Also Dan Bricklin hosts what I think is the original reference card for the first release and they seem to line up with each other well.

The goal for the first release will be to include all the functionality of the first VisiCalc release before I move on to any further improvements. However, some things will not be included, like the following:

- Printing - I figure that browsers provide the majority of what you need to be able to print a sheet. There may come a time where I add some CSS formatting features for printing, but not at this time.
- Storage - since Cinque is accessible via the Internet only (at this time), I will not be implementing the concept of saving or loading files. Cinque will automatically
- Graphs/Charting - As surprising as it may be, even the first release of VisiCalc had the concept of bar graphs. It would actually be pretty trivial to implement the way that they did, but I do not intend on including graphs or charts as part of the current roadmap.
- Split screen - it is pretty cool that this was included in the first release, but I am not going to reproduce this feature at this time. The reason is that I feel that you can accomplish this already using the OS and browser UI (just open two browser windows to the same sheet and resize them however you want). I do think that there could be a day that building a tiling manager as part of Cinque similar to the i3 tiling window manager could be really cool, but is not a priority.
- Recalculations - based on constraints of the time VisiCalc could be put into a reevaluation order for recalculations either by row or column which impacted the style of where formulas went compared to the cells it references. You could also suspend automatic calculations or force additional recalculations. None of this is necessary anymore.
- Repeating labels - these were used for horizontal lines and such

Features beyond original VisiCalc:

- Data types - VisiCalc only included a label and a value as data types (formulas were considered a value). I have an opportunity to include additional and more specific data types that will make it possible to do more powerful things in the future. This is a sample of some data types that will be included in the first release:
  - numeric - I believe most spreadsheets used floating point numbers, although not VisiCalc. VisiCalc used the decimal form, which provided accuracy in calculations, but probably took more time to do arithmetic. "VisiCalc guarantees precision to eleven digits (and sometimes twelve digits) at base 10. The twelfth digit (the last 6 in the expression above) on the edit line at the moment is a 'guard digit,' which allows VisiCalc to determine which way to round the eleventh digit when a calculation is completed". Cinque's numeric format can be many orders of magnitude more precise. It is possible in the future that the user will be able to specify the precision both before and after a decimal, which can improve accuracy for doing math with money and other examples.
  - text - essentially the same as VisiCalc's label
  - formula - basically stored as text, but separate from a numeric or string field
  - date
- additional formatting options
- multiple user editing

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
