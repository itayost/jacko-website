interface MenuItemProps {
  name: string
  price: number
  description: string
  category: string
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-transparent hover:border-yellow-accent">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <span className="text-2xl font-bold text-blue-primary">₪{price}</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default MenuItem