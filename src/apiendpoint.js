const IS_LOCAL = process.env.NODE_ENV !== 'production'
const API_BASE_URL = IS_LOCAL ? '' : ''

const LOGIN_URL = 'http://staging.autenticacao.api.fabrika162.com.br/login'
const AUTH_USER = 'http://staging.autenticacao.api.fabrika162.com.br/users'

const FROTAS_BASE = 'http://staging.frotas.api.fabrika162.com.br'
const FROTAS_CARS = 'http://staging.frotas.api.fabrika162.com.br/cars'
const FROTAS_DRIVERS = 'http://staging.frotas.api.fabrika162.com.br/drivers'

const GESTOR_BASE = 'http://staging.gestor-frota.api.fabrika162.com.br'
const GESTOR_CLIENTS = 'http://staging.gestor-frota.api.fabrika162.com.br/clients'

const MULTAS_BASE = 'http://staging.multas.api.fabrika162.com.br'
const MULTAS_APPEALS = 'http://staging.multas.api.fabrika162.com.br/appeals'
const MULTAS_NICS = 'http://staging.multas.api.fabrika162.com.br/nics'
const MULTAS_NOTIFICATIONS = 'http://staging.multas.api.fabrika162.com.br/notifications'
const MULTAS_TICKETS = 'http://staging.multas.api.fabrika162.com.br/tickets'

export default {
  IS_LOCAL,
  API_BASE_URL,
  LOGIN_URL,
  AUTH_USER,
  FROTAS_BASE,
  FROTAS_CARS,
  FROTAS_DRIVERS,
  GESTOR_BASE,
  GESTOR_CLIENTS,
  MULTAS_BASE,
  MULTAS_APPEALS,
  MULTAS_NICS,
  MULTAS_NOTIFICATIONS,
  MULTAS_TICKETS
}
