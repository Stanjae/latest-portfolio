import { Box, Slider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import "../stylesio/Home.css";

const MakeSlider = styled(Slider)(() => ({
  fontSize: "12px",
  lineHeight: "18px",
  letterSpacing: "3px",
  color: "rgba(255,255,255, 0.8)",
}));

const CusSlider = ({ title, score }) => {
  return (
    <Box>
      <Typography fontSize={"14px"} variant="h6" color={"neutral.main"}>
        {title}
      </Typography>
      <MakeSlider
        size="small"
        aria-label="Html"
        valueLabelDisplay="auto"
        defaultValue={score}
        disabled
      />
    </Box>
  );
};
CusSlider.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default CusSlider;
