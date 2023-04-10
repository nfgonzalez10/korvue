import React, { useEffect, useState } from "react";
import { Header, Information, LoaderContainer } from "src/containers";
import { Orders } from "src/containers/Orders";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { fetchOrderData, fetchUserData } from "src/reducers";
const SummaryPage = () => {
  const dispatch = useAppDispatch();
  const { pending, error } = useAppSelector((state) => state.user);
  const [isAvailable, setIsAvailable] = useState(false);
  const [addOrder, setAddOrder] = useState(false);
  useEffect(() => {
    dispatch(fetchUserData());
    dispatch(fetchOrderData());
  }, [dispatch]);

  useEffect(() => {
    setIsAvailable(!pending && !error);
  }, [pending, error]);
  return (
    <div>
      {isAvailable && (
        <>
          <Header
            handleClick={() => {
              setAddOrder(true);
            }}
          />
          <Information />
          <Orders />
          {addOrder && <LoaderContainer close={() => setAddOrder(false)} />}
        </>
      )}
    </div>
  );
};

export default SummaryPage;
