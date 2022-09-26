import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncDecrementCreator,
	asyncIncrementCreator,
} from './store/countReducer';
import { fetchUsers } from './store/userReducer';

function App() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count.count);
	const users = useSelector((state) => state.users.users);

	return (
		<div className="App">
			<div style={{ fontSize: 48 }}>{count}</div>
			<div style={{ display: 'flex' }}>
				<button onClick={() => dispatch(asyncIncrementCreator())}>
					INCREMENT
				</button>
				<button onClick={() => dispatch(asyncDecrementCreator())}>
					DECREMENT
				</button>
				<button onClick={() => dispatch(fetchUsers())}>
					Получить юзеров
				</button>
			</div>
			<div>
				{users.map((user) => (
					<div
						key={user.id}
						style={{
							fontSize: '2rem',
							padding: '10px',
							border: '1px solid black',
							display: 'inline-block',
							marginTop: '10px',
						}}
					>
						{user.name}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
