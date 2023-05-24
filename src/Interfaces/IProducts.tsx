import { ListRenderItemInfo } from "react-native"
import { RowMap } from "react-native-swipe-list-view"

export interface ItemsProps {
  data:any,RowMap?:{}
}

export interface ItemProps{
  id:string | Number[],
  name:string,
  image:string,
  description:string,
  price:number,
  countInStock:number,
  rating:number,
}