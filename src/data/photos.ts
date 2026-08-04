export interface GalleryPhoto {
  src: string;
  caption: string;
}

export interface PhotoTip {
  title: string;
  body: string;
}

export interface Credit {
  title: string;
  author: string;
  license: string;
  url: string;
}

export const gallery: GalleryPhoto[] = [
  { src: '/images/hero.jpg', caption: 'あじさいと滝の共演' },
  { src: '/images/spring.jpg', caption: '桜と滝(春)' },
  { src: '/images/ajisai.jpg', caption: 'あじさいの咲く渓谷全景' },
  { src: '/images/falls.jpg', caption: '岩壁を流れ落ちる全景' },
  { src: '/images/summer.jpg', caption: '深緑の渓谷' },
];

export const photoTips: PhotoTip[] = [
  { title: 'あじさいの前景', body: '青や紫の花を手前に、滝を背景に。この滝を象徴する一枚。SNS映えもする定番構図です。' },
  { title: '滝の全景', body: '中望遠で岩壁と水流を圧縮すると、滝の高さと迫力が伝わります。' },
  { title: '水しぶきの近景', body: 'スローシャッターで水流を絹のように。レンズやスマホの防水対策をお忘れなく。' },
  { title: '雨・曇りの日', body: 'あじさいの色がやわらかく、渓谷に霧が立ちます。ただし足元は滑りやすいので慎重に。' },
];

// Wikimedia Commons — Creative Commons ライセンス作品を条件に従い使用。
export const credits: Credit[] = [
  {
    title: '見帰りの滝 - panoramio.jpg',
    author: 'mahlervv',
    license: 'CC BY 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:%E8%A6%8B%E5%B8%B0%E3%82%8A%E3%81%AE%E6%BB%9D_-_panoramio.jpg',
  },
  {
    title: '見帰りの滝 - panoramio - mahlervv.jpg',
    author: 'mahlervv',
    license: 'CC BY 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:%E8%A6%8B%E5%B8%B0%E3%82%8A%E3%81%AE%E6%BB%9D_-_panoramio_-_mahlervv.jpg',
  },
  {
    title: 'Saga Karatsu-Ouchi Mikaerinotaki fall and hydrangea 2010.jpg',
    author: 'gtknj',
    license: 'CC BY 2.0',
    url: 'https://commons.wikimedia.org/wiki/File:Saga_Karatsu-Ouchi_Mikaerinotaki_fall_and_hydrangea_2010.jpg',
  },
  {
    title: '見帰りの滝 - panoramio (1).jpg',
    author: 'sk01',
    license: 'CC BY-SA 3.0',
    url: 'https://commons.wikimedia.org/wiki/File:%E8%A6%8B%E5%B8%B0%E3%82%8A%E3%81%AE%E6%BB%9D_-_panoramio_(1).jpg',
  },
  {
    title: 'Waterfall of Mikaeri.JPG',
    author: 'アラツク',
    license: 'CC BY-SA 4.0',
    url: 'https://commons.wikimedia.org/wiki/File:Waterfall_of_Mikaeri.JPG',
  },
];
