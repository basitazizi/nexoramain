import Image from "next/image";

type BrandWordmarkProps = {
  className?: string;
  priority?: boolean;
};

export function BrandWordmark({
  className = "h-9 w-auto",
  priority = false
}: BrandWordmarkProps) {
  return (
    <Image
      src="/aureon-wordmark.png"
      alt="Aureon"
      width={1024}
      height={266}
      priority={priority}
      sizes="(max-width: 768px) 180px, 260px"
      className={className}
    />
  );
}
