import React from 'react'
import Slider from '../Widgets/Slider/Slider'
import NewsList from '../Widgets/NewsList/NewsList'
import VideosList from '../Widgets/VideosList/VideoList'

const Home =()=> {
    return (
        <div>
            <Slider 
            type ="Featured"
            start = {0}
            end = {3} 
            settings={{
                dots: false
            }}/>
            <NewsList 
            type ="card"
            start = {0}
            amount = {3} />
             <VideosList 
            type ="card"
            title={true}
            loadmore={true}
            start = {0}
            amount = {3} />
        </div>
    )
}

export default Home;