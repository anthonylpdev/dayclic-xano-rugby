'use client'

import { mdiHeart, mdiHeartOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { useState } from 'react'

const Like = (): JSX.Element => {
    const [liked, setLiked] = useState(false)
    return (
        <button onClick={() => setLiked(!liked)}>
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
