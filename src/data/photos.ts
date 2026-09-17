import type { Localized } from '../i18n/types';

export interface GalleryPhoto {
  src: string;
  caption: Localized;
}

export interface PhotoTip {
  title: Localized;
  body: Localized;
}

export interface Credit {
  title: string;
  author: string;
  license: string;
  url: string;
}

export const gallery: GalleryPhoto[] = [
  { src: '/images/hero.jpg', caption: { ja: 'あじさいと滝の共演', en: 'Hydrangea & the falls', 'zh-Hant': '繡球花與瀑布的共演' } },
  { src: '/images/spring.jpg', caption: { ja: '桜と滝(春)', en: 'Cherry & falls (spring)', 'zh-Hant': '櫻花與瀑布（春）' } },
  { src: '/images/ajisai.jpg', caption: { ja: 'あじさいの咲く渓谷全景', en: 'Gorge full of hydrangea', 'zh-Hant': '繡球花盛開的溪谷全景' } },
  { src: '/images/falls.jpg', caption: { ja: '岩壁を流れ落ちる全景', en: 'Full view down the rock face', 'zh-Hant': '沿岩壁傾瀉的全景' } },
  { src: '/images/summer.jpg', caption: { ja: '深緑の渓谷', en: 'Deep-green gorge', 'zh-Hant': '深綠的溪谷' } },
];

export const photoTips: PhotoTip[] = [
  {
    title: { ja: 'あじさいの前景', en: 'Hydrangea foreground', 'zh-Hant': '繡球花前景' },
    body: { ja: '青や紫の花を手前に、滝を背景に。この滝を象徴する一枚。SNS映えもする定番構図です。', en: 'Blue or purple blooms in front, the falls behind — the iconic shot that also pops on social media.', 'zh-Hant': '以藍紫花朵為前景、瀑布為背景，是象徵此瀑布的一張。也是適合社群分享的經典構圖。' },
  },
  {
    title: { ja: '滝の全景', en: 'Full view of the falls', 'zh-Hant': '瀑布全景' },
    body: { ja: '中望遠で岩壁と水流を圧縮すると、滝の高さと迫力が伝わります。', en: 'A medium telephoto compresses the rock face and flow, conveying the falls’ height and power.', 'zh-Hant': '用中長焦壓縮岩壁與水流，能呈現瀑布的高度與氣勢。' },
  },
  {
    title: { ja: '水しぶきの近景', en: 'Spray close-up', 'zh-Hant': '水花近景' },
    body: { ja: 'スローシャッターで水流を絹のように。レンズやスマホの防水対策をお忘れなく。', en: 'A slow shutter turns the flow silky — but waterproof your lens or phone.', 'zh-Hant': '用慢門讓水流如絲般柔順，但別忘了為鏡頭或手機做好防水。' },
  },
  {
    title: { ja: '雨・曇りの日', en: 'Rainy / cloudy days', 'zh-Hant': '雨・陰天' },
    body: { ja: 'あじさいの色がやわらかく、渓谷に霧が立ちます。ただし足元は滑りやすいので慎重に。', en: 'Bloom colours soften and mist rises in the gorge — but watch your footing, it’s slippery.', 'zh-Hant': '繡球花色彩變柔和，溪谷升起霧氣，但腳下濕滑，請小心。' },
  },
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
