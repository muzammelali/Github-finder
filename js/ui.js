class ui{
    constructor(){
        this.profile = document.querySelector('#profile')
    }

    showProfile(user){
        this.clearAlert()
        this.profile.innerHTML = `
        <div class="card mt-3">
        <div class="card-body">
          <div class="row">

            <div class="col-md-3">
              <img src="${user.avatar_url}" alt="avater" class="img-fluid">
              <a href="${user.html_url}" class="btn btn-primary mt-3">View Profile</a>
            </div>
            <div class="col-md-9">
              <span class="badge bg-primary">Public rep : ${user.public_repos}</span>
              <span class="badge bg-secondary">Public Gists : ${user.public_gists}</span>
              <span class="badge bg-success">Followers : ${user.followers}</span>
              <span class="badge bg-info">Following : ${user.following}</span>
              <br><br>
              
              <ul class="pl-0">
                <li class="list-group-item">Company : ${user.company}</li>
                <li class="list-group-item">Website : ${user.blog}</li>
                <li class="list-group-item">Location : ${user.location}</li>
                <li class="list-group-item">Member since : ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
    }
    clearUser(){
        this.profile.innerHTML = ''
    }
    showAlert(){
        this.clearAlert()
        let CreateDiv = document.createElement('div')
        CreateDiv.innerHTML = `<div class="container alertUser"><button type="button" class="btn btn-warning mt-2 w-100">Input a valid user</button>
        </div>`
        let searchContainer = document.querySelector('.searchContainer')
        searchContainer.parentNode.insertBefore(CreateDiv,searchContainer)
        this.clearUser()
    }
    clearAlert(){
        let alertUser = document.querySelector('.alertUser')
        if(alertUser){
            alertUser.remove()
        }
    }
}