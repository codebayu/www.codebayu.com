import React from 'react'
import { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

type RadioInputProps<TFormValue extends FieldValues> = {
  register: UseFormRegister<TFormValue>
  name: Path<TFormValue>
  id: string
  rule?: RegisterOptions
}

export default function RadioInput<TFormValue extends FieldValues>({
  name,
  rule,
  id,
  register
}: RadioInputProps<TFormValue>) {
  return (
    <div className="flex space-x-1">
      <input {...register(name, rule)} type="radio" id={id} value={id} className="accent-slate-700" />
      <label htmlFor={id} className="capitalize">
        {id}
      </label>
    </div>
  )
}
