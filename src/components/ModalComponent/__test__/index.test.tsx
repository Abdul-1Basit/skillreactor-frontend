import { waitFor, screen, render, cleanup } from "@testing-library/react";
import ModalComponent from "..";

test("testing if image modal is in document", async () => {
	render(
		<ModalComponent
			isModalVisible={true}
			setIsModalVisible={() => {}}
			activeImageUrl="https://firebasestorage.googleapis.com/v0/b/stride-gym.appspot.com/o/files%2F%2038eef715-f895-4418-ae67-dd597482224bundefined?alt=media&token=56ae027d-ddbc-40b6-8f21-91fa88fc77f1"
			setActiveImageUrl={() => {}}
		/>
	);

	const modalImage = await waitFor(() => screen.getByTestId("modalImg"));
	expect(modalImage).toBeInTheDocument();
});
