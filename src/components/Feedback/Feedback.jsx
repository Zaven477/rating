import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StarRateIcon from "@mui/icons-material/StarRate";

export const Feedback = () => {
  return (
    <Box display="flex" justifyContent="center" pt="160px">
      <Box
        sx={{
          width: "400px",
          height: "400px",
          bgcolor: "#4682B4",
          borderRadius: "25px",
        }}
      >
       <Box display="flex" justifyContent="center" pt="40px">
        <StarRateIcon sx={{
            color: "#D2691E",
            width: "100px",
            height: "100px"
        }} 
        />
       </Box>
        <Typography
          color="white"
          textAlign="center"
          pt="50px"
          fontSize="25px"
          fontWeight="700"
        >
          Thank you!
        </Typography>
        <Typography textAlign="center" pl="25px" pr="25px" pt="30px" color="white">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don`t hesitate to get in touch!
        </Typography>
      </Box>
    </Box>
  );
};
