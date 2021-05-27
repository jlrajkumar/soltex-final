
            
            
            var form = document.querySelector('form');
            document.querySelector('#contactus-form').addEventListener("submit",submitForm);

            function submitForm(e){
            e.preventDefault();

            // Form Submit STATUS & Form REFRESH
            var status =  document.getElementById('status');
        
            status.classList.add('success')
            status.innerHTML = `Thanks, Your request has been received ${fname}`;
            



            form.reset();

            
            
        }