import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <div>
      <Image
        width={0}
        height={0}
        className="h-auto w-full object-contain"
        sizes="100%"
        quality={100}
        {...props}
      />
    </div>
  );
};

export default PromoBanner;
