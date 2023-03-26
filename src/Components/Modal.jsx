const Modal = (props) => {
        const {description,accuracy,features,integrations,image_link,input_output_examples,pricing} = props.modalinfo
    
    return (
        <>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal rounded-md">
            	    <div className="modal-box w-11/12 max-w-5xl grid grid-cols-2 gap-5 p-16">

                        <div className='border rounded-md p-5 border-red-900 bg-red-100'>
                            <h1 className='font-bold text-justify text-2xl'>{description}</h1>
                            <div className='grid gap-3 grid-cols-3 my-4 font-semibold'>
                                <div className='text-center p-2 bg-white text-sm rounded-md'>{pricing? pricing[0].plan:'Starter'} <br/>{pricing? pricing[0].price:'Free'}</div>
                                <div className='text-center p-2 bg-white text-sm rounded-md'>{pricing? pricing[1].plan:'Pro'} <br/>{pricing? pricing[1].price:'Free'}</div>
                                <div className='text-center p-2 bg-white text-sm rounded-md'>{pricing? pricing[2].plan:'Enterprise'} <br/>{pricing? pricing[2].price:'Free'}</div>
                            </div>

                        <div className='grid grid-cols-2 gap-5'>
                            <div>
                                <h1 className='font-bold text-lg mb-3'>Features</h1>
                                <p>{
                                   features && Object.values(features).map((item,index)=> <div><span>{index+1}.</span> {item.feature_name}</div>)
                                }</p>
                            </div>
                            <div>
                                <h1 className='font-bold text-lg'>Integrations</h1>
                                <p className='mt-3'>{integrations ? integrations.map((item,index) => <div><span>{index+1}.</span> {item}</div>):"No data Found"}</p>
                            </div>

                        </div>
                        </div>
                        <div className="border p-5 rounded-md border-red-900 text-center">
                            <img className='border rounded-md' src={image_link?image_link[0]:image_link} alt="" />
                            <h1 className="my-5">{input_output_examples ? input_output_examples.map(item=><>{
                               <div className="mx-auto text-center shadow-sm p-3 rounded-md">
                                <p className="font-bold">{item.input}</p>
                                <p className="text-sm text-gray-400">{item.output}</p>
                               </div>
                                
                            }</>):"No Data Found"}</h1>
                        </div>


                        <label htmlFor="my-modal-5" className='text-red-900 absolute p-2 rounded-md top-3 right-3 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </label>
            </div>
            </div>
        </>
    );
};

export default Modal;