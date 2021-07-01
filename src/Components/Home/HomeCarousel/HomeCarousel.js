// Import Card for list
import CarouselCardElement from "./CarouselCardElement";
// Import Hooks
import { useState, useEffect } from "react";
// Import Cascade id generator
import { v1 } from "uuid";
// Import Swiper(Order matters)
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "../../../style/swiper-bundle.css";
// Import Modal, Dialog
import { Dialog, Modal, TextField, Button } from "@material-ui/core";
import { CloseOutlined } from "@material-ui/icons";
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function HomeCarousel() {
  // Default List
  const [list, setList] = useState([]);
  useEffect(() => {
    setList([
      {
        question_id: 1,
        user: {
          profile_id: 211234,
          image_src: "",
          profile_link: "/",
        },
        question:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nisi vitae, aperiam quasi magni ipsa mollitia rem, perferendis eos earum in adipisci? Eveniet quo, dignissimos suscipit cumque aut minus aspernatur quidem consectetur!",
        reply_count: 0,
        view_count: 0,
      },
      {
        question_id: 2,
        user: {
          profile_id: 211234,
          image_src: "",
          profile_link: "/",
        },
        question:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nisi vitae, aperiam quasi magni ipsa mollitia rem, perferendis eos earum in adipisci? Eveniet quo, dignissimos suscipit cumque aut minus aspernatur quidem consectetur!",
        reply_count: 0,
        view_count: 0,
      },
      {
        question_id: 3,
        user: {
          profile_id: 211234,
          image_src: "",
          profile_link: "/",
        },
        question:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nisi vitae, aperiam quasi magni ipsa mollitia rem, perferendis eos earum in adipisci? Eveniet quo, dignissimos suscipit cumque aut minus aspernatur quidem consectetur!",
        reply_count: 0,
        view_count: 0,
      },
      {
        question_id: 4,
        user: {
          profile_id: 211234,
          image_src: "",
          profile_link: "/",
        },
        question:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nisi vitae, aperiam quasi magni ipsa mollitia rem, perferendis eos earum in adipisci? Eveniet quo, dignissimos suscipit cumque aut minus aspernatur quidem consectetur!",
        reply_count: 0,
        view_count: 0,
      },
      {
        question_id: 5,
        user: {
          profile_id: 211234,
          image_src: "",
          profile_link: "/",
        },
        question:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nisi vitae, aperiam quasi magni ipsa mollitia rem, perferendis eos earum in adipisci? Eveniet quo, dignissimos suscipit cumque aut minus aspernatur quidem consectetur!",
        reply_count: 0,
        view_count: 0,
      },
    ]);
  }, []);





  //ReplyDialogState
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState(null);
  // ViewModalState
  const [modalOpen, setmodalOpen] = useState(false);
  const [modalData, setmodalData] = useState(null);
  // DemoStatisticsModalState
  const [statisticsModalOpen, setStatisticsModalOpen] = useState(false);
  //Combine
  const functions = {
    closeDialog: () => {
      setDialogOpen(false);
    },
    openDialog: (data) => {
      if (data) {
        setDialogData(data);
        setDialogOpen(true);
      }
    },
    closeModal: () => {
      setmodalOpen(false);
    },
    openModal: (data) => {
      if (data) {
        setmodalData(data);
        setmodalOpen(true);
      }
    },
    openStatisticsModal: () => {
      setStatisticsModalOpen(true);
    }
  };







  return (
    <div className="carousel-wrapper">
      <h1>Ən çox baxılan sorğular:</h1>
      <Swiper
        spaceBetween={20}
        centeredSlides
        pagination={{ clickable: true, type: "progressbar" }}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
        }}
        breakpoints={{
          400: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
          800: { slidesPerView: 4 },
          1000: { slidesPerView: 5 },
        }}
      >



        <Modal
          open={modalOpen}
          closeAfterTransition
        >
          <div className="carousel-modal-content">
            <CloseOutlined
              onClick={functions.closeModal}
              className="carousel-modal-content-close"
            />
            <h3>Sualın tam mətni:</h3>
            <p>{modalData?.question}</p>
          </div>
        </Modal>



        <Dialog open={dialogOpen}>
          <div className="carousel-dialog-content">
            <CloseOutlined
              onClick={functions.closeDialog}
              className="carousel-modal-content-close"
            />
            <h3>Sual:</h3>
            <p>{dialogData?.question}</p>
            <TextField
              className="dialogReplyInput"
              multiline
              variant="outlined"
              label="Cavabınız"
              type="text"
            />
            <Button variant="contained">Göndər</Button>
          </div>
        </Dialog>



        <Modal
          open={statisticsModalOpen}
        >
          <div className="carousel-modal-content">
            <CloseOutlined
              onClick={()=>{setStatisticsModalOpen(false)}}
              className="carousel-modal-content-close"
            />
            <h3>Statistik məlumatlar demo versiya üçün aktiv deyil.</h3>
          </div>
        </Modal>



        {list && list.map((item) => {
          return (
            <SwiperSlide key={item.question_id || v1()}>
              <CarouselCardElement data={item} functions={functions} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
