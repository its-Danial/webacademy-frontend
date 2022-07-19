import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Box, Modal, Skeleton, Avatar } from "@mui/material";
import ReactPlayer from "react-player/youtube";
import notfoundSVG from "../../assets/not-found-svg.svg";
import {
  PlayArrow,
  FavoriteBorder,
  Star,
  AddShoppingCart,
  ShoppingCartCheckout,
  OndemandVideo,
  Favorite,
} from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { courseType } from "../../model/course";

type CourseInfoHeaderProps = {
  course: courseType | undefined;
  isLoading: boolean;
  mutationIsLoading: boolean;
  headerButtonType: string;
  showLoginAlter: boolean;
  showPurchaseAlter: boolean;
  authUserId: number;
  firstLectureId: number | undefined;
  studentHasLikedCourse: boolean | undefined;
  onAddToCartClick: () => void;
  onLikeClick: () => void;
};

const CourseInfoHeader: FC<CourseInfoHeaderProps> = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const onAddToCartClickHandler = () => {
    props.onAddToCartClick();
  };

  const onGoToCartClickHandler = () => {
    navigate(`/cart/${props.authUserId}`);
  };
  const onGoToCourseClickHandler = () => {
    navigate(`/course/${props.course?.courseId}/learn/lecture/`);
  };

  const onLikedClickHandler = () => {
    props.onLikeClick();
  };

  return (
    <>
      <div className="bg-black h-[32rem] flex sm:flex-row flex-col justify-between">
        <div className="text-white w-1/2 flex  items-center">
          <div className="my-24 mx-32 flex flex-col ">
            {props.isLoading ? (
              <Skeleton variant="text" className="bg-gray-500 h-20 w-full " />
            ) : (
              <h1 className="font-serif text-4xl">{props.course?.title}</h1>
            )}
            <div className="flex justify-between border-0 border-b-[1px] border-gray-600 border-solid pb-4">
              <div className="flex flex-col justify-between mt-3">
                {props.isLoading ? (
                  <Skeleton variant="text" className="bg-gray-500 w-[400px] h-7 mr-4" />
                ) : (
                  <p className="text-gray-300 font-bold underline underline-offset-4 ">
                    {props.course?.teacher.fullName}
                  </p>
                )}

                {props.isLoading ? (
                  <Skeleton variant="text" className="bg-gray-500  w-[300px] h-7" />
                ) : (
                  <Button
                    onClick={handleOpen}
                    startIcon={<PlayArrow />}
                    variant="outlined"
                    className="text-white normal-case border-white hover:bg-gray-700 rounded-none "
                  >
                    Preview
                  </Button>
                )}
              </div>
              <div>
                {props.isLoading ? (
                  <Skeleton className="bg-gray-500" animation="pulse" variant="circular">
                    <Avatar className="w-20 h-20 my-2" />
                  </Skeleton>
                ) : (
                  <img className="rounded-full w-20 my-2" src={props.course?.teacher.avatarPictureUrl} alt="" />
                )}
              </div>
            </div>
            {props.isLoading ? (
              <Skeleton variant="text" className="bg-gray-500  w-[300px] h-7 my-3" />
            ) : (
              <div
                className="flex flex-row relative py-5 items-center border-0 border-b-[1px] 
      border-gray-600 border-solid"
              >
                <div className="flex flex-col">
                  <div className="mr-10 flex flex-row justify-center">
                    <h2 className="text-2xl">{props.course?.courseRating}</h2>
                    <Star className="m-1 text-amber-300" />
                  </div>
                  <p className="text-sm font-bold text-gray-300 underline underline-offset-4">ratings</p>
                </div>
                <div>
                  <h2 className="text-2xl">{props.course?.courseInformation.totalDuration}hr</h2>
                  <p className="text-sm font-bold text-gray-300">total content</p>
                </div>
                <div className="absolute right-0">
                  <IconButton
                    onClick={onLikedClickHandler}
                    className={`border-solid border-2 hover:bg-gray-600 ${
                      props.studentHasLikedCourse ? "border-red-500" : "border-gray-200"
                    }`}
                    color="primary"
                    aria-label="heart"
                    size="small"
                  >
                    <Favorite className={`${props.studentHasLikedCourse ? "text-red-500" : "text-gray-200"}`} />
                  </IconButton>
                </div>
              </div>
            )}
            <div className="flex flex-row mt-5 justify-center">
              {props.headerButtonType === "add-to-cart" && (
                <div className="flex flex-col justify-center basis-1/2">
                  {props.isLoading ? (
                    <Skeleton variant="text" className="bg-gray-500  w-[80px] h-10" />
                  ) : (
                    <h2 className="mr-5 text-4xl font-serif">${props.course?.courseInformation.price}</h2>
                  )}
                </div>
              )}

              {/* Todo: this needs to change based on if the student has bought this course or not */}

              {props.headerButtonType === "add-to-cart" && (
                <LoadingButton
                  loading={props.mutationIsLoading}
                  onClick={onAddToCartClickHandler}
                  startIcon={<AddShoppingCart />}
                  loadingPosition="start"
                  className=" w-full normal-case h-14 rounded-none 
              bg-blue-700 disabled:text-gray-100 disabled:bg-gray-600"
                  variant="contained"
                  disableElevation
                >
                  Add to cart
                </LoadingButton>
              )}

              {props.headerButtonType === "go-to-course" && (
                <LoadingButton
                  onClick={onGoToCourseClickHandler}
                  loading={props.isLoading}
                  startIcon={<OndemandVideo />}
                  loadingPosition="start"
                  className=" w-full normal-case h-14 rounded-none 
                  bg-blue-700 disabled:text-gray-100 disabled:bg-gray-600"
                  variant="contained"
                  disableElevation
                >
                  Go to course
                </LoadingButton>
              )}

              {props.headerButtonType === "go-to-cart" && (
                <LoadingButton
                  onClick={onGoToCartClickHandler}
                  loading={props.isLoading}
                  startIcon={<ShoppingCartCheckout />}
                  loadingPosition="start"
                  className=" w-full normal-case h-14 rounded-none 
                  bg-blue-700 disabled:text-gray-100 disabled:bg-gray-600"
                  variant="contained"
                  disableElevation
                >
                  Go to cart
                </LoadingButton>
              )}
            </div>
            {props.showLoginAlter && (
              <div className="flex justify-end">
                <p className="text-red-500 text-xs mt-2">Please register or login to an existing account</p>
              </div>
            )}
            {props.showPurchaseAlter && (
              <div className="flex justify-end">
                <p className="text-red-500 text-xs mt-2">Please purchase the course first</p>
              </div>
            )}
          </div>
        </div>
        <div className="text-white w-1/2">
          <img
            // Note: can also try object-fill
            className="object-fill w-full h-full"
            src={props.course?.courseInformation?.coverImageUrl}
            onError={(e) => (e.currentTarget.src = notfoundSVG)}
            alt=""
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ReactPlayer width={750} height={450} url={props.course?.courseInformation.previewVideoUrl} />
        </Box>
      </Modal>
    </>
  );
};
export default CourseInfoHeader;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
};
