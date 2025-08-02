export default function Home() {


  return (
    <div className="h-screen">
          <h1 className="text-4xl text-black font-light text-center m-10">Flashcard Quiz App</h1>

        <div className="flex justify-center gap-x-5">
          <button className="border-2 border-black bg-white text-black hover:bg-black hover:text-white font-medium px-8 py-3 rounded-md transition-all duration-200">Create New Deck</button>
          <button className="border-2 border-black bg-white text-black hover:bg-black hover:text-white font-medium px-8 py-3 rounded-md transition-all duration-200">Start Quiz</button>
          
        </div>
        <div>
          your flashcard decks
        </div>
        <div>
          <div>
            <h2>math basic</h2>
            <button>edit</button>
            <button>delete</button>
          </div>
          <div>
            <p>25 cards</p>
          </div>
        </div>
      </div>
  );
}
