const Card = () => {
  return (
    <>
      <div className="flex flex-col bg-white-100 rounded-lg shadow-xl overflow-hidden p-4">
        <div className="flex-shrink-0 my-4">
          <img
            className="h-20 w-full object-contain"
            src="https://cdn.pixabay.com/photo/2016/08/29/13/55/heart-1628313_1280.png"
            alt="Favourites"
          />
          <div className="flex justify-center border-b-4">
            {/* Charity Title here */}
            <p className="text-2xl font-bold my-4">Charity Title</p>
          </div>
          <div className="flex justify-center">
            {/* Charity Location here */}

            <p className="text-md italic mt-2">Charity Location</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
