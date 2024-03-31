import React, { useContext, useState } from 'react';
import '../../UIComponentsStyle.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppContext } from '../Context';
import { ListType } from '../../data/lists';
import {v4 as uuidv4} from 'uuid';
import { useOutside } from '../../hooks/useOutside';
interface MyForm {
  label: string;
}

function NewListModal({children}: any){
  const { setLists, lists} = useContext(AppContext)
  const {register, handleSubmit} =
    useForm<MyForm>({defaultValues: {}})
  const {ref, isShow, setIsShow} = useOutside(false)

  const createList: SubmitHandler<MyForm> = data => {
    const listWithSameName = lists.find((list: ListType) => list.label === data.label)
    if(!listWithSameName) {
      setLists((prev: ListType[]) => ([...prev, {...data, id: uuidv4()}]))
    }
  }


  return (
    <div>
      <button onClick={() => setIsShow(!isShow)}>
        {children}
      </button>
      <div className="new-list-modal">

        <div ref={ref} className={`new-list-modal__content ${isShow ? 'active' : ''}`}>
          <h2>Create new list</h2>
          <form onSubmit={handleSubmit(createList)}>
            <label>Name of new list:</label>
            <input autoComplete="off"  placeholder='list name' type="text" {...register('label')}  />
            <button><span>Create</span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewListModal;
