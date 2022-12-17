import PropTypes from "prop-types";
import {Error} from './Notification.styled';

export const Notification = ({message}) =>{
    return <Error>{`${message}`}</Error>
}


Notification.propTypes = {
    message : PropTypes.string.isRequired
}