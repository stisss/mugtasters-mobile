import { ReactNode } from "react"
import { GestureResponderEvent, Text, StyleSheet } from "react-native"
import { theme } from "@styles"

interface TouchableTextProps {
  children: ReactNode | string
  onPress?: (event: GestureResponderEvent) => void
}

export const TouchableText: React.FC<TouchableTextProps> = ({
  children,
  onPress,
}) => {
  return (
    <Text onPress={onPress} suppressHighlighting style={styles.touchableText}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  touchableText: {
    color: theme.colors.secondary,
    fontWeight: "bold",
  },
})
