export const required = (values) => {
    if (values) return undefined;

    return "Field is required";
}

export const maxLengthCreator = (maxLength) => (values) => {
    if (values.login > maxLength) return `Max length is ${maxLength} symbols`;

    return undefined;
}