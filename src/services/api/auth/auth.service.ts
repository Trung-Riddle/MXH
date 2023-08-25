import http from 'src/services/http'
import { RegisterSchema, LoginSchema } from 'src/services/utilities/rules'

class AuthService {
  async register(data: RegisterSchema) {
    const response = await http.post('/api/v1/signup', data)
    return response
  }
  async Login(data: LoginSchema) {
    const response = await http.post('/api/v1/login', data)
    return response
  }
  async forgotPassword(email: string) {
    const response = await http.post('/api/v1/forgot-password', { email })
    return response
  }
  async changePassword(token: string, data: any) {
    const response = await http.post(`/api/v1/reset-password/${token}`, data)
    return response
  }
}
export default new AuthService()
