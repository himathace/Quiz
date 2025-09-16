"use client"

import { Edit, Trash2, Plus, Play, Delete, BookOpen, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"


const Displaycard=({val,index})=>{

   const bgColors = [
        'bg-gradient-to-br from-purple-500 to-pink-500',
        'bg-gradient-to-br from-blue-500 to-cyan-500',
        'bg-gradient-to-br from-green-500 to-emerald-500',
        'bg-gradient-to-br from-orange-500 to-red-500',
        'bg-gradient-to-br from-indigo-500 to-purple-500',
        'bg-gradient-to-br from-pink-500 to-rose-500',
        'bg-gradient-to-br from-yellow-500 to-orange-500',
        'bg-gradient-to-br from-teal-500 to-cyan-500'
    ];

    const selectedBgColor = bgColors[index % bgColors.length];

    return(

        <div className="border border-gray-200 shadow-sm  hover:shadow-xl transition-shadow duration-300 rounded-xl h-96 flex flex-col">

          <div className={`h-2/6  ${selectedBgColor} flex justify-center items-center rounded-t-xl`}>
            <BookOpen size={40} className="text-white"></BookOpen>
          </div>

          <div className="p-5">

              <div className="mb-2">
                <p className="text-xl font-semibold text-black">{val.title}</p>
                <p className="font-normal text-gray-500 text-sm line-clamp-1 mb-3">{val.Description}</p>
              </div>

              <div className="flex justify-between mb-2">

                <div className="flex items-center gap-x-2">
                  <BookOpen size={16} className="text-gray-600"></BookOpen>
                  <p className="text-sm text-gray-600">{val.cards.length} cards</p>
                </div>
                <p className="text-sm text-gray-600">2 days ago</p>

              </div>
              
              <div className="flex justify-between mb-3">
                <p className="text-sm text-gray-600">progress</p>
                <p className="text-sm font-semibold">43</p>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex-1 mr-3">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-purple-500 rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `72%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-5 border border-gray-300 w-fit rounded-full text-xs p-1 font-semibold">
                <p>{val.category}</p>
              </div>

              <div className="flex gap-x-3">
                <Link href={`/flashcards/${val._id}`}>
                  <button className="text-white text-sm flex  justify-center font-medium hover:cursor-pointer items-center gap-x-3 bg-gradient-to-r from-violet-500 to-purple-400 w-96 h-10 rounded-xl ">
                    <Play></Play>
                      Study Now
                  </button>
                </Link>
                <button className=" p-1 text-sm flex font-medium border border-gray-400  hover:cursor-pointer items-center gap-x-1 h-10  rounded-xl">
                  <Users></Users>
                </button>
              </div>
          </div>
        </div>


    )
}

export default Displaycard