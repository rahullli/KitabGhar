import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {

  const user = {
    profilePicture: "",
    name: "",
    email: ""
  }
  const userPlaceholder = "";
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Desktop Header */}
      <div className="container w-[80%] mx-auto hidden lg:flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <Image
            src=""
            width={450}
            height={100}
            alt="desktop_logo"
            className="h-15 w-auto"
          />
        </Link>

        <div className="flex flex-1 items-center justify-center max-w-xl px-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Book Name / Author / Subject / Publisher"
              className="w-full pr-10"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/book-sell">
            <Button variant="secondary" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">Sell Used Book</Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <Avatar className="w-8 h-8 rounded-full">
                  {
                    user?.profilePicture ? (
                      <AvatarImage alt="user_image"></AvatarImage>
                    ) : userPlaceholder ? (
                      <AvatarFallback>
                        {userPlaceholder}
                      </AvatarFallback>
                    ) : <User className="ml-2 mt-2 flex items-center justify-center"/>
                  }
                  My Account
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
