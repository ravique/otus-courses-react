import React, {Component} from 'react';
import API from "../../utils/API";
import PreLoader from "../../common/pre-loader";
import CoursesBlock from "./courses-block";

export default class CoursesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            coursesData: []
        }
    }

    render() {
        const content = this.state.isLoading ? <PreLoader/> : <CoursesBlock coursesData={this.state.coursesData}/>;

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
            }
        )
    }
}