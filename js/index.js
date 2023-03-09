let searchUser = document.querySelector('#searchUser')
let searchBtn = document.querySelector('#searchBtn')
let uiProfile = new ui()

searchBtn.addEventListener('click', (e) => {
    let userName = searchUser.value
    if(searchUser != ''){
        fetch(`https://api.github.com/users/${userName}`)
        .then(result => result.json())
        .then(data => {            
            if(data.message == 'Not Found'){
                // showing alet
                uiProfile.showAlert()
            } else{
                // show profile
                uiProfile.showProfile(data)

            }
        })
    } else{
        // if user dont input any think
    }
})