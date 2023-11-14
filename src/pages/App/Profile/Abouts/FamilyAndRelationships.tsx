import { useState } from 'react'
import MoreSvg from 'src/assets/icons/components/MoreSvg'
import Public from 'src/assets/icons/components/privacy/Public'

const FamilyAndRelationships = () => {
  const [familyField, setFamilyField] = useState(false)

  const handleToggleShowInputFields = () => {
    setFamilyField((f) => !f)
  }

  return (
    <div className='flex flex-col gap-3'>
      <h4 className='font-bold text-base'>Thành viên trong gia đình</h4>
      {familyField && (
        <div className='flex flex-col'>
          <div className='flex flex-col gap-3 mb-3'>
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Thành viên trong gia đình'
              autoComplete='off'
              id='company'
            />
          </div>

          <select className='appearance-none bg-lightMain dark:bg-darkMain outline-none px-2 py-1 rounded-md shadow hover:shadow-shadowMain transition-all ease-linear duration-150'>
            <option selected>Mối quan hệ</option>
            <option value=''>Mẹ</option>
            <option value=''>Bố</option>
            <option value=''>Em gái</option>
            <option value=''>Em trai</option>
            <option value=''>Chị gái</option>
            <option value=''>Anh trai</option>
          </select>

          <div className='flex items-center justify-between border-t py-2 mt-2'>
            <button className='mr-auto flex items-center gap-1 rounded-md bg-lightMain dark:bg-darkMain shadow py-1.5 px-2 font-semibold text-sm hover:bg-lightMain/40 transition-all ease-linear duration-150 hover:shadow-shadowMain'>
              <Public height='20' width='20' />
              Công khai
            </button>
            <div
              id='work'
              aria-hidden='true'
              onClick={handleToggleShowInputFields}
              className='w-max py-1.5 cursor-pointer mr-2 px-2 hover:bg-lightMain/40 transition-all ease-linear duration-150 hover:shadow-shadowMain bg-lightMain dark:bg-darkMain shadow rounded-md text-dark dark:text-light font-semibold text-sm '
            >
              Hủy
            </div>
            <div className='w-max py-1.5 px-2 style-bg-main shadow rounded-md text-light font-semibold text-sm cursor-not-allowed'>
              Lưu
            </div>
          </div>
        </div>
      )}
      {familyField === false && (
        <div
          onClick={handleToggleShowInputFields}
          id='work'
          aria-hidden='true'
          className='flex items-center gap-2 group cursor-pointer'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none'>
            <path
              d='M16.6151 10.9415H12.6183V6.94473C12.6183 6.82904 12.5236 6.73438 12.4079 6.73438H11.1458C11.0301 6.73438 10.9354 6.82904 10.9354 6.94473V10.9415H6.93863C6.82293 10.9415 6.72827 11.0362 6.72827 11.1519V12.414C6.72827 12.5297 6.82293 12.6244 6.93863 12.6244H10.9354V16.6212C10.9354 16.7369 11.0301 16.8315 11.1458 16.8315H12.4079C12.5236 16.8315 12.6183 16.7369 12.6183 16.6212V12.6244H16.6151C16.7307 12.6244 16.8254 12.5297 16.8254 12.414V11.1519C16.8254 11.0362 16.7307 10.9415 16.6151 10.9415Z'
              className='fill-dark dark:fill-light'
            />
            <path
              d='M11.7798 0C5.27446 0 -0.000244141 5.27471 -0.000244141 11.78C-0.000244141 18.2853 5.27446 23.56 11.7798 23.56C18.2851 23.56 23.5598 18.2853 23.5598 11.78C23.5598 5.27471 18.2851 0 11.7798 0ZM11.7798 21.5616C6.37884 21.5616 1.99815 17.1809 1.99815 11.78C1.99815 6.37908 6.37884 1.99839 11.7798 1.99839C17.1807 1.99839 21.5614 6.37908 21.5614 11.78C21.5614 17.1809 17.1807 21.5616 11.7798 21.5616Z'
              className='fill-dark dark:fill-light'
            />
          </svg>

          <span className='text-sm font-medium group-hover:underline group-hover:underline-offset-2'>
            Thêm người thân
          </span>
        </div>
      )}

      {[1, 2].map((item) => (
        <div key={item} className='flex items-center justify-between'>
          <img
            src='https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/306969739_476278381197234_1313849721261471666_n.jpg?stp=dst-jpg_p100x100&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OsYBIy5RTC4AX8yYRdG&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDhgT4NlOdYs9qz8vCa1AJaymNqG0YCc3ielEHjmKUX9A&oe=655427D5'
            alt=''
            className='rounded-full h-10 w-10'
          />
          <p className='flex-1 text-left ml-3 text-sm'>
            Đã học tại
            <span className='text-[15px] font-medium ml-1'>Văn ngọc chính High School</span>
          </p>
          <span className='hover:bg-slate-400/25 transition ease-linear duration-150 cursor-pointer rounded-full py-3.5 px-1'>
            <MoreSvg width='25' />
          </span>
        </div>
      ))}
    </div>
  )
}

export default FamilyAndRelationships
