import Image from "next/image";
import { TEAM } from "@/lib/constants";

const Leadership = () => {
  return (
    <section className="container-x pt-16 pb-16 lg:pt-29 lg:pb-28">
      <h2 className="text-center">Our Leadership</h2>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {TEAM.map((person) => (
          <div key={person.name} className="text-center">
            {person.image ? (
              <Image src={person.image} alt={person.name} className="h-80 w-full rounded-lg object-cover" />
            ) : (
              <div className="h-80 rounded-lg bg-soft" />
            )}
            <p className="mt-4 text-lg font-medium leading-7 text-main">{person.name}</p>
            <p className="mt-2 text-sm leading-5.5">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leadership;
