import React, { useState } from 'react';
import {
	Box,
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
} from '@mui/material';

export default function TodoItemAddForm({ addItem }) {
	const [item, setItem] = useState('');

	const handleChange = (evt) => {
		setItem(evt.target.value);
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addItem(item);
		setItem('');
	};

	return (
		<Box
			component="form"
			noValidate
			autoComplete="off"
			onSubmit={handleSubmit}
			sx={{ width: '100%' }}
		>
			<FormControl sx={{ mt: 4 }} fullWidth>
				<InputLabel htmlFor="item">New Item</InputLabel>
				<Input
					id="item"
					name="item"
					aria-describedby="my-helper-text"
					value={item}
					onChange={handleChange}
					autoFocus
				/>
				<FormHelperText id="my-helper-text">Add new item.</FormHelperText>
			</FormControl>
		</Box>
	);
}
