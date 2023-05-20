export namespace StringValidator {
    export const email = () => /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    export const url = () => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    export const phoneNumber = () => /^\+?1?\d{10}$/;
    export const integer = () => /^-?\d+$/;
    export const decimal = () => /^-?\d+(\.\d+)?$/;
    export const date = () => /^\d{4}-\d{2}-\d{2}$/;
    export const time = () => /^\d{2}:\d{2}$/;
    export const username = () => /^[a-zA-Z0-9_]+$/;
    export const password = () => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    export const zipCode = () => /^\d{5}(?:[-\s]\d{4})?$/;
    export const ipAddress = () => /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    export const hexColor = () => /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    export const filename = () => /^[\w\-.]+\.[a-zA-Z]{2,4}$/;
    export const guid = () => /^\{?[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}\}?$/;
    export const usZipCode = () => /^\d{5}(-\d{4})?$/;
    export const domainName = () => /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
    export const creditCard = () => /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13})$/;
    export const vin = () => /^[A-HJ-NPR-Z0-9]{17}$/;
    export const ssn = () => /^\d{3}-\d{2}-\d{4}$/;
    export const phoneNumberAnyCountry = () => /^\+?[0-9\s-]{6,}$/;
    export const emoji = () => /[\u{1F300}-\u{1F6FF}]/u;
    export const htmlTag = () => /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
    export const macAddress = () => /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    export const passportNumber = () => /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
    export const currency = () => /^\$?[0-9]+(\.[0-9]{2})?$/;

}