import api from './api'

const create = (email, password) => {
  return api.post('/login', {
    email, password
  })
}

export default { create }
