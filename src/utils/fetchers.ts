export const fetcher = async <T>(url: string, param?: string): Promise<T> => {
  return fetch(`${url}${param ? param : ""}`).then((resp) => resp.json());
};
