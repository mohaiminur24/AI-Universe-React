import React, { useEffect, useState } from 'react';
import Button from './Button';
import Modal from './Modal';

const Card = () => {
    const [items, setItems] = useState([]);
    const [showAll, setShowall] = useState(false);
    const [idnumber, setID] = useState(null);
    const [modaldata, setModaldata] = useState([]);
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools').then(res => res.json())
        .then(data=>setItems(data.data.tools));
    },[]);

    function showallfunction(){
        setShowall('true');
    }

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${idnumber}`).then(res=> res.json())
        .then(data=> setModaldata(data));
    },[idnumber]);

    const sorting = (data) =>{
        const newdata = data.sort((a,b)=> new Date(b.published_in)- new Date(a.published_in))
        console.log(newdata);

        setItems([...newdata,items]);
  
    }



    return (
        <>
        <span onClick={()=>sorting(items)}><Button>Sorting By Date</Button></span>
        <div className='grid grid-cols-3 gap-5 my-10 w-4/5 mx-auto'>
            {
                items && items.slice(0, showAll==='true'? 12:6).map(singleItems =>{
                    const {image,name,published_in,features,id} = singleItems;
                    return(
                        <div className='p-5 border rounded-md' key={singleItems+ Math.random()}>
                            <img className='rounded-md w-full h-64' src={image} alt="" />
                            <h1 className='my-5 font-semibold'>Features</h1>
                            <div className='border-b pb-5'>{
                               features && features.map((singleFeatures,index) =><p key={singleFeatures+ Math.random()}><span>{index +1}</span> {singleFeatures}</p>) 
                            }</div>
                            <h1 className='my-3 text-lg font-semibold'>{name}</h1>
                            <div className='flex justify-between'>
                                <div className='flex items-end gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                </svg>
                                <p className='text-sm'>{published_in}</p>
                                </div>
                                    

                                    <label htmlFor="my-modal-5" className='px-5 cursor-pointer hover:text-yellow-500' onClick={()=> setID(id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                    </label>

                            </div>
                        </div>
                    );
                })

            }

            <Modal modalinfo={modaldata.data?modaldata.data:{}}></Modal>
            
        </div>

        { !showAll && <span onClick={()=>showallfunction(true)}><Button>See More</Button></span> }

        </>
    );
};



export default Card;