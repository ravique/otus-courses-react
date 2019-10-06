import React, {Component} from "react";
import Content from "../../container/content";
import API from "../../../utils/API";
import PreLoader from "../../common/pre-loader";
import StudentScore from "./student_score";

class Table extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: true,
            errors: [],
        };

    }

    async componentDidMount() {
        try {
            let response = await API.get('table/');
            if (response.status === 200) {
                this.setState(
                    {
                        studentsData: response.data,
                        isLoading: false
                    }
                );
            }

        } catch (error) {

        }
    }

    render() {

        let content;
        content = this.state.isLoading ? <PreLoader/> : this.state.studentsData.map((studentData, i) => (
                <StudentScore index={i} studentData={studentData}/>
            )
        );

        return (
            <Content>
                <h1>Table:</h1>
                <table className='students-score'>
                    <tbody>
                    <tr className='students-score__header'>
                        <th>Avatar</th>
                        <th>Full name</th>
                        <th>Average score</th>
                        <th>Email</th>
                    </tr>
                    {content}
                    </tbody>
                </table>
            </Content>
        )
    }
}

export default Table;