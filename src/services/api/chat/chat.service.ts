import http from 'src/services/http'

class ChatService {
  async getConversationList() {
    const response = await http.get('/chat/message/conversation-list')
    return response
  }
  async getChatMessages(receiverId: any) {
    const response = await http.get(`/chat/message/user/${receiverId}`)
    return response
  }
  async addUsersChat(data: any) {
    const response = await http.post(`/chat/message/add-chat-users`, data)
    return response
  }
  async markMessageAsSeen(senderId: string, receiverId: string) {
    const response = await http.put(`/chat/message/mark-as-seen`, { senderId, receiverId })
    return response
  }
  async saveChatMessage(data: any) {
    const response = await http.put(`/chat/message`, data)
    return response
  }
}
export default new ChatService()
