interface Props{
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    isLoading?:boolean;
    text:string;
}

const Button = ({onClick,isLoading,text}:Props) => {
  return (
    <button onClick={onClick}>
    {isLoading ? (
     <div className="flex items-center justify-center">
       <div className="animate-spin outline-none h-5 w-5 border-t-2 border-blue-500 rounded-full mr-3"></div>
       Loading
     </div>
   ) : (
     text
   )}
 </button>
  )
}

export default Button