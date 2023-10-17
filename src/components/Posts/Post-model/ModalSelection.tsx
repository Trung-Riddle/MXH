import Icons from 'src/assets/icons'
import { useAppDispatch } from 'src/hooks/useRedux'
import { toggleFeelingsModal } from 'src/store/slices/modal/modal.slice'

const ModalSelection = () => {
  const dispatch = useAppDispatch()
  return (
    <div className='border-[#B2A3A3] border flex items-center rounded-lg py-4 px-6 justify-between select-none'>
      <p className='text-sm text-dark dark:text-light font-normal'>Thêm vào bài viết</p>
      <div className='flex items-center gap-4'>
        <span className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'>
          <Icons.Post.AddImage width='28' height='28' />
        </span>
        <span className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'>
          <Icons.Post.AddVideo width='28' height='28' />
        </span>
        <button
          onClick={() => dispatch(toggleFeelingsModal())}
          className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'
        >
          <Icons.Post.AddIcons width='28' height='28' />
        </button>
        <span className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'>
          <Icons.Post.AddGif width='28' height='28' />
        </span>
      </div>
    </div>
  )
}

export default ModalSelection
