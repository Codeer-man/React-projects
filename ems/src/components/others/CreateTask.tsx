export default function CreateTask() {
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form
          action=""
          className="flex items-start justify-between w-full  flex-wrap"
        >
          <div className="w-1/2 space-y-4">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.50">Task title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Make a us design"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.50">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.50">Asign to</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.50">cateogry</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="design,dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-gray-300 border-[1px]"
              name=""
              id=""
            ></textarea>
            <button className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-fulls">
              create task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
