import styled from "styled-components";
import { Content } from "../../Content";

export const Wrapper = styled(Content)`
width: 100%;
display: flex;
margin-top: 50px;
`

export const Title = styled.div`
max-width: 300px;
min-width: 40%;
font-size: 30px;
font-weight: bold;
color: white;
text-shadow: 0px 0px 2px var(--text-color);
letter-spacing: 2px;
display: flex;
padding: 50px;
text-transform: uppercase;
`;


export const SectionContent = styled.div`
width: 100%;
padding: 20px;
`;