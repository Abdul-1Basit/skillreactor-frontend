import React from "react";
import { Modal } from "antd";
export default function ModalComponent({
	isModalVisible,
	setIsModalVisible,
	activeImageUrl,
	setActiveImageUrl,
}: {
	isModalVisible: boolean;
	setIsModalVisible: Function;
	activeImageUrl: string;
	setActiveImageUrl: Function;
}) {
	return (
		<Modal
			title="Image Details"
			closable
			open={isModalVisible}
			onCancel={() => {
				setIsModalVisible(false);
				setActiveImageUrl("");
			}}
			footer={null}
		>
			<div>
				<img
					src={activeImageUrl}
					className="bigImageStyles"
					alt="modalImg"
					data-testid="modalImg"
				/>
			</div>
		</Modal>
	);
}
