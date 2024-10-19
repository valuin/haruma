import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
export default function Search() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-medium text-4xl mt-6" style={{ fontFamily: 'LibreBaskervilleRegular' }}>
        Explore Perfume
      </h1>
      {/* Wrapper untuk Input dan Ikon */}
      <div className="relative w-1/2 mt-5">
        {/* Ikon Search */}
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {/* Input Field */}
        <Input type="text" placeholder="Search..." className="pl-10" />
      </div>
    </div>
  );
}
