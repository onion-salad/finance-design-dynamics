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
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <AchievementCard title={project.title} Icon={project.icon} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default AchievementCarousel;