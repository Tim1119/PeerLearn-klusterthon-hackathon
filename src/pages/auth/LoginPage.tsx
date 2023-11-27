import logo from "../../assets/logo.svg";




const LoginPage = () => {

  // const { notifyUser } = Toast();
 
   
 

  return (
    <section className="font-poppins bg-green h-screen w-full grid place-items-center">
    <div className="shadow-md border  w-[90%] max-w-md 2xl:max-w-xl mx-5 h-fit rounded-md" >
      <form action=""  className="grid p-7 place-items-center gap-6 " >
        <div className='flex flex-col text-center font-light' >
          <img src={logo} className='h-[40px] object-fit' alt="" />
          <h5 className='font-medium my-0 text-xl ' >Login to your account</h5>
          <h6 className='sm:inline-flex' >Signing up is easy. It only takes a few steps</h6>
        </div>         
        <div className='w-full gap-3 grid' >
       
       
        <input type="text" className="form-control" placeholder="Email Address" name="" id="id_email" />
      
        <input type="text" className="form-control" placeholder="Password" name="" id="id_password" />
        </div>
        <button className="button w-full bg-[#4b49ac] py-2 rounded-md text-white font-normal text-base" >Login</button>
        
      </form>
     
   
    </div>
  </section>
  );
};

export default LoginPage;
