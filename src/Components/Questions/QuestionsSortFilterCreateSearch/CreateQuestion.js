import { Button, Dialog, FormControl, TextField, Switch, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CloseOutlined } from '@material-ui/icons'
import { useEffect, useRef, useState } from 'react'


export default function CreateQuestion() {


    //DialogVisibility
    const [createQuestionDialog, setCreateQuestionDialog] = useState(false)
    //Style
    const useStyles = makeStyles({
        button: {
            background: '#693be8',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            padding: "0.8rem 1rem",
            "&:hover": {
                backgroundColor: "#3b14a7"
            },
        },
        create_dialog: {
            position: "relative",
            "& h1": {
                textAlign: "center",
                marginTop: "1rem"
            },
            "& form": {
                minWidth: "300px",
            }
        },
        dialog_box: {
            minWidth: "300px",
            padding: "4rem 1rem"
        },
        form_control: {
            "&>*": {
                margin: "10px 0"
            }
        },
        dialog_anonymbox: {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        },
        anonym_text: {
            marginRight: "10px"
        },
        close_icon: {
            position: "absolute",
            top: "1%",
            right: "1%",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "0.2rem",
            transition: "all 0.2s ease-in-out",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
                transition: "all 0.2s ease-in-out"
            }
        },
        text_fields: {
            padding: "0 2rem"
        }
    });
    const classes = useStyles();

    let firstTimeEnteringSubjectInput = true;
    let firstTimeEnteringTextInput = true;
    let isFormSubmitable = false;

    const [subjectTextFieldError, setSubjectTextFieldError] = useState({});
    const [questionTextFieldError, setQuestionTextFieldError] = useState({});

    const validateQuestionCreationInput = (e) => {
        if (e.target.name === "question_subject") {
            if (e.target.value.length < 3) {
                isFormSubmitable = false;
                setSubjectTextFieldError({
                    isError: true,
                    text: "Mövzunu 3-dən aşağı sayda simvolla əhatə etmək olmaz"
                })
            } else {
                isFormSubmitable = true;
                setSubjectTextFieldError({
                    isError: false,
                    text: ""
                })
            }
        }
        if (e.target.name === "question_text") {
            if (e.target.value.length < 10) {
                isFormSubmitable = false;
                setQuestionTextFieldError({
                    isError: true,
                    text: "Sual mətni daha geniş əhatə olunmalıdır."
                })
            } else {
                isFormSubmitable = true;
                setQuestionTextFieldError({
                    isError: false,
                    text: ""
                })
            }
        }
    }

    const submitForm = (e) => {
        if (isFormSubmitable === false) {
            e.preventDefault()
        } else {
            e.preventDefault()
            alert("Submitted")

            // Post question data to API
        }
    }


    return (
        <div className="create-question">
            <Button className={classes.button} onClick={() => { setCreateQuestionDialog(true) }} variant="contained" >Sorğu yarat</Button>
            <Dialog className={classes.create_dialog} transitionDuration={{ appear: 500, exit: 500, enter: 500 }} open={createQuestionDialog} >
                <h1>Sorğu yarat</h1>
                <form noValidate onSubmit={submitForm}>
                    <Box className={classes.dialog_box}>
                        <FormControl fullWidth className={classes.form_control}>


                            <TextField fullWidth size="medium" onChange={validateQuestionCreationInput} error={subjectTextFieldError.isError}
                                name="question_subject" helperText={subjectTextFieldError.text} variant="filled" label="Mövzu" datatype="string" />


                            <TextField fullWidth error={questionTextFieldError.isError} onChange={validateQuestionCreationInput} helperText={questionTextFieldError.text} rows={4}
                                name="question_text" multiline variant="filled" label="Sorğu mətni" datatype="string" />

                            <Box className={classes.dialog_anonymbox}>
                                <span className={classes.anonym_text}>Anonim:</span>
                                <Switch color="primary" title="Anonim" defaultChecked={false}></Switch>
                            </Box>



                            <Button type="submit" variant="outlined" color="primary">Sorğu yarat</Button>
                        </FormControl>
                    </Box>
                </form>
                <CloseOutlined onClick={() => { setCreateQuestionDialog(false) }} className={classes.close_icon} />
            </Dialog>
        </div>
    )
}
