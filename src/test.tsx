import Tippy from '@tippyjs/react/headless'
const Test = () => {
  return (
    <div className='w-full h-full bg-sky-200'>
      <Tippy
        render={(attrs) => (
          <div className='box' tabIndex={-1} {...attrs}>
            My tippy box
          </div>
        )}
      >
        <button>My button</button>
      </Tippy>
    </div>
  )
}

export default Test
