import { Store } from "react-notifications-component";
import { NotificationPosition, NotificationStaus } from "../../utils/Constants";
type Props = {
    title?: any
    message?: any
    type?: any
    insert?: any
    container?: any
    duration?: any
}
const Notification = (props: Props) => {
    const { title, message, type = NotificationStaus.success, insert='top', container=NotificationPosition.topRight, duration = 2000 } = props
    return Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: insert,
        container: container,
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: duration,
            onScreen: true
        }
    });
}

export default Notification
