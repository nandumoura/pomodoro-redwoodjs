import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className="w-full flex pt-20">
        <div className="mx-auto  bg-red-400 p-8 rounded-lg">
          <div className="flex mx-auto space-between ">
            <button className="hover:bg-red-500 text-white p-4 m-8 rounded-md">
              Pomodoro
            </button>
            <button className="hover:bg-red-500 text-white p-4 m-8 rounded-md">
              Short breake
            </button>
            <button className="hover:bg-red-500  text-white p-4 m-8 rounded-md">
              Long breake
            </button>
          </div>
          <div className="text-5xl font-bold text-slate-50 text-center">
            24:00:00
          </div>
          <div className="flex justify-center p-8">
            <button className=" text-4xl font-black bg-red-600 p-8 hover:bg-red-900 hover:text-white rounded-md">
              START
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
