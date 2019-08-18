import React, {Component} from "react";


class CoursesBlock extends Component {

    render() {

        const { coursesData, isLoading } = this.props;

        const courses = coursesData.map((course, i) =>
            <div className="block" key={i}>
                <h2 className="block__name">{course.name}</h2>
                <span className="block__description">{course.description}</span>
                <span className="block__lecturer">Lecturers: {course.lecturers.map((lecturer, i) => [
                    i > 0 && ", ", lecturer.name
                ])}
                    </span>
            </div>);



        const loadingMessage = 'Courses are loading';

        return (
            [isLoading ? loadingMessage : courses]
        );

    }
}

export default CoursesBlock;