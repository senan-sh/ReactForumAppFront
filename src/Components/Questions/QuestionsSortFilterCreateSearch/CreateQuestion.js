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
            minWidth: "300px",
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
            maxWidth: "100%",
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
            padding: "0 0!important"
        }
    });
    const classes = useStyles();

    let isFormSubmitable = false;




    const [inputSubject, setInputSubject] = useState({ value:"", isError:false, helperText:"" });
    const [inputQuestion, setInputQuestion] = useState({ value:"", isError:false, helperText:"" });
    const [inputAnonym, setInputAnonym] = useState({ value:"", helperText:"" });


    const submitForm = (e) => {
        e.preventDefault()
    }

    const onChangeSubjectInput = (e) => {
        setInputSubject(e.target.value);
    }
    const onChangeQuestionInput = (e) => {
        setInputQuestion(e.target.value);
    }
    const onChangeAnonymInput = (e) => {
        setInputAnonym(e.target.value);
    }


    return (
        <div className="create-question">
            <Button className={classes.button} onClick={() => { setCreateQuestionDialog(true) }} variant="contained" >Sorğu yarat</Button>
            <Dialog onBackdropClick={() => { setCreateQuestionDialog(false) }} className={classes.create_dialog} transitionDuration={{ appear: 500, exit: 500, enter: 500 }} open={createQuestionDialog} >
                <h1>Sorğu yarat</h1>
                <form noValidate onSubmit={submitForm}>
                    <Box className={classes.dialog_box}>
                        <FormControl fullWidth className={classes.form_control}>




                            <TextField error={inputSubject.error} helperText={inputSubject.helperText}
                                onChange={onChangeSubjectInput}
                                inputProps={{ maxLength: 40 }}
                                className={classes.text_fields} fullWidth size="medium" name="question_subject" variant="filled" label="Mövzu" datatype="string" />

                            <TextField error={inputQuestion.error} helperText={inputQuestion.helperText}
                                onChange={onChangeQuestionInput}
                                inputProps={{ maxLength: 255 }}
                                className={classes.text_fields} fullWidth rows={4}
                                name="question_text" multiline variant="filled" label="Sorğu mətni" datatype="string" />



                            <Box className={classes.dialog_anonymbox}>
                                <span className={classes.anonym_text}>Anonim:</span>
                                <Switch
                                    value={inputAnonym} onChange={onChangeAnonymInput}
                                    color="primary" title="Anonim" defaultChecked={false}></Switch>
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
