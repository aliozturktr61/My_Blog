/* Sayfa aşağı yukarı kaydırılırken active class eklenip kaldırılıyor */
const targets = document.querySelectorAll('.target')


const options = {
   /* sayfa içerisinde gösterilme oranı */
    threshold:0.3
}

const callBack = (entries)=>{
   entries.forEach((entry)=>{
      if(entry.isIntersecting){
         entry.target.classList.add('active')
      }
      else{
         entry.target.classList.remove('active')
      }
   })
}

var observer = new IntersectionObserver(callBack, options);
targets.forEach((target)=>{
   observer.observe(target)
})