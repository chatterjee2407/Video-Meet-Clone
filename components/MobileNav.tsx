"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "./constants";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="public/icons/hamburger.svg"
            width={36}
            height={36}
            alt="hambuger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src=""
              width={32}
              height={32}
              alt="Saviour"
            />
            <p className="text-[26px] font-extrabold text-white">Saviour</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.route ;

              return (
                <SheetClose asChild key={link.route}>
                  <Link
                    href={link.route}
                    key={link.label}
                    className={cn(
                      "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                      {
                        "bg-blue-1": isActive,
                      }
                    )}
                  >
                    <Image
                      src={link.imgURL}
                      alt={link.label}
                      width={20}
                      height={20}
                    />
                    <p className="font-semibold">{link.label}</p>
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
