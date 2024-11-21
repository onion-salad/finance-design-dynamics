import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AchievementCard from "./AchievementCard";
import { LucideIcon } from "lucide-react";

interface AchievementCarouselProps {
  projects: {
    title: string;
    icon: LucideIcon;
  }[];
}

const AchievementCarousel = ({ projects }: AchievementCarouselProps) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full relative"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {projects.map((project, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <AchievementCard title={project.title} Icon={project.icon} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
      </div>
    </Carousel>
  );
};

export default AchievementCarousel;