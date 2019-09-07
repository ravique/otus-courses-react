import React from "react";
import {CoursesContainer, LecturersContainer} from "../container/container";
import Button from "../button/button";
import Content from "../container/content";

const Home = () => (
    <Content>
        <h2>Courses:</h2>
        <CoursesContainer/>
        <Button url='/' text="Show more"/>
        <h2>Our lecturers</h2>
        <LecturersContainer/>
    </Content>
);

export default Home