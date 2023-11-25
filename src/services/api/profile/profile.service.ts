import http from 'src/services/http'

class ProfileService {
  async getUserProfileById(userId: any) {
    const response = await http.get(`user/profile/all/${userId}`)
    return response
  }
}
export default new ProfileService()
