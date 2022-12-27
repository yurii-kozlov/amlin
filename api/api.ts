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