import CardFriend from 'src/components/Friends/CardFriend'

const Home = () => {
  return (
    <div className='flex flex-col mt-6'>
      <h2 className='text-base font-bold mb-4'>Những người bạn có thể biết</h2>

      <div className='flex items-center flex-wrap gap-4'>
        {Array(6)
          .fill(1)
          .map((_, index) => (
            <CardFriend
              key={index}
              avatarUrl='https://s120-ava-talk.zadn.vn/c/2/1/9/8/120/af240160c9d3f895e9c3cffa58caa8bb.jpg'
              followers='12'
              followings='11k'
              posts='12'
              username='Hồ Minh Thành'
            />
          ))}
      </div>
    </div>
  )
}

export default Home
