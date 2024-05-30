import React from 'react'

export default function Results({item}) {
  return (
    <div className='rounded-lg cursor-pointer transition-all hover:translate-x-1  border-[1px] border-zinc-300 w-[90vw] min-w-[350px] overflow-x-hidden mx-2 my-5 py-4'>
        <section className='flex gap-4  px-4 py-4'>
            {
                item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                <img className='w-12 shadow-lg h-12 object-cover rounded-full' src={item.pagemap?.cse_image[0]?.src} alt="" />
                )
            }
            <a href={item.link} className='links'>
                <p className='font-semibold text-neutral-600'>{item.title}</p>
                <a className='text-neutral-400 font-normal'>{item.formattedUrl}</a>
            </a>
        </section>
        <p className='px-4 py-1 text-sm'>{item.snippet}</p>
    </div>
  )
}
