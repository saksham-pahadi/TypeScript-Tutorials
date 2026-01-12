function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind.toUpperCase()} tea...`;
    }
    return `Making tea with ${kind} grams of tea leaves...`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving chai: ${msg}`;
    }
    return 'Serving plain chai';
}
function orderChai(size) {
    if (size === 'small') {
        return `small chai with sugar`;
    }
    if (size === 'medium' || size === 'large') {
        return `Make extra Chai with ${size} size and sugar`;
    }
    return `Chai with ${size} grams of tea leaves`;
}
class KulhadChai {
    serve() {
        return 'Serving chai in kulhad';
    }
}
class CuttingChai {
    serve() {
        return 'Serving chai in kulhad';
    }
}
function prepareChai(chai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
    return chai.serve();
}
export { getChai, serveChai, orderChai, prepareChai, KulhadChai, CuttingChai };
//# sourceMappingURL=typeNarrowing.js.map