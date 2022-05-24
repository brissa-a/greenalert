import * as React from 'react';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'tuto',
    step_name: "tuto",
  },
  {
    label: 'Signaler une pub',
      step_name: "ad_content",
  },
  {
    label: 'Description',
    step_name: "desc",

  },
  {
    label: 'Pub déjà signalées',
    step_name: "compare",

  },
  {
    label: 'Qualifier ma plainte',
    step_name: "qualify_1",

  },
  {
    label: 'Qualifier ma plainte',
    step_name: "qualify_2",
  },
  {
    label: 'Ma plainte est prête',
    step_name: "ready",

  },
  {
    label: '',
    step_name: "welldone",
  },
];

function ReportAnAd() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
          <LoadStepContent step_name={steps[activeStep].step_name} />
        </Box>
        <MobileStepper
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    );
  }


  function LoadStepContent(props: any) {
    const step_name = props.step_name;

    {/* add check constraint : props.step_name to be in a specific list otherwise raise error ?
    */}
    if (step_name === "ad_content") {
      return <AdImage />;
    }
    return <h1>étape a coder </h1>;
  }

  function AdImage() {

    return <h2>Upload an image or provide a URL please :) </h2>
  }
  export default ReportAnAd;
