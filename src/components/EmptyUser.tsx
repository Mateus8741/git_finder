import React from 'react'
import { Text, View } from 'react-native'

export function EmptyUser() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-semiBold text-secondary-200 text-xl mb-5">
        Digite um usuário para pesquisar
      </Text>
      <Text>🤓</Text>
    </View>
  )
}
