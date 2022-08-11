import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { DRAWER_WIDTH } from "@/src/constants";

interface MyAppBarProps extends MuiAppBarProps {
  isAuth?: boolean
  title?: string;
  open?: boolean;
  toggleDrawer?: () => void;
}

const MyAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MyAppBarProps>(({ theme, open, isAuth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: isAuth ? DRAWER_WIDTH : 0,
    width: `calc(100% - ${isAuth ? DRAWER_WIDTH : 0}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar = ({
  title = "My App",
  isAuth = false,
  open,
  toggleDrawer,
}: MyAppBarProps) => {
  return (
    <MyAppBar position="absolute" open={open} isAuth={isAuth}>
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </MyAppBar>
  );
};
