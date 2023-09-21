import {
    mdiArrowUpDownBold,
    mdiFlag,
    mdiMapMarker,
    mdiWeightKilogram,
} from '@mdi/js'
import Icon from '@mdi/react'
import Image from 'next/image'
import profilePic from '../public/profile.jpg'
import Like from './Like'
import { HomeProps } from '../utils/models.js'

const Card = ({ data }: HomeProps) => {
    return (
        <div className="grid grid-cols-3 gap-6">
            {data.map((info) => (
                <div
                    className="bg-background/secondary rounded-sm px-12 py-6 text-neutral-400 text-base leading-normal font-normal text-content/secondary border border-border/secondary flex flex-col space-y-4"
                    key={info.id}
                >
                    <div className="flex items-center justify-end">
                        <Like info={info} />
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
    )
}
export default Card
