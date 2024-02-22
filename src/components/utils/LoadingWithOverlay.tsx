import Loading from '@components/utils/Loading.tsx'

const LoadingWithOverlay = () => (
  <div className='z-[200]'>
    <div className='fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-gray-300 opacity-50' />
    <Loading className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
  </div>
)

export default LoadingWithOverlay
