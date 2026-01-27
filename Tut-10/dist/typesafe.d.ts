declare function sum(a: number, b: number): number;
type HasName = {
    name: string;
};
declare function filterByName<T extends HasName>(items: T[], searchTerm: string): T[];
interface Person {
    firstName: string;
    lastName: string;
}
declare function getFullName(person: Person): string;
export { sum, filterByName, getFullName };
//# sourceMappingURL=typesafe.d.ts.map