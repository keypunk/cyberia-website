import api from './api'

const create =  () => {
  return api.get('/profile')
}

export default { create }
