import { fireEvent, render, screen } from '@testing-library/react';
import Counter from "../components/counter";


describe("Counter", () => {
    it("Load Counter component as expected", () => {
        render(<Counter />);
    });
    it("Load Counter component as expected and increase-decrease the value", () => {
        const {getByTestId} = render(<Counter />);
        const incrementButton = getByTestId("increment-button");
        fireEvent.click(incrementButton);
        expect(screen.getAllByText("Counter : 1")).toBeTruthy();
        const decrementButton = getByTestId("decrement-button");
        fireEvent.click(decrementButton);
        expect(screen.getAllByText("Counter : 0")).toBeTruthy();
    });
    it("Load Counter component as expected and reset the value", () => {
        const {getByTestId} = render(<Counter />);
        const incrementButton = getByTestId("increment-button");
        fireEvent.click(incrementButton);
        expect(screen.getAllByText("Counter : 1")).toBeTruthy();
        const decrementButton = getByTestId("reset-button");
        fireEvent.click(decrementButton);
        expect(screen.getAllByText("Counter : 0")).toBeTruthy();
    });
})