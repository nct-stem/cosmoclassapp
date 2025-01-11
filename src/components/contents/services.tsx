import Images from "../ui/images";
import AnimationContainer from "../utils/animation-container";
import Link from "next/link";
import { Button } from "../ui/button";
import { CreditCard, History, Play } from "lucide-react";

const Services = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20">
      <AnimationContainer>
        <div className="grid w-full max-w-5xl md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative rounded-lg">
            <img
              src="./demowebapp.png"
              alt="Demo preview"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text font-bold !leading-tight">
              Khám phá Website và App{"  "}
              <span className="text-primary to-primaryLight-foreground">
                The Unichem{" "}
              </span>
            </h2>
            <p className="max-w-xl text-lg mt-2 text-accent-foreground/60">
              Web, App ứng dụng trí tuệ nhân tạo giúp khám phá không gian vũ trụ
              và tìm hiểu các hiện tượng thiên văn đầy bí ẩn.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/" className="flex items-center">
                Video Demo
                <Play className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimationContainer>

      <AnimationContainer>
        <div className="grid w-full max-w-5xl md:grid-cols-2 gap-8 items-center  pt-40 pb-20">
          {/* Right side - Content */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text font-bold !leading-tight">
              Bộ sản phẩm Flashcard, Fanpage{"  "}
              <span className="text-primary to-primaryLight-foreground">
                The Unichem{" "}
              </span>
            </h2>
            <p className="max-w-xl text-lg mt-2 text-accent-foreground/60">
              Web, App ứng dụng trí tuệ nhân tạo giúp khám phá không gian vũ trụ
              và tìm hiểu các hiện tượng thiên văn đầy bí ẩn.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/" className="flex items-center">
                Video Demo
                <Play className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Left side - Image */}
          <div className="relative rounded-lg">
            <img
              style={{ borderRadius: "10px" }}
              src="./demowebapp.png"
              alt="Demo preview"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </AnimationContainer>
    </section>
  );
};

export default Services;
