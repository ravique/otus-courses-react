import React, {Component} from "react";

import API from "../../../utils/API";
import LecturersBlock from "./lecturers-block";
import PreLoader from "../../common/pre-loader";


export default class LecturersContainer extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: true,
            lecturersData: []
        }
    }

    render() {
        const content = this.state.isLoading ? <PreLoader/> :
            <LecturersBlock lecturersData={this.state.lecturersData}/>;

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