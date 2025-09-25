import React from 'react';
import { Card,  CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  DollarSign,  
  Target, 
  Keyboard,
  Play,
  Zap,
  FileText,
  Settings
} from 'lucide-react';
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <div className="min-h-1/2 lg:p-12 m-18">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Save Money Card */}
          <Card className="col-span-2 h-90 bg-white shadow-sm p-16">
            <CardHeader>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    Save money without sacrificing quality
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Skip high agency fees and endless revisions. Get professional results at a fraction of cost.
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Agency</span>
                  <span className="text-sm text-gray-600">Up to 10M RWF</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Skool-Aid</span>
                  <Badge className="bg-purple-500 text-white px-10 py-1" >5M</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 3 Steps Card */}
          <Card className="col-span-1 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-900">
                3 steps to transform learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-[var(--brand-orange)] text-white">
                    1
                    </Badge>
                  <span className="text-sm text-gray-700">Select your course flow</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-[var(--brand-orange)] text-white">
                    2
                    </Badge>
                  <span className="text-sm text-gray-700">Add interactive content</span>
                </div>
                <div className="flex items-center gap-3">
                   <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums bg-[var(--brand-orange)] text-white">
                    3
                </Badge>
                  <span className="text-sm text-gray-700">Teach with impact</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Everything in One Place Card - Dark - WIDER */}
          <Card className="col-span-1 bg-gray-900 text-white shadow-sm">
            <CardHeader>

                <Image
                  src="/Logo.svg" 
                  alt="Skool Aid Logo" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10"
                />
              <CardTitle className="text-2xl font-bold mb-4">
                Everything you need in one place!
              </CardTitle>
              <p className="text-gray-300 text-sm mb-2">
                From lesson planning and interactive classrooms to secure assessments and various creative tools.
              </p>
              <p className="text-gray-400 text-sm">
                Skool Aid brings it all together
              </p>
            </CardHeader>
          </Card>

          {/* Everything in One Place Card - Light */}
          <Card className="col-span-1 bg-white h-90 shadow-sm">
            <CardHeader>
              <Image
                src="/Logo.svg"
                alt="Skool Aid Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </CardHeader>
            <CardContent className='mt-8'>
                <p className='text-[23px] font-medium mb-4'>
                    Everything you need in one place!
                </p>
                <p className='text-sm text-gray-600'>
                    From lesson planning and interactive classrooms to secure assessments and various creative tools.
                </p>
            </CardContent>
          </Card>

          {/* 24-Hour Support Card */}
          <Card className="col-span-1 bg-gray-900 text-white shadow-sm">
            <CardHeader>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gray-700 rounded-xl">
                  <Keyboard className="h-12 w-12 text-gray-300" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold text-center mb-4">
                24-Hour Support
              </CardTitle>
              <p className="text-gray-300 text-sm text-center mb-2">
                Reach out anytime and get help within 24 hours. If you have a quick question or in-depth guidance!
              </p>
              <p className="text-gray-400 text-sm text-center">
                We are here for you!
              </p>
            </CardHeader>
          </Card>

          {/* Focus on Rwanda Card - Spans 2 columns */}
          <Card className="col-span-1 lg:col-span-2 bg-orange-500 text-white shadow-sm relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-6">
                Focus on empowering education in Rwanda
              </CardTitle>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5" />
                  <span className="text-sm">No paperwork, all innovation.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5" />
                  <span className="text-sm">Flexible and adaptable.</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5" />
                  <span className="text-sm">Effortless tools.</span>
                </div>
              </div>

              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2">
                <Play className="h-4 w-4" />
                Get Started
              </Button>
            </CardHeader>
            
            {/* Phone Mockup */}
            <div className="absolute -right-4 -bottom-4">
              <div className="w-32 h-64 bg-black rounded-3xl p-2">
                <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};
