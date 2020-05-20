import {v4 as uuidv4} from 'uuid'

let commentsarr = [
    {   
        'id': uuidv4(),
        'name': "Theodore Duncan",
        'timestamp': "11/15/2018",
        'comment':"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
    },
    {   
        'id': uuidv4(),
        'name': "Gary Wong",
        'timestamp': "12/18/2018",
        'comment':"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
    },
    {   
        'id': uuidv4(),
        'name': "Michael Lyons",
        'timestamp': "12/18/2018",
        'comment':"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
    }
];

//tried to be more specific in terms of grmmer to make interval = 1 and change it to singular from plural but got js errors.

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds";
    
  }
  
  let timeNow = commentsarr.map(tim =>{
           let time = (new Date(tim.timestamp)).getTime();
              let curr = timeSince(time);
                  console.log(curr);
                      tim.timestamp = curr;
                      return tim.timestamp;
  })

 console.log(timeNow);
export default commentsarr;
