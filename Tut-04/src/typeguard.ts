type ChaiOrder = {
    category: string,
    sugar: boolean
}

function isChaiOrder(order: any): order is ChaiOrder {
    return (
        typeof order === 'object' &&
        order !== null &&
        typeof order.category === 'string' &&
        typeof order.sugar === 'boolean'
    )
}

function processChaiOrder(item: ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Processing order for ${item.category} chai with sugar: ${item.sugar}`;
    }
    return `Processing custom order: ${item}`;
}

type MasalaChai={
    type: 'masala',
    spiceLevel: number
}
type GingerChai={
    type: 'ginger',
    amount: number
}
type ElaichiChai={
    type: 'elaichi',
    aroma: number
}

type SpecialtyChai = MasalaChai | GingerChai | ElaichiChai;

function prepareSpecialtyChai(chai: SpecialtyChai){
    switch(chai.type){
        case 'masala':
            return `Preparing masala chai with spice level ${chai.spiceLevel}`;
        case 'ginger':
            return `Preparing ginger chai with amount ${chai.amount}`;
        case 'elaichi':
            return `Preparing elaichi chai with aroma level ${chai.aroma}`;
    }
}

function brew(order: MasalaChai | GingerChai | ElaichiChai){
    if('spiceLevel' in order){
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    }
    if('amount' in order){
        return `Brewing ginger chai with amount ${order.amount}`;
    }
    return `Brewing elaichi chai with aroma level ${order.aroma}`;
}

function isStringArray(arr:unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item => typeof item === 'string');
}


export {isChaiOrder, processChaiOrder, prepareSpecialtyChai, brew, isStringArray};
export type {ChaiOrder, SpecialtyChai};