import React, { useState } from 'react'

interface OrderFormProps {
    onSubmit: (formData: { name: string; quantity: number }) => void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {

    const [name, setname] = useState<string>("Masala Chai")
    const [quantity, setquantity] = useState<number>(1)

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ name, quantity });
    }
  return (
    <div>
      Order Forms
      <form onSubmit={handleSubmit} className="order-form border p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-white">Chai Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setname(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-medium text-white">Quantity:</label>
            <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setquantity(Number(e.target.value))}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Place Order</button>

      </form>
    </div>
  )
}

export default OrderForm
