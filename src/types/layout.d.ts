import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"

export type SideNav = {
  name: string,
  icon: string,
  link: string,
  active: boolean,
}

export type SideNavs = SideNav[]

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}