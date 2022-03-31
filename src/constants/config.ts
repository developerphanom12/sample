const ENV = process.env.REACT_APP_ENV || 'dev';

const ENV_HASH_MAP: Record<string, string> = {
  dev: 'http://localhost:3000/',

};

export const CONFIG = {
  apiUrl: ENV_HASH_MAP[ENV],
};
