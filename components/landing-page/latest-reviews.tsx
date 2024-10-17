import { Card, CardContent } from '@/components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../ui/button';

export default function LatestReviews() {
  return (
    <div className="flex flex-col mt-10 p-10">
      <div className="text-5xl font-medium text-center text-gray-700" style={{ fontFamily: 'LibreBaskervilleRegular' }}>
        Latest Reviews
      </div>
      <div className="flex flex-row mt-10 justify-between h-full">
        <div className="flex flex-col text-gray-700 justify-center ">
          <p className="text-2xl">Share your thoughts or explore reviews</p>
          <p className="text-2xl">from the Haruma community on your favorite scents.</p>
          <p className="text-2xl">favorite scents.</p>
          <Button className="mt-5 w-32 h-10 bg-[#E86558] hover:bg-red-400">Write Review</Button>
        </div>

        <div className="flex flex-col w-1/2">
          <Card className="flex flex-row mb-3 rounded-xl items-center">
            <div className="flex justify-center items-center h-full ml-5">
              <img src="/alpha.png" alt="alpha" className="h-32" />
            </div>
            <CardContent className="flex flex-col mt-5">
              <h1 className="font-bold text-lg">HMNS</h1>
              <p>Alpha</p>
              <div className="flex items-center mt-3">
                <p className="mr-2">
                  review by <span className="font-medium">Dhika</span>
                </p>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                </div>
              </div>
              <p className="mt-2 font-medium">Only 4 stars karena gk ada ambatron</p>
            </CardContent>
          </Card>

          <Card className="flex flex-row mb-3 rounded-xl items-center">
            <div className="flex justify-center items-center h-full ml-5">
              <img src="/alpha.png" alt="alpha" className="h-32" />
            </div>
            <CardContent className="flex flex-col mt-5">
              <h1 className="font-bold text-lg">HMNS</h1>
              <p>Alpha</p>
              <div className="flex items-center mt-3">
                <p className="mr-2">
                  review by <span className="font-medium">Dhika</span>
                </p>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
                </div>
              </div>
              <p className="mt-2 font-medium">Only 4 stars karena gk ada ambatron</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
