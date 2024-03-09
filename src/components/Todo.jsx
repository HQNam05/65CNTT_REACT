import React from 'react';

export default function Todo({ todo }) {
	return (
		<div className='px-4 py-3 border rounded'>
			<div className='d-flex justify-content-between w-100 align-items-center mb-2'>
				<span>{todo.created_at}</span>
				<div className='d-flex align-items-center gap-2'>
					<button type='button' class='btn btn-outline-success'>
						Hoàn thành
					</button>
					<button type='button' class='btn btn-outline-danger'>
						Xóa
					</button>
				</div>
			</div>
			<h3>{todo.content}</h3>
		</div>
	);
}

export const FinishedTodo = ({ todo }) => {
	return (
		<div className='px-4 py-3 border rounded'>
			<div className='d-flex justify-content-between w-100 align-items-center mb-2'>
				<span>{todo.created_at}</span>
				<div className='d-flex align-items-center gap-2'>
					<button type='button' class='btn btn-outline-danger'>
						Xóa
					</button>
				</div>
			</div>
			<h3>{todo.content}</h3>
		</div>
	);
};

export const CanceledTodo = ({ todo }) => {
	return (
		<div className='px-4 py-3 border rounded'>
			<div className='d-flex justify-content-between w-100 align-items-center mb-2'>
				<span>{todo.created_at}</span>
				<div className='d-flex align-items-center gap-2'>
					<button type='button' class='btn btn-primary'>
						Mới
					</button>
				</div>
			</div>
			<h3>{todo.content}</h3>
		</div>
	);
};
