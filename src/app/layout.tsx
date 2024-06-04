import './globals.css';

import {Roboto} from 'next/font/google';
import Image from '@/common/components/ui/ImageFallback';
import { Nav } from '@/app/_layout/Nav';
import Link from 'next/link';
import { Metadata } from 'next';
import { Hamburger } from './_layout/Hamburger';

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ahmouse.com',
  description: 'By ahmouse',
}

//TODO: Add search feature
function Search() {

}

function Header() {
  return (
    <div className="topbar-wrapper z-40 sticky top-0 py-2 border-b border-ghost bg-ghost-light/30 backdrop-blur-lg drop-shadow">
      <div className='topbar flex justify-between my-2 md:pl-16'>
        <Link className="logo md:m-0 md:mr-auto md:float-left" href="/">
          <Image
            className="w-40 md:w-48 hidden md:block"
            src={"/brand/logo.svg"}
            width={200}
            height={200}
            alt="Logo for ahmouse.com"
          />
          <Image
            className="w-10 ml-4 md:hidden"
            src={"/brand/logo_notext.svg"}
            width={40}
            height={40}
            alt="Logo for ahmouse.com"
          />
        </Link>
        <div>

        </div>
        <Hamburger/>
        <div className="pr-[5%] justify-end items-center hidden md:inline-flex">
          <Nav/>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className='py-16 mt-64'>
      <p className="text-center">Made by ahmouse</p>
    </div>
  );
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className='text-light text-pretty bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-5% from-orange-500 via-orange-700 via-20% via-slate-800 to-gray-800 break-normal bg-cover bg-fixed'>
        <div className='min-h-screen overflow-visible'>
          <Header/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
