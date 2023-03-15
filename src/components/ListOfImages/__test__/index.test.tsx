import { waitFor, screen, render, cleanup } from "@testing-library/react";
import ListOfComponents from "..";

// jest.mock("axios");
// afterEach(() => cleanup());

const dummyData = [
	{
		id: "123",
		name: "first Image",
		url: "testing url",
	},
	{
		id: "234",
		name: "Second Image",
		url: "testing url 2",
	},
];
test("testing list of users length", async () => {
	render(<ListOfComponents data={dummyData} />);

	const imageListing = await waitFor(() => screen.findAllByTestId("imageItem"));
	expect(imageListing).toHaveLength(2);
});
