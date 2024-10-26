'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Star } from 'lucide-react';

const accords = [
  { id: 'aquatic', name: 'Aquatic' },
  { id: 'boozy', name: 'Boozy' },
  { id: 'citrus', name: 'Citrus' },
  { id: 'fresh', name: 'Fresh' },
  { id: 'floral', name: 'Floral' },
  { id: 'fruity', name: 'Fruity' },
  { id: 'green', name: 'Green' },
  { id: 'gourmand', name: 'Gourmand' },
  { id: 'musky', name: 'Musky' },
  { id: 'spicy', name: 'Spicy' },
  { id: 'woody', name: 'Woody' },
];

const ratings = ['5', '4', '3', '2', '1'];

export default function SidebarFilter() {
  return (
    <form className="bg-white rounded-xl p-8 space-y-4">
      <p className="font-semibold text-xl">Filter</p>
      <div className="flex flex-col gap-4">
        <Label htmlFor="accords">Accords</Label>
        {accords.map((item) => (
          <div key={item.id} className="flex items-center ml-6">
            <Checkbox id={item.id} name={item.name} className="mr-2" />
            <Label htmlFor={item.id}>{item.name}</Label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="rating">Rating</Label>
        <RadioGroup name="rating">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center ml-6">
              <RadioGroupItem
                id={`rating-${rating}`}
                className="mr-2"
                value={rating}
              />
              <Label className="flex items-center" htmlFor={`rating-${rating}`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={
                      index < Number(rating)
                        ? 'fill-orange-400 text-orange-400'
                        : 'text-orange-300'
                    }
                  />
                ))}
                <span className="ml-2">{rating}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-4">
        <Label htmlFor="gender">Gender</Label>
        <RadioGroup name="gender">
          {[
            { id: 'male', label: 'Male' },
            { id: 'female', label: 'Female' },
            { id: 'unisex', label: 'Unisex' },
          ].map((gender) => (
            <div key={gender.id} className="flex items-center ml-6">
              <RadioGroupItem
                id={`gender-${gender.id}`}
                className="mr-2"
                value={gender.id}
              />
              <Label htmlFor={`gender-${gender}`}>{gender.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </form>
  );
}
