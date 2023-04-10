import React, { useEffect, useState } from "react";
import { Tabs, Table, Switch, Loader } from "src/components";
import { useAppSelector } from "src/hooks";
import "./Orders.scss";

const Orders = () => {
  const HEADERS_TABLE = [
    "Date & Time",
    "Subject",
    "Communications Type",
    "# Order",
  ];
  const orders = useAppSelector((state) => state.orders.orders);
  const switchState = useAppSelector((state) => state.switch);
  const [arrayOrders, setArrayOrders] = useState<Array<string>>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [filter, setFilters] = useState<"sent" | "errors">("sent");

  useEffect(() => {
    setShowLoader(switchState.pending);
    setFilters(switchState.currentValue);
  }, [switchState]);

  useEffect(() => {
    if (!orders) return;
    const ordersArray = Object.keys(orders ?? {});
    setArrayOrders(ordersArray);
  }, [orders]);

  useEffect(() => {
    if (arrayOrders.length <= 0) return;
    const defaultTab = Math.floor((arrayOrders.length - 1) / 2);
    setActiveTab(arrayOrders[defaultTab]);
  }, [arrayOrders]);
  return orders && activeTab ? (
    <div className="orders">
      <div className="orders__tabs">
        <Tabs
          activeTab={activeTab}
          tabs={arrayOrders}
          setActiveTab={(tab) => {
            setActiveTab(tab);
          }}
        />
      </div>
      <div className="orders__table">
        <div className="orders__table--title">
          <div className="orders__switch">
            <Switch />
          </div>
          <span className="orders__title">{"Recent Orders"}</span>
        </div>
        {!showLoader &&
        orders[activeTab as keyof typeof orders]?.[filter]?.length > 0 ? (
          <Table
            headers={HEADERS_TABLE}
            orders={orders[activeTab as keyof typeof orders]?.[filter]}
          />
        ) : (
          <div className="orders__results">
            {showLoader && <Loader />}
            {!showLoader &&
              (orders[activeTab as keyof typeof orders]?.[filter]?.length ===
                0 ||
                !orders[activeTab as keyof typeof orders]?.[filter]
                  ?.length) && (
                <span className="orders__noContent">{"No items"}</span>
              )}
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Orders;
