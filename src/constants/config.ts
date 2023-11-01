const ENV = process.env.REACT_APP_ENV || 'local';

const ENV_HASH_MAP: Record<string, string> = {
  local: 'http://localhost:3000/',
  development: 'http://3.9.95.221/',
  staging: 'http://35.176.97.72/',
};

export const CONFIG = {
  // apiUrl: ENV_HASH_MAP['development'],
  apiUrl: ENV_HASH_MAP['development'],
};
