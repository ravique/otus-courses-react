import React, {Component} from "react";
import API from '../utils/API';
import CoursesBlock from '../block/courses-block';
import LecturersBlock from '../block/lecturers-block';
import PreLoader from "../common/pre-loader";

class CoursesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            coursesData: []
        }
    }

    render() {
        const content = this.state.isLoading ? <PreLoader/> : <CoursesBlock coursesData={this.state.coursesData}/>

        return (
            <div className="container">
                {content}
            </div>
        )
    }

    async componentDidMount() {
        let coursesData = await API.get('course');
        this.setState({
            coursesData: coursesData.data.objects,
            isLoading: false
        })
    }
}


class LecturersContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            lecturersData: []
        }
    }

    render() {
        const content = this.state.isLoading ? <PreLoader/> : <LecturersBlock lecturersData={this.state.lecturersData}/>

        return (
            <div className="container">
                {content}
            </div>
        )

    }

    async componentDidMount() {
        let coursesData = await API.get('lecturer');
        this.setState({
            lecturersData: coursesData.data.objects,
            isLoading: false
        })
    }
}

class Content extends Component {
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        )
    }
}

export {Content, CoursesContainer, LecturersContainer};