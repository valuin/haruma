import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function PopularParfume() {
  return (
    <div className="w-full flex flex-col mt-16 items-center">
      <h1 className="font-bold text-3xl text-gray-700 text-center">Discover Your Signature Scent</h1>
      {/* Popular Parfume */}
      <div className="flex flex-row justify-between w-11/12 mt-10">
        <h3 className="font-medium text-2xl text-gray-700">Popular Parfume</h3>
        <Link href="/brands" className="font-medium text-lg text-[#E86558]">
          See All
        </Link>
      </div>
      <div className="w-11/12 flex flex-row mt-5 gap-10">
        <div className="flex flex-col relative group">
          {/* Wrapper untuk efek hover */}
          <div className="relative">
            <img src="/farhampton.png" alt="Onix" className="w-48 h-48 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md p-4">
              <h1 className="text-white font-bold text-lg w-full ml-5">Scent Family</h1>
              <p className="text-white w-full relative before:content-['•'] before:absolute before:left-0 before:text-white pl-4 ml-5">Amber</p>
              <p className="text-white w-full relative before:content-['•'] before:absolute before:left-0 before:text-white pl-4 ml-5">Lavender</p>
              <p className="text-white w-full relative before:content-['•'] before:absolute before:left-0 before:text-white pl-4 ml-5">Aromatic</p>
            </div>
          </div>

          {/* Bungkus judul parfum dan rating dalam satu div */}
          <div className="flex flex-col items-start mt-2">
            <h1 className="font-bold text-lg text-gray-900">HMNS</h1> {/* Ubah ukuran font di sini */}
            <p className="text-sm">Farhampton</p> {/* Tambahkan text-sm untuk ukuran kecil */}
            {/* Icon Bintang (Rating) */}
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" /> {/* Ubah h-5 ke h-4 */}
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <span className="ml-2 text-gray-700 text-sm">5.0</span> {/* Ubah ke text-sm */}
              <span className="ml-2 text-gray-700 text-sm">(150)</span> {/* Ubah ke text-sm */}
            </div>
          </div>
        </div>
      </div>

      {/* Perfect for rainy day*/}
      <div className="flex flex-row justify-between w-11/12 mt-10">
        <h3 className="font-medium text-2xl text-gray-700">Perfect For Rainy Days</h3>
        <Link href="/brands" className="font-medium text-lg text-[#E86558]">
          See All
        </Link>
      </div>
      <div className="w-11/12 flex flex-row mt-5 gap-10">
        <div className="flex flex-col relative group">
          {/* Wrapper untuk efek hover */}
          <div className="relative">
            <img src="/farhampton.png" alt="Onix" className="w-48 h-48 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md p-4">
              <h1 className="text-white font-bold text-lg w-full ml-5">Scent Family</h1>
              <p className="text-white w-full relative before:content-['•'] before:absolute before:left-0 before:text-white pl-4 ml-5">Amber</p>
              <p className="text-white w-full relative before:content-['•'] before:absolute before:left-0 before:text-white pl-4 ml-5">Lavender</p>
              <p className="text-white w-full relative before:content-['•'] before:absolute before:left-0 before:text-white pl-4 ml-5">Aromatic</p>
            </div>
          </div>

          {/* Bungkus judul parfum dan rating dalam satu div */}
          <div className="flex flex-col items-start mt-2">
            <h1 className="font-bold text-lg text-gray-900">HMNS</h1> {/* Ubah ukuran font di sini */}
            <p className="text-sm">Farhampton</p> {/* Tambahkan text-sm untuk ukuran kecil */}
            {/* Icon Bintang (Rating) */}
            <div className="flex items-center mt-1">
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" /> {/* Ubah h-5 ke h-4 */}
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
              <span className="ml-2 text-gray-700 text-sm">5.0</span> {/* Ubah ke text-sm */}
              <span className="ml-2 text-gray-700 text-sm">(150)</span> {/* Ubah ke text-sm */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
