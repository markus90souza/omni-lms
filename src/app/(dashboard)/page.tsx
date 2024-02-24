import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <>
      <h2>home</h2>
      <UserButton afterSignOutUrl="/" />
    </>
  )
}
