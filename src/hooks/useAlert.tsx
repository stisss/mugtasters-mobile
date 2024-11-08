import { useCallback } from "react"
import { Alert } from "react-native"

type TriggerAlert = (props: {
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm: () => void
  onCancel: () => void
}) => void

type UseAlert = () => {
  triggerAlert: TriggerAlert
}

export const useAlert: UseAlert = () => {
  const triggerAlert: TriggerAlert = useCallback(
    ({
      message,
      onCancel,
      onConfirm,
      title,
      cancelLabel = "Cancel",
      confirmLabel = "Confirm",
    }) => {
      Alert.alert(title, message, [
        {
          text: cancelLabel,
          onPress: onCancel,
          style: "cancel",
        },
        { text: confirmLabel, onPress: onConfirm },
      ])
    },
    []
  )
  return {
    triggerAlert,
  }
}
