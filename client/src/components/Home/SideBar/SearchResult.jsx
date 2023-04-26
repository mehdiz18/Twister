import { TableCell, TableRow } from "@mui/material";
const SearchResult = ({ content, setContent }) => {
  return (
    <>
      <TableRow key={content._id}>
        <TableCell onClick={() => setContent(content)}>
          {content.content.slice(0, content.content.length / 4)}...
        </TableCell>
      </TableRow>
    </>
  );
};

export default SearchResult;
