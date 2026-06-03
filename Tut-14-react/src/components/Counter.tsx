import { useState } from "react"


export function Counter(){
    const [count, setcount] = useState<number>(0)
return(
    <div className="flex flex-col items-center gap-4">
        <p>Chai Ordered:{count}</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded outline-2" onClick={() => setcount((c) => c + 1)}>Order One more</button>
    </div>
)
}