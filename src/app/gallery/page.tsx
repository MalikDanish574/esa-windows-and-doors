"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/stock_images/project_image_01.jpeg",
    "/stock_images/project_image_02.jpeg",
    "/stock_images/project_image_03.jpeg",
    "/stock_images/project_image_04.jpeg",
    "/stock_images/project_image_05.jpeg",
    "/stock_images/project_image_06.jpeg",
    "/stock_images/project_image_07.jpeg",
    "/stock_images/project_image_08.jpeg",
    "/stock_images/project_image_10.jpeg",
    "/stock_images/project_image_11.jpeg",
    "/stock_images/project_image_12.jpeg",
    "/stock_images/project_image_13.jpeg",
    "/stock_images/project_image_15.jpeg",
    "/stock_images/project_image_18.jpeg",
    "/stock_images/project_image_20.jpeg",
    "/stock_images/project_image_21.jpeg",
    "/stock_images/project_image_24.jpeg",
    "/stock_images/project_image_26.jpeg",
    "/stock_images/project_image_31.jpeg",
    "/stock_images/project_image_32.jpeg",
    "/stock_images/project_image_33.jpeg",
    "/stock_images/project_image_34.jpeg",
    "/stock_images/project_image_35.jpeg",
    "/stock_images/project_image_36.jpeg",
    "/stock_images/project_image_37.jpeg",
    "/stock_images/project_image_38.jpeg",
    "/stock_images/project_image_39.jpeg",
    "/stock_images/project_image_40.jpeg",
    "/stock_images/project_image_41.jpeg",
    "/stock_images/project_image_42.jpeg",
    "/stock_images/project_image_43.jpeg",
    "/stock_images/project_image_44.jpeg",
    "/stock_images/project_image_45.jpeg",
    "/stock_images/project_image_46.jpeg",
    "/stock_images/project_image_47.jpeg",
    "/stock_images/project_image_48.jpeg",
    "/stock_images/project_image_49.jpeg",
    "/stock_images/project_image_50.jpeg",
    "/stock_images/project_image_51.jpeg",
    "/stock_images/project_image_52.jpeg",
    "/stock_images/project_image_53.jpeg",
    "/stock_images/project_image_54.jpeg",
    "/stock_images/project_image_55.jpeg",
    "/stock_images/project_image_56.jpeg",
    "/stock_images/project_image_57.jpeg",
    "/stock_images/project_image_58.jpeg",
    "/stock_images/project_image_59.jpeg",
    "/stock_images/project_image_60.jpeg",
    "/stock_images/project_image_61.jpeg",
    "/stock_images/project_image_62.jpeg",
    "/stock_images/project_image_63.jpeg",
    "/stock_images/project_image_64.jpeg",
    "/stock_images/project_image_65.jpeg",
    "/stock_images/project_image_66.jpeg",
    "/stock_images/project_image_67.jpeg",
    "/stock_images/project_image_68.jpeg",
    "/stock_images/project_image_69.jpeg",
    "/stock_images/project_image_70.jpeg",
    "/stock_images/project_image_71.jpeg",
    "/stock_images/project_image_72.jpeg",
    "/stock_images/project_image_73.jpeg",
    "/stock_images/project_image_74.jpeg",
    "/stock_images/project_image_75.jpeg",
    "/stock_images/project_image_76.jpeg",
    "/stock_images/Project_image_77.jpeg",
    "/stock_images/project_image_78.jpeg",
    "/stock_images/project_image_79.jpeg",
    "/stock_images/project_image_80.jpeg",
    "/stock_images/project_image_81.jpeg",
    "/stock_images/project_image_82.jpeg",
    "/stock_images/project_image_83.jpeg",
    "/stock_images/project_image_84.jpeg",
    "/stock_images/project_image_85.jpeg",
    "/stock_images/project_image_86.jpeg",
    "/stock_images/project_image_87.jpeg",
    "/stock_images/project_image_88.jpeg",
    "/stock_images/project_image_89.jpeg",
    "/stock_images/project_image_90.jpeg",
    "/stock_images/project_image_91.jpeg",
    "/stock_images/project_image_92.jpeg",
    "/stock_images/project_image_93.jpeg",
    "/stock_images/project_image_94.jpeg",
    "/stock_images/project_image_95.jpeg",
    "/stock_images/project_image_96.jpeg",
    "/stock_images/project_image_97.jpeg",
    "/stock_images/project_image_98.jpeg",
    "/stock_images/project_image_99.jpeg",
    "/stock_images/project_image_100.jpeg",
    "/stock_images/project_image_101.jpeg",
    "/stock_images/project_image_102.jpeg",
    "/stock_images/project_image_103.jpeg",
    "/stock_images/project_image_104.jpeg",
    "/stock_images/project_image_105.jpeg",
    "/stock_images/project_image_106.jpeg",
    "/stock_images/project_image_107.jpeg",
    "/stock_images/project_image_108.jpeg",
    "/stock_images/project_image_109.jpeg",
    "/stock_images/project_image_110.jpeg",
    "/stock_images/project_image_111.jpeg",
    "/stock_images/project_image_112.jpeg",
    "/stock_images/project_image_113.jpeg",
    "/stock_images/project_image_114.jpeg",
    "/stock_images/project_image_115.jpeg",
    "/stock_images/project_image_116.jpeg",
    "/stock_images/project_image_117.jpeg",
    "/stock_images/project_image_118.jpeg",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Browse through our completed glazing projects
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden hover-elevate cursor-pointer group">
                      <div className="relative aspect-square overflow-hidden">
                        <Image 
                          src={image} 
                          alt={`Project ${index + 1}`}
                          width={300}
                          height={300}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-fit w-auto p-2 border-0 bg-transparent shadow-none [&>button]:w-8 [&>button]:h-8 [&>button]:bg-black/50 [&>button]:hover:bg-black/70 [&>button]:rounded-full [&>button]:opacity-100 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button>svg]:w-5 [&>button>svg]:h-5 [&>button>svg]:text-white">
                    <DialogTitle className="sr-only">Project Gallery Image {index + 1}</DialogTitle>
                    <div className="flex items-center justify-center">
                        <Image 
                        src={image} 
                        alt={`Project ${index + 1}`}
                        width={1200}
                        height={800}
                        className="w-auto h-auto max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss your glazing needs and get a personalized quote for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                data-testid="button-get-quote"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                data-testid="button-view-services"
                onClick={() => window.location.href = '/services'}
              >
                View Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
