import styled from "styled-components";
import { motion } from 'motion/react';
import { Text } from "@components/atoms";


export const JobsContainer = styled.div`
margin-left: 20px;
position: relative;
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
z-index: 2;
&:last-of-type{
background-color: white;
}
`;

export const JobTitleWrapper = styled.div`
position: relative;
padding-left: 25px;
`

export const JobDescription = styled(Text)`
padding: 20px 40px;
text-align: justify;
`
