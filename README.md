# use-valid-state

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/xsubject/use-valid-state/blob/master/LICENSE)
[![npm version](https://badge.fury.io/js/use-valid-state.svg)](https://badge.fury.io/js/use-valid-state)

Custom React hook that provides a simple way to validate state in React application

## Features

- Easily manage state with validation in React.
- Supports various types of validators for different data types (strings, numbers).
- Provides a flexible and reusable solution for validation states.
- Fully compatible with default `useState`

## Installation

Install the package using npm:

```bash
npm install use-valid-state
```

## Usage

Here's an example of how to use the useValidState hook:

```typescript
const [email, setEmail] = useValidState(''); // identical `useState`
```
Add the second argument to the validator function that matches `(input: T) => boolean`

```typescript
const [email, setEmail, isValidEmail] = useValidState('', (text: string) => text.length > 5); 
// now, isValidEmail displays whether the given state matches the passed function
```
You can use the hook with any type, but if you're using a `string`, you can just pass in a regular expression
```typescript
const [email, setEmail, isValidEmail] = useValidState('', /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
```
I have also prepared some common validation needs for strings and numbers which you can find in `NumberValidator` and `StringValidator`
```typescript
import { useValidState, NumberValidator } from "use-valid-state"
// ...
const [age, setAge, isValidAge] = useValidState(18, NumberValidator.min(18));
```
You can also pass more than one validator
```typescript
const [age, setAge, isValidAge] = useValidState(6, NumberValidator.min(6), NumberValidator.max(17));
```

### StringValidator
| Function                  | Description                                                                |
|---------------------------|----------------------------------------------------------------------------|
| `email()`                 | Checks if the input is a valid email address.                               |
| `url()`                   | Checks if the input is a valid URL.                                         |
| `phoneNumber()`           | Checks if the input is a valid phone number.                                |
| `integer()`               | Checks if the input is a valid integer.                                     |
| `decimal()`               | Checks if the input is a valid decimal number.                              |
| `date()`                  | Checks if the input is a valid date in the format "YYYY-MM-DD".             |
| `time()`                  | Checks if the input is a valid time in the format "HH:MM".                  |
| `username()`              | Checks if the input is a valid username consisting of alphanumeric characters and underscores. |
| `password()`              | Checks if the input is a valid password with specific criteria.              |
| `zipCode()`               | Checks if the input is a valid US ZIP code.                                 |
| `ipAddress()`             | Checks if the input is a valid IP address.                                  |
| `hexColor()`              | Checks if the input is a valid hexadecimal color code.                      |
| `filename()`              | Checks if the input is a valid filename with an extension.                  |
| `guid()`                  | Checks if the input is a valid GUID (Globally Unique Identifier).           |
| `usZipCode()`             | Checks if the input is a valid US ZIP code.                                 |
| `domainName()`            | Checks if the input is a valid domain name.                                 |
| `creditCard()`            | Checks if the input is a valid credit card number.                          |
| `vin()`                   | Checks if the input is a valid VIN (Vehicle Identification Number).         |
| `ssn()`                   | Checks if the input is a valid US Social Security Number.                   |
| `phoneNumberAnyCountry()` | Checks if the input is a valid phone number for any country.                |
| `emoji()`                 | Checks if the input contains any emoji characters.                          |
| `htmlTag()`               | Checks if the input is a valid HTML tag.                                    |
| `macAddress()`            | Checks if the input is a valid MAC address.                                 |
| `passportNumber()`        | Checks if the input is a valid passport number.                            |
| `currency()`              | Checks if the input is a valid currency amount.                            |


### NumberValidator
| Function                 | Description                                                         |
|--------------------------|---------------------------------------------------------------------|
| `min(min: number)`       | Checks if the number is less than or equal to the `min` argument.    |
| `max(max: number)`       | Checks if the number is greater than or equal to the `max` argument. |
| `positive()`             | Checks if the number is greater than or equal to zero.               |
| `negative()`             | Checks if the number is less than or equal to -1.                    |
| `integer()`              | Checks if the number is an integer.                                  |
| `decimal()`              | Checks if the number is a decimal number (not an integer).           |
| `even()`                 | Checks if the number is an even number.                              |
| `odd()`                  | Checks if the number is an odd number.                               |
| `prime()`                | Checks if the number is a prime number.                              |
| `divisibleBy(divisor)`   | Checks if the number is divisible by the `divisor` argument.         |
| `multipleOf(multiple)`   | Checks if the number is a multiple of the `multiple` argument.       |
| `between(min, max)`      | Checks if the number is between the `min` and `max` arguments.       |
| `nan()`                  | Checks if the number is NaN (Not-a-Number).                          |
| `finite()`               | Checks if the number is a finite number.                             |
| `positiveInfinity()`     | Checks if the number is positive infinity.                           |
| `negativeInfinity()`     | Checks if the number is negative infinity.                           |
| `wholeNumber()`          | Checks if the number is a whole number (an integer without a fraction). |
| `nonNegative()`          | Checks if the number is greater than or equal to zero.               |
| `nonPositive()`          | Checks if the number is less than or equal to zero.                  |
| `notZero()`              | Checks if the number is not equal to zero.                           |
| `notNaN()`               | Checks if the number is not NaN (Not-a-Number).                      |


## LICENSE
This project is licensed under the MIT License. See the [LICENSE](https://github.com/xsubject/use-valid-state/blob/master/LICENSE) file for details.
