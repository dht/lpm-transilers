export const parse = (value) => {

    const output = parseInt(value, 10);

    if (isNaN(output)) {
        return '';
    }

    return output;
}

export default parse;