import dotenv from 'dotenv';

dotenv.config();

const env = process.env;

function isDevelop() {
  const { CONFIG_ENV } = env;
  return CONFIG_ENV === 'local' || CONFIG_ENV === 'develop';
}

export {
  env,
  isDevelop
};
