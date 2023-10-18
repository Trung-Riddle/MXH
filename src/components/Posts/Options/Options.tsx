import Icons from 'src/assets/icons'
import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { RootState } from 'src/store'

import {
  toggleOpenFeelingsModal,
  toggleOpenGifsModal,
  toggleOpenInputFile,
  toggleOpenVideoModal
} from 'src/store/slices/modal/modal.slice'

const Options = () => {
  const dispatch = useAppDispatch()
  const backgroundIsOpen = useAppSelector((state: RootState) => state.modal.backgroundIsOpen)
  const inputFileIsOpen = useAppSelector((state: RootState) => state.modal.inputFileIsOpen)

  return (
    <div className='border-[#B2A3A3] border flex items-center rounded-lg py-4 px-6 justify-between select-none'>
      <p className='text-sm text-dark dark:text-light font-normal'>Thêm vào bài viết</p>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => dispatch(toggleOpenInputFile())}
          className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'
        >
          <Icons.Post.AddImage width='28' height='28' disabled={false} />
        </button>
        <button
          onClick={() => dispatch(toggleOpenVideoModal())}
          className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'
        >
          <Icons.Post.AddVideo width='28' height='28' disabled={false} />
        </button>
        <button
          onClick={() => dispatch(toggleOpenFeelingsModal())}
          className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'
        >
          <Icons.Post.AddIcons width='28' height='28' disabled={false} />
        </button>
        <button
          onClick={() => dispatch(toggleOpenGifsModal())}
          className='cursor-pointer p-1 hover:bg-slate-400/20 transition-all ease-linear duration-150 rounded-md'
        >
          <Icons.Post.AddGif width='28' height='28' disabled={false} />
        </button>
      </div>
    </div>
  )
}

export default Options
