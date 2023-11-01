import http from 'src/services/http'

class PostService {
  async getAllPost(page: number): Promise<any> {
    const response = await http.get(`/post/all/${page}`)
    return response
  }
  async getAllPostImage(page: number): Promise<any> {
    const response = await http.get(`/post/all-image/${page}`)
    return response
  }
  async createPost(data: any): Promise<any> {
    const response = await http.post('/post/create', data)
    return response
  }
  async createPostWithImage(data: any): Promise<any> {
    const response = await http.post('/post/create/image', data)
    return response
  }
  async createPostWithVideo(data: any): Promise<any> {
    const response = await http.post('/post/create/video', data)
    return response
  }
  // update
  async updatePostWithImage(postId: string, data: any): Promise<any> {
    const response = await http.post(`/post/create/${postId}`, data)
    return response
  }
}
export default new PostService()
