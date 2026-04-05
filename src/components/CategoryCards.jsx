import React from 'react'

const CategoryCards = () => {
  return (
    <div className=" bg-muted rounded-2xl p-6 flex flex-col items-center capitalize cursor-pointer">
            <div className=" rounded-2xl bg-[#C8F400]/10 p-3 flex items-center justify-center shrink-0 text-xl">💻</div>
            <div className="text-center">
              <h3 className="text-white text-md font-syne">Electronics</h3>
              <p className="text-xs text-muted">17 items</p>
            </div>
          </div>
  )
}

export default CategoryCards