import React, { PropsWithChildren } from "react";
import { SectionContent, Title, Wrapper } from "./styles";

export const Section: React.FC<PropsWithChildren<{ title:string }>> = ({ children, title }) => (
    <Wrapper><Title><span>{title}</span></Title><SectionContent>{children}</SectionContent></Wrapper>
    );
