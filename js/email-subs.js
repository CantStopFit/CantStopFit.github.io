const scriptURL = 'https://script.google.com/macros/s/AKfycbyKttRpEu4ZtBy9oY-eYFi2o0opmditJoQHIhuBNsCpCNvmQsH4_6l31AiFaxW3OeN2/exec'
        const form = document.forms['email-subscribers-form']
        const popup = document.getElementById('email-subcribers-form');
        const popupBackground = document.getElementById('email-subscribers-form-background');
        var EmailSubForm = document.getElementById("EmailSubForm");
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
            EmailSubForm.reset();
            window.location.replace("https://cantstopfit.github.io/");
        })

function bye() {
    document.getElementById('email-subscribers-form-background').style.display = 'none';
    document.getElementById('email-subcribers-form').style.display = "none";
}