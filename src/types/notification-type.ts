import {ImageSourcePropType} from 'react-native';

export type NotificationListType = {
  id: number;
  image: ImageSourcePropType;
  text: string;
  time: string;
  status: StatusType;
};

export type DActiveListType = {
  id: number;
  bgImage: ImageSourcePropType;
  title: string;
  textColor: string;
};

type StatusType = 'READ' | 'UNREAD';
