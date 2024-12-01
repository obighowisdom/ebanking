import Image from 'next/image'
import React from 'react'


const ItemCard = ({icon, title}) => {
  return (
      <div>
          <div className="w-full flex-shrink-0 px-4">
            <div className="flex flex-col items-center space-y-4">
              <Image src={icon} width={64} height={-64} alt='icon' />
              <h3 className="text-lg font-semibold text-[#003087] text-center">
                {title}
              </h3>
            </div>
          </div>
    </div>
  )
}

export default ItemCard