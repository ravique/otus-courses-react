import React, {Component} from "react";
import PreLoader from "../common/pre-loader";


class LecturersBlock extends Component {

    render() {

        const { lecturersData, isLoading } = this.props;

        const lecturers = lecturersData.map((lecturer, i) =>
                <div className="block block_full_width" key={i}>
                    <h2 className="block__name">{lecturer.first_name} {lecturer.last_name}</h2>
                    <span className="block__description">{lecturer.bio}</span>
                </div>
            );
        const content = isLoading ? <PreLoader/> : lecturers;

        return (
            content
        );

    }
}

export default LecturersBlock;