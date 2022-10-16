export type WP_post = {
  node: {
    id:string
    featuredImage: FeaturedImage
    isSticky: true
    slug: string
    title: string
    excerpt: string
    categories: WP_categories
  }
}


export type WP_postStandAlone = {
    featuredImage: FeaturedImage
    isSticky: true
    date:Date
    slug: string
    title: string
    excerpt: string
    content:string
    categories: WP_categories
}


export type WP_categories = {
  nodes: Array<{
    name: string
    slug:string
  }>
}

export type FeaturedImage = {
  node: {
    mediaItemUrl: string,
    mediaDetails:{
        height:number,
        width:number,
        file:string
    }
  }
}