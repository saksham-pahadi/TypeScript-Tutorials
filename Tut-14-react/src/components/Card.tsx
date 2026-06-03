
import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren {
    title: string;
    description: string;
    imageUrl?: string; // Optional prop for image URL
    footer?: ReactNode; // Optional prop for footer content
}

const Card = ({ title, children, description, imageUrl, footer }: CardProps) => {
  return (
    <div className="bg-white text-black p-4 rounded shadow-md max-w-sm hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      {imageUrl && <img  src={imageUrl} alt={title} />}
      {children}
      {footer && <footer className="text-sm text-gray-500 mt-4">{footer}</footer>}
    </div>
  )
}

export default Card
