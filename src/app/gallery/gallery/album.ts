import { Photo } from "./photo"

export interface Album {
    link: string,
    label: string,
    thumbnail: string,
    prev: string,
    next: string,
    photos: Array<Photo>
}

