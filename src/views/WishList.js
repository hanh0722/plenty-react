import React, { useEffect, useMemo, useState } from 'react';
import { useRouteMatch, Redirect, useLocation } from 'react-router-dom';
import WishListComponent from '../components/WishListComponent/WishListComponent';
import Grid from '../components/UI/Grid/Grid';
import styles from '../components/WishListComponent/WishListComponent.module.scss';
import Container from '../components/layout/container/Container';
import HeaderPage from '../components/HeaderPage/HeaderPage';
import { useDispatch, useSelector } from 'react-redux';
import { NOT_FOUND, SHOP } from '../components/link/link';
import RenderSkeletonProduct from '../util/RenderSkeletonProduct';
import ChooseItemPerpage from '../components/ChooseItemPerpage/ChooseItemPerpage';
import nonAccentVietnamese from '../components/removeUnicode/removeUnicode';
import { getWishListOfUser } from '../components/store/WishList/wishlist-slice';
import Pagination from '../components/Pagination/Pagination';
const WishList = () => {
    const [perPage, setPerPage] = useState(8);
    const route = useRouteMatch();
    const dispatch = useDispatch();
    const location = useLocation();
    const wishList = useSelector(state => state.wishlist);
    const isAuth = useSelector(state => state.isAuth.isLoggedIn);
    const { wish_list, isError, isLoading, total_documents } = wishList;
    const allQuery = useMemo(() => {
        const params = new URLSearchParams(location.search);
        const page = params.get('page');
        return +page || 1;
    }, [location.search]);
    useEffect(() => {
        dispatch(getWishListOfUser(perPage, allQuery));
    }, [dispatch, allQuery, perPage]);
    return (
        <>
            {(!isAuth || isError) && <Redirect to={NOT_FOUND} />}
            <HeaderPage title="WishList" paths={[
                {
                    name: "WishList",
                    link: route.path
                }
            ]} />
            <Container>
                <ChooseItemPerpage defaultColumn={8} setColumnPerPage={setPerPage}/>
                <Grid className={styles.grid}>
                    {isLoading && RenderSkeletonProduct(8)}
                    {!isLoading && wishList?.wish_list?.length > 0 && wish_list?.map(item => {
                        return <WishListComponent
                            key={item?._id}
                            imageUrl={item?.images.urls[0]}
                            price={item?.last_price}
                            name={item?.title} id={item?._id}
                            isWishList={true}
                            url={`${SHOP}/${nonAccentVietnamese(item?.title)}?id=${item?._id}`} />
                    })}
                </Grid>
                {!isLoading && wish_list && total_documents && <Pagination perPage={perPage} currentPage={allQuery} totalPage={total_documents}/>}
            </Container>
        </>
    )
}

export default WishList;