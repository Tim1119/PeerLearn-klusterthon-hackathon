import { useState } from "react";
import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import FormInput from "../../components/FormInput";
import Progressbar from "../../components/Progressbar";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export type RegistrationFormFields = {
  name: string;
  country: string;
  // sex: string;
  // email: string;
  // password: string;
  // department: string;
};

const RegistrationPage = () => {
  const [formStep, setFormStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormFields>();

  const onSubmit = (data:RegistrationFormFields) => {
    console.log('Selected Country:', data.country);
    // You can update state or perform any other actions with the selected country here
  };

  return (
    <section className="font-poppins bg-green h-screen w-full grid place-items-center ">
      <div className="shadow-md p-5  w-[90%] max-w-md 2xl:max-w-xl mx-5 h-[80%]  rounded-md flex flex-col ">
        <section className="flex-[0.1] flex flex-col  gap-y-2">
          <div className="flex items-center gap-x-4 justify-between">
            <ChevronLeftIcon className="text-[#ede8e8] w-8 h-8" />
            <Progressbar percentCompleted={"40%"} />
          </div>
        </section>

        <form action="" className="flex flex-col flex-1" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-medium text-xl text-center">
            Tell us a bit about yourself
          </h3>

          <section className="flex flex-col flex-1 place-items-center ">
              {formStep === 0 && (
               <>
     
               <div className='w-full grid place-items-center  flex-1' >
                 
                <div className="h-fit flex flex-1 flex-col gap-y-3 w-full">
                  
                      <label htmlFor="name" className="font-medium ">
                        Full Name
                      </label>
                      <FormInput
                        register={register}
                        name="name"
                        placeHolder="Your name"
                      />
                  
                </div>
               </div>
                 <button className="button w-full bg-black py-2 rounded-md text-white font-normal text-base">
                 Next
                </button>    
               </>
              )}
              {formStep === 1 && (
               <>
     
               <div className='w-full grid place-items-center  flex-1' >
                 
                <div className="h-fit flex flex-1 flex-col gap-y-3 w-full">

                <button className='border p-2 capitalize' type="button" {...register('country', { value: 'Nigeria' })}>
          Nigeria
        </button>
        <button className='border p-2 capitalize' type="button" {...register('country', { value: 'Ghana' })}>
          Ghana
        </button>
                  
                      
                </div>
               </div>
                 <button type='submit' className="button w-full bg-black py-2 rounded-md text-white font-normal text-base">
                 Next
                </button>    
               </>
              )}
          </section>
        </form>
      </div>
    </section>
  );
};

export default RegistrationPage;
