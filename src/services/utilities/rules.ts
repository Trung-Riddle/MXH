import * as Yup from 'yup'

export const registerSchema = Yup.object({
  email: Yup.string()
    .required('Vui lòng nhập email')
    .email('Email không đúng định dạng')
    .min(10, 'Email tối thiểu 10 kí tự')
    .max(30, 'Email không vượt quá 30 kí tự'),
  password: Yup.string()
    .required('Vui lòng nhập password')
    .min(6, 'Password tối thiểu là 6 kí tự')
    .max(15, 'Password không quá 15 kí tự'),
  username: Yup.string()
    .required('Vui lòng nhập username')
    .min(6, 'username tối thiểu 6 kí tự')
    .max(10, 'username không quá 10 kí tự'),
  confirm: Yup.string()
    .required('Vui lòng nhập lại password')
    .min(6, 'Password tối thiểu là 6 kí tự')
    .max(15, 'Password không quá 15 kí tự')
    .oneOf([Yup.ref('password')], 'password nhập lại như cc')
})

const emailSchema = Yup.string().required('Vui lòng nhập email').email('Email không đúng định dạng')
const usernameSchema = Yup.string().required('Vui lòng nhập username').max(6, 'Invliad username')

export const loginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required('Please enter email or username')
    .when({
      is: (value: any) => {
        console.log(value)
        return value && value.includes('@')
      },
      then: () => {
        console.log('email')
        return emailSchema
      },
      otherwise: () => {
        console.log('user')
        return usernameSchema
      }
    }),
  password: Yup.string().required('Password is required')
})

export type RegisterSchema = Yup.InferType<typeof registerSchema>
export type LoginSchema = Yup.InferType<typeof loginSchema>
