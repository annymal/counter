

let count= 0;
let value = document.querySelector('#value');
let btn = document.querySelectorAll('.btn');
btn.forEach(
    function (btn){
        btn.addEventListener('click', function (el){
           const styles = el.currentTarget.classList;
            if (styles.contains('increase')){
                count++;
            }
            else if (styles.contains('decrease')){
                count--;
            }
            else{
                count = 0;
            }
            value.textContent = count;
        })
    }
)
