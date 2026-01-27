'use client';
import Link from "next/link";
import { Star } from 'lucide-react';
import Image from 'next/image'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Header() {
    return (
        <header className="bg-[var(--brand-white)] ">
            <div className="px-8 lg:px-12">
                <div className="flex justify-between items-center py-4">
                    {/* Left Section: Logo and Images */}
                    <div className="flex items-center space-x-6 ">
                        <Image
                            src="/Logo.svg"
                            alt="Skool Aid Logo"
                            width={30}
                            height={30}
                            className="w-16 h-16"
                        />
                        <Image
                            src="/Skool-Aid.svg"
                            alt="Skool Aid Text Logo"
                            width={64}
                            height={64}
                            className="w-20 h-20"
                        />
                        <div className='flex items-center space-x-2 my-2'>
                            <Star size={10} color='var(--brand-purple)' />
                        <span>
                            <p className="text-[var(--brand-dark)] font-normal ">Powering Curiosity, Inspiring Rwanda&apos;s Future</p>
                        </span>
                        </div>
                    </div>

                    {/* Right Section: Search and Button */}
                    <div className="flex items-center space-x-6 ml-auto">
                        <div className="relative">
                            <Input
                            type="search"
                            placeholder='Search...'
                            className='rounded-lg outline-offset-2 outline-1 focus:!border-[var(--brand-orange)] focus-visible:!ring-purple-100 pr-10'
                            />
                        </div>
                        <Button
                            className='bg-[var(--brand-orange)]'
                            variant='default'

                        >
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
