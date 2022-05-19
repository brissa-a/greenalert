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
    description: `Dépose une plainte pour greenwashing en 3 étapes`,
    step_name: "tuto",
  },
  {
    label: 'Signaler une pub',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
      step_name: "add_content",
  },
  {
    label: 'Description',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    step_name: "desc",

  },
  {
    label: 'Pub déjà signalées',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    step_name: "compare",

  },
  {
    label: 'Qualifier ma plainte',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    step_name: "qualify_1",

  },
  {
    label: 'Qualifier ma plainte',
    description: `Etape potentielle selon selection rpécédente, A TESTER`,
    step_name: "qualify_2",
  },
  {
    label: 'Ma plainte est prête',
    description: `récap`,
    step_name: "ready",

  },
  {
    label: '',
    description: `bravo`,
    step_name: "welldone",
  },
];

function ReportAnAdd() {
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
    if (step_name == "add_content") {
      return <AddImage />;
    }
    return <h1>étape a coder </h1>;
  }

  function AddImage() {

    return <h2>Upload an image or provide a URL please :) </h2>
  }
  export default ReportAnAdd;
