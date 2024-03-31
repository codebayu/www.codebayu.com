import IconButton from '@/components/elements/IconButton'
import RadioInput from '@/components/elements/RadioInput'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { BsX } from 'react-icons/bs'
import { v4 as uuid } from 'uuid'

import { ITask } from '@/common/types/board'

import { useTaskBoard } from '@/stores/board'

interface ITaskCardProps {
  columnId: string
  defaultValue?: ITask
  closeTaskForm(): void
}

export default function TaskForm({ columnId, defaultValue, closeTaskForm }: ITaskCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues }
  } = useForm<ITask>({ defaultValues: defaultValue })
  const { addTask, updateTask, deleteTask } = useTaskBoard()
  const isCreated = !defaultValues?.task

  function handleFormSubmit(payload: ITask) {
    const data: ITask = isCreated ? { ...payload, id: uuid() } : { ...defaultValues, ...payload }
    isCreated ? addTask({ columnId, data }) : updateTask({ columnId, taskId: defaultValues?.id ?? '', data })
    closeTaskForm()
  }

  function handleDeleteTask() {
    deleteTask({ columnId, taskId: defaultValues?.id ?? '' })
  }

  return (
    <motion.form
      key="collapse"
      initial={{ height: 0 }}
      animate={{ height: 'max-content' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mb-4 flex flex-col rounded-xl bg-white text-xs text-neutral-600 shadow-[rgba(13,_38,_76,_0.15)_0px_7px_10px] dark:bg-neutral-800 dark:text-neutral-400"
    >
      {!isCreated && <IconButton icon={<BsX size={24} />} onClick={closeTaskForm} />}
      <motion.div
        key="collapse-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className={`flex flex-col p-4 ${!isCreated && 'pt-0'} space-y-2`}
      >
        <textarea
          placeholder="What are you working on?"
          className={`w-full rounded-sm border-none p-2 text-sm outline-none ${
            errors.task?.type === 'required' && 'border outline-red-400'
          } text-md mb-2 bg-transparent`}
          {...register('task', { required: true })}
        />

        <div className="font-medium">Task type</div>
        {errors.type?.type === 'required' && (
          <p role="alert" className="text-[10px] text-red-400">
            Task type is required
          </p>
        )}
        <div className="flex justify-between space-x-1 pb-2">
          {['bug', 'feature', 'refactor'].map(type => (
            <RadioInput key={type} id={type} name="type" rule={{ required: true }} register={register} />
          ))}
        </div>

        <div className="font-medium">Priority</div>
        {errors.priority?.type === 'required' && (
          <p role="alert" className="text-[10px] text-red-400">
            Priority type is required
          </p>
        )}
        <div className="flex justify-between space-x-1 pb-2">
          {['low', 'medium', 'high'].map(type => (
            <RadioInput key={type} id={type} name="priority" rule={{ required: true }} register={register} />
          ))}
        </div>

        <div className="flex justify-end space-x-2">
          {!isCreated && (
            <Button size="sm" type="reset" variant="secondary" onClick={handleDeleteTask}>
              Delete
            </Button>
          )}
          <Button size="sm" type="submit">
            Save
          </Button>
        </div>
      </motion.div>
    </motion.form>
  )
}
