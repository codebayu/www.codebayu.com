import React from 'react'
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

type RadioInputProps<TFormValue extends FieldValues> = {
  register: UseFormRegister<TFormValue>
  name: Path<TFormValue>
  error: FieldErrors
  rule?: RegisterOptions
  isTextArea?: boolean
}

export default function InputField<TFormValue extends FieldValues>({
  name,
  rule,
  error,
  isTextArea = false,
  register
}: RadioInputProps<TFormValue>) {
  return (
    <div className=" w-full space-y-2">
      {isTextArea ? (
        <textarea
          placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
          {...register(name, rule)}
          className="bg-neutral-50 dark:bg-neutral-900 dark:outline-neutral-700 w-full rounded-lg p-2 outline outline-neutral-300 focus:outline-neutral-400"
        />
      ) : (
        <input
          placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
          {...register(name, rule)}
          className="bg-neutral-50 dark:bg-neutral-900 dark:outline-neutral-700 w-full rounded-lg p-2 outline outline-neutral-300 focus:outline-neutral-400"
        />
      )}
      {error[name]?.type === 'required' && (
        <p role="alert" className="text-red-400 text-[10px]">
          *{name} is required
        </p>
      )}
    </div>
  )
}
