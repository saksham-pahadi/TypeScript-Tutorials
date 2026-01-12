type ChaiOrder = {
    category: string;
    sugar: boolean;
};
declare function isChaiOrder(order: any): order is ChaiOrder;
declare function processChaiOrder(item: ChaiOrder | string): string;
type MasalaChai = {
    type: 'masala';
    spiceLevel: number;
};
type GingerChai = {
    type: 'ginger';
    amount: number;
};
type ElaichiChai = {
    type: 'elaichi';
    aroma: number;
};
type SpecialtyChai = MasalaChai | GingerChai | ElaichiChai;
declare function prepareSpecialtyChai(chai: SpecialtyChai): string;
export { isChaiOrder, processChaiOrder, prepareSpecialtyChai };
export type { ChaiOrder, SpecialtyChai };
//# sourceMappingURL=typeguard.d.ts.map