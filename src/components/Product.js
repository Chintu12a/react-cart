import React from 'react'

const Product = () => {
    return (
        <div>
            <div>
                <img src='/images/peproni.png' alt="pizza" />
                <div className="text-center">
                    <h2 className="text-lg font-bold py-2">Havana</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">Small</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>₹ 400</span>
                    <button className="py-1 px-4 rounded-full font-bold bg-yellow-500">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default Product
