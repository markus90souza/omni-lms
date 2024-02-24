'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { FC } from 'react'

type SidebarLinkProps = {
  icon: LucideIcon
  label: string
  href: string
}

export const SidebarLink: FC<SidebarLinkProps> = ({
  icon: Icon,
  href,
  label,
}) => {
  const pathname = usePathname()
  const router = useRouter()

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname.startsWith(`${href}/`)

  const handleClick = () => {
    router.push(href)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'flex items-center gap-x-2 pl-6 text-sm font-[500] text-slate-500 transition-all hover:bg-slate-300/20 hover:text-slate-600',
        isActive &&
          'bg-sky-200/20 text-sky-700 hover:bg-sky-200/20 hover:text-sky-700',
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={24}
          className={cn('text-slate-500', isActive && 'text-sky-500')}
        />
      </div>
      {label}

      <div
        className={cn(
          'ml-auto h-full border-2 border-sky-700 opacity-0',
          isActive && 'opacity-100',
        )}
      />
    </button>
  )
}
