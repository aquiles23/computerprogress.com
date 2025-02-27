import styled from "styled-components";
import theme from "../../styles/theme";
import { Button } from "@material-ui/core";

export const StyledTitle = styled.h1`
  font-weight: 400;
  margin-top: 50px;
  font-size: 30px;
`;

export const GridContainer = styled.div`
  display: grid;

  grid-template-columns: ${(props) => (props.$mobile ? "3rem" : "5rem")} 1fr;
  grid-template-rows: auto auto;

  grid-column-gap: ${(props) => (props.$mobile ? "1rem" : "2rem")};

  img {
    width: 100%;
    grid-row: ${(props) => (props.$mobile ? 1 : "1 / span 2")};
    align-self: center;
  }

  h2 {
    font-size: 1.9rem;
    font-weight: 400;
    align-self: bottom;
  }

  p {
    grid-column: ${(props) => (props.$mobile ? "1 / span 2" : 0)};
    align-self: top;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
`;

export const StyledButton = styled(Button).attrs({
  variant: "contained",
  color: "primary",
  size: "large",
  disableElevation: true,
  href: "https://arxiv.org/abs/2007.05558",
  target: "_blank",
})`
  text-align: center;
  border-radius: 30px !important;
  color: white;
  background: linear-gradient(268.88deg, rgba(255, 255, 255, 0.1) -7.38%, #9E1FFF 104.79%), #4e33ff;;
`;
