import { Brain } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Zap } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { CircleCheck } from 'lucide-react';






export default function Dashboard(){
  return(
    <div className="bg-purple-100">

      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">Master Any Subject With</h1>
        <h1 className="text-7xl font-bold bg-gradient-to-r  from-purple-500  to-fuchsia-500  bg-clip-text text-transparent" >Smart Flashcards</h1>
        <p className="pt-5 text-xl text-gray-500">Transform your learning expreience with AI-powerd flashcards.study smarter,retain better,and achive your goles faster</p>
        <div className="mt-5">
          <div className="flex gap-x-5">
            <button className=" bg-gradient-to-r  from-purple-600  to-purple-700 px-10 py-2 text-white font-semibold rounded-xl">Start Learning Free</button>
            <button className="border border-black px-10  py-2 font-semibold rounded-xl">See How It Works</button>
          </div>
        </div>
      </div>

      <div className="h-screen bg-purple-50 flex flex-col items-center justify-center">

        <div className="flex flex-col items-center">
          <p className="text-5xl font-bold">Everything You Need to <span className='bg-gradient-to-r  from-purple-500  to-fuchsia-600 bg-clip-text text-transparent'>Excel</span> </p>
          <p className="mt-3 text-gray-400 text-xl">Powerful Features Designed To Make Learning Engaging And Effective</p>
        </div>
        <div className="flex gap-x-5 px-15 mt-20">
          <div className="shadow-md bg-white p-5 rounded-xl">
            <p><Brain className=' bg-gradient-to-r  from-purple-600  to-fuchsia-600 text-white p-2 rounded-xl' size={40}></Brain></p>
            <p className='mt-3 text-xl font-semibold'>AI-Powered</p>
            <p className='mt-2 text-md text-gray-600'>Smart algorithms adapt to your learning pace and style</p>
          </div>
          <div className="shadow-md bg-white p-5 rounded-xl">
            <p><Sparkles className='bg-gradient-to-r  from-purple-600  to-fuchsia-600 text-white p-2 rounded-xl' size={40}></Sparkles></p>
            <p className='mt-3 text-xl font-semibold'>Interactive Cards</p>
            <p className='mt-2 text-md text-gray-600'>Engaging flashcards with rich media and animations</p>
          </div>
          <div className="shadow-md bg-white p-5 rounded-xl">
            <p><Zap className='bg-gradient-to-r  from-purple-600  to-fuchsia-600 text-white p-2 rounded-xl' size={40}></Zap></p>
            <p className='mt-3 text-xl font-semibold'>Quick Reviews</p>
            <p className='mt-2 text-md text-gray-600'>Efficient spaced repetition for maximum retention</p>
          </div>
          <div className="shadow-md bg-white p-5 rounded-xl">
            <p><TrendingUp className='bg-gradient-to-r  from-purple-600  to-fuchsia-600 text-white p-2 rounded-xl' size={40}></TrendingUp></p>
            <p className='mt-3 text-xl font-semibold'>Track Progress</p>
            <p className='mt-2 text-md text-gray-600'>Detailed analytics to monitor your improvement</p>
          </div>
        </div>
        
      </div>

      <div className='h-screen px-15 flex flex-col items-center justify-center'>

        <div className='flex'>
            <div>
              <p className='text-5xl font-bold'>Why Students Love Our Platform</p>
              <p className='text-xl mt-3 text-gray-500'>Join thousands of learners who have transformed their <br></br> study habits and achieved remarkable results.</p>

              <div className='flex gap-x-3 mt-5'>
                <CircleCheck className='text-purple-500'></CircleCheck>
                <p className='text-xl font-semibold'>Create unlimited flashcard decks</p>
              </div>
              <div className='flex gap-x-3 mt-2'>
                <CircleCheck className='text-purple-500'></CircleCheck>
                <p className='text-xl font-semibold'>Study anywhere, anytime</p>
              </div>
              <div className='flex gap-x-3 mt-2'>
                <CircleCheck className='text-purple-500'></CircleCheck>
                <p className='text-xl font-semibold'>Spaced repetition algorithm</p>
              </div>
              <div className='flex gap-x-3 mt-2'>
                <CircleCheck className='text-purple-500'></CircleCheck>
                <p className='text-xl font-semibold'>Share decks with friends</p>
              </div>
            
            </div>

            <div className='bg-white shadow-md p-7 w-3/6 rounded-xl'>
              <p className='text-6xl font-bold text-purple-500'>98%</p>
              <p className='text-xl font-semibold mt-2'>Success Rate</p>
              <p className='text-md text-gray-700 mt-2'>Students report improved grades and confidence</p>
              <hr className='text-gray-300 mt-5 mb-5'></hr>
              <div className='flex justify-between '>
                <p className='text-gray-500'>Active Users</p>
                <p className='font-bold'>50K+</p>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='text-gray-500'>Flashcards Created</p>
                <p className='font-bold'>2M+</p>
              </div>
              <div className='flex justify-between mt-2'>
                <p className='text-gray-500'>Study Sessions</p>
                <p className='font-bold'>10M+</p>
              </div>
            </div>
          </div>
        

      </div>

      <div className='pt-30 pb-30 flex items-center justify-center bg-white px-15'>

        <div className='bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600

 w-full rounded-3xl h-80 flex flex-col items-center justify-center'>
          <p className='text-5xl font-bold text-white'>Ready to Transform Your Learning?</p>
          <p className='text-xl text-white font-semibold mt-3'>Join thousands of learners who are mastering new skills every day</p>
          <button className='mt-3 h-12 font-semibold text-black bg-white rounded-xl px-12'>Get Started Now</button>
        </div>
      </div>


    </div>
  )
}