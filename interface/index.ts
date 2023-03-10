export interface Post {
    post: {
      author: {
        name: string
        id: string
        bio?: string
        photo?: {
          url: string
        }
      }
      title: string
      excerpt: string
      createdAt: string
      slug: string
      featuredImage: {
        url: string
      }
      categories: {
        name: string
        slug: string
      }
      content?: any
    }  
}

export interface Author {
  author: {
      name: string
      bio: string
      photo: {
          url: string
      }
  }
}

export interface Category {
  name: string;
  slug: string;
}
