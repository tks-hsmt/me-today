import { useState } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import Layout from '../../layout';

type Props = {
  handleFinish(apiKey: string): void;
}

export const AuthTrelloComponent: React.FC<Props> = props => {
  const { handleFinish } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [apiKey, setApiKey] = useState('');
  const steps = ['Login to Trello.', 'Get api key.', 'Authentication.'];

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleChange = (event: any) => setApiKey(event.target.value);

  const getStepContent = (index: number) => {
    if (index === 0) {
      return (
        <>
          <Typography>
            LOGIN TO TRELLO ボタンをクリックすると別タブにTrelloのログイン画面が表示されます。
              <br />
              ログインした後このページに戻って NEXT ボタンをクリックしてください。
              <br />
              ※ すでにログイン済みの場合は NEXT ボタンをクリックしてください。
            </Typography>
          <Button component={Link} href='https://trello.com/login' target='_blank'>Login to Trello</Button>
        </>)
    }
    if (index === 1) {
      return (
        <>
          <Typography>
            GET API KEY ボタンをクリックすると別タブにTrelloのAPIキー取得画面が表示されます。
            <br />
            「新しく許可されたオリジン」に「http://localhost:3000」を入力してください。
            <br />
            「開発者向けAPIキー」をコピーし、許可ボタンをクリックしてください。
            <br />
            このページに戻って NEXT ボタンをクリックしてください。
          </Typography>
          <Button component={Link} href='https://trello.com/app-key' target='_blank'>GET API KEY</Button>
        </>)
    }
    return (
      <form className={classes.input}>
        <Typography>
          テキストフィールドに「開発者向けAPIキー」を入力し、ＦINISH ボタンをクリックするとアクセス許可画面が表示されます。
          <br />
          許可ボタンをクリックするとトップページに戻り、あなたのTrelloカードが表示されます。
        </Typography>
        <TextField id='api-key' helperText='APIキーを入力' margin='normal' onChange={handleChange} />
      </form>)
  }

  return (
    <Layout>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  {activeStep !== steps.length - 1 &&
                    <Button variant='contained' color='primary' onClick={handleNext} className={classes.button}>
                      Next
                    </Button>
                  }
                  {activeStep === steps.length - 1 &&
                    <Button variant='contained' disabled={!apiKey} color='primary' onClick={() => handleFinish(apiKey)} className={classes.button}>
                      FINISH
                    </Button>
                  }
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Layout>
  )
}

export * from './container';
