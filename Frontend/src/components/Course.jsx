import React from 'react';
import list from '../data/list.json'
import course1 from '../../public/course1.avif'
import {Link} from 'react-router-dom'

function Course() {
  // Sorting: free category first
  const sortedData = [...list].sort((a, b) => {
    if (a.category === 'free' && b.category !== 'free') return -1;
    if (a.category !== 'free' && b.category === 'free') return 1;
    return 0;
  });

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  dark:bg-gray-900 dark:text-white'>
        {/* Header */}
        <div className='mt-28 text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have you{" "}
            <span className='text-pink-400'>Here! :)</span>
          </h1>

          <p className='mt-12 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, magni, neque mollitia deserunt aut voluptatibus voluptate molestias fugiat voluptatem a aspernatur repellendus doloremque impedit, soluta ducimus nam enim iusto officiis?
          </p>

          <Link to='/'>
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
            Back
          </button>
          </Link>
        </div>

        {/* Card Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16  dark:bg-gray-900 dark:text-white'>
          {sortedData.map((item) => (
            <div
              key={item.id}
              className='bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl'
            >
              <img
                src={course1}
                alt={item.name}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <div className='flex items-center justify-between mb-2'>
                  <h2 className='text-lg font-semibold text-gray-800'>{item.name}</h2>
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
                <p className='text-gray-600 text-sm mb-3'>{item.title}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm font-semibold text-gray-700'>
                    {item.price === 0 ? 'Free' : `₹${item.price}`}
                  </span>
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
