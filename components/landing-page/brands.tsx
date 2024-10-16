import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Brands() {
  const brands = [
    { name: 'Onix', image: '/onix.png' },
    { name: 'Hmns', image: '/hmns.png' },
    { name: 'Carl', image: '/carl.png' },
    { name: 'Saff', image: '/saff.png' },
    { name: 'Alchemist', image: '/alchemist.png' },
    { name: 'Kahf', image: '/kahf.png' },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title "Local Brand" */}
      <div className="w-11/12 p-14 bg-[#FF9F95] mx-auto rounded-lg">
        <h2 className="text-4xl font-semibold mb-6 text-white text-center">Local Brand</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {brands.map((brand, index) => (
            <Card key={index} className="flex flex-col items-center p-6">
              <CardContent className="flex justify-center items-center">
                <img src={brand.image} alt={`${brand.name} Brand`} className="w-32 h-32 object-contain" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
