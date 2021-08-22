var li = document.querySelectorAll('span')
console.log(li)
var info = ['Pavan','23','pavanguntupally12@gmail.com','kmm','449282310xxx']
document.body.style.fontStyle = 'Times New Roman'
for(i=0;i<li.length;i++)
{
    li[i].innerHTML = info[i]
}
var img = document.createElement('img')
img.src = "https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
img.style.width = '200px'
img.style.height = '200px'
document.body.appendChild(img)