import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsX } from 'react-icons/bs';
import { v4 as uuid } from 'uuid';

import Button from '@/common/components/elements/Button';
import IconButton from '@/common/components/elements/IconButton';
import RadioInput from '@/common/components/elements/RadioInput';
import { ITask } from '@/common/types/board';

import { useTaskBoard } from '@/context/board';

interface ITaskCardProps {
  columnId: string;
  defaultValue?: ITask;
  closeTaskForm(): void;
}

export default function TaskForm({ columnId, defaultValue, closeTaskForm }: ITaskCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, defaultValues }
  } = useForm<ITask>({ defaultValues: defaultValue });
  const { addTask, updateTask, deleteTask } = useTaskBoard();
  const isCreated = !defaultValues?.task;

  function handleFormSubmit(payload: ITask) {
    const data: ITask = isCreated ? { ...payload, id: uuid() } : { ...defaultValues, ...payload };
    isCreated ? addTask({ columnId, data }) : updateTask({ columnId, taskId: defaultValues?.id ?? '', data });
    closeTaskForm();
  }

  function handleDeleteTask() {
    deleteTask({ columnId, taskId: defaultValues?.id ?? '' });
  }

  return (
    <motion.form
      key="collapse"
      initial={{ height: 0 }}
      animate={{ height: 'max-content' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mb-4 text-xs flex flex-col shadow-[rgba(13,_38,_76,_0.15)_0px_7px_10px] rounded-xl text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800"
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
          className={`text-sm w-full p-2 rounded-sm border-none outline-none ${
            errors.task?.type === 'required' && 'outline-red-400 border'
          } text-md mb-2 bg-transparent`}
          {...register('task', { required: true })}
        />

        <div className="font-medium">Task type</div>
        {errors.type?.type === 'required' && (
          <p role="alert" className="text-red-400 text-[10px]">
            Task type is required
          </p>
        )}
        <div className="flex space-x-1 justify-between pb-2">
          {['bug', 'feature', 'refactor'].map(type => (
            <RadioInput key={type} id={type} name="type" rule={{ required: true }} register={register} />
          ))}
        </div>
        <div className="flex justify-end space-x-2">
          {!isCreated && (
            <Button theme="text" type="reset" onClick={handleDeleteTask}>
              Delete
            </Button>
          )}
          <Button theme="filled" type="submit">
            Save
          </Button>
        </div>
      </motion.div>
    </motion.form>
  );
}
