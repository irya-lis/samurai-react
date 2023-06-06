import React from "react";
import s from "./ProfileStatus.module.css"

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            status: this.props.status
        };
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });

        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
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