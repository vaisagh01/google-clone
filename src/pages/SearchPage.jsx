import React, { useEffect, useState } from 'react'
import useGoogleSearch from '../useGoogle';
import { motion, spring } from 'framer-motion';
import {Search,X} from 'lucide-react'
import Results from '../components/Results';

function SearchPage() {
    const [showHome, setShowHome] = useState(true);
    const [searchTime, setSearchTime] = useState();
    const [totalResults, setTotalResults] = useState();
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const search = (e) => {
        setShowHome(false)
        e.preventDefault();
        setQuery(input)
        if(!query) {
            console.error("enter anyting");
            return
        }
        
    }
    const {data} = useGoogleSearch(query)
    console.log(data);
    if(data){
        console.log(data.searchInformation.formattedTotalResults);
        // setTotalResults(data.searchInformation.formattedTotalResults)
        // setSearchTime(data.searchInformation.formattedSearchTime)
    }

  return (
    <div className='h-full'>
            {showHome ? 
                <section className='h-full '>
                    <div className='flex flex-col justify-center gap-9 items-center h-full'>
                    <motion.a exit={{y:-10}} animate={{y:0, opacity:1}} initial={{y:-20, opacity:0}} transition={{duration:0.4}} href=""><img src="google_logo.png" alt="" /></motion.a>
                    <form className='flex flex-col' onSubmit={search}>
                        <motion.div animate={{y:0, opacity:1}} initial={{y:-20, opacity:0}} transition={{duration:0.5}}  whileHover={{y:-2}} className='border-[1px] w-[50vw] max-w-[450px] gap-4 flex border-neutral-400 px-4 items-center rounded-full'>
                            <Search className='text-neutral-400 p-[1px]' />
                            <motion.input  animate={{x:0, opacity:1}} initial={{x:10, opacity:0}} transition={{duration:1}}  className='focus:outline-none text-neutral-700 w-full h-12 ' placeholder='type your query' value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
                        </motion.div>
                        <button type='submit'></button>
                    </form>
                </div>
                </section>
            :
            <div className='flex flex-col gap-5 '>
                <header className='flex justify-start gap-2 lg:px-20 md:px-20 px-5 py-3 border-b-[1px] border-neutral-400'>
                    <form className='flex gap-1 items-center' onSubmit={search}>
                        <motion.div animate={{y:0, opacity:1}} initial={{y:-10, opacity:0}} transition={{duration:0.7}} className='border-[1px] border-neutral-400 items-center rounded-full flex justify-start gap-4'>
                            <motion.a className='items-center flex justify-center max-w-[40px]' animate={{y:0, opacity:1}} initial={{y:-10, opacity:0}} transition={{duration:0.5}} href=""><img src="google-icon.webp " alt="" /></motion.a>
                            <motion.input  animate={{x:0, opacity:1}} initial={{x:10, opacity:0}} transition={{duration:1}}  className='focus:outline-none text-neutral-700 w-[50vw] max-w-[450px] py-3' placeholder='type your query' value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" />
                            <section className=' mr-5'>
                                <X className='text-neutral-500 cursor-pointer' onClick={()=>{setInput("")}}/>
                            </section>
                        </motion.div>
                        <button onClick={()=>{setShowHome(false)}} type='submit' className='border-[1px] border-neutral-500 px-3 py-3 text-slate-400 rounded-full'><Search/></button>
                    </form>
                </header>

                <div className='lg:px-10 md:px-10'>
                    {/* {
                        data.spelling && 
                        <p className='text-xs md:text-sm  text-slate-600 px-10'>Showing results for {data.spelling.correctedQuery} instead of {query}</p>
                    } */}
                    {
                        data && 
                        <p className='text-xs md:text-sm  text-slate-600 px-10'>Found {data.searchInformation.formattedTotalResults} for {query} in {data.searchInformation.formattedSearchTime}</p>
                    }
                    { data &&
                        data?.items.map((item, index) => {
                        return <Results key={index} item={item}/>
                        })
                    }
                </div>
            </div>

            }
    </div>
  )
}

export default SearchPage
{/* Searched Results Appear here */}
      {/* {
        query &&
        <div className='results'>
          <p className='search-information'>About {data?.searchInformation.formattedTotalResults} results in ({data?.searchInformation.formattedSearchTime}s) for {query}</p>
          {
            data?.items.map((item) => {
              return <SearchResults item={item} />
            })
          }
        </div>
      } */}