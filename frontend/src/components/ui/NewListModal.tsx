import React, {  useState } from 'react';
import '../../UIComponentsStyle.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useOutside } from '../../hooks/useOutside';
import { IListResponse } from '../../types/list.types';
import { useCreateList } from '../../hooks/list/useCreateList';
import { useLists } from '../../hooks/list/useLists';
interface MyForm {
  label: string;
}

function NewListModal({children}: any){
  const {lists} = useLists()
  const {register, handleSubmit, reset} =
    useForm<MyForm>({defaultValues: {}})
  const {ref, isShow, setIsShow} = useOutside(false)

  const { createList } = useCreateList()
  const createNewList: SubmitHandler<MyForm> = data => {
    const listWithSameName = lists?.find((list: IListResponse) => list.label === data.label)
    if(!listWithSameName) {
      createList(data)
      reset()
      setIsShow(!isShow)
    }
  }

  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>
        {children}
      </button>
      <div className="new-list-modal">
        <div ref={ref} className={`new-list-modal__content ${isShow ? 'active' : ''}`}>
          <h3>Create new list</h3>
          <form onSubmit={handleSubmit(createNewList)}>
            <input autoComplete="off"  placeholder='' type="text" {...register('label')}  />
            <button><span>Create</span></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewListModal;
