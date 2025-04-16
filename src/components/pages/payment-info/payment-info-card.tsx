interface propTypes {
  title: string;
  price: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const PaymentInfoCard = ({ title, price, Icon }: propTypes) => {
  return (
    <div className="p-5 px-4 rounded-primary border border-primary-border flex items-center justify-between w-full">
      <div className="flex flex-col gap-2.5 text-secondary">
        <p>{title}</p>
        <h1 className="text-2xl font-bold !font-family-barlow">{price}</h1>
      </div>
      <Icon />
    </div>
  );
};

export default PaymentInfoCard;
