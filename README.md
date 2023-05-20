# use-valid-state

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/xsubject/use-valid-state/blob/main/LICENSE)
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
- `email()`: Checks if the input is a valid email address.
- `url()`: Checks if the input is a valid URL.
- `phoneNumber()`: Checks if the input is a valid phone number.
- `integer()`: Checks if the input is a valid integer.
- `decimal()`: Checks if the input is a valid decimal number.
- `date()`: Checks if the input is a valid date in the format "YYYY-MM-DD".
- `time()`: Checks if the input is a valid time in the format "HH:MM".
- `username()`: Checks if the input is a valid username consisting of alphanumeric characters and underscores.
- `password()`: Checks if the input is a valid password with specific criteria (at least one digit, one lowercase letter, one uppercase letter, and a length between 8 and 16 characters).
- `zipCode()`: Checks if the input is a valid US ZIP code in the format "#####-####" or "#####".
- `ipAddress()`: Checks if the input is a valid IP address.
- `hexColor()`: Checks if the input is a valid hexadecimal color code in the format "#RRGGBB" or "#RGB".
- `filename()`: Checks if the input is a valid filename with an extension.
- `guid()`: Checks if the input is a valid GUID (Globally Unique Identifier) in the format "{XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX}".
- `usZipCode()`: Checks if the input is a valid US ZIP code in the format "#####-####" or "#####".
- `domainName()`: Checks if the input is a valid domain name.
- `creditCard()`: Checks if the input is a valid credit card number (supports Visa, MasterCard, and American Express).
- `vin()`: Checks if the input is a valid VIN (Vehicle Identification Number) consisting of 17 characters.
- `ssn()`: Checks if the input is a valid US Social Security Number in the format "###-##-####".
- `phoneNumberAnyCountry()`: Checks if the input is a valid phone number for any country.
- `emoji()`: Checks if the input contains any emoji characters.
- `htmlTag()`: Checks if the input is a valid HTML tag.
- `macAddress()`: Checks if the input is a valid MAC address in the format "XX:XX:XX:XX:XX:XX" or "XX-XX-XX-XX-XX-XX".
- `passportNumber()`: Checks if the input is a valid passport number.
- `currency()`: Checks if the input is a valid currency amount in the format "$X" or "$X.XX".


### NumberValidator
- `min(min: number)`: Checks if the number is less than or equal to the `min` argument.
- `max(max: number)`: Checks if the number is greater than or equal to the `max` argument.
- `positive()`: Checks if the number is greater than or equal to zero.
- `negative()`: Checks if the number is less than or equal to -1.
- `integer()`: Checks if the number is an integer.
- `decimal()`: Checks if the number is a decimal number (not an integer).
- `even()`: Checks if the number is an even number.
- `odd()`: Checks if the number is an odd number.
- `prime()`: Checks if the number is a prime number.
- `divisibleBy(divisor: number)`: Checks if the number is divisible by the `divisor` argument.
- `multipleOf(multiple: number)`: Checks if the number is a multiple of the `multiple` argument.
- `between(min: number, max: number)`: Checks if the number is between the `min` and `max` arguments, inclusive.
- `nan()`: Checks if the number is NaN (Not-a-Number).
- `finite()`: Checks if the number is a finite number.
- `positiveInfinity()`: Checks if the number is positive infinity.
- `negativeInfinity()`: Checks if the number is negative infinity.
- `wholeNumber()`: Checks if the number is a whole number (an integer without a fractional part).
- `nonNegative()`: Checks if the number is greater than or equal to zero.
- `nonPositive()`: Checks if the number is less than or equal to zero.
- `notZero()`: Checks if the number is not equal to zero.
- `notNaN()`:

## LICENSE
This project is licensed under the MIT License. See the [LICENSE](https://github.com/xsubject/use-valid-state/blob/main/LICENSE) file for details.
