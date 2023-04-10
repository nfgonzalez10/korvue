export interface Order {
  id: number;
  order_id: number;
  sent_dt: string;
  sent_tm: string;
  subject: {
    title: string;
    email: string;
  };
  type: string;
}
export interface TypeOrder {
  sent: Array<Order>;
  errors: Array<Order>;
}
export interface Orders {
  orders_A: TypeOrder;
  orders_AA: TypeOrder;
  orders_AAA: TypeOrder;
  orders_B: TypeOrder;
  orders_C: TypeOrder;
}
