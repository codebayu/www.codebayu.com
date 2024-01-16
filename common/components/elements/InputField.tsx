import React from 'react'
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

type RadioInputProps<TFormValue extends FieldValues> = {
  register: UseFormRegister<TFormValue>
  name: Path<TFormValue>
  error: FieldErrors
  rule?: RegisterOptions
  isTextArea?: boolean
  placeholder?: string
  rows?: number
}

export default function InputField<TFormValue extends FieldValues>({
  name,
  rule,
  error,
  isTextArea = false,
  placeholder = '',
  rows = 2,
  register
}: RadioInputProps<TFormValue>) {
  const renderPlaceholder = placeholder || name.charAt(0).toUpperCase() + name.slice(1)
  return (
    <div className=" w-full space-y-2">
      {isTextArea ? (
        <textarea
          rows={rows}
          placeholder={renderPlaceholder}
          {...register(name, rule)}
          className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
        />
      ) : (
        <input
          placeholder={renderPlaceholder}
          {...register(name, rule)}
          className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
        />
      )}
      {error[name]?.type === 'required' && (
        <p role="alert" className="text-[10px] text-red-400">
          *{name} is required
        </p>
      )}
      {error[name]?.type === 'pattern' && (
        <p role="alert" className="text-[10px] text-red-400">
          *{String(error[name]?.message)}
        </p>
      )}
    </div>
  )
}
