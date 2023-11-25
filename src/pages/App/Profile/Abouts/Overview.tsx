import { useState } from 'react'
import Public from 'src/assets/icons/components/privacy/Public'

const Overview = () => {
  const [inputFields, setInputFields] = useState<{ [x: string]: boolean }>({
    work: false,
    university: false,
    highSchool: false,
    hometown: false,
    provinceCity: false
  })

  const handleToggleShowInputFields = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id as string

    setInputFields({
      ...inputFields,
      [id]: !inputFields[id]
    })
  }

  return (
    <div className='flex flex-col gap-6'>
      {/* Work */}
      {inputFields.work && (
        <div className='flex flex-col'>
          <div className='flex flex-col gap-3 mb-3'>
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Công ty'
              autoComplete='off'
              id='company'
            />
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Chức vụ'
              autoComplete='off'
              id='position'
            />
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Thành phố/Thị xã'
              autoComplete='off'
              id='city'
            />
            <textarea
              name=''
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Mô tả'
              autoComplete='off'
              id='description'
            ></textarea>
          </div>

          <div className='flex flex-col flex-shrink-0 gap-2'>
            <h4 className='font-semibold text-base'>Khoảng thời gian</h4>

            <div className='flex flex-col gap-3'>
              <label
                htmlFor='workingHere'
                className='font-medium flex items-center gap-2 select-none hover:cursor-pointer text-sm'
              >
                <input id='workingHere' className='w-4 h-4' type='checkbox' />
                Tôi đang làm việc ở đây
              </label>

              <span className='inline-flex items-center gap-2.5'>
                Từ
                <select className='appearance-none bg-lightMain dark:bg-darkMain outline-none px-2 py-1 rounded-md shadow hover:shadow-shadowMain transition-all ease-linear duration-150'>
                  <option selected>Năm</option>
                  <option value=''>2024</option>
                  <option value=''>2023</option>
                  <option value=''>2022</option>
                  <option value=''>2021</option>
                </select>
              </span>
            </div>
          </div>

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
      {inputFields.work === false && (
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
            Thêm nơi làm việc
          </span>
        </div>
      )}

      {/* High School */}
      {inputFields.highSchool && (
        <div className='flex flex-col'>
          <div className='flex flex-col gap-3'>
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Trường học'
              autoComplete='off'
            />

            <div className='flex flex-col gap-1'>
              <h4 className='font-semibold text-sm'>Khoảng thời gian</h4>
              <span className='inline-flex items-center gap-2.5 text-sm'>
                Từ
                <select className='appearance-none font-semibold cursor-pointer bg-lightMain dark:bg-darkMain outline-none px-2 py-1 rounded-md shadow hover:shadow-shadowMain transition-all ease-linear duration-150'>
                  <option selected>Năm</option>
                  <option value=''>2024</option>
                  <option value=''>2023</option>
                  <option value=''>2022</option>
                  <option value=''>2021</option>
                </select>
                đến
                <select className='appearance-none font-semibold cursor-pointer bg-lightMain dark:bg-darkMain outline-none px-2 py-1 rounded-md shadow hover:shadow-shadowMain transition-all ease-linear duration-150'>
                  <option selected>Năm</option>
                  <option value=''>2024</option>
                  <option value=''>2023</option>
                  <option value=''>2022</option>
                  <option value=''>2021</option>
                </select>
              </span>
            </div>

            <label
              htmlFor='graduatedHere'
              className='font-medium flex items-center gap-2 select-none hover:cursor-pointer text-sm'
            >
              <input id='graduatedHere' className='w-4 h-4' type='checkbox' />
              Đã tốt nghiệp
            </label>

            <textarea
              name=''
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Mô tả'
              autoComplete='off'
              id='description'
            ></textarea>
          </div>

          <div className='flex items-center justify-between border-t py-2 mt-2'>
            <button className='mr-auto flex items-center gap-1 rounded-md bg-lightMain dark:bg-darkMain shadow py-1.5 px-2 font-semibold text-sm hover:bg-lightMain/40 transition-all ease-linear duration-150 hover:shadow-shadowMain'>
              <Public height='20' width='20' />
              Công khai
            </button>
            <div
              id='highSchool'
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

      {inputFields.highSchool === false && (
        <div
          onClick={handleToggleShowInputFields}
          id='highSchool'
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
            Thêm trường trung học
          </span>
        </div>
      )}

      {/* University/College */}
      {inputFields.university && (
        <div className='flex flex-col'>
          <div className='flex flex-col gap-3'>
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Trường học'
              autoComplete='off'
            />

            <div className='flex flex-col gap-1'>
              <h4 className='font-semibold text-sm'>Khoảng thời gian</h4>
              <span className='inline-flex items-center gap-2.5'>
                Từ
                <select className='appearance-none bg-lightMain dark:bg-darkMain outline-none px-2 py-1 rounded-md shadow hover:shadow-shadowMain transition-all ease-linear duration-150'>
                  <option selected>Năm</option>
                  <option value=''>2024</option>
                  <option value=''>2023</option>
                  <option value=''>2022</option>
                  <option value=''>2021</option>
                </select>
              </span>
            </div>

            <label
              htmlFor='graduatedHere'
              className='font-medium flex items-center gap-2 select-none hover:cursor-pointer text-sm'
            >
              <input id='graduatedHere' className='w-4 h-4' type='checkbox' />
              Đã tốt nghiệp
            </label>

            <textarea
              name=''
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Mô tả'
              autoComplete='off'
              id='description'
            ></textarea>

            <h4 className='font-bold text-base'>Chuyên nghành</h4>
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Chuyên ngành'
              autoComplete='off'
            />
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Chuyên ngành'
              autoComplete='off'
            />
            <input
              type='text'
              className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
              placeholder='Chuyên ngành'
              autoComplete='off'
            />
          </div>

          <div className='flex items-center justify-between border-t py-2 mt-2'>
            <button className='mr-auto flex items-center gap-1 rounded-md bg-lightMain dark:bg-darkMain shadow py-1.5 px-2 font-semibold text-sm hover:bg-lightMain/40 transition-all ease-linear duration-150 hover:shadow-shadowMain'>
              <Public height='20' width='20' />
              Công khai
            </button>
            <div
              id='university'
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

      {inputFields.university === false && (
        <div
          onClick={handleToggleShowInputFields}
          id='university'
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
            Thêm trường cao đẳng/đại học
          </span>
        </div>
      )}

      {inputFields.provinceCity && (
        <div className='flex flex-col'>
          <input
            type='text'
            className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
            placeholder='Tỉnh/Thành phố hiện tại'
            autoComplete='off'
          />
          <div className='flex items-center justify-between border-t py-2 mt-2'>
            <button className='mr-auto flex items-center gap-1 rounded-md bg-lightMain dark:bg-darkMain shadow py-1.5 px-2 font-semibold text-sm hover:bg-lightMain/40 transition-all ease-linear duration-150 hover:shadow-shadowMain'>
              <Public height='20' width='20' />
              Công khai
            </button>
            <div
              id='provinceCity'
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
      {inputFields.provinceCity === false && (
        <div
          onClick={handleToggleShowInputFields}
          id='provinceCity'
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
            Thêm tỉnh/thành phố hiện tại
          </span>
        </div>
      )}

      {inputFields.hometown && (
        <div className='flex flex-col'>
          <input
            type='text'
            className='border bg-light dark:bg-dark py-2.5 px-3 rounded-md outline-none shadow font-medium appearance-none text-sm'
            placeholder='Quê quán'
            autoComplete='off'
          />
          <div className='flex items-center justify-between border-t py-2 mt-2'>
            <button className='mr-auto flex items-center gap-1 rounded-md bg-lightMain dark:bg-darkMain shadow py-1.5 px-2 font-semibold text-sm hover:bg-lightMain/40 transition-all ease-linear duration-150 hover:shadow-shadowMain'>
              <Public height='20' width='20' />
              Công khai
            </button>
            <div
              id='hometown'
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
      {inputFields.hometown === false && (
        <div
          onClick={handleToggleShowInputFields}
          id='hometown'
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
            Thêm quê quán
          </span>
        </div>
      )}
    </div>
  )
}

export default Overview
