import { mdiAccountPlus, mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import Image from 'next/image'
import logoPic from '../public/logo.svg'
import Card from '@/components/Card'
import { HomeData } from '../utils/models.js'

export default async function Home(): Promise<JSX.Element> {
    /* let data = [
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
    ] */
    const data: HomeData[] = await getData()
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
                <Card data={data} />
            ) : (
                <span>Aucun joueurs créé.</span>
            )}
        </main>
    )
}

async function getData(): Promise<HomeData[]> {
    const res = await fetch(
        'https://x8ki-letl-twmt.n7.xano.io/api:YSHKzsXO/home'
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
