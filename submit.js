console.log("hi")

const videoLinkInput = document.querySelector('#video-link')
const videoPlayer = document.querySelector('#video-player')
const rankList = ['iron', 'bronze', 'silver','gold', 'platinum', 'diamond', 'ascendant', 'immortal', 'radiant']
const submitBtn = document.querySelector('#submit-btn')
const theForm = document.querySelector('#user-inp')
const fbElement = document.querySelector('p')

const SUBMIT_ENDPOINT = 'http://localhost:3000/api/submit-video'

videoLinkInput.addEventListener('change', (evt) => {
    if (!evt.currentTarget.value.includes("youtube.com/watch?v=")) {
      console.log("video must be a youtub elink")
      fbElement.innerText = "video must be a youtube link"
      fbElement.style.color = 'red'
      return
    }
    fbElement.innerText = ""
    const link = evt.currentTarget.value.replace("watch?v=", "embed/")
    console.log(link)
    videoPlayer.src = link
})

submitBtn.addEventListener('click', (e) => {
    console.log("hi")
    console.log(theForm[0].value)
    const newData  = {
        link: theForm[0].value.replace("watch?v=", "embed/"),
        creditedName: theForm[1].value,
        gameRank: theForm[2].value
    }

    fetch(SUBMIT_ENDPOINT, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(newData), // body data type must match "Content-Type" header
      })

    fbElement.innerText = "THANK YOU FOR YOUR SUMBITTION"
    fbElement.style.color = "green"
})

  

