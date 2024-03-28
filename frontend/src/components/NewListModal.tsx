import React, { useContext, useState } from 'react';
import '../UIComponentsStyle.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { AppContext } from './Context';
import { ListType } from '../data/lists';
import {v4 as uuidv4} from 'uuid';
interface MyForm {
  name: string;
}

// @ts-ignore
function NewListModal({children}) {
  const [showOptions, setShowOptions] = useState(false);
  const { setLists, lists} = useContext(AppContext)
  const {register, handleSubmit} =
    useForm<MyForm>({defaultValues: {}})

  const createList: SubmitHandler<MyForm> = data => {
    const listWithSameName = lists.find((list: ListType) => list.name === data.name)
    if(!listWithSameName) {
      setLists((prev: ListType[]) => ([...prev, {...data, id: uuidv4()}]))
    }
  }


  return (
    <div>
      <button onClick={() => setShowOptions(!showOptions)}>
        {children}
      </button>
      <div className="new-list-modal">

        <div className={`new-list-modal__content ${showOptions ? 'active' : ''}`}>
          <h2>Create new list</h2>
          <form onSubmit={handleSubmit(createList)}>
            <label>Name of new list:</label>
            <input autoComplete="off"  placeholder='list name' type="text" {...register('name')}  />
            <button><span>Create</span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewListModal;
