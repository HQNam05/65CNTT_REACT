import React, { useState } from 'react';
import './App.css';
import './assets/styles.css';
import buttonCss from './assets/button.module.css';
import SomeComponent from'./components/ChildComponent.jsx';
import ChildComponent from './components/ChildComponent.jsx';
import TodoCard from './components/TodoCard.jsx';

function App() {
	const [listData, setListData] = useState([
		
		
	]);

	const [todos, setTodos] = useState([
		{
			id: 1,
			content: 'Làm bài tập về nhà',
			status_id: 1,
			created_at: new Date().getTime(),
		},
		{
			id: 2,
			content: 'Tập gym',
			status_id: 2,
			created_at: new Date().setHours(2, 0, 0, 4),
		},
		{
			id: 3,
			content: 'Đi coffee',
			status_id: 3,
			created_at: new Date().setHours(2, 0, 0, 4),
		},
		
	]);
		const renderLisData = (status_id) => {
			// trả ra mảng component tương ứng với todos
			const matchStatusTask = todos.filter(task => {
				return task.status_id === status_id;
			})
			const myArry = matchStatusTask.map(task =>{
				return <TodoCard key={task.id} task={task} cancelData={cancelData} finishData={finishData} updateData={updateData}></TodoCard>
			});
			return myArry;
		};
		const cancelData = (task) => {
			// chuyển task về status_id= 3
			// xác định vịn trí phần tử trong mảng dữ liệu ban đầu


			// b1: tìm vị trí phần tử tương ứng
			const index = todos.findIndex(todo => {
				return todo.id == task.id;				
			});
			if (index === -1) {
				alert('Không có phần tử nào thỏa mãn');
				return;
			}


			//b2: clone lại phần tử vừa tìm được và update status _id
			let obj = {...todos[index]};
			obj.status_id = 3;


			//b3: xóa phần tử tại vị trí tìm được ở bước 1 và thay thế bằng "obj"
			const newArray = [...todos];
			newArray[index] = obj;

			

			// Dùng splice để replace data
			newArray.splice(index, 1, obj);
			setTodos(newArray);
		};


		const finishData = (task) => {
			const index = todos.findIndex(todo => {
				return todo.id == task.id;
			});
			if (index === -1) {
				alert('Không có phần tử naò thỏa mãn');
				return;
			}
			let obj = {...todos[index]};
			obj.status_id = 2;
			const newArray = [...todos];
			newArray.splice(index, 1, obj);
			setTodos(newArray);
		}

		const updateData  = (task) => {
			const index = todos.findIndex(todo => {
				return todo.id == task.id;
			});
			if (index === -1) {
				alert('Không có phần tử naò thỏa mãn');
				return;
			}
			
			let obj = {...todos[index]};
			obj.status_id = 1;
			const newArray = [...todos];
			newArray.splice(index, 1, obj)
			console.log(newArray);
			setTodos(newArray);
		}

		const [todoContent, setTodoContent] = useState('');
		// hàm sử lý sự kiện khi input thay đổi value


		const handleOnChangeConent = (event) =>{
			const target = event.target;
			const value = target.value;
			setTodoContent(value);
		};

		const submitTodo= () => {
			if(!todoContent.trim()){
				alert('Vui lòng nhập nội dung');
				return;
			}
			// format lại todoContent thành 1 obj tương tự với model task
			const newTodo = {
				id: todos.length + 1,
				content: todoContent,
				status_id: 1,
				created_at: new Date().getTime(),
			};
			const newArray = [...todos, newTodo];
			setTodos(newArray); 
		setTodoContent('');
		};
	return (
		<div className='App'>
			<div className='container'>
				<p className={buttonCss.myComponent}>Render List Data</p>
				<div class="input-group flex-nowrap">
  			<input 
			value={todoContent}
			type="text"
			className="form-control"
   			placeholder="Muuốn gì?" 
  			onChange={handleOnChangeConent}
  />
			<button
			type="button"
			class="btn btn-danger"
			onClick={submitTodo}
			>
			</button>
  <button className='btn btn-success' onClick={submitTodo}>Lưu</button>
</div>

				<div className='row'>
				
					<div className='col-4'>
						<h3 className='bg-primary text-center text-white rounded py-1'>Mới</h3>
						{renderLisData(1)}
					</div>
					<div className='col-4'>
						<h3 className='bg-success text-center text-white rounded py-1'>Đã hoàn thành</h3>
						{renderLisData(2)}
					</div>
					<div className='col-4'>
						<h3 className='bg-danger text-center text-white rounded py-1'>Đã hủy</h3>
						{renderLisData(3)}
					</div>
		
				</div>
			
			</div>
			<div style={{ height: '100vh' }}></div>
		</div>
	);
}
export default App;

