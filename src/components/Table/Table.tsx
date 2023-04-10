import moment from "moment";
import React from "react";
import { Order } from "src/interfaces";
import { Button } from "src/components";
import "./Table.scss";
interface ITable {
  headers: Array<string>;
  orders: Array<Order>;
}

const Table: React.FC<ITable> = ({ headers, orders }) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          {headers?.map((header: string, index: number) => {
            return (
              <th
                key={`${header} - ${index}`}
                className={`table__row table__row--header ${
                  index === 0 ? "table__row--padding" : ""
                }`}>
                {header}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="table__body">
        {orders?.map((order, index) => {
          const isOdd = index % 2 !== 0;
          return (
            <tr
              key={index}
              className={`table__row table__body ${
                isOdd ? "table__row--gray" : ""
              }`}>
              <td className="table__row--padding">
                <div className="table__row--double">
                  <span className="table__row--letterXL">
                    {moment(order.sent_dt).format("ddd, MMM DD")}
                  </span>
                  <span>
                    {moment(order.sent_tm, "HH:mm:ss").format("h:mm A")}
                  </span>
                </div>
              </td>
              <td>
                <div className="table__row--double">
                  <span className="table__row--letterXL">
                    {order.subject.title}
                  </span>
                  <span>{order.subject.email}</span>
                </div>
              </td>
              <td>{order.type}</td>
              <td>{order.order_id}</td>
              <td className="table__row--button">
                <Button table text="resend" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
