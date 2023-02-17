/* eslint-disable max-len */
import { Main } from 'types/main/Main';

export const mockMain: Main = {
  'banners': [
    {
      'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612461812/banners/big-banner-4_cxycmf.png',
      'id': 301
    },
    {
      'url': 'https://res.cloudinary.com/docve4syp/image/upload/c_scale,h_328,w_1398/v1670924341/techstore/banner2_lmghir.png',
      'id': 302
    }
  ],
  'newProducts': {
    'list': [
      {
        'inStock': true,
        'firm': 'Mi',
        'slug': 'mi-lite-15',
        'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612476949/new-products/1_hw0qj0.jpg',
        'name': 'Laptop Mi Notebook Lite 15 I5/8/512/MX110/W (JYU4139CN)',
        'reviewsCount': 10,
        'previousPrice': 29999,
        'price': 21499,
        'rating': 3,
        'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
      }
    ],
    'id': 'new'
  },
  'products': {
    'list': [
      {
        'inStock': true,
        'slug': '243V7QDAB',
        'firm': 'Philips',
        'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612530525/monitors/6_betpxe.jpg',
        'name': 'Monitor 23.8" Philips (243V7QDAB/00) Black',
        'description': '21.5 inches Full HD (1920 x 1080) widescreen IPS display\nAnd Radeon free sync technology. No compatibility for VESA Mount\nRefresh rate: 75 hertz - Using HDMI port\nZero-frame design | ultra-thin | 4ms response time | IPS panel\nPorts: 1 x HDMI & 1 x VGA\nAspect ratio - 16:9. Color supported - 16.7 million colors. Brightness - 250 nit\nTilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree',
        'reviewsCount': 13,
        'previousPrice': 4499,
        'rating': 4.3,
        'price': 2553
      },
    ],
    'id': 'products',
    'firms': [
      {
        'name': 'Lenovo',
        'id': 1
      },
      {
        'name': 'Asus',
        'id': 2
      },
    ]

  },
  'news': [
    {
      'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612629196/news/image_29_1_zkln3f.png',
      'text': 'You might not suspect it, but the best budget gaming PCs are just as capable of tackling the best PC games as more expensive rigs. And, so long as you’re not expecting Ultra settings or 4K performance, a gaming PC that doesn’t come with an outrageous price tag should still be just as competent when it comes to the latest AAA games.\n\nYou may not get all the bells and whistles of the most expensive gaming rigs but the best budget gaming PCs are worth a look. A fantastic, immersive gaming experience really doesn’t require a pricey, maxed out desktop. There are plenty of less expensive, yet capable components available such as Intel’s Coffee Lake Refresh, AMD’s Ryzen 3nd Generation, not to mention the AMD Navi GPUs, that allow less expensive PCs the ability to provide that quality gaming experience. \n\nBasically, you’ll be able to fulfill all your gaming desires with the best budget gaming PCs. Whether you don’t care about gaming at the highest settings or are on a limited budget, these machines will do you justice. And, your bank account won’t be hurting either.',
      'date': '04.04.2021',
      'title': 'Gaming PCs',
      'slug': 'one'
    },
  ],

  'reviews': [
    {
      'slug': 'one',
      'name': '- Tama Brown',
      'text': 'My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.'
    },
    {
      'slug': 'two',
      'name': '- Ashot Oganisyan',
      'text': 'If your piggybank has $2,000 or more, you can choose almost any combination of features you want. Even the most powerful laptop that money can buy, though, must still obey the laws of physics. Powerful hardware generates heat, and the cooling mechanisms that such components require take up space.'
    },
  ],
  'time': '9:00 AM - 5:30 PM',
  'address': 'Kyiv, Nahimova street, 147',
  'phone': '380957737777',
  'social': {
    'fb': 'www.facebook.com',
    'instagram': 'https://www.instagram.com'
  }
}
