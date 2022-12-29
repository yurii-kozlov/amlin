import { Main } from '../types/main/Main';

const BASE_URL = 'http://localhost:3001';

function get<T>(url:string):Promise<T> {
  const fullURL = BASE_URL + url;

  return fetch(fullURL)
    .then(response => response.json())
}

// function get<T>(url: string): Promise<T> {
//   // eslint-disable-next-line prefer-template
//   const fullURL = BASE_URL + url + '.json';

//   return wait(300)
//     .then(() => fetch(fullURL))
//     .then(res => res.json());
// }

export const getMain = ():Promise<Main> => get<Main>('/main');

// export const getTodos = () => get<Todo[]>('/todos');

// export const getUser = (userId: number) => get<User>(`/users/${userId}`);