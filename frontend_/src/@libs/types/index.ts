export interface IperfumeTypef{
  id?:string;
  name: string;
}
export interface IperfumeMarkf{
  id?:string;
  name: string;
}
export interface IperfumeBottlesizef{
  id?:string;
  name: string;
  make: IperfumeMarkf
}
export interface Iperfumef{
  perfumeprice: unknown;
  id?:string;
  name: string;
  description: string;
  photo: string;
  value: number;
  type: IperfumeTypef;
  bottlesize: IperfumeBottlesizef;
}
export interface IFilter {
 perfume?: IperfumeMarkf;
  startDate?: Date;
  endDate?: Date;
}