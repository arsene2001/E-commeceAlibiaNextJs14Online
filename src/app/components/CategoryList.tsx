import { wixClientServer } from "../lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  return (
    <div className=" ">
      <div className="flex gap-8 flex-wrap justify-between">
        {cats.items.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full rounded-lg sm:w-1/2 lg:w-1/4 xl:w-1/6 "
            key={item._id}
          >
            <div className="relative bg-slate-100 w-full h-96 rounded-lg">
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt=""
                fill
                sizes="20vw"
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
