import React from "react";

interface InfoCardProps {
  title: string;
  total: number | string;
  subtitle: string;
  imageSrc: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  total,
  subtitle,
  imageSrc,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg flex justify-between w-full p-5 border border-gray-200">
        <div className="flex flex-col gap-2">
          <h1 className="text-md text-[#666666] font-medium">{title}</h1>
          <h1 className="text-[#1F1D0D] text-4xl font-bold">{total}</h1>
          <h1 className="font-medium text-md text-[#1F1D0D]">{subtitle}</h1>
        </div>
        <img src={imageSrc} alt={title} className="object-contain max-w-20" />
      </div>
    </>
  );
};

export default InfoCard;
