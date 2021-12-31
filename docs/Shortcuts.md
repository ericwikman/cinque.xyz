# Shortcuts

This page currently holds each shortcut from historic spreadsheets in the order that they are mentioned in the manual they were first referenced in. When the first release goes live these will be moved to a sub-page for reference and the primary page will indicate the shortcuts that work with Cinque in an order more useful for the user.

VisiCalc was a rough draft of what keyboard shortcuts should be. Lotus has the advantage of thinking through what VisiCalc has created and what they wanted to create. Fast forward to modern times you have what Google Sheets and Excel use for keyboard shortcuts. There are multiple versions of Excel, and Google Sheets has to conform to many operating systems with different keyboard styles. I want to be careful when picking shortcuts for Cinque that it takes into consideration historical features that no longer exist, what people tend to expect from Excel and Google Sheets. In addition I can take into consideration decisions made in SCIM that is likely the most modern spreadsheet before Cinque that is designed to work via keyboard only, and VS Code. VS Code has nothing to do with spreadsheets but is a very well maintained application for developers that understand the important of keyboard shortcuts.

<!-- add Quattro Pro v5 (DOS) or whatever was the last version that was keyboard only -->

| Command                             | Cinque | VisiCalc        | Lotus                | Google Sheets | Excel | SCIM | VS-Code |
| ----------------------------------- | ------ | --------------- | -------------------- | ------------- | ----- | ---- | ------- |
| Cancel Command                      |        | [BREAK], Ctrl-c | [ESC], [BREAK]       |               |       |      |         |
| Go To Cell                          |        | >               | [F5]                 |               |       |      |         |
| Go to A1                            |        | [HOME]          | [HOME]               |               |       |      |         |
| Label Entry                         |        | "               | ' " ^                |               |       |      |         |
| Value Entry                         | # + -  | # + - .         | + - .                |               |       |      |         |
| Calculate Expression                |        | !               | [F9]                 |               |       |      |         |
| Value Reference                     |        | #               |                      |               |       |      |         |
| Function                            | =      | @               | @                    |               |       |      |         |
| Delete Cell                         |        | /b              | /re                  |               |       |      |         |
| Delete Row                          |        | /dr             | /wdr                 |               |       |      |         |
| Delete Column                       |        | /dc             | /wdc                 |               |       |      |         |
| Edit                                |        | Ctrl-e, /e      | [F2]                 |               |       |      |         |
| Format Integer                      |        | /fi             |                      |               |       |      |         |
| Format Currency                     |        | /f\$            |                      |               |       |      |         |
| Left Justify                        |        | /fl             | '                    |               |       |      |         |
| Right Justify                       |        | /fr             | "                    |               |       |      |         |
| Center Justify                      |        |                 | ^                    |               |       |      |         |
| Change Column Width                 |        | /gc             | /wc                  |               |       |      |         |
| Insert Row Above Cursor             |        | /ir             | /wir                 |               |       |      |         |
| Insert Column left of Cursor        |        | /ic             | /wic                 |               |       |      |         |
| Move Column or Row                  |        | /m              |                      |               |       |      |         |
| Replicate Cells                     |        | /r              | /c                   |               |       |      |         |
| Move Cells                          |        |                 | /m                   |               |       |      |         |
| Title Horizontal                    |        | /th             | /wrh                 |               |       |      |         |
| Title Vertical                      |        | /tv             | /wtv                 |               |       |      |         |
| Title Both                          |        | /tb             | /wtb                 |               |       |      |         |
| Title None                          |        | /tn             | /wtc                 |               |       |      |         |
| Disable Cursor                      |        | Shift-Clear     |                      |               |       |      |         |
| Toggle Blinking Cursor              |        | Shift-0         |                      |               |       |      |         |
| Expression Format                   |        | /ae             |                      |               |       |      |         |
| Hide Attribute                      |        | /ah             |                      |               |       |      |         |
| Protect Cell                        |        | /amp            | /rp                  |               |       |      |         |
| Unprotect Cell                      |        | /amu            | /ru                  |               |       |      |         |
| Allow Any Data Type                 |        | /ama            |                      |               |       |      |         |
| Allow Only Labels                   |        | /aml            |                      |               |       |      |         |
| Allow Only Numbers or Formulas      |        | /amv            |                      |               |       |      |         |
| Allow Only Numbers                  |        | /am#            |                      |               |       |      |         |
| Flag Tab Stop                       |        | /aty            |                      |               |       |      |         |
| Remove Tab Stop                     |        | /atn            |                      |               |       |      |         |
| Add Left Padding                    |        | /all            |                      |               |       |      |         |
| Add Right Padding                   |        | /alr            |                      |               |       |      |         |
| Format Number with +/-              |        | /av+            |                      |               |       |      |         |
| Format Negative Number ()           |        | /av\(           |                      |               |       |      |         |
| Format Number Credit/Debit CR/DR    |        | /avc            |                      |               |       |      |         |
| Format Number with Commas           |        | /av,            | /rf,                 |               |       |      |         |
| Format Number with Decimal          |        | /av.            |                      |               |       |      |         |
| Suppress Trailing Zeros             |        | /avz            |                      |               |       |      |         |
| Format Number as Percent            |        | /av%            | /rfp                 |               |       |      |         |
| Format Number as Currency           |        | /av\$           | /rfc                 |               |       |      |         |
| Fixed Format Number                 |        | /avf            | /rff                 |               |       |      |         |
| Format Number as Integer            |        | /avi            |                      |               |       |      |         |
| Format Number as Scientific         |        | /avs            | /rfs                 |               |       |      |         |
| Create Keyboard Sequence            |        | /k= /ke         |                      |               |       |      |         |
| Edit Keyboard Sequence              |        | /ke             |                      |               |       |      |         |
| Clear Keyboard Sequence             |        | /kc             |                      |               |       |      |         |
| List Keyboard Sequences             |        | /k              |                      |               |       |      |         |
| Record Keyboard Sequence            |        | Ctrl-k=         |                      |               |       |      |         |
| Run X Keyboard Sequence             |        | Ctrl-kX         |                      |               |       |      |         |
| Run X Keyboard Sequence N times     |        | Ctrl-kNX        |                      |               |       |      |         |
| Help                                |        | ?               | [F1]                 |               |       |      |         |
| Move to Next Tab Stop               |        | [TAB]           |                      |               |       |      |         |
| Move to Previous Tab Stop           |        | Shift-Tab       |                      |               |       |      |         |
| Divide by 100                       |        | %               | %                    |               |       |      |         |
| Move Screen Up                      |        |                 | [PG-UP]              |               |       |      |         |
| Move Screen Down                    |        |                 | [PG-DN]              |               |       |      |         |
| Move Screen Left                    |        |                 | Shift-Tab, Ctrl-left |               |       |      |         |
| Move Screen Right                   |        |                 | [TAB], Ctrl-Right    |               |       |      |         |
| Move Cursor to Next Section         |        |                 | End-[ARROW]          |               |       |      |         |
| Move Cursor to Sheet Bottom Right   |        |                 | End-home             |               |       |      |         |
| Toggle Absolute Flag                |        |                 | [F4]                 |               |       |      |         |
| Create Range Name                   |        |                 | /rnc                 |               |       |      |         |
| Delete Range Name                   |        |                 | /rnd                 |               |       |      |         |
| Delete All Range Names              |        |                 | /rnr                 |               |       |      |         |
| Range Name Labels                   |        |                 | /rnl                 |               |       |      |         |
| Choose Named Range                  |        |                 | [F3]                 |               |       |      |         |
| Range Justify                       |        |                 | /rj                  |               |       |      |         |
| Range Input                         |        |                 | /ri                  |               |       |      |         |
| Change Alignment of Labels in Range |        |                 | /rll /rlr /rlc       |               |       |      |         |
| Range Erase                         |        |                 | /re                  |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
|                                     |        |                 |                      |               |       |      |         |
