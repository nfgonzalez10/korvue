export interface UserInterface {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  birth_date: string;
  home_phone: string;
  mobile_phone: string;
  work_phone: string;
  email: string;
  activity: {
    sms: number;
    email: number;
    orders: number;
  };
  carrier_status: {
    since: string;
    status: string;
  };
}
