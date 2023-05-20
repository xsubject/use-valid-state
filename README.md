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

## LICENSE
This project is licensed under the MIT License. See the [LICENSE](https://github.com/xsubject/use-valid-state/blob/main/LICENSE) file for details.
