import React, { useCallback, useEffect, useState } from "react";
import Container from "../layout/container/Container";
import Content from "../layout/Content/Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import styles from "./ListTree.module.scss";
import Slide from "./Slide/Slide";
import DUMMY_DATA from "../DummyData/DUMMY_DATA";
import { useDispatch } from "react-redux";
import { wishListActions } from "../store/wish-list";
SwiperCore.use([Navigation, Pagination]);

const ListTree = () => {
  const [slide, setSlide] = useState([]);
  const [type, setType] = useState("indoor");
  const [filterList, setFilterList] = useState([]);
  const dispatch = useDispatch();
  const filterListItem = useCallback(
    (type) => {
      const newValue = slide.filter((item) => {
        return item.type === type;
      });
      return newValue;
    },
    [slide]
  );
  useEffect(() => {
    // fake data
    // fetch ... .then()
    const timeFake = setTimeout(() => {
      setSlide(DUMMY_DATA);
      setFilterList(DUMMY_DATA);
    }, 1000);
    // we can fetch wishlist in here
    return () => {
      clearTimeout(timeFake);
    }
  }, []);
  useEffect(() => {
    const newList = filterListItem(type);
    setFilterList(newList);
  }, [filterListItem, type]);
  const addToWishList = (product) => {
    dispatch(wishListActions.addToWishList(product));
  };
  return (
    <Content>
      <Container aos='fade-up'>
        <h3 className={`text-center ${styles.title}`}>Perfect Plants</h3>
        <ul className={styles.options}>
          <li
            className={type === "indoor" ? styles.active : ""}
            onClick={() => setType("indoor")}
          >
            Indoor plants
          </li>
          <li
            className={type === "outdoor" ? styles.active : ""}
            onClick={() => setType("outdoor")}
          >
            Outdoor plants
          </li>
          <li
            className={type === "veggies" ? styles.active : ""}
            onClick={() => setType("veggies")}
          >
            Herbs + Veggies
          </li>
        </ul>
        <Swiper

          className={styles.swiper}
          breakpoints={{
            200: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
        >
          {filterList.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Slide
                  name={product.name}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  type={product.type}
                  id={product.id}
                  addtoWishList={addToWishList}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Content>
  );
};

export default ListTree;
