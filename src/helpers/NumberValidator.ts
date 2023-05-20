export namespace NumberValidator {
    export const min = (min: number) => ((x: number): boolean => x >= min);
    export const max = (max: number) => ((x: number): boolean => x <= max);
    export const positive = () => min(0);
    export const negative = () => max(-1);
    export const integer = () => ((x: number): boolean => Number.isInteger(x));
    export const decimal = () => ((x: number): boolean => !Number.isNaN(x) && !Number.isInteger(x));
    export const even = () => ((x: number): boolean => x % 2 === 0);
    export const odd = () => ((x: number): boolean => x % 2 !== 0);
    export const prime = () => ((x: number): boolean => {
        if (x <= 1) return false;
        for (let i = 2; i * i <= x; i++) {
            if (x % i === 0) return false;
        }
        return true;
    });
    export const divisibleBy = (divisor: number) => ((x: number): boolean => x % divisor === 0);
    export const multipleOf = (multiple: number) => ((x: number): boolean => x % multiple === 0);
    export const between = (min: number, max: number) => ((x: number): boolean => x >= min && x <= max);
    export const nan = () => ((x: number): boolean => Number.isNaN(x));
    export const finite = () => ((x: number): boolean => Number.isFinite(x));
    export const positiveInfinity = () => ((x: number): boolean => x === Infinity);
    export const negativeInfinity = () => ((x: number): boolean => x === -Infinity);
    export const wholeNumber = () => ((x: number): boolean => x % 1 === 0);
    export const nonNegative = () => ((x: number): boolean => x >= 0);
    export const nonPositive = () => ((x: number): boolean => x <= 0);
    export const notZero = () => ((x: number): boolean => x !== 0);
    export const notNaN = () => ((x: number): boolean => !Number.isNaN(x));
}