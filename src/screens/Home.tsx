import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { ApiTypes } from '../api/apiTypes'
import Logo from '../assets/Logo.svg'
import { Button } from '../components/Button'
import { EmptyUser } from '../components/EmptyUser'
import { HeaderProfile } from '../components/HeaderProfile'
import { Input } from '../components/Input'
import { Projects } from '../components/Projects'
import { useAppSafeArea } from '../hooks/useAppSafeArea'
import { useFetchApi } from '../hooks/useFetchApi'

export function Home() {
  const { top } = useAppSafeArea()

  const [endPoint, setEndPoint] = useState<string>('')

  const { data, Error, loading, request } = useFetchApi<ApiTypes>(endPoint)

  return (
    <View
      className="flex-1 items-center bg-background"
      style={{ paddingTop: top }}
    >
      <Logo width={44} height={44} style={{ marginBottom: 20 }} />

      <View className="flex-row mb-8">
        <Input onChangeText={(text) => setEndPoint(text)} value={endPoint} />
        <Button icon onPress={request} isLoading={loading} />
      </View>

      <View className="flex-1 w-full bg-white rounded-t-2xl p-5">
        {data ? (
          Error ? (
            <Text className="text-red-500">Nome de usuário inválido</Text>
          ) : (
            <>
              <Text className="font-semiBold text-secondary-200 text-xl mb-5">
                Perfil encontrado
              </Text>

              <HeaderProfile data={data as unknown as ApiTypes} />

              <View className="w-full h-[1px] bg-secondary-100 my-6" />

              <Projects />
            </>
          )
        ) : (
          <EmptyUser />
        )}
      </View>
    </View>
  )
}
