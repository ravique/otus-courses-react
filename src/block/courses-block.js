import React, {Component} from "react";

class CoursesBlock extends Component {
    render() {
        return (
            this.props.coursesData.map((course, i) => (
                <div className="block" key={i}>
                    <h2 className="block__name">{course.name}</h2>
                    <span className="block__description">{course.description}</span>
                    <span className="block__lecturer">Lecturers: {course.lecturers.map(
                        (lecturer, i) => [i > 0 && ", ", lecturer.name])}</span>
                </div>
                )
            )
        )
    }
}

export default CoursesBlock;