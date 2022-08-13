import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  FormHelperText,
  Button,
  FormLabel,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';
import { useRouter } from 'next/router';
import { ErrorMessage } from 'formik';

const validationSchema = yup.object({
  company: yup.string().required('会社名は必須です'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('メールアドレスは必須です'),
  name: yup
    .string()
    .min(1, 'name should be of minimum 8 characters length')
    .required('名前は必須です'),
  age: yup.number().required('年齢は必須です'),
  foods: yup
    .array()
    .min(1, '好きな食べ物は必須です')
    .required('好きな食べ物は必須です'),
});

export const NewUserForm = () => {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      name: '太郎',
      company: '会社名',
      age: 30,
      foods: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Stack>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="column" spacing={3}>
          <TextField
            fullWidth
            id="company"
            name="company"
            label="会社"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.email && formik.errors.company}
          />
          <TextField
            fullWidth
            id="name"
            name="name"
            label="名前"
            type="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="メールアドレス"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">年齢</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formik.values.age}
              label="年齢"
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              sx={{ textAlign: 'left' }}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            error={formik.touched.foods && Boolean(formik.errors.foods)}
          >
            <FormLabel sx={{ textAlign: 'left' }}>好きな食べ物</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox {...formik.getFieldProps('foods')} value="sushi" />
                }
                label="寿司"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...formik.getFieldProps('foods')}
                    value="yakiniku"
                  />
                }
                label="焼肉"
              />
              <FormControlLabel
                control={
                  <Checkbox {...formik.getFieldProps('foods')} value="curry" />
                }
                label="カレー"
              />
            </FormGroup>
            {formik.touched.foods && Boolean(formik.errors.foods) && (
              <FormHelperText>好きな食べ物は必須です</FormHelperText>
            )}
          </FormControl>
          <Button color="primary" variant="contained" fullWidth type="submit">
            追加
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
