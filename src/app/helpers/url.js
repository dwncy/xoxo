export const port = 3000;
export const baseUrl = 'http://localhost';

export const apiUrl = (url) =>
  port ? `${baseUrl}:${port}${url}` : `${baseUrl}${url}`;
