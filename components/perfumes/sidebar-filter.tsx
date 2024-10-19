'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { AiFillStar } from 'react-icons/ai'; // Import the star icon

const items = [
  { id: 'aquatic', label: 'Aquatic' },
  { id: 'boozy', label: 'Boozy' },
  { id: 'citrus', label: 'Citrus' },
  { id: 'fresh', label: 'Fresh' },
  { id: 'floral', label: 'Floral' },
  { id: 'fruity', label: 'Fruity' },
  { id: 'green', label: 'Green' },
  { id: 'gourmand', label: 'Gourmand' },
  { id: 'musky', label: 'Musky' },
  { id: 'spicy', label: 'Spicy' },
  { id: 'woody', label: 'Woody' },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.',
  }),
  type: z.enum(['all', 'mentions', 'none'], {
    required_error: 'You need to select a notification type.',
  }),
});

export default function SidebarFilter() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  // Helper function to render the correct number of stars
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => <AiFillStar key={index} className="text-yellow-400" />);
  };

  return (
    <>
      <Card className="w-1/6 rounded-xl~">
        <CardContent>
          <h1 className="mt-5 font-semibold text-lg text-gray-500">Filter</h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Checkbox Section */}
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    <div className="mt-2">
                      <FormLabel className="font-md text-md text-gray-500">Accords</FormLabel>
                    </div>
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-1">
                            <FormControl>
                              <Checkbox
                                className="ml-5 checked:bg-gray-500"
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-gray-500">{item.label}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Radio Group Section */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="mt-3">
                    <FormLabel className="font-md text-md text-gray-500">Rating</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1 ml-5">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="5.0" />
                          </FormControl>
                          <div className="flex">{renderStars(5)}</div>
                          <FormLabel className="font-normal">5.0</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="4.0" />
                          </FormControl>
                          <div className="flex">{renderStars(4)}</div>
                          <FormLabel className="font-normal">4.0</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="3.0" />
                          </FormControl>
                          <div className="flex">{renderStars(3)}</div>
                          <FormLabel className="font-normal">3.0</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="2.0" />
                          </FormControl>
                          <div className="flex">{renderStars(2)}</div>
                          <FormLabel className="font-normal">2.0</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="1.0" />
                          </FormControl>
                          <div className="flex">{renderStars(1)}</div>
                          <FormLabel className="font-normal">1.0</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Gender Section */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="mt-3">
                    <FormLabel className="font-md text-md text-gray-500">Gender</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1 ml-5">
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Male</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="female" />
                          </FormControl>
                          <FormLabel className="font-normal">Female</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="unisex" />
                          </FormControl>
                          <FormLabel className="font-normal">Unisex</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
