import HeroVideoDialog from "../ui/hero-video-dialog";
import { tools } from "@/constants";
import { LucideProps, Waypoints } from "lucide-react";
import { Badge } from "../ui/badge";
import AnimationContainer from "../utils/animation-container";

const Banner = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-20">
      <AnimationContainer>
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <Badge size="lg" variant="outline">
            <Waypoints className="w-4 h-4" />
            <span className="ml-2 text-sm">Bring your work together</span>
          </Badge>
          <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
            Connect your tools
          </h2>
          <p className="max-w-lg mt-6 text-center text-neutral-500 pb-20">
            Through integrations with tools like instagram, facebook and
            twitter, you can connect your social media accounts and post
            directly from your dashboard.
          </p>
        </div>
      </AnimationContainer>
      <div className="relative  max-w-4xl">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default Banner;
