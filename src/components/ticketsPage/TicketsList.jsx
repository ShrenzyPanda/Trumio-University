import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Rating from "@mui/material/Rating";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import { ticketsData } from '../../data/ticketsData';
import { recommendedCourses } from '../../data/recommendedCourse';
import clientPic from '../../assets/bidderPage/sampleProject.svg'

const ProjectCard = ({
    index,
    image,
    project_name,
    client,
    place,
    date
  }) => {
    return (
      <>
      
  <div className="ml-28 mt-12 mb-8 border border-gray-300 shadow-lg rounded-lg w-[80%] flex flex-row bg-white">
    <div className="w-[15%] flex align-middle  rounded-t lg:rounded-t-none lg:rounded-l text-center ">
    <img src={clientPic} alt="ProjectImage" className="w-[80%] px-5"></img>
    </div>
    <div className="w-[70%] bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <h2 className="text-black font-bold text-xl mb-2">{project_name}
          </h2>
          <p className="text-gray-700 text-base">Client : {client}</p>
            <p className="text-gray-400 text-base">Date : {date}</p>
      </div>
    </div>
  </div>
      </>
    )
  }


const CourseCard = ({
    index,
    image_480x270,
    category,
    rating,
    title,
    is_paid,
    duration,
    num_published_lectures,
    num_subscribers,
    url
  }) => {
    return (
      <>
        <div className="bg-gray-100 rounded-md p-4 col-span-1 w-[20vw]  shadow-lg">
          <img src={image_480x270} alt="" className="object-cover rounded" />
          <div className="flex justify-between text-sm text-gray-500/90 font-medium mt-2">
            <div>{category}</div>
            <div>
              <Rating
                name="half-rating"
                defaultValue={rating}
                precision={0.5}
                size="small"
              />
            </div>
          </div>
          <div className="font-medium mt-2">{title}</div>
          {is_paid ? (
            <span className="text-[0.7rem] px-3 py-1 bg-[#ff7426] rounded-3xl text-white">
              PAID
            </span>
          ) : (
            <span className="text-[0.7rem] px-3 py-1 bg-[#ff7426] rounded-3xl text-white">
              FREE
            </span>
          )}
          <div className="flex gap-4 mt-3">
            <div className="text-gray-500 text-sm flex items-center gap-1">
              <AccessTimeIcon fontSize="small" /> 2 hrs
            </div>
            <div className="text-gray-500 text-sm flex items-center gap-1">
              <VideocamRoundedIcon fontSize="small" /> {num_published_lectures} lectures
            </div>
            <div className="text-gray-500 text-sm flex items-center gap-1">
              <FileDownloadRoundedIcon fontSize="small" /> {num_subscribers}
            </div>
          </div>
          <div className="w-full flex justify-center mb-1">
            <button className="text-gray-100 bg-[#ff7426] px-5 py-2 font-medium rounded-3xl w-1/2 mx-auto mt-5">
            <a href={`https://udemy.com${url}`} target="_blank">
            Join Course
            </a>
            </button>
          </div>
        </div>
      </>
    );
  };

  
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
    "#FBEFCE",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    marginBottom: theme.spacing(2)
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  

  


const TicketCard = ({
    index,
    title,
    description,
    courses
}) => {
    const [expanded, setExpanded] = React.useState('panel1');
  
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Accordion onChange={handleChange('panel1')}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Typography variant='h6'>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <div className='mx-4 pl-6 mt-3 py-4 rounded-xl bg-[#fffaf0]'>
        <h3 className='font-medium text-lg '>Description:</h3>
        <p>{description}</p>
    </div>
    <div className='mx-4 pl-6 mt-3 py-4 rounded-xl bg-[#fffaf0]'>
    <p><span className='font-medium text-lg mr-1'>Date Added:</span> <span>12/11/2023</span></p>
    </div>
    <div className='mx-4 pl-6 mt-3 py-4 rounded-xl bg-[#fffaf0]'>
        <h3 className='font-medium text-2xl '>Recommended Courses:</h3>
        <section className="grid grid-cols-3 gap-8 mt-3 mb-5">
                {courses.map((course, index) => {
                    return (
                    <>
                        <CourseCard
                        key={`course-${index}`}
                        index={index}
                        {...course}
                        />
                    </>
                    )
                    })}
        </section>
    </div>
    </AccordionDetails>
  </Accordion>
  )
};
 

const TicketsList = ({
    project
}) => {
  console.log(project)
  return (
    <>
    <div className='mt-32'>
    <ProjectCard {...project} />
    </div>
    <div className='mt-10 mx-28 w-[80%]'>
    <h1 className='font-semibold text-3xl mb-10'>Tickets</h1>
        {project.tickets.map((ticket, index) => (
            <TicketCard key={`ticket-${index}`} index={index} {...ticket} courses={ticket.courses} />
        ))}
    </div>
    </>
  )
}

export default TicketsList;