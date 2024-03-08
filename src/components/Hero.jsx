import { setGlobalState, useGlobalState } from '../store'
import './styles.css';
const Hero = () => {
  const [stats] = useGlobalState('stats')

  return (
    <div className="text-center custom-bg-color text-gray-800 py-24 px-6">
      <h1
        className="text-5xl md:text-6xl xl:text-5xl font-bold tracking-normal mb-12"
        style={{ fontFamily: 'Rubik, sans-serif' }}
      >
        <span className="capitalize">The Crowdfunding Relay for Sustainable Impact</span>
        <br />
        <span className="uppercase playfair-display-font custom-text-color anton-font" style={{ textTransform: 'capitalize' }}>
  Chain Of Change
</span>



      </h1>
      <div className="flex justify-center items-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-green-700"
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-green-600
        font-medium text-xs leading-tight uppercase text-green-600
        rounded-full shadow-md bg-transparent hover:bg-green-700
        hover:text-white"
        >
          Back Projects
        </button>
      </div>

      <div className="flex justify-center items-center mt-10">
        <div
          className="flex flex-col justify-center items-center h-20 border-2 custom-text-color rounded-md shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className="flex flex-col justify-center items-center h-20 border-2 custom-text-color rounded-md shadow-md w-full"

        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className="flex flex-col justify-center items-center h-20 border-2 custom-text-color rounded-md shadow-md w-full"
        >
          <span
            className="text-lg font-bold text-green-900
            leading-5"
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  )
}

export default Hero
