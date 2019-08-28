import React, {Component} from "react";
import PreLoader from "../common/pre-loader";


// const CoursesBlock = (coursesData, isLoading) => {
//     if(!isLoading) {
//         return (
//             coursesData.map((course, i) =>
//             <div className="block" key={i}>
//                 <h2 className="block__name">{course.name}</h2>
//                 <span className="block__description">{course.description}</span>
//                 <span className="block__lecturer">Lecturers: {course.lecturers.map(
//                     (lecturer, i) => [i > 0 && ", ", lecturer.name])}
//                     </span>
//             </div>)
//         )
//     } else {
//         return <PreLoader/>
//     }
// };

class CoursesBlock extends Component {

    render() {

        const lecturers = this.props.coursesData.map((course, i) =>
            <div className="block" key={i}>
                <h2 className="block__name">{course.name}</h2>
                <span className="block__description">{course.description}</span>
                <span className="block__lecturer">Lecturers: {course.lecturers.map((lecturer, i) => [
                    i > 0 && ", ", lecturer.name
                ])}
                </span>
            </div>);

        const content = this.props.isLoading ? <PreLoader/> : lecturers

        return (
            content
        );

    }
}


export default CoursesBlock;