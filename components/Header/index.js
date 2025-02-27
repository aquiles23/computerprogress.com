import { Container, Toolbar, Box, Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MuiTheme } from "../../styles/theme";

import {
  StyledAppBar,
  StyledContainer,
  StyledToolbarBox,
  StyledSpacer,
  StyledButton,
} from "./styles";

import Logo from "../../public/logo_icon.svg";

export default function Header({ isHome }) {
  const isMobileSM = useMediaQuery(MuiTheme.breakpoints.down("sm"));
  const isMobileXS = useMediaQuery(MuiTheme.breakpoints.down("xs"));

  const links = [
    {
      text: "Tasks",
      href: "/tasks",
    },
    {
      text: "Collaborate",
      href: "/collaborate",
    },
    {
      text: "About us",
      href: "/about_us",
    },
  ];

  return (
    <StyledAppBar isHome={isHome && !isMobileSM}>
      <StyledContainer>
        <Toolbar disableGutters>
          <StyledToolbarBox>
            <StyledButton color="secondary" href="/">
              <Box mr={1}>
                <Logo />
              </Box>

              {!isMobileXS && (
                <Typography variant="h6">
                  <Box fontWeight="fontWeightBold">Computer Progress</Box>
                </Typography>
              )}
            </StyledButton>

            <StyledSpacer />

            {!isMobileSM && (
              <>
                {links.map(({ text, href }) => (
                  <Box key={href}>
                    <StyledButton href={href} color="secondary">
                      {text}
                    </StyledButton>
                  </Box>
                ))}
                <StyledSpacer />
              </>
            )}

            <Box>
              <StyledButton
                size={isMobileSM ? "small" : "medium"}
                color="secondary"
                href="/sign_up"
              >
                Sign up
              </StyledButton>
            </Box>

            <Box>
              <StyledButton
                size={"medium"}
                color="primary"
                href="/sign_in"
              >
                Sign in
              </StyledButton>
            </Box>
          </StyledToolbarBox>
        </Toolbar>

        {isMobileSM && (
          <Toolbar disableGutters>
            <StyledToolbarBox justifyContent="space-between">
              {links.map(({ text, href }) => (
                <Box key={href}>
                  <StyledButton
                    href={href}
                    size={isMobileSM ? "small" : "medium"}
                    color="secondary"
                  >
                    {text}
                  </StyledButton>
                </Box>
              ))}
            </StyledToolbarBox>
          </Toolbar>
        )}
      </StyledContainer>
    </StyledAppBar>
  );
}
