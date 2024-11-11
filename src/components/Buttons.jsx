import React from 'react'
import { QrCode, CreditCard, Banknote, ArrowRight } from "lucide-react"

export default function Buttons() {
  return (
    <div className="bg-orange-400 p-8 md:p-16 rounded-t-3xl md:rounded-3xl  mt-24 relative overflow-hidden md:m-ws md:flex md:justify-between">
          <div className="max-w-2xl pb-10 md:pb-0 md:pe-20">
            <span className="text-white text-xl">* ABOUT PROJECT</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 leading-tight">
              Complete ATM's UX/UI design for the touch and push-buttons interfaces
            </h2>
            <p className='hidden font-minor md:block text-white mt-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdQuisque volutpat condimentum velit.
            </p>
          </div>
          {/* ATM Interface Preview */}
          <div className="bg-white rounded-2xl p-8  md:min-w-[50%] ">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-sm md:text-xl font-medium">ATM Interface</span>
              </div>
              <span className="text-sm md:text-xl text-gray-500">12:30</span>
            </div>


            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 border rounded-xl flex flex-col items-center hover:bg-gray-50 transition-colors">
                <QrCode className="w-6 h-6 mb-2 md:w-20 md:h-20" />
                <span className="text-sm md:text-xl">Scan QR</span>
              </button>
              <button className="p-4 border rounded-xl flex flex-col items-center hover:bg-gray-50 transition-colors">
                <CreditCard className="w-6 h-6 mb-2 md:w-20 md:h-20" />
                <span className="text-sm md:text-xl">Card</span>
              </button>
              <button className="p-4 border rounded-xl flex flex-col items-center hover:bg-gray-50 transition-colors">
                <Banknote className="w-6 h-6 mb-2 md:w-20 md:h-20" />
                <span className="text-sm md:text-xl">Withdraw</span>
              </button>
              <button className="p-4 border rounded-xl flex flex-col items-center hover:bg-gray-50 transition-colors">
                <ArrowRight className="w-6 h-6 mb-2 md:w-20 md:h-20" />
                <span className="text-sm md:text-xl">More</span>
              </button>
            </div>
          </div>
        </div>
  )
}
