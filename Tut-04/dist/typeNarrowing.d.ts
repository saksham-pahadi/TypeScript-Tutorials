declare function getChai(kind: string | number): string;
declare function serveChai(msg?: string): string;
declare function orderChai(size: 'small' | 'medium' | 'large' | number): string;
declare class KulhadChai {
    serve(): string;
}
declare class CuttingChai {
    serve(): string;
}
declare function prepareChai(chai: KulhadChai | CuttingChai): string;
export { getChai, serveChai, orderChai, prepareChai, KulhadChai, CuttingChai };
//# sourceMappingURL=typeNarrowing.d.ts.map