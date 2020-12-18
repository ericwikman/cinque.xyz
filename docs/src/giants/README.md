---
sidebar: auto
---

# Shoulders of Giants

## Introduction

Most people attribute the invention of the spreadsheet to [Dan Bricklin](http://www.bricklin.com/history/saiidea.htm) with the 1979 release of [VisiCalc](https://en.wikipedia.org/wiki/VisiCalc). I was born in 1977 and was unable to attend the launch party due to other obligations (stuck at the dinner table until I ate my vegatables, which is my longest active standoff), but I do recall my father using VisiCalc on a [TRS-80 Model III](https://en.wikipedia.org/wiki/TRS-80#modeliii).

VisiCalc was an amazing product and is rightfully credited for ushering in the micro-computer market. [Steve Jobs](https://en.wikipedia.org/wiki/Steve_Jobs) credited VisiCalc for the [Apple II](https://en.wikipedia.org/wiki/Apple_II)'s success and it is hard to say if Apple would have grown to what it is today without the release of VisiCalc.

VisiCalc had to be designed to run with an extremely limited amount of memory that was available on computers at the time. It is incredible what it was able to do running on machines with only 32KB of memory. It is with this context that helps me understand the design decisions that [Bob Frankston](http://rmf.vc/implementingvisicalc) made while writing VisiCalc.

I could write a section of the documentation named Shoulders of Giants to discuss the stack that Cinque is built on and how difficult it would have been to accomplish the goals of Cinque without this foundation. That would be a very worthy piece as there is a tremendous amount of credit to be given to make it possible for me to write Cinque.

However, this section is about [Standing on the Shoulders of Giants](https://en.wikipedia.org/wiki/Standing_on_the_shoulders_of_giants) that created spreadsheets. Dan Bricklin and Bob Frankston launched a new genre of product that attracted other brilliant minds to create new features and functions building upon earlier work. Spreadsheets were capable of doing amazing things in the 1980's and 1990's.

Even in the year 2020, Microsoft is adding features to Excel that were part of products in the 20th century, sometimes once in Excel but removed at some point in time for some reason.

On the flip side, there are also limitations in modern spreadsheets that I think can be directly linked back to design decisions that had to made in VisiCalc based on the limitations of hardware in the late 1970s. It is impressive how much backwards compadibility Microsoft has been able to maintain, but maybe it is time to re-architect spreadsheets based on what computers are capable of today but without losing focus of what defined a spreadsheet in the 20th century.

I have chosen a path of building a modern spreadsheet by doing a long retrospective of the history of a few key spreadsheet programs. Software manuals in the 20th century were very thorough. My intention is to learn from the major thinkers who have come before me, and apply the features and functions that they implemented but in a mannor that is not tied to the limitations that they faced. I think there is value in not rushing this process and building a new spreadsheet application at a very intentional pace.

## 20th Century Spreadsheets

This is a partial listing of spreadsheets that I'm aware of that had releases in the 1980s and 1990s:

### Major Products

- VisiCalc
  - Developed by Software Arts.
  - Published by Personal Software, Inc (renamed to VisiCorp).
  - 1979 Apple II
  - 1980 Apple III, TRS-80 Model III, Apple II, IBM PC, TRS-80 Model 2, Commodore PET CBM-80, HP 125, Atari 800
  - 1981 IBM PC, Sony SMC-70
  - 1982 Advanced Version for Apple III, Apple IIe
  - 1983 Enhanced VisiCalc for TRS-80 Model 4
  - 1985 purchased by Lotus Development and development ended
- SuperCalc
  - Developed by Sorcim
  - 1980 Osborne I
  - Ported to over 150 different hardware platforms
  - About 15% market share before Lotus 1-2-3 released (VisiCalc being the other 85%)
  - 1983 SuperCalc 3 v1
  - 1984 SuperCalc 3 v2
  - 1985 Purchased by Computer Associates
  - 1986 SuperCalc 4 v1
  - 1989 SuperCalc 5
  - 1991 SuperCalc 5.1
- Multiplan
  - Developed by Microsoft
  - Used R1C1 notation as opposed to A1 cell references
  - 1982 first release
  - 1985 v2
  - 1987 v3
  - 1988 v4
- Lotus 1-2-3
  - Developed by Lotus Software
  - 1983 v1
  - 1985 v2
  - 1989 v3 - major release
  - 1995 Purchase by IBM
- Quattro Pro
  - Developed by Borland
  - 1989 v1 (18,276 columns, 1,000,000 rows)
  - 1990 v2
  - 1991 v3
  - 1992 v4
  - 1993 v5
  - ? Purchased by Novel
  - ? Purchased by Corel
- Excel
  - Developed by Microsoft

### Other Spreadsheets

- Ability
- AppleWorks
- Better Working Eight-in-One
- Boeing Calc
- CalcStar
- ClarisWorks
- CompuWorks Office
- Disk-Count Software The Spreadsheet
