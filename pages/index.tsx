import Head from 'next/head'

import { PostCard, PostWidget } from "$components";
import { getPosts } from '$services';
import { Post } from '$interface';

interface Posts {
  posts: {
    node: Post["post"]
  }[]
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}

const Home = ({ posts }: Posts) => {
  return (
    <div className="container mx-auto px-2 md:px-10 mb-8">
      <Head>
        <title>ZED.CODES</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => <PostCard post={post.node} key={post.node.title}/>)}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget categories='' slug=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
