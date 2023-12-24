import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Domains } from "../data/Domains";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Domain = ({ data, setData }) => {
  return (
    <>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="demo-multiple-chip-label">
          Domain
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={data.domains}
          onChange={(e) =>
            setData({
              ...data,
              domains:
                typeof e.target.value === "string"
                  ? e.target.value.split(",")
                  : e.target.value,
            })
          }
          input={<OutlinedInput id="select-multiple-chip" label="AddOns" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, maxHeight:"70px", overflowY:"scroll" }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {Domains.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default Domain;
