import http from 'src/services/http'
import { RegisterSchema, LoginSchema } from 'src/services/utilities/rules'

interface IRegister extends Partial<RegisterSchema> {
  avatarColor: string
  avatarImage: string
}
class AuthService {
  async register(data: IRegister) {
    const response = await http.post('/api/v1/signup', data)
    return response
  }
  async login(data: LoginSchema) {
    const response = await http.post('/api/v1/signin', data)
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
