import { render, screen } from '@testing-library/react';
import App from './App';
import { Dashboard, SearchResult } from "./pages"
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";

jest.mock("./pages/Dashboard");
jest.mock("./pages/SearchResult");

describe("Tests for App Router", () => {

  test("Should render page header and Dashboard on default route", () => {
    // Arrange
    Dashboard.mockImplementation(() => <div>DashboardMock</div>);

    // Act
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("DashboardMock")).toBeInTheDocument();
  });

  test("Should render SearchResult page for search-result route", () => {
    // Arrange
    SearchResult.mockImplementation(() => <div>SearchResultMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={["/search-result"]}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("SearchResultMock")).toBeInTheDocument();
  });
});