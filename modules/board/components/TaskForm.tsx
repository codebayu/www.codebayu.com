import { motion } from 'framer-motion';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BsX } from 'react-icons/bs';
import { v4 as uuid } from 'uuid';

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

  return (
    <motion.form
      key="collapse"
      initial={{ height: 0 }}
      animate={{ height: '100%' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit(handleFormSubmit)}
      className="mb-4 text-xs flex flex-col shadow-[rgba(13,_38,_76,_0.15)_0px_7px_10px] rounded-xl text-neutral-600 dark:text-neutral-400 bg-white dark:bg-neutral-800"
    >
      {!isCreated && (
        <button
          aria-label="close"
          type="reset"
          className="self-end m-1 p-1 rounded-md dark:hover:bg-neutral-900 hover:bg-neutral-100"
          onClick={closeTaskForm}
        >
          <BsX size={24} />
        </button>
      )}
      <motion.div
        key="collapse-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
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
          <div className="flex space-x-1">
            <input
              {...register('type', { required: true })}
              type="radio"
              value="feature"
              id="feature"
              className="accent-slate-700"
            />
            <label htmlFor="feature">Feature</label>
          </div>
          <div className="flex space-x-1">
            <input
              {...register('type', { required: true })}
              type="radio"
              value="refactor"
              id="refactor"
              className="accent-slate-700"
            />
            <label htmlFor="refactor">Refactor</label>
          </div>
          <div className="flex space-x-1">
            <input
              {...register('type', { required: true })}
              type="radio"
              value="bug"
              id="bug"
              className="accent-slate-700"
            />
            <label htmlFor="bug">Bug</label>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          {!isCreated && (
            <button
              type="reset"
              className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-800 w-max text-neutral-800 px-3 py-1 rounded"
              onClick={() => deleteTask({ columnId, taskId: defaultValues?.id ?? '' })}
            >
              Delete
            </button>
          )}
          <button
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-800 w-max dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-200 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.form>
  );
}
