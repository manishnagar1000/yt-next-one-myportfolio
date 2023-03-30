import Link from 'next/link'

export default function FourOhFour() {
  return <>
  <div className='flex flex-col justify-center items-center h-screen'>
  <h1 className='text-4xl'>Content Comming Soon....</h1>
    <Link href="/">
      <div className='bg-blue-500 p-2 my-4 text-white rounded'>
        Go back home
      </div>
    </Link>
  </div>
   
  </>
}