import React from 'react'

export default function ResponsiveTest() {
  return (
    <div className="flex justify-center items-center">
      <div className="navbar bg-base-300 rounded-box sm:w-2/3 flex flex-col sm:flex-row justify-evenly">
        {/* <div className="navbar bg-base-300 rounded-box sm:w-2/3 flex justify-evenly"> */}
        {/* <div className="flex-1 px-2 lg:flex-none"> */}
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        {/* </div> */}
        <div className="sm:flex justify-between">
          <div className="dropdown dropdown-end  sm:mt-4">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Dropdown
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-end  sm:mt-4">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              Dropdown
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>

        <a className="btn btn-ghost rounded-btn  sm:mt-4">Button</a>
      </div>
    </div>
  );
}

