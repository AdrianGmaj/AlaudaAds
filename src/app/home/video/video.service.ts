import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos = [
    {
      link: 'filmy-reklamowe',
      label: 'filmy reklamowe',
      thumbnail: 'video-covers/movies.jpg',
      para: 'Profesjonalnie zrealizowany film reklamowy to podstawowe narzędzie do promocji każdej marki. Nasze doświadczenie pozwala na stworzenie wysokiej jakości produkcji, które w połączeniu z indywidualnym podejściem do tematu po prostu działają.'
    },
    {
      link: 'social-media',
      label: 'Rolki Instagram/Tiktok',
      thumbnail: 'video-covers/social-media.jpg',
      para: 'Jeśli chcesz zaistnieć, musisz być obecny w Social Mediach. Rolki na Instagramie, Tiktoku i YouTube, to obecnie podstawowe narzędzia, które wykorzystywane są do kreowania pozytywnego wizerunku marki.'
    },
    {
      link: 'products',
      label: 'Filmy produktowe',
      thumbnail: 'video-covers/products.jpg',
      para: 'Filmy produktowe są skutecznym narzędziem marketingowym, które świetnie uzupełnią Twoje działania promocyjne. Dzięki tej formie możesz w prosty sposób przedstawić specyfikę oferowanych przez Ciebie usług i produktów.'
    },
    {
      link: 'party',
      label: 'Relacje z imprez',
      thumbnail: 'video-covers/party.jpg',
      para: 'Relacje z imprez, wydarzeń, eventów firmowych to kolejny sposób, który pomoże Twojej marce dotrzeć do większej ilości odbiorców i zapisać się w ich pamięci. Powierz to zadanie specjalistom i ciesz się niezapomnianymi chwilami.'
    },
    {
      link: 'music-videos',
      label: 'Teledyski',
      thumbnail: 'video-covers/music-videos.jpg',
      para: 'Tworzenie teledysków to proces, który wymaga nie tylko wiedzy technicznej, ale przede wszystkim kreatywności. Przedstaw nam swoją wizję, a my Ci doradzimy oraz wcielimy ją w życie. Stwórzmy razem teledysk!'
    },
    {
      link: 'dron',
      label: 'Filmy z drona',
      thumbnail: 'video-covers/dron.jpg',
      para: 'Filmy z drona to coraz bardziej popularna forma, która pozwala uchwycić niesamowite kadry z powietrza. Pokaż się z wyjątkowej perspektywy i zapadnij na długo w pamięć dzięki kreatywnym i nieszablonowym ujęciom.'
    },
  ]
  constructor() { }


  getVideos() {
    return this.videos
  }
}
