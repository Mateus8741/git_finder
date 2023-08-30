import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

type ButtonProps = TouchableOpacityProps & {
  icon?: boolean
  title?: string
  isLoading?: boolean
}

export function Button({ icon, title, isLoading, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      className={`h-12 items-center justify-center p-3 bg-primary-500 ${
        icon ? 'rounded-r-md' : 'rounded-md'
      }`}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : icon ? (
        <MaterialCommunityIcons name="magnify" size={24} color="white" />
      ) : (
        <Text className="font-medium text-white">{title}</Text>
      )}
    </TouchableOpacity>
  )
}
