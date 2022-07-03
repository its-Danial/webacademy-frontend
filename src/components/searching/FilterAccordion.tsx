import { FC, useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {
  Rating,
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

type FilterAccordionProps = {};

const FilterAccordion: FC<FilterAccordionProps> = (props) => {
  // Note: for filter rating
  const [filterValue, setFilterValue] = useState<number>(3.0);

  //Note: for Accordion open
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const onFilterChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterValue((prevState) => +(event.target as HTMLInputElement).value);
    console.log(filterValue);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleAccordionChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <h2>Rating</h2>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl>
          <RadioGroup
            value={filterValue}
            onChange={onFilterChangeHandler}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value={4.5}
              control={<Radio size="small" className="text-black" />}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="size-small"
                    defaultValue={4.5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <p className="text-sm mt-1 font-light ml-2">4.5 & up</p>
                </Box>
              }
            />
            <FormControlLabel
              value={4.0}
              control={<Radio size="small" className="text-black" />}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="size-small"
                    defaultValue={4.0}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <p className="text-sm mt-1 font-light ml-2">4.0 & up</p>
                </Box>
              }
            />
            <FormControlLabel
              value={3.5}
              control={<Radio size="small" className="text-black" />}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="size-small"
                    defaultValue={3.5}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <p className="text-sm mt-1 font-light ml-2">3.5 & up</p>
                </Box>
              }
            />
            <FormControlLabel
              value={3.0}
              control={<Radio size="small" className="text-black" />}
              label={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="size-small"
                    defaultValue={3.0}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <p className="text-sm mt-1 font-light ml-2">3.0 & up</p>
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>
      </AccordionDetails>
    </Accordion>
  );
};
export default FilterAccordion;

// Note: styles

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.divider}`,
  borderLeft: 0,
  borderRight: 0,
  width: 250,
  marginRight: 45,
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  padding: "0px 0px",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  marginBottom: 8,
  padding: 0,
}));
