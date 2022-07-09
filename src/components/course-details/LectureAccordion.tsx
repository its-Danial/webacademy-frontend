import { FC } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { lectureType } from "../../model/lecture";

type LectureAccordionProps = {
  lectures: lectureType[] | undefined;
  lectureIsLoading: boolean;
};

const LectureAccordion: FC<LectureAccordionProps> = (props) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel0");

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {props.lectures?.map((lecture, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h4>
              {lecture.title} #{index + 1}
            </h4>
            <p>{lecture.lectureDuration}</p>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{lecture.courseLectureDescription}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default LectureAccordion;

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
    padding: 2,
  },
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
  backgroundColor: "#F7F9FA",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
    justifyContent: "space-between",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
