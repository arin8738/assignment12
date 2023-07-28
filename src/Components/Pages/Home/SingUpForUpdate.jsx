/* eslint-disable no-unused-vars */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import banner from "../../../assets/banner.jpg";

const SingUpForUpdate = () => {

    const notify = (name) => toast(`${name} thanks for sing up!`);

    const handleGetUpdate = event =>{
        event.preventDefault();
        const name = event.target.name.value; 
        const email = event.target.email.value; 
        if(email && name){
            notify(name);
            
            event.target.reset();
        }
    }
    

  return (
    <div className="relative h-[500px] rounded-bl-xl rounded-br-xl">
      <div className="w-full h-[500px]">
        <img src={banner} className="w-full h-full rounded-bl-xl rounded-br-xl" alt="" />
      </div>

      <div className="absolute top-[10%] left-[15%] right-[15%] md:top-8 md:left-28 md:w-1/3 h-full">
        <form onSubmit={handleGetUpdate}>
        <div className="card w-full  shadow-2xl bg-base-100 p-2 md:py-5 md:px-3">
          <div className="card-body">
            <h3 className="mb-4 text-xl md:text-3xl font-bold text-center">New Here</h3>
            <p className="mb-10 text-base text-neutral-500 md:text-lg text-center font-semibold">Sing up to stay updated</p>
            <div className="form-control">

              <input
              name="name"
              required
                type="text"
                placeholder="Name: "
                className="input input-bordered mb-3"
              />
            </div>
            <div className="form-control">

              <input
              required
              name="email"
                type="email"
                placeholder="Email: "
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit"
              value="Get update"
              className="btn bg-my-pink border-my-pink hover:bg-my-blue hover:border-my-blue"/>
            </div>
          </div>
        </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingUpForUpdate;
