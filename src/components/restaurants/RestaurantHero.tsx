type Props = {
  name: string;
  location: string;
  image: string;
};

export const RestaurantHero = ({ name, location, image }: Props) => {
  return (
    <div className="relative mb-8 block overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1608455211475-3ac50b076f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2938&q=80)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative flex items-start justify-between p-4 sm:p-6 lg:p-8">
        <div className="sm:pt-18 pt-12 text-white lg:pt-24">
          <h3 className="text-xl font-bold sm:text-2xl">{name}</h3>

          <p className="text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};
