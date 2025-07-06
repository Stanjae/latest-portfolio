import { Box, Grid, Typography, Stack, Divider } from "@mui/material";
import "../stylesio/Home.css";
import { Xperience } from "../db/db";
import CusCard from "../components/CusCard";

const wrapperStyles = {
  py: { md: "80px", xs: "40px" },
  pl: { lg: "140px", xs: "15px" },
  pr: { lg: "100px", xs: "15px" },
};

const Experience = () => {
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
        EXPERIENCE
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
        sx={{ pl: { md: 2, xs: 0.5 } }}
      >
        <Grid xs={12} sx={{ py: { lg: "50px" } }} item>
          <Stack>
            {Xperience.map((item, index) => (
              <div key={index}>
                <CusCard item={item} />
                <Divider sx={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
              </div>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
