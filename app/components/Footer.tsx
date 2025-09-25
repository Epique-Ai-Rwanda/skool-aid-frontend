import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className=" text-[var(--brand-white)] py-20 bg-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left side - Brand and CTA */}
          <div className="space-y-18 ">
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src="/Logo.svg" 
                alt="Skool Aid Logo" 
                width={40} 
                height={40} 
                className="w-10 h-10"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Ignite imagination,<br />
                embark on adventures.
              </h2>
            </div>

            {/* Newsletter Signup */}
            <div>
              <div className="flex gap-3 mb-4">
                <Input
                    type='search'
                    placeholder="Search..."
                    className="outline-none"
                />
                <Button className="bg-orange text-white px-6 py-3 rounded-lg font-normal hover:bg-orange/90 transition-colors">
                    Subscribe
                </Button>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-400">
                <div className="w-4 h-4 bg-gray-600 rounded mt-0.5"></div>
                <span>Unlock special discounts</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-gray-400 mt-1">
                <div className="w-4 h-4 bg-gray-600 rounded mt-0.5"></div>
                <span>Access latest features</span>
              </div>
            </div>
          </div>

          {/* Right side - Links */}
          <div className="grid grid-cols-2 gap-8 mx-auto ">
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Become an Affiliate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400">info@skool-aid.rw</span>
              {/* Social icons placeholders */}
              <div className="flex space-x-3">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 Skool Aid Rwanda. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
