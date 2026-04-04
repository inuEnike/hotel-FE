import React from 'react';
import TopNav from "@/app/(main)/admin/dashboard/_component/TopNav";
import Header from "@/app/(main)/admin/dashboard/_component/Header";
import StatOverview from "@/app/(main)/admin/dashboard/_component/StatOverview";
import AvailableRooms from "@/app/(main)/admin/dashboard/_component/AvailableRooms";


const Home = () => {
    return (
        <>
            <TopNav/>
            <Header/>
            <StatOverview/>
            <AvailableRooms/>
        </>
    );
};

export default Home;