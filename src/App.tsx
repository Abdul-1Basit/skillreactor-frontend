import React from "react";
import { Input, message } from "antd";
import "./App.css";
import ListOfComponents from "./components/ListOfImages";
import { fileType } from "./interfaces";

function App() {
	const [listOfFiles, setListOfFiles] = React.useState<fileType[]>([]);
	const [searchQuery, setSearchQuery] = React.useState("");
	const [messageApi, contextHolder] = message.useMessage();

	const fetchList = () => {
		fetch(`${process.env.REACT_APP_BACKEND_URL}api/file/getAll` ?? "")
			.then((response) => response.json())
			.then((data) => {
				console.log("data", data);
				setListOfFiles(data);
			})
			.catch((err) => console.log("error", err));
	};
	React.useEffect(() => {
		if (!searchQuery) fetchList();
	}, [searchQuery]);
	const filterResults = () => {
		if (!searchQuery) {
			warning();
			return;
		} else {
			fetch(
				`${
					process.env.REACT_APP_BACKEND_URL
				}api/file/search/${searchQuery.trim()}` ?? ""
			)
				.then((response) => response.json())
				.then((data) => {
					console.log("filtered data", data);
					setListOfFiles(data);
				})
				.catch((err) => console.log("error", err));
		}
	};
	const warning = () => {
		messageApi.open({
			type: "warning",
			content: "Please type something in input",
		});
	};
	return (
		<div className="App">
			{contextHolder}
			<div className="flexEnd">
				<Input
					placeholder="Search for an image"
					onChange={(text) => setSearchQuery(text.target.value)}
					className="inputField"
				/>
				<input
					type={"button"}
					value="Enter"
					className="inputBtn"
					onClick={filterResults}
					data-testid="enterBtn"
				/>
			</div>
			<ListOfComponents data={listOfFiles} />
		</div>
	);
}

export default App;
