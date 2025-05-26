import Image from "next/image";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <div className="relative h-[400px] bg-primary ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center z-10 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 mt-20">
              {title}
            </h1>
            <p className="text-xl text-white/90">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 