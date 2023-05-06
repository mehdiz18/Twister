import { Input, Box, TableContainer, Table, TableBody } from "@mui/material";
import { Search } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useState } from "react";
import useFeedTwists from "../../../hooks/useFeedTwists";
import SearchResult from "./SearchResult";
import SearchResultDialog from "../Dialog/SearchResultDialog";
const SearchBar = ({ userId }) => {
  const [twists] = useFeedTwists(userId);
  const [search, setSearch] = useState("");
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [content, setContent] = useState();

  const handleOpenDialog = (content) => {
    setContent(content);
    setOpenDialog(true);
    setSuggestionsOpen(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleSearchPhrase = (e) => {
    setSearch(e.target.value);
    setSuggestionsOpen(true);
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Input
          fullWidth
          placeholder="Recherche"
          disableUnderline
          startAdornment={<Search />}
          value={search}
          size="medium"
          sx={{
            backgroundColor: "#ededed",
            padding: 0.5,
            paddingLeft: 2,
            borderRadius: 30,
            boxSizing: "border-box",
          }}
          onChange={handleSearchPhrase}
        />
      </Grid>
      <Grid item>
        {suggestionsOpen ? (
          <Box
            sx={{
              position: "absolute",
              width: "32%",
              marginLeft: 1,
              marginTop: 0.3,
              overflow: "hidden",
              padding: 2,
              backgroundColor: "#f7f7f7",
              borderRadius: 3,
              zIndex: suggestionsOpen ? 2000 : 0,
            }}
          >
            <TableContainer>
              <Table>
                <TableBody>
                  {twists
                    .filter((item) => {
                      return item.content
                        .toLowerCase()
                        .includes(search.toLowerCase());
                    })
                    .map((item, index) => {
                      return (
                        <SearchResult
                          content={item}
                          key={item._id}
                          setContent={handleOpenDialog}
                        ></SearchResult>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          <></>
        )}
        <SearchResultDialog
          content={content}
          userId={userId}
          openResultDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
        ></SearchResultDialog>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
