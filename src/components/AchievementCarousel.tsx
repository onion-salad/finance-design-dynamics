import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AchievementCard from "./AchievementCard";
import { LucideIcon } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

interface AchievementCarouselProps {
  projects: {
    title: string;
    icon: LucideIcon;
    imageUrl: string;
  }[];
}

const AchievementCarousel = ({ projects }: AchievementCarouselProps) => {
  const [api, setApi] = useState<any>(null);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(true);

  const updateAutoPlay = useCallback(() => {
    if (!api) return;
    const containerWidth = api.containerNode().offsetWidth;
    const slideWidth = api.slideNodes()[0].offsetWidth;
    const visibleSlides = Math.floor(containerWidth / slideWidth);
    setShouldAutoPlay(projects.length > visibleSlides);
  }, [api, projects.length]);

  useEffect(() => {
    if (!api) return;

    updateAutoPlay();
    window.addEventListener('resize', updateAutoPlay);

    let interval: number;
    if (shouldAutoPlay) {
      interval = window.setInterval(() => {
        requestAnimationFrame(() => api.scrollNext());
      }, 1500);
    }

    return () => {
      window.removeEventListener('resize', updateAutoPlay);
      if (interval) clearInterval(interval);
    };
  }, [api, projects.length, shouldAutoPlay, updateAutoPlay]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="w-full relative"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {projects.map((project, index) => (
          <CarouselItem 
            key={index} 
            className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <AchievementCard 
                title={project.title} 
                Icon={project.icon} 
                imageUrl={project.imageUrl} 
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {projects.length > 3 && (
        <div className="hidden md:block">
          <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
        </div>
      )}
    </Carousel>
  );
};

export default AchievementCarousel;