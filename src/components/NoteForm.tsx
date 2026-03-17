import { useState } from 'react'

export const NoteForm = () => {
  const [title, setTitle] = useState<string>('')
  const [priority, setPriority] = useState<string>('')

  return (
    <form>
      <div className="flex flex-col">
        <label className="font-bold" htmlFor="title">
          Title
        </label>
        <input
          className="border border-black rounded"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-bold" htmlFor="priority">
          Priority
        </label>
        {/* // TODO: finish this (make a select)  */}
        <input
          className="border border-black rounded"
          type="text"
          id="priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
      </div>
    </form>
  )
}
