

const LinksSocialMedia = {
  github: "DaveSantiago96",
  facebook: "#",
  instagram: "davees_93",
  linkedin: "in/davison-santiago-5527641a3/"
}

function changeSocialMediaLinks(){
 
for(let li of socialLinks.children) {
  const social = li.getAttribute('class')

  li.children[0].href =`https://${social}.com/${LinksSocialMedia[social]}`
}

}

changeSocialMediaLinks()


function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json()) 
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html.url
    userImage.scr = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()
