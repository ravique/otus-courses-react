import React, {Component} from "react";

export default class CoursesBlock extends Component {
    render() {
        return (
            this.props.coursesData.map(({name, description, lecturers}, i) => (
                    <div className="block" key={i}>
                        <h2 className="block__name">{name}</h2>
                        <span className="block__description">{description}</span>
                        <span className="block__lecturer">Lecturers: {
                            lecturers.map(
                                (lecturer, i) => [i > 0 && ", ", lecturer.name])
                        }
                        </span>
                    </div>
                )
            )
        )
    }
}