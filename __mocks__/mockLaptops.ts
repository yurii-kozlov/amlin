/* eslint-disable max-len */
import { Product, Products } from 'types/main/Products'

export const mockLaptops: Product[] = [
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
  },
  {
    'inStock': true,
    'firm': 'Mi',
    'slug': 'redmi-13',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612476949/new-products/3_m1wlqn.jpg',
    'name': 'Laptop Mi RedmiBook 13 i5/8/512/MX250/W (JYU4214CN)',
    'reviewsCount': 110,
    'previousPrice': 24999,
    'price': 21999,
    'rating': 3.3,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
  {
    'inStock': true,
    'firm': 'Lenovo',
    'slug': 'idea-pad',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612476949/new-products/4_waavpt.jpg',
    'name': 'Laptop Lenovo IdeaPad S145-15IKB (81VD007TRA)',
    'reviewsCount': 22,
    'previousPrice': 29999,
    'price': 15999,
    'rating': 4.1,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
]

export const mockLaptopsData: Products = {
  list: mockLaptops,
  id: 'laptops',
  firms: [
    {
      name: 'Hunter',
      id: 9
    },
    {
      name: 'Razen',
      id: 10
    },
  ]
}
