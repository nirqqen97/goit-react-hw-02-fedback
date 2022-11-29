import {Error} from './Notification.styled';

export const Notification = ({message}) =>{
    return <Error>{`${message}`}</Error>
}