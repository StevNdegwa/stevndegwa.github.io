import styled from "styled-components";
import { Box } from "@components/atoms";

export const Wrapper = styled(Box)`
display: flex;
&.flex-column{
  flex-direction: column;
}
&.flex-row{
    flex-direction: row;
}   
&.flex-wrap{
    flex-wrap: wrap;
}
&.justify-center{
    justify-content: center;
}
&.justify-space-between{
    justify-content: space-between;
}
&.justify-space-around{
    justify-content: space-around;
}
&.justify-start{
    justify-content: flex-start;
}
&.justify-end{
    justify-content: flex-end;
}
&.align-center{
    align-items: center;
}
&.align-flex-start{
    align-items: flex-start;
}
&.align-flex-end{
    align-items: flex-end;
}

&.gap-sm{
    gap: 1rem;
}
&.gap-md{   
    gap: 2rem;
}
&.gap-lg{
    gap: 3rem;
}
&.gap-xl{
    gap: 4rem;
}
&.gap-xxl{
    gap: 5rem;
}
&.gap-xs{
    gap: 0.5rem;
}
`