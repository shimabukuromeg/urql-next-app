import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { useCreateEmployeeMutation } from '@/generated/graphql';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(1, 'name should be of minimum 8 characters length')
    .required('名前は必須です'),
});

export const FormDialog = () => {

  const [
    insertIntoemployeesCollectionResult,
    insertIntoemployeesCollection
  ] = useCreateEmployeeMutation()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: validationSchema,
    onSubmit: (value, actions) => {
      insertIntoemployeesCollection({ objects: [value] }).then(result => {
        if (result.error) {
          console.error('Oh no!', result.error);
        }
      });

      handleClose();
      actions.resetForm();
    },
  });

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>ユーザー追加</DialogTitle>
          <DialogContent>
            <DialogContentText>ユーザーを追加します</DialogContentText>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="名前"
              type="text"
              fullWidth
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button type="submit">登録</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
