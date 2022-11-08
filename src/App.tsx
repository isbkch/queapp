import addDays from "date-fns/addDays";
import { useCountdown } from "./hooks/useCountDown";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-900 p-16 text-white font-sans relative">
      <div className="container w-2/3 mx-auto my-auto">
        <div className="text-center">
          <div className="text-white text-9xl animated animated-zoom-in animated-duration-600ms">
            Que
          </div>
          <div className="text-stone-400 text-sm font-300 mt-2 font-sans">
            Settle debates, get answers
          </div>
        </div>

        <div className="text-stone-400 text-xl font-300 mt-2 font-sans text-center">
          Follow us to get notified when we launch

          <a href="https://twitter.com/iLyas_in_cloud" className="text-stone-400 text-xl font-400 mt-2 font-sans text-center">@iLyas_in_cloud</a>
          <a href="https://twitter.com/ilias_yahia" className="text-stone-400 text-xl font-300 mt-2 font-sans text-center">@ilias_yahia</a>
        </div>
        <div className="text-gray-400 text-sm font-300 mt-1 font-sans text-center">
          Built with ❤️ in Public{" "}
          <span className="text-violet-400">#BuildInPublic</span>
        </div>
      </div>
      {/* <div className="flex space-x-2 justify-center mt-8">
        <button className="bg-gradient-to-b from-violet-800 to-violet-900 py-4 px-20 rounded-full">
          Ask ?
        </button>
        <button className="py-4 px-20 bg-gradient-to-b from-stone-700 to-stone-800 rounded-full">
          Explore
        </button>
      </div> */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
}

function Card() {
  const [days, hours, minutes, seconds] = useCountdown(addDays(new Date(), 4));
  return (
    <div className="p-4 border border-stone-700 bg-stone-800 rounded-2xl shadow mt-2 w-auto">
      <div className="flex flex-row items-center space-x-2">
        <div className="text-4xl font-bold">What is better?</div>
        <div className="bg-stone-700 border border-stone-600 w-fit px-2 rounded-full">
          Trending 🔥
        </div>
      </div>
      <div className="my-4 flex flex-col space-y-4">
        <span className="p-4 border border-stone-600 bg-stone-700 rounded-2xl shadow">
          Pizza
        </span>
        <span className="p-4 border border-stone-600 bg-stone-700 rounded-2xl shadow">
          Burger
        </span>
      </div>
      <div className="flex flex-row justify-between">
        <span>Time left ⌛ : {days} days</span>
        <span className="text-stone-500">10k votes</span>
      </div>
    </div>
  );
}

export default App;
