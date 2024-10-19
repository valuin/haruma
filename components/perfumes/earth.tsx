'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
export default function EarthNature() {
  const perfumes = [
    {
      id: 1,
      name: 'Farhampton',
      brand: 'HMNS',
      imgSrc: '/farhampton.png',
      scentFamily: ['Amber', 'Lavender', 'Aromatic'],
      rating: 4.5,
      reviews: 120,
    },
    {
      id: 2,
      name: 'Le Labo',
      brand: 'Santal 33',
      imgSrc: '/farhampton.png',
      scentFamily: ['Woody', 'Spicy'],
      rating: 4.8,
      reviews: 150,
    },
    {
      id: 3,
      name: 'Dior',
      brand: 'Sauvage',
      imgSrc: '/farhampton.png',
      scentFamily: ['Fresh', 'Citrus'],
      rating: 4.9,
      reviews: 100,
    },
    {
      id: 4,
      name: 'Chanel',
      brand: 'Bleu',
      imgSrc: '/farhampton.png',
      scentFamily: ['Woody', 'Aromatic'],
      rating: 4.7,
      reviews: 80,
    },
    {
      id: 5,
      name: 'Creed',
      brand: 'Aventus',
      imgSrc: '/farhampton.png',
      scentFamily: ['Fruity', 'Musk'],
      rating: 5.0,
      reviews: 200,
    },
    {
      id: 6,
      name: 'Tom Ford',
      brand: 'Oud Wood',
      imgSrc: '/farhampton.png',
      scentFamily: ['Woody', 'Oriental'],
      rating: 4.6,
      reviews: 60,
    },
    {
      id: 7,
      name: 'Jo Malone',
      brand: 'Wood Sage & Sea Salt',
      imgSrc: '/farhampton.png',
      scentFamily: ['Herbal', 'Aquatic'],
      rating: 4.8,
      reviews: 95,
    },
  ];

  // State untuk mengontrol apakah akan menampilkan semua parfum
  const [showAll, setShowAll] = useState(false);

  // Tentukan jumlah parfum yang akan ditampilkan
  const displayedPerfumes = showAll ? perfumes : perfumes.slice(0, 4);

  return (
    <div className="w-full flex flex-col mb-20 ">
      <div className="flex justify-between items-center ml-10 mr-10">
        <h2 className="text-xl font-medium text-gray-700">For Those Who Love The Earthy Richness Of Nature</h2>
        {/* {perfumes.length >= 4 && (
          <button onClick={() => setShowAll(!showAll)} className="text-[#FF6F61] hover:underline text-md font-bold">
            {showAll ? 'See Less' : 'See More'}
          </button>
        )} */}
      </div>

      <div className="flex flex-row flex-wrap mt-5 ml-20 gap-10">
        {displayedPerfumes.map((perfume) => (
          <div key={perfume.id} className="p-5">
            {/* Hover effect hanya di area gambar */}
            <Link href={`/perfume/${perfume.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="relative group cursor-pointer">
                <img src={perfume.imgSrc} alt={perfume.name} className="w-48 h-48 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md p-4">
                  <h1 className="text-white font-bold text-lg w-full ml-5">Scent Family</h1>
                  {perfume.scentFamily.map((scent, index) => (
                    <p key={index} className="text-white w-full relative before:content-['•'] before:absolute before:left-0 before:text-white pl-4 ml-5">
                      {scent}
                    </p>
                  ))}
                </div>
              </div>
            </Link>

            {/* Link hanya pada nama parfum dan tidak terkait efek hover */}
            <div className="flex flex-col items-start mt-2">
              <Link href={`/perfume/${perfume.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <h1 className="font-bold text-lg text-gray-900 hover:scale-105 hover:-translate-y-1 transition-transform">{perfume.brand}</h1>
              </Link>
              <p className="text-sm">{perfume.name}</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} className={`text-yellow-500 h-4 ${index < Math.floor(perfume.rating) ? '' : 'opacity-50'}`} />
                ))}
                <span className="ml-2 text-gray-700 text-sm">{perfume.rating.toFixed(1)}</span>
                <span className="ml-2 text-gray-700 text-sm">({perfume.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
