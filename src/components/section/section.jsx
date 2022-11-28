import {Sect,Title} from "./section.styled";

export const Section = ({title,children}) =>{
    <Sect>
    <Title>{title}</Title>
    {children}
    </Sect>
}