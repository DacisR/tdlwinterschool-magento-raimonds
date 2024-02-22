export function parseMenuExpression(menuExpression) {
    const parts = menuExpression.split('->');

    return parts.map((p) => p.trim());
}

export function priceStringToNumber(priceString) {
    const numberString = priceString.replace('$', '');
    
    return Number(numberString);
}
