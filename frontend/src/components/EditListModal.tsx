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
function EditListModal({children, id}) {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const { setLists, lists } = useContext(AppContext)
  const {register, handleSubmit} =
    useForm<MyForm>({defaultValues: {name: lists.find((list: ListType) => list.id === id).name}})

  function getPrevListName() {
    const list = lists.find((list: ListType) => list.id === id)
    return list.name
  }

  const submit: SubmitHandler<MyForm> = data => {
    console.log(data)
    setLists((prev: ListType[]) => prev.map(list => list.id === id ?
      {...list, name: data.name} : list))
  }

  return (
    <>
      <button className="icon" onClick={() => setShowOptions(!showOptions)}>
        {children}
      </button>
      <div className="edit-list-modal">
        <div className={`edit-list-modal__content ${showOptions ? 'active' : ''}`}>
          <h2>Create new list</h2>
          <form onSubmit={handleSubmit(submit)}>
            <label>Name of new list:</label>
            <input autoComplete="off"  placeholder='list name' type="text" {...register('name', { required: true })} />
            <button>Edit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditListModal;
