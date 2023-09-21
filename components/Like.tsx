'use client'

import { mdiHeart, mdiHeartOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'
import { HomeData } from '@/utils/models.js'

const Like = (info: HomeData): JSX.Element => {
    const [liked, setLiked] = useState(info.liked)

    const clickLike = async () => {
        const res = await fetch(
            'https://x8ki-letl-twmt.n7.xano.io/api:YSHKzsXO/like',
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    player_id: info.id,
                    liked: !liked,
                }),
            }
        )

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        setLiked((previous) => !previous)

        return res.json()
    }

    return (
        <button onClick={clickLike}>
            <Icon className="absolute" path={mdiHeartOutline} size={1} />
            <Icon
                className={
                    'absolute transition-transform ease-out ' +
                    (liked ? 'scale-100' : 'scale-0')
                }
                path={mdiHeart}
                size={1}
            />
        </button>
    )
}

export default Like
