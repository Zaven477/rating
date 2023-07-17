import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import StarRateIcon from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import {useState, useEffect} from 'react'
import { Feedback } from "../Feedback/Feedback";
import { Selected } from "../Selected/Select";


export const Rating = () => {
  const [currentBtn, setCurrentButton] = useState({ btn: [1, 2, 3, 4, 5], active: null, btnColor: "#D2691E", res: null, select: null })
  

  const handleClickBtn = (index, btnClass) => {
    setCurrentButton({ ...currentBtn, active: index, btnColor: btnClass })
    
  }


  const handleSubmit = () =>  {
    if(currentBtn.btnColor === '#A9A9A9') {
        setCurrentButton({ ...currentBtn, res: Feedback() })
      } else {
        setCurrentButton({ ...currentBtn, select: Selected() })
      }
 }



 if(currentBtn.res) {
    return <Box>{currentBtn.res}</Box>
 }
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
        <Box
          sx={{
            border: "1px solid",
            width: "45px",
            height: "45px",
            mt: "30px",
            ml: "30px",
            borderRadius: "50%",
            bgcolor: "#696969",
            border: "none",
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <StarRateIcon
            sx={{
              color: "#D2691E",
              position: 'absolute',
              pb: '3px'
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "white",
            fontSize: "25px",
            fontWeight: 700,
            mt: "30px",
            ml: "30px",
          }}
        >
          How did we do
        </Typography>
        <Typography sx={{
            color: 'white',
            ml: '30px',
            mt: '25px'
        }}>
          Please let us know how we did with your support request. All feedack
          is appreciated to help us improve our offering!
        </Typography>
        <Box display='flex'>
          {currentBtn.btn.map((item, index) => {
          const btnClass = index === currentBtn.active ? "#D2691E" : "#A9A9A9";
          return (
            <Box
             onClick={() => handleClickBtn(index, btnClass)}
             key={index}
             bgcolor={btnClass}
            sx={{
              border: "1px solid",
              width: "45px",
              height: "45px",
              mt: "30px",
              ml: "30px",
              borderRadius: "50%",
              
              border: "none",
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
          <Typography sx={{
              position: 'absolute',
              color: 'white',
              
          }}>
             {item}
          </Typography>
          </Box>
          )
        })}
        </Box>
        {currentBtn.btnColor === '#D2691E' ? currentBtn.select : <Box></Box>}
        <Box display='flex' justifyContent='center'>
        <Button sx={{
            mt: '12px', 
            bgcolor: '#D2691E',
            color: 'white',
            width: '340px',
            borderRadius: '16px',
            
            
        }} onClick={handleSubmit}>
          SUBMIT
       </Button>
       </Box>
      </Box>
    </Box>
  );
};
