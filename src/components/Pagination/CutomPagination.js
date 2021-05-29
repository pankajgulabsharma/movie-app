import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const CutomPagination = ({ setPage, numOfPage = 10 }) => {
  const handlePageChange = (event, value) => {
    setPage(value);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        // border: "1px solid red",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPage}
          onChange={handlePageChange}
          color="primary"
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CutomPagination;
