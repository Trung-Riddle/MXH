const explores = [
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1669411924415-b951905f8943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1517157488732-b80ab10430e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1502311526760-ebc5d6cc0183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80'
  },
  {
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1669411924415-b951905f8943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1517157488732-b80ab10430e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421790500381-fc9b5996f343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1502311526760-ebc5d6cc0183?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1852&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  }
]

const Explore = () => {
  return (
    <div className='columns-4 px-6 overflow-auto'>
      {explores.map((explore, index) => (
        <div key={index} className='mb-4 w-full break-inside-avoid'>
          <img src={explore.imageUrl} alt='' className='max-w-full rounded-lg' />
        </div>
      ))}
    </div>
  )
}

export default Explore
