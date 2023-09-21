import {
    mdiAccountPlus,
    mdiArrowUpDownBold,
    mdiFlag,
    mdiMagnify,
    mdiMapMarker,
    mdiWeightKilogram,
} from '@mdi/js'
import Icon from '@mdi/react'
import Image from 'next/image'
import logoPic from '../public/logo.svg'
import profilePic from '../public/profile.jpg'
import Like from './components/Like'
let data = [
    {
        id: 1,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 2,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 3,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 4,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 5,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 6,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 7,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 8,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 9,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
    {
        id: 10,
        fullname: 'Antoine DUPONT',
        position: 'Demi de mêlée',
        height: 1.78,
        weight: 80,
        club: 'Stade Toulousain',
        nation: 'Français',
    },
]

const getInfo = getData()
getInfo
    .then((response) => {
        console.log('hit !')
        data = response
    })
    .catch((error) => {
        console.log('error fetching', error)
    })

export default async function Home() {
    return (
        <main className="py-28 container flex flex-col space-y-8">
            <div className="flex justify-center">
                <Image
                    className=""
                    src={logoPic}
                    alt="Picture of the author"
                    width={120}
                    height={120}
                />
            </div>
            <form className="flex space-x-4 mb-8" action="">
                <div className="flex-1 flex items-center space-x-2 text-neutral-400 text-base font-normal leading-6 py-4 px-8 rounded-sm bg-background/secondary border border-border/secondary text-content/secondary">
                    <Icon path={mdiMagnify} size={1} />
                    <input
                        placeholder="Rechercher"
                        type="text"
                        className="bg-transparent flex-1 outline-none"
                    />
                </div>
                <button className="bg-background/accent text-content/primary rounded-sm py-4 px-8 text-neutral-50 leading-8 text-base font-normal flex space-x-4 items-center">
                    <Icon path={mdiAccountPlus} size={1} />
                    <span>Ajouter</span>
                </button>
            </form>
            {data.length ? (
                <div className="grid grid-cols-3 gap-6">
                    {data.map((info) => (
                        <div
                            className="bg-background/secondary rounded-sm px-12 py-6 text-neutral-400 text-base leading-normal font-normal text-content/secondary border border-border/secondary flex flex-col space-y-4"
                            key={info.id}
                        >
                            <div className="flex items-center justify-end">
                                <Like />
                            </div>
                            <div className="flex space-x-4">
                                <Image
                                    className="rounded-default"
                                    src={profilePic}
                                    alt="Picture of the author"
                                    width={80}
                                    height={80}
                                />
                                <div>
                                    <h2 className="text-lg leading-8 text-content/primary">
                                        {info.fullname}
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
                                    <span>{info.nation}</span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            ) : (
                ''
            )}
        </main>
    )
}

async function getData() {
    const res = await fetch(
        'https://x8ki-letl-twmt.n7.xano.io/api:YSHKzsXO/home'
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
