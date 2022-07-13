import { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "@mui/material/styles";
import { ArrowForwardIosSharp, PlayCircle } from "@mui/icons-material";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { lectureType } from "../../model/lecture";

type LectureAccordionProps = {
  lectures: lectureType[] | undefined;
  onWatchLecture: (courseId: number) => void;
};

const LectureAccordion: FC<LectureAccordionProps> = (props) => {
  const [expanded, setExpanded] = useState<string | false>("panel0");

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {props.lectures?.map((lecture, index) => (
        <Accordion key={uuidv4()} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <h4 className="text-base">
              {lecture.title} #{index + 1}
            </h4>
            <p className="text-xs">{lecture.lectureDuration}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex items-center justify-between mb-5">
              <div>
                <input
                  readOnly
                  className="align-middle mr-3 relative accent-black w-4 h-4"
                  type="checkbox"
                  checked={true}
                />
                <span
                  onClick={() => props.onWatchLecture(lecture.courseLectureId)}
                  className="font-semibold text-sm cursor-pointer text-purple-600 hover:text-purple-800 ml-1"
                >
                  Watch Lecture
                </span>
              </div>
              <PlayCircle className="w-5 h-5 text-gray-500" />
            </div>
            <p className="text-sm">{lecture.courseLectureDescription}</p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default LectureAccordion;

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
      padding: 2,
    },
    "&:before": {
      display: "none",
    },
  })
);
const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharp sx={{ fontSize: "0.9rem" }} />} {...props} />
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
