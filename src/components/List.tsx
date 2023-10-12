import Card from "./Card";

const List = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-600 text-center my-8">
        Choosen for you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
      </div>
    </div>
  );
};

export default List;
