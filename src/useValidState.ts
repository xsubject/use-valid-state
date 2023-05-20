import { useEffect, useState } from "react";

type SetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;
type InitalState<T> = T | (() => T);

export type ValidatorFunction<T> = (input: T) => boolean
export type Validator<T> = T extends string ? (ValidatorFunction<T> | RegExp) : ValidatorFunction<T>;

type useValidStateRet<T> = [T, SetStateAction<T>, boolean] | [T, SetStateAction<T>]

const hasAnyFalse = (data: boolean[]): boolean => {
    for(const b of data) {
        if(b === false) {
            return b;
        }
    }
    return true;
}

export function useValidState<undefined>(): [undefined, SetStateAction<undefined>];
export function useValidState<T>(initialState: InitalState<T>): [T, SetStateAction<T>];
export function useValidState<T>(initialState: InitalState<T>, ...validators: Validator<T>[]): [T, SetStateAction<T>, boolean];
export function useValidState<T>(initalState?: InitalState<T>, ...validators: Validator<T>[]): useValidStateRet<T>  {
    const [state, setState] = useState(initalState as T | (() => T))
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        if(validators !== undefined) {
            setIsValid(
                hasAnyFalse(
                    validators.map((validator) => {
                        if (typeof validator === "function") {
                            return validator(state);
                        } else if (typeof state === "string") {
                            return validator.test(state);
                        }
                        return true;
                    })
                )
            );
            
        }
    }, [state, validators])
    const ret: (T | SetStateAction<T> | boolean)[] = [state, setState]
    if(validators !== undefined) {
        ret.push(isValid);
    }
    return ret as useValidStateRet<T>;
}
