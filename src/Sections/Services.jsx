import {
  Box,
  Grid,
  Typography,
  Stack,
  Divider,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import "../stylesio/Home.css";
import CusSlider from "../components/CusSlider";
import { Academia, skillset } from "../db/db";

const wrapperStyles = {
  py: { sm: "80px" },
  pl: { lg: "140px", xs: "15px" },
  pr: { lg: "100px", xs: "15px" },
};

const ServicesPage = () => {
  return (
    <Box sx={wrapperStyles}>
      <Typography
        py={1}
        textAlign={"left"}
        fontWeight={100}
        gutterBottom
        color={"neutral.main"}
        variant="h5"
      >
        EDUCATION & SKILLS
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
        columnSpacing={1}
        columns={12}
        container
        sx={{ pl: { lg: 2, xs: 3 } }}
      >
        <Grid xs={12} md={5} sx={{ py: { lg: "50px" } }} item>
          <List sx={{ width: { md: "300px" } }}>
          {Academia.map((item, index) => (
            <ListItem key={index} className="newItem" divider={true}>
              <Stack spacing={1.5}>
                <span className="spanText">{item.period}</span>

                <ListItemText
                  sx={{ pb: 1 }}
                  primary={item.title}
                  secondary={item.school}
                />
              </Stack>
            </ListItem>
          ))}
          </List>
        </Grid>
        <Grid
          sx={{ py: { lg: "50px", xs: "30px" }, pl: { lg: "0px", xs: "0px" } }}
          xs={12}
          md={7}
          item
        >
          <Typography
            py={{ lg: 1, xs: 2 }}
            textAlign={"left"}
            fontWeight={700}
            gutterBottom
            color={"neutral.main"}
            variant="h5"
          >
            My Skills
          </Typography>

          <Typography
            sx={{ opacity: 0.7 }}
            py={1.6}
            textAlign={"left"}
            fontWeight={100}
            gutterBottom
            color={"neutral.main"}
            variant="subtitle2"
          >
            As a web developer, I possess a diverse range of technical skills
            and expertise. I constantly strive to stay up-to-date with the
            latest industry trends and technologies to deliver high-quality web
            solutions. Here are some of the key skills I bring to the table:
          </Typography>

          <Stack direction={"column"} spacing={{ xs: 1, sm: 1, md: 1 }}>
            {skillset.map((item, index) => (
              <CusSlider key={index} title={item.title} score={item.score} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesPage;
