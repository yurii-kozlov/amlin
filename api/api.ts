/* eslint-disable max-len */
import axios, {AxiosResponse}  from 'axios';

const BASE_URL = 'http://localhost:3001';

function get<T>(url:string):Promise<T> {
  const fullURL = BASE_URL + url;

  return axios.get(fullURL);
}

export const getLaptops = (currentPage: number): Promise<AxiosResponse> => (
  get<AxiosResponse>(`/laptops?_limit=10&_page=${currentPage}`)
);

export const getMonitors = (currentPage: number): Promise<AxiosResponse> => (
  get<AxiosResponse>(`/monitors?_limit=10&_page=${currentPage}`)
);

export const getComputers = (currentPage: number): Promise<AxiosResponse> => (
  get<AxiosResponse>(`/computers?_limit=10&_page=${currentPage}`)
);



// function get<T>(url:string):Promise<T> {
//   const fullURL = BASE_URL + url;

//   return fetch(fullURL)
//     .then(response => response.json())
// }



// function get<T>(url: string): Promise<T> {
//   // eslint-disable-next-line prefer-template
//   const fullURL = BASE_URL + url + '.json';

//   return wait(300)
//     .then(() => fetch(fullURL))
//     .then(res => res.json());
// }

// export const getMain = ():Promise<Main> => get<Main>('/main');

// export const getTodos = () => get<Todo[]>('/todos');

// export const getUser = (userId: number) => get<User>(`/users/${userId}`);


const example = {
  inStock: false,
  slug: '82AU0087RA',
  firm: 'Lenovo',
  url: 'https://res.cloudinary.com/dqdonqby4/image/upload/v1612476949/new-products/8_ciacab.jpg',
  name: 'Laptop Lenovo Legion 5 15IMH05 (82AU0087RA)',
  reviewsCount: 3,
  previousPrice: 33933,
  price: 31499,
  rating: 2.7,
  description: '15.6 inch FHD 4 way NanoEdge bezel display with a stunning 88% screen-to-body ratio\nPowerful AMD Quad Core Ryzen 5 3500U Processor (2M Cache, up to 3.6 GHz)\nAMD Radeon Vega 8 discrete graphics with Windows 10 Home\n8GB DDR4 RAM and 256GB PCIe NVMe M.2 SSD\nErgonomic backlit keyboard with fingerprint sensor activated via Windows Hello\nExclusive ErgoLift design for improved typing position'
}
