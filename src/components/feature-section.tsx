import { SITE_FEATURES } from "@/config/site";

export default function FeaturesSection() {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="relative text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-tight text-foreground mb-4 after:content-[''] after:block after:mx-auto after:mt-3 after:h-[3px] after:w-24 after:bg-gradient-to-r after:from-primary after:to-accent-foreground/70 after:rounded-full">
          Features
        </h2>
        <p className="text-sm xl:text-md text-muted-foreground max-w-2xl mx-auto">
          Explore the powerful features of our tool designed to enhance your
          productivity and streamline your workflow.
        </p>
      </div>
      <div className=" max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 grid-auto-flow">
          {SITE_FEATURES.slice(0, 4).map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card px-6 py-10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                <Icon className="w-10 h-10 mb-4 text-primary" />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
