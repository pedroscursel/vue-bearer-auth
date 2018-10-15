const IS_LOCAL = process.env.NODE_ENV !== 'production'
const API_BASE_URL = IS_LOCAL ? '' : ''

const LOGIN_URL = 'http://urltologin.com.br/login'

export default {
  IS_LOCAL,
  API_BASE_URL,
  LOGIN_URL
}
