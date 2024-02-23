export const ImageCell = (value: string | undefined) => (
    <div className='w-[124px] h-[70px]'>
      <img className='object-cover w-full h-full' alt='table' src={value} />
    </div>
  )
