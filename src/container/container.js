import React, {Component} from "react";
import API from '../utils/API';
import CoursesBlock from '../block/courses-block';
import LecturersBlock from '../block/lecturers-block';
import Button from "../button/button";


class CoursesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            coursesData: []
        }
    }

    render() {
        return (
            <div className="container">
                <CoursesBlock coursesData={this.state.coursesData} isLoading={this.state.isLoading}/>
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
        return (
            <div className="container">
                <LecturersBlock lecturersData={this.state.lecturersData} isLoading={this.state.isLoading}/>
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
                <h2>Courses:</h2>
                <CoursesContainer/>
                <Button url='/' text="Show more"/>
                <h2>Our lecturers</h2>
                <LecturersContainer/>
            </div>
        )
    }
}

export default Content;