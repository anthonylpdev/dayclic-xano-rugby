import {
  mdiAccountPlus,
  mdiArrowUpDownBold,
  mdiWeightKilogram,
  mdiFlag,
  mdiMapMarker,
  mdiHeartOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import Image from "next/image";
import profilePic from "../public/profile.jpg";

const data = [
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
  {
    name: "Antoine DUPONT",
    position: "Demi de mêlée",
    height: 1.78,
    weight: 80,
    club: "Stade Toulousain",
    nationality: "Français",
  },
];

export default function Home() {
  return (
    <main className="py-28">
      <form className="container flex space-x-4 mb-8" action="">
        <input
          placeholder="Recherche"
          type="text"
          className="flex-1 text-neutral-400 text-lg font-normal leading-8 py-6 px-12 rounded-sm bg-background/secondary border border-border/secondary"
        />
        <button className="bg-background/accent text-content/primary rounded-sm py-7 px-12 text-neutral-50 leading-8 text-lg font-normal flex space-x-4 items-center">
          <Icon path={mdiAccountPlus} size={1.25} />
          <span>Ajouter</span>
        </button>
      </form>
      {data.length ? (
        <div className="container grid grid-cols-3 gap-6">
          {data.map((info) => (
            <div className="bg-background/secondary rounded-sm px-12 py-6 text-neutral-400 text-base leading-normal font-normal text-content/secondary border border-border/secondary flex flex-col space-y-4">
              <div className="flex items-center justify-end">
                <button>
                  <Icon path={mdiHeartOutline} size={1} />
                </button>
              </div>
              <div className="flex space-x-4">
                <Image
                  className="rounded-default"
                  src={profilePic}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                <div>
                  <h2 className="text-lg leading-8 text-content/primary">
                    {info.name}
                  </h2>
                  <span>{info.position}</span>
                </div>
              </div>
              <ul className="border-t border-border/primary">
                <li className="flex items-center space-x-2 pt-4">
                  <Icon path={mdiArrowUpDownBold} size={1} />
                  <span>{info.height} m</span>
                </li>
                <li className="flex items-center space-x-2 pt-4">
                  <Icon path={mdiWeightKilogram} size={1} />
                  <span>{info.weight} Kg</span>
                </li>
                <li className="flex items-center space-x-2 pt-4">
                  <Icon path={mdiFlag} size={1} />
                  <span>{info.club}</span>
                </li>
                <li className="flex items-center space-x-2 pt-4">
                  <Icon path={mdiMapMarker} size={1} />
                  <span>{info.nationality}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
