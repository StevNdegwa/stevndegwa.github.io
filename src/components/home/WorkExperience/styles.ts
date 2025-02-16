import styled from "styled-components";
import { Content } from "../../Content";
import { motion } from 'motion/react';

export const Wrapper = styled(Content)`
display: flex;
flex-direction: column;
gap: 40px;
margin-top: 100px;
`;

export const JobsContainer = styled.div`
margin-left: 20px;
`
export const JobBadge = styled(motion.div)`
width:30px;
height: 30px;
border-radius: 10px;
position: absolute;
left: -15px;
top:0px;
z-index: 2;
`

export const Border = styled(motion.div)`
width: 4px;
height: 100%;
background-color: rgba(0, 51, 99, 10%);
position: absolute;
left: 0;
top: 0;
z-index: 1;
`

export const JobWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding-bottom: 40px;
position: relative;
background-color: transparent;
&:last-child > ${Border} {
  display: none;
  }
`;


export const JobTimeline = styled.div`
font-size: 14px;
display: flex;
align-items: center;
gap: 0px 5px;
margin-bottom: 5px;
`

export const JobTitle = styled.h2`
font-size: 18px;
font-weight: 800;
`

export const JobTitleWrapper = styled.div`
position: relative;
padding-left: 25px;
`

export const JobDescription = styled.p`
font-size: 16px;
font-weight: 400;
padding: 20px 40px;
text-align: justify;
`
