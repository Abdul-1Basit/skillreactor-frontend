import React from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { fileType } from "../../interfaces";
import "./index.css";
import ModalComponent from "../ModalComponent";
// interface DataType {
// 	key: React.Key;
// 	name: string;
// 	age: number;
// 	address: string;
// }
const ListOfComponents = ({ data }: { data: fileType[] }) => {
	const [isModalVisible, setIsModalVisible] = React.useState(false);
	const [activeImageUrl, setActiveImageUrl] = React.useState("");

	const viewImage = (url: string) => {
		setActiveImageUrl(url);
		setIsModalVisible(true);
	};
	const columns: ColumnsType<fileType> = [
		{
			title: "Image",

			render: (dataItem) => (
				<div
					onClick={() => viewImage(dataItem.url)}
					className="openableDiv"
					data-testid="imageItem"
				>
					<img
						src={dataItem.url}
						className="imageStyles"
						alt={"thumnail" + dataItem.id}
					/>
				</div>
			),
		},
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ["descend"],
		},
	];

	const onChange: TableProps<fileType>["onChange"] = (
		pagination,
		filters,
		sorter,
		extra
	) => {
		console.log("params", pagination, filters, sorter, extra);
	};

	return (
		<div className="container">
			<ModalComponent
				{...{
					isModalVisible,
					setIsModalVisible,
					activeImageUrl,
					setActiveImageUrl,
				}}
			/>
			<Table columns={columns} dataSource={data} onChange={onChange} />
		</div>
	);
};

export default ListOfComponents;
