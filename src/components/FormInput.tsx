interface Props {
    register:any;
    name:string,
    placeHolder?:string
    inputType?:'text'|'file'|'email'|'number'|'date'; 
  }

const FormInput = ({register,name,placeHolder,inputType='text'}:Props) => {
  return (
    <input type={inputType} className='form-control' name={name} placeholder={placeHolder} {...register(`${name}`,{ required: true })} />
  )
}

export default FormInput