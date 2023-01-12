export interface NewProduct {
  inStock: boolean,
  slug: string,
  url: string,
  name: string,
  reviewsCount: number,
  previousPrice: number,
  rating: number,
  price: number
}

export interface NewProducts {
  list: NewProduct[],
  id: string
}
