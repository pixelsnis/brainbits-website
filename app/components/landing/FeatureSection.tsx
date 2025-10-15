import Image from "next/image";

export default function FeatureSection({
  title,
  subheadline,
  footnote,
  imageUrl,
}: {
  title: string;
  subheadline: string;
  footnote?: string | undefined;
  imageUrl: string;
}) {
  return (
    <div className="w-full md:w-[80%] md:max-w-[840px] flex flex-col gap-6 md:gap-8 items-stretch justify-center">
      {/* Text */}
      <div className="flex flex-col gap-2 items-stretch justify-center">
        <h2 className="text-center text-h2">{title}</h2>
        <p className="text-body text-center">{subheadline}</p>
        {footnote && (
          <p className="text-footnote text-center text-label-secondary">
            {footnote}
          </p>
        )}
      </div>

      {/* Image */}
      <Image
        src={imageUrl}
        alt={title}
        height={0}
        width={0}
        sizes="100vw"
        style={{
          height: "auto",
          width: "100%",
          minHeight: "360px",
          objectFit: "cover",
        }}
        className="rounded-none md:rounded-4xl"
      />
    </div>
  );
}
