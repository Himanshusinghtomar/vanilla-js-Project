let count = 0;
const val = document.querySelector('#val');
const btn = document.querySelectorAll('.btn');

btn.forEach((btn) => {
    
    btn.addEventListener( "click",(e) =>{
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease'))
        {
            count--;
        }
        else if(styles.contains('reset'))
        {
            count = 0;
        }
        else
        {
            count++;
        }
        if(count > 0)
        {
            val.style.color = "green";
        }
        if(count < 0)
        {
            val.style.color = "red";
        }
        if(count === 0)
        {
            val.style.color = "#222";
        }
        val.textContent = count;
    })
})