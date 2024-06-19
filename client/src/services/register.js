import api from './api'

const create = (name, email, password) => {
  return api.post('/register', {
    name, email, password
  })
}

export default { create }
