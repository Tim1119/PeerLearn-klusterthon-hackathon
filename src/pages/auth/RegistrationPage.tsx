import { useState } from "react";
import logo from "../../assets/logo.svg";
// import { useForm } from "react-hook-form";


interface FormValues {
  name: string;
  email: string;
  password: string;
  country: string;
  sex: string;
}

const RegistrationPage = () => {
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    country: '',
    sex:'',
  });

  const countries= [
    {value:"Nigeria",label:"Nigeria"},
    {value:"Ghana",label:"Ghana"},
  ]
  const sexes = [
    {value:"Male",label:"Male"},
    {value:"Female",label:"Female"},
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


 

  return (
    <section className="font-poppins bg-green h-screen w-full grid place-items-center">
      <div className="shadow-md border  w-[90%] max-w-md 2xl:max-w-xl mx-5 h-fit rounded-md" >
        <form action=""  className="grid p-7 place-items-center gap-6 " >
          <div className='flex flex-col text-center font-light' >
            <img src={logo} className='h-[40px] object-fit' alt="" />
            <h5 className='font-medium my-0 text-xl ' >Signup for an Account</h5>
            <h6 className='sm:inline-flex' >Signing up is easy. It only takes a few steps</h6>
          </div>         
          <div className='w-full gap-3 grid' >
         
         
          <input type="text" className="form-control" placeholder="Full Name" name="" id="id_name" required />
          <input type="email" className="form-control" placeholder="Email Address" name="" id="id_email" required />
          <input type="password" className="form-control" placeholder="Password" name="" id="id_password" required/>
         
        <select name="country" className='form-control text-neutral-1' value={formData.country} onChange={handleChange}>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        <select name="sex" className='form-control text-neutral-1' value={formData.sex} onChange={handleChange}>
          {sexes.map((sex) => (
            <option key={sex.value} value={sex.value}>
              {sex.label}
            </option>
          ))}
        </select>
      
      <br />
                {/* Country dropdown */}
    
          </div>
          <button className="button w-full bg-[#4b49ac] py-2 rounded-md text-white font-normal text-base" >Signup</button>
          
        </form>
       
     
      </div>
    </section>
  );
};

export default RegistrationPage;
