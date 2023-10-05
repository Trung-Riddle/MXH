import http from 'src/services/http'

class UserService {
  async getUserSuggestions() {
    const response = await http.get('user/profile/suggestions')
    return response
  }
  async updateBasicInfo(data: any) {
    const response = await http.put('user', data)
    return response
  }
  async checkCurrentUser() {
    const response = await http.get('currentuser')
    return response
  }
}
export default new UserService()
