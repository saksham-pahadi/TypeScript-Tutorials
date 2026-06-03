interface ChaiCardProps {
    name: string;
    price: number;
    isSpecial?: boolean; // Optional prop
    type?: "Masala" | "Ginger"; // Optional prop with specific string values
}

export function ChaiCard({ name, price, isSpecial = false, type }: ChaiCardProps) {
    return(
        <div className="bg-red-900 chai-card border p-4 rounded-lg shadow-md my-2">
            <h3>{name}</h3>
            <p>Price: ${price.toFixed(2)}</p>
            {isSpecial && <p className="special">Special Offer!</p>}
            {type && <p className="type">{type}</p>}
        </div>
    )
}