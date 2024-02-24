'use client'

import React from 'react'

import { Compass, LayoutDashboard } from 'lucide-react'
import { SidebarLink } from './sidebar-link'
const guestRoutes = [
  {
    href: '/',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },

  {
    href: '/search',
    label: 'Busca',
    icon: Compass,
  },
]
export const SidebarNav = () => {
  const routes = guestRoutes
  return (
    <div className="flex w-full flex-col">
      {routes.map((route) => (
        <SidebarLink
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}
