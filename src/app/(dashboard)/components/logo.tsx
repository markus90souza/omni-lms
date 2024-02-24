import Image from 'next/image'
import React from 'react'

export const Logo = () => {
  return <Image width={130} height={130} alt="log" src={'/logo.svg'} />
}
