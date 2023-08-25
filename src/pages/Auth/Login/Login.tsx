import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input, CheckBox } from 'src/components'
import { LoginSchema, loginSchema } from 'src/services/utilities/rules'
import EmailSvg from 'src/components/icons/Email'
import Lock from 'src/components/icons/Lock'
import { useState } from 'react'

export default function Login() {
  const [keepLoggedIn, setKeepLoggedIn] = useState(false)
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema)
  })
  const whenSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <form className='w-full px-5' onSubmit={whenSubmit}>
      <Input
        errorMessage={errors.username?.message}
        name='username'
        register={register}
        labelText='username or email'
        firstIcon={<EmailSvg width='36' height='34' />}
        styleInput='border w-full bg-yellow-10 px-16 rounded-md shadow-1'
        placeholder='Enter Email or username'
        type='text'
      />
      <Input
        errorMessage={errors.password?.message}
        register={register}
        name='password'
        labelText='password'
        firstIcon={<Lock width='36' height='34' />}
        styleInput='border w-full bg-yellow-10 px-16  rounded-md shadow-1'
        placeholder='Enter your password'
        type='password'
      />
      <CheckBox
        id='remember'
        value={keepLoggedIn}
        handleChange={() => setKeepLoggedIn(!keepLoggedIn)}
        name='remember'
        textCheck='remember me'
      />
      <button className='border-none block mx-auto font-bold text-white px-20 rounded-md py-3 my-10 style-bg-main'>
        Login
      </button>
    </form>
  )
}
