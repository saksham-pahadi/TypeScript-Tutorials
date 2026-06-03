
import type { Chai } from '../Types'
import { ChaiCard } from './ChaiCard'

interface ChaiListProps{
    items: Chai[]
}

const ChaiList = ({ items }: ChaiListProps) => {
  return (
    <div>
      {items.map((chai)=>(<ChaiCard key={chai.id} name={chai.name} price={chai.price} type={chai.type} isSpecial={chai.isSpecial} />))}
    </div>
  )
}

export default ChaiList
