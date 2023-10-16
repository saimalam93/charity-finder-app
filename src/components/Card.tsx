import { Charity } from "../types/charity.types";

type Props = {
  charity: Charity;
};

const elipsisGenerator = (text: string, length: number) => {
  return text.length > length ? `${text.slice(0, length)} . . .` : text;
};

const Card = ({ charity }: Props) => {
  return (
    <>
      <div className="flex flex-col bg-white-100 rounded-lg shadow-xl overflow-hidden p-4">
        <div className="flex-shrink-0 my-4">
          <img
            className="h-20 w-full object-contain"
            src={charity.logoUrl}
            alt={charity.name}
          />
          <div className="flex justify-center border-b-4">
            <p className="text-2xl font-bold my-4">{charity.name}</p>
          </div>
          <div className="flex justify-center">
            <p className="text-md italic mt-2">
              {charity.location ? charity.location : charity.locationAddress}
            </p>
          </div>
          <div className="flex justify-center">
            {charity.description ? (
              <p className="text-md italic mt-2">
                {elipsisGenerator(charity.description, 100)}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
