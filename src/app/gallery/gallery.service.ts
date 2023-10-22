import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {



  albums = [
    {
      link: 'volvo',
      label: 'VOLVO',
      thumbnail: 'covers/volvo-cover.jpg',
      prev: 'logo',
      next: 'tdp',
      photos:
        [{
          id: 1,
          img: '/volvo/volvo1.jpg'
        },
        {
          id: 2,
          img: '/volvo/volvo2.jpg'
        },
        {
          id: 3,
          img: '/volvo/volvo3.jpg'
        },
        {
          id: 4,
          img: '/volvo/volvo4.jpg'
        },
        {
          id: 5,
          img: '/volvo/volvo5.jpg'
        },
        ]
    },

    {
      link: 'tdp',
      label: 'tour de pologne',
      thumbnail: 'covers/tdp-cover.jpg',
      prev: 'volvo',
      next: 'med',
      photos:
        [
          {
            id: 1,
            img: '/tdp/tdp1.jpg'
          },
          {
            id: 2,
            img: '/tdp/tdp2.jpg'
          },
          {
            id: 3,
            img: '/tdp/tdp3.jpg'
          },
          {
            id: 4,
            img: '/tdp/tdp4.jpg'
          },
          {
            id: 5,
            img: '/tdp/tdp5.jpg'
          },
          {
            id: 6,
            img: '/tdp/tdp6.jpg'
          },
          {
            id: 7,
            img: '/tdp/tdp7.jpg'
          },
        ]
    },
    {
      link: 'med',
      label: 'sesja medyczna',
      thumbnail: 'covers/med-cover.jpg',
      prev: 'tdp',
      next: 'wedding',
      photos:
        [
          {
            id: 1,
            img: '/med/med1.jpg'
          },
          {
            id: 2,
            img: '/med/med2.jpg'
          },
          {
            id: 3,
            img: '/med/med3.jpg'
          },
          {
            id: 4,
            img: '/med/med4.jpg'
          },
          {
            id: 5,
            img: '/med/med5.jpg'
          },
          {
            id: 6,
            img: '/med/med6.jpg'
          },
        ]
    },
    {
      link: 'wedding',
      label: 'sesja ślubna',
      thumbnail: 'covers/wedding-cover.jpg',
      prev: 'med',
      next: 'park',
      photos:
        [
          {
            id: 1,
            img: '/wedding/wedding1.jpg'
          },
          {
            id: 2,
            img: '/wedding/wedding2.jpg'
          },
          {
            id: 3,
            img: '/wedding/wedding3.jpg'
          },
          {
            id: 4,
            img: '/wedding/wedding4.jpg'
          },
          {
            id: 5,
            img: '/wedding/wedding5.jpg'
          },

        ]
    },
    {
      link: 'park',
      label: 'sesja parkowa',
      thumbnail: 'covers/park-cover.jpg',
      prev: 'wedding',
      next: 'guitar',
      photos:
        [
          {
            id: 1,
            img: '/park/park1.jpg'
          },
          {
            id: 2,
            img: '/park/park2.jpg'
          },
          {
            id: 3,
            img: '/park/park3.jpg'
          },
          {
            id: 4,
            img: '/park/park4.jpg'
          },
          {
            id: 5,
            img: '/park/park5.jpg'
          },

        ]
    },
    {
      link: 'guitar',
      label: 'gitara',
      thumbnail: 'covers/guitar-cover.jpg',
      prev: 'park',
      next: 'bike',
      photos:
        [
          {
            id: 1,
            img: '/guitar/guitar1.jpg'
          },
          {
            id: 2,
            img: '/guitar/guitar2.jpg'
          },
          {
            id: 3,
            img: '/guitar/guitar3.jpg'
          },
          {
            id: 4,
            img: '/guitar/guitar4.jpg'
          },
          {
            id: 5,
            img: '/guitar/guitar4.jpg'
          },

        ]
    },
    {
      link: 'bike',
      label: 'sesja rowerowa',
      thumbnail: 'covers/bike-cover.jpg',
      prev: 'guitar',
      next: 'gentelman',
      photos:
        [
          {
            id: 1,
            img: '/bike/bike1.jpg'
          },
          {
            id: 2,
            img: '/bike/bike2.jpg'
          },
          {
            id: 3,
            img: '/bike/bike3.jpg'
          },
          {
            id: 4,
            img: '/bike/bike4.jpg'
          },
          {
            id: 5,
            img: '/bike/bike5.jpg'
          },

        ]
    },
    {
      link: 'gentelman',
      label: 'sesja wizerunkowa',
      thumbnail: 'covers/gentelman-cover.jpg',
      prev: 'bike',
      next: 'gliwice',
      photos:
        [
          {
            id: 1,
            img: '/gentelman/gentelman1.jpg'
          },
          {
            id: 2,
            img: '/gentelman/gentelman2.jpg'
          },
          {
            id: 3,
            img: '/gentelman/gentelman3.jpg'
          },
          {
            id: 4,
            img: '/gentelman/gentelman4.jpg'
          },
          {
            id: 5,
            img: '/gentelman/gentelman5.jpg'
          },

        ]
    },
    {
      link: 'gliwice',
      label: 'dni otwarte gliwice',
      thumbnail: 'covers/gliwice-cover.jpg',
      prev: 'gentelman',
      next: 'holiday',
      photos:
        [
          {
            id: 1,
            img: '/gliwice/gliwice1.jpg'
          },
          {
            id: 2,
            img: '/gliwice/gliwice2.jpg'
          },
          {
            id: 3,
            img: '/gliwice/gliwice3.jpg'
          },
          {
            id: 4,
            img: '/gliwice/gliwice4.jpg'
          },
          {
            id: 5,
            img: '/gliwice/gliwice5.jpg'
          },

        ]
    },
    {
      link: 'holiday',
      label: 'wakacje czechy',
      thumbnail: 'covers/holiday-cover.jpg',
      prev: 'gliwice',
      next: 'mostostal',
      photos:
        [
          {
            id: 1,
            img: '/holiday/holiday1.jpg'
          },
          {
            id: 2,
            img: '/holiday/holiday2.jpg'
          },
          {
            id: 3,
            img: '/holiday/holiday3.jpg'
          },
          {
            id: 4,
            img: '/holiday/holiday4.jpg'
          },
          {
            id: 5,
            img: '/holiday/holiday5.jpg'
          },

        ]
    },
    {
      link: 'mostostal',
      label: 'mostostal',
      thumbnail: 'covers/mostostal-cover.jpg',
      prev: 'holiday',
      next: 'logo',
      photos:
        [
          {
            id: 1,
            img: '/mostostal/mostostal1.jpg'
          },
          {
            id: 2,
            img: '/mostostal/mostostal2.jpg'
          },
          {
            id: 3,
            img: '/mostostal/mostostal3.jpg'
          },
          {
            id: 4,
            img: '/mostostal/mostostal4.jpg'
          },
          {
            id: 5,
            img: '/mostostal/mostostal5.jpg'
          },

        ]
    },
    {
      link: 'logo',
      label: 'logo',
      thumbnail: 'covers/logo-cover.jpg',
      prev: 'mostostal',
      next: 'volvo',
      photos:
        [
          {
            id: 1,
            img: '/logo/logo1.jpg'
          },
          {
            id: 2,
            img: '/logo/logo2.jpg'
          },
          {
            id: 3,
            img: '/logo/logo3.jpg'
          },
          {
            id: 4,
            img: '/logo/logo4.jpg'
          },
          {
            id: 5,
            img: '/logo/logo5.jpg'
          },

        ]
    },
  ]


  constructor() { }


  getAlbums() {
    return this.albums
  }
}
