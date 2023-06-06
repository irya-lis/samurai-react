import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css"


const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
        }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div className={s.profileStatus}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "--------"}</span>
            </div>
            }
            {editMode &&
            <div className={s.inputStatus}>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                />

            </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
// class ProfileStatus extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             editMode: false,
//             status: this.props.status
//         };
//     }
//
//     activateEditMode = () => {
//         this.setState({
//             editMode: true
//         });
//     }
//
//     deactivateEditMode = () => {
//         this.setState({
//             editMode: false
//         });
//
//         this.props.updateStatus(this.state.status);
//     }
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.target.value
//         });
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         if(prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//     render() {
//         return (
//             <div className={s.profileStatus}>
//                 {!this.state.editMode ? (
//                     <div>
//                         <span onDoubleClick={this.activateEditMode}>{this.props.status || "--------"}</span>
//                     </div>
//                 ) : (
//                     <div className={s.inputStatus}>
//                         <input
//                             onChange={this.onStatusChange}
//                             autoFocus={true}
//                             onBlur={this.deactivateEditMode}
//                             value={this.state.status}
//                         />
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

