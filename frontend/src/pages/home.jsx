import { useSelector } from 'react-redux'

const Home = () => {

  const {posts} = useSelector(state => state.posts)

  console.log("Posts:", posts);
  return (
    <div>Home</div>
  )
}

export default Home