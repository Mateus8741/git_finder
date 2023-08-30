import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

type InputProps = TextInputProps

export function Input({ ...props }: InputProps) {
  return (
    <TextInput
      className="bg-white w-[291px] placeholder-secondary-100 p-3 mr-1 rounded-l-md"
      placeholder="Busque um perfil"
      {...props}
    />
  )
}
