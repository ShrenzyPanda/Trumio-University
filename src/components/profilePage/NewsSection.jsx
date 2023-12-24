import React, { useState, useEffect } from 'react'


const NewsSection = ({newsData}) => {
    // console.log("News Array:",newsData[0]);
    const [display,setDisplay] = useState({
        title: newsData[0].title,
        url: newsData[0].url,
        image: newsData[0].image,
        content: newsData[0].content
    });
    
    // console.log("Rendering NewsSection now",display);

    useEffect(() => {
        // console.log("EFFECT TRIGGERED");
        setDisplay({...display,
            title: newsData[0].title,
            url: newsData[0].url,
            image: newsData[0].image,
            content: newsData[0].content}
                );
    }, [newsData])
    
    
    const clickHandler = (data) => {
        setDisplay({...display,
        title: data.title,
        url: data.url,
        image: data.image,
        content: data.content}
            );
    };

  return (
    <>
         <div className='flex flex-row justify-between'>

                <div className="flex flex-col w-[60%] mb-3">
                    <img className="rounded-lg w-90 object-cover" src={display.image} alt="photograph" />
                    <div className="overlay position-relative bg-light mt-1">
                        {/* <div className="mb-2 text-sm">
                            <span>{displayNews.source.name}</span>
                            <span className="px-1">|</span>
                            <span>{displayNews.author}</span>
                            <span className="px-1">|</span>
                            <span>{displayNews.publishedAt.substring(0,10)}</span>
                        </div> */}
                        <a className="font-semibold text-2xl" href={display.url} >{display.title}</a>
                        <p className="m-0 font-normal text-base mt-1">{display.content}</p>
                    </div>
                </div>
                <div className='flex flex-col w-[36%]'  >
                {newsData.map((news, index) => (
                <>
                <div className="flex flex-row  mb-4 border border-gray-200 shadow-md rounded-md mx-2 bg-gray-50">
                    <img src={news.image} className="w-[100px] h-[100px] object-cover rounded-l" alt='photograph' />
                    <div className="w-100 flex flex-column bg-light px-3 h-[100px]" >
                        {/* <div className="mb-1 text-sm">
                            <span>{news.source.name}</span>
                            <span className="px-1">|</span>
                            <span>{news.publishedAt.substring(0,10)}</span>
                        </div> */}
                        <button className="my-2 text-sm text-gray-900 text-left line-clamp-2"  onClick={() => clickHandler(news)}>{news.title}</button>
                    </div>
                </div>
                </>
            ))}
                
                

                </div>
                
                  
</div>
    </>
  )
}

export default NewsSection;