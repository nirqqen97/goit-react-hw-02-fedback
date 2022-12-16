import React from "react";
import {Container,Title} from "./Section.styled";
export class Section extends React.Component { 

    render() {
        return(
          <Container>
              <Title>{this.props.title}</Title>
                {this.props.children}
                 
           </Container>
        )

    }
}
