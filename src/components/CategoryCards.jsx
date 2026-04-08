import React from 'react'
const CategoryCards = ({item}) => {
let emoji = ''
  switch(item.category){
    case 'beauty': emoji = '🪮'
      break
    case 'furniture': emoji = '🛋️'
      break
    case 'groceries': emoji = '🫛'
      break
    case 'electronics': emoji = '💻'
    break
    case 'fragrances': emoji = '🐽'
      break
    default: emoji='💗'
    
  }
  return (
    <div className=" bg-muted rounded-2xl p-6 flex flex-col items-center capitalize cursor-pointer">
            <div className=" rounded-2xl bg-[#C8F400]/10 p-3 flex items-center justify-center shrink-0 text-xl">{emoji}</div>
            <div className="text-center">
              <h3 className="text-white text-md font-syne">{item.category}</h3>
              <p className="text-xs text-muted">{item.count} items</p>
            </div>
          </div>
  )
}

export default CategoryCards