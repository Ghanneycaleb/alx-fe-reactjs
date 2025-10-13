import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("todo-input");
    const addBtn = screen.getByTestId("add-btn");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addBtn);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Build a Todo App");
    const deleteBtns = screen.getAllByTestId("delete-btn");
    fireEvent.click(deleteBtns[1]); // delete the second todo
    expect(todoItem).not.toBeInTheDocument();
  });
});
