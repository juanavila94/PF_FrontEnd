import { Link } from "react-router-dom";
import {useRef} from 'react'

const Employee = (props) => {
  const handleCheck = (e) => {
    const { checked } = e.target;

    props.catchEmails(props.email, checked);
  };

  const refDivCheck = useRef();

  // emailsUnselect

  // refDivCheck.current.style.display = 'none'

  return (
    <div className=" bg-white rounded-xl h-20  border z-0 hover:z-10 hover:shadow-2xl hover:shadow-sky-200 hover:-translate-y-1 transition duration-100 overflow-hidden relative">
      <div
        ref={refDivCheck}
        className={`${props.emailsUnselect ? 'inline-block' : 'hidden'} absolute h-full w-full bg-transparent`}
      >
        <input
          className="absolute right-10 top-10"
          type="checkbox"
          name=""
          id=""
          onChange={handleCheck}
        />
      </div>
      <Link to={`/employee/${props.id}`}>
        <span className="text-slate-300 absolute right-3 top-2 text-xs text-start font-medium ">
          {props.role}
        </span>
        <div className="flex justify-between items-center h-20">
          <img
            className="object-cover mr-2 w-28 h-20"
            src={props.image}
            alt=""
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ssm:grid-cols-1 items-center justify-start  w-full p-6 text-start auto-cols-min">
            <div className=" text-start">
              <div className="flex flex-col">
                <p className="text-xl font-bold break-al">
                  {`${props.name} ${props.lastName}`}
                </p>
              </div>
            </div>
            <span className="text-black text-base font-medium sm:inline ssm:hidden">
              {props.email}
            </span>
            <span className="lg:inline md:inline ssm:hidden text-black text-base font-medium ">
              {props.area}
            </span>
            <span className="lg:inline ssm:hidden text-black text-base font-medium ">
              {props.position}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Employee;
