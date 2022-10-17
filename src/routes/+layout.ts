import type { OpenGraph, Twitter } from 'svelte-meta-tags';

export let twitter: Twitter = {
  handle: "@Right_Path_4U",
  site: "https://rightpath.help/",
  cardType: "summary_large_image",
  title: "Right Path for you",
  description: "Follow your passion to get the job you are passionate about. Let us know what job you are passionate about and we will show you the path to get there.",
  image: "images/twitter-cover-image.jpg",
  imageAlt: "Right Path Landing Page"
};

export let openGraph: OpenGraph = {
  type: 'website',
  url: 'https://rightpath.help/',
  title: "Right Path for you",
  description: "Follow your passion to get the job you are passionate about. Let us know what job you are passionate about and we will show you the path to get there.",
  images: [
    {
      url: 'images/twitter-cover-image.jpg',
      width: 1500,
      height: 500,
      alt: 'Right Path Landing Page'
    },
    {
      url: 'images/logo.png',
      width: 200,
      height: 45,
      alt: 'Right Path Logo'
    },
  ]
};
