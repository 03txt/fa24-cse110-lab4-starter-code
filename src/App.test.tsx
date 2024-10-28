import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("basic functions", () => {
  const renderApp = () => render(<App />);

  test("create new expense", () => {
    renderApp();
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Test Expense" },
    });
    fireEvent.change(screen.getByLabelText(/cost/i), {
      target: { value: "500" },
    });
    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    expect(screen.getByText(/remaining:/i)).toHaveTextContent("500");
  });

  test("delete an expense", () => {
    renderApp();
    
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Test Expense" },
    });
    fireEvent.change(screen.getByLabelText(/cost/i), {
      target: { value: "400" },
    });
    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    // Now delete the expense
    fireEvent.click(screen.getByRole("button", { name: /x/i })); 

    expect(screen.getByText(/remaining:/i)).toHaveTextContent("1000"); 
  });

  test("budget updates appropriately", () => {
    renderApp();

    // Check the initial budget balance
    expect(screen.getByText(/remaining:/i)).toHaveTextContent("1000"); 

    // Create an expense
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Groceries" },
    });
    fireEvent.change(screen.getByLabelText(/cost/i), {
      target: { value: "200" },
    });
    fireEvent.click(screen.getByRole("button", { name: /save/i }));

    
    expect(1000).toBe(30);
  });
  
});

describe("edge cases", () => {

const renderApp = () => render(<App />);

test("non numerical cost input", () => {

renderApp()

fireEvent.change(screen.getByLabelText(/name/i), {
  target: { value: "Test Expense" },
});
fireEvent.change(screen.getByLabelText(/cost/i), {
  target: { value: "abc" }, // Non-numeric input
});
fireEvent.click(screen.getByRole("button", { name: /save/i }));

expect(screen.getByText(/remaining:/i)).toHaveTextContent("1000"); 
});


test("budget exceeded alert", () => {
  window.alert = jest.fn();

  renderApp();

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: "Wingstop" },
  });
  fireEvent.change(screen.getByLabelText(/cost/i), {
    target: { value: "20000" },
  });

  fireEvent.click(screen.getByRole("button", { name: /save/i }));

  expect(window.alert).toHaveBeenCalledWith("Warning: You have exceeded your budget!");

  jest.clearAllMocks();
});



});

