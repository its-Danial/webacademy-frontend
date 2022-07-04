import { FC, useState } from "react";
import {
  Menu,
  IconButton,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

type ProgressMenuProps = {};

const ProgressMenu: FC<ProgressMenuProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          {/* TODO: update progress here */}
          <CircularProgress
            value={50}
            size={48}
            className="text-purple-600"
            variant="determinate"
            {...props}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <EmojiEventsOutlinedIcon className="text-gray-400" />
          </Box>
        </Box>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 2.0,
            p: 2.0,
            // for the arrow
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0.5,
              right: 14,
              width: 15,
              height: 15,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/*<p>Turn what you know into an <br/> opportunity*/}
        {/*    and reach millions <br/> around the world.</p>*/}
        <Typography
          sx={{ fontWeight: "bold", marginBottom: 2 }}
          align={"center"}
        >
          {/* TODO: make this dynamic */}
          39 of 64 complete.
        </Typography>
        <Typography variant="body2">
          Finish course to get your certificate
        </Typography>
      </Menu>
    </div>
  );
};

export default ProgressMenu;
