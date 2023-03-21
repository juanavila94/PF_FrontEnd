const Employee = (props) => {
  return (
    <div className="  bg-white rounded-xl h-20  border z-0 hover:z-10 hover:shadow-2xl hover:-translate-y-1 transition duration-100 overflow-hidden relative">
      <span className="text-slate-300 absolute left-36 bottom-2 text-xs text-start font-medium ">
        {props.role}
      </span>
      <div className="flex justify-between items-center h-20">
        <img
          className="object-cover h-20"
          src="https://www.mundopsicologos.com/site/article/63318/53291/7-senales-de-que-eres-una-persona-demasiado-complaciente-por-que-es-negativo-0_ai1.jpg"
          alt=""
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 ssm:grid-cols-1 items-center justify-start  w-full p-6 text-start auto-cols-min">
          <div className=" text-start">
            <div className="flex flex-col">
              <p className="text-xl font-bold ">
                {`${props.name} ${props.lastName}`}
              </p>
            </div>
          </div>
          <span className="text-black text-base font-medium sm:inline ssm:hidden">
            {props.email || "faltaemail@gmail.com"}
          </span>
          <span className="lg:inline md:inline ssm:hidden text-black text-base font-medium ">
            {props.area}
          </span>
          <span className="lg:inline ssm:hidden text-black text-base font-medium ">
            {props.position}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Employee;
