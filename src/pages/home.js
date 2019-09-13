import React from "react";
import Button from "../button";
import Content from "../container/content";
import CoursesContainer from "./courses/courses_container";
import LecturersContainer from "./lecturers";

const Home = () => (
    <Content>
        <h2>Our courses</h2>
        <CoursesContainer/>
        <Button url='/all_courses' text="Show more"/>
        <h2>Our lecturers</h2>
        <LecturersContainer/>
    </Content>
);

export default Home