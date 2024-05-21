import React from 'react'
import Image from 'next/image'
import MainImg from '/public/images/image-equilibrium.jpg'
import viewIcon from '/public/images/icon-view.svg'
import ethereum from '/public/images/icon-ethereum.svg'
import clock from '/public/images/icon-clock.svg'
import avatar from '/public/images/image-avatar.png'

const index = () => {
  return (
    <div className="bg-blue-card-BG w-[300px] h-[580px] flex flex-col space-y-6 rounded-3xl p-6 font-Outfit">
      <div className="relative group">
        <Image src={MainImg} className="rounded-2xl" />
        <div className=" w-full h-full absolute rounded-2xl top-0 opacity-0 group-hover:cursor-pointer group-hover:bg-Cyan/60 group-hover:opacity-80 transition duration-1000">
          <Image
            src={viewIcon}
            className="absolute left-1/2 top-1/2 -translate-x-6 -translate-y-6 "
          />
        </div>
      </div>

      <h1 className="text-White text-2xl hover:text-Cyan hover:cursor-pointer">Equilibrium #3429</h1>
      <p className="text-Softblue ">
        Our Equilibrium collection promotes balance and calm.
      </p>

      {/* price & timestamps */}

      <div className="flex justify-between ">
        <div className="flex text-Cyan gap-2 items-baseline">
          <Image src={ethereum} className="w-4 h-5 translate-y-1" />
          0.041 ETH
        </div>
        <div className="flex text-Softblue gap-2 items-baseline">
          <Image src={clock} className="w-5 h-5 translate-y-1" />3 days left
        </div>
      </div>
      <hr className="border-Softblue h-[1px] opacity-30" />
      <div className="flex text-White items-center  ">
        <Image
          src={avatar}
          className="w-12 h-12 mr-3 border border-white rounded-full "
        />
        <span className="text-Softblue mr-1 ">Creation of</span>
        <span className="hover:text-Cyan hover:cursor-pointer">Jules Wyvern</span>
      </div>
    </div>
  );
}

export default index