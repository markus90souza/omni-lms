import { FC, ReactNode } from 'react'


type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex justify-center items-center h-full'>
      {children}
    </div>
  )
}


export default AuthLayout