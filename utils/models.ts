export interface Thumbnail {
    path?: string
    name?: string
    type?: string
    size?: number
    mime?: string
    width?: number
    height?: number
    url?: string
}

export interface HomeData {
    id: number
    fullname: string
    height: number
    weight: number
    club: string
    nation: string
    position: string
    liked: boolean
    thumbnail?: Thumbnail
}

export interface HomeProps {
    data: HomeData[]
}
