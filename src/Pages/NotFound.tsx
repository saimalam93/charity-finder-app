const NotFound = () => {
  return (
    <div className="container mx-auto px-4">
      <img
        src="https://cdn.pixabay.com/photo/2018/01/04/20/52/dark-3061610_1280.jpg"
        alt="404"
        className="w-full h-full object-cover fixed top-0 left-0 right-0 bottom-0 z-[-1]"
      />
      <div
        className="flex justify-center flex-col 
        items-center h-[80vh] w-full bg-black bg-opacity-50
      "
      >
        <h1 className="text-3xl font-bold text-white text-center my-8">
          Page Not Found
        </h1>
        <p className="text-2xl text-center text-white">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
