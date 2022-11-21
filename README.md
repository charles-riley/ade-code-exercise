# Ade - Credit Card Problem

Before a credit card is submitted to a financial institution, it generally makes sense to run some simple reality checks on the number. The numbers are a good length and it's common to make minor transcription errors when the card is not scanned directly.

The first check people often do is to validate that the card matches a known pattern from one of the accepted card providers. Some of these patterns are:

```
+============+=============+===============+
| Card Type  | Begins With | Number Length |
+============+=============+===============+
| AMEX       | 34 or 37    | 15            |
+------------+-------------+---------------+
| Discover   | 6011        | 16            |
+------------+-------------+---------------+
| MasterCard | 51-55       | 16            |
+------------+-------------+---------------+
| Visa       | 4           | 13 or 16      |
+------------+-------------+---------------+
```

All of these card types also generate numbers such that they can be validated by the Luhn algorithm, so that's the second check systems usually try. The steps are:

```
1. Starting with the next to last digit and continuing with every other
   digit going back to the beginning of the card, double the digit
2. Sum all doubled and untouched digits in the number
3. If that total is a multiple of 10, the number is valid
```

For example, given the card number `4408041234567893`:

```
Step 1:  8 4 0 8 0 4 2 2 6 4 10 6 14 8 18 3
Step 2:  8+4+0+8+0+4+2+2+6+4+1+0+6+1+4+8+1+8+3 = 70
Step 3:  70 % 10 == 0
```

Thus that card is valid.

Let's try one more, `4417123456789112`:

```
Step 1:  8 4 2 7 2 2 6 4 10 6 14 8 18 1 2 2
Step 2:  8+4+2+7+2+2+6+4+1+0+6+1+4+8+1+8+1+2+2 = 69
Step 3:  69 % 10 != 0
```

That card is not valid.

Here are some more example test credit card numbers:

```
American Express	378282246310005
American Express	371449635398431
Discover	6011111111111117
Discover	6011000990139424
Mastercard	5555555555554444
Mastercard	5105105105105100
Visa	4111111111111111
Visa	4012888888881881
Visa	4222222222222
```

Write a program that accepts a credit card number as an argument. The program should print the card's type (or Unknown) as well a Valid/Invalid indication of whether or not the card passes the Luhn algorithm.
