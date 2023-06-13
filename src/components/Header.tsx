interface Props {
  logo?: string
  list1?: string
  list2?: string
  list3?: string
  button1?: string
  button2?: string
}

const Header = ({
  logo = "Your Logo",
  list1 = "List 1",
  list2 = "List 2",
  list3 = "List 3",
  button1 = "Button 1",
  button2 = "Button 2",
}: Props) => {
  return (
    <header className="flex items-center justify-between bg-indigo-900 pl-20 pr-20">
      <figure>
        <h1 className="font-bold uppercase leading-7 tracking-widest text-[#DCF10D]">
          {logo}
        </h1>
      </figure>
      <div>
        <div className="flex items-center gap-10">
          <nav className="font-semibold leading-6 text-white">
            <ul className="flex gap-x-7">
              <li>
                <a className="hover:text-[#DCF10D] hover:underline" href="#">
                  {list1}
                </a>
              </li>
              <li>
                <a className="hover:text-[#DCF10D] hover:underline" href="#">
                  {list2}
                </a>
              </li>
              <li>
                <a className="hover:text-[#DCF10D] hover:underline" href="#">
                  {list3}
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex h-auto gap-5">
            <button className="rounded-full border border-gray-300 px-4 py-3 font-semibold text-gray-300 hover:border-blue-500 hover:text-blue-500 active:bg-blue-500 active:text-white">
              {button1}
            </button>
            <button className="rounded-full border border-gray-300 px-4 py-3 font-semibold text-gray-300 hover:border-blue-500 hover:text-blue-500 active:bg-blue-500 active:text-white">
              {button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
