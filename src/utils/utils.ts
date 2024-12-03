function capitalize(str: string): string {
    const res = [];
    for (let i = 0; i < str.length; i++) {
        res.push(i == 0 ? str[i].toUpperCase() : str[i])
    }

    return String(res);
}

export {
    capitalize,
}