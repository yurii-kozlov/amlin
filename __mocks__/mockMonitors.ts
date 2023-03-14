/* eslint-disable max-len */
import { Product, Products } from 'types/main/Products'

export const mockMonitors: Product[] = [
  {
    'inStock': false,
    'slug': 'mi34',
    'firm': 'Mi',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612528867/new-products/13_qzykzl.jpg',
    'name': 'Monitor Xiaomi Mi Display 34',
    'reviewsCount': 74,
    'previousPrice': 14933,
    'price': 12499,
    'rating': 4.7,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
  {
    'inStock': true,
    'slug': 'LS24R350FHIXCI2',
    'firm': 'Samsung',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612528867/new-products/14_dhc9d6.jpg',
    'name': 'Monitor 23.8 "Samsung S24R350F (LS24R350FHIXCI) Black',
    'reviewsCount': 11,
    'previousPrice': 5933,
    'price': 4499,
    'rating': 2.8,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
  {
    'inStock': true,
    'slug': '25UM58',
    'firm': 'LG',
    'url': 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612528867/new-products/15_kjcc9d.jpg',
    'name': 'Monitor 25 "LG 25UM58-P Black',
    'reviewsCount': 3,
    'previousPrice': 6933,
    'price': 4499,
    'rating': 5,
    'description': '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
  },
]

export const mockMonitorsData: Products = {
  list: mockMonitors,
  id: 'monitors',
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
