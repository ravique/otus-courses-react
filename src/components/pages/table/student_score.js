import React, {Component} from "react";

export default class StudentScore extends Component {

    render() {

        let {index, studentData: {avatar, full_name, average_score, email}} = this.props;
        let avatar_url;

        avatar_url = avatar ? avatar : 'https://i.pravatar.cc/150?img=' + index;

        return (
            <tr key={index}>
                <td className='students-score__row__cell'>
                    <img className='students-score__row__cell__avatar' alt={full_name} src={avatar_url}/>
                </td>
                <td className='students-score__row__cell'>
                    {full_name}
                </td>
                <td className='students-score__row__cell'>
                    {average_score}/5
                </td>
                <td className='students-score__row__cell'>
                    {email}
                </td>
            </tr>
        )
    }
}
