import React, { useState } from 'react';
import { projects } from '../../data/mockData';
import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"


const Projects = () => {

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    // <Carousel/>

    <div id='projects' className="mx-auto max-w-xs py-20 min-h-[calc(100vh-4rem)] scroll-margin-top">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
  </div>

    // <section id="projects" className="py-20 min-h-[calc(100vh-4rem)] scroll-margin-top">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <h2 className="text-3xl font-bold text-gray-900 mb-8">Projetos</h2>
    //     <div className="relative">
    //       <div className="overflow-hidden">
    //         <div
    //           className="flex transition-transform duration-500"
    //           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    //         >
    //           {projects.map((project) => (
    //             <div key={project.id} className="min-w-full px-2">
    //               <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //                 <img
    //                   src={project.imageUrl}
    //                   alt={project.title}
    //                   className="w-full h-48 object-cover"
    //                 />
    //                 <div className="p-6">
    //                   <h3 className="text-xl font-semibold text-gray-900 mb-2">
    //                     {project.title}
    //                   </h3>
    //                   <p className="text-gray-600 mb-4">{project.description}</p>
    //                   <div className="flex flex-wrap gap-2 mb-4">
    //                     {project.technologies.map((tech) => (
    //                       <span
    //                         key={tech}
    //                         className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
    //                       >
    //                         {tech}
    //                       </span>
    //                     ))}
    //                   </div>
    //                   <div className="flex space-x-4">
    //                     <a
    //                       href={project.link}
    //                       target="_blank"
    //                       rel="noopener noreferrer"
    //                       className="flex items-center text-gray-600 hover:text-gray-900"
    //                     >
    //                       <Github size={20} className="mr-1" />
    //                       Code
    //                     </a>
    //                     <a
    //                       href={project.link}
    //                       target="_blank"
    //                       rel="noopener noreferrer"
    //                       className="flex items-center text-gray-600 hover:text-gray-900"
    //                     >
    //                       <ExternalLink size={20} className="mr-1" />
    //                       Live Demo
    //                     </a>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <ArrowLeft size={24} onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-300 rounded-full cursor-pointer"/>
    //       <ArrowRight size={24} onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-300 rounded-full cursor-pointer"/>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Projects;