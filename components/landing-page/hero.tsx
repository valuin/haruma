import { Button } from '../ui/button';

export default function HeroComp() {
  return (
    <div className="flex justify-between mt-10 ml-16">
      {/* Heading on the right */}
      <div className="flex flex-col ml-10">
        {' '}
        <div>
          {' '}
          <h1 className="font-medium text-8xl text-gray-700 mb-5 " style={{ fontFamily: 'LibreBaskervilleRegular' }}>
            Discover the{' '}
          </h1>
          <h1 className="font-medium text-8xl text-gray-700 mb-5" style={{ fontFamily: 'LibreBaskervilleRegular' }}>
            fragrance That{' '}
          </h1>
          <h1 className="font-medium text-8xl text-gray-700 mt-5 " style={{ fontFamily: 'LibreBaskervilleRegular' }}>
            Defines You
          </h1>
        </div>
        <div>
          {' '}
          <p className="mt-10 ml-1 text-lg">Discover authentic Indonesian fragrances, curated </p>
          <p className="ml-1 text-lg">to match your unique style and preferences.</p>
        </div>
        <div>
          <Button className="mt-10 ml-1 w-32 h-12 bg-[#E86558] hover:bg-red-400">Get Started</Button>
        </div>
      </div>

      {/* Image on the left */}
      <img src="/hero-images.png" alt="logo" className="w-6/12" />
    </div>
  );
}
