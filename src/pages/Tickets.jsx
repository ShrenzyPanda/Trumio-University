import React, { useEffect, useState } from 'react';
import TicketsList from '../components/ticketsPage/TicketsList';
import { projectData } from '../data/projectData';
import { getTicket } from '../services/api';
import { useLocation } from 'react-router';

const project=projectData[0];

const Tickets = () => {
  const location = useLocation();
  const {state} = location
  const [data, setData] = useState({})
  const [loader, setLoader] = useState(true)
  console.log(state)
  const tickets = async()=>{
    const res = await getTicket(state.id)
    console.log(res)
    setData(res.data)
    setLoader(false)
  }
  useEffect(()=>{
    tickets()
  },[])
  return (
    <>
       {
        loader? (<div>Loading..........</div>):( <TicketsList project={data} />)
       }
    </>
  )
}

export default Tickets;