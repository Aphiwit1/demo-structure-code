export interface ConfirmModalProps {
  onConfirm: () => void
  onCancel?: () => void
  message?: string | JSX.Element
  textCancelButton?: string
  textConfirmButton?: string
  classNameConfirmButton?: string
  classNameCancelButton?: string
  actionButtonRTL?: boolean
  disabledCancelButton?: boolean
  disabledConfirmButton?: boolean
  showIcon?: boolean
}
