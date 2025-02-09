export interface FormData {
  company?: string
  email: string
  message: string
  name: string
  phone: string
}

export interface Link {
  classes?: string
  to: string
}

export interface Scroller {
  items: ScrollerItem[]
}

export interface ScrollerItem {
  icon: string
  label: string
  prefix: string
}
