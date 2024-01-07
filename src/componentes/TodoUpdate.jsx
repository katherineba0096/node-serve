import {FaEdit} from "react-icons/fa"
import { useForm } from "../hooks/useform";
import { useRef, useState } from "react";
import { Button, Input, } from '@chakra-ui/react'

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	const onSubmitUpdate = e => {
		e.preventDefault();

		const id = todo.id;
		const description = updateDescription;

		handleUpdateTodo(id, description);

		setDisabled(!disabled);

		focusInputRef.current.focus();
	};

	return (
		<form onSubmit={onSubmitUpdate}>
			<Input
				type='text'
				className={`${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				readOnly={disabled}
				ref={focusInputRef}
			/>

			<Button className='btn-edit' type='submit'>
				<FaEdit />
			</Button>
		</form>
	);
};
