function isChaiOrder(order) {
    return (typeof order === 'object' &&
        order !== null &&
        typeof order.category === 'string' &&
        typeof order.sugar === 'boolean');
}
function processChaiOrder(item) {
    if (isChaiOrder(item)) {
        return `Processing order for ${item.category} chai with sugar: ${item.sugar}`;
    }
    return `Processing custom order: ${item}`;
}
function prepareSpecialtyChai(chai) {
    switch (chai.type) {
        case 'masala':
            return `Preparing masala chai with spice level ${chai.spiceLevel}`;
        case 'ginger':
            return `Preparing ginger chai with amount ${chai.amount}`;
        case 'elaichi':
            return `Preparing elaichi chai with aroma level ${chai.aroma}`;
    }
}
function brew(order) {
    if ('spiceLevel' in order) {
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    }
    if ('amount' in order) {
        return `Brewing ginger chai with amount ${order.amount}`;
    }
    return `Brewing elaichi chai with aroma level ${order.aroma}`;
}
function isStringArray(arr) {
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}
export { isChaiOrder, processChaiOrder, prepareSpecialtyChai };
//# sourceMappingURL=typeguard.js.map