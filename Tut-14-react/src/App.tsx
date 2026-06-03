
import './App.css'
import Card from './components/Card'
import { ChaiCard } from './components/ChaiCard'
import ChaiList from './components/ChaiList'
import { Counter } from './components/Counter'
import OrderForm from './components/OrderForm'
import type { Chai } from './Types'


function App() {

  const menu: Chai[] = [
    { id: 1, name: "Masala Chai", type: "Masala", price: 2.99, isSpecial: true },
    { id: 2, name: "Ginger Chai", type: "Ginger", price: 2.49 },
    { id: 3, name: "Cardamom Chai", type: "Masala", price: 3.49, isSpecial: true },
  ]
  

  return (
    <div className=" bg-amber-500 min-h-screen text-white font-bold p-8">
      

      <div className="ticks">Vite + React</div>
      <div className="saparator"></div>
    <ChaiCard name="Masala Chai" price={2.99} isSpecial={true} />
    <ChaiCard name="Ginger Chai" price={2.49} />
    <div className="saparator"></div>
    <Counter />
    <div className="saparator"></div>
    <ChaiList items={menu} />
    <div className="saparator"></div>
    <OrderForm onSubmit={(formData) => {
      console.log("Order Placed:", formData.name, ", Quantity:", formData.quantity);
    }} />
    <div className="saparator"></div>
    <Card  title="Masala Chai" description="A delicious blend of spices and black tea." imageUrl='https://png.pngtree.com/png-vector/20250830/ourmid/pngtree-indian-chai-in-clay-cup-png-image_17336367.webp' footer={<p>Special Offer!</p>} />
    </div>
  )
}

export default App
