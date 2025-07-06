import React from 'react';
import list from '../data/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import freebook from '../../public/freebook.jpg';

function FreeBook() {
  // Sort: Free books first, then others
  const sortedData = [...list].sort((a, b) => {
    if (a.category === "free" && b.category !== "free") return -1;
    if (a.category !== "free" && b.category === "free") return 1;
    return 0;
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10  dark:bg-gray-900 dark:text-white'>
      <h1 className='text-2xl font-bold mb-6  dark:bg-gray-900 dark:text-white'>Free & Premium Books</h1>
      <p className=' mb-10'>
        Discover a wide range of books. Slide to explore free offerings and premium content!
      </p>

      <Slider {...settings}>
        {sortedData.map((item) => (
          <div key={item.id} className='px-3'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:-translate-y-1  dark:bg-gray-900 dark:text-white'>
              <img 
                src={freebook}
                alt={item.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <div className='flex items-center justify-between mb-2'>
                  <h2 className='text-lg font-semibold '>{item.name}</h2>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      item.category === 'free'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
                <p className=' text-sm mb-3'>{item.title}</p>
                <div className="flex items-center justify-between">
                  <span className="badge badge-outline">{item.price === 0 ? 'Free' : `₹${item.price}`}</span>
                  <button
                    className={`text-sm px-4 py-1 rounded font-semibold transition duration-300 ${
                      item.category === 'free'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-amber-600 text-white hover:bg-amber-700'
                    }`}
                  >
                    {item.category === 'free' ? 'Read Now' : 'Buy Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FreeBook;
