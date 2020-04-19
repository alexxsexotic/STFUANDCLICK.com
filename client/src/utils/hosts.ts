const isDev = process.env.NODE_ENV === 'development';

export const apiHost = isDev ? 'http://localhost:3000/api/v1/' : '';
