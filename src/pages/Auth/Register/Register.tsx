import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from 'src/components'
import { RegisterSchema, registerSchema } from 'src/services/utilities/rules'
import EmailSvg from 'src/components/icons/Email'
import User from 'src/components/icons/User'
import Lock from 'src/components/icons/Lock'
import { useState } from 'react'
import authService from 'src/services/api/auth/auth.service'
import Utils from 'src/services/utilities/utils'
import withBaseComponent from 'src/hooks/withBaseComponent'
import IHocProps from 'src/interfaces/hoc.interface'
import useLocalStorage from 'src/hooks/useLocalStorage'

function Register({ dispatch }: IHocProps) {
  const [loading, setLoading] = useState(false)
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema)
  })
  const whenSubmit = handleSubmit(async (data) => {
    try {
      const avatarColor = Utils.randomAvatarColor()
      const avatarImage = Utils.generateAvatar(data.username.charAt(0).toUpperCase(), 'white', avatarColor)
      const result = await authService.register({
        username: data.username,
        email: data.email,
        password: data.password,
        avatarColor: avatarColor,
        avatarImage
      })

      console.log(result)
    } catch (err) {
      console.log(err)
    }
  })
  return (
    <form className='w-full' onSubmit={whenSubmit}>
      <div className='flex gap-2'>
        <Input
          className='w-2/4'
          errorMessage={errors.email?.message}
          name='email'
          register={register}
          labelText='email'
          firstIcon={
            <p className='p-1'>
              <User width='31' height='28' />
            </p>
          }
          styleInput='border w-full bg-yellow-10 px-16 rounded-md shadow-1'
          placeholder='Enter Email or username'
          type='text'
        />
        <Input
          className='w-2/4'
          errorMessage={errors.username?.message}
          name='username'
          register={register}
          labelText='username'
          firstIcon={<EmailSvg width='36' height='34' />}
          styleInput='border w-full bg-yellow-10 px-16 rounded-md shadow-1'
          placeholder='Enter Email or username'
          type='text'
        />
      </div>
      <div className='flex gap-2'>
        <Input
          errorMessage={errors.password?.message}
          register={register}
          className='w-2/4'
          name='password'
          labelText='password'
          firstIcon={<Lock width='36' height='34' />}
          styleInput='border w-full bg-yellow-10 px-16  rounded-md shadow-1'
          placeholder='Enter your password'
          type='password'
        />
        <Input
          errorMessage={errors.confirm?.message}
          register={register}
          name='confirm'
          className='w-2/4'
          labelText='confirm password'
          firstIcon={<Lock width='36' height='34' />}
          styleInput='border w-full bg-yellow-10 px-16  rounded-md shadow-1'
          placeholder='Enter confirm password'
          type='password'
        />
      </div>
      <button className='border-none block mx-auto font-bold text-white px-20 rounded-md py-3 my-10 style-bg-main'>
        Register
      </button>
    </form>
  )
}

export default withBaseComponent(Register)
