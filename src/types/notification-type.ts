import {ImageSourcePropType} from 'react-native';

export type NotificationListType = {
  id: number;
  image: ImageSourcePropType;
  text: string;
  time: string;
  status: StatusType;
};

type StatusType = 'READ' | 'UNREAD';
