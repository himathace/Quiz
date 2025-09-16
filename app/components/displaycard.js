"use client"

import { Edit, Trash2, Plus, Play, Delete, BookOpen } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"


const Displaycard=({val,index})=>{

   const bgColors = [
        'bg-orange-300',
        'bg-blue-300', 
        'bg-green-300',
        'bg-purple-300',
        'bg-pink-300',
        'bg-yellow-300',
        'bg-red-300',
        'bg-indigo-300'
    ];

    const selectedBgColor = bgColors[index % bgColors.length];

    return(

        <div className="border border-gray-200 shadow-sm  hover:shadow-xl transition-shadow duration-300 rounded-xl h-96 flex flex-col">
          <div className={`h-2/6 ${selectedBgColor} flex justify-center items-center rounded-t-xl`}>
            <BookOpen size={40} className="text-white"></BookOpen>
          </div>

          <div className="p-3">

              <div className="mb-2">
                <p className="text-xl font-semibold text-black">{val.title}</p>
                <p className="font-normal text-gray-500 text-sm">Essential words and phrases for beginners</p>
              </div>

              <div className="flex justify-between mb-2">

                <p className="text-sm text-gray-600">120 cards</p>
                <p className="text-sm text-gray-600">2 days ago</p>

              </div>
              
              <div className="flex flex-col mb-2">
                <div className="flex justify-between">
                  <p className="text-gray-600 text-sm">Progress</p>
                  <p className="text-gray-600 text-sm">72%</p>
                </div>
                <div>
                  bar
                </div>
              </div>

              <div className="mb-2">
                <p>Language</p>
              </div>

              <div className="flex gap-x-3">
                <Link href={`/flashcards/${val._id}`}>
                  <button className="text-white text-sm flex  justify-center font-medium hover:cursor-pointer items-center gap-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 w-96 h-10 rounded-xl ">
                    <Play></Play>
                      Study Now
                  </button>
                </Link>
                <button className="text-gray-500 text-sm flex font-medium  hover:cursor-pointer items-center gap-x-1 h-10 bg-gray-400 rounded-xl">
                  Delete
                </button>
              </div>
          </div>
        </div>


    )
}

export default Displaycard