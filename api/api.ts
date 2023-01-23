import axios, {AxiosResponse} from 'axios';

const BASE_URL = 'http://localhost:3002';

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
