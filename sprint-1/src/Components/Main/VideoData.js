
import Video1 from '../../Assets/Images/video-list-0.jpg'
import Video2 from '../../Assets/Images/video-list-1.jpg'
import Video3 from '../../Assets/Images/video-list-2.jpg'
import Video4 from '../../Assets/Images/video-list-3.jpg'
import Video5 from '../../Assets/Images/video-list-4.jpg'
import Video6 from '../../Assets/Images/video-list-5.jpg'
import Video7 from '../../Assets/Images/video-list-6.jpg'
import Video8 from '../../Assets/Images/video-list-7.jpg'
import Video9 from '../../Assets/Images/video-list-8.jpg'
import {v4 as uuidv4} from 'uuid'
import commentsarr from './Comments'

const videoData ={
'mainVideo' :{
    id: uuidv4(),
    title: 'BMX Rampage: 2018 Highlights',
    description: "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    channel: 'By Red Cow',
    image: Video1,
    views: '1,001,023',
    likes: '110,985',
    duration: '0:00/0:42',
    video: '',
    timestamp: '12/18/2018',
    comments: {commentsarr} 
},

'sideVideo' :[{
    id: uuidv4(), 
    title: 'BMX Rampage: 2018 Highlights', 
    channel: 'By Red Cow', 
    image: Video1
},
{
    id: uuidv4(), 
    title: 'Become A Travel Pro In One Easy Lesson', 
    channel: 'Scotty Cranmer', 
    image: Video2 
},
{
    id: uuidv4(), 
    title: 'Les Houches The Hidden Gem Of The Chamonix', 
    channel: 'Scotty Cranmer', 
    image: Video3
},
{
    id: uuidv4(), 
    title: 'Travel Health Useful Medical Information For', 
    channel: 'Scotty Cranmer', 
    image: Video4 
},
{
    id: uuidv4(), 
    title: 'Cheap Airline Tickets Great Ways To Save', 
    channel: 'Emily Harper', 
    image: Video5 
},
{
    id: uuidv4(), 
    title: 'Take A Romantic Break In A Boutique Hotel', 
    channel: 'Ethan Owen', 
    image: Video6 
},
{
    id: uuidv4(), 
    title: 'Choose The Perfect Accommodations', 
    channel: 'Lydia Perez', 
    image: Video7 
},
{
    id: uuidv4(), 
    title: 'Cruising Destination Ideas', 
    channel: 'Timothy Austin', 
    image: Video8 
},
{
    id: uuidv4(), 
    title: 'Train Travel On Track For Safety', 
    channel: 'Scotty Cranmer', 
    image: Video9 
}]
}

export default videoData;