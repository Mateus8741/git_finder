import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import { ApiReposTypes } from '../api/apiTypes'
import { Button } from './Button'

interface ProjectsProps {
  data: ApiReposTypes
}

export function Projects() {
  return (
    <View className="flex-row justify-between items-center w-full h-auto bg-gray-200 rounded-lg p-3">
      <View>
        <Text className="font-medium text-sm text-secondary-300 mb-1">
          Curso React Native
        </Text>

        <View className="flex-row gap-x-2 items-center mb-2">
          <Fontisto name="code" size={12} color="#A3A3A3" />
          <Text className="font-medium text-sm text-secondary-100">
            Projects
          </Text>
        </View>

        <View className="flex-row gap-x-2 items-center">
          <View className="flex-row border-2 p-1 rounded-md items-center border-primary-500 bg-primary-100">
            <MaterialCommunityIcons
              name="star-outline"
              size={18}
              color="#00B04C"
            />

            <Text className="font-regular text-xs ml-1 text-primary-500">
              294
            </Text>
          </View>

          <View className="flex-row border-2 p-1 rounded-md items-center border-primary-500 bg-primary-100">
            <MaterialCommunityIcons
              name="share-variant-outline"
              size={18}
              color="#00B04C"
            />

            <Text className="font-regular text-xs ml-1 text-primary-500">
              111
            </Text>
          </View>
        </View>
      </View>

      <Button title="Ver código" />
    </View>
  )
}
