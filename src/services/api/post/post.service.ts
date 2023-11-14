import http from 'src/services/http'

class PostService {
  async getAllPost(page: number): Promise<any> {
    const response = await http.get(`post/all-post/${page}`)
    return response
  }
  async getAllPostImage(page: number): Promise<any> {
    const response = await http.get(`post/all-image/${page}`)
    return response
  }
  async createPost(data: any): Promise<any> {
    const response = await http.post('post/add', data)
    return response
  }
  async createPostWithImage(data: any): Promise<any> {
    const response = await http.post('post/add-image', data)
    return response
  }
  async createPostWithVideo(data: any): Promise<any> {
    const response = await http.post('post/add-video', data)
    return response
  }
  // update
  async updatePostWithImage(postId: string, data: any): Promise<any> {
    const response = await http.post(`post/create/${postId}`, data)
    return response
  }

  async getAllReaction(postId: string): Promise<any> {
    const response = await http.get(`post/reaction/${postId}`)
    return response
  }

  async addReactionToPost(data: any) {
    const response = await http.post('post/reaction', data)
    return response
  }

  async getAllCommentOfPost(postId: string) {
    const response = await http.get(`post/comments/${postId}`)
    return response
  }

  async addCommentToPost(data: any) {
    const response = await http.post('post/comment', data)
    return response
  }
}
export default new PostService()
