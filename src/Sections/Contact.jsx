import {
  Box,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "../stylesio/Home.css";
import { Email, LocationCity, Phone } from "@mui/icons-material";
import CusForm from "../components/CusForm";

const wrapperStyles = {
  py: { md: "40px" },
  pl: { lg: "140px", xs: "15px" },
  pr: { lg: "100px", xs: "15px" },
};

const ContactMePages = () => {
  return (
    <Box sx={wrapperStyles}>
      <Typography
        py={2}
        textAlign={"left"}
        fontWeight={100}
        gutterBottom
        color={"neutral.main"}
        variant="h5"
      >
        Contact Me
        <Divider
          sx={{
            bgcolor: "primary.main",
            width: "50px",
            height: "1px",
            mt: 1.2,
          }}
          variant=""
        />
      </Typography>

      <Grid
        columnSpacing={4}
        columns={12}
        container
        sx={{ pl: { lg: 0, xs: 3 }, py: 2 }}
      >
        <Grid xs={12} md={4} item>
          <Box sx={{ bgcolor: "bgcolor.sidebg", py: 4, px: 3 }}>
            <Typography
              py={2.5}
              textAlign={"left"}
              fontWeight={700}
              gutterBottom
              color={"neutral.main"}
              variant="h5"
            >
              Let&apos;s bring your idea to life.
            </Typography>
            <Typography
              py={1}
              variant="body1"
              sx={{ opacity: "0.8" }}
              color={"neutral.main"}
            >
              I&apos;m open to freelance projects, contract roles, and full-time
              opportunities whether you need a full-stack developer to build a
              web app, scale an existing product, or join your team long-term.
              Let’s connect. <br />
              I&apos;d love to hear from you.
            </Typography>

            <List dense>
              <ListItem>
                <ListItemIcon>
                  <LocationCity sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  sx={{ color: "neutral.main", fontSize: "25px" }}
                  primary={"Remote"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <a className="contatUs" href="mailto:stanykhay29@gmail.com">
                  <ListItemText
                    sx={{ color: "neutral.main", fontSize: "1rem" }}
                    primary={"Stanykhay29@gmail.com"}
                  />
                </a>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Phone sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <a className="contatUs" href="tel:+2347015324683">
                  <ListItemText
                    sx={{ color: "neutral.main", fontSize: "1rem" }}
                    primary={"+234-701-532-4683"}
                  />
                </a>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid
          sx={{ pl: { lg: "40px", xs: "10px" } }}
          px={2}
          xs={12}
          md={8}
          item
        >
          <Box
            sx={{
              bgcolor: "bgcolor.sidebg",
              px: 3,
              py: { lg: "30px", xs: "15px" },
            }}
          >
            <Typography
              sx={{ opacity: 0.7 }}
              py={1.6}
              textAlign={"left"}
              fontWeight={500}
              gutterBottom
              color={"neutral.main"}
              variant="h6"
            >
              {" "}
              Say Hi!
            </Typography>

            <CusForm />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMePages;
