import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { ApiTypes } from '../api/apiTypes'

interface HeaderProfileProps {
  data: ApiTypes | undefined
}

export function HeaderProfile({ data }: HeaderProfileProps) {
  return (
    <View className="flex-row item-center justify-between">
      <View className="flex-col items-center justify-center">
        <View className="w-[70px] h-[70px] mb-3 bg-secondary-50 rounded-full border-2 border-primary-500 overflow-hidden">
          <Image
            alt="Foto de perfil"
            source={{
              uri: data?.avatar_url,
            }}
            className="w-full h-full rounded-full"
          />
        </View>

        <View className="item-center justify-center">
          <Text className="text-secondary-300 font-medium text-base self-center">
            {data?.login}
          </Text>

          <View className="flex-row mt-1 items-center">
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={16}
              color="#00B04C"
            />
            <Text className="text-primary-500 font-regular text-xs ml-1">
              {data?.location}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row items-start justify-center gap-x-3">
        <View className="flex-col items-center justify-center">
          <Text className="text-secondary-300 font-medium text-base self-center">
            Projetos
          </Text>
          <Text className="text-primary-500 font-regular text-sm self-center">
            {data?.public_repos}
          </Text>
        </View>

        <View className="flex-col items-center justify-center">
          <Text className="text-secondary-300 font-medium text-base self-center">
            Seguidores
          </Text>
          <Text className="text-primary-500 font-regular text-sm self-center">
            {data?.followers}
          </Text>
        </View>

        <View className="flex-col items-center justify-center">
          <Text className="text-secondary-300 font-medium text-base self-center">
            Seguindo
          </Text>
          <Text className="text-primary-500 font-regular text-sm self-center">
            {data?.following}
          </Text>
        </View>
      </View>
    </View>
  )
}
