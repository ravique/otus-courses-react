import React, {Component} from "react";

class LecturersBlock extends Component {

    render() {
        return (
            this.props.lecturersData.map(({first_name, last_name, bio}, i) =>
                <div className="block block_full_width" key={i}>
                    <h2 className="block__name">{first_name} {last_name}</h2>
                    <span className="block__description">{bio}</span>
                </div>
            )
        )
    }
}

export default LecturersBlock;