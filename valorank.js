// const v1 =  {
//     link: 'https://www.youtube.com/embed/dcAdHSw3VXc?si=jz_4wQZXOnnbWMQ8',
//     creditedName: 'Peter',
//     gameRank: 'dia'
// }


const SERVER_URL = 'http://localhost:3000/api/videos'

let videoCounter = 0

const video = document.querySelector('#theVideo')
const submitBtn = document.querySelector('#submitBtn')

let videoList = []

fetch(SERVER_URL)
    .then(res => res.json())
    .then(videos => {
        videoList = videos  
        
        for(let i =0; i < videoList.length; i++) {
            const randomIndex = Math.floor(Math.random() * videoList.length)
            const temp = videoList[i]
            videoList[i] = videoList[randomIndex]
            videoList[randomIndex] = temp
        }
        
        video.src = videoList[0]['link']
    })

// for(let i = 0; i < 3; i++) {
//     ,
//         // if (newVideo in videoList) {
//         //     videoList.push(newVideo)
//         // }

        
//     }



submitBtn.addEventListener('click', function() {
    const currentChecked = document.querySelector("input[type='radio'][name='rank']:checked")
    fetch(SERVER_URL)
        .then(res => res.json())
        .then(data => {

            if (videoList[videoCounter]["gameRank"] === currentChecked.id) {
                alert("correct")
            }
            else {
                alert('wrong one!!')
            }
            
            videoCounter += 1

            video.src = videoList[videoCounter]["link"]
            currentChecked.checked = false
        })

    
    
    
    
})