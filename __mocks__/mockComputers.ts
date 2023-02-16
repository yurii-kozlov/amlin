/* eslint-disable max-len */
import { Product, Products } from 'types/main/Products'

export const mockComputers: Product[] = [
  {
    'inStock': true,
    'slug': 'X65v12',
    'firm': 'Artline',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612528866/new-products/9_uhvi0t.jpg',
    'name': 'Computer  ARTLINE Gaming X65 (X65v12)',
    'reviewsCount': 32,
    'previousPrice': 23933,
    'price': 17856,
    'rating': 3.3,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
  {
    'inStock': true,
    'slug': 'X35v17',
    'firm': 'Artline',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612528866/new-products/10_wvgebo.jpg',
    'name': 'Computer  ARTLINE Gaming X35 (X35v17)',
    'reviewsCount': 3,
    'previousPrice': 15333,
    'price': 13229,
    'rating': 3.9,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
  {
    'inStock': false,
    'slug': 'X39v45',
    'firm': 'Artline',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612528866/new-products/12_eqpvhu.jpg',
    'name': 'Computer  ARTLINE Gaming X39 (X39v45)',
    'reviewsCount': 223,
    'previousPrice': 22933,
    'price': 19499,
    'rating': 2.5,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
]

export const mockComputersData: Products = {
  list: mockComputers,
  id: 'computers',
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
