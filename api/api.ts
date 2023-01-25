import axios, {AxiosResponse} from 'axios';

function get<T>(url:string):Promise<T> {
  const fullURL = process.env.NEXT_PUBLIC_BASE_URL+ url;

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
