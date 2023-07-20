import React, {ChangeEvent} from "react";
import s from "./ProfileStatus.module.css";


type PropsType = {
    status: string,
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}


class ProfileStatus extends React.Component<PropsType, StateType> {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            status: this.props.status
        };
    }

    activateEditMode = () => {
        this.setState({
            status: "",
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            status: "",
            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            editMode: true,
            status: e.target.value
        });
    }

    componentDidUpdate(prevProps: PropsType , prevState: StateType, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                editMode: true,
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "--------"}</span>
                    </div>
                ) : (
                    <div className={s.inputStatus}>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ProfileStatus;