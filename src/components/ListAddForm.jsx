import React, { useState } from 'react';
import { Box, FormControl, TextField } from '@mui/material';

export default function ListAddForm({ addList, error }) {
	const [listName, setListName] = useState('');
	const handleChange = (evt) => {
		setListName(evt.target.value);
	};
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addList(listName);
		setListName('');
	};

	return (
		<Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
			<FormControl sx={{ my: 3 }}>
				<TextField
					label="New List Name"
					id="listName"
					name="listName"
					variant="standard"
					value={listName}
					onChange={handleChange}
					error={error.length > 0}
					helperText={error}
				/>
			</FormControl>
		</Box>
	);
}
