import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '@/components/ui/button';
export default function MainProfile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row gap-14 h-full items-center">
        <div className="flex items-center justify-center h-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" className="rounded-full h-24 w-24" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-10">
            <div className="flex-col">
              <h1 className="text-2xl font-bold">Morty69</h1>
              <p className="text-sm mb-5">Morty Smith</p>
            </div>
            <Button className="bg-[#FFD2CE] hover:bg-red-400 text-[#6B2F29]">Edit Profile</Button>
          </div>
          <p className="text-sm ">Haruma Member (Since 18 Aug 2045)</p>
          <p className="text-sm font-bold">18 years</p>
        </div>
      </div>
    </div>
  );
}
