import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { HashLink } from "react-router-hash-link";
import styled from "@emotion/styled";
import "../stylesio/Sidebar.css";
import {
  Home,
  AccountBox,
  Tune,
  CollectionsBookmark,
  Contacts,
  Star,
} from "@mui/icons-material";

const stylesio = {
  display: { xs: "block", lg: "none" },
  position: { xs: "fixed" },
  zIndex: 5,
};

const NaviItem = [
  { title: "HOME", link: "/#home", icon: <Home className="customicon" /> },
  {
    title: "ABOUT ME",
    link: "/#about-me",
    icon: <AccountBox className="customicon" />,
  },
  {
    title: "SKILLS",
    link: "/#services",
    icon: <Star className="customicon" />,
  },
  {
    title: "EXPERIENCE",
    link: "/#xperience",
    icon: <Tune className="customicon" />,
  },
  {
    title: "PORTFOLIO",
    link: "/#portfolio",
    icon: <CollectionsBookmark className="customicon" />,
  },
  {
    title: "CONTACT ME",
    link: "/#contact-me",
    icon: <Contacts className="customicon" />,
  },
];

const CusHashLink = styled(HashLink)(() => ({
  fontSize: "12px",
  lineHeight: "18px",
  textAlign: "left",
  letterSpacing: "3px",
  paddingLeft: "12px",
  textDecoration: "none",
  color: "rgba(255,255,255, 0.7)",
  "&:hover": {
    color: "rgba(255,255,255, 1)",
  },
}));

const CustomListBtn = styled(ListItemButton)(() => ({
  fontSize: "12px",
  lineHeight: "18px",
  letterSpacing: "3px",
  color: "rgba(255,255,255, 0.7)",
  "&:hover": {
    background: "rgba(12,12,15,0.5)",
    color: "rgba(255,255,255, 1)",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    handleDrawerClose();
  };

  /* const HandleRoute =(id)=>{
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  } */

  return (
    <div>
      <AppBar sx={stylesio} color="bgcolor" position="static">
        <Toolbar>
          <Typography color={"neutral.main"} variant="h5" sx={{ flexGrow: 1 }}>
            Stan
            <Typography color={"primary"} variant="h5" component={"span"}>
              jhae
            </Typography>
          </Typography>

          <IconButton
            edge="start"
            color="neutral.main"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <Menu sx={{ color: "neutral.main" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{ width: 300, bgcolor: "bgcolor.sidebg" }}
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        {/*  <List sx={{width:300}}>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText primary="Services" />
          </ListItem>
        </List> */}
        <List
          sx={{ width: 300, bgcolor: "bgcolor.sidebg" }}
          component="nav"
          aria-label="main mailbox folders"
        >
          {NaviItem.map((item, index) => (
            <div key={index}>
              <CustomListBtn
                className="listWrapper"
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                {item.icon}

                <CusHashLink className="custext" smooth to={item.link}>
                  <ListItemText primary={item.title} />
                </CusHashLink>
              </CustomListBtn>
              <Divider sx={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
            </div>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
