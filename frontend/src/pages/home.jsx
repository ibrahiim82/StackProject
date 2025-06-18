import { useSelector } from 'react-redux'
import HomeCard from '../components/HomeCard';

const Home = () => {

  const {posts} = useSelector(state => state.posts)

  console.log("Posts:", posts);
  return (
    <div>
      {
        posts?.map((post,i) => (
          <HomeCard key={i} post={post} />
        ))
      }
    </div>
  )
}

export default Home