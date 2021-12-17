//   import { ToastContainer, toast } from 'react-toastify';

// function notification() {



//     return (
//         <div className="min-h-screen bg-red-200">
//             <div className="flex items-center justify-start p-6 rounded-md">
//                 <button onClick={()=> toast.success('Added To Cart')} className="btn">CLick Get The notificaion</button>

//             </div>
//                   <ToastContainer autoClose={2500} />
//         </div>
//     )
// }

// export default notification


  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Text from '../components/motion/Text';
  
  function notification(){
    const notify = () => toast.success("Hey faysal this is so easy");

    return (
      <div className="bg-red-100 min-h-screen">
        <button className="btn"onClick={notify}>Click And Get a message</button>
        <ToastContainer position='bottom-left' />


        <Text />
        <Text />
        <Text />
        <Text />
        <Text />

      </div>
    );
  }

  export default notification