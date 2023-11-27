interface Props{
    percentCompleted:string;
}

const Progressbar = ({percentCompleted}:Props) => {
  return (
    <div className="w-full bg-green-100  rounded-md border">
          <div
          className="bg-green-500 rounded-md p-0.5 text-center text-xs font-medium leading-none text-primary-100"
          style={{ width: percentCompleted }}
          >
          
          </div>
      </div>
  )
}

export default Progressbar