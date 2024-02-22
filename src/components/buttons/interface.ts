export interface ButtonInterfaceProps
  extends Partial<React.DOMAttributes<any>> {
  type: 'button' | 'submit' | 'reset'
  children: React.ReactNode
  disabled?: boolean
  isError?: boolean
  className?: string
}
